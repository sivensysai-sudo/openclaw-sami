# SCI_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas sci.

- Total file prioritas dianotasi: **180**

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, ImportFromExcelSch
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `SCI Solution/SCI.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, cs_mstr, csd_det

## `SCI Solution/SCI.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderReturnToShipment_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bill_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderGift.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FSalesOrderGift_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cust_mstr, do_mstr, en_mstr, gcald_so, glt_det

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrderShipment_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, do_mstr, driver_mstr, en_mstr

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/ds_ap.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: ac_mstr, ap_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, loc_mstr, po_mstr, pod_det

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderShipmentHiblow.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrderShipmentHiblow_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, do_mstr, driver_mstr, en_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_bk_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, ars_ship, arso_so, bk_mstr, branch_mstr, browse_so, cmaddr_mstr, code_mstr, cu_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWOReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FWOReceipt_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial, browse_data_wip_serial
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, ds_so, en_mstr, gc_so, glt_det, gv_so

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_soshipds.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: addr_mstr, ass_mstr, branch_mstr, code_mstr, cu_mstr, driver_mstr, en_mstr, er_mstr, inst_mstr, packaging_mstr, pt_mstr, ptnr_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWOReceiptTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Qty, credit
- Method sample: ElseIf, End, FWOReceiptTax_Load, Private, Public, before_save, browse_data, browse_data_fg, browse_data_serial, browse_data_wip_serial
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, loc_mstr, mch_mstr, packaging_mstr, pjc_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Report/FSalesOrderGlobalReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FSalesOrderGlobalReport_Load, Private, Public, ce_by_month_CheckedChanged, format_grid, le_month_from_EditvalueChanged, load_caturwulan_class_qty, load_caturwulan_class_value, load_caturwulan_qty
- Table/entity sample: class_mstr, code_mstr, group_mstr, kpitd_det, pt_group, pt_mstr, ptnr_mstr, so_mstr, sod_det, tgslsp_mstr, um_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWOReceiptMulti.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: ElseIf, End, FWOReceiptMulti_Load, Private, Public, before_save, browse_data, browse_data_fg, browse_data_serial, browse_data_wip_serial
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, loc_mstr, mch_mstr, packaging_mstr, pjc_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FTransferIssues_Load, Private, Public, approve, approve_line, before_delete, before_save
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, packaging_mstr, pb_mstr, pbd_det, pt_mstr

## `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Print Out/ds_ti1.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBypt_code, GetData, GetRealUpdatedRows
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soshipd_det, um_mstr

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FVoucher.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_branch_id_EditValueChanged, ap_credit_term_EditValueChanged, ap_cu_id_EditValueChanged, ap_date_EditValueChanged, ap_due_date_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, app_po, bk_mstr, branch_mstr, browse_po, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, detail_po, en_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Requisition/ds_req_sys.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: cmaddr_mstr, code_mstr, pt_mstr, req_mstr, reqd_det, tnr_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_soship.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: cmaddr_mstr, code_mstr, driver_mstr, er_mstr, pt_mstr, ptnr_mstr, ptnra_addr, so_mstr, sod_det, soship_mstr, soshipd_det, xemp_mstr

## `SCI Solution/SCI.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, fill_selected, format_grid, get_material_request, get_sequel
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, dom_mstr, en_mstr, group_mstr, invc_mstr, its_mstr, itsd_det

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPaymentMultiNota.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, credit
- Method sample: CheckEdit1_CheckedChanged, ElseIf, End, FARPaymentMultiNota_Load, Private, Public, _load_data_grid_detail, arpay_arnota_oid_ButtonClick, arpay_bill_to_EditValueChanged, arpay_bk_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, arpaydd_det, arso_so, bg_mstr, bk_mstr, branch_mstr, cc_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_so_gift_serial.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: addr_mstr, branch_mstr, code_mstr, cust_mstr, en_mstr, loc_mstr, packaging_mstr, pt_mstr, ptnr_mstr, riu_mstr, riud_det, sp_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Print Out/ds_inventory_request.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBycode_code, GetData, GetEnumerator
- Table/entity sample: cmaddr_mstr, code_mstr, d_det, en_mstr, pb_mstr, pbd_det, pt_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_so_gift.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, cust_mstr, en_mstr, loc_mstr, p_mstr, pt_mstr, ptnr_mstr, ptnra_addr, riu_mstr, riud_det

