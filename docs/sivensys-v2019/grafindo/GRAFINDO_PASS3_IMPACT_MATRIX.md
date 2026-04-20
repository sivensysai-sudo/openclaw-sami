# GRAFINDO_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMP.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMPApproval.vb` | Yes | No/Low | Outstanding, Qty, Shipment, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/XRPOCustomerPrintOut.designer.vb` | Yes | No/Low | Qty, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturn.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnApproval.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FInventoryRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisition.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisitionApproval.vb` | Yes | No/Low | Qty |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARReportWithUnapprovalSOReturn.vb` | Yes | Yes | Outstanding, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval.vb` | Yes | Yes | credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval_Spv.vb` | Yes | Yes | credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Delete, Can't Cancel |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealizationApproval.vb` | Yes | Yes | Can't Cancel, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` | Yes | Yes | Can't Cancel, Outstanding, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecap.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Outstanding |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecapApproval.vb` | Yes | No/Low | Outstanding |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FRoutingApproval.vb` | Yes | No/Low | - |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMPApproval.designer.vb` | Yes | No/Low | credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnApproval.designer.vb` | Yes | No/Low | - |
| 4 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/__Browse References/FDRCRMemoSearch.vb` | Yes | Yes | Outstanding, Shipment |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARPaymentNoOtherAmount.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRCashInARPrint.designer.vb` | No/Low | No/Low | - |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRInvoice.designer.vb` | No/Low | No/Low | Qty, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Grafindo Solution/Grafindo.Project/Module/Financial/AP Invoice/FVoucher.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Delete, Can't Cancel |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementVoucher.vb` | Yes | Yes | Outstanding, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecapApproval.vb` | Yes | No/Low | Outstanding |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumberImport.vb` | No/Low | Yes | - |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturn.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 3 | `Grafindo Solution/Grafindo.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb` | No/Low | Yes | credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Address Taxes/FSalesPerson.vb` | No/Low | No/Low | credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumberImport.designer.vb` | No/Low | No/Low | - |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMP.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnApproval.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 2 | `Grafindo Solution/Grafindo.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 2 | `Grafindo Solution/Grafindo.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FInventoryRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.Designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.Designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisition.designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisition.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/XRRequisition.designer.vb` | No/Low | No/Low | Qty |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 5 | `Grafindo Solution/Grafindo.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Grafindo Solution/Grafindo.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FInventoryRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.Designer.vb` | Yes | No/Low | - |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.Designer.vb` | Yes | No/Low | - |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMP.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturn.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnApproval.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `Grafindo Solution/Grafindo.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FGeneratePackingList.vb` | No/Low | No/Low | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FPackingList.vb` | No/Low | No/Low | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRTransferIssuesPackingList.Designer.vb` | No/Low | No/Low | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRTransferIssuesPackingList_2.Designer.vb` | No/Low | No/Low | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRTransferIssuesPrint.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/XRTransferIssuesPrint_LOT.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FRoutingApproval.vb` | Yes | No/Low | - |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumberImport.vb` | No/Low | Yes | - |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FCopyData3.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSOShipmentReceive.Designer.vb` | No/Low | No/Low | Shipment |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturn.designer.vb` | No/Low | No/Low | Outstanding |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderShipment.Designer.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/ModFunctionSpecial.vb` | No/Low | Yes | Qty, credit |
| 3 | `Grafindo Solution/Grafindo.Project/__Browse References/FInventoryRequestSearch.vb` | No/Low | No/Low | Qty |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARReport.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 5 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FCopyData3.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FOutstandingMove.vb` | No/Low | No/Low | Outstanding, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AP Invoice/FPaymentManualChecks.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARBillStatement.designer.vb` | No/Low | No/Low | - |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARBillStatement.vb` | No/Low | No/Low | Outstanding, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARBillStatementWizard.vb` | No/Low | No/Low | Outstanding |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARPaymentNoOtherAmount.designer.vb` | No/Low | No/Low | - |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARPaymentNoOtherAmount.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARReportWithUnapprovalSOReturn.vb` | Yes | Yes | Outstanding, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRBillStatement.Designer.vb` | No/Low | No/Low | Outstanding |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRBillStatementAddress.Designer.vb` | No/Low | No/Low | Outstanding |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRCashInARPrint.designer.vb` | No/Low | No/Low | - |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FSalesMove.vb` | Yes | No/Low | Shipment |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMP.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturn.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnApproval.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Grafindo Solution/Grafindo.Project/Module/Smart Report/FARSmartReport.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/AP Invoice/FVoucher.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FARReport.designer.vb` | No/Low | No/Low | Outstanding, Over Due, Shipment |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/FDRCRMemo.Designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRInvoice.designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/AR Invoice/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb` | No/Low | Yes | credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecap.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Outstanding |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecapApproval.vb` | Yes | No/Low | Outstanding |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/XRPaymentRecap.designer.vb` | No/Low | No/Low | - |
| 2 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FOutstandingPOCustMove.vb` | Yes | No/Low | Outstanding, Qty, Shipment, credit |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Grafindo Solution/Grafindo.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 5 | `Grafindo Solution/Grafindo.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Grafindo Solution/Grafindo.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 2 | `Grafindo Solution/Grafindo.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 2 | `Grafindo Solution/Grafindo.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FInventoryRequest.Designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FInventoryRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.Designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssues.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.Designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Inventory Control/FTransferIssuesPackingList.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisition.designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/FRequisition.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/XRRequisition.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Distribution/Requisition/XRRequisitionCost.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Print Out/XRDisbursementRequestPrintPng.designer.vb` | No/Low | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementApproval_Spv.vb` | Yes | Yes | credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Delete, Can't Cancel |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` | Yes | Yes | Can't Cancel, Outstanding, credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Financial/Payment Recap/FPaymentRecap.Designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FRoutingApproval.designer.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Company/FRoutingApproval.vb` | Yes | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumber.designer.vb` | No/Low | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumberImport.designer.vb` | No/Low | No/Low | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Master Data/Item Sites/FPartNumberImport.vb` | No/Low | Yes | - |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustMassCancel.vb` | Yes | No/Low | credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMP.designer.vb` | Yes | No/Low | credit |
| 1 | `Grafindo Solution/Grafindo.Project/Module/Sales Order/PO Customer/FPOCustomerGMP.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
