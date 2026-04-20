# SUMPLAS_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas sumplas.

- Total file prioritas dianotasi: **180**

## `Sumplas Solution/Sumplas.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, cs_mstr, csd_det

## `Sumplas Solution/Sumplas.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, ars_ship, arso_so, bk_mstr, branch_mstr, browse_so, cmaddr_mstr, code_mstr, cu_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderShipment_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, approve_line, approve_wf, arrange_from_excel
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, browse_so, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, detail_so

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGift.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FSalesOrderGift_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cust_mstr, en_mstr, glt_det, inst_mstr, invc_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FWOReceipt_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial, browse_data_wip_serial
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, ds_so, en_mstr, gc_so, glt_det, gv_so

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProdSchedule.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: ElseIf, End, FProdSchedule_Load, If, Private, Public, add_production_schedule, cek_daysoff, cek_incomplete, delete_last_production_schedule
- Table/entity sample: aprv_mstr, branch_mstr, cmaddr_mstr, code_mstr, en_mstr, machine_group, mch_mstr, prddaysoff_mstr, pt_mstr, ptnr_mstr, schprd_mstr, so_mstr

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Print Out/ds_po.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, ds_po, po_mstr, pt_mstr, ptnr_mstr, ptnra_addr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/ds_arinv.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: ac_mstr, ackaging_mstr, ars_ship, bk_mstr, branch_mstr, code_mstr, cu_mstr, cust_mstr, dr_mstr, en_mstr, inst_mstr, packaging_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/ds_ti.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBypt_code, GetData, GetRealUpdatedRows
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soshipd_det, um_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProdSchedule_PrintVersiText.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: CetakLangsung, ElseIf, End, FProdSchedule_Load, Private, Public, TOTAL, add_production_schedule, delete_last_production_schedule, delete_reorder_production_schedule
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, machine_group, mch_mstr, prddaysoff_mstr, pt_mstr, ptnr_mstr, schprd_mstr, so_mstr, sod_det

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel
- Method sample: Else, ElseIf, End, FDisbursementRealization_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, bdgtd_det, bgtinfo_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cmaddr_mstr, cu_mstr, emp_mstr, en_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FARPayment_Load, Private, Public, _load_data_grid_detail, arpay_arnota_oid_ButtonClick, arpay_bill_to_EditValueChanged, arpay_bk_id_EditValueChanged, arpay_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, arpaydd_det, arso_so, bg_mstr, bk_mstr, branch_mstr, cc_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Report/FRealizationOrderReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FRealizationOrderReport_Load, GabungDataTable, Private, Public, format_grid, load_cb, load_data_many, load_data_ro, load_data_ro_conv
- Table/entity sample: code_mstr, en_mstr, group_mstr, invc_mstr, pt_group, pt_mstr, ptnr_mstr, pts_mstr, qty_ship, qty_so, realization_group, so_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/FMonthEnd.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: BtPraClosing_Click, Dim, Else, End, FMonthEnd_Load, Function, GetMultiRowInfo, Private, Public, before_close
- Table/entity sample: ac_mstr, en_mstr, gcal_det, gcal_mstr, gcald_det, gcald_so, glbal_balance, glt_det

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, Outstanding, credit
- Method sample: Else, ElseIf, End, FCreateInvoiceNew_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, bdgtd_det, bgtinfo_mstr, bk_mstr, branch_mstr, cc_mstr, cu_mstr, en_mstr, pby_mstr, pbyd_det, pjc_mstr, ptnr_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, credit
- Method sample: ElseIf, End, FPaymentManualChecks_Load, Private, Public, _load_data_grid_detail, appay_apnota_oid_ButtonClick, appay_bg_oid_ButtonClick, appay_bk_id_EditValueChanged, appay_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, appay_payment, appayd_det, appaydd_det, ar_mstr, arpay_payment, arpayd_det, arpaydd_det, bg_mstr, bk_mstr, branch_mstr

## `Sumplas Solution/Sumplas.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, its_mstr, itsd_det, loc_mstr, pb_mstr

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick
- Table/entity sample: ac_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr

