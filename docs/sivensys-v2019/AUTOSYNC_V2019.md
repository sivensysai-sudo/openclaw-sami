# AUTOSYNC_V2019

Auto-sync untuk repo Desktop v2019 telah dipasang di host:

- Script: `/opt/nexa-rag/scripts/sync_v2019.sh`
- Cron: `/etc/cron.d/nexa-sync-v2019`
- Jadwal: setiap 30 menit (`*/30 * * * *`)
- Log: `/opt/nexa-rag/logs/sync_v2019.log`

Perilaku:
1. `git fetch` branch aktif
2. jika ada commit baru: `git pull --ff-only`
3. trigger re-index NEXA RAG: `POST http://127.0.0.1:8001/ingest`
