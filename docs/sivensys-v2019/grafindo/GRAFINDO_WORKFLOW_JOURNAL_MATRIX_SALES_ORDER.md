# GRAFINDO_WORKFLOW_JOURNAL_MATRIX_SALES_ORDER

| Pattern | Evidence | Impact |
|---|---|---|
| Workflow transition | `Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Journal posting | `Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve) | dampak GL |
| Workflow transition | `Module/Sales Order/Transaction/FSalesOrderReturn.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Journal posting | `Module/Sales Order/Transaction/FSalesOrderReturn.vb` (Approve, Rollback, approve, cancel_approve) | dampak GL |
| Workflow transition | `Module/Sales Order/Transaction/FSalesOrderShipment.vb` (Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_so_shipment_jurnal_balik, jurnal) | perubahan status/approval |
| Journal posting | `Module/Sales Order/Transaction/FSalesOrderShipment.vb` (Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_so_shipment_jurnal_balik, jurnal) | dampak GL |
| Workflow transition | `Module/Sales Order/PO Customer/FPOCustomerGMP.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Transaction/FSOShipmentReceive.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Transaction/FCopyData3.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/PO Customer/FPOCustomerGMPApproval.vb` (Approve, Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Transaction/FSalesOrderReturnApproval.vb` (Approve, Rollback, insert_glt_det_ar, jurnal) | perubahan status/approval |
| Journal posting | `Module/Sales Order/Transaction/FSalesOrderReturnApproval.vb` (Approve, Rollback, insert_glt_det_ar, jurnal) | dampak GL |
| Workflow transition | `Module/Sales Order/PO Customer/FOutstandingPOCustMove.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/PO Customer/FPOCustMassCancel.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Price List/FPriceListQty.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/PO Customer/FPOCustMove.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Report/FSalesOrderReturnReport.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/PO Customer/FLimapDisc.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/PO Customer/FLimapCustType.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/PO Customer/FLimapLevel.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Transaction/FLimapSOReturn.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Report/FSOShipmentReturnReport.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/PO Customer/FLimapPromotion.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/PO Customer/FLimapLoan.vb` (Rollback) | perubahan status/approval |
| Validation guard | domain rules/checks | cegah transaksi invalid |
