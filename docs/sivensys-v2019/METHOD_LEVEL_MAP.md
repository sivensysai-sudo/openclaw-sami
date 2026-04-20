# METHOD_LEVEL_MAP - SIVENSYS ERP Desktop v2019

## Scope
Ringkasan method/logic penting level kode untuk DR/DV/DZ (baseline Grafindo).

## Disbursement Request (`FDisbursementRequest.vb`)
- `pby_type_EditValueChanged(...)`
  - Atur perilaku field berdasar tipe (`K/P/L/R/M/O/E/A`).
  - `P`: bank & account editable.
  - `K`: account auto/read-only, bank read-only.
  - `L`: account & bank read-only.

## Disbursement Approval (`FDisbursementApproval.vb`)
- Proses approval final update `wf_mstr` + status transaksi.
- Branch jurnal:
  - `P`: create jurnal DR (dengan validasi GL calendar).
  - `L`: lewat branch tipe tapi tidak create jurnal pada blok itu.
  - `K`: branch terpisah, tanpa create jurnal di titik tersebut.

## Disbursement Voucher (`FDisbursementVoucher.vb`)
- `insert_glt_det_dr_voc(...)`
  - Bentuk jurnal detail dari `cashd_ac_id` (debit/credit sesuai nilai detail).
  - Tambah credit akun bank/kas header (`par_ac_id`, sumber `bk_ac_id`).
- Mapping detail saat load DR ke DV:
  - tipe `L/E/O/M/A` cenderung pakai akun detail `pbyd_ac_id`.
  - tipe lain bisa agregasi via `pby_ac_id`.

## Disbursement Realization (`FDisbursementRealization.vb`)
- Menangani consume/realisasi DR + validasi over amount.
- Approval dan cancel path ada di form ini + form approval khusus.

## Catatan sinkronisasi dengan Blazor
- Pola bisnis inti DR->DV->DZ tetap searah.
- Desktop v2019 lebih banyak branch tipe/tenant dibanding implementasi Blazor yang lebih ringkas.
