# GRAFINDO_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas grafindo.

- Total file prioritas dianotasi: **180**

## `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturn.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrderReturn_Load, If, ImportFromExcel, Private, Public, approve, approve_line
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bill_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr

## `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMP.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FPOCustomerGMP_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ar_mstr, branch_mstr, cmaddr_mstr, code_mstr, creditterms_mstr, ct_mstr, cu_mstr, cust_mstr, en_mstr, gc_hist, gc_inv, group_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderShipment_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_delete
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, driver_mstr, en_mstr, gcald_so

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FDRCRMemo.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, ars_ship, arso_so, bk_mstr, branch_mstr, browse_so, cmaddr_mstr, code_mstr, cu_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FTransferIssuesPackingList_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: box_det, branch_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pack_mstr, packaging_mstr, packd_det

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FTransferIssues_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, packaging_mstr, pb_mstr, pbd_det, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, Outstanding, credit
- Method sample: Else, ElseIf, End, FDisbursementRequest_Load, ImportFromExcel, NavigateWebURL, Private, Public, SimpleButton1_Click, approve
- Table/entity sample: ac_mstr, bdgtd_det, bgtinfo_mstr, bk_mstr, branch_mstr, cash_mstr, cc_mstr, cu_mstr, en_mstr, memo_mstr, pby_mstr, pbyd_det

## `Grafindo Solution/Grafindo.Project/Module/Financial/AP Invoice/FVoucher.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_branch_id_EditValueChanged, ap_credit_term_EditValueChanged, ap_cu_id_EditValueChanged, ap_date_EditValueChanged, ap_due_date_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, app_po, bk_mstr, branch_mstr, browse_po, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, detail_po, en_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/ds_transfer_printout_sys.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: addr_mstr, cmaddr_mstr, code_mstr, dr_mstr, loc_mstr, oc_mstr, pt_mstr, ptsfr_mstr, ptsfrd_det, type_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel
- Method sample: Else, ElseIf, End, FDisbursementRealization_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, bdgtd_det, bgtinfo_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cmaddr_mstr, cu_mstr, emp_mstr, en_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FCopyData3.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: End, FCopyData3_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_data_many, sb_clear_datagrid_Click, sb_del_ar_Click
- Table/entity sample: ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, arpaydd_det, ars_ship, arso_so, ptnr_mstr, so_mstr, so_payment, sod_det

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisition.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FRequisition_Load, ImportFromExcel, NavigateWebURL, Private, Public, SimpleButton1_Click, approve
- Table/entity sample: boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, its_mstr, itsd_det, memo_mstr, pjc_mstr, pt_mstr, ptnr_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_cu_id_EditValueChanged, before_delete, before_save, browse_data, browse_pd
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cfr_mstr, cmaddr_mstr, cu_mstr, dt_det, en_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecap.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Can't Cancel, Outstanding
- Method sample: Else, ElseIf, End, FPaymentRecap_Load, Private, Public, ap_en_id_EditValueChanged, approve, approve_line, before_delete
- Table/entity sample: ap_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, en_mstr, payrec_mstr, pby_mstr, pbyd_det, ptnr_mstr, tran_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARPaymentNoOtherAmount.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FARPayment_Load, Private, Public, _load_data_grid_detail, arpay_bill_to_EditValueChanged, arpay_bk_id_EditValueChanged, arpay_branch_id_EditValueChanged, arpay_date_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, arso_so, bg_mstr, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, cust_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FGeneratePackingList.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FGeneratePackingList_Load, FixAllData, Private, Public, SortGridView, Test, before_save, cancel_data
- Table/entity sample: branch_mstr, code_mstr, en_mstr, loc_mstr, pack_mstr, packd_det, pb_mstr, pbd_det, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/AP Invoice/FPaymentManualChecks.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FPaymentManualChecks_Load, Private, Public, _load_data_grid_detail, appay_bg_oid_ButtonClick, appay_bk_id_EditValueChanged, appay_branch_id_EditValueChanged, appay_date_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, appay_payment, appayd_det, appaydd_det, ar_mstr, arpay_payment, arpayd_det, arpaydd_det, bg_mstr, bk_mstr, branch_mstr

