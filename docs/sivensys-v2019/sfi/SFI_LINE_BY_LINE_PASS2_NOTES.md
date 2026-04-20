# SFI_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas sfi.

- Total file prioritas dianotasi: **180**

## `SFI Solution/SFI.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, cs_mstr, csd_det

## `SFI Solution/SFI.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, ars_ship, arso_so, bk_mstr, branch_mstr, browse_so, cmaddr_mstr, code_mstr, cu_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrderShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderShipment_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_delete
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, driver_mstr, en_mstr, gcald_so

## `SFI Solution/SFI.Project/Module/Manufacture/FWOReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FWOReceipt_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial, browse_data_wip_serial
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, ds_so, en_mstr, gc_so, glt_det, gv_so

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/ds_ti.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBypt_code, GetData, GetEnumerator
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soshipd_det, um_mstr

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel
- Method sample: Else, ElseIf, End, FDisbursementRealization_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, bdgtd_det, bgtinfo_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cmaddr_mstr, cu_mstr, emp_mstr, en_mstr

## `SFI Solution/SFI.Project/Module/Distribution/Qc/FQualityControl.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FQualityControl_Load, GetAssIDMax, Private, Public, before_delete, before_save, browse_data, browse_data_reject
- Table/entity sample: ac_mstr, ass_mstr, branch_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pjc_mstr, po_mstr, pt_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, credit
- Method sample: ElseIf, End, FARPayment_Load, Private, Public, _load_data_grid_detail, arpay_arnota_oid_ButtonClick, arpay_bill_to_EditValueChanged, arpay_bk_id_EditValueChanged, arpay_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, arpaydd_det, arso_so, bg_mstr, bk_mstr, branch_mstr, cc_mstr

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/Control File/FControlFileManufacture.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: End, FControlFileManufacture_Load, Private, Public, WO_CBACC, WO_CBACC_subcont, WO_CLACC, WO_CLACC_subcont, WO_COACC, WO_COACC_subcont
- Table/entity sample: ac_mstr

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, Outstanding, credit
- Method sample: Else, ElseIf, End, FCreateInvoiceNew_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, bdgtd_det, bgtinfo_mstr, bk_mstr, branch_mstr, cc_mstr, cu_mstr, en_mstr, pby_mstr, pbyd_det, pjc_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Master Data/FCustomer.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, credit
- Method sample: Else, ElseIf, End, FPartnerAll_Load, GetID_Limit, GetID_Local, Private, Public, approve, approve_line
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cmt_mstr, code_mstr, country_mstr, creditterms_mstr, cu_mstr, dom_mstr, en_mstr, inst_mstr, loc_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWIPReturn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FWIPReturn_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pt_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryReceipts_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save, browse_data
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pla_mstr

## `SFI Solution/SFI.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, its_mstr, itsd_det, loc_mstr, pb_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_save
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, packaging_mstr, pla_mstr

## `SFI Solution/SFI.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pod_det, pt_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrder.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FWorkOrder_Load, Private, Public, before_delete, before_save, browse_data, browse_data_so
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, detail_so, dt_so, en_mstr, fes_mstr, gc_so, gv_so, ps_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_cu_id_EditValueChanged, before_delete, before_save, browse_data, browse_pd
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cfr_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr

## `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseReturn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FPurchaseReturn_Load, Private, Public, before_save, browse_data, browse_data_serial, cancel_data, delete_data
- Table/entity sample: ass_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderIssue.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Else, ElseIf, End, FWorkOrderIssue_Load, If, Private, Public, XtraTabControl1_SelectedPageChanged, before_save, browse_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, invc_mstr, invh_mstr, loc_mstr, pt_mstr, ro_mstr, sct_mstr

## `SFI Solution/SFI.Project/Module/Master Data/FCustomer.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FWOReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FDisbursementRealizationApproval_Load, Private, Public, approve_wf, cancel_wf, ce_selection1_CheckedChanged, exportpdf, format_grid
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, glt_det, pby_mstr, pbyd_det

## `SFI Solution/SFI.Project/Module/Manufacture/FWOLaborFeedbackAll.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Qty, credit
- Method sample: ElseIf, End, FItemSub_Load, Private, Public, before_delete, before_save, calc_elapsed, cancel_data, delete_data
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, pt_mstr, um_mstr, wc_mstr, wo_mstr, wor_mstr, wrd_det

