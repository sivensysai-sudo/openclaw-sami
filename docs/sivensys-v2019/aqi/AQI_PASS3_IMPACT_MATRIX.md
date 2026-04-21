# AQI_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `AQI Solution/AQI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `AQI Solution/AQI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `AQI Solution/AQI.Project/Module/Basic Setup/XRRoutingApproval.designer.vb` | Yes | No/Low | - |
| 3 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoice.Designer.vb` | No/Low | No/Low | Qty, credit |
| 3 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 3 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/ds_invoice.Designer.vb` | Yes | Yes | Qty, credit |
| 3 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.Designer.vb` | Yes | No/Low | credit |
| 3 | `AQI Solution/AQI.Project/Module/Sales Order/XRSO.designer.vb` | No/Low | No/Low | Qty |
| 3 | `AQI Solution/AQI.Project/Module/Sales Order/XRSO.vb` | No/Low | No/Low | - |
| 3 | `AQI Solution/AQI.Project/Module/Sales Order/ds_so.Designer.vb` | No/Low | No/Low | Qty |
| 3 | `AQI Solution/AQI.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `AQI Solution/AQI.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `AQI Solution/AQI.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.designer.vb` | No/Low | No/Low | Shipment |
| 2 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/Module/Basic Setup/XRDocumentApprovalSub.designer.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/Module/Basic Setup/XRDocumentApprovalSub.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.Designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `AQI Solution/AQI.Project/Module/Sales Order/ds_so.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 2 | `AQI Solution/AQI.Project/__Browse References/FPOCustomerSearch.vb` | No/Low | Yes | Qty, Shipment, credit |
| 2 | `AQI Solution/AQI.Project/__Browse References/FPPNTypeSearch.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/__Browse References/FPackagingSearch.vb` | No/Low | No/Low | Shipment |
| 2 | `AQI Solution/AQI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 2 | `AQI Solution/AQI.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `AQI Solution/AQI.Project/__Browse References/FSalesOrderSearch.Designer.vb` | No/Low | No/Low | - |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 4 | `AQI Solution/AQI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `AQI Solution/AQI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `AQI Solution/AQI.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `AQI Solution/AQI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 2 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.designer.vb` | No/Low | No/Low | Shipment |
| 2 | `AQI Solution/AQI.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 2 | `AQI Solution/AQI.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `AQI Solution/AQI.Project/__Browse References/FPackagingSearch.vb` | No/Low | No/Low | Shipment |
| 2 | `AQI Solution/AQI.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `AQI Solution/AQI.Project/__Browse References/FUMSearch.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/ds_invoice.Designer.vb` | Yes | Yes | Qty, credit |
| 1 | `AQI Solution/AQI.Project/Module/Sales Order/ds_so.Designer.vb` | No/Low | No/Low | Qty |
| 1 | `AQI Solution/AQI.Project/__Browse References/FTaxClassSearch.vb` | No/Low | No/Low | - |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `AQI Solution/AQI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 5 | `AQI Solution/AQI.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `AQI Solution/AQI.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `AQI Solution/AQI.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.designer.vb` | No/Low | No/Low | Shipment |
| 4 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.vb` | No/Low | No/Low | - |
| 4 | `AQI Solution/AQI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `AQI Solution/AQI.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `AQI Solution/AQI.Project/__Browse References/FPackagingSearch.vb` | No/Low | No/Low | Shipment |
| 4 | `AQI Solution/AQI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 4 | `AQI Solution/AQI.Project/__Browse References/FUMSearch.vb` | No/Low | No/Low | - |
| 3 | `AQI Solution/AQI.Project/Module/___Function Helper/ModFunctionSpecial.vb` | No/Low | Yes | Qty, credit |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 1 | `AQI Solution/AQI.Project/Module/Basic Setup/frmExport.designer.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoice.Designer.vb` | No/Low | No/Low | Qty, credit |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoice.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDistLine2.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/ds_invoice.Designer.vb` | Yes | Yes | Qty, credit |
| 1 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.Designer.vb` | No/Low | No/Low | Shipment, credit |
| 1 | `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.Designer.vb` | Yes | No/Low | credit |
| 1 | `AQI Solution/AQI.Project/Module/Sales Order/ds_so.Designer.vb` | No/Low | No/Low | Qty |
| 1 | `AQI Solution/AQI.Project/__Browse References/FAccountSearch.Designer.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/__Browse References/FLocationSearch.Designer.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/__Browse References/FLotSerialSearch.designer.vb` | No/Low | No/Low | Qty |
| 1 | `AQI Solution/AQI.Project/__Browse References/FPOCustomerSearch.designer.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/__Browse References/FPOCustomerSearch.vb` | No/Low | Yes | Qty, Shipment, credit |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 4 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/ds_invoice.Designer.vb` | Yes | Yes | Qty, credit |
| 3 | `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `AQI Solution/AQI.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.designer.vb` | No/Low | No/Low | Shipment |
| 2 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoice.Designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoice.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDisc2.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Printout/XRInvoiceDistLine2.vb` | No/Low | No/Low | - |
| 2 | `AQI Solution/AQI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.Designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `AQI Solution/AQI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 2 | `AQI Solution/AQI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 2 | `AQI Solution/AQI.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 1 | `AQI Solution/AQI.Project/Module/___Function Helper/ModFunctionSpecial.vb` | No/Low | Yes | Qty, credit |
| 1 | `AQI Solution/AQI.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 1 | `AQI Solution/AQI.Project/__Browse References/FPartnerSearch.Designer.vb` | No/Low | No/Low | - |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `AQI Solution/AQI.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 5 | `AQI Solution/AQI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `AQI Solution/AQI.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `AQI Solution/AQI.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `AQI Solution/AQI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 2 | `AQI Solution/AQI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 2 | `AQI Solution/AQI.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `AQI Solution/AQI.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `AQI Solution/AQI.Project/__Browse References/FUMSearch.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.designer.vb` | No/Low | No/Low | Shipment |
| 1 | `AQI Solution/AQI.Project/Module/Basic Setup/FCodeSetting.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Basic Setup/XRRoutingApproval.designer.vb` | Yes | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Basic Setup/XRRoutingApproval.vb` | No/Low | No/Low | - |
| 1 | `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.Designer.vb` | Yes | No/Low | credit |
| 1 | `AQI Solution/AQI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 1 | `AQI Solution/AQI.Project/__Browse References/FPackagingSearch.vb` | No/Low | No/Low | Shipment |
