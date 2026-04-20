# PARITY_DETAIL_PROCUREMENT_DESKTOP_V2019_TO_BLAZOR

Detail parity awal domain Procurement (desktop v2019 -> Blazor), berbasis file kandidat prioritas.


## Ringkasan

- Total file dianalisis: **18**

- Fokus transaksi: PR, PO, Receipt/Return, AP Invoice, AP Payment.


## File-level parity clues

### `distribution/control file/FControlFileDistribution.designer.vb`
- Transaction hint: Inspection, Purchase Order, Purchase Receipt, Purchase Requisition, Purchase Return
- Workflow/approval clues: Yes
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Data/entity sample: Inventory, Purchase, Sales

### `Module/Distribution/FControlFileDistribution.designer.vb`
- Transaction hint: Inspection, Purchase Order, Purchase Receipt, Purchase Requisition, Purchase Return
- Workflow/approval clues: Yes
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent
- Data/entity sample: Inventory, Purchase, Sales

### `Module/Manufacture/FWorkOrderReceiptReport.designer.vb`
- Transaction hint: Inspection, Purchase Receipt
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Manufacture/FWorkOrderReceiptReportRounding.designer.vb`
- Transaction hint: Inspection, Purchase Receipt
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Manufacture/FWorkOrderReceiptReportRounding.designer.vb`
- Transaction hint: Inspection, Purchase Receipt
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.designer.vb`
- Transaction hint: Inspection, Purchase Receipt
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.designer.vb`
- Transaction hint: Inspection, Purchase Receipt
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Manufacture/work order/report/FWorkOrderReceiptReport.designer.vb`
- Transaction hint: Inspection, Purchase Receipt
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `manufacture/work order/report/FWorkOrderReceiptReport.designer.vb`
- Transaction hint: Inspection, Purchase Receipt
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.vb`
- Transaction hint: Inspection
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: End, FWorkOrderReceiptReport_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor, load_wor_lf, load_wor_serial
- Data/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, loc_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr, qc_mstr

### `Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.vb`
- Transaction hint: Inspection
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: End, FWorkOrderReceiptReport_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor, load_wor_lf, load_wor_serial
- Data/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, loc_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr, qc_mstr

### `Module/Manufacture/work order/report/FWorkOrderReceiptReport.vb`
- Transaction hint: Inspection
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: End, FWorkOrderReceiptReport_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor, load_wor_lf, load_wor_serial
- Data/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, loc_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr, qc_mstr

### `manufacture/work order/report/FWorkOrderReceiptReport.vb`
- Transaction hint: Inspection
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: End, FWorkOrderReceiptReport_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor, load_wor_lf, load_wor_serial
- Data/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, loc_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr, qc_mstr

### `Module/Manufacture/FWorkOrderReceiptReportRounding.vb`
- Transaction hint: Inspection
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: End, FWorkOrderReceiptReportRounding_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor, load_wor_lf, load_wor_serial
- Data/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, loc_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr, qc_mstr

### `Module/Manufacture/FWorkOrderReceiptReportRounding.vb`
- Transaction hint: Inspection
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: End, FWorkOrderReceiptReportRounding_Load, Private, Public, format_grid, gv_view4_SelectionChanged, load_data_many, load_detail_serial, load_inspection_serial, load_wor, load_wor_lf, load_wor_serial
- Data/entity sample: ac_mstr, branch_mstr, cc_mstr, ccr_restrc, code_mstr, en_mstr, loc_mstr, pjc_mstr, pl_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr, qc_mstr

### `Module/Manufacture/03_Greige Inspection/FMendingProcess.designer.vb`
- Transaction hint: Inspection
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Manufacture/03_Greige Inspection/FInspectionGreige.designer.vb`
- Transaction hint: Inspection
- Workflow/approval clues: No/Low
- GL/journal clues: No/Low
- Method sample: Dispose, Friend, InitializeComponent

### `Module/Manufacture/03_Greige Inspection/FGreigeInspectionList.vb`
- Transaction hint: Inspection
- Workflow/approval clues: Yes
- GL/journal clues: No/Low
- Method sample: End, FGreigeInspectionList_Load, Private, Public, delete_data, edit_data, format_grid, get_single_location_id, gv_view2_RowCellStyle, gv_view2_RowStyle, insert_data, load_all
- Data/entity sample: branch_mstr, code_mstr, en_mstr, greigei_inspect, greigei_start_time, greigep_prod, loc_mstr, pt_mstr, ptcom_combo, ptd_design, ptnr_mstr, ptsq_quality, stockg_greige, tconfuserentity

## Gap checklist ke Blazor (next verification)

- Mapping form/menu Procurement desktop -> route/page Blazor per transaksi.

- Parity status flow: Draft -> Workflow -> Approved -> Cancel/Rollback.

- Parity posting: titik jurnal AP-related (invoice/payment) dan impact inventory.

- Parity dokumen referensi: PR->PO->Receipt->AP Invoice->AP Payment.