## `Sumplas Solution/Sumplas.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, branch_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pod_det, pt_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrder.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FWorkOrder_Load, Private, Public, before_delete, before_save, browse_data, browse_data_so
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, detail_so, dt_so, en_mstr, fes_mstr, gc_so, gv_so

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryReceipts_Load, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick, be_import_xls_ButtonClick
- Table/entity sample: ac_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGiftRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FSalesOrderGiftRequest_Load, Private, Public, approve, approve_line, before_delete, before_save
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, invc_mstr, loc_mstr, pt_mstr, ptnr_mstr, sogr_mstr, sogrd_det, tran_mstr, wf_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSORecapitulation.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: ElseIf, End, FSORecapitulation_Load, Private, Public, before_save, branch_name_EditValueChanged, browse_data, browse_data_serial, cancel_data
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, cust_mstr, driver_mstr, en_mstr, get_so, inst_mstr, loc_mstr, pack_mstr, pocust_mstr, pt_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajak.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FFakturPajak_Load, Private, Public, ar_cu_id_EditValueChanged, before_save, before_save_insert, cancel_approve
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, dr_det, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soship_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrderIssue.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Else, ElseIf, End, FWorkOrderIssue_Load, Private, Public, XtraTabControl1_SelectedPageChanged, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, invc_mstr, invh_mstr, loc_mstr, pt_mstr, ro_mstr, sct_mstr

## `Sumplas Solution/Sumplas.Project/Module/Master Data/Address Taxes/FCustomer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FCustomer_Load, GetID_Limit, GetID_Local, Private, Public, before_save, cancel_data, delete_data
- Table/entity sample: ac_mstr, branch_mstr, code_mstr, country_mstr, creditterms_mstr, cu_mstr, dom_mstr, en_mstr, inst_mstr, loc_mstr, pt_mstr, ptnr_mstr

## `Sumplas Solution/Sumplas.Project/Module/Master Data/Address Taxes/FCustomer.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, credit
- Method sample: Else, ElseIf, End, ExportDataToExcelClosedXML, ExportDataToSheets, FFakturPajakCoreTax_Load, Private, Public, ar_cu_id_EditValueChanged, before_save
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soship_mstr, soshipd_det

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProdSchedule.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: xtp_so

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProdSchedule_PrintVersiText.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: xtp_so

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FCashOut.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FPartnerAll_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_ButtonClick, before_delete, before_save
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance, glt_det

## `Sumplas Solution/Sumplas.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, RKanan, RKiri, add_column_edit_le
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/FStandardTransaction.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, credit
- Method sample: ElseIf, End, FStandardTransaction_Load, PasteFromExcelToAccountToolStripMenuItem_Click, PasteFromExcelToCreditToolStripMenuItem_Click, PasteFromExcelToolStripMenuItem_Click, PasteToRemarkToolStripMenuItem_Click, Private, Public, before_delete
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Price List/FPriceListQty.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FPriceListDetail_Load, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: code_mstr, cu_mstr, detail_rule, en_mstr, pi_mstr, picgig_mstr, pid_det, pidd_det, pidd_payment, promo_mstr, pt_group, pt_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderShipment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrderIssue.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, before_delete, before_save, browse_data
- Table/entity sample: ac_mstr, arpay_payment, bg_mstr, bk_mstr, branch_mstr, cbh_hist, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total
- Table/entity sample: ds_po

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRProdSchedulePrint_A6.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: Dispose, Friend, InitializeComponent, TOTAL

## `Sumplas Solution/Sumplas.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Price List/FPriceListCustomerGroupItemGroup.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FPriceListCustomerGroupItemGroup_Load, Private, Public, delete_data, edit, edit_data, format_grid, get_sequel
- Table/entity sample: cmsext_rule, code_mstr, cu_mstr, en_mstr, group_mstr, pi_mstr, picgig_mstr, pid_det, pidd_det, pidd_payment, pt_group, pt_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRProdSchedulePrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent, TOTAL

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrder.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, lcg_so, xtp_so

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Report/FRealizationOrderReport_old.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FRealizationOrderReport_Load, Private, Public, format_grid, load_cb, load_data_hd, load_data_many, load_data_roll_kantong, load_data_tipis
- Table/entity sample: code_mstr, en_mstr, group_mstr, invc_mstr, pt_group, pt_mstr, ptnr_mstr, qty_ship, qty_so, realization_group, so_mstr, sod_det

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FCommision.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCommision_Load, Private, Public, Sub, before_save, cancel_data, comsales_en_id_EditValueChanged, delete_data
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, bg_mstr, branch_mstr, cc_mstr, code_mstr, comsales_mstr, comsalesd_det, comsalesdd2_det, comsalesdd_det, cu_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSORecapitulation.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceQtyReal.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total
- Table/entity sample: ref_po

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceQtyReal2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total
- Table/entity sample: ref_po

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGift.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOMaterialRequest.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Qty
- Method sample: ElseIf, End, FWOMaterialRequest_Load, Private, Public, before_delete, browse_data, cancel_data, delete_data, edit
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, ps_mstr, pt_mstr, um_mstr, wo_mstr, wod_det, woi_mstr, woid_det

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Report/FARReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FARReport_Load, Private, Public, format_grid, generate_ar, le_branch_EditValueChanged, le_customer_EditValueChanged, le_entity_EditValueChanged, load_cb
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, ars_ship, bk_mstr, branch_mstr, class_mstr, code_mstr, cu_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FCashIn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FCashIn_Load, Private, Public, SetToAllRowsToolStripMenuItem_Click, before_delete, before_save, browse_data, cancel_data
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cmaddr_mstr, cu_mstr, en_mstr, glt_det, ptnr_mstr

