# ALKINDO_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas alkindo.

- Total file prioritas dianotasi: **180**

## `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: ac_mstr, ar_mstr, arbank_mstr, arbankd_det, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderMergeSOI.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrderMergeSOI_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FDelivery.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FDelivery_Load, Private, Public, before_save, branch_name_EditValueChanged, cancel_data, delete_data, dlv_branch_id_EditValueChanged
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cust_mstr, dlv_mstr, dlvsc_mstr, driver_mstr, ds_ship, en_mstr, loc_mstr, pack_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, cs_mstr, csd_det

## `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrderReturnToShipment_Load, Function, ImportFromExcel, Private, Public, add_column_edit_be, arrange_from_excel
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bill_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipRealization.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, Shipment, credit
- Method sample: Catch, ElseIf, End, FSalesOrderShipment_Load, Function, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, TextEdit1_GotFocus
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, driver_mstr, ds_ship, en_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderShipment_Load, Function, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, driver_mstr, ds_ship

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderGift.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FSalesOrderGift_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cust_mstr, en_mstr, glt_det, inst_mstr, invc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FWOLaborFeedback_Load, Private, Public, before_delete, before_save, browse_data, browse_data_gb
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, its_mstr, itsd2_det, loc_mstr, mch_mstr, pt_mstr, ptnr_mstr, shift_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FTransferIssues_Load, Function, Private, Public, add_column_edit_be, approve, approve_line
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr, itsd2_det, itsd_det

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FMultiWOLaborFeedback.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FMultiWOLaborFeedback_Load, Private, Public, before_delete, before_save, browse_data, browse_data_gb, browse_data_waste
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, its_mstr, itsd2_det, loc_mstr, mch_mstr, pt_mstr, ptnr_mstr, shift_mstr

## `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/ds_ap.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: ac_mstr, ap_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, loc_mstr, po_mstr, pod_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FControlFileDistribution_Load, Private, Public, _pr_cost_printout_Leave, _pr_printout_Leave, ac_qc_trash, automatic_transfer_receipt, cbe_rounding_methode_inv_SelectedIndexChanged, cbe_rounding_methode_inv_log_SelectedIndexChanged
- Table/entity sample: printout_po

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FWOReceipt_Load, Private, Public, before_delete, before_save, browse_data_gb, browse_data_serial
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, ds_so, dt_mstr, dt_so, en_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_new_WIP.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FInventorySlitting_new_WIP_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, add_column_copy_limit_decimal, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arbank_mstr, arbankd_det, arr_mstr, arrd_det, ars_inv, ars_ship, arso_so, bk_mstr, branch_mstr, browse_so

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FJumboPrinting.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FJumboPrinting_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_new.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FInventorySlitting_new_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_WIP.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FInventorySlitting_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_soshipds.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: addr_mstr, ass_mstr, branch_mstr, code_mstr, cu_mstr, driver_mstr, en_mstr, er_mstr, inst_mstr, packaging_mstr, pt_mstr, ptnr_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FInventorySlitting_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOReceiptMulti.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FWOReceiptMulti_Load, Private, Public, before_delete, before_save, browse_data, browse_data_gb
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, detail_so, ds_so, dt_mstr, en_mstr, gc_so

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FDelivery.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedbackMulti.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FWOLaborFeedbackMulti_Load, Private, Public, before_delete, before_save, browse_data, browse_data_waste, browse_data_wip_serial
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, its_mstr, itsd2_det, loc_mstr, mch_mstr, pt_mstr, shift_mstr, traninv_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble2.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: Else, End, FInventoryAssemble2_Load, Function, Private, Public, before_save, browse_data, browse_data_serial, browse_data_serial_header
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryRewinding2.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FInventoryRewinding2_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryRewinding.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FInventoryRewinding_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/FVoucherTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_branch_id_EditValueChanged, ap_credit_term_EditValueChanged, ap_cu_id_EditValueChanged, ap_date_EditValueChanged, ap_due_date_EditValueChanged
- Table/entity sample: ac_mstr, ap_mstr, app_po, bk_mstr, branch_mstr, browse_po, cc_mstr, cmaddr_mstr, code_mstr, cu_mstr, detail_po, en_mstr

