# ASVIA_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas asvia.

- Total file prioritas dianotasi: **166**

## `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cbh_hist, cc_mstr, code_mstr, cu_mstr, dom_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bdgt_mstr, bdgtd_det, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cpright_mstr, cprightd_det

## `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: ac_mstr, aprv_mstr, area_mstr, bds_mstr, bk_mstr, branch_mstr, brs_mstr, cc_mstr, class_mstr, cmaddr_mstr, code_mstr, creditterms_mstr

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public
- Table/entity sample: ac_mstr, ass_mstr, assbk_mstr, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, creditterm_mstr, cs_mstr, csd_det

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderShipment_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_delete
- Table/entity sample: ar_mstr, arso_so, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, cust_mstr, do_mstr

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, ars_ship, arso_so, bk_mstr, branch_mstr, browse_so, cmaddr_mstr, code_mstr, cu_mstr

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/ds_invoice.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: ac_mstr, ar_mstr, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, cust_mstr, e_mstr, inst_mstr, packaging_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/ds_soshipds.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: addr_mstr, ass_mstr, branch_mstr, code_mstr, cu_mstr, driver_mstr, en_mstr, er_mstr, inst_mstr, packaging_mstr, pt_mstr, ptnr_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/ds_soship.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: AddDataTable1Row, AddDataTable2Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, DataTable2RowChangeEventHandler, End, Fill, GetData
- Table/entity sample: cmaddr_mstr, code_mstr, driver_mstr, er_mstr, pt_mstr, ptnr_mstr, ptnra_addr, so_mstr, sod_det, soship_mstr, soshipd_det, xemp_mstr

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/ds_po_printout.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBypt_code, GetData, GetEnumerator
- Table/entity sample: code_mstr, creditterm_mstr, cu_mstr, lass_mstr, pjc_mstr, po_mstr, pod_det, pt_mstr, ptnra_addr

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Outstanding, credit
- Method sample: ElseIf, End, FARPayment_Load, Private, Public, _load_data_grid_detail, arpay_arnota_oid_ButtonClick, arpay_bill_to_EditValueChanged, arpay_bk_id_EditValueChanged, arpay_branch_id_EditValueChanged
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, arpay_payment, arpayd_det, arpaydd_det, arso_so, bg_mstr, bk_mstr, branch_mstr, cc_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, allocated_ship, bill_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, packaging_mstr, par_so, pod_det, pt_mstr, ptnr_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, bom_mstr, cc_mstr, class_mstr, code_mstr, cs_mstr, en_mstr, group_mstr, its_mstr, itsd_det, loc_mstr, pb_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseReceipt.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseReceipt_Load, GetIDMax, GetMaxLine, ImportFromExcel, Private, Public, arrange_from_excel_serial
- Table/entity sample: ass_mstr, assbk_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, csd_det, cu_mstr, en_mstr, glt_det, invc_mstr, invh_mstr

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pod_det, xtp_po

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FDeliveryOrder.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FDeliveryOrder_Load, Private, Public, before_delete, before_save, browse_data, browse_data_set, cancel_data
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, cs_mstr, cust_mstr, do_mstr, dod_det, en_mstr, gcald_so, loc_mstr, number_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrderShipment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cs_mstr, cu_mstr, cus_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/DS_POReceiptScale.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, CreateInstance, DataTable1RowChangeEventHandler, End, GetRowType, GetSchemaSerializable, GetTypedDataSetSchema, GetTypedTableSchema, InitClass

## `Asvia Solution/ASVIA.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseOrderPrintOut.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_po

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCashDisc2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoice.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent, Total

## `Asvia Solution/ASVIA.Project/__General Form/CustomDesignForm.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, New, RestoreLayout, SaveLayout

## `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber_npgsql.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCash.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FPartNumber_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, invc_mstr, is_mstr, its_mstr, loc_mstr

