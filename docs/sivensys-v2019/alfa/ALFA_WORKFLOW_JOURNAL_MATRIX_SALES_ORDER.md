# ALFA_WORKFLOW_JOURNAL_MATRIX_SALES_ORDER

| Pattern | Evidence | Impact |
|---|---|---|
| Workflow transition | `Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Journal posting | `Module/Sales Order/Transaction/FSalesOrder.vb` (Approve, Rollback, approve, cancel_approve) | dampak GL |
| Workflow transition | `Module/Sales Order/Print Out/ds_so.Designer.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Transaction/FSalesOrderShipment.vb` (Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_so_shipment_jurnal_balik, jurnal) | perubahan status/approval |
| Journal posting | `Module/Sales Order/Transaction/FSalesOrderShipment.vb` (Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_so_shipment_jurnal_balik, jurnal) | dampak GL |
| Workflow transition | `Module/Sales Order/Transaction/FSalesOrderGift.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Journal posting | `Module/Sales Order/Transaction/FSalesOrderGift.vb` (Approve, Rollback, approve, cancel_approve) | dampak GL |
| Workflow transition | `Module/Sales Order/Commission/FRebateCustomerRule.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Forecast/FForecastAlfa.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Delivery/FDeliveryScale.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FRebateSupplierRule.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComExtRuleCG.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComExtRule.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComsInternal.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Transaction/FFinCSDShareData.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComExternalCG.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComNCListCG2020.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComNCList.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComNCListCG.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComEmployee.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComExternalCG2.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Sales Order/Commission/FComExternal.vb` (Rollback) | perubahan status/approval |
| Validation guard | domain rules/checks | cegah transaksi invalid |