## `Alkindo Solution/Alkindo.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, ce_all_CheckedChanged, fill_data, fill_selected, format_grid, get_material_request
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, gv_so, ilr_mstr, ilrd_det, invc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrder.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FWorkOrder_Load, Private, Public, before_save, browse_data, browse_data_so, browse_data_waste
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, detail_so, dt_so, en_mstr, gc_so, gv_so, mch_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_soship.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: cmaddr_mstr, code_mstr, driver_mstr, er_mstr, pt_mstr, ptnr_mstr, ptnra_addr, so_mstr, sod_det, soship_mstr, soshipd_det, xemp_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp2.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, Shipment, credit
- Method sample: ElseIf, End, FSOShipTemp_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_delete
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, cu_mstr, cust_mstr, detail_so, driver_mstr, ds_ship, en_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: Else, ElseIf, End, FInventoryReceipts_Load, Function, ImportFromExcel, Private, Public, add_column_edit_be, arrange_from_excel_detail_serial
- Table/entity sample: ac_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt_new.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseReceipt_new_Load, GetIDMax, GetMaxLine, Private, Public, before_save, browse_data
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, cc_mstr, code_mstr, color_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, Shipment, credit
- Method sample: ElseIf, End, FSOShipTemp_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_delete
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, cu_mstr, cust_mstr, driver_mstr, ds_ship, en_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssues_Load, Function, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_detail_serial
- Table/entity sample: ac_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp_old.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, Shipment, credit
- Method sample: ElseIf, End, FSOShipTemp_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_delete
- Table/entity sample: bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, cu_mstr, cust_mstr, driver_mstr, ds_ship, en_mstr, gcald_so

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseReceipt_Load, GetIDMax, GetMaxLine, Private, Public, before_save, browse_data
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, cc_mstr, code_mstr, color_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Requisition/FRequisition.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FRequisition_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: aprv_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, pjc_mstr, pt_mstr, ptnr_mstr, req_mstr, reqd_det

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_so_gift_serial.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, cust_mstr, en_mstr, loc_mstr, packaging_mstr, pt_mstr, ptnr_mstr, ptnra_addr, riu_mstr, sp_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWIPInventoryReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: Else, ElseIf, End, FInventoryReceipts_Load, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_detail_serial, be_import_xls_ButtonClick
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, en_mstr, glt_det, group_mstr, invc_mstr, invh_mstr

## `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FARPaymentTax.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, credit
- Method sample: ElseIf, End, FARPayment_Load, Private, Public, _load_data_grid_detail, arpay_bill_to_EditValueChanged, arpay_bk_id_EditValueChanged, arpay_branch_id_EditValueChanged, arpay_date_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, arpaydd_det, arso_so, bg_mstr, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWIPReturn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, ElseIf, End, FWIPReturn_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, its_mstr, itsd2_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/QC/FQualityControl.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FQualityControl_Load, GetAssIDMax, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: ac_mstr, ass_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr, itsd2_det

## `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/ds_apnota.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: ap_mstr, apnota_mstr, apnotad_det, branch_mstr, cu_mstr, en_mstr, ptnr_mstr, ptnra_addr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Print Out/ds_inventory_request.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, pb_mstr, pbd_det, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWIPInventoryIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_detail_serial, be_import_xls_ButtonClick
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr, packaging_mstr, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Print Out/ds_slitting_lot.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, mch_mstr, pt_mstr, riubd_det, shift_mstr, xemp_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_dlvs.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, dlv_mstr, driver_mstr, en_mstr, pack_mstr, pt_mstr, ptnr_mstr, ptsfr_mstr, riu_mstr, riud_det

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_dlv.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: branch_mstr, ck_mstr, cmaddr_mstr, code_mstr, dlv_mstr, driver_mstr, en_mstr, pack_mstr, pt_mstr, ptnr_mstr, ptsfr_mstr, ptsfrd_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FSparepartIssues.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: Else, ElseIf, End, FSparepartIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_detail_serial
- Table/entity sample: ac_mstr, boq_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, div_mstr, en_mstr, glt_det, invc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryDisassemble.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: End, FInventoryDisassemble_Load, Function, Private, Public, before_save, browse_data, browse_data_serial, browse_data_serial_header, cancel_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr, itsd2_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Print Out/ds_slitting.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, mch_mstr, pt_mstr, riub_mstr, riubd_det, shift_mstr, xemp_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_wo_release.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: cc_mstr, code_mstr, m_mstr, pt_mstr, ro_mstr, um_mstr, wo_mstr, wod_det

