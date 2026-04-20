# DOMAIN_DEEPDIVE_MASTER_DATA - SIVENSYS ERP Desktop v2019

Total file domain terdeteksi: **186**

## Top files
- `Module/Master Data/Company/FCustomer.vb` (Subdomain: Company, methods: 38, table refs: 19, handlers: 20)
- `Module/Master Data/Address Taxes/FCustomer.vb` (Subdomain: Address Taxes, methods: 39, table refs: 16, handlers: 19)
- `Module/Master Data/Company/FPalletReceipts.vb` (Subdomain: Company, methods: 40, table refs: 17, handlers: 15)
- `Module/Master Data/Company/FSupplier.vb` (Subdomain: Company, methods: 34, table refs: 19, handlers: 14)
- `Module/Master Data/Address Taxes/FSupplier.vb` (Subdomain: Address Taxes, methods: 34, table refs: 19, handlers: 14)
- `Module/Master Data/Item/Fabric/FPartNumberFabric.vb` (Subdomain: Item, methods: 30, table refs: 28, handlers: 8)
- `Module/master data/Item/Fabric/FPartNumberFabric.vb` (Subdomain: Item, methods: 28, table refs: 25, handlers: 8)
- `Module/Master Data/Item/Yarn/FPartNumberYarn.vb` (Subdomain: Item, methods: 29, table refs: 27, handlers: 5)
- `Module/Master Data/Company/FSalesMove.vb` (Subdomain: Company, methods: 22, table refs: 24, handlers: 9)
- `Module/master data/Item/Fabric/FGreigeMasterData.vb` (Subdomain: Item, methods: 27, table refs: 21, handlers: 3)
- `Module/Master Data/Item Sites/FFinalItemSetting.vb` (Subdomain: Item Sites, methods: 33, table refs: 8, handlers: 10)
- `Module/Master Data/Company/FOutstandingMove.vb` (Subdomain: Company, methods: 21, table refs: 22, handlers: 8)
- `Module/Master Data/Item Sites/FPackaging.vb` (Subdomain: Item Sites, methods: 32, table refs: 5, handlers: 10)
- `Module/Master Data/Company/FCodeSetting.vb` (Subdomain: Company, methods: 29, table refs: 3, handlers: 15)
- `Module/Master Data/Item/General Item/FPartNumber.vb` (Subdomain: Item, methods: 21, table refs: 20, handlers: 5)
- `Module/Master Data/Item Sites/FPartNumber.vb` (Subdomain: Item Sites, methods: 21, table refs: 20, handlers: 5)
- `Module/Master Data/Company/FRoutingApproval.vb` (Subdomain: Company, methods: 28, table refs: 10, handlers: 8)
- `Module/Master Data/Item/FPartNumber.vb` (Subdomain: Item, methods: 20, table refs: 20, handlers: 5)
- `Module/Master Data/Company/FBranch.vb` (Subdomain: Company, methods: 30, table refs: 6, handlers: 9)
- `Module/master data/Item/Fabric/FPartNumberGreige.vb` (Subdomain: Item, methods: 22, table refs: 18, handlers: 3)
- `Module/Master Data/Address Taxes/FSupplierBrandDetail.vb` (Subdomain: Address Taxes, methods: 25, table refs: 8, handlers: 9)
- `Module/Master Data/Address Taxes/FItemCustomer.vb` (Subdomain: Address Taxes, methods: 25, table refs: 9, handlers: 8)
- `Module/Master Data/Item Sites/FLocation.vb` (Subdomain: Item Sites, methods: 19, table refs: 16, handlers: 4)
- `Module/Master Data/Item/FLocation.vb` (Subdomain: Item, methods: 20, table refs: 14, handlers: 4)
- `Module/Master Data/Item Sites/FItemStatus.vb` (Subdomain: Item Sites, methods: 22, table refs: 8, handlers: 7)

## Method & data clues
### Module/Master Data/Company/FCustomer.vb
- Method sample: ElseIf, End, FPartnerAll_Load, GetID_Limit, GetID_Local, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: ac_mstr, arbank_mstr, bk_mstr, branch_mstr, code_mstr, cu_mstr, dom_mstr, en_mstr, inst_mstr, limit_return_mstr, loc_mstr, pt_mstr
- Event handlers: 20

### Module/Master Data/Address Taxes/FCustomer.vb
- Method sample: ElseIf, End, FCustomer_Load, GetID_Limit, GetID_Local, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: ac_mstr, branch_mstr, code_mstr, cu_mstr, dom_mstr, en_mstr, inst_mstr, limit_return_mstr, loc_mstr, pt_mstr, ptnr_mstr, ptnra_addr
- Event handlers: 19

