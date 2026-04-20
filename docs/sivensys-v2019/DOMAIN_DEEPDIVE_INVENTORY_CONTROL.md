# DOMAIN_DEEPDIVE_INVENTORY_CONTROL - SIVENSYS ERP Desktop v2019

Total file domain terdeteksi: **55**

## Top files
- `Module/Inventory Control/Transaction/FGoodsReceipt.vb` (Subdomain: Transaction, methods: 42, table refs: 34, handlers: 10)
- `Module/Inventory Control/Transaction/FGoodsReceiptDetail.vb` (Subdomain: Transaction, methods: 42, table refs: 26, handlers: 14)
- `Module/Inventory Control/Transaction/FGoodsReceivingReport.vb` (Subdomain: Transaction, methods: 40, table refs: 27, handlers: 12)
- `Module/Inventory Control/Opname/FCOStockOpnameFabric.vb` (Subdomain: Opname, methods: 39, table refs: 24, handlers: 7)
- `Module/Inventory Control/Opname/FCOStockOpnameYarn.vb` (Subdomain: Opname, methods: 40, table refs: 23, handlers: 6)
- `Module/Inventory Control/Opname/FCOStockOpname.vb` (Subdomain: Opname, methods: 38, table refs: 20, handlers: 6)
- `Module/Inventory Control/Opname/FEntryStockOpnameYarn.vb` (Subdomain: Opname, methods: 33, table refs: 19, handlers: 7)
- `Module/Inventory Control/Opname/FEntryStockOpnameFabric.vb` (Subdomain: Opname, methods: 30, table refs: 22, handlers: 7)
- `Module/Inventory Control/Opname/FStockOpnameApprovalFabric.vb` (Subdomain: Opname, methods: 22, table refs: 26, handlers: 8)
- `Module/Inventory Control/Opname/FEntryStockOpname.vb` (Subdomain: Opname, methods: 31, table refs: 16, handlers: 7)
- `Module/Inventory Control/Opname/FStockOpnameApprovalYarn.vb` (Subdomain: Opname, methods: 22, table refs: 21, handlers: 8)
- `Module/Inventory Control/Opname/FStockOpnameApproval.vb` (Subdomain: Opname, methods: 22, table refs: 18, handlers: 8)
- `Module/Inventory Control/Opname/ds_cut_of_inventory.Designer.vb` (Subdomain: Opname, methods: 37, table refs: 0, handlers: 0)
- `Module/Inventory Control/Opname/FStockOpnameFabricReport.vb` (Subdomain: Opname, methods: 9, table refs: 14, handlers: 2)
- `Module/Inventory Control/Report/FInventoryBalanceReport.vb` (Subdomain: Report, methods: 13, table refs: 6, handlers: 4)
- `Module/Inventory Control/Opname/FStockOpnameYarnReport.vb` (Subdomain: Opname, methods: 9, table refs: 10, handlers: 2)
- `Module/Inventory Control/Opname/FStockOpnameReport.vb` (Subdomain: Opname, methods: 9, table refs: 7, handlers: 2)
- `Module/Inventory Control/Report/FGoodsReceiptDetailReport.vb` (Subdomain: Report, methods: 5, table refs: 11, handlers: 1)
- `Module/Inventory Control/Report/FGoodsReceiptReport.vb` (Subdomain: Report, methods: 5, table refs: 9, handlers: 1)
- `Module/Inventory Control/Print Out/XRGoodsReceipt.vb` (Subdomain: Print Out, methods: 4, table refs: 2, handlers: 2)
- `Module/Inventory Control/Print Out/XRGoodsReceiptDetail.vb` (Subdomain: Print Out, methods: 2, table refs: 4, handlers: 1)
- `Module/Inventory Control/Print Out/XRGRDPrintOut.vb` (Subdomain: Print Out, methods: 2, table refs: 4, handlers: 1)
- `Module/Inventory Control/Print Out/XRInvBalanceReportPrintOut.vb` (Subdomain: Print Out, methods: 4, table refs: 0, handlers: 2)
- `Module/Inventory Control/Transaction/FGoodsReceivingReport.Designer.vb` (Subdomain: Transaction, methods: 3, table refs: 1, handlers: 0)
- `Module/Inventory Control/Transaction/FGoodsReceiptDetail.Designer.vb` (Subdomain: Transaction, methods: 3, table refs: 1, handlers: 0)

## Method & data clues
### Module/Inventory Control/Transaction/FGoodsReceipt.vb
- Method sample: ElseIf, End, FGoodsReceipt_Load, GenerateQRCode, GetID_Local, Private, Public, SetCurrentQRCode, be_po_code_ButtonClick, before_save, cancel_data, delete_data
- Table/entity sample: History, Public.riu_mstr, Table, branch_mstr, cmaddr_mstr, code_mstr, codes_setting, color_mstr, cs_mstr, data, dom_mstr, en_mstr
- Event handlers: 10

