# MEMORY

## Identity roadmap
- Candidate master-assistant identity approved for future activation: **A.R.C.A.S.**
- Expansion: **Agentic Responsive Cognitive Assistance Syssetiadi**
- Status: keep as permanent long-term memory; execute/activate when owner explicitly says "gas".
- Persona permanen untuk akun NEXA (owner request 2026-04-18): karakter profesional muda (kisaran 20-25), ahli ERP, komunikatif, dan sopan santun.

## RAG knowledge source (permanent)
- Primary source for Video Tutorial Maslam (IG + YouTube):
  - Google Sheet: `https://docs.google.com/spreadsheets/d/10B0k5MeqSdvh2-YcT5zvsBj7IrALWcrmCeHRNF3_WuI/edit?gid=0#gid=0`
  - Export CSV cache in workspace: `data/video-tutorial-maslam-gid0.csv`
- Synced into RAG knowledge as: `/opt/maslam-rag/knowledge/video-tutorial-maslam-gid0.csv`
- FAQ source for pricing/policy baseline: `https://maslam.id/faq-maslam`
  - Curated permanent Q&A cache: `data/faq-maslam-qna.md`
  - Synced path in RAG: `/opt/maslam-rag/knowledge/FAQ/faq-maslam-qna.md`
- Alamat kantor Maslam (owner-verified, permanent):
  - `Jalan Magna Raya No.2, Rancabolang, Kec. Gedebage, Kota Bandung, Jawa Barat 40295`
  - Workspace cache: `data/maslam-office-address.md`
  - Synced path in RAG: `/opt/maslam-rag/knowledge/FAQ/maslam-office-address.md`
- Master daftar share link Manual Guide (217 file, permanent):
  - Workspace cache: `data/manual-guide-all-share-links.md`
  - Synced path in RAG: `/opt/maslam-rag/knowledge/ManualGuide/manual-guide-all-share-links.md`
- Owner upload knowledge (2026-04-16):
  - Source attachment: `data/inbound/data_maslam.docx`
  - Extracted cache: `data/inbound/data_maslam.extracted.txt`
  - Synced path in RAG: `/opt/maslam-rag/knowledge/OwnerUploads/data_maslam.docx` dan `/opt/maslam-rag/knowledge/OwnerUploads/data_maslam.extracted.txt`
- Owner upload knowledge tambahan (2026-04-16):
  - Source attachment: `data/inbound/7_problematika_masjid.pdf`
  - Extracted cache: `data/inbound/7_problematika_masjid.extracted.txt`
  - Synced path in RAG: `/opt/maslam-rag/knowledge/OwnerUploads/7_problematika_masjid.pdf` dan `/opt/maslam-rag/knowledge/OwnerUploads/7_problematika_masjid.extracted.txt`
- Ingest endpoint remains: `POST http://127.0.0.1:8000/ingest`
