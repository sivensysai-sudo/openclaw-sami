# ALKINDO_PT_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas alkindo.pt.

- Total file prioritas dianotasi: **180**

## `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FWOReceipt_Load, Function, Private, Public, before_delete, before_save, browse_data_gb
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, ds_so, dt_mstr, dt_so, en_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FWOLaborFeedback_Load, If, Private, Public, before_delete, before_save, browse_data
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, its_mstr, itsd2_det, loc_mstr, mch_mstr, pt_mstr, ptnr_mstr, shift_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrinting.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FJumboPrinting2_Load, Private, Public, before_delete, before_save, browse_data, browse_data_ink
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrintingTinta.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FJumboPrintingTinta_Load, Private, Public, before_delete, before_save, browse_data, browse_data_item_master
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr, its_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, credit
- Method sample: Else, ElseIf, End, FInventorySlitting_new_WIP2_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, color_mstr, cs_mstr, csd_det, down_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt_old.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FWOReceipt_Load, Private, Public, before_delete, before_save, browse_data_gb, browse_data_serial
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, ds_so, dt_mstr, dt_so, en_mstr, gc_so

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP2.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FConsumeWIP2_Load, Private, Public, before_delete, before_save, browse_data, browse_data_lf, browse_data_wip_serial
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, its_mstr, itsd2_det, loc_mstr, mch_mstr, pt_mstr, ptnr_mstr, shift_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FConsumeWIP_Load, Private, Public, before_delete, before_save, browse_data, browse_data_lf, browse_data_wip_serial
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, glt_det, its_mstr, itsd2_det, loc_mstr, mch_mstr, pt_mstr, ptnr_mstr, shift_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FWorkOrder_Load, Private, Public, before_save, browse_data, browse_data_so, browse_data_waste
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, detail_so, dt_so, en_mstr, gc_so, gv_so, mch_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, ce_all_CheckedChanged, fill_data, fill_selected, format_grid, get_material_request
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, gv_so, ilr_mstr, ilrd_det, invc_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, lcg_so, xtp_so

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/ds_wo_receipt.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: code_mstr, en_mstr, loc_mstr, packaging_mstr, pt_mstr, um_mstr, wo_mstr, wor_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pod_det, pt_mstr, ptnr_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSalesOrder.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so

## `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrinting.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintBarcodeSingle.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWORoutingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: End, FWOSearch_Load, Function, Private, Public, calculate_qty, ce_all_CheckedChanged, cek_routing_label, fill_data, fill_selected
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, en_mstr, loc_mstr, mch_mstr, ps_mstr, pt_mstr, ptnr_mstr, ro_mstr, shift_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrintingTinta.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/ds_barcode_double.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindByloc_code, GetData, GetRealUpdatedRows
- Table/entity sample: code_mstr, loc_mstr, pod_det, pt_mstr, rcv_mstr, rcvd_det, um_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt_old.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: gc_so, gv_so, xtp_so

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: lcg_so

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wcci_mstr, wh_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWOLaborFeedbackReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FWOLaborFeedbackReport_Load, Private, Public, format_grid, load_data_many, load_grade_b, load_label, load_remaining_cut, load_view1
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, loc_mstr, mch_mstr, pt_mstr, ptnr_mstr, shift_mstr, soi_mstr, um_mstr, wc_mstr

## `Alkindo Solution/AlkindoPT.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FPartNumber.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FPartNumber_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, color_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, is_mstr, its_mstr, loc_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FRouting.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FRouting_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save, browse_data
- Table/entity sample: ac_mstr, burden_mstr, code_mstr, cs_mstr, en_mstr, labor_mstr, partner_mstr, ptnr_mstr, subcont_mstr, tool_mstr, wc_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSOContract.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: ElseIf, End, FSOContract_Load, GetID_Local, Private, Public, before_delete, before_save, cancel_data, delete_data
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cust_mstr, ds_so, en_mstr, pi_mstr, picgd_det, pocust_mstr, ptnr_mstr, so_mstr, sod_det

