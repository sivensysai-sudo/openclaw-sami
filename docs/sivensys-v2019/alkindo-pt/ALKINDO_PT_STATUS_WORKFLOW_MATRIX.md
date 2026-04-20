# ALKINDO_PT_STATUS_WORKFLOW_MATRIX

- Field utama: `so_trans_id`, `so_close_date`, plus workflow table `wf_mstr`.
- State code terdeteksi eksplisit di kode: C, X.
- Ada alur approve/cancel_approve dan update `wf_mstr` pada proses SO.
- Ada guard: tidak bisa cancel jika sudah shipment tertentu.