## `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber_npgsql.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FDomain_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, curclist_mstr, en_mstr, group_mstr, invc_mstr, is_mstr, its_mstr, loc_mstr

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseReceipt.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Import Data/FPartNumberImport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: pt_group

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrintSet.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrintPackingList.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRDOSet.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Asvia Solution/ASVIA.Project/__Browse References/FPurchaseOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPurchaseOrderSearch_Load, Private, Public, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, packaging_mstr, par_po, pjc_mstr, pl_mstr, po_mstr, pod_det

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FDeliveryOrder.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOSet.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSO_LOT.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRDO.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: ds_so

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptScalePrint.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FLocationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FLocationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, is_mstr, loc_mstr, pt_mstr, si_mstr, wh_mstr

## `Asvia Solution/ASVIA.Project/Module/Import Data/FPartNumberImport.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FPartNumberImport_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_cb, load_cb_en, load_data_many
- Table/entity sample: ac_mstr, class_mstr, code_mstr, cs_mstr, csd_det, group_mstr, is_mstr, its_mstr, loc_mstr, pl_mstr, pt_group, pt_mstr

## `Asvia Solution/ASVIA.Project/Module/___Function Helper/Cls_Bilangan_new.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_duabelas, nominal_empat, nominal_empatbelas, nominal_enam, nominal_lima

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptPrint.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FRequisitionSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FRequisitionSearch_Load, Private, Public, ce_select_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, group_mstr, loc_mstr, pjc_mstr, pt_group, pt_mstr, ptnr_mstr, req_mstr

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/ds_invoice2.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, CreateInstance, DataTable1RowChangeEventHandler, End, GetRowType, GetSchemaSerializable, GetTypedDataSetSchema, GetTypedTableSchema, InitClass

## `Asvia Solution/ASVIA.Project/__Browse References/FDRCRMemoSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Shipment
- Method sample: End, FDRCRMemoSearch_Load, Private, Public, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_CellValueChanging, gv_master_DoubleClick
- Table/entity sample: ac_mstr, ar_mstr, arpay_payment, arpayd_det, code_mstr, cu_mstr, en_mstr, ptnr_mstr

## `Asvia Solution/ASVIA.Project/__General Form/FCodeMstr.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FDisbursementRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FPengajuanBiayaSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, activity_mstr, bk_mstr, cc_mstr, cu_mstr, en_mstr, pby_mstr, pdprd_det, xemp_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FInventoryRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_price_list
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pb_mstr, pbd_det, pi_mstr, pid_det, pidd_det, pidd_payment, pt_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FDisbursementRealizationSearch.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Method sample: End, FDisbursementRealizationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_data_Click
- Table/entity sample: ac_mstr, bk_mstr, cash_mstr, cashd_det, cc_mstr, cu_mstr, en_mstr, pby_mstr, pjc_mstr, wf_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FPartnerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: End, FPartnerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_cb
- Table/entity sample: ac_mstr, branch_mstr, en_mstr, inst_mstr, ptnr_mstr, ptnra_addr

## `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderRecapSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSalesOrderRecapSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, allocated_ship, code_mstr, en_mstr, loc_mstr, packaging_mstr, pod_det, pt_mstr, ptnr_mstr, siteid_mstr, so_mstr, sod_det

## `Asvia Solution/ASVIA.Project/__Browse References/FDOSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FDOSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, do_mstr, dod_det, en_mstr, loc_mstr, packaging_mstr, pt_mstr, ptnr_mstr, so_mstr, sod_det, um_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FVoucherSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FVoucherSearch_Load, Private, Public, calculate_total, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_CellValueChanged
- Table/entity sample: ac_mstr, ap_mstr, bk_mstr, branch_mstr, code_mstr, cu_mstr, en_mstr, pjc_mstr, ptnr_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FPOCustomerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, Shipment, credit
- Method sample: ElseIf, End, FPOCustomerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, code_mstr, cs_mstr, cu_mstr, cust_mstr, en_mstr, loc_mstr, packaging_mstr, pl_mstr, pla_mstr

