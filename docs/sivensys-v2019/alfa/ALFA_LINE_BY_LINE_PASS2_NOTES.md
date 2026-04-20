# ALFA_LINE_BY_LINE_PASS2_NOTES

Pass-2: anotasi rule bisnis dan dampak coding untuk file prioritas Alfa.Project.

- Total file prioritas dianotasi: **180**

## `Alfa Solution/Alfa.Project/Module/___Function Helper/function_collection.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: End, GetID, GetIPv4Address, GetNewLine, Private, Public, acc_cek_budget, cek_bk_ac_id, cek_inventory_allocation, cost_center_is_budget
- Table/entity sample: Budget, GL, Inventory, ac_mstr, ass_mstr, bdgt_mstr, bdgtd_det, bdgtp_periode, bk_mstr, branch_mstr, cbh_hist, cc_mstr

## `Alfa Solution/Alfa.Project/Module/___Function Helper/function_data.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Over Due, Qty, Shipment, credit
- Method sample: End, Public, entity_parent, entity_user, get_account_id, get_account_selisih_kurs_buy, get_account_selisih_kurs_sales, get_activity_seq_1, get_ass_code, get_bk_id
- Table/entity sample: Exchange, ac_mstr, area_mstr, bds_mstr, bk_mstr, bkr_restrc, branch_mstr, brs_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/General Ledger/FTransactionPost.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: CheckTheTransactionIsNotBalancedToolStripMenuItem_Click, ElseIf, End, FTransactionPost_Load, GetPeriodh, Private, Public, SimpleButton1_Click, ce_all_CheckedChanged, export_data
- Table/entity sample: Category, GL, Jan, Transaction, Transaction..., ac_mstr, ap_mstr, appay_payment, ar_mstr, arpay_payment, branch_mstr, cash_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Transaction/FSalesOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty
- Method sample: Else, ElseIf, End, FSalesOrder_Load, GetID_Budget, GetID_Local, GetID_Project, If, ImportFromExcel, Private
- Table/entity sample: Discount, History, PO, Table, ac_mstr, ar_mstr, bdgt_mstr, bdgtp_periode, bk_mstr, branch_mstr, cc_mstr, ccr_restrc

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public
- Table/entity sample: History, Po, Table, ac_mstr, ass_mstr, bk_mstr, boqs, boqs_stand, branch_mstr, budget, cc_mstr, ccr_restrc

## `Alfa Solution/Alfa.Project/Module/Sales Order/Transaction/FSalesOrderGift.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FSalesOrderGift_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: History, SO, Table, ac_mstr, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, cost, cs_mstr

## `Alfa Solution/Alfa.Project/Module/Administrative Tools/FUserGroup.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: BarButtonItem1_ItemClick, ElseIf, End, FUserGroup_Load, Function, Private, Public, Timer1_Tick, before_save, btKillAll_Click
- Table/entity sample: This, branch_mstr, cc_mstr, ccr_restrc, dom_mstr, en_mstr, loc_mstr, pt_mstr, tconfgroup, tconfskin, tconfuser, tconfuserdomain

## `Alfa Solution/Alfa.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Can't Delete, Qty, Shipment, credit
- Method sample: ElseIf, End, FSalesOrderShipment_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, be_import_xls_ButtonClick, before_delete
- Table/entity sample: History, Ke, Location, Table, bk_mstr, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, cmsext_rule, cmsextd_det, code_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryRequest.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FInventoryRequest_Load, ImportFromExcel, Private, Public, approve, approve_line, arrange_from_excel
- Table/entity sample: branch_mstr, cmaddr_mstr, code_mstr, codes_setting, en_mstr, loc_mstr, pb_mstr, pbd_det, pt_mstr, tconfuser, tconfuserentity, tran_mstr

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWOReceipt.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FWOReceipt_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial, browse_data_wip_serial
- Table/entity sample: Product, Table, ac_mstr, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, cost, cs_mstr, en_mstr

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWOReceiptWithGrade.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Delete, Outstanding, Qty, credit
- Method sample: ElseIf, End, FWOReceipt_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial, browse_data_serial_2
- Table/entity sample: KE, Product, Table, ac_mstr, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, cost, cs_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Quotation/FQuotation.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Can't Delete, Can't Cancel, Qty, credit
- Method sample: DownloadSingleFile, Else, ElseIf, End, FQuotation_Load, Private, Public, approve, approve_line, be_file_ButtonClick
- Table/entity sample: branch_mstr, cc_mstr, ccr_restrc, code_mstr, codes_setting, cu_mstr, custom.aprvq_quot, custom.quot_mstr, custom.quotd_det, data, en_mstr, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/FDRCRMemoTax.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged
- Table/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, codes_setting, cu_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/AP Invoice/FVoucherTax.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Outstanding, Qty, credit
- Method sample: ElseIf, End, FVoucher_Load, Private, Public, ap_branch_id_EditValueChanged, ap_credit_term_EditValueChanged, ap_cu_id_EditValueChanged, ap_date_EditValueChanged, ap_due_date_EditValueChanged
- Table/entity sample: PO, Table, ac_mstr, ap_mstr, apd_dist, apr_rcv, bk_mstr, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, codes_setting

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWorkOrder.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Can't Cancel, Outstanding, Qty
- Method sample: Else, ElseIf, End, FWorkOrder_Load, Private, Public, before_delete, before_save, browse_data, browse_data_so
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, cs_mstr, en_mstr, fes_mstr, ps_mstr, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryIssues.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssues_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick
- Table/entity sample: History, Table, ac_mstr, boq_mstr, boqs_stand, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, cost

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryReceipts.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryReceipts_Load, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick, be_import_xls_ButtonClick
- Table/entity sample: History, Table, ac_mstr, boq_mstr, boqs_stand, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, cost

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryIssuesLimit.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryIssuesLimit_Load, ImportFromExcel, Private, Public, SetToAllRowsToolStripMenuItem_Click, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick
- Table/entity sample: History, Table, ac_mstr, boq_mstr, boqs_stand, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, codes_setting, cost, cs_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryReceiptsLimit.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Can't Save, Qty, credit
- Method sample: ElseIf, End, FInventoryReceiptsLimit_Load, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick, be_import_xls_ButtonClick
- Table/entity sample: History, Table, ac_mstr, boq_mstr, boqs_stand, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, codes_setting, cost, cs_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/FPurchaseReceipt.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, ElseIf, End, FPurchaseReceipt_Load, GetIDMax, GetMaxLine, ImportFromExcel, Private, Public, arrange_from_excel_serial
- Table/entity sample: History, Table, ass_mstr, boqs, boqs_stand, branch_mstr, cc_mstr, ccr_restrc, code_mstr, codes_setting, cost, cs_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/FPurchaseReturn.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FPurchaseReturn_Load, Private, Public, before_save, browse_data, browse_data_serial, cancel_data, delete_data
- Table/entity sample: History, Master, Table, boqs, boqs_stand, branch_mstr, budget, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWorkOrderIssueReturn.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: Else, ElseIf, End, FWorkOrderIssueReturn_Load, If, Private, Public, XtraTabControl1_SelectedPageChanged, before_save, browse_data
- Table/entity sample: Detail, History, Serial, Table, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, cs_mstr, en_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, credit
- Method sample: Else, ElseIf, End, ExportDataToExcelClosedXML, ExportDataToSheets, FFakturPajakCoreTax_Load, Private, Public, Terbilang, ar_cu_id_EditValueChanged
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, fp_mstr, ke, pt_mstr, ptnr_mstr, public.fp_mstr, sod_det

