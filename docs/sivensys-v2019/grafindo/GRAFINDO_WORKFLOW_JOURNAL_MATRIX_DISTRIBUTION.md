# GRAFINDO_WORKFLOW_JOURNAL_MATRIX_DISTRIBUTION

| Pattern | Evidence | Impact |
|---|---|---|
| Workflow transition | `Module/Distribution/Inventory Control/ds_transfer_printout_sys.Designer.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FTransferIssuesPackingList.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Journal posting | `Module/Distribution/Inventory Control/FTransferIssuesPackingList.vb` (Approve, Rollback, approve, cancel_approve) | dampak GL |
| Workflow transition | `Module/Distribution/Inventory Control/FTransferIssues.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Journal posting | `Module/Distribution/Inventory Control/FTransferIssues.vb` (Approve, Rollback, approve, cancel_approve) | dampak GL |
| Workflow transition | `Module/Distribution/Requisition/FRequisition.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryRequest.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FGeneratePackingList.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FPackingList.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Requisition/FRequisitionApproval.vb` (Approve, Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FBookSize.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/XRSuratJalan.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryTransferReport.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryRequestReport.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/XRTransferIssuesPrint_LOT.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/XRTransferIssuesPrint.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Requisition/XRRequisitionCost.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Requisition/XRRequisition.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/XRTransferIssuesPackingList_2.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/XRTransferIssuesPackingList.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/XRInventoryReqPrint.vb` (Rollback) | perubahan status/approval |
| Validation guard | domain rules/checks | cegah transaksi invalid |
