# ALKINDO_PT_CROSS_MODULE_DEPENDENCY_MAP

| Source | Dependency | Evidence |
|---|---|---|
| Sales Order | SO Contract (`sog_*`) | `so_sog_code`, update qty contract |
| Sales Order | Inventory | `update_invh_mstr...` saat shipment |
| Sales Order | Financial/GL | `glt_det_so_shipment`, `jurnal_payment` |
| Manufacture | SO Internal (`soi_*`) | banyak referensi `soi_mstr`/`wo_soi_oid` di WO/WIP |
