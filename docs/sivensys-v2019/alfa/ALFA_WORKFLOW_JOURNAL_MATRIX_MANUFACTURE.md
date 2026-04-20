# ALFA_WORKFLOW_JOURNAL_MATRIX_MANUFACTURE

| Pattern | Evidence | Impact |
|---|---|---|
| Workflow transition | `Module/Manufacture/Printout/ds_wo_issue.Designer.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Print Out/ds_wo_release.Designer.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWOReceiptWithGrade.vb` (Rollback, insert_glt_det_worw, insert_glt_det_worw_jurnal_balik, jurnal) | perubahan status/approval |
| Journal posting | `Module/Manufacture/Work Order/Transaction/FWOReceiptWithGrade.vb` (Rollback, insert_glt_det_worw, insert_glt_det_worw_jurnal_balik, jurnal) | dampak GL |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWOReceipt.vb` (Rollback, insert_glt_det_worw, insert_glt_det_worw_jurnal_balik, jurnal) | perubahan status/approval |
| Journal posting | `Module/Manufacture/Work Order/Transaction/FWOReceipt.vb` (Rollback, insert_glt_det_worw, insert_glt_det_worw_jurnal_balik, jurnal) | dampak GL |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWorkOrder.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWorkOrderIssueReturn.vb` (Rollback, insert_glt_det_woci_return, jurnal_inventory_type) | perubahan status/approval |
| Journal posting | `Module/Manufacture/Work Order/Transaction/FWorkOrderIssueReturn.vb` (Rollback, insert_glt_det_woci_return, jurnal_inventory_type) | dampak GL |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWorkOrderIssue.vb` (Rollback, insert_glt_det_woci, jurnal_inventory_type) | perubahan status/approval |
| Journal posting | `Module/Manufacture/Work Order/Transaction/FWorkOrderIssue.vb` (Rollback, insert_glt_det_woci, jurnal_inventory_type) | dampak GL |
| Workflow transition | `Module/Manufacture/Product Structure/FProductStructure.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWOBillMaintenance.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWORouteMaintenance.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWOItemSubtitute.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Product Structure/FSimulatedPickListGroup.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Report/FWorkOrderReport.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Printout/XRWOIssuePrint.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Transaction/FWOTypeMaster.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Print Out/rptWOPickList.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Print Out/XRWOReceiptPrintNon.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Manufacture/Work Order/Print Out/XRWOReceiptPrintLotSerial.vb` (Rollback) | perubahan status/approval |
| Validation guard | domain rules/checks | cegah transaksi invalid |
