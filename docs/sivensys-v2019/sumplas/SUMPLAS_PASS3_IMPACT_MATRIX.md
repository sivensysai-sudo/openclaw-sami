# SUMPLAS_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 5 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGift.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Qty, credit |
| 5 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGiftRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 5 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGiftRequestApproval.vb` | Yes | No/Low | Outstanding, Qty |
| 5 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | Yes | Yes | Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit |
| 5 | `Sumplas Solution/Sumplas.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Cancel |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` | Yes | Yes | Can't Cancel, Outstanding, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGiftRequestApproval.designer.vb` | Yes | No/Low | - |
| 4 | `Sumplas Solution/Sumplas.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvRec.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvRec_LOT.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/FDRCRMemoPrint.vb` | No/Low | Yes | Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRCashInARPrint.designer.vb` | No/Low | No/Low | - |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/ds_arinv.Designer.vb` | No/Low | Yes | Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARBilyetGiro.vb` | Yes | Yes | credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARNota.vb` | No/Low | No/Low | Shipment |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FCashIn.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.vb` | Yes | No/Low | Can't Cancel, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Delete, Can't Cancel, Outstanding, Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Master Data/Item/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/FSORecapitulationPrint.vb` | No/Low | No/Low | Outstanding, Qty, Shipment |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/FSalesOrderShipmentPrint.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Print Out/XRSO.designer.vb` | No/Low | No/Low | Qty |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseReceiptPrint.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Sumplas Solution/Sumplas.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FDisbursementRealization.vb` | Yes | Yes | Can't Cancel |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.vb` | No/Low | Yes | Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Master Data/Item/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | Yes | Yes | Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Print Out/ds_po.Designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.Designer.vb` | Yes | No/Low | credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb` | No/Low | Yes | credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.designer.vb` | No/Low | No/Low | - |
| 2 | `Sumplas Solution/Sumplas.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 2 | `Sumplas Solution/Sumplas.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Sumplas Solution/Sumplas.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvIssue.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvIssue_LOT.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvRec.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvRec_LOT.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.Designer.vb` | No/Low | No/Low | - |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.Designer.vb` | No/Low | No/Low | - |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Requisition/Print Out/XRRequisition.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Requisition/Print Out/XRRequisitionCost.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.designer.vb` | No/Low | No/Low | - |
| 1 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, credit |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 5 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 5 | `Sumplas Solution/Sumplas.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 5 | `Sumplas Solution/Sumplas.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Sumplas Solution/Sumplas.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 5 | `Sumplas Solution/Sumplas.Project/__Browse References/FWOSearch.vb` | No/Low | Yes | Outstanding, Qty |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvIssue.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvIssue_LOT.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.Designer.vb` | No/Low | No/Low | - |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrderIssue.vb` | No/Low | No/Low | Qty, Shipment |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGift.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Qty, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Sumplas Solution/Sumplas.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `Sumplas Solution/Sumplas.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvRec.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRInvRec_LOT.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRTransferIssuesPrint.Designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Print Out/XRTransferIssuesPrint_LOT.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Report/FInventoryReportDetail.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.Designer.vb` | No/Low | No/Low | - |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Delete, Can't Cancel, Outstanding, Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Master Data/Item/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Report/FRealizationOrderReport.vb` | No/Low | No/Low | Outstanding, Qty, Shipment |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Report/FRealizationOrderReport_old.vb` | No/Low | No/Low | Outstanding, Qty, Shipment |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGift.Designer.vb` | Yes | No/Low | - |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderGiftRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrderShipment.designer.vb` | No/Low | No/Low | Qty, Shipment |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Report/FARReport.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARBilyetGiro.vb` | Yes | Yes | credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.designer.vb` | No/Low | No/Low | - |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARPayment.vb` | No/Low | Yes | Outstanding, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Payable/Transaction/FPaymentManualChecks.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/FDRCRMemoPrint.vb` | No/Low | Yes | Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/ds_arinv.Designer.vb` | No/Low | Yes | Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Report/FARPaymentReport.vb` | No/Low | Yes | Outstanding |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARNota.vb` | No/Low | No/Low | Shipment |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.vb` | Yes | No/Low | Can't Cancel, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/ds_ti.Designer.vb` | No/Low | No/Low | credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FCommision.vb` | No/Low | No/Low | - |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/__Browse References/FDRCRMemoSearch.vb` | No/Low | Yes | Outstanding, Shipment |
| 3 | `Sumplas Solution/Sumplas.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | Shipment, credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRCashInARPrint.designer.vb` | No/Low | No/Low | - |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceQtyReal.designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Print Out/XRInvoiceQtyReal2.designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FARNota.designer.vb` | No/Low | No/Low | - |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Account Receiveable/Transaction/FDRCRMemo.designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FDisbursementRequest.vb` | Yes | Yes | Can't Cancel, Outstanding, credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Cash Management/Transaction/FOverBooking.vb` | No/Low | Yes | credit |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajak.Designer.vb` | No/Low | No/Low | - |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/FFakturPajakCoreTax.Designer.vb` | No/Low | No/Low | - |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.designer.vb` | No/Low | No/Low | Qty |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReport.vb` | No/Low | Yes | Outstanding, Qty |
| 5 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Delete, Can't Cancel, Outstanding, Qty |
| 5 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrderIssue.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Sumplas Solution/Sumplas.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.vb` | No/Low | Yes | Qty, credit |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReport.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrder.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWorkOrderIssue.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Sumplas Solution/Sumplas.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 4 | `Sumplas Solution/Sumplas.Project/__Browse References/FWOSearch.vb` | No/Low | Yes | Outstanding, Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/rptWOPickList.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/rptWOPickList2.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Report/FWorkOrderReceiptReport.designer.vb` | No/Low | No/Low | - |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOMaterialRequest.vb` | No/Low | No/Low | Can't Delete, Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOReceipt.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 3 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FWOWizard.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Sumplas Solution/Sumplas.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Routing and Work Center/FMachine.designer.vb` | No/Low | No/Low | - |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Routing and Work Center/FMachine.vb` | No/Low | No/Low | - |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRProdSchedulePrint.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRProdSchedulePrint_A5.designer.vb` | No/Low | No/Low | Outstanding, Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRProdSchedulePrint_A6.designer.vb` | No/Low | No/Low | Outstanding, Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRWOMRPrint.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRWOReceiptPrintLotSerial.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Print Out/XRWOReceiptPrintNon.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProdSchedule.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProdSchedule.vb` | No/Low | No/Low | Outstanding, Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProdSchedule_PrintVersiText.Designer.vb` | No/Low | No/Low | Qty |
| 2 | `Sumplas Solution/Sumplas.Project/Module/Manufacture/Work Order/Transaction/FProdSchedule_PrintVersiText.vb` | No/Low | No/Low | Outstanding, Qty |
