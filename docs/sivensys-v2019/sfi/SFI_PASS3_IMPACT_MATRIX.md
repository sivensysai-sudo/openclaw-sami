# SFI_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SFI Solution/SFI.Project/Module/Master Data/FCustomer.vb` | Yes | Yes | Can't Cancel, credit |
| 5 | `SFI Solution/SFI.Project/Module/Master Data/FCustomerApproval.vb` | Yes | Yes | credit |
| 5 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `SFI Solution/SFI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrderApproval.vb` | Yes | Yes | Outstanding, Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.vb` | Yes | Yes | Can't Save, Can't Delete, Outstanding, credit |
| 4 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Cancel |
| 4 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb` | Yes | Yes | credit |
| 4 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` | Yes | Yes | Can't Cancel, Outstanding, credit |
| 4 | `SFI Solution/SFI.Project/Module/Master Data/FCustomer.designer.vb` | Yes | No/Low | credit |
| 4 | `SFI Solution/SFI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrderApproval.designer.vb` | Yes | No/Low | - |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/FDRCRMemoPrint.vb` | No/Low | Yes | Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRCashInARPrint.designer.vb` | No/Low | No/Low | - |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2_a5.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.vb` | Yes | No/Low | - |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.vb` | Yes | No/Low | - |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak_v1.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrder.vb` | No/Low | Yes | Can't Delete, Can't Cancel, Outstanding, Qty |
| 3 | `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrder.Designer.vb` | Yes | No/Low | credit |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/Print Out/XRSO.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/Print Out/XRSO_LOT.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/Print Out/XRSalesOrderShipmentPrint.Designer.vb` | No/Low | No/Low | Qty, Shipment, credit |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseReturn.Designer.vb` | No/Low | No/Low | - |
| 4 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseReturn.vb` | No/Low | Yes | Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Distribution/Qc/FQualityControl.vb` | No/Low | Yes | Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `SFI Solution/SFI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 4 | `SFI Solution/SFI.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrderApproval.vb` | Yes | Yes | Outstanding, Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/XRPurchaseReturnPrint.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Cancel |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb` | No/Low | Yes | - |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderReceiptReportRounding.vb` | No/Low | Yes | Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumberImport.vb` | No/Low | Yes | - |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrder.Designer.vb` | Yes | No/Low | credit |
| 2 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/XRPurchaseOrderPrintOut.designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `SFI Solution/SFI.Project/Module/Distribution/Qc/FQualityControl.designer.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Report/Grid/FGeneralLedgerCashReportPerUserBank.vb` | No/Low | Yes | credit |
| 2 | `SFI Solution/SFI.Project/Module/Manufacture/Control File/FControlFileManufacture.designer.vb` | No/Low | Yes | Qty |
| 2 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderReceiptReport.designer.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderReceiptReportRounding.designer.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumberImport.designer.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 2 | `SFI Solution/SFI.Project/Module/Sales Order/Report/FSalesOrderReport.vb` | Yes | No/Low | Outstanding, Qty, Shipment, credit |
| 2 | `SFI Solution/SFI.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 2 | `SFI Solution/SFI.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SFI Solution/SFI.Project/Module/Manufacture/FWOReceipt.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 5 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `SFI Solution/SFI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 5 | `SFI Solution/SFI.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `SFI Solution/SFI.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `SFI Solution/SFI.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseReturn.vb` | No/Low | Yes | Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Distribution/Qc/FQualityControl.vb` | No/Low | Yes | Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/Control File/FControlFileManufacture.designer.vb` | No/Low | Yes | Qty |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryIssues.designer.vb` | No/Low | No/Low | - |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryIssues.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderIssue.vb` | No/Low | No/Low | Qty |
| 4 | `SFI Solution/SFI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `SFI Solution/SFI.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `SFI Solution/SFI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 4 | `SFI Solution/SFI.Project/__Browse References/FProjectAccountSearch.vb` | No/Low | No/Low | Qty |
| 4 | `SFI Solution/SFI.Project/__Browse References/FUMSearch.vb` | No/Low | No/Low | - |
| 4 | `SFI Solution/SFI.Project/__Browse References/FWOSearch.vb` | No/Low | Yes | Outstanding, Qty |
| 3 | `SFI Solution/SFI.Project/Module/Distribution/Inventory/Report/FInvReportByDate.vb` | No/Low | No/Low | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryReceipts.designer.vb` | No/Low | No/Low | - |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWIPReturn.vb` | No/Low | Yes | Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrder.vb` | No/Low | Yes | Can't Delete, Can't Cancel, Outstanding, Qty |
| 3 | `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Master Data/Item Sites/FPartNumberImport.vb` | No/Low | Yes | - |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrderShipment.Designer.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/Module/___Function Helper/ModFunctionSpecial.vb` | No/Low | Yes | Qty, credit |
| 2 | `SFI Solution/SFI.Project/Module/Distribution/Inventory/Report/FInvReportByDate.designer.vb` | No/Low | No/Low | Qty |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 4 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.Designer.vb` | No/Low | No/Low | - |
| 4 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.vb` | Yes | Yes | Can't Save, Can't Delete, Outstanding, credit |
| 4 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/FDRCRMemoPrint.vb` | No/Low | Yes | Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRCashInARPrint.designer.vb` | No/Low | No/Low | - |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajakPrint.vb` | No/Low | No/Low | credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak_v1.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/ds_ti.Designer.vb` | No/Low | No/Low | credit |
| 3 | `SFI Solution/SFI.Project/Module/Sales Order/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `SFI Solution/SFI.Project/__Browse References/FInvoiceSearch.vb` | No/Low | No/Low | Outstanding |
| 3 | `SFI Solution/SFI.Project/__Browse References/FNotaSearch.vb` | No/Low | Yes | Outstanding |
| 3 | `SFI Solution/SFI.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 2 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseOrderApproval.vb` | Yes | Yes | Outstanding, Qty, credit |
| 2 | `SFI Solution/SFI.Project/Module/Distribution/Purchase Order/FPurchaseReturn.vb` | No/Low | Yes | Qty, credit |
| 2 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/FDRCRMemoPrint.designer.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 2 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2_a5.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 2 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 2 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Print Out/ds_invoice2.Designer.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.Designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Report/Grid/FGeneralLedgerCashReportPerUserBank.vb` | No/Low | Yes | credit |
| 2 | `SFI Solution/SFI.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` | Yes | Yes | Can't Cancel, Outstanding, credit |
| 2 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/FFakturPajak.designer.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.designer.vb` | No/Low | No/Low | Qty |
| 2 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.designer.vb` | No/Low | No/Low | Qty |
| 2 | `SFI Solution/SFI.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.vb` | No/Low | No/Low | - |
| 2 | `SFI Solution/SFI.Project/Module/Master Data/FChangeStatusCustomer.vb` | No/Low | Yes | credit |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SFI Solution/SFI.Project/Module/Manufacture/FWORouteMaintenance.vb` | No/Low | Yes | Qty |
| 5 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrder.vb` | No/Low | Yes | Can't Delete, Can't Cancel, Outstanding, Qty |
| 5 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderIssue.vb` | No/Low | No/Low | Qty |
| 5 | `SFI Solution/SFI.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 5 | `SFI Solution/SFI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/Control File/FControlFileManufacture.designer.vb` | No/Low | Yes | Qty |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/Control File/FControlFileManufacture.vb` | No/Low | Yes | Qty |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWOLaborFeedbackAll.vb` | No/Low | Yes | Can't Delete, Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrder.designer.vb` | No/Low | No/Low | Qty |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderIssue.designer.vb` | No/Low | No/Low | Qty |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderIssueReportRounding.vb` | No/Low | No/Low | Qty |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderReceiptReportRounding.vb` | No/Low | Yes | Qty, credit |
| 4 | `SFI Solution/SFI.Project/Module/Manufacture/Routing and Work Center/FRouting.vb` | No/Low | Yes | Qty |
| 4 | `SFI Solution/SFI.Project/__Browse References/FWOSearch.vb` | No/Low | Yes | Outstanding, Qty |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FUpdateCOGSWIPWOReceipt.vb` | No/Low | No/Low | - |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryIssues.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWIPInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWIPReturn.vb` | No/Low | Yes | Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWOMaterialRequest.vb` | No/Low | No/Low | Can't Delete, Qty |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWOReceipt.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWOReceipt.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWOReceiptGrade.vb` | No/Low | No/Low | Outstanding, Qty |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWORouteMaintenance.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SFI Solution/SFI.Project/Module/Manufacture/FWorkOrderReceiptReportRounding.designer.vb` | No/Low | No/Low | - |
| 3 | `SFI Solution/SFI.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `SFI Solution/SFI.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `SFI Solution/SFI.Project/__Browse References/FWOMaterialRequestSearch.vb` | No/Low | No/Low | Qty |
| 2 | `SFI Solution/SFI.Project/Module/Financial/General Ledger/FGenerateJournalWOCompIssues.vb` | No/Low | Yes | Qty, credit |
| 2 | `SFI Solution/SFI.Project/Module/Financial/General Ledger/FGenerateJournalWOReceipt.vb` | No/Low | Yes | Qty, credit |
| 2 | `SFI Solution/SFI.Project/Module/Manufacture/FUpdateCOGSWIPWOReceipt.designer.vb` | No/Low | No/Low | - |