## `Alkindo Solution/AlkindoPT.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPurchaseOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPurchaseOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, its_mstr, itsd2_det, loc_mstr, packaging_mstr, par_po, pjc_mstr, pl_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Print Out/XRSOPriceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent, Total
- Table/entity sample: ds_so

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOReceiptPrintLotSerial.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: wor_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelSerahTerimaPT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOListPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelPCSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRInventorySlitting_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRInventorySlitting.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWOSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FWOSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: cc_mstr, code_mstr, cs_mstr, ds_so, dt_mstr, en_mstr, gv_so, loc_mstr, mch_mstr, pjc_mstr, prj_mstr, ps_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWORouteMaintenance.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FJumboPrintingReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FJumboPrintingReport_Load, Private, Public, format_grid, load_cb, load_data_many, load_view1, load_view2, load_view3
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, down_mstr, en_mstr, jumboprint_mstr, jumboprintd_det, loc_mstr, mch_mstr, pt_mstr, shift_mstr, spc_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Print Out/XRSO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FPalletID.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: scc_group

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOReceiptPrintNon.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: wor_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSOContract.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelHCPBSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FRequisitionSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FRequisitionSearch_Load, Private, Public, ce_select_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, loc_mstr, pjc_mstr, pt_group, pt_mstr, ptnr_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelWOPT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FAssetSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FAssetSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ass_mstr, assvcsch_mstr, assvcschd_det, assvct_mstr, branch_mstr, code_mstr, en_mstr, its_mstr, loc_mstr, pt_group, pt_mstr, ptnr_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWORouteMaintenance.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Qty
- Method sample: ElseIf, End, FWorkOrder_Load, Private, Public, before_save, browse_data, cancel_data, delete_data, edit
- Table/entity sample: ac_mstr, cc_mstr, code_mstr, en_mstr, pt_mstr, ro_mstr, si_mstr, wc_mstr, wo_mstr, wrld_det

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FPalletID.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPalletID_Load, Private, Public, before_delete, before_save, cancel_data, check_all_CheckedChanged, delete_data, edit
- Table/entity sample: branch_mstr, en_mstr, loc_mstr, pallet_mstr, palletd_det, pt_mstr, riud_det, wo_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelPTSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: End, FWorkOrderReport_Load, Private, Public, format_grid, get_user, load_data_many, load_userid, load_wo, load_wo_item
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, item_group, mch_mstr, ps_mstr, pt_group

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderRecapSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSalesOrderRecapSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, branch_mstr, code_mstr, en_mstr, invc_mstr, loc_mstr, pack_mstr, packaging_mstr, pod_det, pt_mstr, ptnr_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/ds_label.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, CreateInstance, DataTable1RowChangeEventHandler, End, GetRowType, GetSchemaSerializable, GetTypedDataSetSchema, GetTypedTableSchema, InitClass

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Company/FZEmployee.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FDRCRMemoSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Shipment
- Method sample: End, FDRCRMemoSearch_Load, Private, Public, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_CellValueChanging, gv_master_DoubleClick
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, code_mstr, cu_mstr, en_mstr, ptnr_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_price_list
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pb_mstr, pbd_det, pi_mstr, pid_det, pidd_det, pidd_payment, pt_mstr