## `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Print Out/XRFakturPajakFormPlain.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, credit
- Method sample: CheckEdit1_CheckedChanged, ElseIf, End, FARPayment_Load, Private, Public, _load_data_grid_detail, arpay_arnota_oid_ButtonClick, arpay_bill_to_EditValueChanged, arpay_bk_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, arpaydd_det, arso_so, bg_mstr, bk_mstr, branch_mstr, cc_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Requisition/FRequisition.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FRequisition_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, its_mstr, itsd_det, pjc_mstr, pt_mstr, ptnr_mstr, req_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/ds_ar_nota.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: ar_mstr, arnota_mstr, arnotad_det, branch_mstr, cmaddr_mstr, en_mstr, ptnra_addr, xemp_mstr

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FPaymentManualChecks.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, credit
- Method sample: ElseIf, End, FPaymentManualChecks_Load, Private, Public, _load_data_grid_detail, appay_bg_oid_ButtonClick, appay_bk_id_EditValueChanged, appay_branch_id_EditValueChanged, appay_date_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, app_po, appay_payment, appayd_det, appaydd_det, ar_mstr, arpay_payment, arpayd_det, arpaydd_det, bg_mstr, bk_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/ds_wo_issue.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: ci_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, pt_mstr, wo_mstr, woci_mstr, wocid_det, wod_det

## `SCI Solution/SCI.Project/Module/Manufacture/ds_wor_multi.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, pjc_mstr, pt_mstr, wo_mstr, wor_mstr, word_det

## `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Print Out/XRFakturPajakFormPlainIDR.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Manufacture/FWorkOrder.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: Else, ElseIf, End, FWorkOrder_Load, Private, Public, before_save, browse_data, browse_data_material, browse_data_so
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, dt_so, en_mstr, gv_so, ps_mstr, pt_mstr, qrsd_det, ro_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPurchaseReceipt_v2.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseReceipt_v2_Load, GetIDMax, GetMaxLine, ImportFromExcel, ImportFromExcelMulti, Private, Public
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Financial/General Ledger/FMonthEnd.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: BtPraClosing_Click, Dim, Else, End, FMonthEnd_Load, Function, GetMultiRowInfo, Private, Public, before_close
- Table/entity sample: ac_mstr, en_mstr, gcal_det, gcal_mstr, gcald_det, gcald_so, glbal_balance, glt_det

## `SCI Solution/SCI.Project/Module/Manufacture/FWIPReturn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FWIPReturn_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SCI Solution/SCI.Project/Module/Manufacture/FItemCostReport_v1.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FItemCostReport_v1_Load, Private, Public, format_grid, load_coating, load_data_many, load_labor, load_material, load_overhead
- Table/entity sample: ac_mstr, cash_mstr, cashd_det, class_mstr, code_mstr, cs_mstr, glt_det, mch_mstr, pt_mstr, riu_mstr, riud_det, sct_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseReceipt_Load, GetIDMax, GetMaxLine, ImportFromExcel, Private, Public, arrange_from_excel_serial
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/ds_wo_receipt.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: code_mstr, en_mstr, loc_mstr, packaging_mstr, pt_mstr, um_mstr, wo_mstr, wor_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FPackingList.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty, Shipment
- Method sample: ElseIf, End, FPackingList_Load, Private, Public, before_save, browse_data_serial, cancel_data, delete_data, edit
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, do_mstr, dod_det, en_mstr, inst_mstr, invc_mstr, invh_mstr, loc_mstr, pack_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWorkOrderTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: Else, ElseIf, End, FWorkOrderTax_Load, Private, Public, before_save, browse_data, browse_data_material, browse_data_so
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, dt_so, en_mstr, gv_so, ps_mstr, pt_mstr, ro_mstr, rod_det