## `Grafindo Solution/Grafindo.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, its_mstr, itsd_det, loc_mstr, pb_mstr

## `Grafindo Solution/Grafindo.Project/Module/Smart Report/FSalesSmartReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: End, FSOSumReportChart_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, SimpleButton1_Click, ce_extend_view_CheckedChanged, ce_setting_CheckedChanged
- Table/entity sample: branch_mstr, cc_mstr, ce_so, chart_so, class_mstr, code_mstr, cu_mstr, cust_group, cust_mstr, customer_group, en_mstr, group_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FInventoryRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FInventoryRequest_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, pb_mstr, pbd_det, pt_mstr, tran_mstr, wf_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderReturnApproval_Load, If, Private, Public, approve_wf, cancel_wf, format_grid, get_code
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bk_mstr, branch_mstr, cc_mstr, code_mstr, cu_mstr, en_mstr, glt_det, inst_mstr, invc_mstr

## `Grafindo Solution/Grafindo.Project/Module/Smart Report/FARSmartReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSOSumReportChart_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, SimpleButton1_Click, ce_extend_view_CheckedChanged, ce_setting_CheckedChanged
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bk_mstr, branch_mstr, chart_so, code_mstr, cu_mstr, en_mstr, group_mstr, inst_mstr, pt_mstr

## `Grafindo Solution/Grafindo.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pocust_mstr, pod_det, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMPApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FPOCustomerGMPApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval
- Table/entity sample: aprv_mstr, branch_mstr, cmaddr_mstr, code_mstr, creditterms_mstr, cu_mstr, cust_mstr, en_mstr, gc_hist, gc_inv, group_mstr, gv_hist

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMP.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_hist, gc_inv, gv_hist, gv_inv, pod_det, xtp_hist, xtp_inv

## `Grafindo Solution/Grafindo.Project/Module/Administrative Tools/FUserGroup.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cb_group, gc_group, gv_group, scc_group, xtp_group

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FDRCRMemo.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, credit
- Method sample: ElseIf, End, FDisbursementRealizationApproval_Load, Private, Public, approve_wf, cancel_wf, ce_selection1_CheckedChanged, exportpdf, format_grid
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, glt_det, pby_mstr, pbyd_det

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FPackingList.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FPackingList_Load, Private, Public, cancel_data, ce_all2_CheckedChanged, delete_data, edit_data, format_grid
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, loc_mstr, pack_mstr, packd_det, pb_mstr, pbd_det, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Administrative Tools/FUserGroup.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: BarButtonItem1_ItemClick, ElseIf, End, FUserGroup_Load, Private, Public, Timer1_Tick, before_save, btKillAll_Click, cancel_data
- Table/entity sample: branch_mstr, cb_group, cc_mstr, dom_mstr, en_mstr, gc_group, gv_group, loc_mstr, pt_mstr, tran_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/AP Invoice/FVoucher.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, before_delete, before_save, browse_data, cancel_data, delete_data
- Table/entity sample: ac_mstr, arpay_payment, bg_mstr, bk_mstr, branch_mstr, cbh_hist, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance

## `Grafindo Solution/Grafindo.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Transaction/FBankLoanDisbursement.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FBankLoanDisbursement_Load, Private, Public, _load_data_grid_detail, appay_en_id_EditValueChanged, before_delete, before_save, bkloan_creditor_EditValueChanged
- Table/entity sample: ac_mstr, bkinteresth_mstr, bkloan_mstr, bkloand_det, bkprk_mstr, branch_mstr, cc_mstr, code_mstr, cu_mstr, en_mstr, glt_det, outstanding_payment

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisition.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementPromotion.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FDisbursementPromotion_Load, Private, Public, be_pocust_oid_ButtonClick, before_save, cancel_data, cancel_line, delete_data
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance, glt_det

