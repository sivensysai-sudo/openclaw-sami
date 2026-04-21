# AQI_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas aqi.

- Total file prioritas dianotasi: **67**

## `AQI Solution/AQI.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `AQI Solution/AQI.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/ds_invoice.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, cust_mstr, e_mstr, inst_mstr, packaging_mstr

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, ars_ship, arso_so, bk_mstr, branch_mstr, browse_so, cmaddr_mstr, code_mstr, cu_mstr

## `AQI Solution/AQI.Project/Module/Sales Order/ds_so.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: code_mstr, cust_mstr, ds_so, inst_mstr, packaging_mstr, pt_mstr, ptnr_mstr, ptnra_addr, sales_mstr, so_mstr, sod_det, um_mstr

## `AQI Solution/AQI.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, its_mstr, itsd_det, loc_mstr, pb_mstr

## `AQI Solution/AQI.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pod_det, pt_mstr, ptnr_mstr

## `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `AQI Solution/AQI.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoice.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total

## `AQI Solution/AQI.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDistLine2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/Module/Sales Order/XRSO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `AQI Solution/AQI.Project/Module/___Function Helper/Cls_Bilangan_new.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_duabelas, nominal_empat, nominal_empatbelas, nominal_enam, nominal_lima

## `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wh_mstr

## `AQI Solution/AQI.Project/__General Form/FCodeMstr.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeSetting_Load, Private, Public, before_save, codes_branch_separator_Leave, codes_branch_status_CheckedChanged, codes_cc_separator_Leave, codes_cc_status_CheckedChanged
- Table/entity sample: en_mstr

## `AQI Solution/AQI.Project/__Browse References/FAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr

## `AQI Solution/AQI.Project/__Browse References/FPartnerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FPartnerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_cb
- Table/entity sample: ac_mstr, branch_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr

## `AQI Solution/AQI.Project/__Browse References/FPOCustomerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment, credit
- Method sample: ElseIf, End, FPOCustomerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, cu_mstr, cust_mstr, en_mstr, loc_mstr, packaging_mstr, pl_mstr, pla_mstr

## `AQI Solution/AQI.Project/__General Form/FCodeMstr.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr

## `AQI Solution/AQI.Project/Module/___Function Helper/Cls_Bilangan.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_empat, nominal_enam, nominal_lima, nominal_satu, nominal_sembilan

## `AQI Solution/AQI.Project/__Browse References/FLotSerialSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ass_mstr, invc_mstr, loc_mstr, pt_mstr

## `AQI Solution/AQI.Project/Module/Basic Setup/XRDocumentApprovalSub.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FUMSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FUMSearch_Load, Private, Public, fill_data, format_grid, get_sequel, get_um_conversion, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: code_mstr, en_mstr, pt_mstr, um_mstr

## `AQI Solution/AQI.Project/__Browse References/FSalesOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/Module/Basic Setup/XRRoutingApproval.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__General Form/frmPrintDialog.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: CreateForm, CreateObjectInstance, CreateReport, End, ExportToolStripMenuItem_Click, Private, Public, bt_design_Click, bt_preview_Click, frmPrintDialog2_Load

## `AQI Solution/AQI.Project/__Browse References/FPOCustomerSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/My Project/Settings.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AutoSaveSettings

## `AQI Solution/AQI.Project/__General Form/frmPrintDialog.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr, arso_so, so_mstr

## `AQI Solution/AQI.Project/__Browse References/FPartnerSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FTaxClassSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FAccountSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FUMSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FLotSerialSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FPartNumberSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoice.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Detail_AfterPrint, End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr

## `AQI Solution/AQI.Project/__Browse References/FLocationSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FPackagingSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDistLine2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr

## `AQI Solution/AQI.Project/__Browse References/FPackagingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FPackagingSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, en_mstr

## `AQI Solution/AQI.Project/Module/Sales Order/XRSO.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRSO_BeforePrint, XRSO_PrintProgress
- Table/entity sample: so_mstr

## `AQI Solution/AQI.Project/__Browse References/FPPNTypeSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `AQI Solution/AQI.Project/__Browse References/FTaxClassSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FTaxClassSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, en_mstr, taxclass_mstr

## `AQI Solution/My Project/Settings.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AutoSaveSettings

## `AQI Solution/AQI.Project/My Project/Resources.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `AQI Solution/My Project/Resources.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `AQI Solution/AQI.Project/Module/Basic Setup/frmExport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, Public

## `AQI Solution/AQI.Project/__Browse References/FPPNTypeSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FPPNTypeSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress

## `AQI Solution/AQI.Project/__General Form/frmPrintDialogReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, PrintPreviewBarItem5_ItemClick, PrintPreviewBarItem6_ItemClick, Private, frmPrintDialogReport_Load, log_print

## `AQI Solution/My Project/Application.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, New, OnCreateMainForm

## `AQI Solution/AQI.Project/My Project/AssemblyInfo.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `AQI Solution/My Project/AssemblyInfo.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `AQI Solution/Form1.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, End, InitializeComponent

## `AQI Solution/AQI.Project/Module/Basic Setup/XRDocumentApprovalSub.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, XRDocumentApprovalSub_BeforePrint

## `AQI Solution/AQI.Project/My Project/Application.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `AQI Solution/AQI.Project/Module/Sales Order/ds_so.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Table/entity sample: ds_so

## `AQI Solution/AQI.Project/Module/Basic Setup/XRRoutingApproval.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `AQI Solution/AQI.Project/Module/Basic Setup/frmExport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `AQI Solution/Form1.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