## `SCI Solution/SCI.Project/Module/Manufacture/FWIPInventoryReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryReceipts_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save, browse_data
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pla_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryDisassemble.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: End, FInventoryDisassemble_Load, Private, Public, before_save, browse_data, browse_data_serial, browse_data_serial_header, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick
- Table/entity sample: ac_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedback_v1.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FWOLaborFeedback_v1_Load, Private, Public, before_save, calc_elapsed, cancel_data, delete_data, delete_glt_det
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, invth_hist, loc_mstr, lpt_mstr, mch_mstr, pt_mstr, shift_mstr, um_mstr

## `SCI Solution/SCI.Project/Module/Financial/General Ledger/FTransactionPost.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: CheckTheTransactionIsNotBalancedToolStripMenuItem_Click, ElseIf, End, FTransactionPost_Load, GetPeriodh, Private, Public, SimpleButton1_Click, ce_all_CheckedChanged, export_data
- Table/entity sample: ac_mstr, ap_mstr, appay_payment, ar_mstr, arpay_payment, branch_mstr, cash_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedback.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FWOLaborFeedback_Load, Private, Public, before_save, calc_elapsed, cancel_data, delete_data, delete_glt_det
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, invth_hist, loc_mstr, lpt_mstr, mch_mstr, pt_mstr, shift_mstr, um_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWIPInventoryIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_save
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, packaging_mstr, pla_mstr

## `SCI Solution/SCI.Project/Module/Financial/Cash Management/FDisbursementVoucher.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_cu_id_EditValueChanged, before_delete, before_save, browse_data, browse_pd
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cash_mstr, cashd_det, cc_mstr, cfr_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: End, FInventoryIssues_Load, Private, Public, before_save, browse_data, browse_data_serial, browse_data_serial_header, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/ds_so.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetEnumerator, GetRealUpdatedRows
- Table/entity sample: code_mstr, cust_mstr, ds_so, inst_mstr, packaging_mstr, pt_mstr, ptnr_mstr, ptnra_addr, sales_mstr, so_mstr, sod_det, um_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWOAccountingClose.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FWOAccountingClose_Load, Private, Public, cancel_data, delete_data, delete_glt_det_worw, edit_data, format_grid
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, csd_det, dt_so, en_mstr, glt_det, invc_mstr, loc_mstr, ps_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryReceipts_Load, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick, be_import_xls_ButtonClick
- Table/entity sample: ac_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: COMPort_DataReceived, Else, End, FPurchaseReceiptScale_Activated, FPurchaseReceiptScale_Deactivate, FPurchaseReceiptScale_FormClosed, FPurchaseReceiptScale_Load, GetIDMax, GetMaxLine, Private
- Table/entity sample: ass_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FConsumableIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick
- Table/entity sample: ac_mstr, act_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FInventorypbuest_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, pb_mstr, pbd_det, pt_mstr, tran_mstr, wf_mstr

## `SCI Solution/SCI.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pod_det

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale_250612.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Display, Else, End, FPurchaseReceiptScale_Activated, FPurchaseReceiptScale_Deactivate, FPurchaseReceiptScale_Load, GetIDMax, GetMaxLine, Private, Public
- Table/entity sample: ass_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FConsumableReceipts_Load, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick, be_import_xls_ButtonClick
- Table/entity sample: ac_mstr, act_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FVehicleWeighOutHiBlow.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Outstanding, Qty, Shipment, credit
- Method sample: COMPort_DataReceived, ElseIf, End, FVehicleWeighOutHiBlow_Activated, FVehicleWeighOutHiBlow_Deactivate, FVehicleWeighOutHiBlow_FormClosed, FVehicleWeighOutHiBlow_Load, Private, Public, StringSubPointer
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, do_mstr, dod_det, en_mstr, inst_mstr, loc_mstr, mch_mstr, packaging_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableReturn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FConsumableReturn_Load, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick, be_import_xls_ButtonClick
- Table/entity sample: ac_mstr, act_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FItemCostReport_v2.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FItemCostReport_v2_Load, Private, Public, format_grid, load_coating, load_data_many, load_labor, load_material
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, glt_det, mch_mstr, pt_mstr, riu_mstr, riud_det, sct_mstr, scth_hist, wor_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FItemCostReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FItemCostReport_Load, Private, Public, format_grid, load_coating, load_data_many, load_labor, load_material, load_overhead
- Table/entity sample: ac_mstr, cash_mstr, cashd_det, class_mstr, code_mstr, cs_mstr, glt_det, mch_mstr, pt_mstr, riu_mstr, riud_det, sct_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FZakRotation.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: End, FInventoryIssues_Load, Private, Public, before_save, browse_data, browse_data_serial, browse_data_serial_header, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, pack_mstr, pt_mstr, riub_mstr, riubd_det