## `Alkindo Solution/Alkindo.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: Else, End, FInventoryIssues_Load, Private, Public, before_save, browse_data, browse_data_serial, browse_data_serial_header, calculate_qty
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: CekStokToolStripMenuItem_Click, End, FTransferReceipts_Load, Function, Private, Public, before_edit, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, dt_inv, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr, itsd2_det, loc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedback.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_wo_receipt.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: code_mstr, en_mstr, loc_mstr, packaging_mstr, pt_mstr, um_mstr, wo_mstr, wor_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_wipreturn.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: cmaddr_mstr, code_mstr, en_mstr, loc_mstr, pt_mstr, wipretur_mstr, wipreturd_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Packaging/FInventoryPackaging.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Qty, Shipment
- Method sample: ElseIf, End, FInventoryPackaging_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial, calculate_qty
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, invc_mstr, invh_mstr, loc_mstr, packd_det, pallet_mstr, pckg_mstr, pckgd_det, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderGiftApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FSalesOrderGiftApproval_Load, Private, Public, approve_wf, cancel_wf, delete_glt_det_so_gift, exportpdf, format_grid
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, en_mstr, gcald_so, glt_det, inst_mstr, invc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrder.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, lcg_so, xtp_so

## `Alkindo Solution/Alkindo.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pack_mstr, packaging_mstr, par_so

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FInventoryRequest_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: aprv_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, pb_mstr, pbd_det, pt_mstr, tran_mstr, wf_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_cids.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: cc_mstr, ci_mstr, cid_det, code_mstr, en_mstr, loc_mstr, maddr_mstr, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname_new.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FCOStockOpname_Load, GetValidRows, InsertDetailBulk, InsertDetailSQL, Private, Public, SafeToDate
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, doc_mstr, ds_mstr, en_mstr, group_mstr, invc_mstr, invclc_mstr, invclcd_det, load_group, loc_group

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSORecapitulation.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Outstanding, Qty, Shipment
- Method sample: Else, ElseIf, End, FSORecapitulation_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cust_mstr, driver_mstr, ds_so, en_mstr, get_so, loc_mstr, pack_mstr, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrder.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Report/FInvReportByDate.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInvReportByDate_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, format_grid, ini, le_branch_id_EditValueChanged
- Table/entity sample: class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, invc_mstr, invh_group, invh_mstr, loc_group, loc_mstr, location_group, pl_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoTax.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Alkindo Solution/Alkindo.Project/Module/Master Data/Company/FCustomer.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Shipment, credit
- Method sample: ElseIf, End, FPartnerAll_Load, GetID_Limit, GetID_Local, Private, Public, before_save, cancel_data, delete_data
- Table/entity sample: ac_mstr, arbank_mstr, bk_mstr, branch_mstr, cmt_mstr, code_mstr, country_mstr, creditterms_mstr, cu_mstr, dom_mstr, en_mstr, inst_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryLendReturn.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Qty
- Method sample: ElseIf, End, FInventoryLendReturn_Load, ImportFromExcel, Private, Public, arrange_from_excel_serial, be_import_serial_ButtonClick, before_delete, before_save
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, il_mstr, ild_det, ilr_mstr, ilrd_det, invc_mstr, invh_mstr, loc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryLend.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Qty
- Method sample: ElseIf, End, FInventoryLend_Load, ImportFromExcel, Private, Public, arrange_from_excel_serial, be_import_serial_ButtonClick, before_delete, before_save
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, il_mstr, ild_det, ilr_mstr, ilrd_det, invc_mstr, invh_mstr, loc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FComponentIssue.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Else, ElseIf, End, FComponentIssue_Load, Private, Public, XtraTabControl1_SelectedPageChanged, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, ci_mstr, cid_det, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, invc_mstr, invh_mstr, its_mstr, itsd_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReturn.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FPurchaseReturn_Load, Private, Public, before_save, browse_data, browse_data_serial, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, loc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_WIP.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_new_WIP.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_new.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_sors.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindByloc_desc, GetData, GetRealUpdatedRows
- Table/entity sample: ck_mstr, code_mstr, cust_mstr, driver_mstr, en_mstr, loc_mstr, p_mstr, pack_mstr, pt_mstr, ptnr_mstr, so_mstr, sod_det

