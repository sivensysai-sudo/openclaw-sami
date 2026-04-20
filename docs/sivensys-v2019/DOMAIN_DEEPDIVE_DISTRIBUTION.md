# DOMAIN_DEEPDIVE_DISTRIBUTION - SIVENSYS ERP Desktop v2019

Auto-generated deep dive awal dari source code.

Total file terdeteksi domain ini: **597**

## Top files (indikasi kompleksitas)

- `Module/Distribution/Purchase Order/Print Out/ds_po.Designer.vb` (Subdomain: Purchase Order, methods: 191, table refs: 18)
- `Module/Distribution/Purchase Order/ds_po_printout.designer.vb` (Subdomain: Purchase Order, methods: 162, table refs: 15)
- `Module/Distribution/Requisition/ds_req_sys.designer.vb` (Subdomain: Requisition, methods: 157, table refs: 9)
- `Module/Distribution/Inventory Control/ds_transfer_printout_sys.Designer.vb` (Subdomain: Inventory Control, methods: 151, table refs: 11)
- `Module/Distribution/Inventory/Print Out/ds_inventory_request.Designer.vb` (Subdomain: Inventory, methods: 142, table refs: 11)
- `Module/Distribution/Purchase Order/ds_rcv_printout.Designer.vb` (Subdomain: Purchase Order, methods: 127, table refs: 17)
- `Module/Distribution/Purchase Order/FPurchaseOrder.vb` (Subdomain: Purchase Order, methods: 75, table refs: 66)
- `Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` (Subdomain: Purchase Order, methods: 74, table refs: 65)
- `Module/Distribution/Procurement/Transaction/FPurchaseOrder.vb` (Subdomain: Procurement, methods: 75, table refs: 64)
- `Module/Distribution/Inventory/Print Out/ds_slitting_lot.Designer.vb` (Subdomain: Inventory, methods: 115, table refs: 18)
- `Module/Distribution/Inventory/Print Out/ds_slitting.Designer.vb` (Subdomain: Inventory, methods: 109, table refs: 15)
- `Module/Distribution/Transaction/FInventorySlitting_new_WIP2.vb` (Subdomain: Transaction, methods: 71, table refs: 50)
- `Module/Distribution/Inventory/Transaction/FInventorySlitting_new_WIP.vb` (Subdomain: Inventory, methods: 71, table refs: 50)
- `Module/Distribution/Inventory/Transaction/FInventorySlitting_new.vb` (Subdomain: Inventory, methods: 70, table refs: 48)
- `Module/Distribution/Inventory/Transaction/FInventorySlitting_WIP.vb` (Subdomain: Inventory, methods: 69, table refs: 48)
- `Module/Distribution/Inventory/Transaction/FInventorySlitting.vb` (Subdomain: Inventory, methods: 69, table refs: 47)
- `Module/Distribution/Inventory/Transaction/FInventoryRewinding2.vb` (Subdomain: Inventory, methods: 65, table refs: 47)
- `Module/Distribution/Inventory/Transaction/FInventoryRewinding.vb` (Subdomain: Inventory, methods: 65, table refs: 47)
- `Module/Distribution/Inventory/Transaction/FInventoryAssemble2.vb` (Subdomain: Inventory, methods: 59, table refs: 45)
- `Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale_250612.vb` (Subdomain: Procurement, methods: 51, table refs: 49)
- `Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale.vb` (Subdomain: Procurement, methods: 50, table refs: 49)
- `Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt_new.vb` (Subdomain: Purchase Order, methods: 51, table refs: 47)
- `Module/Distribution/Inventory Control/FTransferIssuesPackingList.vb` (Subdomain: Inventory Control, methods: 60, table refs: 37)
- `Module/Distribution/Inventory/Transaction/FTransferIssues.vb` (Subdomain: Inventory, methods: 57, table refs: 37)
- `Module/Distribution/Inventory/Transaction/FSparepartIssues.vb` (Subdomain: Inventory, methods: 55, table refs: 38)

## Method & Data clues

### Module/Distribution/Purchase Order/Print Out/ds_po.Designer.vb
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot, GetRowType, GetSchemaSerializable
- Table/entity sample: Order, all, branch_mstr, cc_mstr, cmaddr_mstr, cmt_mstr, code, code_mstr, cu_ms, en, pod, pt_mstr
- Keyword hint: inv, po, so, ap, ar

