# ALFA_WORKFLOW_JOURNAL_MATRIX_DISTRIBUTION

| Pattern | Evidence | Impact |
|---|---|---|
| Workflow transition | `Module/Distribution/Purchase Order/ds_po_printout.designer.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Purchase Order/ds_rcv_printout.Designer.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Purchase Order/FPurchaseOrder.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Journal posting | `Module/Distribution/Purchase Order/FPurchaseOrder.vb` (Approve, Rollback, approve, cancel_approve) | dampak GL |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryIssues.vb` (Rollback, insert_glt_det_inv_iss, jurnal_inventory_type) | perubahan status/approval |
| Journal posting | `Module/Distribution/Inventory Control/FInventoryIssues.vb` (Rollback, insert_glt_det_inv_iss, jurnal_inventory_type) | dampak GL |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryIssuesLimit.vb` (Rollback, insert_glt_det_inv_iss, jurnal_inventory_type) | perubahan status/approval |
| Journal posting | `Module/Distribution/Inventory Control/FInventoryIssuesLimit.vb` (Rollback, insert_glt_det_inv_iss, jurnal_inventory_type) | dampak GL |
| Workflow transition | `Module/Distribution/Purchase Order/FPurchaseReceipt.vb` (Rollback, insert_glt_det_ic) | perubahan status/approval |
| Journal posting | `Module/Distribution/Purchase Order/FPurchaseReceipt.vb` (Rollback, insert_glt_det_ic) | dampak GL |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryReceiptsLimit.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | perubahan status/approval |
| Journal posting | `Module/Distribution/Inventory Control/FInventoryReceiptsLimit.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | dampak GL |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryReceipts.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | perubahan status/approval |
| Journal posting | `Module/Distribution/Inventory Control/FInventoryReceipts.vb` (Rollback, insert_glt_det_inv_rct, jurnal_inventory_type) | dampak GL |
| Workflow transition | `Module/Distribution/Quotation/FQuotation.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Purchase Order/FPurchaseReturn.vb` (Rollback, insert_glt_det_ic, jurnal_inventory_type) | perubahan status/approval |
| Journal posting | `Module/Distribution/Purchase Order/FPurchaseReturn.vb` (Rollback, insert_glt_det_ic, jurnal_inventory_type) | dampak GL |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryRequest.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Purchase Order/FPurchaseReceiptScale.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryChangeItemCopyCost.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryChangeItemAVGCost.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Purchase Order/FPurchaseOrderApproval.vb` (Approve, Rollback, approve) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Quotation/FQuotationApproval.vb` (Approve, Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Validity Stock/FValidityStockItem.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Quotation/FQuotationRoutingApproval.vb` (Approve, Rollback) | perubahan status/approval |
| Workflow transition | `Module/Distribution/Inventory Control/FInventoryWIPCost.vb` (Rollback) | perubahan status/approval |
| Validation guard | domain rules/checks | cegah transaksi invalid |
