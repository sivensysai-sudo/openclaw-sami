# PARITY_DETAIL_INVENTORY_DESKTOP_V2019_TO_BLAZOR

Detail parity awal domain Inventory (desktop v2019 -> Blazor), berbasis file kandidat prioritas.


## Ringkasan

- Total file dianalisis: **20**

- Fokus transaksi: Issue, Receipt, Request, Transfer, Lot/Pallet, Stock movement.


## File-level parity clues

### `Module/Distribution/Inventory/Transaction/FPrintPallet.vb`
- Transaction hint: Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: End, FPrintPallet_Load, Private, Public, before_delete, before_save, browse_data, cancel_data, delete_data, edit_data, format_grid, get_sequel
- Data/entity sample: cc_mstr, ccr_restrc, code_mstr, codes_setting, en_mstr, invc_mstr, its_mstr, loc_mstr, palletpr_mstr, palletprd_det, palletprds_serial, pt_mstr, public.palletpr_mstr, public.palletprd_det

### `Module/Manufacture/Transaction/FPalletID.vb`
- Transaction hint: Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: End, FPalletID_Load, Private, Public, before_delete, before_save, cancel_data, check_all_CheckedChanged, delete_data, edit, edit_data, format_grid
- Data/entity sample: Public.pallet_mstr, branch_mstr, en_mstr, loc_mstr, pallet_mstr, palletd_det, pt_mstr, public.pallet_mstr, riud_det, riuds_serial, tconfuser, user_branch, wo_mstr

### `Module/Manufacture/03_Greige Inspection/FInspectionGreige.vb`
- Transaction hint: Lot
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: End, FInspectionGreige_Load, GenerateLotNo, GetWeightNetto, Private, Public, RetrieveToTextBox, RetrieveWIP, Return, SaveData, after_success, btn_save_Click
- Data/entity sample: code_mstr, en_mstr, greigep_prod, ish_sheet, ishd_det, loc_mstr, mch_mstr, pt_mstr, ptcom_combo, ptd_design, ptnr_mstr, ptsq_quality, public.greigei_inspect, public.stockg_greige

### `__Browse References/FPalletIDSearchNew.vb`
- Transaction hint: Inventory Issue, Inventory Transfer, Lot, Pallet
- Workflow/approval clues: No/Low
- GL/valuation clues: No/Low
- Method sample: Else, End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_fill_Click, sb_retrieve_Click
- Data/entity sample: code_mstr, en_mstr, invc_mstr, its_mstr, itsd_det, loc_mstr, nilai, pallet_mstr, palletd_det, pt_mstr, public.cs_mstr, sct_mstr, traninv_mstr, userl_loc

### `Module/Distribution/Inventory/Transaction/FFGReceiptUnplanned.vb`
- Transaction hint: Inventory Issue, Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: Yes
- Method sample: CekStatusPalet, ElseIf, End, FFGReceiptUnplanned_Load, ImportFromExcel, Private, Public, arrange_from_excel_serial, be_import_serial_ButtonClick, before_save, cancel_data, delete_data
- Data/entity sample: History, ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, codes_setting, cs_mstr, data, en_mstr, invb_barcode, invc_mstr, loc_mstr, pjc_mstr

### `__Browse References/FLotSerialSearch.vb`
- Transaction hint: Lot
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Data/entity sample: ass_mstr, invw_wip, loc_mstr, pt_mstr, public.invc_mstr

### `Module/Distribution/Inventory/Packaging/FPallet.vb`
- Transaction hint: Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: ElseIf, End, FPallet_Load, GetID, Private, Public, delete_data, edit, edit_data, format_grid, get_sequel, insert
- Data/entity sample: branch_mstr, cc_mstr, ccr_restrc, custom.pallet_mstr, en_mstr, tconfuserentity, user_branch

### `__Browse References/FPalletIDSearch.vb`
- Transaction hint: Inventory Issue, Lot, Pallet
- Workflow/approval clues: No/Low
- GL/valuation clues: No/Low
- Method sample: End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click, send_data
- Data/entity sample: code_mstr, invc_mstr, its_mstr, itsd_det, loc_mstr, pallet_mstr, palletd_det, pt_mstr, traninv_mstr