## `SCI Solution/SCI.Project/Module/Manufacture/FWorkOrderIssue.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Qty
- Method sample: ElseIf, End, FWorkOrderIssue_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial, cancel_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pt_mstr, sct_mstr, wo_mstr, woci_mstr, wocid_det

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrder.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SCI Solution/SCI.Project/Module/Financial/Cash Management/FCashOut.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FPartnerAll_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_ButtonClick, before_delete, before_save
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance, glt_det

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReturn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FPurchaseReturn_Load, Private, Public, before_save, browse_data, browse_data_serial, cancel_data, delete_data
- Table/entity sample: ass_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `SCI Solution/SCI.Project/Module/Financial/Tax/FCashOutTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FPartnerAll_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_ButtonClick, before_delete, before_save
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance, glt_det

## `SCI Solution/SCI.Project/Module/Financial/Fix Asset/FAssetTransactionPost.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FUpdateDepresiasiNew_Load, Private, Public, RetrieveData, SelectAfterPosted, UpdateDepresiasi, btn_update_Click, ce_select_CheckedChanged
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, code_mstr, en_mstr, fabk_mstr, famt_mstr, famtd_det, glt_det, pl_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedback.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPhysicalInventoryEntry.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Cancel, Qty, credit
- Method sample: ElseIf, End, FPhysicalInventoryEntry_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel, be_import_xls_ButtonClick
- Table/entity sample: branch_mstr, ccre_mstr, code_mstr, cs_mstr, ds_mstr, en_mstr, glt_det, invclc_mstr, invclcd_det, loc_mstr, pl_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Transaction/FFakturPajakCoreTax.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, credit
- Method sample: Else, ElseIf, End, ExportDataToExcelClosedXML, ExportDataToSheets, FFakturPajakCoreTax_Load, Private, Public, ar_cu_id_EditValueChanged, before_save
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soship_mstr, soshipd_det

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseUnloading_v2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Qty
- Method sample: COMPort_DataReceived, ElseIf, End, FPurchaseReceiptRPA_Activated, FPurchaseReceiptRPA_Deactivate, FPurchaseReceiptRPA_FormClosed, FPurchaseUnloading_v2_Load, GetIDMax, GetMaxLine, Private
- Table/entity sample: ass_mstr, branch_mstr, code_mstr, cu_mstr, en_mstr, loc_mstr, packaging_mstr, pl_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedback_v1.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderShipmentHiblow.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderShipment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWIPReject.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty
- Method sample: ElseIf, End, FWIPReject_Load, If, Private, Public, before_save, browse_data, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, dom_mstr, en_mstr, mch_mstr, pt_mstr, qrsd_det, shift_mstr, so_mstr, type_mstr, wipreject_mstr

## `SCI Solution/SCI.Project/Module/Financial/Cash Management/FOverBooking.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, before_delete, before_save, browse_data
- Table/entity sample: ac_mstr, arpay_payment, bg_mstr, bk_mstr, branch_mstr, cbh_hist, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance

## `SCI Solution/SCI.Project/Module/Manufacture/FWOCostReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FWOCostReport_Load, Private, Public, format_grid, load_coating, load_data_many, load_labor, load_material, load_overhead
- Table/entity sample: ac_mstr, cash_mstr, cashd_det, class_mstr, code_mstr, cs_mstr, glt_det, mch_mstr, pt_mstr, riu_mstr, riud_det, sct_mstr

## `SCI Solution/SCI.Project/Module/Financial/Tax/FOverBookingTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, before_delete, before_save, browse_data
- Table/entity sample: ac_mstr, arpay_payment, bg_mstr, bk_mstr, branch_mstr, cbh_hist, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance

