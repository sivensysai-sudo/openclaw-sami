# GRAFINDO_WORKFLOW_JOURNAL_MATRIX_FINANCIAL

| Pattern | Evidence | Impact |
|---|---|---|
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Financial/AR Invoice/FDRCRMemo.vb` (Jurnal, Rollback, insert_glt_det_ar, insert_glt_det_ar_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/AR Invoice/FDRCRMemo.vb` (Jurnal, Rollback, insert_glt_det_ar, insert_glt_det_ar_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb` (Approve, Rollback, insert_glt_det_dr_voc) | perubahan status/approval |
| Journal posting | `Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb` (Approve, Rollback, insert_glt_det_dr_voc) | dampak GL |
| Workflow transition | `Module/Financial/AP Invoice/FPaymentManualChecks.vb` (Jurnal, Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_appay) | perubahan status/approval |
| Journal posting | `Module/Financial/AP Invoice/FPaymentManualChecks.vb` (Jurnal, Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_appay) | dampak GL |
| Workflow transition | `Module/Financial/AP Invoice/FVoucher.vb` (Jurnal, Rollback, insert_glt_det_ap, insert_glt_det_ap_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/AP Invoice/FVoucher.vb` (Jurnal, Rollback, insert_glt_det_ap, insert_glt_det_ap_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Financial/AR Invoice/FARPaymentNoOtherAmount.vb` (Jurnal, Rollback, insert_glt_det_ar_payment_jurnal_balik, insert_glt_det_arpay) | perubahan status/approval |
| Journal posting | `Module/Financial/AR Invoice/FARPaymentNoOtherAmount.vb` (Jurnal, Rollback, insert_glt_det_ar_payment_jurnal_balik, insert_glt_det_arpay) | dampak GL |
| Workflow transition | `Module/Financial/Payment Recap/FPaymentRecap.vb` (Approve, Rollback, approve, cancel_approve) | perubahan status/approval |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FOverBooking.vb` (Rollback, insert_glt_det_dr_voc_ob) | perubahan status/approval |
| Journal posting | `Module/Financial/Cash Management/Transaction/FOverBooking.vb` (Rollback, insert_glt_det_dr_voc_ob) | dampak GL |
| Workflow transition | `Module/Financial/Bank Loan/Transaction/FBankLoanDisbursement.vb` (Jurnal, Rollback, insert_glt_det_bkloan, insert_glt_det_bkloan_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/Bank Loan/Transaction/FBankLoanDisbursement.vb` (Jurnal, Rollback, insert_glt_det_bkloan, insert_glt_det_bkloan_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementLoan.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/Cash Management/Transaction/FDisbursementLoan.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementPromotion.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/Cash Management/Transaction/FDisbursementPromotion.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/Bank Loan/Transaction/FBankLoanPayment.vb` (Jurnal, Rollback, insert_glt_det_bkloanp, insert_glt_det_bkloanp_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/Bank Loan/Transaction/FBankLoanPayment.vb` (Jurnal, Rollback, insert_glt_det_bkloanp, insert_glt_det_bkloanp_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/Bank Loan/Transaction/FBankLoanPayInterest.vb` (Jurnal, Rollback, insert_glt_det_bkloanpi, insert_glt_det_bkloanpi_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/Bank Loan/Transaction/FBankLoanPayInterest.vb` (Jurnal, Rollback, insert_glt_det_bkloanpi, insert_glt_det_bkloanpi_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementRefund.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_jurnal_balik) | perubahan status/approval |
| Journal posting | `Module/Financial/Cash Management/Transaction/FDisbursementRefund.vb` (Jurnal, Rollback, insert_glt_det, insert_glt_det_jurnal_balik) | dampak GL |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementApproval_Spv.vb` (Approve, Rollback, insert_glt_det_dr, jurnal) | perubahan status/approval |
| Journal posting | `Module/Financial/Cash Management/Transaction/FDisbursementApproval_Spv.vb` (Approve, Rollback, insert_glt_det_dr, jurnal) | dampak GL |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementApproval.vb` (Approve, Rollback, insert_glt_det_dr, jurnal) | perubahan status/approval |
| Journal posting | `Module/Financial/Cash Management/Transaction/FDisbursementApproval.vb` (Approve, Rollback, insert_glt_det_dr, jurnal) | dampak GL |
| Workflow transition | `Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb` (Approve, Jurnal, Rollback, approve) | perubahan status/approval |
| Journal posting | `Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb` (Approve, Jurnal, Rollback, approve) | dampak GL |
| Workflow transition | `Module/Financial/General Ledger/FOpeningBalance.vb` (Rollback) | perubahan status/approval |
| Journal posting | `Module/Financial/General Ledger/FOpeningBalance.vb` (Rollback) | dampak GL |
| Workflow transition | `Module/Financial/Payment Recap/FPaymentRecapApproval.vb` (Approve, Rollback) | perubahan status/approval |
| Validation guard | domain rules/checks | cegah transaksi invalid |