## `Alkindo Solution/AlkindoPT.Project/__General Form/FCodeMstr.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FRouting.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FTransferSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FTransferSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: branch_mstr, code_mstr, loc_mstr, pack_mstr, pt_mstr, ptnr_mstr, ptsfr_mstr, ptsfrd_det, so_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelRodaPTSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Company/FZEmployee.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: ElseIf, End, FEmployeeNew_Load, Function, Private, Public, before_delete, before_save, delete_data, edit
- Table/entity sample: branch_mstr, code_mstr, en_mstr, xemp_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FLotSerialSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: invc_mstr, its_mstr, itsd_det, loc_mstr, pt_mstr, traninv_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWOLaborFeedbackReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelHCPBGSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FLaborFeedbackSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FPartNumberSearch_Load, Private, Public, ce_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, loc_mstr, mch_mstr, pt_mstr, ptnr_mstr, shift_mstr, soi_mstr, tld_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPartnerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FPartnerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_cb
- Table/entity sample: ac_mstr, branch_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FSOContractImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FSOContractImport_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, get_transaction_number_smart, get_transaction_number_sog, import_en_id_EditValueChanged
- Table/entity sample: QTY_SO, branch_mstr, cc_mstr, code_mstr, en_mstr, ptnr_mstr, ptnra_addr, sog_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintBarcodeDoubleColor.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReceiptReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWorkOrderReceiptReport_Load, Private, Public, format_grid, load_data_many, load_wor, load_wor_lf, load_wor_serial, load_wor_so
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, dt_mstr, en_mstr, group_mstr, loc_mstr, mch_mstr, packaging_mstr, pl_mstr, pt_group, pt_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: item_group

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FColor.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderShipmentSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FSalesOrderShipmentSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: branch_mstr, code_mstr, pack_mstr, pt_mstr, ptnr_mstr, so_mstr, sod_det, sor_mstr, soship_mstr, soshipd_det, um_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintBarcodeDouble.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPSSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__General Form/FCodeMstr0.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FVoucherSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FVoucherSearch_Load, Private, Public, calculate_total, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_CellValueChanged
- Table/entity sample: ac_mstr, ap_mstr, bk_mstr, branch_mstr, code_mstr, cu_mstr, en_mstr, pjc_mstr, ptnr_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FConsumeWIPReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FConsumeWIPReport_Load, Private, Public, format_grid, load_data_many, load_view1, load_view2, load_view3
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, loc_mstr, mch_mstr, pt_mstr, ptnr_mstr, shift_mstr, soi_mstr, um_mstr, wc_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FColor.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FColor_Load, GetID_Local, Private, Public, before_save, cancel_data, delete_data, edit
- Table/entity sample: code_mstr, color_mstr, en_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FJumboPrintingReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPOCustomerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment, credit
- Method sample: ElseIf, End, FPOCustomerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, cu_mstr, cust_mstr, en_mstr, loc_mstr, packaging_mstr, pl_mstr, pla_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FProdStrucSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FProdStrucSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: boq_mstr, code_mstr, en_mstr, its_mstr, prj_mstr, prjd_det, ps_mstr, psd_det, psd_group, pt_mstr, ro_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/__General Form/FCodeMstr.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOGiftSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FSalesOrderReturnSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: branch_mstr, code_mstr, pack_mstr, pt_mstr, ptnr_mstr, riu_mstr, riud_det, um_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPalletIDSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPalletIDSubNew.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryIssueSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryIssueSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: branch_mstr, code_mstr, pack_mstr, pt_mstr, riu_mstr, riud_det, um_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/Cls_Bilangan.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_empat, nominal_enam, nominal_lima, nominal_satu, nominal_sembilan

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintBarcode.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Company/FZEmployeImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FPartNumberImport_Load, Function, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, load_cb
- Table/entity sample: branch_mstr, code_mstr, xemp_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FRoutingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: End, FRoutingSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, code_mstr, cs_mstr, en_mstr, pt_mstr, ro_mstr, rod_det, um_mstr, wc_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRGatepassSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__General Form/FCodeMstr0.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr2_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRRoutingSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryLendRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryLendRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, en_mstr, ilr_mstr, ilrd_det, pt_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FVoucherSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventorySlittingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventorySlittingSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, its_mstr, itsd2_det, loc_mstr, pod_det, pt_mstr, riub_mstr, riubd_det, traninv_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintQRCode_new.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReceiptReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryRewindingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryRewindingSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, its_mstr, itsd2_det, loc_mstr, pod_det, pt_mstr, riub_mstr, traninv_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FConsumeWIPReport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FPalletIDImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FPalletIDImport_Load, GetID_Local, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, import_en_id_EditValueChanged, load_cb
- Table/entity sample: loc_mstr, pallet_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWOReceiptSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWOReceiptSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: cc_mstr, code_mstr, en_mstr, loc_mstr, pod_det, pt_mstr, wo_mstr, wor_mstr, wors_so

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOGiftRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FSOGiftRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pt_mstr, sct_mstr, sogr_mstr, sogrd_det, tld_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FDRCRMemoSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FStockOpnameSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FStockOpnameSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, invclc_mstr, invclcd_det, loc_mstr, pt_mstr, sct_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintQRCode.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FColorImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FColorImport_Load, GetID_Local, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_cb, load_data_many
- Table/entity sample: code_mstr, color_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FPalletIDImport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FSOContractImport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FProjectAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FProjectAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: boq_mstr, boqd_det, code_mstr, en_mstr, pjc_mstr, pt_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintQRCode_WO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInvoiceSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: End, FInvoiceSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ar_mstr, branch_mstr, cu_mstr, en_mstr, fp_mstr, ptnr_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FRequisitionSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FUMSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FUMSearch_Load, Private, Public, fill_data, format_grid, get_sequel, get_um_conversion, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: code_mstr, en_mstr, pt_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderDetailSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FSalesOrderDetailSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: code_mstr, en_mstr, gv_so, pt_mstr, ptnr_mstr, so_mstr, sod_det

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Company/FZEmployeImport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPTBOMSrch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FBOMSrch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: bom_mstr, code_mstr, en_mstr, its_mstr, ps_mstr, pt_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInspectionSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FInspectionSearch_Load, Private, Public, ce_all_CheckedChanged, fill_data, fill_selected, format_grid, get_sequel, gv_master_DoubleClick
- Table/entity sample: branch_mstr, cc_mstr, en_mstr, qc_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOInternalSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FSOInternalSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, dt_so, en_mstr, gv_so, pt_mstr, ptnr_mstr, ro_mstr, so_mstr, sod_det, soi_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInspectionSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWORoutingSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__General Form/frmPrintDialog.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: CreateForm, CreateObjectInstance, CreateReport, End, ExportToolStripMenuItem_Click, Private, Public, bt_design_Click, bt_preview_Click, frmPrintDialog2_Load

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelRodaPTSub2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FLaborFeedbackSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/Cls_Bilangan_Eng.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GetOnes, GetTens, New, Public, nominal

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPartNumberSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInvoiceSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventorySearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventorySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: en_mstr, invc_mstr, its_mstr, loc_mstr, pt_mstr

