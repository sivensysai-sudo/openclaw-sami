# SIVENSYS-ERP v2019 (Desktop) - Learning Notes

Tanggal: 2026-04-20

## 1) Stack & Struktur Umum
- Monorepo legacy multi-solution VB.NET (WinForms + DevExpress).
- Entry solution utama: `xcoris.sln`.
- Banyak varian project per client/tenant (`Grafindo`, `Alfa`, `Sumplas`, dll).
- Core helper lintas project ada di:
  - `Core/Global.Lib`
  - `Packages.dll/*`

## 2) Fokus setara studi Blazor: Financial > Cash Management > DR/DV/DZ
Saya pakai `Grafindo Solution/Grafindo.Project` sebagai baseline karena modul DR/DV/DZ lengkap.

Path utama:
- `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb`
- `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb`
- `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb`
- `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval.vb`

## 3) Temuan awal penting (kode terverifikasi)
### A. Perilaku tipe DR pada UI (Request)
Di `FDisbursementRequest.vb` (`pby_type_EditValueChanged`):
- `K`: account (`pby_ac_id`) auto dari cost center, bank (`pby_bk_id`) read-only.
- `P`: account editable, bank editable.
- `L`: account read-only, bank read-only.
- Ada tipe lain juga (`R/M/O/E/A`) yang tidak ada di Blazor scope sebelumnya.

### B. Approval DR vs jurnal
Di `FDisbursementApproval.vb`:
- Pada final approval:
  - `P` atau `L` masuk branch pemeriksaan tipe.
  - **Jurnal dibuat khusus `P`** (komentar eksplisit di kode).
  - `L` tidak create jurnal pada blok ini.
  - `K` ada branch terpisah (komentar: tidak ada aksi jurnal di titik itu).

### C. DV posting pattern
Di `FDisbursementVoucher.vb`:
- Mapping detail jurnal ada di `insert_glt_det_dr_voc(...)`.
- Detail debit/kredit dibentuk dari `cashd_ac_id` per item.
- Ada credit untuk akun kas/bank header (`par_ac_id`, sumber bank `bk_ac_id`).
- Untuk tipe `L/E/O/M/A`, mapping detail cenderung ambil `pbyd_ac_id` (lebih granular, level detail DR).
- Untuk tipe lain, bisa agregasi via `pby_ac_id`.

## 4) Catatan perbedaan dengan Blazor modern
- Desktop v2019 punya spektrum tipe DR lebih banyak (`P/K/L/R/M/O/E/A`), tidak hanya 3 tipe.
- Pola akuntansi inti tetap mirip:
  - DR `P`: pengakuan di approval.
  - DV: settlement + mutasi akun detail dan bank.
- Namun implementasi desktop lebih bercabang dan tenant-aware.

## 5) Next step (lanjutan pembelajaran)
1. Kunci dulu 1 tenant baseline (rekomendasi: `Grafindo`) untuk hindari noise.
2. Buat matriks final per tipe (`P/K/L/R/M/O/E/A`):
   - validasi field UI,
   - sumber akun,
   - kapan jurnal terbentuk,
   - relasi ke DV/DZ.
3. Turunkan jadi dokumen mapping “Desktop v2019 -> Blazor” agar migration/readability rapi.
