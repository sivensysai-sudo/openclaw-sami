# XCORIS_WORKFLOW_JOURNAL_MATRIX_SALES_ORDER

| Pattern | Evidence (method/file clue) | Impact |
|---|---|---|
| Workflow transition | `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_soshipds.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/ds_soshipds.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_soshipds.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Sales Order/Printout/ds_soship.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/ds_soship.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_soship.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_soship.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve, insert_glt_det_ar) | Status approval/state changes |
| Journal posting | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve, insert_glt_det_ar) | GL entries and balance impact |
| Workflow transition | `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_so_gift_serial.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_so_gift_serial.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_so_gift.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve, insert_glt_det_ar) | Status approval/state changes |
| Journal posting | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve, insert_glt_det_ar) | GL entries and balance impact |
| Workflow transition | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_dlvs.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve, insert_glt_det_ar) | Status approval/state changes |
| Journal posting | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve, insert_glt_det_ar) | GL entries and balance impact |
| Validation guard | credit/qty/status checks in domain files | Blocks invalid transactions |
