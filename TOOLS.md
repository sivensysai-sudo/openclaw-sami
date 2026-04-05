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

---

Add whatever helps you do your job. This is your cheat sheet.