## `Alfa Solution/Alfa.Project/Module/Sales Order/Transaction/FFinCSDShareData.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Shipment, credit
- Method sample: ElseIf, End, FFinCSDShareData_Load, Private, Public, before_save, browse_data, cancel_data, delete_data, edit
- Table/entity sample: Edit, Grid..., Selected, Shipment, ar_mstr, arnota_mstr, arnotad_det, bk_mstr, branch_mstr, code_mstr, custom.fincsd_mstr, custom.fincsdd_det

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComExternalCG2.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FComExternalCG_Load, Private, Public, before_save, cancel_data, delete_data, edit_data, format_grid
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, ars_ship, branch_mstr, cmsext_rule, cmsextd_det, comexr_rate, comsales_mstr, comsalesdx1_det, comsalesdx2_det, comsalesdx_det

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/FPurchaseOrderApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, credit
- Method sample: DownloadSingleFile, ElseIf, End, FPurchaseOrderApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid
- Table/entity sample: ac_mstr, boqs_stand, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code_mstr, cu_mstr, custom.quot_mstr, custom.quotd_det, en_mstr, po_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryChangeItemAVGCost.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty
- Method sample: End, FInventoryChangeItemAVGCost_Load, Private, Public, before_save, browse_data, browse_data_serial, cancel_data, delete_data, edit_data
- Table/entity sample: Can, Cost, History, Table, _cost_mtl_tl_from, and, branch_mstr, code_mstr, cost, cs_mstr, csc_category, csd_det

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWorkOrderIssue.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: Qty
- Method sample: Else, ElseIf, End, FWorkOrderIssue_Load, If, Private, Public, XtraTabControl1_SelectedPageChanged, before_save, browse_data
- Table/entity sample: Detail, History, Serial, Table, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, cs_mstr, en_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryChangeItemCopyCost.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty
- Method sample: End, FInventoryChangeItemCopyCost_Load, Private, Public, before_save, browse_data, browse_data_serial, cancel_data, delete_data, edit_data
- Table/entity sample: Can, Cost, History, Table, and, branch_mstr, cs_mstr, csc_category, csd_det, data, en_mstr, invc_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Tax Invoice/FFakturPajak.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Cancel, Qty, credit
- Method sample: Else, ElseIf, End, FFakturPajak_Load, Private, Public, ar_cu_id_EditValueChanged, before_save, before_save_insert, cancel_approve
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, cu_mstr, custom.fincsd_mstr, en_mstr, fp_mstr, ke, pt_mstr, ptnr_mstr, ptnra_addr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComExternalCG.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FComExternalCG_Load, Private, Public, before_save, cancel_data, ce_select_all_CheckedChanged, delete_data, edit_data
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, ars_ship, branch_mstr, cmsext_rule, cmsextd_det, comexr_rate, comsales_mstr, comsalesdx1_det, comsalesdx2_det, comsalesdx_det

## `Alfa Solution/Alfa.Project/Module/Distribution/Quotation/FQuotationApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FQuotationApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cu_mstr, custom.quot_mstr, custom.quotd_det, en_mstr, pt_mstr, ptnr_mstr, req_mstr, reqd_det, tconfgroup

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNCListCG2020.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Outstanding, Qty, Shipment
- Method sample: ElseIf, End, FComNCListCG2020_Load, Private, Public, before_delete, before_save, cancel_data, cmscust_branch_id_EditValueChanged, cmscust_en_id_EditValueChanged
- Table/entity sample: Customer, branch_mstr, cmscust_mstr, cmscustd1_det, cmscustd2_det, cu_mstr, en_mstr, ptnr_mstr, ptnrg_grp, so_mstr, sod_det, soship_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Delivery/FDeliveryScale.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty
- Method sample: Display, ElseIf, End, FDeliveryScale_Load, Private, Public, Receiver, StringSubPointer, before_save, browse_data
- Table/entity sample: branch_mstr, cc_mstr, ccr_restrc, code_mstr, codes_setting, custom.dlvsc_mstr, custom.dlvscd_det, dlv_mstr, en_mstr, ptnr_mstr, public.branch_mstr, public.cc_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNCListCG.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Outstanding, Qty, Shipment
- Method sample: ElseIf, End, FComNCListCG_Load, Private, Public, before_delete, cancel_data, cmscust_branch_id_EditValueChanged, cmscust_en_id_EditValueChanged, cmscust_ptnr_id_EditValueChanged
- Table/entity sample: Customer, branch_mstr, cmscust_mstr, cmscustd1_det, cmscustd2_det, cu_mstr, en_mstr, ptnr_mstr, ptnrg_grp, so_mstr, sod_det, soship_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNCList.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Outstanding, Qty, Shipment
- Method sample: ElseIf, End, FComNCList_Load, Private, Public, before_delete, cancel_data, cmscust_branch_id_EditValueChanged, cmscust_en_id_EditValueChanged, cmscust_ptnr_id_EditValueChanged
- Table/entity sample: Customer, branch_mstr, cmscust_mstr, cmscustd1_det, cmscustd2_det, cu_mstr, en_mstr, ptnr_mstr, so_mstr, sod_det, soship_mstr, soshipd_det

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComExternal.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: ElseIf, End, FComExternal_Load, Private, Public, before_save, cancel_data, delete_data, edit_data, format_grid
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, ars_ship, branch_mstr, cmsext_rule, cmsextd_det, comexr_rate, comsales_mstr, comsalesdx1_det, comsalesdx2_det, comsalesdx_det