## `Sumplas Solution/Sumplas.Project/Module/Master Data/Item/FPartNumber.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FDomain_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, invc_mstr, is_mstr, its_mstr, loc_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSOGift_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSOGift.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRWOReceiptPrintLotSerial.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: wor_mstr

## `Sumplas Solution/Sumplas.Project/Module/Master Data/Item/FPartNumber.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARBilyetGiro.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ConfirmBG, End, FARBilyetGiro_Load, Private, Public, UnConfirmBG, delete_glt_det_ar_bg_confirm, format_grid, grid_detail, gv_all_FocusedRowChanged
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, bg_mstr, bk_mstr, branch_mstr, code_mstr, cu_mstr, en_mstr, glt_det, ptnr_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRCashInARPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARNota.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: ElseIf, End, FARNota_Load, Private, Public, ap_en_id_EditValueChanged, ar_branch_id_EditValueChanged, arnota_ptnr_id_EditValueChanged, before_save, browse_data
- Table/entity sample: ar_mstr, arnota_mstr, arnotad_det, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, debt_mstr, en_mstr, ptnr_addr, ptnr_mstr, ptnra_addr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Price List/FPriceListItemSpesification.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FPriceListItemSpesification_Load, Private, Public, delete_data, edit, edit_data, format_grid, get_sequel
- Table/entity sample: code_mstr, en_mstr, pi_mstr, picgig_mstr, pid_det, pidd_det, pidd_payment, pt_group, pt_mstr, pts_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSalesOrderGiftRequest.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/__Browse References/FWOSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: End, FWOSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, cc_mstr, code_mstr, cs_mstr, ds_so, en_mstr, gv_so, invc_mstr, loc_mstr, mch_mstr, pjc_mstr, prj_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRWOMRPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGiftRequestApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: ElseIf, End, FSalesOrderGiftRequestApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, pt_mstr, ptnr_mstr, sogr_mstr, sogrd_det, tran_mstr, wf_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FCommision.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/rptWOPickList.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRShippingInstruction.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ref_po

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRTransferIssuesPrint_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOMaterialRequest.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvIssue_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FWorkOrderReceiptReport_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, en_mstr, group_mstr, loc_mstr, packaging_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvRec_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRTransferIssuesPrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvIssue.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvRec.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSOShipQtyRealPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Print Out/XRDisbursementVoucherPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSO_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGiftRequest.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FCashOut.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FOverBooking.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSOShipQtyRealPrint_2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Print Out/XROverBookingPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRShippingInstruction_potrait.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/rptWOPickList2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajak.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/XRCashBalance.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gltbuf_balance

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FCashIn.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSOReturQtyRealPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARNota.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Print Out/XRCashInPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Print Out/XRCashOutPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/XRGeneralLedgerPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRProdSchedulePrint_A5.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRWOReceiptPrintNon.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: wor_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Routing and Work Center/FMachine.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/FGLCalendar.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FGLCalendar_Load, Private, Public, before_save, before_save_local, cancel_data, cancel_line, delete_data
- Table/entity sample: ac_mstr, en_mstr, gcal_mstr, gcald_det, gcald_so, glbal_balance, glt_det

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseReceiptPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARBilyetGiro.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Price List/FPriceListItemSpesification.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/XRGLStandardTrx.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Requisition/Print Out/XRRequisitionCost.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProductionDaysOff.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/FOpeningBalance.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, credit
- Method sample: ElseIf, End, FOpeningBalance_Load, InsertOpeningBalanceToolStripMenuItem_Click, Private, Public, arrange_from_excel, before_save, delete_data, edit
- Table/entity sample: ac_mstr, cu_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSORecapitulationWizard.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSORecapitulationWizard_Load, Private, Public, ce_all_CheckedChanged, format_grid, get_transaction_number_smart, gv_os_CellValueChanged, load_cb, load_data_many
- Table/entity sample: branch_mstr, code_mstr, en_mstr, inst_mstr, invc_mstr, loc_mstr, pocust_mstr, pt_mstr, ptnr_mstr, so_mstr, sod_det, sogr_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Routing and Work Center/FMachine.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FMachine_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save, browse_data
- Table/entity sample: code_mstr, en_mstr, group_mstr, machine_group, mch_mstr, pt_mstr, um_mstr

