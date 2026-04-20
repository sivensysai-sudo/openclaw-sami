# XCORIS_WORKFLOW_JOURNAL_MATRIX_FINANCIAL_AND_ACOUNTING

| Pattern | Evidence (method/file clue) | Impact |
|---|---|---|
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Payable/ds_ap.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/Printout/ds_invoice.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Payable/ds_apnota.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/Printout/ds_arpay.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/Printout/ds_ar_nota.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Payable/ds_cash_out_ap.Designer.vb` (Rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/FARPayment.vb` (Jurnal, Rollback, insert_glt_det_ar_payment_jurnal_balik, insert_glt_det_arpay, jurnal) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/FARPayment.vb` (Jurnal, Rollback, insert_glt_det_ar_payment_jurnal_balik, insert_glt_det_arpay, jurnal) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/FDRCRMemo.vb` (Jurnal, Rollback, insert_glt_det_ar, insert_glt_det_ar_jurnal_balik, jurnal) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/FDRCRMemo.vb` (Jurnal, Rollback, insert_glt_det_ar, insert_glt_det_ar_jurnal_balik, jurnal) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Payable/FVoucher.vb` (Jurnal, Rollback, insert_glt_det_ap, insert_glt_det_ap_jurnal_balik, jurnal) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Payable/FVoucher.vb` (Jurnal, Rollback, insert_glt_det_ap, insert_glt_det_ap_jurnal_balik, jurnal) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Payable/FPaymentManualChecks.vb` (Jurnal, Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_appay, jurnal) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Payable/FPaymentManualChecks.vb` (Jurnal, Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_appay, jurnal) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Cash Management/FCashOut.vb` (Jurnal, Rollback, insert_glt_det_jurnal_balik, jurnal) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Financial And Acounting/Cash Management/FCashOut.vb` (Jurnal, Rollback, insert_glt_det_jurnal_balik, jurnal) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Cash Management/FCashIn.vb` (Rollback, jurnal) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Financial And Acounting/Cash Management/FCashIn.vb` (Rollback, jurnal) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/FARReturnManualApprove.vb` (Approve, Jurnal, Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_ar) | Status approval/state changes |
| Journal posting | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/FARReturnManualApprove.vb` (Approve, Jurnal, Rollback, insert_glt_det_ap_payment_jurnal_balik, insert_glt_det_ar) | GL entries and balance impact |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Fix Asset/FAssetRequest.vb` (Approve, Rollback, approve, cancel_approve, rollback) | Status approval/state changes |
| Workflow transition | `IGO Solution/IGO.Project/Module/Financial And Acounting/Account Receiveable/FARNota.vb` (Rollback) | Status approval/state changes |
| Validation guard | credit/qty/status checks in domain files | Blocks invalid transactions |