## `Alfa Solution/Alfa.Project/Module/Sales Order/Forecast/FForecastAlfa.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete, Qty, Shipment
- Method sample: Catch, ElseIf, End, FForecastAlfa_Load, ImportFromExcel, Private, Public, arrange_from_excel, bdgt_en_id_EditValueChanged, be_import_xls_ButtonClick
- Table/entity sample: branch_mstr, code_mstr, conf_file, custom.fc_mstr, custom.fcd_det, custom.fcperiode_mstr, custom.fcs_ship, en_mstr, pt_mstr, ptnr_mstr, ptnrg_grp, so_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FRebateCustomerRule.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FRebateCustomerRule_Load, GetID_Local, Private, Public, before_delete, before_save, browse_data, browse_data_item
- Table/entity sample: branch_mstr, en_mstr, pt_mstr, ptnr_mstr, rbtcg_group, rbtcgd_det, rbtcgi_item, rbtcgv_value, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Master Data/Address Taxes/FCustomer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: ElseIf, End, FPartnerAll_Load, GetID_Limit, GetID_Local, Private, Public, before_save, cancel_data, delete_data
- Table/entity sample: ac_mstr, bk_mstr, branch_mstr, code_mstr, cu_mstr, dom_mstr, en_mstr, inst_mstr, limit_return_mstr, loc_mstr, pt_mstr, ptnr_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComsInternal.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: ElseIf, End, FComsInternal_Load, Private, Public, Sub, before_save, cancel_data, ce_select_all_CheckedChanged, comsales_en_id_EditValueChanged
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, ars_ship, branch_mstr, cmsrule_mstr, code_mstr, comexr_rate, comsales_mstr, comsalesd_det, comsalesdd_det, cu_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/FPurchaseReceiptScale.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Save, Qty
- Method sample: Display, ElseIf, End, FPurchaseReceiptScale_Load, Private, Public, Receiver, StringSubPointer, before_save, browse_data
- Table/entity sample: branch_mstr, cc_mstr, ccr_restrc, code_mstr, codes_setting, custom.rcvsc_mstr, custom.rcvscd_det, en_mstr, ptnr_mstr, ptnrd_driver, ptnrv_vehicle, public.branch_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FRebateSupplierRule.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FRebateSupplierRule_Load, GetID_Local, Private, Public, before_delete, before_save, browse_data_item, cancel_data
- Table/entity sample: branch_mstr, en_mstr, pt_mstr, ptnr_mstr, rbtsg_group, rbtsgi_item, rbtsgv_value, tconfuser, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComExtRuleCG.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: ElseIf, End, FComExtRuleCG_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save
- Table/entity sample: cmsext_rule, cmsextd_det, cu_mstr, en_mstr, pt_mstr, ptnr_mstr, ptnrg_grp, spe_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComExtRule.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: ElseIf, End, FComExtRule_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_save
- Table/entity sample: branch_mstr, cmsext_rule, cmsextd_det, cu_mstr, en_mstr, pt_mstr, ptnr_mstr, spe_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Manufacture/Product Structure/FProductStructure.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FProductStructure_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_first_ButtonClick, be_import_xls_ButtonClick, be_to_ButtonClick
- Table/entity sample: bom_mstr, code_mstr, conf_file, en_mstr, fes_mstr, ps_mstr, psd_det, pt_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComEmployee.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: ElseIf, End, FComEmployee_Load, Private, Public, Sub, before_save, cancel_data, comsales_en_id_EditValueChanged, delete_data
- Table/entity sample: branch_mstr, cmsemp_rule, code_mstr, comexr_rate, comsales_mstr, comsalesd_det, comsalesde_emp, cu_mstr, en_mstr, pt_mstr, ptnr_mstr, so_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/FARNota.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: ElseIf, End, FARNota_Load, Private, Public, ap_en_id_EditValueChanged, ar_branch_id_EditValueChanged, arnota_ptnr_id_EditValueChanged, before_save, browse_data
- Table/entity sample: ar_mstr, arnota_mstr, arnotad_det, branch_mstr, cmaddr_mstr, code_mstr, codes_setting, cu_mstr, en_mstr, fp_mstr, ptnr_mstr, ptnra_addr

## `Alfa Solution/Alfa.Project/Module/Import Data/FStandartTransactionImport.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Validation clue: credit
- Method sample: ElseIf, End, FPartNumberImport_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, get_code
- Table/entity sample: Excel, ac_mstr, branch_mstr, cc_mstr, gcal_mstr, glbal_balance, public.glbal_balance

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FCOGSGenerateNew.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, Export_Progress, FCOGSGenerateNew_Load, Private, Public, Sub, Total, Try, cancel_data, delete_data
- Table/entity sample: Cost, Material, Successful.., This, code_mstr, conf_file, cs_mstr, custom.cfg_mstr, custom.cfgi_item, custom.relable_mstr, en_mstr, invc_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FRebateSupplier.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FRebateSupplier_Load, Private, Public, Sub, before_save, cancel_data, delete_data, edit_data
- Table/entity sample: ap_mstr, apr_rcv, branch_mstr, comexr_rate, cu_mstr, en_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr, rbts_mstr, rbtsd_det

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FRebateCustomer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: ElseIf, End, FRebateCustomer_Load, Private, Public, Sub, before_save, cancel_data, delete_data, edit_data
- Table/entity sample: ar_mstr, ars_ship, branch_mstr, comexr_rate, cu_mstr, en_mstr, pt_mstr, ptnr_mstr, rbtc_mstr, rbtcd_det, rbtcdd_det, rbtcg_group