## `Sumplas Solution/Sumplas.Project/Module/___Function Helper/Cls_Bilangan_new.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_duabelas, nominal_empat, nominal_empatbelas, nominal_enam, nominal_lima

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/FSalesOrderShipmentPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: End, FSalesOrderShipmentPrint_Load, Private, Public, be_first_ButtonClick, be_to_ButtonClick, branch_fill, preview, preview_consignment, preview_invoice
- Table/entity sample: bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, driver_mstr, en_mstr, inst_mstr, packaging_mstr, pt_mstr, ptnr_mstr, ptnra_addr

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/FStandardTransaction.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Report/FGeneralLedgerCashReportPerUserBank.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: FBalanceSheetReport_Load, FGeneralLedgerCashReportPerUserBank_FormClosed, Private, Public, format_grid, get_gv, gv_master_MouseUp, le_branch_EditValueChanged, le_entity_EditalueChanged, le_from_gcal_EditValueChanged
- Table/entity sample: ac_mstr, bk_mstr, cmaddr_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, gltbuf_balance

## `Sumplas Solution/Sumplas.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wh_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Price List/FPriceListMaster.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Report/FGeneralLedgerCashReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FBalanceSheetReport_Load, FGeneralLedgerCashReportPerUserBank_FormClosed, Private, Public, format_grid, get_gv, gv_master_MouseUp, le_branch_EditValueChanged, le_entity_EditalueChanged
- Table/entity sample: ac_mstr, bk_mstr, cmaddr_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, gltbuf_balance

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: End, FWorkOrderReport_Load, Private, Public, format_grid, load_data_many, load_wo, load_wo_item, load_wo_pivot, load_wo_routing
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, item_group, ps_mstr, pt_group, pt_mstr

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Requisition/Print Out/XRRequisition.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/FSORecapitulationPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSORecapitulationPrint_Load, Private, Public, ce_all_CheckedChanged, format_grid, gv_os_CellValueChanged, load_cb, load_data_many, preview
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, driver_mstr, en_mstr, inst_mstr, loc_mstr, pack_mstr, pocust_mstr, pt_mstr, ptnr_mstr, so_mstr

## `Sumplas Solution/Sumplas.Project/__Browse References/FRequisitionSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FRequisitionSearch_Load, Private, Public, ce_select_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, group_mstr, loc_mstr, pjc_mstr, pt_group, pt_mstr, ptnr_mstr, req_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/rptTrialBalance.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/__Browse References/FDRCRMemoSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Shipment
- Method sample: End, FDRCRMemoSearch_Load, Private, Public, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_CellValueChanging, gv_master_DoubleClick
- Table/entity sample: ac_mstr, ar_mstr, arnotad_det, arpay_payment, arpayd_det, code_mstr, cu_mstr, en_mstr, ptnr_mstr

## `Sumplas Solution/Sumplas.Project/Module/Master Data/Address Taxes/FItemCustomer.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger Report/FBalanceSheetReportMulti.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FBalanceSheetReport_Load, Function, Private, Public, le_entity_EditalueChanged, le_gcal2_EditValueChanged, le_gcal_EditValueChanged, preview, recalculate
- Table/entity sample: ac_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGiftRequestApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/__Browse References/FSalesOrderRecapSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSalesOrderRecapSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, allocated_ship, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, pod_det, pt_mstr, ptnr_mstr, sct_mstr, so_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Price List/FPriceListQty.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: xtp_rule

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOWizard.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FWOWizard_Load, GetID, Private, Public, ce_all_CheckedChanged, format_grid, get_transaction_number_smart, load_data_many, sb_generate_Click
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, cu_mstr, en_mstr, group_mstr, loc_mstr, packaging_mstr, pi_mstr