## `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecapApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: ElseIf, End, FPaymentRecapApproval_Load, Private, Public, ab_aprv_ap_Click, approve_wf, before_update, cancel_wf, exportpdf
- Table/entity sample: ap_mstr, bk_mstr, branch_mstr, cc_mstr, en_mstr, payrec_mstr, pby_mstr, ptnr_mstr, tran_mstr, wf_mstr, xemp_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturn.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderShipment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/XRPOCustomerPrintOut.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementLoan.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FDisbursementLoan_Load, Private, Public, be_pocust_oid_ButtonClick, before_save, cancel_data, delete_data, delete_glt_det
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance, glt_det

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XRDisbursementPromotionPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval_Spv.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FDisbursementApproval_Spv_Load, NavigateWebURL, Private, Public, SimpleButton1_Click, approve_wf, cancel_wf, exportpdf
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cash_mstr, cc_mstr, cu_mstr, en_mstr, glt_det, memo_mstr, pby_mstr, pbyd_det, pjc_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRefund.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FDisbursementRefund_Load, Private, Public, be_pocust_oid_ButtonClick, before_save, cancel_data, delete_data, delete_glt_det
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, glt_det, inst_mstr, loanfi_mstr, pocust_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRTransferIssuesPackingList_2.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Grafindo Solution/Grafindo.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSOShipmentReceive.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRTransferIssuesPackingList.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FOutstandingPOCustMove.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: BtRetrieve_Click, End, FOutstandingPOCustMove_Load, Private, Public, before_save, browse_data, cancel_data, ce_all_CheckedChanged, delete_data
- Table/entity sample: branch_mstr, code_mstr, cu_mstr, cust_mstr, en_mstr, group_mstr, packaging_mstr, pocust_mstr, pocustd_det, pocusti_inv, pt_group, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSOShipmentReceive.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FSOShipmentReceive_Load, Private, Public, before_delete, before_save, browse_data, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cu_mstr, cust_mstr, driver_mstr, en_mstr, inst_mstr, loc_mstr, number_mstr, packaging_mstr, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/ds_pack.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, CreateInstance, DataTable1RowChangeEventHandler, End, GetRowType, GetSchemaSerializable, GetTypedDataSetSchema, GetTypedTableSchema, InitClass

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRInvoice.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Transaction/FBankLoanPayment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FBankLoanPayment_Load, Private, Public, _load_data_grid_detail, appay_en_id_EditValueChanged, before_delete, before_save, bkloanp_contract_number_ButtonClick
- Table/entity sample: ac_mstr, bkloan_mstr, bkloanp_payment, bkloanpd_det, branch_mstr, cc_mstr, code_mstr, cu_mstr, en_mstr, glt_det

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisitionApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FRequisitionApproval_Load, NavigateWebURL, Private, Public, SimpleButton1_Click, approve_wf, cancel_wf, exportpdf
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, memo_mstr, pjc_mstr, pt_mstr, ptnr_mstr, req_mstr, reqd_det, si_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XRDisbursementLoanPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRReceiptNotesPrint_2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRReceiptNotesPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Transaction/FBankLoanPayInterest.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FBankLoanPayInterest_Load, Private, Public, _load_data_grid_detail, appay_en_id_EditValueChanged, before_delete, before_save, bkloanpi_loan_acc_no_ButtonClick
- Table/entity sample: ac_mstr, bkloan_mstr, bkloanpid_det, branch_mstr, code_mstr, cu_mstr, en_mstr, glt_det

