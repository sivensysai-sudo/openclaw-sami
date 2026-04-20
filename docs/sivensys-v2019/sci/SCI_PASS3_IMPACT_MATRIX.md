# SCI_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderApproval.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 5 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderGift.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Qty |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPhysicalInventoryApproval.vb` | Yes | No/Low | Qty |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPhysicalInventoryEntry.vb` | Yes | Yes | Can't Save, Can't Cancel, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPhysicalInventoryEntrySparepart.vb` | Yes | No/Low | Can't Cancel, Qty |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrderApproval.vb` | Yes | Yes | Outstanding, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Requisition/FRequisition.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FWIPReject.vb` | Yes | No/Low | Can't Save, Qty |
| 4 | `SCI Solution/SCI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FAPBilyetGiro.vb` | Yes | Yes | Outstanding, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRCashInARPrint.designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2_a5.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDistLine2.designer.vb` | No/Low | No/Low | Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARBilyetGiro.vb` | Yes | Yes | credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPaymentMultiNota.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/Cash Management/FCashIn.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Transaction/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Transaction/FFakturPajakCoreTax.vb` | Yes | No/Low | Can't Cancel, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/Tax/FCashInTax.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWorkOrder.vb` | No/Low | Yes | Outstanding, Qty |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 5 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FVoucher.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPurchaseReceipt_v2.Designer.vb` | No/Low | No/Low | - |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPurchaseReceipt_v2.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceipt.designer.vb` | No/Low | No/Low | - |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale.designer.vb` | No/Low | No/Low | - |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale_250612.designer.vb` | No/Low | No/Low | - |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceiptScale_250612.vb` | No/Low | Yes | Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReturn.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseUnloading_v2.vb` | No/Low | No/Low | Can't Save, Can't Delete, Qty |
| 4 | `SCI Solution/SCI.Project/Module/Financial/Tax/FAPGenerateGL.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `SCI Solution/SCI.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 3 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrderApproval.vb` | Yes | Yes | Outstanding, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseUnloading_v2.designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRAPInvoice.designer.vb` | No/Low | No/Low | Outstanding, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRAPInvoiceNoPO.designer.vb` | No/Low | No/Low | Outstanding, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRAPNotaTagih.designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/ds_ap.Designer.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/Cash Management/FDisbursementVoucher.vb` | No/Low | Yes | - |
| 3 | `SCI Solution/SCI.Project/Module/Financial/General Ledger/FTransactionPost.vb` | No/Low | Yes | Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Master Data/Item/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FVehicleWeighOutHiBlow.vb` | No/Low | No/Low | Can't Save, Outstanding, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/__Browse References/FDeliveryOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableReturn.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FFGReceiptUnplanned.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FGenInventoryStock.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryDisassemble.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FZakRotation.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Manufacture/FWOAccountingClose.vb` | No/Low | Yes | Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Manufacture/FWOCompReceipt.vb` | No/Low | No/Low | Can't Save, Qty |
| 5 | `SCI Solution/SCI.Project/Module/Manufacture/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Manufacture/FWOReceiptMulti.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWOReceiptTax.vb` | No/Low | Yes | Can't Delete, Qty, credit |
| 5 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FPackingList.vb` | No/Low | No/Low | Can't Save, Qty, Shipment |
| 5 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FVehicleWeighOutHiBlow.vb` | No/Low | No/Low | Can't Save, Outstanding, Qty, Shipment, credit |
| 5 | `SCI Solution/SCI.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 5 | `SCI Solution/SCI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty, Shipment |
| 5 | `SCI Solution/SCI.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Report/FInvReportByDateWithCost_v1.vb` | No/Low | No/Low | Qty |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableIssues.designer.vb` | No/Low | No/Low | - |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FConsumableIssues.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble.designer.vb` | No/Low | No/Low | Qty |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryIssues.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FInventoryRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Qty |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPurchaseReceipt_v2.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.designer.vb` | Yes | No/Low | - |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FZakRotation.designer.vb` | No/Low | No/Low | Qty |
| 4 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Report/FARReport.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARBilyetGiro.vb` | Yes | Yes | credit |
| 4 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.Designer.vb` | No/Low | No/Low | - |
| 4 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPayment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, credit |
| 4 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPaymentMultiNota.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FDRCRMemo.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FAPBilyetGiro.vb` | Yes | Yes | Outstanding, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FPaymentManualChecks.vb` | No/Low | Yes | Can't Delete, Outstanding, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRCashInARPrint.designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRNotaTagih.designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/ds_ar_nota.Designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARNota.vb` | No/Low | No/Low | Shipment |
| 3 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Transaction/FARPaymentMultiNota.Designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Financial/General Ledger/FTransactionPost.vb` | No/Low | Yes | Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Print Out/ds_ti1.Designer.vb` | No/Low | No/Low | credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Transaction/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Financial/Tax Invoice/Transaction/FFakturPajakCoreTax.vb` | Yes | No/Low | Can't Cancel, credit |
| 3 | `SCI Solution/SCI.Project/Module/Sales Order/Report/FSalesOrderEndToEndReport.vb` | Yes | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Sales Order/Target and achievement/Transaction/FTargetByItemGroup.vb` | No/Low | No/Low | Can't Delete, Qty |
| 3 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `SCI Solution/SCI.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, Shipment, credit |
| 2 | `SCI Solution/SCI.Project/Module/Distribution/Inventory/Transaction/FPurchaseReceipt_v2.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 2 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 2 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseOrderApproval.vb` | Yes | Yes | Outstanding, Qty, credit |
| 2 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 2 | `SCI Solution/SCI.Project/Module/Distribution/Procurement/Transaction/FPurchaseReturn.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 2 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/FVoucher.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 2 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRAPInvoiceNoPO.designer.vb` | No/Low | No/Low | Outstanding, credit |
| 2 | `SCI Solution/SCI.Project/Module/Financial/AP Invoice/Printout/XRAPNotaTagih.designer.vb` | No/Low | No/Low | - |
| 2 | `SCI Solution/SCI.Project/Module/Financial/AR Invoice/Print Out/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, Shipment, credit |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `SCI Solution/SCI.Project/Module/Manufacture/FWorkOrder.vb` | No/Low | Yes | Outstanding, Qty |
| 5 | `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWorkOrderTax.vb` | No/Low | Yes | Qty |
| 5 | `SCI Solution/SCI.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty, Shipment |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FRouting.vb` | No/Low | Yes | Qty |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FWOAccountingClose.vb` | No/Low | Yes | Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FWOCompReceipt.vb` | No/Low | No/Low | Can't Save, Qty |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedback.vb` | No/Low | Yes | Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedbackAll.vb` | No/Low | Yes | Can't Delete, Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedback_v1.vb` | No/Low | Yes | Qty, credit |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FWorkOrder.designer.vb` | No/Low | No/Low | - |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/FWorkOrderIssue.vb` | No/Low | No/Low | Can't Save, Can't Delete, Qty |
| 4 | `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWorkOrderTax.designer.vb` | No/Low | No/Low | Qty |
| 4 | `SCI Solution/SCI.Project/__Browse References/FWOSearch.vb` | No/Low | Yes | Outstanding, Qty |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWIPCorrection.vb` | No/Low | No/Low | Can't Save, Qty |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWIPInventoryIssues.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWIPInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWIPReject.vb` | Yes | No/Low | Can't Save, Qty |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWIPReturn.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWOAccountingClose.designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedback.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWOLaborFeedback_v1.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWOMaterialRequest.vb` | No/Low | No/Low | Can't Delete, Qty |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWOReceipt.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWOReceiptMulti.designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/FWOReceiptMulti.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWOReceiptTax.designer.vb` | No/Low | No/Low | Qty |
| 3 | `SCI Solution/SCI.Project/Module/Manufacture/Tax/FWOReceiptTax.vb` | No/Low | Yes | Can't Delete, Qty, credit |
| 3 | `SCI Solution/SCI.Project/Module/Master Data/Item/FPartNumber.designer.vb` | No/Low | No/Low | - |
| 3 | `SCI Solution/SCI.Project/Module/Master Data/Item/FPartNumber.vb` | No/Low | Yes | Qty |