## `SFI Solution/SFI.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FFakturPajak_Load, Private, Public, ar_cu_id_EditValueChanged, before_save, before_save_insert, cancel_approve
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, dr_det, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soship_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2_a5.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrderShipment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak_v1.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FFakturPajak_v1_Load, Private, Public, before_save, before_save_insert, browse_data, cancel_approve
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, dr_det, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soship_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderIssue.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrderApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: ElseIf, End, FPurchaseOrderApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, cu_mstr, en_mstr, loc_mstr, pjc_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrder.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, lcg_so, xtp_so

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SFI Solution/SFI.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/XRPurchaseOrderPrintOut.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_po

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/Control File/FControlFileManufacture.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/Routing and Work Center/FRouting.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FRouting_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save, browse_data
- Table/entity sample: ac_mstr, burden_mstr, code_mstr, cs_mstr, en_mstr, labor_mstr, partner_mstr, pt_mstr, ptnr_mstr, ro_mstr, rod_det, subcont_mstr

## `SFI Solution/SFI.Project/Module/Distribution/Qc/FQualityControl.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/General Ledger/FGenerateJournalWOCompIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FGenerateJournalWOCompIssues_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, insert_glt_det_woci, load_cb, load_data_many
- Table/entity sample: code_mstr, en_mstr, glt_det, loc_mstr, pt_mstr, woci_mstr, wocid_det, wod_det

## `SFI Solution/SFI.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `SFI Solution/SFI.Project/Module/Manufacture/FMaterialUsageStandar.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FProductStructure_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_first_ButtonClick, be_import_xls_ButtonClick, be_to_ButtonClick
- Table/entity sample: bom_mstr, code_mstr, en_mstr, fes_mstr, materialusage_mstr, materialusaged_det, pt_mstr, ptbom_mstr, um_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDistLine2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FWOMaterialRequest.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Qty
- Method sample: ElseIf, End, FWOMaterialRequest_Load, Private, Public, before_delete, before_save, browse_data, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, ps_mstr, pt_mstr, um_mstr, wo_mstr, wod_det, woi_mstr, woid_det

## `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumber.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FDomain_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, invc_mstr, is_mstr, its_mstr, loc_mstr

## `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `SFI Solution/SFI.Project/Module/Manufacture/XRWOReceiptPrintLotSerial.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: wor_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRCashInARPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Distribution/Inventory/Report/FInvReportByDate.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FARReportByAging_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, format_grid, le_branch_id_EditValueChanged, load_by_branch
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, invc_mstr, invh_group, invh_mstr, loc_mstr, pl_mstr, pt_group, pt_mstr

## `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumberImport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `SFI Solution/SFI.Project/Module/Manufacture/FWOLaborFeedbackAll.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Distribution/Qc/XRInspectionPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FPurchaseOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPurchaseOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, packaging_mstr, par_po, pjc_mstr, pl_mstr, po_mstr, pod_det

## `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrderApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `SFI Solution/SFI.Project/Module/Master Data/FCustomerApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FCustomerApproval_Load, Private, Public, approve_wf, cancel_wf, format_grid, get_user_approval, hold_wf
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, code_mstr, country_mstr, cu_mstr, dom_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr, sales_mstr

## `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseReturn.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryIssues.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/XRPurchaseReturnPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryReceipts.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementVoucherPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Report/Grid/XRCashBalance.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gltbuf_balance

## `SFI Solution/SFI.Project/Module/Distribution/Inventory/Report/FInvReportByDate.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: invh_group

## `SFI Solution/SFI.Project/Module/Manufacture/XRWOIssuePrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: woci_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/Print Out/XRSO_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `SFI Solution/SFI.Project/Module/Manufacture/FWORouteMaintenance.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SFI Solution/SFI.Project/Module/Financial/General Ledger/FGenerateJournalWOReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FGenerateJournalWOReceipt_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, insert_glt_det_worw, load_cb, load_data_many
- Table/entity sample: cs_mstr, en_mstr, glt_det, sct_mstr, wo_mstr, wor_mstr, wrd_det