## `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedbackAll.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Qty, credit
- Method sample: ElseIf, End, FItemSub_Load, Private, Public, before_delete, before_save, calc_elapsed, cancel_data, delete_data
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, pt_mstr, um_mstr, wc_mstr, wo_mstr, wor_mstr, wrd_det

## `SCI Solution/SCI.Project/Module/Manufacture/FWOReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `SCI Solution/SCI.Project/Module/Financial/General Ledger/FStandardTransaction.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, credit
- Method sample: ElseIf, End, FStandardTransaction_Load, PasteFromExcelToAccountToolStripMenuItem_Click, PasteFromExcelToCreditToolStripMenuItem_Click, PasteFromExcelToolStripMenuItem_Click, PasteToRemarkToolStripMenuItem_Click, Private, Public, before_delete
- Table/entity sample: ac_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, gcal_mstr, gcald_det, glbal_balance

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FVoucher.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FFGReceiptUnplanned.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: CekStatusPalet, ElseIf, End, FFGReceiptUnplanned_Load, ImportFromExcel, Private, Public, arrange_from_excel_serial, be_import_serial_ButtonClick, before_save
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, glt_det, invc_mstr, loc_mstr, pack_mstr, pjc_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Transaction/FFakturPajak.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FFakturPajak_Load, Private, Public, ar_cu_id_EditValueChanged, before_save, before_save_insert, cancel_approve
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, dr_det, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soship_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrderApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: ElseIf, End, FPurchaseOrderApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, cu_mstr, en_mstr, loc_mstr, pjc_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FDeliveryOrder.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Qty, Shipment
- Method sample: ElseIf, End, FDeliveryOrder_Load, Private, Public, before_delete, before_save, browse_data, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cust_mstr, do_mstr, dod_det, en_mstr, number_mstr, packaging_mstr, pt_mstr, ptnr_addr, ptnr_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2_a5.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/Tax/FAPGenerateGL.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: Else, End, FAPGenerateGL_Load, Private, Public, ce_all_CheckedChanged, delete_glt_det_ap, format_grid, insert_glt_det_ap, insert_glt_det_ap_jurnal_balik
- Table/entity sample: ac_mstr, ap_mstr, bk_mstr, branch_mstr, cc_mstr, code_mstr, cu_mstr, en_mstr, gcal_mstr, glt_det, loc_mstr, packaging_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/Tax/FGenInvSOShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment, credit
- Method sample: End, FGenInvSOShipment_Load, Private, Public, ce_all_CheckedChanged, delete_glt_det_ap, format_grid, insert_glt_det_ap, insert_glt_det_ap_jurnal_balik, le_branch_EditValueChanged
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cu_mstr, cust_mstr, do_mstr, driver_mstr, en_mstr, gcal_mstr, glt_det, invc_mstr, invh_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPaymentMultiNota.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/Cash Management/FDisbursementVoucher.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SCI Solution/SCI.Project/Module/Manufacture/FRouting.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FRouting_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save, browse_data
- Table/entity sample: ac_mstr, branch_mstr, burden_mstr, code_mstr, cs_mstr, en_mstr, labor_mstr, partner_mstr, pt_mstr, ptnr_mstr, ro_mstr, rod_det

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/rptScheduleShipmentPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/PrintOut/XRPurchaseOrderPrintOut.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_po

## `SCI Solution/SCI.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Manufacture/FWOCompReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty
- Method sample: Else, ElseIf, End, FWorkOrderReceipt_Load, Private, Public, XtraTabControl1_SelectedPageChanged, before_save, btn_gen_serial_Click, cancel_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, invc_mstr, invh_mstr, loc_mstr, pt_mstr, scthw_hist, wo_mstr, woci_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWOReceiptTax.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Manufacture/FWOMaterialRequest.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Qty
- Method sample: Else, ElseIf, End, FWOMaterialRequest_Load, Private, Public, before_delete, browse_data, browse_data_wo, cancel_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, pt_mstr, wo_mstr, wod_det, woi_mstr, woid_det

