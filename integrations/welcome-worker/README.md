# Baileys Welcome Worker (isolated)

Worker khusus auto-welcome berbasis event native Baileys (`group-participants.update`).

## Tujuan
- Menangkap event member join dengan latensi rendah
- Kirim welcome message deterministik (tanpa AI)
- Retry + dedupe + audit log

## Penting (anti-bentrok)
Jangan jalankan worker ini pada nomor WhatsApp yang sama dengan OpenClaw aktif.
Satu nomor tidak boleh dilayani dua listener WA Web sekaligus.

Agar tidak bentrok:
1. Gunakan nomor WA terpisah, atau
2. Matikan listener WA existing dulu baru aktifkan worker ini.

Default konfigurasi di `.env.example` adalah `ENABLED=false` (aman, tidak jalan).

## Struktur
- `worker.js` : runtime utama
- `.env.example` : konfigurasi
- `systemd.example.service` : contoh service (opsional)

## Menjalankan (manual)
```bash
cd /root/.openclaw/workspace/integrations/welcome-worker
cp .env.example .env
# edit .env -> ENABLED=true jika siap
npm i @whiskeysockets/baileys pino
node worker.js
```

## Data runtime
- Session auth: `./session/`
- Dedupe state: `./state/seen.json`
- Audit: `./logs/join-audit.jsonl`
