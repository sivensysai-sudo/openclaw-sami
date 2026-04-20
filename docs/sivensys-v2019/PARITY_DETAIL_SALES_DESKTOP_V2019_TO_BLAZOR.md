# PARITY_DETAIL_SALES_DESKTOP_V2019_TO_BLAZOR

Detail parity awal domain Sales (desktop v2019 -> Blazor), berbasis file kandidat prioritas.


## Ringkasan

- Total file dianalisis: **15**

- Fokus transaksi: SO, Shipment/DO, AR Invoice, AR Payment (jika terdeteksi).


## File-level parity clues

### `Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `Module/Financial And Acounting/Account Receiveable/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `Module/Sales Order/Commission/FComsInternal.vb`
- Transaction hint: Shipment
- Workflow/approval clues: Yes
- GL/journal clues: No/Low
- Method sample: ElseIf, End, FComsInternal_Load, Private, Public, Sub, before_save, cancel_data, ce_select_all_CheckedChanged, comsales_en_id_EditValueChanged, delete_data, edit_data
- Data/entity sample: ar_mstr, arpay_payment, arpayd_det, ars_ship, branch_mstr, cmsrule_mstr, code_mstr, comexr_rate, comsales_mstr, comsalesd_det, comsalesdd_det, cu_mstr

### `Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `Module/Financial/AR Invoice/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `Module/Financial/AR Invoice/FDRCRMemoTax.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, codes_setting, cu_mstr

### `Module/financial/account receiveable/transaction/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `financial/account receiveable/transaction/FDRCRMemo.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, arnota_mstr, arnotad_det, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr

### `sales order/control file/FControlFileSO.Designer.vb`
- Transaction hint: AR Invoice, Consignment, Delivery Order, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Data/entity sample: Location, PO

### `financial/account receiveable/transaction/FDRCRMemoTax.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, codes_setting, cu_mstr

### `Module/Financial/AR Invoice/FDRCRMemoTax.vb`
- Transaction hint: AR Invoice, Sales Order, Shipment
- Workflow/approval clues: Yes
- GL/journal clues: Yes
- Method sample: Else, ElseIf, End, FDRCRMemo_Load, Private, Public, ap_cu_id_EditValueChanged, ap_en_id_EditValueChanged, ap_ptnr_id_EditValueChanged, ar_branch_id_EditValueChanged, ar_credit_term_EditValueChanged, ar_eff_date_EditValueChanged
- Data/entity sample: Prepayment, Table, ac_mstr, ar_mstr, ard_dist, ars_ship, bk_mstr, branch_mstr, cmaddr_mstr, code_mstr, codes_setting, cu_mstr

## Gap checklist ke Blazor (next verification)

- Mapping screen/menu Sales desktop -> route/page Blazor per transaksi.

- Status flow parity: Draft -> Workflow -> Approved -> Cancel/Rollback.

- Posting parity: titik jurnal mana yang dibuat saat Approval vs saat transaksi turunan.

- Data parity: key field header/detail dan referensi antar dokumen (SO/DO/Invoice/Payment).
