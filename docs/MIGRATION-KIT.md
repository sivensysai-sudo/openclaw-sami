# Migration Kit (Single Repo, Split-Ready)

Tujuan: memindahkan agent ke server baru dengan hasil identik (tanpa commit secret ke repo).

## 1) Yang disimpan di repo
- Codebase utama
- `infra/` template deploy (systemd/nginx/script)
- `knowledge-source/` source knowledge non-sensitif
- `migrations/` schema + migration + seed non-sensitif
- `.env.example` (template variabel)

## 2) Yang TIDAK disimpan di repo
- Token OAuth, session, API keys, private key
- Dump DB produksi mentah
- Runtime state sensitif

## 3) Checklist pindah server
1. Clone repo
2. Copy secrets via secure channel (manual/secret manager)
3. Restore knowledge source
4. Rebuild index RAG
5. Apply DB migration
6. Install & enable service
7. Health check endpoint + smoke test channel

## 4) Struktur split-ready (tetap 1 repo)
- `infra/`
- `knowledge-source/`
- `migrations/`
- `docs/`

## 5) Verifikasi akhir
- NEXA dan SAMI route/account sesuai
- RAG endpoint aktif (`8000` dan `8001`)
- Workflow pesan normal