## `Alfa Solution/Alfa.Project/Module/Import Data/FWorkOrderImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPartNumberImport_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, get_transaction_number
- Table/entity sample: Excel, branch_mstr, cc_mstr, code_mstr, codes_setting, en_mstr, ps_mstr, wo_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNewCustomerPenaltyCG.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: ElseIf, End, FComNewCustomerPenaltyCG_Load, Private, Public, Sub, before_save, cancel_data, comsales_en_id_EditValueChanged, delete_data
- Table/entity sample: branch_mstr, cmscust_mstr, cmscustd2_det, cmsemp_rule, code_mstr, comexr_rate, comsales_mstr, comsalesd_det, comsalesde_emp, cu_mstr, en_mstr, ptnr_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNewCustomerPenalty.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: ElseIf, End, FComNewCustomerPenalty_Load, Private, Public, Sub, before_save, cancel_data, comsales_en_id_EditValueChanged, delete_data
- Table/entity sample: branch_mstr, cmscust_mstr, cmscustd2_det, cmsemp_rule, code_mstr, comexr_rate, comsales_mstr, comsalesd_det, cu_mstr, en_mstr, ptnr_mstr, so_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNewCustomerCG.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: ElseIf, End, FComNewCustomerCG_Load, Private, Public, Sub, before_save, cancel_data, comsales_en_id_EditValueChanged, delete_data
- Table/entity sample: branch_mstr, cmscust_mstr, cmscustd2_det, cmscustd2p_payment, cmsemp_rule, code_mstr, comexr_rate, comsales_mstr, comsalesd_det, cu_mstr, en_mstr, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNewCustomer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: ElseIf, End, FComNewCustomer_Load, Private, Public, Sub, before_save, cancel_data, comsales_en_id_EditValueChanged, delete_data
- Table/entity sample: branch_mstr, cmscust_mstr, cmscustd2_det, cmscustd2p_payment, cmsemp_rule, code_mstr, comexr_rate, comsales_mstr, comsalesd_det, cu_mstr, en_mstr, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComExchangeRate.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: BtCheck_Click, ElseIf, End, FComExchangeRate_Load, Private, Public, before_save, delete_data, edit_data, format_grid
- Table/entity sample: comexr_rate, cu_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FRelable.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FRelable_Load, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: custom.relable_mstr, customr.relable_mstr, dom_mstr, en_mstr, pt_mstr, sctrcv_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FSalesPersonExternal.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FSalesPersonExternal_Load, GetID_Local, Private, Public, delete_data, edit, edit_data, format_grid
- Table/entity sample: en_mstr, spe_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNCRule.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FComNCRule_Load, Private, Public, before_save, cancel_data, cmsemp_en_id_EditValueChanged, delete_data, edit
- Table/entity sample: branch_mstr, cmsemp_rule, code_mstr, en_mstr, ptnr_mstr, tconfuserentity, xemp_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/FListAR.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FENOFA_Load, Private, Public, ap_en_id_EditValueChanged, before_delete, before_save, cancel_data, delete_data
- Table/entity sample: custom.listar_mstr, custom.listard_det, en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComExtRuleCGImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, FComExtRuleCGImport_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, get_cmsext_oid
- Table/entity sample: Excel, cmsext_rule, cu_mstr, pt_mstr, ptnrg_grp, spe_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComInternalRule.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FComInternalRule_Load, Private, Public, cancel_data, delete_data, edit, edit_data, format_grid
- Table/entity sample: Days, cmsrule_mstr, public.en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComEmpRule.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FComEmpRule_Load, Private, Public, cancel_data, cmsemp_en_id_EditValueChanged, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, cmsemp_rule, code_mstr, en_mstr, tconfuserentity, xemp_mstr

## `Alfa Solution/Alfa.Project/Module/Master Data/Company/FCodeSetting.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeSetting_Load, Private, Public, before_save, codes_branch_separator_Leave, codes_branch_status_CheckedChanged, codes_cc_separator_Leave, codes_cc_status_CheckedChanged
- Table/entity sample: codes_setting, en_mstr, public.codes_setting

## `Alfa Solution/Alfa.Project/Module/Master Data/Address Taxes/FSalesPerson.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: ElseIf, End, FSalesPerson_Load, GetID_Local, Private, Public, delete_data, edit, edit_data, format_grid
- Table/entity sample: ptnr_mstr, ptnra_addr, ptnrac_cntc, public.branch_mstr, public.dom_mstr, public.en_mstr, public.ptnrg_grp, tconfuserentity, user_branch

## `Alfa Solution/Alfa.Project/Module/Smart Report/FCashInSmartReport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSOSumReportChart_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, SimpleButton1_Click, ce_extend_view_CheckedChanged, ce_setting_CheckedChanged
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, bk_mstr, branch_mstr, code_mstr, cu_mstr, custom.fincsd_mstr, en_mstr, inst_mstr, loc_mstr, pi_mstr

## `Alfa Solution/Alfa.Project/__Browse References/FSalesOrderSearch.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FSalesOrderSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click
- Table/entity sample: ac_mstr, code_mstr, en_mstr, loc_mstr, pt_mstr, ptnr_mstr, ptnrg_grp, public.code_mstr, public.cs_mstr, public.en_mstr, public.limit_return_mstr, public.pt_mstr

## `Alfa Solution/Alfa.Project/Module/Smart Report/FSalesSmartReport_API.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment, credit
- Method sample: End, FSalesSmartReport_API_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, SimpleButton1_Click, ce_extend_view_CheckedChanged, ce_setting_CheckedChanged
- Table/entity sample: ar_mstr, ars_ship, branch_mstr, cc_mstr, ccr_restrc, code_mstr, cu_mstr, en_mstr, inst_mstr, loc_mstr, pl_mstr, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Report/FSalesOrderShipmentReturnCOGSReport_Alfa.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FSalesOrderShipmentReturnCOGSReport_Alfa_Load, Private, Public, format_grid, load_cb, load_data_many, load_grid, load_pivot, sb_delete_cost_Click
- Table/entity sample: branch_mstr, code_mstr, cu_mstr, custom.costdel_mstr, custom.costpack_mstr, custom.soshipdc_cost, en_mstr, inst_mstr, loc_mstr, pt_mstr, ptnr_mstr, ptnrg_grp

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWOItemSubtitute.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Else, End, FWOItemSubtitute_Load, Private, Public, browse_data, cancel_data, delete_data, edit, edit_data
- Table/entity sample: Data, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, pt_mstr, tconfuserentity, user_branch, wo_mstr, wod_det

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FItemCostPackaging.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FItemCostPackaging_Load, Private, Public, before_save, costpack_cust_id_ButtonClick, costpack_en_id_EditValueChanged, costpack_pt_id_ButtonClick, delete_data
- Table/entity sample: branch_mstr, code_mstr, custom.costpack_mstr, en_mstr, pt_mstr, ptnr_mstr, tconfuserentity, user_branch

