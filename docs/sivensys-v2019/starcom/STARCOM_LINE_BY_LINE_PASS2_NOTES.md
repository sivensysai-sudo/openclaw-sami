# STARCOM_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas starcom.

- Total file prioritas dianotasi: **180**

## `Starcom Solution/Starcom.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: BuildInClause, Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportDataOptimized
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, cs_mstr, csd_det

## `Starcom Solution/Starcom.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, ars_ship, arso_so, bk_mstr, branch_mstr, browse_so, cmaddr_mstr, code_mstr, cu_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderReturnToShipment_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bill_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderShipment_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_delete
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, driver_mstr, en_mstr, gcald_so

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel, Outstanding, credit
- Method sample: Else, ElseIf, End, FDisbursementRealization_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, aprv_mstr, bdgtd_det, bgtinfo_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cmaddr_mstr, cu_mstr, emp_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, credit
- Method sample: ElseIf, End, FDisbursementVoucher_Load, Private, Public, ap_cu_id_EditValueChanged, before_delete, before_save, browse_data, browse_dz_de_ref
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cfr_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, credit
- Method sample: Else, ElseIf, End, FDisbursementRealizationApproval_Load, Private, Public, approve_wf, cancel_wf, ce_selection1_CheckedChanged, delete_glt_det_refund
- Table/entity sample: ac_mstr, aprv_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, glt_det, netoffbal_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/ds_ti.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBypt_code, GetData, GetRealUpdatedRows
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soshipd_det, um_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FVoucher.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_branch_id_EditValueChanged, ap_credit_term_EditValueChanged, ap_cu_id_EditValueChanged, ap_date_EditValueChanged, ap_due_date_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, app_po, bk_mstr, branch_mstr, browse_po, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, detail_po, en_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: Dim, ElseIf, End, FARPayment_Load, Private, Public, _load_data_grid_detail, arpay_arnota_oid_ButtonClick, arpay_bill_to_EditValueChanged, arpay_bk_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, arpaydd_det, arpayddd_det, arso_so, bg_mstr, bk_mstr, branch_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, Outstanding, credit
- Method sample: Else, ElseIf, End, FCreateInvoiceNew_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, bdgtd_det, bgtinfo_mstr, bk_mstr, branch_mstr, cash_mstr, cc_mstr, cu_mstr, en_mstr, netoffbal_mstr, pby_mstr, pbyd_det

## `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/FRequisition.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FRequisition_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, its_mstr, itsd_det, pjc_mstr, pt_mstr, ptnr_mstr, req_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FPaymentManualChecks_Load, Private, Public, _load_data_grid_detail, appay_bg_oid_ButtonClick, appay_bk_id_EditValueChanged, appay_branch_id_EditValueChanged, appay_date_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, appay_payment, appayd_det, appaydd_det, appayddd_det, bg_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseReceipt_Load, GetIDMax, GetMaxLine, ImportFromExcel, ImportFromExcelMulti, Private, Public
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, its_mstr, itsd_det, loc_mstr, pb_mstr

## `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/FInventoryIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick
- Table/entity sample: ac_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pod_det, pt_mstr, ptnr_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajak.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FFakturPajak_Load, Private, Public, ar_cu_id_EditValueChanged, before_save, before_save_insert, cancel_approve
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, dr_det, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, siteid_mstr, sod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajak2.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FFakturPajak_Load, Private, Public, ar_cu_id_EditValueChanged, before_save, before_save_insert, cancel_approve
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, dr_det, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, siteid_mstr, sod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FProjectBudgetGenerate.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Qty
- Method sample: CekBudgetDetail, Else, ElseIf, End, FProjectBudgetGenerate_Load, Private, Public, SetNewRev, approve, approve_line
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, bdgth_hist, bdgthd_det, cc_mstr, code_mstr, en_mstr, pjc_mstr, pl_mstr, pla_mstr, prj_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgeting.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete
- Method sample: CekBudgetDetail, ElseIf, End, FBudgeting_Load, LoadDetail, Private, Public, SetNewRev, approve, approve_line
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, bdgth_hist, bdgthd_det, branch_mstr, cc_mstr, en_mstr, tran_mstr, wf_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, credit
- Method sample: Else, ElseIf, End, ExportDataToExcelClosedXML, ExportDataToSheets, FFakturPajakCoreTax_Load, Private, Public, ar_cu_id_EditValueChanged, before_save
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soship_mstr, soshipd_det

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FCashOut.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FPartnerAll_Load, Function, ImportFromExcel, Private, Public, arrange_from_excel, be_import_ButtonClick, before_delete
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cash_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance

## `Starcom Solution/Starcom.Project/Module/Distribution/Boq/FBillOfQuantity.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FRequisition_Load, Function, ImportFromExcel, Private, Public, approve, approve_line
- Table/entity sample: boq_mstr, boqd_det, branch_mstr, code_mstr, cs_mstr, en_mstr, pjc_mstr, pt_mstr, sct_mstr, tran_mstr, wf_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FVoucher.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Starcom Solution/Starcom.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderShipment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, before_delete, before_save, browse_data
- Table/entity sample: ac_mstr, arpay_payment, bg_mstr, bk_mstr, branch_mstr, cbh_hist, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_po

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Print Out/XRAPInvoice.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucherClose.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FDisbursementVoucherClose_Load, Private, Public, ce_selection1_CheckedChanged, exportpdf, format_grid, get_code, get_user_approval
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cfr_mstr, cmaddr_mstr, cu_mstr, en_mstr, glt_det, pby_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/FRequisition.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Print Out/XRAPInvoiceNoPO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent, Total
- Table/entity sample: ds_ship

## `Starcom Solution/Starcom.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent, Total
- Table/entity sample: ds_ship

## `Starcom Solution/Starcom.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FCashIn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FCashIn_Load, Private, Public, SetToAllRowsToolStripMenuItem_Click, before_delete, before_save, browse_data, cancel_data
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, glt_det, ptnr_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/Print Out/XRSOPriceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent, Total
- Table/entity sample: ds_so

## `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FPartNumber.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FDomain_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, invc_mstr, is_mstr, its_mstr, loc_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FDisbursementApproval_Load, Private, Public, approve_wf, cancel_wf, ce_selection1_CheckedChanged, exportpdf, format_grid
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cu_mstr, en_mstr, glt_det, pby_mstr, pbyd_det, pjc_mstr, ptnr_mstr, wf_mstr

## `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/Report/FInvReportByDate.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FARReportByAging_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, format_grid, le_branch_id_EditValueChanged, load_by_branch
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, invc_mstr, invh_group, invh_mstr, loc_mstr, pl_mstr, pt_group, pt_mstr

## `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/FInventoryIssues.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FPurchaseOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPurchaseOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, packaging_mstr, par_po, pjc_mstr, pl_mstr, po_mstr, pod_det

## `Starcom Solution/Starcom.Project/__Browse References/FDRCRMemoSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Shipment
- Method sample: End, FDRCRMemoSearch_Load, Private, Public, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_CellValueChanging, gv_master_DoubleClick
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, code_mstr, cu_mstr, en_mstr, ptnr_mstr, taxclass_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FCashOut.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajak.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/FRoutingApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FRoutingApproval_Load, GetID_Local, Private, Public, before_save, browse_data, cancel_data, delete_data
- Table/entity sample: aprv_mstr, tran_mstr, wf_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FOverBooking.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementVoucherPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajak2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FCashIn.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgeting.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Sales Order/Print Out/XRSO_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetTransaction.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: End, FBudgetTransaction_Load, Private, Public, bdgt_branch_id_EditValueChanged, bdgt_cc_id_EditValueChanged, bdgt_code_EditValueChanged, bdgt_en_id_EditValueChanged, bdgt_pjc_id_EditValueChanged, cbdgt_bdgt_oid_ButtonClick
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, bdgtqd_det, branch_mstr, cc_mstr, en_mstr, pjc_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetTransaction_old.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: End, FBudgetTransaction_Load, Private, Public, bdgt_branch_id_EditValueChanged, bdgt_cc_id_EditValueChanged, bdgt_code_EditValueChanged, bdgt_en_id_EditValueChanged, bdgt_pjc_id_EditValueChanged, cbdgt_bdgt_oid_ButtonClick
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, bdgtqd_det, branch_mstr, cc_mstr, en_mstr, pjc_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FCashManagementReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ACTIVITY, Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/FDocumentApproval.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Sales Order/Print Out/XRSO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FBudgetApproval_Load, LoadDetail, Private, Public, UpdateAsset, approve_wf, format_grid, get_user_approval
- Table/entity sample: ac_mstr, ass_mstr, bdgt_mstr, bdgtd_det, cc_mstr, en_mstr, wf_mstr