## `SCI Solution/SCI.Project/__Browse References/FPurchaseOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPurchaseOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, packaging_mstr, par_po, pjc_mstr, pl_mstr, po_mstr, pod_det

## `SCI Solution/SCI.Project/Module/Manufacture/Costing FG/FFinishGoodsCostGenerate.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FFinishGoodsCostGenerate_Load, GetMultiRowInfo, Private, Public, load_cb, load_total_cost, sb_generate_Click
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, gcal_mstr, glt_det, invc_mstr, invh_mstr, mch_mstr, pl_mstr, pt_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FHPPProductionReport_v1.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FHPPProductionReport_Load, Private, Public, format_grid, load_data_many, load_total_cost, load_total_cost_nonmill
- Table/entity sample: ac_mstr, cash_mstr, cashd_det, class_mstr, code_mstr, cs_mstr, glt_det, mch_mstr, pl_mstr, pt_mstr, riu_mstr, riud_det

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderGift.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Manufacture/FWorkOrder.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Sales Order/Target and achievement/Transaction/FTargetByItemGroup.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Qty
- Method sample: ElseIf, End, FTargetKPI_Load, HasData, ImportFromExcel, Private, Public, arrange_from_excel, bdgt_en_id_EditValueChanged, be_import_xls_ButtonClick
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, branch_mstr, code_mstr, cust_mstr, en_mstr, kpipd_det, kpitd_det, ptnr_mstr, sales_mstr, so_mstr

## `SCI Solution/SCI.Project/Module/Financial/Tax/FCashInTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FCashInTax_Load, Private, Public, SetToAllRowsToolStripMenuItem_Click, before_delete, before_save, browse_data, cancel_data
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, glt_det, ptnr_mstr

## `SCI Solution/SCI.Project/Module/Financial/Cash Management/FCashIn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FCashIn_Load, Private, Public, SetToAllRowsToolStripMenuItem_Click, before_delete, before_save, browse_data, cancel_data
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cu_mstr, en_mstr, glt_det, ptnr_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWorkOrderTax.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `SCI Solution/SCI.Project/Module/Manufacture/FWOCompReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPhysicalInventoryEntrySparepart.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty
- Method sample: ElseIf, End, FPhysicalInventoryEntrySparepart_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel, be_import_xls_ButtonClick
- Table/entity sample: branch_mstr, ccre_mstr, code_mstr, cs_mstr, ds_mstr, en_mstr, invclc_mstr, invclcd_det, loc_mstr, pl_mstr, pt_mstr, sct_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FWOAccountingClose.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FVehicleWeighOutHiBlow.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPhysicalInventoryApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dim, ElseIf, End, FPhysicalInventoryApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, invclc_mstr, invclcd_det, loc_mstr, pt_mstr, wf_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FGenInventoryStock.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: BtDelete_Click, End, FGenInventoryStock_Load, Private, Public, SimpleButton1_Click, SimpleButton2_Click, SimpleButton3_Click, pt_id_ButtonClick, update_invb_mstr
- Table/entity sample: do_mstr, dod_det, invc_mstr, invh_mstr, loc_mstr, packld_det, pl_mstr, pt_mstr, ptsfr_mstr, ptsfrd_det, riufg_mstr, so_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FVehicleWeighOutHiBlowManual.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FVehicleWeighOutHiBlowManual_Deactivate, FVehicleWeighOutHiBlowManual_FormClosed, FVehicleWeighOutHiBlowManual_Load, Private, Public, StringSubPointer, before_delete, before_save
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, do_mstr, dod_det, emvhd_det, en_mstr, inst_mstr, loc_mstr, mch_mstr, pack_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale_250612.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Manufacture/FWOReceiptMulti.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDistLine2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FVehicleWeighOutHiBlowManual.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/__Browse References/FWOSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: End, FWOSearch_Load, Private, Public, fill_data, fill_selected, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, cc_mstr, code_mstr, cs_mstr, ds_so, en_mstr, gv_so, loc_mstr, mch_mstr, pjc_mstr, prj_mstr, ps_mstr

## `SCI Solution/SCI.Project/Module/Master Data/Item/FPartNumber.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, Group, InitializeComponent
- Table/entity sample: pt_group

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRAPInvoice.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FZakRotation.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/General Ledger/FGenerateJournalWOCompIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FGenerateJournalWOCompIssues_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, insert_glt_det_woci, load_cb, load_data_many
- Table/entity sample: code_mstr, en_mstr, glt_det, loc_mstr, pt_mstr, woci_mstr, wocid_det, wod_det