## `Alfa Solution/Alfa.Project/Module/Distribution/Quotation/FQuotationRoutingApproval.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FQuotationRoutingApproval_Load, GetID_Local, Private, Public, before_save, cancel_data, delete_data, edit
- Table/entity sample: cc_mstr, custom.aprvq_mstr, custom.aprvq_quot, en_mstr, tconfuser

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FItemCostDelivery.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FItemCostDelivery_Load, Private, Public, costdel_branch_id_EditValueChanged, costdel_en_id_EditValueChanged, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, code_mstr, custom.costdel_mstr, en_mstr, loc_mstr, tconfuserentity, user_branch

## `Alfa Solution/Alfa.Project/Module/Import Data/FPriceListQtyImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: ElseIf, End, FPartNumberImport_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid
- Table/entity sample: Excel, custom.ptpb_mstr, limit_return_mstr, pi_mstr, public.code_mstr, public.pt_mstr

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWORouteMaintenance.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FWorkOrder_Load, Private, Public, before_save, browse_data, cancel_data, delete_data, edit
- Table/entity sample: ac_mstr, ccr_restrc, code_mstr, public.cc_mstr, public.en_mstr, public.pt_mstr, public.ro_mstr, public.si_mstr, public.wc_mstr, public.wo_mstr, tconfuserentity, wipa_account

## `Alfa Solution/Alfa.Project/Module/Distribution/Validity Stock/FValidityStockItem.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FValidityStockItem_Load, Private, Public, delete_data, edit, edit_data, format_grid, get_sequel
- Table/entity sample: public.code_mstr, public.dom_mstr, public.en_mstr, public.pt_mstr, vspt_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Forecast/FForecastPeriode.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FForecastPeriode_Load, GetID_Local, Private, Public, delete_data, edit, edit_data, format_grid
- Table/entity sample: custom.fcperiode_mstr, public.en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Import Data/FCategoryJournalImport.vb`
- Workflow clue: Yes
- GL/Journal clue: Yes
- Method sample: End, FCategoryJournalImport_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, load_cb, load_data_many
- Table/entity sample: Excel, Public.glt_det, code_mstr, glt_det

## `Alfa Solution/Alfa.Project/__Browse References/FWOSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FWOSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pjc_mstr, prj_mstr, ps_mstr, pt_mstr, ptnr_mstr, public.wos_so

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNCListPaymentCG.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: End, FComNCListPaymentCG_Load, Private, Public, cancel_data, delete_data, edit_data, format_grid, get_sequel, insert_data
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, ars_ship, branch_mstr, cmscust_mstr, cmscustd2_det, cmscustd2p_payment, cu_mstr, en_mstr, ptnr_mstr, ptnrg_grp

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWOBillMaintenance.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWorkOrderRelease_Load, If, Private, Public, before_save, browse_data, cancel_data, cek_qty_lebih, delete_data
- Table/entity sample: branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, pt_mstr, tconfuserentity, user_branch, wo_mstr, wod_det

## `Alfa Solution/Alfa.Project/__General Form/FCodeMstr1.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr1_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/__General Form/FCodeMstr0.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr2_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/__General Form/FCodeMstr.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FCodeMstr_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Forecast/FItemGroupFC.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FItemGroupFC_Load, Private, Public, code_en_id_EditValueChanged, code_usr_6_EditValueChanged, delete_data, edit, edit_data
- Table/entity sample: code_mstr, en_mstr, pt_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Commission/FComNCListPayment.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding
- Method sample: End, FComNCListPayment_Load, Private, Public, cancel_data, delete_data, edit_data, format_grid, get_sequel, insert_data
- Table/entity sample: ar_mstr, arpay_payment, arpayd_det, ars_ship, branch_mstr, cmscust_mstr, cmscustd2_det, cmscustd2p_payment, cu_mstr, en_mstr, ptnr_mstr, soship_mstr

## `Alfa Solution/Alfa.Project/Module/Master Data/Item Sites/FPartNumberGroup.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FPartNumberGroup_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Distribution/Validity Stock/FValidityStockLocation.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FValidityStockLocation_Load, Private, Public, delete_data, edit, edit_data, format_grid, get_sequel
- Table/entity sample: public.dom_mstr, public.en_mstr, public.loc_mstr, vsloc_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/FPurchasePackaging.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: ElseIf, End, FPurchasePackaging_Load, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Table/entity sample: code_mstr, en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Distribution/Validity Stock/FValidityStockItemImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FValidityStockItemImport_Load, ImportFromExcel, Private, Public, be_import_xls_ButtonClick, format_grid, load_cb, load_data_many, sb_migrate_Click
- Table/entity sample: Excel, code_mstr, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Delivery/FDeliveryScaleReleasePrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, sb_process_Click
- Table/entity sample: custom.dlvsc_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/FPOReceiptScaleReleasePrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, sb_process_Click
- Table/entity sample: custom.rcvsc_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FSiteCost.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Can't Delete
- Method sample: End, FOrganizationStructure_Load, Private, Public, before_delete, browse_data, cancel_data, cs_en_id_EditValueChanged, delete_data, edit
- Table/entity sample: Item, code_mstr, cs_mstr, pt_mstr, public.cs_mstr, public.csc_category, public.csd_det, public.en_mstr, public.pl_mstr, public.pt_mstr, sct_mstr, scth_hist

## `Alfa Solution/Alfa.Project/Module/Distribution/Validity Stock/FValidityStockFinishGoods.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FValidityStockFinishGoods_Load, Private, Public, format_grid, gv_master_SelectionChanged, load_cb, load_data_many, load_data_to_detail, load_grid_mstr
- Table/entity sample: en_mstr, loc_mstr, pt_mstr, public.code_mstr, public.dom_mstr, public.en_mstr, public.pt_mstr, public.vspt_mstr, so_mstr, sod_det, soship_mstr, soshipd_det

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWOTypeMaster.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FWOTypeMaster_Load, Public, before_save, edit, edit_data, format_grid, get_sequel, insert, insert_data_awal
- Table/entity sample: code_mstr, en_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FRelableImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FRelableImport_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, load_cb, load_data_many
- Table/entity sample: Excel, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryWIPCost.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPartnerAll_Load, Private, Public, before_save, cancel_data, delete_data, edit, edit_data, format_grid
- Table/entity sample: code_mstr, en_mstr, invw_wip, pt_mstr