## `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecapApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FDisbursementApproval_Load, NavigateWebURL, Private, Public, SimpleButton1_Click, approve_wf, cancel_wf, ce_selection1_CheckedChanged
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cash_mstr, cc_mstr, cu_mstr, en_mstr, glt_det, memo_mstr, pby_mstr, pbyd_det, pjc_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/AP Invoice/FPaymentManualChecks.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMPApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_hist, gc_inv, gv_hist, gv_inv, xtp_hist, xtp_inv

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumber.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FPartNumber_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, is_mstr, its_mstr, loc_mstr, pl_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRSuratJalan.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FARReport_Load, Private, Public, format_grid, generate_ar, le_branch_EditValueChanged, le_customer_EditValueChanged, le_entity_EditValueChanged, load_cb
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, ars_ship, bk_mstr, branch_mstr, class_mstr, code_mstr, cu_mstr

## `Grafindo Solution/Grafindo.Project/Module/Smart Report/FSalesSmartReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ce_so, chart_group, chart_so, cust_group, p_group

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRBillStatement.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRInvoiceDistLine2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecap.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementLoan.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustMove.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Smart Report/FARSmartReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Shipment
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: chart_group, chart_so

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARPaymentNoOtherAmount.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRCashInARPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumberImport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FInventoryRequest.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FBranch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FRoutingApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FRoutingApproval_Load, GetID_Local, Private, Public, before_save, browse_data, cancel_data, delete_data
- Table/entity sample: aprv_mstr, branch_mstr, cc_mstr, en_mstr, tran_mstr, wf_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRARCards.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: so_payment

## `Grafindo Solution/Grafindo.Project/__Browse References/FPurchaseOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPurchaseOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, packaging_mstr, par_po, pjc_mstr, pl_mstr, po_mstr, pod_det

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementPromotion.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FOverBooking.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRefund.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRInventoryReqPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval_Spv.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FSalesMove.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FSalesMove.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: BtRetrieve_Click, End, FAccount_Load, Private, Public, before_save, cancel_data, ce_select_CheckedChanged, delete_data, edit_data
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, arso_so, branch_mstr, cc_mstr, en_mstr, pntr_mstr, ptnr_mstr, riu_mstr, so_mstr, sod_det

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRTransferIssuesPrint_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustMassCancel.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: BtRetrievePOcust_Click, BtRetrieve_Click, End, FPOCustMassCancel_Load, Private, Public, before_save, cancel_data, ce_all_CheckedChanged, ce_all_pocust_CheckedChanged
- Table/entity sample: branch_mstr, code_mstr, cu_mstr, en_mstr, pi_mstr, pocust_mstr, pocustd_det, ptnr_mstr, tran_mstr, wf_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRTransferIssuesPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Price List/FPriceListQty.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FPriceListDetail_Load, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: code_mstr, cu_mstr, detail_rule, en_mstr, pi_mstr, pid_det, pidd_det, pidd_payment, promo_mstr, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FGeneratePackingList.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XRDisbursementVoucherPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FRoutingApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumberImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FPartNumberImport_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_cb, load_cb_en, load_data_many
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, group_mstr, is_mstr, its_mstr, loc_mstr, pl_mstr, pt_group, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Transaction/FBankLoanDisbursement.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARBillStatement.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XROverBookingPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustMassCancel.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Print Out/XRSO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/XRPaymentRecap.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FOutstandingPOCustMove.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FBranch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: ElseIf, End, FBranch_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save
- Table/entity sample: ac_mstr, branch_mstr, code_mstr, en_mstr, regional_mstr, type_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Report/FSOShipmentReturnReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ce_so

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisitionApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FAccount.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRPreparationPackingList2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Print Out/XRSalesOrderReturPrint_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FOutstandingMove.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: BtRetrieve_Click, End, FAccount_Load, Private, Public, before_save, cancel_data, delete_data, edit_data, format_grid
- Table/entity sample: ar_mstr, arpay_payment, ars_ship, arso_so, branch_mstr, cc_mstr, code_mstr, en_mstr, pntr_mstr, ptnr_mstr, riu_mstr, so_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRPreparationPackingList.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FOutstandingMove.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FPackingList.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Transaction/FBankLoanPayInterest.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Transaction/FBankLoanPayment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Report/FViewInterestPRKReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FViewInterestPRKReport_Load, Private, Public, format_grid, get_gv, gv_master_MouseUp, init_le_local, le_from_account_EditValueChanged, le_from_gcal_EditValueChanged
- Table/entity sample: ac_mstr, bkinteresth_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, gltbuf_balance, v_balance