## `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FColorImport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FMachineSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FMachineSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: en_mstr, mch_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryIssueSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOGiftSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderShipmentSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FTransferSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FAssetRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FAssetRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, pt_mstr, tran_mstr, xemp_mstr

## `Alkindo Solution/AlkindoPT.Project/My Project/Settings.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AutoSaveSettings

## `Alkindo Solution/AlkindoPT.Project/__General Form/frmPrintDialog.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderRecapSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOGlobalSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, credit
- Method sample: End, FSOGlobalSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, pocust_mstr, ptnr_mstr, sog_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderDetailSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FCostCenterSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FCostCenterSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: cc_mstr, en_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FStockOpnameSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWIPPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWIPPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, en_mstr, loc_mstr, pt_mstr, um_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryLendRequestSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOGlobalSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWasteSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FProjectAccountSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOInternalSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryRequestSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryRewindingSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventorySlittingSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPurchaseOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPurchaseReceiptSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOGiftRequestSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintBarcodeSingle.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Detail_BeforePrint, End, Private, XRPrintBarcodeSingle_PrintProgress
- Table/entity sample: reprint_mstr, riub_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPOCustomerSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWOReceiptSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWOSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FLocationSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FWCSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Qty
- Method sample: End, FWCSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: en_mstr, wc_mstr

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FCustomerSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventorySearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FLotSerialSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FMachineSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FPartnerSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FAssetRequestSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FSpacerSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FTaxClassSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alkindo Solution/AlkindoPT.Project/__Browse References/FReasonCodeReturnSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