### Module/Inventory Control/Transaction/FGoodsReceiptDetail.vb
- Method sample: ElseIf, End, FGoodsReceiptDetail_Load, GenerateQRCode, Private, Public, SetCurrentQRCode, before_save, browse_data, cancel_data, delete_data, edit
- Table/entity sample: Public.grd_mstr, branch_mstr, cmaddr_mstr, codes_setting, color_mstr, dom_mstr, en_mstr, grd_mstr, grdd_det, grds_sj, invb_barcode, loc_mstr
- Event handlers: 14

### Module/Inventory Control/Transaction/FGoodsReceivingReport.vb
- Method sample: ElseIf, End, FGoodsReceivingReport_Load, GenerateQRCode, Private, Public, SetCurrentQRCode, add_column_edit_be, be_po_code_ButtonClick, before_save, browse_data, cancel_data
- Table/entity sample: Public.grd_mstr, branch_mstr, cmaddr_mstr, codes_setting, color_mstr, dom_mstr, en_mstr, grd_mstr, grdd_det, grds_sj, loc_mstr, pt_mstr
- Event handlers: 12

### Module/Inventory Control/Opname/FCOStockOpnameFabric.vb
- Method sample: Else, ElseIf, End, FCOStockOpnameFabric_Load, Private, Public, approve, approve_line, before_delete, before_save, cancel_approve, cancel_line
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invclc_mstr, invclcd_det, invh_mstr, loc_mstr, pl_mstr, pt_mstr, ptc_category, ptcom_combo, ptd_design
- Event handlers: 7

### Module/Inventory Control/Opname/FCOStockOpnameYarn.vb
- Method sample: Else, ElseIf, End, FCOStockOpnameYarn_Load, Private, Public, approve, approve_line, before_delete, before_save, cancel_approve, cancel_line
- Table/entity sample: branch_mstr, code_mstr, en_mstr, heater_mstr, intermingle_mstr, invc_mstr, invclc_mstr, invclcd_det, invh_mstr, loc_mstr, lubster_mstr, pl_mstr
- Event handlers: 6

### Module/Inventory Control/Opname/FCOStockOpname.vb
- Method sample: Else, ElseIf, End, FCOStockOpname_Load, Private, Public, approve, approve_line, before_delete, before_save, cancel_approve, cancel_line
- Table/entity sample: branch_mstr, code_mstr, en_mstr, invc_mstr, invclc_mstr, invclcd_det, invh_mstr, loc_mstr, pl_mstr, pt_mstr, public.invclc_mstr, public.invclcd_det
- Event handlers: 6

### Module/Inventory Control/Opname/FEntryStockOpnameYarn.vb
- Method sample: ElseIf, End, FEntryStockOpnameYarn_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save, cancel_data, cek_stock_next_date
- Table/entity sample: History, ccre_mstr, code_mstr, en_mstr, heater_mstr, intermingle_mstr, invclc_mstr, invclcd_det, loc_mstr, lubster_mstr, pl_mstr, pt_mstr
- Event handlers: 7

### Module/Inventory Control/Opname/FEntryStockOpnameFabric.vb
- Method sample: ElseIf, End, FEntryStockOpnameFabric_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save, cancel_data, cek_stock_next_date
- Table/entity sample: ccre_mstr, code_mstr, en_mstr, invclc_mstr, invclcd_det, loc_mstr, pl_mstr, pt_mstr, ptc_category, ptcom_combo, ptd_design, ptnr_mstr
- Event handlers: 7

### Module/Inventory Control/Opname/FStockOpnameApprovalFabric.vb
- Method sample: ElseIf, End, FStockOpnameApprovalFabric_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval, gv_all_Click, gv_all_SelectionChanged
- Table/entity sample: History, branch_mstr, code_mstr, en_mstr, invb, invclc_mstr, invclcd_det, loc_mstr, pt_mstr, ptc_category, ptcom_combo, ptd_design
- Event handlers: 8

### Module/Inventory Control/Opname/FEntryStockOpname.vb
- Method sample: ElseIf, End, FEntryStockOpname_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save, cancel_data, cek_stock_next_date
- Table/entity sample: History, ccre_mstr, code_mstr, en_mstr, invclc_mstr, invclcd_det, loc_mstr, pl_mstr, pt_mstr, public.ccre_mstr, public.cs_mstr, public.invclc_mstr
- Event handlers: 7

### Module/Inventory Control/Opname/FStockOpnameApprovalYarn.vb
- Method sample: ElseIf, End, FStockOpnameApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval, gv_all_Click, gv_all_SelectionChanged
- Table/entity sample: History, branch_mstr, code_mstr, en_mstr, heater_mstr, intermingle_mstr, invclc_mstr, invclcd_det, loc_mstr, lubster_mstr, pt_mstr, public.branch_mstr
- Event handlers: 8

### Module/Inventory Control/Opname/FStockOpnameApproval.vb
- Method sample: ElseIf, End, FStockOpnameApproval_Load, Private, Public, approve_wf, cancel_wf, exportpdf, format_grid, get_user_approval, gv_all_Click, gv_all_SelectionChanged
- Table/entity sample: History, branch_mstr, code_mstr, en_mstr, invclc_mstr, invclcd_det, loc_mstr, pt_mstr, public.branch_mstr, public.en_mstr, public.invclc_mstr, public.loc_mstr
- Event handlers: 8