## `SFI Solution/SFI.Project/Module/Sales Order/Print Out/XRSO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `SFI Solution/SFI.Project/Module/Manufacture/FWIPReturn.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderReceiptReportRounding.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FWorkOrderReceiptReportRounding_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, en_mstr, group_mstr, loc_mstr, packaging_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumberImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FPartNumberImport_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_cb, load_cb_en, load_data_many
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, group_mstr, is_mstr, its_mstr, loc_mstr, pl_mstr, pt_group, pt_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWOMaterialRequest.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/XRWOReceiptPrintNon.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: wor_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/XRWOMRPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Master Data/FLocation.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/General Ledger/FGenerateJournalSOShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment, credit
- Method sample: End, FGenerateJournalSOShipment_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, glt_det_so_shipment, load_cb, load_data_many
- Table/entity sample: code_mstr, en_mstr, glt_det, loc_mstr, packaging_mstr, pt_mstr, so_mstr, sod_det, soship_mstr, soshipd_det, um_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWOReceiptGrade.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/Routing and Work Center/FRouting.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SFI Solution/SFI.Project/__Browse References/FWOSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: End, FWOSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, cc_mstr, code_mstr, cs_mstr, ds_so, en_mstr, gv_so, loc_mstr, pjc_mstr, prj_mstr, ps_mstr, pt_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FMaterialUsageStandar.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FDRCRMemoSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Shipment
- Method sample: End, FDRCRMemoSearch_Load, Private, Public, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_CellValueChanging, gv_master_DoubleClick
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, code_mstr, cu_mstr, en_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Report/Grid/FGeneralLedgerCashReportPerUserBank.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: FBalanceSheetReport_Load, FGeneralLedgerCashReportPerUserBank_FormClosed, Private, Public, format_grid, get_gv, gv_master_MouseUp, le_branch_EditValueChanged, le_entity_EditalueChanged, le_from_gcal_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, appay_payment, ar_mstr, arpay_payment, bk_mstr, cc_mstr, cmaddr_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det

## `SFI Solution/SFI.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wh_mstr

## `SFI Solution/SFI.Project/Module/___Function Helper/Cls_Bilangan_new.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_duabelas, nominal_empat, nominal_empatbelas, nominal_enam, nominal_lima

## `SFI Solution/SFI.Project/Module/Master Data/FCustomerApproval.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FRequisitionSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FRequisitionSearch_Load, Private, Public, ce_select_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, loc_mstr, pjc_mstr, pt_group, pt_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWORouteMaintenance.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FWorkOrder_Load, Private, Public, before_save, browse_data, cancel_data, delete_data, edit
- Table/entity sample: ac_mstr, cc_mstr, en_mstr, pt_mstr, ro_mstr, si_mstr, wc_mstr, wo_mstr

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak_v1.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__General Form/FCodeMstr.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/ds_invoice2.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, CreateInstance, DataTable1RowChangeEventHandler, End, GetRowType, GetSchemaSerializable, GetTypedDataSetSchema, GetTypedTableSchema, InitClass

## `SFI Solution/SFI.Project/Module/Master Data/FLocation.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FLocation_Load, GetID_Local, Private, Public, delete_data, edit, edit_data, format_grid
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, is_mstr, loc_mstr, pt_mstr, ptnr_mstr, si_mstr, wh_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/FUpdateCOGSSOShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FUpdateCOGSSOShipment_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_cb, load_data_many, sb_update2_Click
- Table/entity sample: pt_mstr, sod_det, soship_mstr, soshipd_det

## `SFI Solution/SFI.Project/Module/Sales Order/Report/FSalesOrderReport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderReport_Load, Private, Public, format_grid, load_cb, load_data_many, load_detail, load_detail_close, xtc_master_SelectedPageChanged
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, class_mstr, code_mstr, cu_mstr, cust_group, en_mstr, group_mstr, inst_mstr, loc_mstr, packaging_mstr

## `SFI Solution/SFI.Project/__General Form/Cls_Bilangan.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_duabelas, nominal_empat, nominal_enam, nominal_lima, nominal_satu