## `Grafindo Solution/Grafindo.Project/__Browse References/FInventoryRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_price_list
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pb_mstr, pbd_det, pi_mstr, pid_det, pidd_det, pidd_payment, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustMove.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: BtRetrieve_Click, End, FPOCustMove_Load, Private, Public, before_save, browse_data, cancel_data, delete_data, edit_data
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cust_mstr, en_mstr, loanfi_mstr, loanfo_mstr, packaging_mstr, pocust_mstr, pocustd_det, prm_mstr, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRSubBoxLabel.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Address Taxes/FCustomerBillHold.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Print Out/XRSalesOrderReturPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/XRRequisitionCost.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRSummaryPrepPackList.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRCheckPackingList.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FReceiptNotes.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: Else, ElseIf, End, FReceiptNotes_Load, Private, Public, before_delete, before_save, cancel_data, delete_data
- Table/entity sample: branch_mstr, code_mstr, en_mstr, ptnr_mstr, sinv_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FCashflowReport.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FCashflowReport_Load, Private, Public, format_grid, get_um_list, le_month_EditValueChanged, le_year_EditValueChanged, load_cb, load_data_many
- Table/entity sample: ac_mstr, appay_payment, appayd_det, bk_mstr, bkloan_mstr, bkloand_det, bkloanp_payment, bkloanpd_det, bkloanpid_det, cash_mstr, cashd_det, cfr_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FReceiptNotes.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/General Ledger/FOpeningBalance.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, credit
- Method sample: ElseIf, End, FOpeningBalance_Load, InsertOpeningBalanceToolStripMenuItem_Click, Private, Public, arrange_from_excel, before_save, delete_data, edit
- Table/entity sample: ac_mstr, bk_mstr, cu_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FCashInBranch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRBillStatementAddress.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: Dispose, InitializeComponent, Public

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FBank.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wh_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Master Data/FDaysOff.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/XRRequisition.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/General Ledger Report/FGeneralLedgerReportGridMulti.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FBalanceSheetReport_Load, Private, Public, format_grid, get_gv, gv_master_MouseUp, le_entity_EditalueChanged, le_from_gcal_EditValueChanged, le_to_gcal_EditValueChanged
- Table/entity sample: ac_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, gltbuf_balance

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARBillStatement.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Shipment, credit
- Method sample: Doesnt, ElseIf, End, FARBillStatement_Load, Private, Public, ap_en_id_EditValueChanged, ar_branch_id_EditValueChanged, arnota_ptnr_id_EditValueChanged, before_save
- Table/entity sample: ar_mstr, arnota_mstr, arnotad_det, billsign_mstr, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, inst_mstr, ptnr_addr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/__Browse References/FAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Report/FSOShipmentReturnTopReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FOverBookingAdjustment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRefundPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Report/FViewInterestPRKReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: v_balance

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARBillStatementWizard.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: End, FARBillStatementWizard_Load, Private, Public, SetFirstDate, before_save, ce_all_CheckedChanged, clear_table, format_grid, get_transaction_number_smart
- Table/entity sample: ar_mstr, arnota_mstr, arnotad_det, branch_mstr, cust_mstr, ds_det, en_mstr, ptnr_mstr, ptnra_addr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FAccount.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete
- Method sample: ElseIf, End, FAccount_Load, Private, Public, before_delete, before_save, delete_data, edit, edit_data
- Table/entity sample: ac_mstr, branch_mstr, cu_mstr, dom_mstr, gcal_mstr, glbal_balance, taxr_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Master Data/FBankCreditLimit.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FBankCreditLimit_Load, GetID_Local, Private, Public, delete_data, edit, edit_data, format_grid
- Table/entity sample: ac_mstr, bkcreditl_mstr, bkcreditlh_mstr, code_mstr, cu_mstr, en_mstr, gcal_mstr, glbal_balance

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Price List/FPriceListQty.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: xtp_rule

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Address Taxes/FSalesPerson.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/__General Form/FCodeMstr.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FCashflowReportBank.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FCashflowReportBank_Load, Private, Public, format_grid, load_cb, load_data_many, load_month, set_sql
- Table/entity sample: ac_mstr, appay_payment, appayd_det, bk_mstr, bkloan_mstr, bkloand_det, bkloanp_payment, bkloanpd_det, bkloanpid_det, cash_mstr, cashd_det, cfr_mstr

