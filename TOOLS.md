# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

## Maslam RAG (Local)

- RAG API health: `http://127.0.0.1:8000/health`
- Ask endpoint: `POST http://127.0.0.1:8000/ask`
- Ingest endpoint: `POST http://127.0.0.1:8000/ingest`
- Knowledge sync source: `maslam rclone:Manual Guide/Versi Mobile Apps`
- Local knowledge folder: `/opt/maslam-rag/knowledge`
- Auto sync+ingest cron: `/etc/cron.d/maslam-rag-sync` (every 30 min)
- Sync script: `/opt/maslam-rag/scripts/sync_and_ingest.sh`

## Koordinator Maslam (dari Kang Sys, 2026-04-06)

### Pulau Sumatera
- Aceh — Bu Radiah: `wa.me/6282276579879`
- Medan — Bang Nurul Huda: `wa.me/6285296716961`
- Palembang — Ustadz Masagus Ibrahim: `wa.me/6285378545800`
- Lampung — Pa Adit: `wa.me/6285217558828`
- Bangka — Pa Arya: `wa.me/62881081111009`
- Batam — Pa Rudi: `wa.me/6285364695707`

### Pulau Jawa
- Bandung Selatan — Pa Angga: `wa.me/6289659064114`
- Bandung Tengah — Pa Herry: `wa.me/62895603416535`
- Bandung Timur — Pa Masyudi: `wa.me/628562167271`
- Bandung Barat — Kang Daril: `wa.me/6281510327455`
- Purwakarta — Pa Ferik Mubarok: `wa.me/6287879507333`
- Karawang — Pa Sugiarto: `wa.me/6285216093380`
- DKI Jakarta — Pa Dudus: `wa.me/628128009245`
- Tangerang — Pa Ijeb Marpaung: `wa.me/62811975078`
- Depok — Pa Lais Abid: `wa.me/6282133026610`
- Bekasi — Pa Supriono: `wa.me/6285714010848`
- Bogor — Pa Rachmat Cahyadi: `wa.me/6287872272662`
- Jogjakarta — Pa Eka Yus: `wa.me/6281268933645`
- Jawa Tengah — Pa Arif Ismiadi: `wa.me/6287832338811`
- Jawa Timur — Pa Tri Subakti: `wa.me/6285236447443`

### Pulau Bali
- Bali — Pa Deni: `wa.me/6285737363389`

### Pulau Sulawesi
- Sulawesi Selatan — Pa Andika: `wa.me/6285242438738`
- Sulawesi Tengah — Pa Asrifin: `wa.me/6285241612751`

### Pulau Kalimantan
- Kalimantan Timur — Pa Adam Rasyid: `wa.me/628125502345`

### Pulau Papua
- Papua — Pa Alidin Jaya: `wa.me/6281313131984`

---

Add whatever helps you do your job. This is your cheat sheet.