## `Alkindo Solution/Alkindo.Project/Module/Financial/Tax Invoice/FFakturPajak.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FFakturPajak_Load, Private, Public, ar_cu_id_EditValueChanged, before_save, before_save_insert, cancel_approve
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, dr_det, en_mstr, fp_mstr, pt_mstr, ptnr_mstr, sod_det, soship_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FMultiWOLaborFeedback.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so

## `Alkindo Solution/Alkindo.Project/Module/Administrative Tools/FUserGroup.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: cb_group, gc_group, gv_group, scc_group, xtp_group

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/ds_sor.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindByloc_desc, GetData, GetRealUpdatedRows
- Table/entity sample: ck_mstr, code_mstr, cust_mstr, driver_mstr, en_mstr, hicle_mstr, loc_mstr, pack_mstr, pt_mstr, ptnr_mstr, sod_det, sor_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderMergeSOI.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrderMulti.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty
- Method sample: ElseIf, End, FWorkOrderMulti_Load, Private, Public, be_pt_code_ButtonClick, before_save, browse_data, browse_data_final_item, browse_data_routing
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, detail_so, dt_so, en_mstr, gc_so, gv_so, pt_mstr, ptnr_mstr, ro_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryLendRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FInventoryLendRequest_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, ilr_mstr, ilrd_det, pt_mstr, shift_mstr, wf_mstr, xemp_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FCOStockOpname_Load, Private, Public, approve, approve_line, before_delete, before_save
- Table/entity sample: branch_mstr, code_mstr, doc_mstr, ds_mstr, en_mstr, group_mstr, invc_mstr, invclc_mstr, invclcd_det, invh_mstr, load_group, loc_group

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedbackMulti.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so

## `Alkindo Solution/Alkindo.Project/Module/Administrative Tools/FUserGroup.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: BarButtonItem1_ItemClick, ElseIf, End, FUserGroup_Load, Function, Private, Public, Timer1_Tick, before_save, btKillAll_Click
- Table/entity sample: branch_mstr, cb_group, cc_mstr, dom_mstr, en_mstr, gc_group, gv_group, loc_mstr, pt_mstr, tran_mstr, wc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryRewinding.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Print Out/XRPrintBarcodeSingle.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname_WIP.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FCOStockOpname_WIP_Load, Private, Public, approve, approve_line, before_delete, before_save
- Table/entity sample: branch_mstr, code_mstr, doc_mstr, ds_mstr, en_mstr, group_mstr, invclc_mstr, invclcd_det, load_group, loc_group, loc_mstr, location_group

## `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FAssetRequest_Load, Private, Public, approve, approve_line, assr_branch_id_EditValueChanged, assr_en_id_EditValueChanged
- Table/entity sample: ass_mstr, branch_mstr, cc_mstr, code_mstr, en_mstr, pt_mstr, req_mstr, tran_mstr, wf_mstr, xemp_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetTransactionPost.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FUpdateDepresiasiNew_Load, Private, Public, RetrieveData, SelectAfterPosted, UpdateDepresiasi, btn_update_Click, ce_select_CheckedChanged
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, code_mstr, en_mstr, fabk_mstr, famt_mstr, famtd_det, glt_det, pl_mstr, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Report/FWarehouseSummaryReport2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWarehouseSummaryReport2_Load, Private, Public, ini, le_branch_id_EditValueChanged, le_wh_EditValueChanged, load_by_branch, load_by_branch2, load_by_branch_wip
- Table/entity sample: code_mstr, cs_mstr, en_mstr, group_mstr, invc_mstr, invh_group, invh_mstr, loc_mstr, pt_group, pt_mstr, sct_mstr, um_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderShipment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Report/FInvReportByDateNoCost.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInvReportByDateNoCost_Load, Private, Public, ini, le_branch_id_EditValueChanged, le_wh_EditValueChanged, load_by_branch, load_by_branch2, load_by_branch_wip
- Table/entity sample: code_mstr, cs_mstr, en_mstr, group_mstr, invc_mstr, invh_group, invh_mstr, loc_mstr, pt_group, pt_mstr, sct_mstr, um_mstr