## `SFI Solution/SFI.Project/__Browse References/FAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `SFI Solution/SFI.Project/__Browse References/FPartnerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FPartnerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_cb
- Table/entity sample: ac_mstr, branch_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderReceiptReportRounding.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/___Function Helper/FCodeMstr2.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajakPrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Report/Grid/FGeneralLedgerCashReportPerUserBank.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FSalesOrderRecapSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSalesOrderRecapSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, allocated_ship, code_mstr, en_mstr, loc_mstr, packaging_mstr, pod_det, pt_mstr, ptnr_mstr, so_mstr, sod_det, sor_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/FSOGiftReport_old.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: End, FSOGiftReport_old_Load, Private, Public, format_grid, load_cb, load_data_many, load_detail, load_detail_serial, load_group_cust
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cust_mstr, en_mstr, inst_mstr, loc_mstr, packaging_mstr, pt_group, pt_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/__Browse References/FDisbursementRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FPengajuanBiayaSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, bk_mstr, cc_mstr, cu_mstr, en_mstr, pby_mstr, pdprd_det, xemp_mstr

## `SFI Solution/SFI.Project/__Browse References/FPOCustomerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment, credit
- Method sample: ElseIf, End, FPOCustomerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, cu_mstr, cust_mstr, en_mstr, loc_mstr, packaging_mstr, pl_mstr, pla_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FUpdateCOGSWIPWOReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FUpdateCOGSWIPWOReceipt_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_cb, load_data_many, sb_update_Click
- Table/entity sample: en_mstr, pt_mstr, wo_mstr, wor_mstr

## `SFI Solution/SFI.Project/__Browse References/FWOMaterialRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWOMaterialRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pt_mstr, ro_mstr, sct_mstr, tld_mstr, um_mstr, wo_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderIssueReportRounding.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWorkOrderIssueReportRounding_Load, Private, Public, format_grid, load_data_many, load_detail, load_serial, load_wo_pivot
- Table/entity sample: cc_mstr, code_mstr, en_mstr, loc_mstr, pt_mstr, um_mstr, wo_mstr, woci_mstr, wocid_det, wod_det, woi_mstr

## `SFI Solution/SFI.Project/__Browse References/FWORoutingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: End, FWOSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, en_mstr, ps_mstr, pt_mstr, ro_mstr, um_mstr, wc_mstr, wo_mstr

## `SFI Solution/SFI.Project/__General Form/FCodeMstr.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderReceiptReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FInvoiceSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: End, FInvoiceSearch_Load, Private, Public, ce_select_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ar_mstr, branch_mstr, cu_mstr, en_mstr, fp_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/FDRCRMemoPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/___Function Helper/FCodeMstr2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr2_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr

## `SFI Solution/SFI.Project/__Browse References/FCustomerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FSalesPersonSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, code_mstr, country_mstr, cu_mstr, dom_mstr, en_mstr, gv_addr, gv_mstr, inst_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementVoucherPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupFooter1_BeforePrint, GroupHeader1_BeforePrint, If, Pesan, Private, Public, SpellDigit, SpellUnit, Terbilang
- Table/entity sample: cash_mstr, cfr_mstr

## `SFI Solution/SFI.Project/Module/Master Data/FChangeStatusCustomer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FChangeStatusCustomer_Load, Private, Public, format_grid, ptnr_code_ButtonClick, sb_process_Click
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, code_mstr, country_mstr, cu_mstr, dom_mstr, en_mstr, gc_addr, gc_mstr, gv_addr, gv_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/FSOGiftReport_old.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FUpdateCOGSWOIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FUpdateCOGSWOIssues_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_cb, load_data_many, sb_update_Click
- Table/entity sample: pt_mstr, woci_mstr, wocid_det, wod_det

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupHeader1_BeforePrint, If, Pesan, Private, Public, SpellDigit, SpellUnit, Terbilang, TerbilangDollar
- Table/entity sample: cash_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrderShipmentCOGSReport_2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FSalesOrderShipmentCOGSReport_2_Load, Private, Public, format_grid, load_cb, load_data_many, load_detail
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cu_mstr, cust_group, en_mstr, inst_mstr, loc_mstr, packaging_mstr, pt_group, pt_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/Report/FSalesOrderReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderIssueReportRounding.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupHeader1_BeforePrint, If, Pesan, Private, Public, SpellDigit, SpellUnit, Terbilang, TerbilangDollar
- Table/entity sample: pby_mstr

## `SFI Solution/SFI.Project/__Browse References/FProdStrucSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FProdStrucSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: boq_mstr, code_mstr, en_mstr, its_mstr, prj_mstr, prjd_det, ps_mstr, pt_mstr, ro_mstr, um_mstr