## `Grafindo Solution/Grafindo.Project/__Browse References/FDRCRMemoSearch.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Shipment
- Method sample: End, FDRCRMemoSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, code_mstr, cu_mstr, en_mstr, ptnr_mstr, soship_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Report/FSOShipmentReturnReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FSOReportDetailAmount_Load, Private, Public, ce_shipment_CheckedChanged, ce_so_CheckedChanged, format_grid, load_data_many, load_detail, load_detail_1
- Table/entity sample: branch_mstr, cc_mstr, ce_so, code_mstr, cu_mstr, cust_group, cust_mstr, custg_mstr, en_mstr, group_mstr, inst_mstr, loc_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/General Ledger Report/FGeneralLedgerReportGridMulti.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FCashflowWeek.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCashflowWeek_Load, Private, Public, before_delete, before_save, cancel_data, delete_data, edit
- Table/entity sample: cfw_mstr, cfwd_det, en_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FCashInBranch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: ElseIf, End, FCashInBranch_Load, Private, Protected, Public, SetToAllRowsToolStripMenuItem_Click, before_delete, before_save, cancel_data
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, en_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Over Due, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Financial/Bank Loan/Report/FViewInterestReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: v_payment

## `Grafindo Solution/Grafindo.Project/__Browse References/FPOCustomerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FPOCustomerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, cu_mstr, cust_mstr, en_mstr, inst_mstr, loc_mstr, packaging_mstr, pl_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FLoanFund.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/__Browse References/FDisbursementRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FPengajuanBiayaSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, bk_mstr, cc_mstr, cu_mstr, en_mstr, pby_mstr, pdprd_det, xemp_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARReportWithUnapprovalSOReturn.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Shipment, credit
- Method sample: End, FARReportWithUnapprovalSOReturn_Load, Private, Public, format_grid, load_cb, load_data_many, xtc_master_SelectedPageChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, bk_mstr, branch_mstr, code_mstr, cu_mstr, cust_group, en_mstr, fp_mstr, inst_mstr

## `Grafindo Solution/Grafindo.Project/Module/Financial/Cashflow/FCashflowWeek.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Report/FSalesOrderReturnReport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSalesOrderReturnReport_Load, Private, Public, format_grid, gv_view1_SelectionChanged, load_cb, load_data_many, load_detail, load_detail_ar
- Table/entity sample: ar_mstr, branch_mstr, cc_mstr, code_mstr, cu_mstr, cust_group, en_mstr, inst_mstr, loc_mstr, packaging_mstr, pt_group, pt_mstr

## `Grafindo Solution/Grafindo.Project/Module/Sales Order/Print Out/ds_soship.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, CreateInstance, DataTable1RowChangeEventHandler, End, GetEnumerator, GetRowType, GetSchemaSerializable, GetTypedDataSetSchema, GetTypedTableSchema

## `Grafindo Solution/Grafindo.Project/Module/Master Data/Address Taxes/FSalesPerson.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: ElseIf, End, FSalesPerson_Load, GetID_Local, Private, Public, delete_data, edit, edit_data, format_grid
- Table/entity sample: branch_mstr, dom_mstr, en_mstr, ptnr_mstr, ptnra_addr
