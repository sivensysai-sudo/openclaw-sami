# ALFA_WORKFLOW_JOURNAL_MATRIX_FINANCIAL

| Pattern | Evidence | Impact |
|---|---|---|
| Workflow transition | `Module/Financial/AR Invoice/ds_invoice.designer.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/AR Invoice/ds_ar_nota.Designer.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/AR Invoice/FDRCRMemoTax.vb` (Jurnal, Rollback, insert_glt_det_ar, insert_glt_det_ar_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/AR Invoice/FDRCRMemoTax.vb` (Jurnal, Rollback, insert_glt_det_ar, insert_glt_det_ar_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/AP Invoice/FVoucherTax.vb` (Jurnal, Rollback, insert_glt_det_ap, insert_glt_det_ap_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/AP Invoice/FVoucherTax.vb` (Jurnal, Rollback, insert_glt_det_ap, insert_glt_det_ap_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/General Ledger/FTransactionPost.vb` (Rollback) | perubahan status/approval |
| Journal posting | `Module/Financial/General Ledger/FTransactionPost.vb` (Rollback) | dampak GL |
| Workflow transition | `Module/Financial/Tax Invoice/FFakturPajakCoreTax.vb` (Rollback, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Financial/Tax Invoice/FFakturPajak.vb` (Rollback, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FSiteCost.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/AR Invoice/FARNota.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FCOGSGenerateNew.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/AR Invoice/FListAR.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FRelable.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FItemCostPackaging.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FPartNumberCostOther.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/AR Invoice/FARReportTax.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FItemCostDelivery.vb` (Rollback) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FRelableImport.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FItemCostPackagingImport.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FItemCostOtherImport.vb` (approve/cancel clue) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cost Management/FItemCostDeliveryImport.vb` (approve/cancel clue) | perubahan status/approval |
| Validation guard | domain rules/checks | cegah transaksi invalid |