## `Starcom Solution/Starcom.Project/Module/Distribution/Boq/FBillOfQuantity.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBugdetProjectReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: End, FBugdetProjectReport_Load, Private, Public, format_grid, load_cb, load_data_many, par_en_id_EditValueChanged, so_code_ButtonClick
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, code_mstr, creditterm_mstr, cu_mstr, en_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/Print Out/XRRequisitionCost.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetTransaction.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FProjectBudgetGenerate.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/Report/FInvReportByDate.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: invh_group

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucherClose.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Distribution/Boq/XRBOQ.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: consr_mstr

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/FRoutingApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FCrossBudget.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetTransaction_old.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/___Function Helper/Cls_Bilangan_new.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_duabelas, nominal_empat, nominal_empatbelas, nominal_enam, nominal_lima

## `Starcom Solution/Starcom.Project/__Browse References/FVoucherSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FVoucherSearch_Load, Private, Public, calculate_total, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_CellValueChanged
- Table/entity sample: ac_mstr, ap_mstr, bk_mstr, branch_mstr, code_mstr, cu_mstr, en_mstr, pjc_mstr, ptnr_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wh_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FCashManagementReport2.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FCashManagementReport2_Load, Private, Public, format_grid, gv_master_MouseUp, le_branch_EditValueChanged, le_entity_EditalueChanged, le_from_gcal_EditValueChanged, le_to_gcal_EditValueChanged
- Table/entity sample: ac_mstr, bk_mstr, cash_mstr, cashd_det, cc_mstr, cu_mstr, dr_det, dz_det, en_mstr, gcal_mstr, ob_mstr, obd_det

## `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/Print Out/XRRequisition.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FRequisitionSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FRequisitionSearch_Load, Private, Public, ce_select_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, group_mstr, loc_mstr, pjc_mstr, pt_group, pt_mstr, ptnr_mstr, req_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FRecalculateBudgetCC.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: End, FRecalculateBudgetCC_Load, Private, Public, Sub, cancel_data, ce_account_CheckedChanged, delete_data, edit_data, format_grid
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, cc_mstr, en_mstr, pby_mstr, pbyd_det, po_mstr, pod_det, rbcc_mstr, rbccd_det

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/FZEmployee.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Report/FAPInvoiceReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: End, FAPInvoiceReport_Load, Private, Public, format_grid, le_branch_EditValueChanged, le_entity_EditValueChanged, load_cb, load_data_many, xtc_master_SelectedPageChanged
- Table/entity sample: ac_mstr, ap_mstr, appay_payment, appayd_det, bk_mstr, branch_mstr, cc_mstr, code_mstr, cu_mstr, en_mstr, pjc_mstr, po_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FCrossBudget.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FCrossBudget_Load, Private, Public, cbdgt_bdgt_oid_ButtonClick, cbdgt_branch_id_EditValueChanged, cbdgt_cc_from_id_EditValueChanged, cbdgt_en_id_EditValueChanged, delete_data
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, branch_mstr, cbdgt_mstr, cc_mstr, en_mstr, pjc_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/Print Out/ds_ship.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, CreateInstance, DataTable1RowChangeEventHandler, End, GetRowType, GetSchemaSerializable, GetTypedDataSetSchema, GetTypedTableSchema, InitClass
- Table/entity sample: ds_ship

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/FAgama.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/ds_invoice.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, CreateInstance, DataTable1RowChangeEventHandler, End, GetRowType, GetSchemaSerializable, GetTypedDataSetSchema, GetTypedTableSchema, InitClass

## `Starcom Solution/Starcom.Project/__General Form/FCodeMstr.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FInventoryRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_price_list
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pb_mstr, pbd_det, pi_mstr, pid_det, pidd_det, pidd_payment, pt_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FGeneralLedgerCashReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FBalanceSheetReport_Load, FGeneralLedgerCashReportPerUserBank_FormClosed, Private, Public, format_grid, get_gv, gv_master_MouseUp, le_branch_EditValueChanged, le_entity_EditalueChanged
- Table/entity sample: ac_mstr, bk_mstr, cmaddr_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, gltbuf_balance

## `Starcom Solution/Starcom.Project/Module/Financial/General Ledger/FCostCenter.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FDisbursementRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FPengajuanBiayaSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, bk_mstr, cc_mstr, cu_mstr, en_mstr, pby_mstr, pdprd_det, xemp_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FGeneralLedgerCashReportPerCostCenterBank.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: FGeneralLedgerCashReportPerCostCenterBank_FormClosed, FGeneralLedgerCashReportPerCostCenterBank_Load, Private, Public, format_grid, get_gv, gv_master_MouseUp, le_branch_EditValueChanged, le_entity_EditalueChanged, le_from_gcal_EditValueChanged
- Table/entity sample: ac_mstr, bk_mstr, cash_mstr, cc_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, ob_mstr, pby_mstr, wf_mstr, xemp_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetDetail.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FRecalculateBudgetProject.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: End, FRecalculateBudgetProject_Load, Private, Public, Sub, cancel_data, delete_data, edit_data, format_grid, gv_header_Click
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, cc_mstr, en_mstr, pby_mstr, pbyd_det, pjc_mstr, po_mstr, pod_det, rbp_mstr, rbpd_det

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetDetail.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: AddData, End, FBudgetDetail_Load, Function, ImportFromExcel, LoadDataExcel, Private, Public, be_import_xls_ButtonClick, btn_add_update_Click
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det