## `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/FVoucherTax.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Requisition/FRequisitionApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Else, ElseIf, End, FRequisitionApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, pjc_mstr, pt_mstr, ptnr_mstr, req_mstr, reqd_det, si_mstr, tran_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Master Data/Company/FCustomer.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipRealization.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Administrative Tools/FCorrectionData.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment
- Method sample: BtItemMaster_Click, BtLocation_Click, BtMerge_Click, BtRecalculate_Click, ElseIf, End, FCorrectionData_Load, Private, Public, load_cb
- Table/entity sample: ac_mstr, ars_ship, branch_mstr, dt_inv, gcal_mstr, gcald_det, gcald_so, glbal_balance, invc_mstr, pb_mstr, pbd_det, pt_group

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryRewinding2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetCapitalization.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Account, Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname2.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty
- Method sample: Else, ElseIf, End, FCOStockOpname_Load, Private, Public, approve, approve_line, before_delete, before_save
- Table/entity sample: branch_mstr, code_mstr, doc_mstr, ds_mstr, en_mstr, group_mstr, invc_mstr, invclc_mstr, invclcd_det, invh_mstr, load_group, loc_group

## `Alkindo Solution/Alkindo.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferIssueApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FTransferIssueApproval_Load, Private, Public, approve_wf, cancel_wf, delete_glt_det_transfer_issue, exportpdf, format_grid
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr, loc_mstr, packaging_mstr, pb_mstr, pbd_det

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: xtp_so

## `Alkindo Solution/Alkindo.Project/Module/Master Data/Company/FSupplier.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: Else, ElseIf, End, FPartnerAll_Load, GetID_Local, Private, Public, before_save, cancel_data, delete_data
- Table/entity sample: ac_mstr, branch_mstr, cmt_mstr, code_mstr, creditterms_mstr, cu_mstr, dom_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr, taxclass_mstr

## `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetMasterFinancial.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Account, Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Packaging/FInventoryPackaging.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/__Browse References/FPalletIDSearchNew.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Else, End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: code_mstr, cs_mstr, en_mstr, invc_mstr, its_mstr, itsd_det, loc_mstr, pallet_mstr, palletd_det, pt_mstr, sct_mstr, traninv_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FEntryStockOpname_new.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FEntryStockOpname_new_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save
- Table/entity sample: branch_mstr, ccre_mstr, code_mstr, cs_mstr, ds_mstr, en_mstr, glt_det, group_mstr, invc_mstr, invclc_mstr, invclcd_det, its_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Report/FInvReportByDate.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: invh_group

## `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FEntryStockOpname.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FEntryStockOpname_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save
- Table/entity sample: branch_mstr, ccre_mstr, code_mstr, cs_mstr, ds_mstr, en_mstr, glt_det, group_mstr, invc_mstr, invclc_mstr, invclcd_det, its_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSORecapitulation.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Print Out/ds_barcode_double.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindByloc_code, GetData, GetRealUpdatedRows
- Table/entity sample: code_mstr, loc_mstr, pod_det, pt_mstr, rcv_mstr, rcvd_det, um_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp_old.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderInternal.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FSalesOrderInternal_Load, Private, Public, before_save, browse_data_so, cancel_data, cancel_line
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, detail_so, ds_so, dt_so, en_mstr, gc_so, gv_so, pt_mstr, ptnr_mstr, so_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderGift.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Master Data/Company/FSupplier.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Product Structure/FProductStructure.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FProductStructure_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_first_ButtonClick, be_import_xls_ButtonClick, be_to_ButtonClick
- Table/entity sample: bom_mstr, cc_mstr, code_mstr, en_mstr, fes_mstr, ps_mstr, psd_det, psd_group, pt_mstr, ptbom_mstr, um_mstr, wc_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferReceipts.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Requisition/FRequisition.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryLendReturn.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryLend.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/XRInvoiceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ars_inv

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wcci_mstr, wh_mstr

## `Alkindo Solution/Alkindo.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/XRAPInvoice.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total

