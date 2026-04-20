# ALKINDO_PT_E2E_TRACE_SALES

Trace end-to-end penjualan berdasarkan observasi kode.

1. SO Contract dibuat di `FSOContract.vb` (log: Insert/Edit/Delete SO Contract).
2. Sales Order dibuat di `FSalesOrder.vb` dan dapat mereferensikan `sog_code` (SO Contract).
3. Pada kondisi tertentu, save SO memanggil `insert_shipment(...)` untuk generate shipment.
4. Shipment update kuantitas kirim pada `sod_det` (`sod_qty_shipment`).
5. Posting jurnal shipment via `glt_det_so_shipment(...)`.
6. Distribusi/jurnal AR terkait invoice line ditangani di `jurnal_payment(...)`.