## `Asvia Solution/ASVIA.Project/__General Form/FCodeMstr.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr

## `Asvia Solution/ASVIA.Project/Module/___Function Helper/Cls_Bilangan.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Public, nominal, nominal_delapan, nominal_dua, nominal_empat, nominal_enam, nominal_lima, nominal_satu, nominal_sembilan

## `Asvia Solution/ASVIA.Project/__Browse References/FProjectSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, credit
- Method sample: End, FSiteSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: bom_mstr, boq_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, pjc_mstr, prj_mstr, pt_mstr, ptnr_mstr, req_mstr, ro_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FQuotationSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: End, FQuotationSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, en_mstr, loc_mstr, pjc_mstr, pt_mstr, ptnr_mstr, quot_mstr, quotd_det, req_mstr, reqd_det

## `Asvia Solution/ASVIA.Project/__Browse References/FVoucherSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FDRCRMemoSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FProjectAccountSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FProjectAccountSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: boq_mstr, boqd_det, code_mstr, en_mstr, pjc_mstr, pt_mstr, um_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FInvoiceSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: End, FInvoiceSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ar_mstr, branch_mstr, cu_mstr, en_mstr, fp_mstr, ptnr_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FRequisitionSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FDisbursementRequestSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FInvoiceSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__General Form/frmPrintDialog.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: CreateForm, CreateObjectInstance, CreateReport, End, ExportToolStripMenuItem_Click, Private, Public, bt_design_Click, bt_preview_Click, frmPrintDialog2_Load

## `Asvia Solution/ASVIA.Project/__Browse References/FNotaSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Outstanding
- Method sample: End, FNotaSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, ar_mstr, arnota_mstr, arnotad_det, branch_mstr, code_mstr, cu_mstr, en_mstr, ptnr_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FBudgetSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FBudgetSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: bdgt_mstr, bdgth_hist, cc_mstr, pjc_mstr, ptnr_mstr, so_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FDisbursementRealizationSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FLotSerialSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: invc_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FDisbursementRefundSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FARPaymentSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FDOSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FPurchaseReceiptScaleSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderRecapSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderShipmentSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FNotaSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FPOCustomerSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FUMSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FUMSearch_Load, Private, Public, fill_data, format_grid, get_sequel, get_um_conversion, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: code_mstr, en_mstr, pt_mstr, um_mstr

## `Asvia Solution/ASVIA.Project/My Project/Settings.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AutoSaveSettings

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr, arso_so, so_mstr

## `Asvia Solution/ASVIA.Project/__General Form/frmPrintDialog.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FPartnerSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseOrderPrintOut.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, GroupFooter2_BeforePrint, GroupHeader1_BeforePrint, Private, XRPurchaseOrderPrintOut_BeforePrint, XRPurchaseOrderPrintOut_PrintProgress
- Table/entity sample: ds_po, po_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FTaxClassSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FCashInSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FEmpSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FPackagingSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FProjectAccountSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FUMSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FInventoryRequestSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FPurchaseOrderSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FBranchSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FProjectSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FReasonCodeSOSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FLotSerialSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCashDisc2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInvoice_BeforePrint, XRSO_PrintProgress
- Table/entity sample: so_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FSiteIDSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FSiteIDSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: en_mstr, ptnr_mstr, siteid_mstr

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoice.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Detail_AfterPrint, End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FQuotationSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FARPaymentSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FDRCRMemoSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: arpay_payment, bk_mstr, branch_mstr, cu_mstr, en_mstr, inst_mstr, ptnr_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FBudgetSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FPartNumberSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FAccountSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FCostCenterSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FLocationSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FSiteIDSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderShipmentSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FSalesOrderShipmentSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ptnr_mstr, so_mstr, soship_mstr

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FPackagingSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FPackagingSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, en_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FCostCenterSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FCostCenterSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: cc_mstr, en_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRDO.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, XRDO_BeforePrint, XRDO_PrintProgress
- Table/entity sample: do_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSO.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRSO_BeforePrint, XRSO_PrintProgress
- Table/entity sample: so_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOSet.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRSOSet_BeforePrint, XRSO_PrintProgress
- Table/entity sample: so_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSO_LOT.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRSO_BeforePrint, XRSO_PrintProgress
- Table/entity sample: so_mstr