## `SCI Solution/SCI.Project/Module/Distribution/Requisition/FRequisition.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Master Data/Item/FPartNumber.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FPartNumber_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, invc_mstr, is_mstr, its_mstr, loc_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryDisassemble.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Sales Order/Report/FSalesOrderEndToEndReport.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, End, FSalesOrderEndToEndReport_Load, Private, Public, format_grid, get_user, gv_so_SelectionChanged, gv_so_sum_SelectionChanged, load_data_many
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, arso_so, bk_mstr, branch_mstr, cc_mstr, code_mstr, cu_mstr, cust_mstr, en_mstr

## `SCI Solution/SCI.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `SCI Solution/SCI.Project/Module/Manufacture/FGenProdQRCode.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FGenProdQRCode_Load, Private, Public, add_column_edit_be, before_save, cancel_data, close_manualy, delete_data
- Table/entity sample: cc_mstr, code_mstr, dom_mstr, en_mstr, loc_mstr, mch_mstr, pt_mstr, qrsd_det, shift_mstr, wo_mstr, wod_det

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FPaymentManualChecks.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/General Ledger/FBalanceSheetReportAkuntansi.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FBalanceSheetReportAkuntansi_Load, Private, Public, get_amount_asset, get_amount_auxiliary, get_amount_ending_account, get_amount_hpp, get_amount_material, get_amount_opening_account
- Table/entity sample: ac_mstr, ass_mstr, code_mstr, cs_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr, invh_mstr, pt_group, pt_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/XRSOPriceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent, Total
- Table/entity sample: ds_so

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, cc_mstr, code_mstr, cu_mstr, en_mstr, group_mstr, inst_mstr, loc_mstr, packaging_mstr, pi_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Report/FARReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FARReport_Load, Private, Public, format_grid, generate_ar, le_branch_EditValueChanged, le_customer_EditValueChanged, le_entity_EditValueChanged, load_cb
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, ars_ship, bk_mstr, branch_mstr, class_mstr, code_mstr, cu_mstr

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRAPInvoiceNoPO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, credit
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/Fix Asset/FAssetRetirement.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FAssetRetirement_Load, Private, Public, asrtr_en_id_EditValueChanged, asrtr_type_EditValueChanged, before_delete, before_save, browse_data
- Table/entity sample: ac_mstr, asrtr_mstr, asrtrd_det, ass_mstr, branch_mstr, code_mstr, en_mstr, glt_det

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARBilyetGiro.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ConfirmBG, ElseIf, End, FARBilyetGiro_Load, Private, Public, UnConfirmBG, delete_glt_det_ar_bg_confirm, format_grid, grid_detail
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, bg_mstr, bk_mstr, branch_mstr, code_mstr, cu_mstr, en_mstr, glt_det, ptnr_mstr

## `SCI Solution/SCI.Project/PrintRibbonControllerResources.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: New

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPurchaseReceipt_v2.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Report/FInvReportByDateWithCost_v1.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInvReportByDateWithCost_v1_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, format_grid, le_branch_id_EditValueChanged, load_cb
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, gcal_mstr, group_mstr, invc_mstr, invh_group, invh_mstr, loc_mstr, pl_mstr, pt_group

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARNota.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: ElseIf, End, FARNota_Load, Private, Public, ap_en_id_EditValueChanged, ar_branch_id_EditValueChanged, arnota_ptnr_id_EditValueChanged, before_save, browse_data
- Table/entity sample: ar_mstr, arnota_mstr, arnotad_det, arso_so, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, debt_mstr, en_mstr, ptnr_addr, ptnr_mstr