## `Sumplas Solution/Sumplas.Project/__General Form/FCodeMstr.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/__Browse References/FInventoryRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_price_list
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pb_mstr, pbd_det, pi_mstr, pid_det, pidd_det, pidd_payment, pt_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Report/FRealizationOrderReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Master Data/Address Taxes/FSalesPerson.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger Report/FBalanceSheetReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FBalanceSheetReport_Load, Function, Private, Public, le_entity_EditalueChanged, le_gcal_EditValueChanged, preview, recalculate
- Table/entity sample: ac_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Report/FSalesOrderReport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderReport_Load, Private, Public, format_grid, load_cb, load_data_many, load_detail, load_detail_close, xtc_master_SelectedPageChanged
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, class_mstr, code_mstr, cu_mstr, cust_group, en_mstr, group_mstr, inst_mstr, loc_mstr, packaging_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Master Data/Address Taxes/FSalesPerson.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: ElseIf, End, FSalesPerson_Load, GetID_Local, Private, Public, delete_data, edit, edit_data, format_grid
- Table/entity sample: branch_mstr, dom_mstr, en_mstr, ptnr_mstr, ptnra_addr

## `Sumplas Solution/Sumplas.Project/__Browse References/FPartnerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Shipment, credit
- Method sample: End, FPartnerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_cb
- Table/entity sample: ac_mstr, branch_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Price List/FPriceListMaster.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FPriceListHeader_Load, Private, Public, delete_data, edit, edit_data, format_grid, get_sequel
- Table/entity sample: code_mstr, cu_mstr, en_mstr, pi_mstr, picgig_mstr, pid_det, pidd_det, promo_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cash_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Report/FARReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Over Due, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/FGLCalendar.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Report/FInventoryReportDetail.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: CBLoc_CheckedChanged, CBwarehouse_CheckedChanged, End, FInventoryReportDetail_Load, Private, Public, format_grid, le_branch_EditValueChanged, le_branch_id_EditValueChanged, le_warehouse_EditValueChanged
- Table/entity sample: code_mstr, en_mstr, invc_mstr, invh_mstr, loc_mstr, pl_mstr, pt_group, pt_mstr, ptnr_mstr, sct_mstr, so_mstr, um_mstr

## `Sumplas Solution/Sumplas.Project/__Browse References/FAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger Report/FBalanceSheetReportMulti.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Report/FARPaymentReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FARPaymentReport_Load, Public, format_grid, load_cb, load_data_many
- Table/entity sample: ac_mstr, acd_mstr, ar_mstr, arnota_mstr, arpay_payment, arpayd_det, arpaydd_det, bg_mstr, bk_mstr, branch_mstr, code_mstr, cu_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger Report/rptNeracaFixMulti.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajakPrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Report/FSOOutstandingShipmentReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSOOutstandingShipmentReport_Load, Private, Public, format_grid, load_cb, load_data_many, load_detail, load_group_cust, load_group_inst
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, code_mstr, cu_mstr, en_mstr, group_mstr, inst_mstr, loc_mstr, pi_mstr, pt_group, pt_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProductionDaysOff.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FProductionDaysOff_Load, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: code_mstr, en_mstr, group_mstr, machine_group, prddaysoff_mstr

## `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: item_group

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/FMonthEnd.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Report/FGeneralLedgerCashReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Report/FGeneralLedgerCashReportPerUserBank.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Master Data/Address Taxes/FItemCustomer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FItemCustomer_Load, Private, Public, before_save, browse_item, cancel_data, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, code_mstr, dom_mstr, en_mstr, pt_mstr, ptnr_mstr, ptnrd_det

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger/FOpeningBalance.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Report/FSORecapitulationReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSORecapitulationReport_Load, Private, Public, format_grid, load_cb, load_data_many, load_detail, load_detail_sogr, load_detail_with_serial
- Table/entity sample: branch_mstr, code_mstr, driver_mstr, en_mstr, loc_det, loc_mstr, pack_mstr, pt_mstr, ptnr_mstr, so_mstr, sod_det, sogr_mstr

## `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/FDRCRMemoPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FDRCRMemoPrint_Load, Private, Public, be_first_ButtonClick, be_to_ButtonClick, branch_fill, preview
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, cust_mstr, en_mstr, inst_mstr, packaging_mstr

## `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/FSalesOrderShipmentPrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Sumplas Solution/Sumplas.Project/Module/Financial/General Ledger Report/FBalanceSheetReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