## `Starcom Solution/Starcom.Project/Module/Sales Order/report/FSalesOrderReport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderReport_Load, Private, Public, format_grid, load_cb, load_data_many, load_detail, load_detail_close, xtc_master_SelectedPageChanged
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, class_mstr, code_mstr, cu_mstr, cust_group, en_mstr, group_mstr, inst_mstr, loc_mstr, packaging_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBugdetProjectReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_po, gv_po, xtp_po

## `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FActivity.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Activity, ElseIf, End, FActivity_Load, GetID_Local, Private, Public, before_save, cancel_data, delete_data
- Table/entity sample: activity_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr

## `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FActivity.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Activity, Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_det

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/FAgama.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: ElseIf, End, FAgama_Load, Function, Private, Public, before_delete, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, code_mstr, en_mstr, xemp_mstr

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/FZEmployee.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: ElseIf, End, FEmployeeNew_Load, Function, Private, Public, before_delete, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, code_mstr, en_mstr, xemp_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FDisbursementRealizationSearch.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Method sample: End, FDisbursementRealizationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_data_Click
- Table/entity sample: ac_mstr, bk_mstr, cash_mstr, cashd_det, cc_mstr, cu_mstr, en_mstr, pby_mstr, pjc_mstr, wf_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FPartnerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FPartnerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_cb
- Table/entity sample: ac_mstr, branch_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Report/FAPInvoiceReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Over Due
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajakPrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FGeneralLedgerCashReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/General Ledger/FCostCenter.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: ElseIf, End, FDomain_Load, Private, Public, before_save, cc_en_id_EditValueChanged, delete_data, edit, edit_data
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, en_mstr, loc_mstr, pt_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FCashManagementReport2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FSalesOrderRecapSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSalesOrderRecapSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, allocated_ship, code_mstr, en_mstr, loc_mstr, packaging_mstr, pod_det, pt_mstr, ptnr_mstr, siteid_mstr, so_mstr, sod_det

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FGeneralLedgerCashReportPerCostCenterBank.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/FDocumentApproval.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FDocumentApproval_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: en_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FCashManagementReport.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: FCashManagementReport_Load, FGeneralLedgerCashReportPerCostCenterBank_FormClosed, Private, Public, format_grid, get_gv, gv_master_MouseUp, le_branch_EditValueChanged, le_entity_EditalueChanged, le_from_gcal_EditValueChanged
- Table/entity sample: ac_mstr, bk_mstr, cash_mstr, cashd_det, dr_det, dz_det, en_mstr, gcal_mstr, pby_mstr, pbyd_det, pjc_mstr, wf_mstr

## `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FSiteID.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Report/FARPaymentReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FARPaymentReport_Load, Public, format_grid, load_cb, load_data_many
- Table/entity sample: ac_mstr, acd_mstr, ar_mstr, arnota_mstr, arpay_payment, arpayd_det, arpaydd_det, arpayddd_det, bg_mstr, bk_mstr, branch_mstr, cc_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FDisbursementVoucherReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FDisbursementVoucherReport_Load, Public, format_grid, load_data_many
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cfr_mstr, cu_mstr, en_mstr, pby_mstr, pjc_mstr, xemp_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FRecalculateBudgetCC.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: scc_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/report/FSalesOrderShipmentReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FSalesOrderShipmentReport_Load, Private, Public, format_grid, load_cb, load_data_many, load_detail, load_detail_with_serial
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cu_mstr, cust_group, driver_mstr, en_mstr, inst_mstr, loc_mstr, packaging_mstr, pt_group, pt_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Report/FAPPaymentReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAPPaymentReport_Load, Public, format_grid, load_data_many
- Table/entity sample: ac_mstr, acd_mstr, acdd_mstr, ap_mstr, appay_payment, appayd_det, appaydd_det, appayddd_det, bg_mstr, bk_mstr, branch_mstr, cc_mstr

