# PARITY_MAP_DESKTOP_V2019_TO_BLAZOR

Status parity awal antara desktop v2019 vs Blazor (berdasarkan observasi source yang sudah dipelajari).

| Area | Desktop v2019 | Blazor | Status | Catatan |
|---|---|---|---|---|
| Cash Management - DR | Ada, tipe lebih luas (`P/K/L/R/M/O/E/A`) | Ada, scope saat ini fokus `P/K/L` | Partial parity | Desktop lebih bercabang |
| Cash Management - DR Approval | Ada workflow + branch jurnal | Ada service approval | Near parity (core) | Rule jurnal perlu disejajarkan per tipe |
| Cash Management - DV | Ada, posting dari detail `cashd_ac_id` + bank `bk_ac_id` | Ada (DV service) | Near parity (core) | Desktop punya cabang lebih banyak |
| Cash Management - DZ/Realization | Ada + approval khusus | Ada form/create service | Partial parity | Perlu verifikasi rule consumptions edge cases |
| Domain lain (Sales/Purchase/Inventory/Manufacturing/Master) | Ada luas lintas tenant | Belum dipetakan detail per fitur | Pending detail parity | Perlu deep dive per transaksi utama |
