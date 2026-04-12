const fs = require('fs');
const path = require('path');
const P = require('pino');
const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  DisconnectReason,
} = require('@whiskeysockets/baileys');

function loadEnv(file = '.env') {
  const env = {};
  if (!fs.existsSync(file)) return env;
  for (const ln of fs.readFileSync(file, 'utf8').split('\n')) {
    const line = ln.trim();
    if (!line || line.startsWith('#')) continue;
    const i = line.indexOf('=');
    if (i < 0) continue;
    env[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return env;
}

const env = { ...process.env, ...loadEnv(path.join(__dirname, '.env')) };
const ENABLED = String(env.ENABLED || 'false').toLowerCase() === 'true';
if (!ENABLED) {
  console.log('[welcome-worker] ENABLED=false (safe mode). Tidak dijalankan agar tidak bentrok.');
  process.exit(0);
}

const SESSION_DIR = env.SESSION_DIR || './session';
const STATE_DIR = env.STATE_DIR || './state';
const LOG_DIR = env.LOG_DIR || './logs';
const RETRY_MAX = Number(env.RETRY_MAX || 3);
const RETRY_DELAY_MS = Number(env.RETRY_DELAY_MS || 1500);
const GROUP_ALLOWLIST = String(env.GROUP_ALLOWLIST || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);
const TEMPLATE = env.WELCOME_TEMPLATE || 'Assalamu\'alaikum. Selamat bergabung di grup ini, {name}.';

for (const d of [SESSION_DIR, STATE_DIR, LOG_DIR]) fs.mkdirSync(path.resolve(__dirname, d), { recursive: true });
const SEEN_FILE = path.resolve(__dirname, STATE_DIR, 'seen.json');
const AUDIT_FILE = path.resolve(__dirname, LOG_DIR, 'join-audit.jsonl');

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }
function nowIso() { return new Date().toISOString(); }

let seen = {};
if (fs.existsSync(SEEN_FILE)) {
  try { seen = JSON.parse(fs.readFileSync(SEEN_FILE, 'utf8')); } catch { seen = {}; }
}

function saveSeen() {
  fs.writeFileSync(SEEN_FILE, JSON.stringify(seen, null, 2));
}

function audit(obj) {
  fs.appendFileSync(AUDIT_FILE, JSON.stringify({ ts: nowIso(), ...obj }) + '\n');
}

function key(groupJid, participantJid) {
  const minute = Math.floor(Date.now() / 60000);
  return `${groupJid}|${participantJid}|${minute}`;
}

async function sendWithRetry(sock, groupJid, text, mentions = []) {
  let lastErr = null;
  for (let i = 1; i <= RETRY_MAX; i++) {
    try {
      await sock.sendMessage(groupJid, { text, mentions });
      return { ok: true, attempt: i };
    } catch (e) {
      lastErr = e;
      await sleep(RETRY_DELAY_MS * i);
    }
  }
  return { ok: false, error: String(lastErr || 'unknown') };
}

async function start() {
  const { state, saveCreds } = await useMultiFileAuthState(path.resolve(__dirname, SESSION_DIR));
  const { version } = await fetchLatestBaileysVersion();

  const sock = makeWASocket({
    version,
    auth: state,
    printQRInTerminal: true,
    logger: P({ level: 'silent' }),
    browser: ['SAMI Welcome Worker', 'Chrome', '1.0.0'],
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', ({ connection, lastDisconnect }) => {
    if (connection === 'open') {
      console.log('[welcome-worker] connected');
      audit({ event: 'connection_open' });
    }
    if (connection === 'close') {
      const code = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = code !== DisconnectReason.loggedOut;
      audit({ event: 'connection_close', code, shouldReconnect });
      if (shouldReconnect) start();
      else console.log('[welcome-worker] logged out. clear session and re-pair.');
    }
  });

  sock.ev.on('group-participants.update', async (update) => {
    try {
      const { id: groupJid, participants = [], action } = update || {};
      if (action !== 'add' || !groupJid || participants.length === 0) return;
      if (GROUP_ALLOWLIST.length && !GROUP_ALLOWLIST.includes(groupJid)) return;

      let groupName = 'grup ini';
      try {
        const md = await sock.groupMetadata(groupJid);
        if (md?.subject) groupName = md.subject;
      } catch {}

      for (const pj of participants) {
        const k = key(groupJid, pj);
        if (seen[k]) continue;

        const name = '@' + String(pj).split('@')[0];
        const text = TEMPLATE.replace('{name}', name).replace('{group}', groupName);
        const res = await sendWithRetry(sock, groupJid, text, [pj]);

        if (res.ok) {
          seen[k] = Date.now();
          saveSeen();
          audit({ event: 'welcome_sent', groupJid, groupName, participant: pj, attempt: res.attempt });
        } else {
          audit({ event: 'welcome_failed', groupJid, groupName, participant: pj, error: res.error });
        }
      }

      // prune seen > 48h
      const cutoff = Date.now() - 48 * 3600 * 1000;
      for (const [kk, vv] of Object.entries(seen)) if (vv < cutoff) delete seen[kk];
      saveSeen();
    } catch (e) {
      audit({ event: 'handler_error', error: String(e) });
    }
  });
}

start().catch((e) => {
  console.error('[welcome-worker] fatal:', e);
  audit({ event: 'fatal', error: String(e) });
});