## `SCI Solution/SCI.Project/Module/Manufacture/FGenProdQRCode.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/General Ledger/FBalanceSheetReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, FBalanceSheetReport_Load, Private, Public, get_amount_asset, get_amount_auxiliary, get_amount_ending_account, get_amount_hpp, get_amount_material, get_amount_opening_account
- Table/entity sample: ac_mstr, ass_mstr, code_mstr, cs_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr, invh_mstr, pt_group, pt_mstr

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FAPBilyetGiro.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ConfirmBG, ElseIf, End, FAPBilyetGiro_Load, Private, Public, UnConfirmBG, delete_glt_det_bg_confirm, format_grid, grid_detail
- Table/entity sample: ac_mstr, ap_mstr, appay_payment, appayd_det, bg_mstr, bk_mstr, branch_mstr, cu_mstr, en_mstr, glt_det, ptnr_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseUnloading_v2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Manufacture/XRWOReceiptPrintLotSerial.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: wor_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Report/FARReportByAging.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Over Due
- Method sample: End, FARReportByAging_Load, Private, Public, format_grid, load_ar, load_ar_aging, load_ar_aging_bydate, load_cb, load_data_many
- Table/entity sample: ar_mstr, branch_mstr, code_mstr, en_mstr, inst_mstr, ptnr_mstr, regional_mstr, type_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FEmptyVehicleWeighInHiBlow.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Report/FInvReportByDateWithCost.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInvReportByDateWithCost_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, format_grid, le_branch_id_EditValueChanged, load_cb
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, gcal_mstr, group_mstr, invc_mstr, invh_group, invh_mstr, loc_mstr, pl_mstr, pt_group

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FFGInventoryCutOff.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Qty
- Method sample: ElseIf, End, FFGInventoryCutOff_Load, Private, Public, _conf_value, before_delete, before_save, cek_stock_next_date, delete_data
- Table/entity sample: branch_mstr, code_mstr, ds_mstr, en_mstr, invclc_mstr, invclcd_det, loc_mstr, pbd_det, pt_mstr, wf_mstr, wh_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRCashInARPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRCashOutAPPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/XRSOGiftCost.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRAPNotaTagih.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/XRSOShipmentHiBlow_Print_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Manufacture/FWIPCorrection.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty
- Method sample: End, FWIPCorrection_Load, Private, Public, be_barcode_ButtonClick, be_pt_code_ButtonClick, browse_data, format_grid, gv_edit_FocusedRowChanged, gv_wip_DoubleClick
- Table/entity sample: cc_mstr, code_mstr, loc_mstr, pack_mstr, pt_mstr, qrsd_det, um_mstr, wo_mstr, wod_det, wor_mstr

## `SCI Solution/SCI.Project/Module/Financial/General Ledger/FProfitLossComparisonRangeReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment, credit
- Method sample: Else, End, FProfitLossComparisonRangeReport_Load, Private, Public, get_amount_asset, get_amount_auxiliary, get_amount_ending_account, get_amount_hpp, get_amount_material
- Table/entity sample: ac_mstr, ass_mstr, code_mstr, cs_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr, invh_mstr, pt_group, pt_mstr

## `SCI Solution/SCI.Project/Module/Financial/General Ledger/FConfigBalanceSheetAddEdit.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/__Browse References/FDeliveryOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FDeliveryOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, code_mstr, cust_mstr, do_mstr, dod_det, en_mstr, loc_mstr, pack_mstr, packaging_mstr, po_mstr, pod_det, pt_mstr

## `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRNotaTagih.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Report/FInvReportByDate.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FARReportByAging_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, format_grid, le_branch_id_EditValueChanged, load_by_branch
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, invc_mstr, invh_group, invh_mstr, loc_mstr, pl_mstr, pt_group, pt_mstr

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/XRSOGift_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/Fix Asset/FAssetMasterFinancial.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Account, Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `SCI Solution/SCI.Project/Module/Sales Order/PrintOut/XRSalesOrderShipmentPrint_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `SCI Solution/SCI.Project/Module/Financial/Tax/FCashOutImportTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FCashOutImportTax_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, get_code, insert_gl_local
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cc_mstr, cu_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, pjc_mstr, ptnr_mstr

## `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableIssues.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