### Module/Master Data/Company/FPalletReceipts.vb
- Method sample: ElseIf, End, FPalletReceipts_Load, GetID_Local, ImportFromExcel, Private, Public, arrange_from_excel, arrange_from_excel_serial, be_import_serial_ButtonClick, be_import_xls_ButtonClick, before_save
- Table/entity sample: branch_mstr, codes_setting, custom.fillp_mstr, custom.fillpd_det, custom.plt_mstr, data, en_mstr, loc_mstr, pt_mstr, public.branch_mstr, public.cc_mstr, public.en_mstr
- Event handlers: 15

### Module/Master Data/Company/FSupplier.vb
- Method sample: Else, ElseIf, End, FPartnerAll_Load, GetID_Local, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, cmt_mstr, code_mstr, ptnr_mstr, ptnra_addr, ptnrac_cntc, ptnrg_grp, public.ac_mstr, public.branch_mstr, public.code_mstr, public.cu_mstr, public.dom_mstr
- Event handlers: 14

### Module/Master Data/Address Taxes/FSupplier.vb
- Method sample: Else, ElseIf, End, FPartnerAll_Load, GetID_Local, Private, Public, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: branch_mstr, cmt_mstr, code_mstr, ptnr_mstr, ptnra_addr, ptnrac_cntc, ptnrg_grp, public.ac_mstr, public.branch_mstr, public.code_mstr, public.cu_mstr, public.dom_mstr
- Event handlers: 14

### Module/Master Data/Item/Fabric/FPartNumberFabric.vb
- Method sample: DownloadSingleFile, ElseIf, End, FPartNumberFabric_Load, Function, GetID_Local, Private, Public, before_save, delete_data, edit, edit_data
- Table/entity sample: code_mstr, color_mstr, curclist_mstr, curcperiodd_item, curcperiodm_mtrl, en_mstr, invc_mstr, invct_table, is_mstr, its_mstr, loc_mstr, pl_mstr
- Event handlers: 8

### Module/master data/Item/Fabric/FPartNumberFabric.vb
- Method sample: DownloadSingleFile, ElseIf, End, FPartNumberFabric_Load, GetID_Local, Private, Public, before_save, delete_data, edit, edit_data, format_grid
- Table/entity sample: code_mstr, color_mstr, curclist_mstr, curcperiodd_item, curcperiodm_mtrl, en_mstr, invc_mstr, invct_table, is_mstr, its_mstr, loc_mstr, pl_mstr
- Event handlers: 8

### Module/Master Data/Item/Yarn/FPartNumberYarn.vb
- Method sample: ElseIf, End, ExportTemplateISBNToolStripMenuItem_Click, FPartNumberYarn_Load, GetID_Local, ImportISBNToolStripMenuItem_Click, Private, Public, before_save, delete_data, edit, edit_data
- Table/entity sample: code_mstr, color_mstr, curclist_mstr, curcperiodd_item, curcperiodm_mtrl, en_mstr, heater_mstr, intermingle_mstr, invc_mstr, invct_table, is_mstr, its_mstr
- Event handlers: 5

### Module/Master Data/Company/FSalesMove.vb
- Method sample: BtRetrieve_Click, End, FAccount_Load, Private, Public, before_save, cancel_data, ce_select_CheckedChanged, delete_data, edit_data, format_grid, get_sequel
- Table/entity sample: Local, Sales, ar, ar_mstr, arpay_payment, arpayd_det, arso_so, branch_mstr, cc_mstr, custom.soships_status, en_mstr, move_sales
- Event handlers: 9

### Module/master data/Item/Fabric/FGreigeMasterData.vb
- Method sample: ElseIf, End, FGreigeMasterData_Load, GenerateQRCode, Private, Public, SetCurrentQRCode, before_save, cancel_data, delete_data, edit, edit_data
- Table/entity sample: Public.grd_mstr, branch_mstr, cmaddr_mstr, code_mstr, codes_setting, dom_mstr, en_mstr, grd_mstr, grdd_det, loc_mstr, ptc_category, ptnr_mstr
- Event handlers: 3

### Module/Master Data/Item Sites/FFinalItemSetting.vb
- Method sample: ElseIf, End, FWcItemWaste_Load, Finalize, Private, Protected, Public, before_save, browse_data, cancel_data, delete_data, edit
- Table/entity sample: cc_mstr, ccr_restrc, dpt_mstr, en_mstr, pt_mstr, public.wcpt_final, wc_mstr, wcpt_final
- Event handlers: 10

### Module/Master Data/Company/FOutstandingMove.vb
- Method sample: BtRetrieve_Click, End, FAccount_Load, Private, Public, before_save, cancel_data, delete_data, edit_data, format_grid, get_sequel, gv_master_Click
- Table/entity sample: Local, ar, ar_mstr, arpay_payment, ars_ship, arso_so, branch_mstr, cc_mstr, code_mstr, en_mstr, out_outstanding_move, outd_customer
- Event handlers: 8

