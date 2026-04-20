# XCORIS_WORKFLOW_JOURNAL_MATRIX_INVENTORY_CONTROL

| Pattern | Evidence (method/file clue) | Impact |
|---|---|---|
| Workflow transition | `KP Solution/KP.Project/Module/Inventory Control/Transaction/FGoodsReceiptDetail.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | Status approval/state changes |
| Journal posting | `KP Solution/KP.Project/Module/Inventory Control/Transaction/FGoodsReceiptDetail.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | GL entries and balance impact |
| Workflow transition | `KP Solution/KP.Project/Module/Inventory Control/Transaction/FGoodsReceipt.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | Status approval/state changes |
| Journal posting | `KP Solution/KP.Project/Module/Inventory Control/Transaction/FGoodsReceipt.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | GL entries and balance impact |
| Workflow transition | `KP Solution/KP.Project/Module/Inventory Control/Transaction/FGoodsReceivingReport.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | Status approval/state changes |
| Journal posting | `KP Solution/KP.Project/Module/Inventory Control/Transaction/FGoodsReceivingReport.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FEntryStockOpnameYarn.vb` (Rollback, insert_glt_det_silisih_so, jurnal_inventory_type) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FEntryStockOpnameYarn.vb` (Rollback, insert_glt_det_silisih_so, jurnal_inventory_type) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FCOStockOpnameYarn.vb` (Approve, Rollback, approve, cancel_approve, rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FEntryStockOpname.vb` (Rollback, insert_glt_det_silisih_so, jurnal_inventory_type) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FEntryStockOpname.vb` (Rollback, insert_glt_det_silisih_so, jurnal_inventory_type) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FCOStockOpnameFabric.vb` (Approve, Rollback, approve, cancel_approve, rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FEntryStockOpnameFabric.vb` (Rollback, insert_glt_det_silisih_so, jurnal_inventory_type) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FEntryStockOpnameFabric.vb` (Rollback, insert_glt_det_silisih_so, jurnal_inventory_type) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FCOStockOpname.vb` (Approve, Rollback, approve, cancel_approve, rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FStockOpnameApprovalYarn.vb` (Approve, Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FStockOpnameApprovalFabric.vb` (Approve, Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Inventory Control/Opname/FStockOpnameApproval.vb` (Approve, Rollback) | Status approval/state changes |
| Workflow transition | `KP Solution/KP.Project/Module/Inventory Control/Print Out/XRGoodsReceipt.vb` (Rollback) | Status approval/state changes |
| Validation guard | credit/qty/status checks in domain files | Blocks invalid transactions |