## `Alfa Solution/Alfa.Project/__Browse References/FPurchaseOrderSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FPurchaseOrderSearch_Load, Private, Public, check_all_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Transaction/FUpdateSO.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FUpdateSO_Load, Private, ar_remarks_GotFocus, sb_update_Click
- Table/entity sample: Data, Sales, This, ar_mstr, so_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FItemCostPackagingImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FItemCostPackagingImport_Load, ImportFromExcel, Private, Public, be_import_excel_ButtonClick, format_grid, load_data_many, sb_import_Click
- Table/entity sample: Excel, branch_mstr, code_mstr, en_mstr, pt_mstr, ptnr_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/XRInvoiceNew.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: Detail_AfterPrint, End, Private, XRARInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ar_mstr, ars_ship, arso_so, conf_file, so_mstr, soship_mstr, soshipd_det

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/FARReportTax.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment, credit
- Method sample: End, FARReport_Load, Private, Public, format_grid, generate_ar, le_branch_EditValueChanged, le_customer_EditValueChanged, le_entity_EditValueChanged, load_cb
- Table/entity sample: Eff., Expected, Expt., ac_mstr, ar_mstr, arpay_payment, arpayd_det, arr_report1, ars_ship, bk_mstr, branch_mstr, code_mstr

## `Alfa Solution/Alfa.Project/Module/___Function Helper/ModFunctionSpecial.vb`
- Workflow clue: No/Low
- GL/Journal clue: Yes
- Validation clue: Qty, credit
- Method sample: Else, End, FlashWindow, FlashWindowEx, Function, GetNewIDSvrCode, Public, add_column_edit_le, cek_duplikat_pt_id, export_to_excel
- Table/entity sample: ac_mstr, bk_mstr, code_mstr, cu_mstr, dpt_mstr, en_mstr, gcal_mstr, glbal_balance, glt_det, invc_mstr, invct_table, loc_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Validity Stock/FValidityStockRawMaterial.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FValidityStockRawMaterial_Load, Private, Public, format_grid, gv_master_SelectionChanged, load_cb, load_data_many, load_data_to_detail, load_grid_mstr
- Table/entity sample: en_mstr, loc_mstr, pod_det, pt_mstr, public.code_mstr, public.dom_mstr, public.en_mstr, public.pt_mstr, public.vspt_mstr, reqd_det, vsloc_mstr, vspt_mstr

## `Alfa Solution/Alfa.Project/__Browse References/FWOMaterialRequestSearch.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FWOMaterialRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, cc_mstr, code_mstr, cs_mstr, en_mstr, loc_mstr, pt_mstr, ro_mstr, sct_mstr, tld_mstr, wo_mstr, wod_det

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInventoryLastCostReport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FInventoryLastCostReport_Load, Private, Public, format_grid, load_data_many, load_view1, sb_gen_Click
- Table/entity sample: en_mstr, invcc_change, invccd_det, po_mstr, pod_det, pt_mstr, rcv_mstr, rcvd_det, sct_mstr, sctrcv_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint_LOT.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, Private, XRSalesOrderShipmentPrint_BeforePrint, XRSalesOrderShipmentPrint_PrintProgress
- Table/entity sample: conf_file, soship_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Shipment
- Method sample: End, Private, XRSalesOrderShipmentPrint_BeforePrint, XRSalesOrderShipmentPrint_PrintProgress
- Table/entity sample: conf_file, soship_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/XRSO_LOT.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRSO_BeforePrint, XRSO_PrintProgress
- Table/entity sample: conf_file, so_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/XRSOPrice.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRSOPrice_BeforePrint, XRSO_PrintProgress
- Table/entity sample: conf_file, so_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/XRSOGift_LOT.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInvIssue_BeforePrint, XRSOGift_PrintProgress
- Table/entity sample: conf_file, riu_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/XRSOGiftCost.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRSOGiftCost_BeforePrint, XRSOGiftCost_PrintProgress
- Table/entity sample: conf_file, riu_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/XRSOGift.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInvIssue_BeforePrint, XRSOGift_PrintProgress
- Table/entity sample: conf_file, riu_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/XRSO.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRSO_BeforePrint, XRSO_PrintProgress
- Table/entity sample: conf_file, so_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Delivery/XRDeliveryScalePrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRDeliveryScalePrint_BeforePrint, XRDeliveryScalePrint_PrintProgress
- Table/entity sample: conf_file, custom.dlvsc_mstr

## `Alfa Solution/Alfa.Project/Module/Master Data/Company/FHelpUpdate.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FHelpUpdate_Load, Private, ar_remarks_GotFocus, sb_update_Click
- Table/entity sample: Data, This, ar_mstr

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Print Out/rptWOPickList.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, GroupFooter1_BeforePrint, Private, XRWOListPrint_PrintProgress, rptWOPickList_BeforePrint
- Table/entity sample: branch_mstr, conf_file, en_mstr, public.wc_mstr, tconfuser, wo_mstr

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Print Out/XRWOReceiptPrintNon.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, Private, XRWOReceiptPrintLotSerial_PrintProgress, XRWOReceiptPrintNon_BeforePrint
- Table/entity sample: branch_mstr, conf_file, tconfuser, wor_mstr

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Print Out/XRWOReceiptPrintLotSerial.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, Private, XRWOReceiptPrintLotSerial_BeforePrint, XRWOReceiptPrintLotSerial_PrintProgress
- Table/entity sample: branch_mstr, conf_file, tconfuser, wor_mstr

## `Alfa Solution/Alfa.Project/Module/Manufacture/Printout/XRWOIssuePrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, GroupFooter1_AfterPrint, GroupHeader2_BeforePrint, Private, XRWOIssuePrint_BeforePrint, XRWOIssuePrint_PrintProgress
- Table/entity sample: branch_mstr, conf_file, tconfuser, woci_mstr

## `Alfa Solution/Alfa.Project/Module/Import Data/FNoBuktiPotongARImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FNoBuktiPotongARImport_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, load_cb, load_data_many
- Table/entity sample: Excel, Public.ar_mstr, ar_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FItemCostDeliveryImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FItemCostDeliveryImport_Load, ImportFromExcel, Private, Public, be_import_excel_ButtonClick, format_grid, load_data_many, sb_import_Click
- Table/entity sample: Excel, branch_mstr, code_mstr, en_mstr, loc_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/AP Invoice/XRAPInvoiceNoPO.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRAPInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ap_mstr, conf_file

