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

## Koordinator Maslam (owner update, permanent 2026-04-07)

### Pulau Sumatera
- Aceh — Bu Radiah: `wa.me/6282276579879`
- Medan — Bang Nurul Huda: `wa.me/6285296716961` (panggilan preferensi: **Bang Huda**)
- Palembang — Ustadz Masagus Ibrahim: `wa.me/6285378545800`
- Lampung — Pa Adit: `wa.me/6285217558828`
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

### Team Madinah (owner-provided members, 2026-04-07)
- iCreativelabs — Setyagus Sucipto (alias: **Kang Agus**): `wa.me/628112247724` | email: `setyagus@icreativelabs.com`
- Swamedia — H Taufig Smeer: `wa.me/628112238732`
- Trinix — Ahmad K: `wa.me/628158112222`
- GITS — Ibun: `wa.me/6285723458947`
- Bounga Solusi Informatika — Sutresna: `wa.me/628129966620`
- AI Labs — Anton Herutomo: `wa.me/6281283212168`
- Cyber Army — Pringgo Digdo: `wa.me/6285267876548`
- Jagad — Andri Koerniawan: `wa.me/6281323268184`
- Maslam — Teddy: `wa.me/62811808331`
- Millennia Solusi — Alhabsyi: `wa.me/628156223734`
- Nagatech — Budi Krist: `wa.me/6281214343638`
- Neuron — Sriyanto Massri (alias: **Pa Massri**): `wa.me/628112265392` | email: `massri@neuronworks.co.id`
- Temika — Vicky Anggara: `wa.me/6285174084518`
- WGS — Yogi: `wa.me/62817225997`
- WGS — Chalid Kurdi: `wa.me/628122168087`

---

Add whatever helps you do your job. This is your cheat sheet.

## CITCOM AI Agents (owner update, revised by screenshot 2026-04-09)

Nomor member grup CITCOM AI Agents yang terlihat pada screenshot terbaru owner:
- Devy: `+62881080625110` (Admin Grup)
- AI Assistant: `+6285121924038`
- Hafizh: `+6282183768131`
- Jasmine Etasya: `+6285121135924`
- Utsman: `+6285161158592`

Catatan: daftar ini menggantikan catatan sebelumnya yang salah mapping nomor Utsman.

## Maslam DKM - aturan provisioning user (owner correction, permanent)

- Di **Maslam DKM Mobile tidak ada registrasi user baru mandiri** oleh pengguna.
- User DKM **dibuatkan oleh Admin Masjid** yang sudah punya role admin.
- Password awal user baru **dikirim ke email** user tersebut.
- Pengecualian: jika orang tersebut **sudah punya akun Maslam Jamaah** dan ingin jadi user DKM Mobile, admin tidak membuat akun baru.
  - Admin cukup ubah status di **Maslam Web → menu Warga → jadikan User Aplikasi**.
- Perubahan role/provisioning dilakukan oleh admin masjid melalui **Maslam versi web**.

## Log Mapping Grup (owner rule 2026-04-10)

- 2026-04-10: MASLAM MADANI - ACEH → `120363409824615383@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - KALIMANTAN → `120363407187520173@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - RIAU → `120363407403514533@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - KABUPATEN BANDUNG BARAT → `120363429234769333@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - PAPUA → `120363423625569006@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - SULAWESI → `120363424984939460@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - BEKASI → `120363427626425138@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - BOGOR → `120363416708860211@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - JATENG → `120363416784694116@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - INDONESIA TIMUR → `120363418760044472@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - DI Yogyakarta → `120363417397227485@g.us` (trigger: `#MAPGROUP SAMI`)
- 2026-04-10: MASLAM MADANI - SUMATERA SELATAN → `120363430234249773@g.us` (trigger: `#MAPGROUP SAMI`)