## `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRARInvoice_PrintProgress, XRInvoiceRPA_BeforePrint
- Table/entity sample: ar_mstr

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRPurchaseReceiptPrint_BeforePrint, XRPurchaseReceiptPrint_PrintProgress
- Table/entity sample: rcv_mstr

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptScalePrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRPurchaseReceiptPrint_BeforePrint, XRPurchaseReceiptPrint_PrintProgress
- Table/entity sample: rcvsc_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCash.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInvoice_BeforePrint, XRSO_PrintProgress
- Table/entity sample: so_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, Private, XRSalesOrderShipmentPrint_BeforePrint, XRSalesOrderShipmentPrint_PrintProgress
- Table/entity sample: soship_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrintPackingList.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, Private, XRSalesOrderShipmentPrintSet_BeforePrint, XRSalesOrderShipmentPrint_PrintProgress
- Table/entity sample: soship_mstr

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrintSet.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, Private, XRSalesOrderShipmentPrintSet_BeforePrint, XRSalesOrderShipmentPrint_PrintProgress
- Table/entity sample: soship_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FBGSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: End, FBGSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, bg_mstr, bk_mstr, branch_mstr, cu_mstr, en_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FEmpSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FEmpSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: en_mstr, xemp_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FReasonCodeSOSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FReasonCodeSOSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, en_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FPPNTypeSearch.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FDisbRequestDetailSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Method sample: Account, End, FPtProjectDetailSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, code_mstr, loc_mstr, pby_mstr, pbyd_det, pjc_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FTaxClassSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FTaxClassSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: code_mstr, en_mstr, taxclass_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FBranchSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FBranchSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FBGSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FTaxInvoiceNumberSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FDisbRequestDetailSearch.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FUserApprovalSearch.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Asvia Solution/ASVIA.Project/__Browse References/FCashInSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FCashInSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, en_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FDisbursementRefundSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FDisbursementRefundSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, en_mstr

## `Asvia Solution/ASVIA.Project/__Browse References/FPurchaseReceiptScaleSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FPurchaseReceiptScaleSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ptnr_mstr, rcvsc_mstr

## `Asvia Solution/My Project/Settings.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: AutoSaveSettings

## `Asvia Solution/ASVIA.Project/__Browse References/FTaxInvoiceNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FTaxInvoiceNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: taxid_det

## `Asvia Solution/ASVIA.Project/My Project/Resources.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Asvia Solution/My Project/Resources.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Asvia Solution/ASVIA.Project/__General Form/frmExport.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, InitializeComponent, Public

## `Asvia Solution/ASVIA.Project/__Browse References/FUserApprovalSearch.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FUserApprovalSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRDOSet.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, XRDOSet_BeforePrint

## `Asvia Solution/ASVIA.Project/__Browse References/FPPNTypeSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FPPNTypeSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress

## `Asvia Solution/ASVIA.Project/__General Form/frmPrintDialogReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, PrintPreviewBarItem5_ItemClick, PrintPreviewBarItem6_ItemClick, Private, frmPrintDialogReport_Load, log_print

## `Asvia Solution/My Project/Application.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, New, OnCreateMainForm

## `Asvia Solution/ASVIA.Project/My Project/AssemblyInfo.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Asvia Solution/My Project/AssemblyInfo.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Asvia Solution/Form1.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, End, InitializeComponent

## `Asvia Solution/ASVIA.Project/My Project/Application.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/ds_soshipds.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: DataTable1DataTable_DataTable1RowChanging, End

## `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/ds_po_printout.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Asvia Solution/ASVIA.Project/__General Form/frmExport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low

## `Asvia Solution/Form1.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