## `SFI Solution/SFI.Project/__Browse References/FWOReceiptSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWOReceiptSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, loc_mstr, pod_det, pt_mstr, wo_mstr, wor_mstr

## `SFI Solution/SFI.Project/__Browse References/FDRCRMemoSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, GroupHeader1_BeforePrint, If, Pesan, Private, Public, SpellDigit, SpellUnit, Terbilang, TerbilangDollar
- Table/entity sample: pby_mstr, pbyd_det, wf_mstr

## `SFI Solution/SFI.Project/Module/Manufacture/FWOReceiptGrade.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FWOReceiptGrade_Load, Private, Public, before_save, cancel_data, delete_data, edit, edit_data, format_grid
- Table/entity sample: cc_mstr, code_mstr, en_mstr, pt_mstr, wo_mstr, wor_mstr

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupFooter2_BeforePrint, Private, XRFakturPajakFormPlain_AfterPrint, XRFakturPajakFormPlain_BeforePrint

## `SFI Solution/SFI.Project/__Browse References/FLotSerialSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ass_mstr, invc_mstr, loc_mstr, pt_mstr

## `SFI Solution/SFI.Project/__Browse References/FPTBOMSrch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FBOMSrch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: bom_mstr, code_mstr, en_mstr, its_mstr, ps_mstr, pt_mstr, um_mstr

## `SFI Solution/SFI.Project/__Browse References/FProjectAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FProjectAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: boq_mstr, boqd_det, code_mstr, en_mstr, pjc_mstr, pt_mstr, um_mstr

## `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrderShipmentCOGSReport_2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FSalesOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FInvoiceSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FRequisitionSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FDisbursementRequestSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Detail_BeforePrint, End, GroupHeader1_BeforePrint, If, Pesan, Private, Public, SpellDigit, SpellUnit, Terbilang
- Table/entity sample: cash_mstr, cashd_det, wf_mstr

## `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/FDRCRMemoPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FDRCRMemoPrint_Load, Private, Public, be_first_ButtonClick, be_to_ButtonClick, branch_fill, preview
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, cust_mstr, en_mstr, inst_mstr, packaging_mstr

## `SFI Solution/SFI.Project/__Browse References/FUMSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FUMSearch_Load, Private, Public, fill_data, format_grid, get_sequel, get_um_conversion, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: code_mstr, en_mstr, pt_mstr, um_mstr

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajakPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: End, FFakturPajakPrint_Load, Private, Public, be_first_ButtonClick, be_to_ButtonClick, ce_page_number_CheckedChanged, le_cur_EditValueChanged, preview
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, fp_mstr, pt_mstr, ptnr_mstr, ptnra_addr, sod_det, soshipd_det

## `SFI Solution/SFI.Project/__Browse References/FNotaSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FNotaSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, branch_mstr, code_mstr, cu_mstr, en_mstr, ptnr_mstr

## `SFI Solution/SFI.Project/Module/Financial/General Ledger/FGenerateJournalWOCompIssues.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/General Ledger/FGenerateJournalWOReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FUpdateCOGSWOIssues.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Financial/General Ledger/FGenerateJournalSOShipment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FUpdateCOGSWIPWOReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Manufacture/FUpdateCOGSWOReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/Module/Sales Order/FUpdateCOGSSOShipment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FSalesOrderDetailSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FFakturPajakSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FFakturPajakSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ar_mstr, en_mstr, fp_mstr, ptnr_mstr, ptnra_addr, ti_mstr

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupFooter2_BeforePrint, Private, XRFakturPajakFormPlain_AfterPrint, XRFakturPajakFormPlain_BeforePrint

## `SFI Solution/SFI.Project/__General Form/frmPrintDialog.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: CreateForm, CreateObjectInstance, CreateReport, End, ExportToolStripMenuItem_Click, Private, Public, bt_design_Click, bt_preview_Click, frmPrintDialog2_Load

## `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajakReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FProjectAccountSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FPurchaseOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FPurchaseReceiptSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FSalesOrderRecapSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FFakturPajakSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FNotaSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FPOCustomerSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SFI Solution/SFI.Project/__Browse References/FWOMaterialRequestSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
