# ARCHITECTURE - SIVENSYS ERP Desktop v2019

## Scope
Dokumen ini khusus untuk codebase desktop VB.NET WinForms (legacy) di:
`/root/.openclaw/workspace/SIVENSYS-ERP.v2019`

## Technology Stack
- VB.NET WinForms
- DevExpress UI components
- PostgreSQL data access (query SQL langsung + helper global)
- Multi-solution / multi-tenant style (per customer project)

## High-Level Structure
- `xcoris.sln` sebagai solution utama agregasi.
- Folder solusi per tenant/client, contoh:
  - `Grafindo Solution/Grafindo.Project`
  - `Alfa Solution/Alfa.Project`
  - `Sumplas Solution/Sumplas.Project`
- Shared helpers:
  - `Core/Global.Lib`
  - `Packages.dll/*`

## Cash Management Focus Baseline
Baseline analisis utama saat ini memakai:
`Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management`

Alasan: modul DR/DV/DZ lengkap dan representatif untuk pemahaman alur transaksi desktop v2019.
