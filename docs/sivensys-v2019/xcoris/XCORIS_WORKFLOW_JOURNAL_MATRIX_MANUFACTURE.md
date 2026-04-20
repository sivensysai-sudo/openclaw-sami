# XCORIS_WORKFLOW_JOURNAL_MATRIX_MANUFACTURE

| Pattern | Evidence (method/file clue) | Impact |
|---|---|---|
| Workflow transition | `Project/HCP.Project/Module/Manufacture/work order/print out/ds_wo_issue.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_lf_jurnal_balik, jurnal) | Status approval/state changes |
| Journal posting | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_lf_jurnal_balik, jurnal) | GL entries and balance impact |
| Workflow transition | `Alfa Solution/Alfa.Project/Module/Manufacture/Printout/ds_wo_issue.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Manufacture/01_Work Order/Printout/ds_wo_issue.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Project/HCP.Project/Module/Manufacture/work order/print out/ds_wo_release.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Print Out/ds_wo_release.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_wo_release.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Manufacture/01_Work Order/Printout/ds_wo_release.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_lf_jurnal_balik, jurnal) | Status approval/state changes |
| Journal posting | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_lf_jurnal_balik, jurnal) | GL entries and balance impact |
| Workflow transition | `Project/HCP.Project/Module/Manufacture/work order/print out/ds_work_order.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Manufacture/01_Work Order/Printout/ds_work_order.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Project/HCP.Project/Module/Manufacture/work order/print out/ds_wo_receipt.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FMultiWOLaborFeedback.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_lf_jurnal_balik, jurnal) | Status approval/state changes |
| Journal posting | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FMultiWOLaborFeedback.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_lf_jurnal_balik, jurnal) | GL entries and balance impact |
| Workflow transition | `SFI Solution/SFI.Project/Module/Manufacture/Control File/FControlFileManufacture.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `Project/HCP.Project/Module/Manufacture/work order/print out/ds_wipreturn.Designer.vb` (Rollback) | Status approval/state changes |
| Validation guard | credit/qty/status checks in domain files | Blocks invalid transactions |
