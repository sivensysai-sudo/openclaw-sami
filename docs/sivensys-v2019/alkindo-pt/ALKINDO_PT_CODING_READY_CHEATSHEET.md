# ALKINDO_PT_CODING_READY_CHEATSHEET

## Jika ubah validasi SO
- File utama: `Module/Sales Order/Transaction/FSalesOrder.vb`
- Cek area: credit limit, qty shipment guard, status transisi, contract linkage.

## Jika ubah alur shipment otomatis
- Method kunci: `insert_shipment`, `glt_det_so_shipment`, `jurnal_payment`.

## Jika ubah kontrak
- File: `Module/Sales Order/Transaction/FSOContract.vb` + bagian relasi `sog_code` di `FSalesOrder.vb`.

## Jika bug lintas manufacturing
- Cek referensi `soi_mstr` / `wo_soi_oid` di modul Manufacture (WO/WIP).