## `Alfa Solution/Alfa.Project/Module/Financial/AP Invoice/XRAPInvoice.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRAPInvoice_PrintProgress, XRInvoice_BeforePrint
- Table/entity sample: ap_mstr, conf_file

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/XRPurchaseReturnPrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRPurchaseReceiptPrint_PrintProgress, XRPurchaseReturnPrint_BeforePrint
- Table/entity sample: conf_file, rcv_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptScalePrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRPurchaseReceiptPrint_BeforePrint, XRPurchaseReceiptPrint_PrintProgress
- Table/entity sample: conf_file, custom.rcvsc_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptPrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRPurchaseReceiptPrint_BeforePrint, XRPurchaseReceiptPrint_PrintProgress
- Table/entity sample: conf_file, rcv_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/XRPurchaseOrderPrintOut.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, GroupFooter2_BeforePrint, GroupHeader1_BeforePrint, Private, XRPurchaseOrderPrintOut_BeforePrint, XRPurchaseOrderPrintOut_PrintProgress, XrTableCell8_BeforePrint
- Table/entity sample: conf_file, po_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/XRInventoryReqPrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInventoryReqPrint_BeforePrint, XRInventorypbPrint_PrintProgress
- Table/entity sample: conf_file, pb_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/XRInvRec_LOT.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInvIssue_PrintProgress, XRInvRec_BeforePrint
- Table/entity sample: conf_file, riu_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/XRInvRec.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInvIssue_PrintProgress, XRInvRec_BeforePrint
- Table/entity sample: conf_file, riu_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/XRInvIssue_LOT.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInvIssue_BeforePrint, XRInvIssue_PrintProgress
- Table/entity sample: conf_file, riu_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/XRInvIssue.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, XRInvIssue_BeforePrint, XRInvIssue_PrintProgress
- Table/entity sample: conf_file, riu_mstr

## `Alfa Solution/Alfa.Project/Module/Distribution/Inventory Control/FInvReportByDate.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FARReportByAging_Load, GetNextNode, Private, Public, SetCheckedChildNodes, SetCheckedParentNodes, format_grid, le_branch_id_EditValueChanged, load_by_branch
- Table/entity sample: branch_mstr, code_mstr, cs_mstr, en_mstr, grp, invc_mstr, invh_mstr, invw_wip, loc_mstr, pl_mstr, pt_mstr, public.cs_mstr

## `Alfa Solution/Alfa.Project/__Browse References/FPartNumberSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: ElseIf, End, FPartNumberSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: ac_mstr, cc_mstr, code_mstr, cs_mstr, custom.pll_limit, en_mstr, invw_wip, its_mstr, itsd_det, loc_mstr, pb_mstr, pl_mstr

## `Alfa Solution/Alfa.Project/__Browse References/FInventoryRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_price_list
- Table/entity sample: branch_mstr, code_mstr, en_mstr, loc_mstr, pb_mstr, pt_mstr, public.cs_mstr, public.pi_mstr, public.pid_det, public.piddt_temp, sct_mstr, tconfuser

## `Alfa Solution/Alfa.Project/Module/Sales Order/Forecast/FItemGroupFCImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FItemGroupFCImport_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, format_grid, load_cb
- Table/entity sample: Excel, pt_mstr, ptnr_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FPartNumberCostOther.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FPartNumberCostOther_Load, Private, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert_data
- Table/entity sample: code_mstr, en_mstr, pl_mstr, tconfuserentity, xalfaptco_other

## `Alfa Solution/Alfa.Project/Module/Sales Order/Forecast/FPartNumberGroupFC.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FPartNumberGroupFC_Load, Private, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert_data
- Table/entity sample: code_mstr, en_mstr, public.pt_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Distribution/Quotation/FQuotRoutingApprovalImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FQuotRoutingApprovalImport_Load, GetID_Local, ImportFromExcel, Private, Public, be_import_excel_ButtonClick, format_grid, load_cb, load_data_many
- Table/entity sample: Excel, cc_mstr, custom.aprvq_quot, public.tconfuser

## `Alfa Solution/Alfa.Project/Module/Administrative Tools/w_reset_password.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, Private, sb_reset_Click, w_reset_password_Load
- Table/entity sample: tconfuser

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWORelease.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FInventoryReportDetail_Load, Private, Public, format_grid, le_branch_id_EditValueChanged, le_entity_EditValueChanged, load_cb, preview, print_pick_list
- Table/entity sample: cc_mstr, code_mstr, public.cs_mstr, public.get_all_simulated_undef, public.is_mstr, public.loc_mstr, public.ps_mstr, public.pt_mstr, public.ro_mstr, public.rod_det, public.sct_mstr, public.wc_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/ds_invoice.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindByar_oid, GetData, GetEnumerator
- Table/entity sample: Order, ac_mstr, all, ar_mstr, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, cu_mstr, en_mstr, inst_mstr

## `Alfa Solution/Alfa.Project/__Browse References/FSalesOrderRecapSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty, Shipment
- Method sample: End, FSalesOrderRecapSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: ac_mstr, code_mstr, en_mstr, loc_mstr, pt_mstr, ptnr_mstr, public.sords_serial, so_mstr, sod_det, sor_mstr, sord_det

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/ds_po_printout.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBypt_code, GetData, GetEnumerator
- Table/entity sample: Order, all, cmaddr_, code_mstr, cu_mstr, pjc_mstr, po_mstr, pod_det, pt_mstr, ptnr_m, ptnra_addr, ptnrac_cntc

## `Alfa Solution/Alfa.Project/Module/Financial/Tax Invoice/FFakturPajakPrint.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: End, FFakturPajakPrint_Load, Private, Public, be_first_ButtonClick, be_to_ButtonClick, ce_page_number_CheckedChanged, le_cur_EditValueChanged, preview
- Table/entity sample: ar_mstr, ars_ship, cmaddr_mstr, code_mstr, conf_file, cu_mstr, fp_mstr, pt_mstr, ptnr_mstr, ptnra_addr, sod_det, soshipd_det

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/ds_rcv_printout.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: Order, all, cmaddr_mstr, code_m, code_mstr, cu_mstr, en_mstr, loc_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alfa Solution/Alfa.Project/Module/Financial/Cost Management/FItemCostOtherImport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, FItemCostOtherImport_Load, ImportFromExcel, Private, Public, be_import_excel_ButtonClick, format_grid, load_data_many, sb_import_Click
- Table/entity sample: Excel, pt_mstr, xalfaptco_other

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Print Out/ds_wo_release.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: Order, all, cc_mstr, code_mstr, pt_mstr, ro_mstr, rows, scenarios, tranaprvd_dok, wo_mstr, wod_det

