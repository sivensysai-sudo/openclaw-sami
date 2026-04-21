# ASVIA_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseOrderPrintOut.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoice.Designer.vb` | No/Low | No/Low | Qty, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine.designer.vb` | No/Low | No/Low | credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/ds_invoice.Designer.vb` | Yes | Yes | Qty, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRDO.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRDO.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRDOSet.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRDOSet.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSO.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSO.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCash.designer.vb` | No/Low | No/Low | Qty, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCash.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCashDisc2.designer.vb` | No/Low | No/Low | Qty, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCashDisc2.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOSet.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOSet.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSO_LOT.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSO_LOT.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.Designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.vb` | No/Low | No/Low | Shipment |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrintPackingList.Designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrintPackingList.vb` | No/Low | No/Low | Shipment |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseReceipt.designer.vb` | No/Low | No/Low | - |
| 4 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptPrint.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Asvia Solution/ASVIA.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptPrint.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber_npgsql.vb` | No/Low | Yes | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FPurchaseReceiptScaleSearch.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/DS_POReceiptScale.Designer.vb` | No/Low | No/Low | Qty |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.Designer.vb` | Yes | No/Low | credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseOrderPrintOut.Designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseOrderPrintOut.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptScalePrint.Designer.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/XRPurchaseReceiptScalePrint.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/ds_po_printout.designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/ds_po_printout.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Import Data/FPartNumberImport.designer.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Import Data/FPartNumberImport.vb` | No/Low | Yes | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FPackagingSearch.vb` | No/Low | No/Low | Shipment |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 5 | `Asvia Solution/ASVIA.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Asvia Solution/ASVIA.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Asvia Solution/ASVIA.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `Asvia Solution/ASVIA.Project/__Browse References/FPackagingSearch.vb` | No/Low | No/Low | Shipment |
| 4 | `Asvia Solution/ASVIA.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 4 | `Asvia Solution/ASVIA.Project/__Browse References/FProjectAccountSearch.vb` | No/Low | No/Low | Qty |
| 4 | `Asvia Solution/ASVIA.Project/__Browse References/FUMSearch.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber_npgsql.vb` | No/Low | Yes | Qty |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FDeliveryOrder.Designer.vb` | No/Low | No/Low | - |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FDeliveryOrder.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrderShipment.Designer.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/ModFunctionSpecial.vb` | No/Low | Yes | Qty, credit |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FInventoryRequestSearch.vb` | No/Low | No/Low | Qty |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/DS_POReceiptScale.Designer.vb` | No/Low | No/Low | Qty |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseReceipt.designer.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Import Data/FPartNumberImport.designer.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Import Data/FPartNumberImport.vb` | No/Low | Yes | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber_npgsql.designer.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FDOSearch.vb` | No/Low | No/Low | Qty, Shipment |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 4 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.Designer.vb` | No/Low | No/Low | - |
| 4 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, credit |
| 4 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/ds_invoice.Designer.vb` | Yes | Yes | Qty, credit |
| 3 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FInvoiceSearch.vb` | No/Low | No/Low | Outstanding |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FNotaSearch.vb` | No/Low | Yes | Outstanding |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoice.Designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoice.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine.designer.vb` | No/Low | No/Low | credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.Designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCashDisc2.designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Print Out/XRSOCashDisc2.vb` | No/Low | No/Low | - |
| 2 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FDRCRMemoSearch.vb` | No/Low | Yes | Outstanding, Shipment |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 1 | `Asvia Solution/ASVIA.Project/Module/Financial/Account Receiveable/Print Out/ds_invoice2.Designer.vb` | No/Low | No/Low | - |
| 1 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 1 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber_npgsql.vb` | No/Low | Yes | Qty |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Asvia Solution/ASVIA.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 5 | `Asvia Solution/ASVIA.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `Asvia Solution/ASVIA.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FProjectAccountSearch.vb` | No/Low | No/Low | Qty |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FProjectSearch.vb` | No/Low | No/Low | Outstanding, Qty, credit |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Asvia Solution/ASVIA.Project/__Browse References/FUMSearch.vb` | No/Low | No/Low | - |
| 1 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.Designer.vb` | Yes | No/Low | credit |
| 1 | `Asvia Solution/ASVIA.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 1 | `Asvia Solution/ASVIA.Project/Module/Import Data/FPartNumberImport.designer.vb` | No/Low | No/Low | - |
| 1 | `Asvia Solution/ASVIA.Project/Module/Import Data/FPartNumberImport.vb` | No/Low | Yes | - |
| 1 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb` | No/Low | No/Low | - |
| 1 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 1 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber_npgsql.designer.vb` | No/Low | No/Low | - |
| 1 | `Asvia Solution/ASVIA.Project/Module/Master Data/Item Sites/FPartNumber_npgsql.vb` | No/Low | Yes | Qty |
| 1 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.Designer.vb` | Yes | No/Low | credit |
| 1 | `Asvia Solution/ASVIA.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 1 | `Asvia Solution/ASVIA.Project/__Browse References/FEmpSearch.vb` | No/Low | No/Low | - |
| 1 | `Asvia Solution/ASVIA.Project/__Browse References/FPackagingSearch.vb` | No/Low | No/Low | Shipment |
| 1 | `Asvia Solution/ASVIA.Project/__Browse References/FUserApprovalSearch.vb` | Yes | No/Low | - |
