# STARCOM_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Starcom Solution/Starcom.Project/Module/Master Data/Company/FRoutingApproval.vb` | Yes | Yes | credit |
| 5 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Starcom Solution/Starcom.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Outstanding, Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Boq/FBillOfQuantity.vb` | Yes | No/Low | Can't Cancel, Qty |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/FRequisition.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetApproval.vb` | Yes | Yes | Qty |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgeting.vb` | Yes | Yes | Can't Delete |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FProjectBudgetGenerate.vb` | Yes | Yes | Can't Delete, Qty |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval.vb` | Yes | Yes | credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb` | Yes | Yes | Can't Cancel, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` | Yes | Yes | Can't Cancel, Outstanding, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Master Data/Company/FDocumentApproval.vb` | No/Low | No/Low | - |
| 4 | `Starcom Solution/Starcom.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.vb` | Yes | No/Low | - |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine.designer.vb` | No/Low | No/Low | credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetApproval.designer.vb` | Yes | No/Low | - |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.vb` | Yes | No/Low | - |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.vb` | Yes | No/Low | - |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Report/FCashManagementReport2.vb` | Yes | Yes | Outstanding |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FCashIn.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb` | Yes | Yes | Can't Delete, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajak2.vb` | Yes | No/Low | Can't Cancel, Qty |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.vb` | Yes | No/Low | Can't Cancel, credit |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 5 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FVoucher.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.Designer.vb` | No/Low | No/Low | - |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBugdetProjectReport.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Outstanding, Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Starcom Solution/Starcom.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Print Out/XRAPInvoice.designer.vb` | No/Low | No/Low | Outstanding, Qty, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Print Out/XRAPInvoiceNoPO.designer.vb` | No/Low | No/Low | Outstanding, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Report/FAPInvoiceReport.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb` | Yes | Yes | Can't Delete, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Starcom Solution/Starcom.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.Designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.vb` | Yes | No/Low | - |
| 2 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.Designer.vb` | Yes | No/Low | credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.vb` | No/Low | No/Low | - |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb` | No/Low | Yes | credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Master Data/Company/FRoutingApproval.vb` | Yes | Yes | credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 2 | `Starcom Solution/Starcom.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 2 | `Starcom Solution/Starcom.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Starcom Solution/Starcom.Project/__Browse References/FProjectAccountSearch.vb` | No/Low | No/Low | Qty |
| 2 | `Starcom Solution/Starcom.Project/__Browse References/FPurchaseReceiptScaleSearch.Designer.vb` | No/Low | No/Low | - |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Starcom Solution/Starcom.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Outstanding, Qty, credit |
| 5 | `Starcom Solution/Starcom.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Starcom Solution/Starcom.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/FInventoryIssues.Designer.vb` | No/Low | No/Low | - |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/FInventoryIssues.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Master Data/Company/FRoutingApproval.vb` | Yes | Yes | credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, Shipment, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Starcom Solution/Starcom.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `Starcom Solution/Starcom.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 4 | `Starcom Solution/Starcom.Project/__Browse References/FProjectAccountSearch.vb` | No/Low | No/Low | Qty |
| 3 | `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/Report/FInvReportByDate.vb` | No/Low | No/Low | Qty |
| 3 | `Starcom Solution/Starcom.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.designer.vb` | No/Low | No/Low | Outstanding, Shipment |
| 3 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderShipment.Designer.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/___Function Helper/ModFunctionSpecial.vb` | No/Low | Yes | Qty, credit |
| 3 | `Starcom Solution/Starcom.Project/__Browse References/FInventoryRequestSearch.vb` | No/Low | No/Low | Qty |
| 2 | `Starcom Solution/Starcom.Project/Module/Distribution/Boq/FBillOfQuantity.vb` | Yes | No/Low | Can't Cancel, Qty |
| 2 | `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/Report/FInvReportByDate.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.Designer.vb` | No/Low | No/Low | - |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.vb` | No/Low | Yes | Outstanding, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FVoucher.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb` | No/Low | Yes | Outstanding, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgetClosing.designer.vb` | No/Low | No/Low | - |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBugdetProjectReport.designer.vb` | No/Low | No/Low | - |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.Designer.vb` | No/Low | No/Low | - |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb` | No/Low | Yes | Outstanding, credit |
| 4 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Report/FARPaymentReport.vb` | No/Low | Yes | - |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajak2.vb` | Yes | No/Low | Can't Cancel, Qty |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.vb` | Yes | No/Low | Can't Cancel, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/FFakturPajakPrint.vb` | No/Low | No/Low | credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Financial/Tax Invoice/ds_ti.Designer.vb` | No/Low | No/Low | credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, Shipment, credit |
| 3 | `Starcom Solution/Starcom.Project/__Browse References/FInvoiceSearch.vb` | No/Low | No/Low | Outstanding |
| 3 | `Starcom Solution/Starcom.Project/__Browse References/FNotaSearch.vb` | No/Low | Yes | Outstanding |
| 3 | `Starcom Solution/Starcom.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Print Out/XRAPInvoiceNoPO.designer.vb` | No/Low | No/Low | Outstanding, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Payable/Transaction/FVoucher.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDisc2.vb` | No/Low | No/Low | - |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine.designer.vb` | No/Low | No/Low | credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Print Out/XRSubInvoice.Designer.vb` | No/Low | No/Low | - |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Report/FARPaymentReport.designer.vb` | No/Low | No/Low | - |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.Designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgeting.designer.vb` | No/Low | No/Low | - |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` | Yes | Yes | Can't Cancel, Outstanding, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb` | Yes | Yes | Can't Delete, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb` | No/Low | Yes | credit |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Starcom Solution/Starcom.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 5 | `Starcom Solution/Starcom.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Starcom Solution/Starcom.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Starcom Solution/Starcom.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Outstanding, Qty, credit |
| 2 | `Starcom Solution/Starcom.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 2 | `Starcom Solution/Starcom.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `Starcom Solution/Starcom.Project/__Browse References/FProjectAccountSearch.vb` | No/Low | No/Low | Qty |
| 2 | `Starcom Solution/Starcom.Project/__Browse References/FProjectSearch.vb` | No/Low | No/Low | Outstanding, Qty, credit |
| 2 | `Starcom Solution/Starcom.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Boq/FBillOfQuantity.designer.vb` | Yes | No/Low | - |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Boq/FBillOfQuantity.vb` | Yes | No/Low | Can't Cancel, Qty |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/Report/FInvReportByDate.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Inventory Control/Report/FInvReportByDate.vb` | No/Low | No/Low | Qty |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.Designer.vb` | Yes | No/Low | credit |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/FRequisition.Designer.vb` | Yes | No/Low | - |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/FRequisition.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/Print Out/XRRequisition.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Starcom Solution/Starcom.Project/Module/Distribution/Requisition/Print Out/XRRequisitionCost.Designer.vb` | No/Low | No/Low | Qty |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FBudgeting.vb` | Yes | Yes | Can't Delete |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FProjectBudgetGenerate.designer.vb` | Yes | No/Low | - |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Budget/FProjectBudgetGenerate.vb` | Yes | Yes | Can't Delete, Qty |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.designer.vb` | No/Low | No/Low | - |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRealizationPrintPng.vb` | Yes | No/Low | - |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.designer.vb` | No/Low | No/Low | - |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.vb` | Yes | No/Low | - |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.designer.vb` | Yes | No/Low | - |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, credit |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb` | Yes | Yes | Can't Cancel, credit |
| 1 | `Starcom Solution/Starcom.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.designer.vb` | Yes | No/Low | - |
