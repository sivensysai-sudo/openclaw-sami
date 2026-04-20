# ALKINDO_PT_JOURNAL_MATRIX

| Trigger | Method/Clue | Impact |
|---|---|---|
| Shipment terbentuk | `glt_det_so_shipment(...)` | Insert jurnal shipment ke GL (`glt_det`) |
| Proses AR/invoice line dari shipment | `jurnal_payment(...)` | Distribusi AR + tax/discount line |
| Inventory movement shipment | `update_invh_mstr...` | Update inventory history/cost movement |