### Module/Distribution/Purchase Order/ds_po_printout.designer.vb
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBypt_code, GetData, GetEnumerator, GetRealUpdatedRows, GetRowType
- Table/entity sample: Order, all, cmaddr_, code_mstr, cu_mstr, pjc_mstr, po_mstr, pod_det, pt_mstr, ptnr_m, ptnra_addr, ptnrac_cntc
- Keyword hint: inv, po, so, ap, ar

### Module/Distribution/Requisition/ds_req_sys.designer.vb
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot, GetRowType, GetSchemaSerializable
- Table/entity sample: Order, all, cmaddr_mstr, code_mstr, p, pt_mstr, reqd_det, rows, scenarios
- Keyword hint: inv, po, so, ap, ar

### Module/Distribution/Inventory Control/ds_transfer_printout_sys.Designer.vb
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot, GetRowType, GetSchemaSerializable
- Table/entity sample: Order, all, cmad, cmaddr_mstr, code_mstr, loc_mstr, pt_mstr, ptsfrd_det, rows, scenarios, tranaprvd_dok
- Keyword hint: inv, po, so, ap, ar

### Module/Distribution/Inventory/Print Out/ds_inventory_request.Designer.vb
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, FindBycode_code, GetData, GetEnumerator, GetRealUpdatedRows, GetRowType
- Table/entity sample: Order, all, cmaddr_mstr, code_mstr, en_mstr, pb_mstr, pbd_de, pt_mstr, rows, scenarios, tranaprvd_dok
- Keyword hint: inv, po, so, ap, ar

### Module/Distribution/Purchase Order/ds_rcv_printout.Designer.vb
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot, GetRowType, GetSchemaSerializable
- Table/entity sample: Order, all, cmaddr_mstr, code_m, code_mstr, cu_mstr, en_mstr, loc_mstr, po_mstr, pod_det, pt_mstr, ptnr_mstr
- Keyword hint: inv, po, so, ap, ar

### Module/Distribution/Purchase Order/FPurchaseOrder.vb
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public, approve, approve_line
- Table/entity sample: History, Po, Purchase, Table, ac_mstr, ass_mstr, bk_mstr, boqs, boqs_stand, branch_mstr, budget, cc_mstr
- Keyword hint: wf_mstr, glt_det, inv, po, so, ap, ar, receipt

### Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public, approve, approve_line
- Table/entity sample: History, Po, Purchase, Table, ac_mstr, ass_mstr, bk_mstr, boqs, boqs_stand, branch_mstr, budget, cc_mstr
- Keyword hint: wf_mstr, glt_det, inv, po, so, ap, ar, receipt

### Module/Distribution/Procurement/Transaction/FPurchaseOrder.vb
- Method sample: Else, ElseIf, End, FPurchaseOrder_Load, GetIDMax, GetMaxLine, ImportFromExcel, PasteCommentToolStripMenuItem_Click, Private, Public, approve, approve_line
- Table/entity sample: History, LATERAL, Po, Table, ac_mstr, ass_mstr, bk_mstr, boqs, boqs_stand, branch_mstr, budget, cc_mstr
- Keyword hint: wf_mstr, glt_det, inv, po, so, ap, ar, shipment, receipt

### Module/Distribution/Inventory/Print Out/ds_slitting_lot.Designer.vb
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot, GetRowType, GetSchemaSerializable
- Table/entity sample: Order, all, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, en_mstr, loc_mstr, mch_mstr, pt_mstr, riub, riubd_det
- Keyword hint: inv, po, so, ap, ar

### Module/Distribution/Inventory/Print Out/ds_slitting.Designer.vb
- Method sample: AddDataTable1Row, Clone, Compare, CreateInstance, DataTable1RowChangeEventHandler, End, Fill, GetData, GetRealUpdatedRows, GetRoot, GetRowType, GetSchemaSerializable
- Table/entity sample: Order, all, branch_mstr, cc_mstr, cmaddr_mstr, code_mstr, loc_mstr, pt_mstr, riub_mstr, riubd_det, rows, scenarios
- Keyword hint: inv, po, so, ap, ar

### Module/Distribution/Transaction/FInventorySlitting_new_WIP2.vb
- Method sample: Else, ElseIf, End, FInventorySlitting_new_WIP2_Load, Private, Public, before_delete, before_save, browse_data, browse_data_serial, browse_data_serial_header, browse_data_waste
- Table/entity sample: History, Table, branch_mstr, cc_mstr, ccr_restrc, cmaddr_mstr, code_mstr, codes_setting, color_mstr, cost, cs_mstr, custom.userl_loc_slitting
- Keyword hint: insert_glt, glt_det, inv, po, so, ap, ar, receipt