## `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FSiteID.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FSiteID_Load, GetID_Local, Private, Public, delete_data, edit, edit_data, format_grid
- Table/entity sample: en_mstr, ptnr_mstr, siteid_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FPOCustomerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment, credit
- Method sample: ElseIf, End, FPOCustomerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, cu_mstr, cust_mstr, en_mstr, loc_mstr, packaging_mstr, pl_mstr, pla_mstr

## `Starcom Solution/Starcom.Project/__General Form/FCodeMstr.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRSubInvoice.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/___Function Helper/Cls_Bilangan.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_empat, nominal_enam, nominal_lima, nominal_satu, nominal_sembilan

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FRecalculateBudgetProject.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: scc_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Detail_BeforePrint, End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr, arso_so, so_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementVoucherPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupFooter1_BeforePrint, If, Pesan, Private, Public, SpellDigit, SpellUnit, Terbilang, TerbilangDollar
- Table/entity sample: cash_mstr, cfr_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FProjectSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, credit
- Method sample: End, FSiteSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: bom_mstr, boq_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, pjc_mstr, prj_mstr, pt_mstr, ptnr_mstr, req_mstr, ro_mstr

## `Starcom Solution/Starcom.Project/Module/Distribution/Boq/XRBOQSub.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FDisbursementVoucherReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FVoucherSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Report/FARPaymentReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FSiteIDImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FSiteIDImport_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, load_cb
- Table/entity sample: ptnr_mstr, siteid_mstr

## `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, GroupFooter2_BeforePrint, GroupHeader1_BeforePrint, Private, XRPurchaseOrderPrintOut_BeforePrint, XRPurchaseOrderPrintOut_PrintProgress
- Table/entity sample: ds_po, po_mstr, pod_det, wf_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FInvoiceSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: End, FInvoiceSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ar_mstr, branch_mstr, code_mstr, cu_mstr, en_mstr, fp_mstr, ptnr_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FBalanceOfBankSummaryReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Sales Order/report/FSalesOrderReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Report/FAPPaymentReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FDRCRMemoSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, GroupHeader1_BeforePrint, If, Pesan, Private, Public, SpellDigit, SpellUnit, Terbilang, TerbilangDollar
- Table/entity sample: pby_mstr, pbyd_det, wf_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupFooter2_BeforePrint, Private, XRFakturPajakFormPlain_AfterPrint, XRFakturPajakFormPlain_BeforePrint

## `Starcom Solution/Starcom.Project/__Browse References/FProjectAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FProjectAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: boq_mstr, boqd_det, code_mstr, en_mstr, pjc_mstr, pt_mstr, um_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Detail_BeforePrint, End, GroupHeader1_BeforePrint, If, Pesan, Private, Public, SpellDigit, SpellUnit, Terbilang
- Table/entity sample: cash_mstr, cashd_det, wf_mstr

## `Starcom Solution/Starcom.Project/Module/Sales Order/report/FSalesOrderShipmentReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Master Data/Company/XRDocumentApprovalSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FRequisitionSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FSiteIDImport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajakPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: End, FFakturPajakPrint_Load, Private, Public, be_first_ButtonClick, be_to_ButtonClick, ce_page_number_CheckedChanged, le_cur_EditValueChanged, preview
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, fp_mstr, pt_mstr, ptnr_mstr, ptnra_addr, sod_det, soshipd_det

## `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetClosing.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__General Form/frmPrintDialog.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: CreateForm, CreateObjectInstance, CreateReport, End, ExportToolStripMenuItem_Click, Private, Public, bt_design_Click, bt_preview_Click, frmPrintDialog2_Load

## `Starcom Solution/Starcom.Project/__Browse References/FNotaSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FNotaSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, branch_mstr, code_mstr, cu_mstr, en_mstr, ptnr_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FFakturPajakSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FFakturPajakSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ar_mstr, en_mstr, fp_mstr, ptnr_mstr, ptnra_addr, ti_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FNetOffBalance.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FNetOffBalance_Load, Private, Public, format_grid, load_data_many, sb_gen_Click
- Table/entity sample: cc_mstr, en_mstr, netoffbal_mstr, xemp_mstr

## `Starcom Solution/Starcom.Project/__Browse References/FBudgetSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FBudgetSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: bdgt_mstr, bdgth_hist, cc_mstr, pjc_mstr, ptnr_mstr, so_mstr

## `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupFooter2_BeforePrint, Private, XRFakturPajakFormPlain_AfterPrint, XRFakturPajakFormPlain_BeforePrint

## `Starcom Solution/Starcom.Project/__Browse References/FPurchaseOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Starcom Solution/Starcom.Project/__Browse References/FPurchaseReceiptScaleSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
