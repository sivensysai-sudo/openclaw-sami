# DUTA_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas duta.

- Total file prioritas dianotasi: **65**

## `Duta Solution/Duta.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `Duta Solution/Duta.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `Duta Solution/Duta.Project/Module/Sales Order/Transaction/FPOCustomer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Can't Cancel, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FPOCustomer_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, cust_mstr, en_mstr, packaging_mstr, pi_mstr, pid_det, pidd_det, pidd_payment, pocust_mstr

## `Duta Solution/Duta.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pod_det, pt_mstr, ptnr_mstr

## `Duta Solution/Duta.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, its_mstr, itsd_det, loc_mstr, pb_mstr

## `Duta Solution/Duta.Project/Module/Sales Order/Transaction/FPOCustomer.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Duta Solution/Duta.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `Duta Solution/Duta.Project/Module/Financial/account receiveable/print out/XRInvoiceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `Duta Solution/Duta.Project/Module/Distribution/Inventory/XRTransferIssuesPrint_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/Module/Distribution/Inventory/XRTransferIssuesPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FWOSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty
- Method sample: Else, End, FWOSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, cc_mstr, code_mstr, cs_mstr, ds_so, en_mstr, gv_so, loc_mstr, pjc_mstr, prj_mstr, ps_mstr, pt_mstr

## `Duta Solution/Duta.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wh_mstr

## `Duta Solution/Duta.Project/Module/Master Data/Company/FZEmployee.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__General Form/FCodeMstr.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr

## `Duta Solution/Duta.Project/Module/Master Data/Company/FZEmployee.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: ElseIf, End, FEmployeeNew_Load, Function, Private, Public, before_delete, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, code_mstr, en_mstr, xemp_mstr

## `Duta Solution/Duta.Project/__Browse References/FPartnerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FPartnerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_cb
- Table/entity sample: ac_mstr, branch_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr

## `Duta Solution/Duta.Project/__General Form/FCodeMstr.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr

## `Duta Solution/Duta.Project/Module/___Function Helper/Cls_Bilangan.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_empat, nominal_enam, nominal_lima, nominal_satu, nominal_sembilan

## `Duta Solution/Duta.Project/__Browse References/FProdStrucSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FProdStrucSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: boq_mstr, code_mstr, en_mstr, its_mstr, prj_mstr, prjd_det, ps_mstr, pt_mstr, ro_mstr, um_mstr

## `Duta Solution/Duta.Project/__Browse References/FProjectAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FProjectAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: boq_mstr, boqd_det, code_mstr, en_mstr, pjc_mstr, pt_mstr, um_mstr

## `Duta Solution/Duta.Project/__Browse References/FUMSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FUMSearch_Load, Private, Public, fill_data, format_grid, get_sequel, get_um_conversion, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: code_mstr, en_mstr, pt_mstr, um_mstr

## `Duta Solution/Duta.Project/__General Form/frmPrintDialog.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: CreateForm, CreateObjectInstance, CreateReport, End, ExportToolStripMenuItem_Click, Private, Public, bt_design_Click, bt_preview_Click, frmPrintDialog2_Load

## `Duta Solution/Duta.Project/__Browse References/FLotSerialSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: invc_mstr

## `Duta Solution/Duta.Project/__Browse References/FPriceListSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPriceListSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, cu_mstr, en_mstr, pi_mstr, pid_det, pidd_det, pidd_payment, promo_mstr, pt_mstr

## `Duta Solution/Duta.Project/My Project/Settings.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AutoSaveSettings

## `Duta Solution/Duta.Project/__General Form/frmPrintDialog.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/Module/Financial/account receiveable/print out/XRInvoiceDisc2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr, arso_so, so_mstr

## `Duta Solution/Duta.Project/__Browse References/FSalesOrderDetailSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FSalesOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FProjectAccountSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FWOSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FSalesOrderDetailSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FSalesOrderDetailSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: code_mstr, en_mstr, gv_so, pt_mstr, ptnr_mstr, so_mstr, sod_det

## `Duta Solution/Duta.Project/__Browse References/FLotSerialSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FPartnerSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FTaxClassSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FPartNumberSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FAccountSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FCostCenterSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FLocationSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FPackagingSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FRoutingSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FUMSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FWCSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FPriceListSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FProdStrucSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FCostCenterSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FCostCenterSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: cc_mstr, en_mstr

## `Duta Solution/Duta.Project/__Browse References/FPackagingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FPackagingSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, en_mstr

## `Duta Solution/Duta.Project/Module/Distribution/Inventory/XRTransferIssuesPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRTransferIssuesPrint_BeforePrint, XRTransferIssuesPrint_PrintProgress
- Table/entity sample: ptsfr_mstr

## `Duta Solution/Duta.Project/Module/Distribution/Inventory/XRTransferIssuesPrint_LOT.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRTransferIssuesPrint_BeforePrint, XRTransferIssuesPrint_PrintProgress
- Table/entity sample: ptsfr_mstr

## `Duta Solution/Duta.Project/__Browse References/FPaymentTypeSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FWCSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FWCSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: en_mstr, wc_mstr

## `Duta Solution/Duta.Project/__Browse References/FTaxClassSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FTaxClassSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, en_mstr, taxclass_mstr

## `Duta Solution/Duta.Project/__Browse References/FSalesPersonSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FCustomerGroupSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Duta Solution/Duta.Project/__Browse References/FSalesPersonSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FSalesPersonSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: en_mstr, ptnr_mstr

## `Duta Solution/Duta.Project/__Browse References/FCustomerGroupSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FCustomerGroupSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: en_mstr

## `Duta Solution/Duta.Project/My Project/Resources.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Duta Solution/Duta.Project/__Browse References/FRoutingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FWCSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: cs_mstr, en_mstr, ro_mstr

## `Duta Solution/Duta.Project/__Browse References/FPaymentTypeSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPaymentTypeSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: code_mstr, en_mstr

## `Duta Solution/Duta.Project/__General Form/frmPrintDialogReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, PrintPreviewBarItem5_ItemClick, PrintPreviewBarItem6_ItemClick, Private, frmPrintDialogReport_Load, log_print

## `Duta Solution/Duta.Project/My Project/AssemblyInfo.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Duta Solution/Duta.Project/My Project/Application.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