## `Alfa Solution/Alfa.Project/Module/Manufacture/Printout/ds_wo_issue.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: Order, all, cmaddr_mstr, code_mstr, loc_mstr, pt_mstr, rows, scenarios, tranaprvd_dok, wo_mstr, wocid_det, wocids_serial

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/ds_ar_nota.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: Order, all, arnota_mstr, arnotad_det, branch_mstr, cmaddr_mstr, cu_mstr, en_mstr, fp_mstr, ptnr_mstr, ptnra_addr, ptnrac_cntc

## `Alfa Solution/Alfa.Project/__Browse References/FRequisitionSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FRequisitionSearch_Load, Private, Public, ce_select_CheckedChanged, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress
- Table/entity sample: branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, en_mstr, invct_table, loc_mstr, pjc_mstr, pt_mstr, ptnr_mstr, req_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/FARReportTaxOutstanding.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Outstanding, credit
- Method sample: End, FARReportTaxOutstanding_Load, Public, format_grid, load_cb, load_data_many, load_sales_local
- Table/entity sample: Eff., Expt., ac_mstr, ar_mstr, arpay_payment, arpayd_det, bk_mstr, branch_mstr, code_mstr, cu_mstr, custom.fincsd_mstr, en_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Print Out/ds_so.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot
- Table/entity sample: Order, all, code_m, code_mstr, inst_mstr, pt_mstr, ptnr_mstr, ptnra_addr, ptnrac_cntc, rows, scenarios, so_mstr

## `Alfa Solution/Alfa.Project/__Browse References/FSOGiftRequestSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, FSOGiftRequestSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Table/entity sample: branch_mstr, code_mstr, en_mstr, loc_mstr, pt_mstr, public.cs_mstr, public.tld_mstr, sct_mstr, sogr_mstr, um_mstr

## `Alfa Solution/Alfa.Project/Module/Sales Order/Transaction/FSalesOrder.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: Excel, Pameran

## `Alfa Solution/Alfa.Project/Module/Sales Order/Forecast/FForecasReporttAlfa.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FForecasReporttAlfa_Load, Private, Public, format_grid, load_data_many, load_detail_grid, load_detail_non_fc, load_detail_pivot
- Table/entity sample: branch_mstr, code_mstr, cu_mstr, custom.fcd_det, custom.fcperiode_mstr, custom.fcs_ship, en_mstr, inst_mstr, loc_mstr, pt_mstr, ptnr_mstr, ptnrg_grp

## `Alfa Solution/Alfa.Project/Module/Manufacture/Product Structure/FSimulatedPickListGroup.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: Else, End, FSimulatedPickListGroup_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, browse_data, format_grid
- Table/entity sample: code_mstr, invc_mstr, is_mstr, loc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr, public.get_all_simulated_undef

## `Alfa Solution/Alfa.Project/Module/Master Data/Item Sites/FPNClass.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: End, FPNClass_Load, Public, before_save, format_grid

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWOReceiptWithGrade.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: Product, Qty

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, credit
- Method sample: End, FWorkOrderReceiptReport_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, loc_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Print Out/rptWOPickList2.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: End, GroupFooter1_BeforePrint, Private, rptWOPickList2_BeforePrint
- Table/entity sample: branch_mstr, conf_file, en_mstr, public.wc_mstr, tconfuser, wo_mstr

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/XRNotaTagih.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, XRNotaTagih_BeforePrint
- Table/entity sample: conf_file

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/XRKwitansiNotaTagih.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, XRKwitansiNotaTagih_BeforePrint
- Table/entity sample: conf_file

## `Alfa Solution/Alfa.Project/Module/Financial/AR Invoice/FDRCRMemoTax.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Shipment, credit
- Method sample: Dispose, Friend, InitializeComponent

## `Alfa Solution/Alfa.Project/Module/Distribution/Quotation/XRQuotationPrint.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: End, XRQuotationPrint_BeforePrint
- Table/entity sample: conf_file

## `Alfa Solution/Alfa.Project/Module/Distribution/Purchase Order/FPurchaseOrder.Designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: Excel

## `Alfa Solution/Alfa.Project/Module/Administrative Tools/FUserGroup.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alfa Solution/Alfa.Project/Module/Master Data/Address Taxes/FCustomer.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Alfa Solution/Alfa.Project/Module/Financial/AP Invoice/FVoucherTax.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: Dispose, Friend, InitializeComponent

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Transaction/FWOReceipt.designer.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Qty
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: Product, Qty

## `Alfa Solution/Alfa.Project/Module/Manufacture/Work Order/Report/FWorkOrderReport.vb`
- Workflow clue: Yes
- GL/Journal clue: No/Low
- Validation clue: Outstanding, Qty
- Method sample: End, FWorkOrderReport_Load, Private, Public, format_grid, load_data_many, load_wo, load_wo_item, load_wo_pivot, load_wo_routing
- Table/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, ps_mstr, pt_mstr, ptnr_mstr, public.cs_mstr, ro_mstr, sct_mstr

## `Alfa Solution/Alfa.Project/__General Form/frmPrintDialogReport.Designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Method sample: Dispose, Friend, InitializeComponent

## `Alfa Solution/Alfa.Project/__Browse References/FPartnerSearch.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: credit
- Method sample: End, FPartnerSearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, load_cb
- Table/entity sample: ac_mstr, branch_mstr, code_mstr, en_mstr, inst_mstr, ptnra_addr, public.ac_mstr, public.en_mstr, public.inst_mstr, tconfuserentity

## `Alfa Solution/Alfa.Project/Module/Sales Order/Transaction/FSalesOrderShipment.designer.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: Dispose, Friend, InitializeComponent
- Table/entity sample: Excel

## `Alfa Solution/Alfa.Project/Module/Sales Order/Delivery/FDeliveryScaleComparison.vb`
- Workflow clue: No/Low
- GL/Journal clue: No/Low
- Validation clue: Qty, Shipment
- Method sample: End, FDeliveryScaleComparison_Load, Private, Public, format_grid, gv_master_SelectionChanged, load_data_many, load_data_to_detail, load_detail
- Table/entity sample: branch_mstr, ccr_restrc, code_mstr, custom.dlvsc_mstr, dlv_mstr, dlvrd_riud, dlvsd_soshipd, dlvtd_ptsfrd, pt_mstr, ptnr_mstr, ptsfr_mstr, ptsfrd_det