### `__Browse References/FLotSerialSearch.vb`
- Transaction hint: Lot
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: End, FEntitySearch_Load, Private, Public, fill_data, format_grid, get_sequel, gv_master_DoubleClick, gv_master_KeyPress, sb_retrieve_Click
- Data/entity sample: ass_mstr, invw_wip, loc_mstr, pt_mstr, public.invc_mstr

### `Module/Manufacture/Transaction/FPalletID.designer.vb`
- Transaction hint: Pallet
- Workflow/approval clues: No/Low
- GL/valuation clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Distribution/Inventory/Transaction/FReprintBarcode_Generate.vb`
- Transaction hint: Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: Else, End, FReprintBarcode_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save, browse_data, cancel_data
- Data/entity sample: branch_mstr, cc_mstr, ccr_restrc, code_mstr, codes_setting, color_mstr, en_mstr, invc_mstr, invw_wip, its_mstr, loc_mstr, pt_mstr, public.reprint_mstr, public.reprintd_det

### `Module/Distribution/Inventory/Transaction/FTransferIssues.designer.vb`
- Transaction hint: Inventory Request, Inventory Transfer, Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Distribution/Inventory/Packaging/FPallet.designer.vb`
- Transaction hint: Pallet
- Workflow/approval clues: No/Low
- GL/valuation clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Distribution/Inventory/Transaction/FReprintBarcode.vb`
- Transaction hint: Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: Else, End, FReprintBarcode_Load, ImportFromExcel, Private, Public, arrange_from_excel, be_import_xls_ButtonClick, before_delete, before_save, browse_data, cancel_data
- Data/entity sample: branch_mstr, cc_mstr, ccr_restrc, code_mstr, codes_setting, color_mstr, en_mstr, invc_mstr, invw_wip, its_mstr, loc_mstr, pt_mstr, public.reprint_mstr, public.reprintd_det

### `Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb`
- Transaction hint: Inventory Issue, Inventory Receipt, Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: Yes
- Method sample: Else, ElseIf, End, FInventoryReceipts_Load, Function, ImportFromExcel, Private, Public, add_column_edit_be, arrange_from_excel_detail_serial, be_import_xls_ButtonClick, before_save
- Data/entity sample: History, Table, boq_mstr, boqs_stand, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, color_mstr, cost, cs_mstr, data

### `Module/Distribution/Inventory/Transaction/FPrintPallet.designer.vb`
- Transaction hint: Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Distribution/Inventory/Transaction/FInventoryAssemble2.vb`
- Transaction hint: Inventory Issue, Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: Yes
- Method sample: Else, End, FInventoryAssemble2_Load, Function, Private, Public, before_save, browse_data, browse_data_serial, browse_data_serial_header, calculate_qty, cancel_data
- Data/entity sample: History, Table, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, color_mstr, cost, cs_mstr, data, en_mstr, invc_mstr

### `Module/Distribution/Inventory/Transaction/FInventoryReceipts.designer.vb`
- Transaction hint: Inventory Receipt, Lot, Pallet
- Workflow/approval clues: No/Low
- GL/valuation clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Data/entity sample: Excel

### `Module/Distribution/Inventory/Transaction/FFGReceiptUnplanned.Designer.vb`
- Transaction hint: Pallet
- Workflow/approval clues: No/Low
- GL/valuation clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Data/entity sample: Excel

### `Module/Sales Order/Transaction/FPackingList.vb`
- Transaction hint: Inventory Transfer, Lot, Pallet
- Workflow/approval clues: Yes
- GL/valuation clues: No/Low
- Method sample: ElseIf, End, FPackingList_Load, Private, Public, before_save, browse_data_serial, cancel_data, delete_data, edit, edit_data, format_grid
- Data/entity sample: Data, History, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, codes_setting, data, do, do_mstr, dod_det, en_mstr, inst_mstr, invb

## Gap checklist ke Blazor (next verification)

- Mapping form/menu Inventory desktop -> route/page Blazor per transaksi.

- Parity status flow: Draft -> Workflow -> Approved -> Cancel/Rollback.

- Parity inventory movement dan valuation impact (jika ada).

- Parity referensi dokumen antar transaksi inventory.