## `Alkindo Solution/Alkindo.Project/__Browse References/FWORoutingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: End, FWOSearch_Load, Function, Private, Public, ce_all_CheckedChanged, fill_data, fill_selected, format_grid, get_sequel
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, en_mstr, loc_mstr, ps_mstr, pt_mstr, ptnr_mstr, ro_mstr, soi_mstr, tld_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FRouting.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FRouting_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save, browse_data
- Table/entity sample: ac_mstr, burden_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, labor_mstr, partner_mstr, pt_mstr, ptnr_mstr, ro_mstr, rod_det

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Document/FDocumentIssues.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Qty
- Method sample: Else, ElseIf, End, FDocumentIssues_Load, Private, Public, before_delete, before_save, browse_data, cancel_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, doc_mstr, docd_det, en_mstr, loc_mstr, packaging_mstr, pt_mstr, ptnr_mstr, ptnra_addr

## `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetMasterFinancial.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FAssetMasterFinancial_Load, Function, Private, Public, SimpleButton1_Click, ass_branch_id_EditValueChanged, before_edit, before_save, browse_data
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, code_mstr, en_mstr, fabk_mstr, famt_mstr, loc_mstr, pt_mstr, ptnr_mstr, xemp_mstr

## `Alkindo Solution/Alkindo.Project/Module/Master Data/Company/FPalletReceipts.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty
- Method sample: ElseIf, End, FPalletReceipts_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick
- Table/entity sample: branch_mstr, cc_mstr, en_mstr, fillp_mstr, fillpd_det, loc_mstr, plt_mstr, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Import Data/FSODetailImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment
- Method sample: ElseIf, End, FSODetailImport_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, get_transaction_number_soi, insert_so_internal
- Table/entity sample: ac_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, loc_mstr, packaging_mstr, pl_mstr, pla_mstr, pt_group, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetCapitalization.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: End, FAssetCapitalization_Load, Function, Private, Public, SimpleButton1_Click, ass_branch_id_EditValueChanged, before_edit, before_save, browse_data
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, code_mstr, en_mstr, fabk_mstr, famt_mstr, loc_mstr, pt_mstr, ptnr_mstr, xemp_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FStockOpnameApproval_new.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FStockOpnameApproval_new_Load, Private, Public, approve_wf, cancel_wf, ce_all_CheckedChanged, exportpdf, format_grid
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, invc_mstr, invclc_mstr, invclcd_det, its_mstr, itsd2_det, loc_mstr, pt_mstr

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrderMulti.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FComponentIssue.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FARPaymentTax.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FReprintBarcode_Generate.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Else, End, FReprintBarcode_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, color_mstr, ds_mstr, en_mstr, invc_mstr, its_mstr, loc_mstr, pt_mstr, reprint_mstr, reprintd_det

## `Alkindo Solution/Alkindo.Project/__Browse References/FPurchaseOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPurchaseOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, its_mstr, itsd2_det, loc_mstr, packaging_mstr, par_po, pjc_mstr, pl_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Print Out/XRInventoryLendReturn_Lot.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetRequest.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Print Out/XRInventoryLend_Lot.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/XRAPInvoiceNoPO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOReceiptMulti.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FSparepartIssues.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLabel.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so, xtp_so

## `Alkindo Solution/Alkindo.Project/__Browse References/FSalesOrderRecapSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSalesOrderRecapSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, branch_mstr, code_mstr, en_mstr, invc_mstr, loc_mstr, pack_mstr, packaging_mstr, pod_det, pt_mstr, ptnr_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Print Out/XRInventoryLendReturn.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Print Out/XRInventoryLend.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt_new.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryDisassemble.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWIPReturn.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLabel.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FWOLabel_Load, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, pt_mstr, ptnr_mstr, ro_mstr, um_mstr, wc_mstr, wo_mstr, wold_det

## `Alkindo Solution/Alkindo.Project/Module/Master Data/Item Sites/FPartNumber.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FDomain_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, is_mstr, its_mstr, loc_mstr, pl_mstr

## `Alkindo Solution/Alkindo.Project/Module/Sales Order/Print Out/XRDO_SPP.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FDRCRMemoReceipt_Load, Private, Public, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_arbank_oid_ButtonClick, ar_branch_id_EditValueChanged, before_delete
- Table/entity sample: ac_mstr, ar_mstr, arbank_mstr, arbankd_det, arr_mstr, arrd_det, bk_mstr, branch_mstr, cu_mstr, cust_mstr, dom_mstr, en_mstr

## `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryLendRequest.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
