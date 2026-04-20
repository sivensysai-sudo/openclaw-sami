# ALKINDO_PT_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Cancel, Outstanding, Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Print Out/XRSO.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Print Out/XRSOPriceDisc2.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSOContract.vb` | Yes | No/Low | Outstanding, Qty, Shipment |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSalesOrder.designer.vb` | Yes | No/Low | credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRInventorySlitting.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRInventorySlitting_LOT.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOListPrint.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOReceiptPrintLotSerial.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOReceiptPrintNon.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/ds_wo_receipt.Designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP2.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrinting.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrintingTinta.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FSOContractImport.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt_old.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSOContract.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Cancel, Outstanding, Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FProjectAccountSearch.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FPurchaseReceiptSearch.Designer.vb` | No/Low | No/Low | - |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FSOInternalSearch.vb` | No/Low | No/Low | Outstanding, Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FUMSearch.vb` | No/Low | No/Low | - |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRGatepassSub.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintBarcodeSingle.vb` | No/Low | No/Low | - |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOReceiptPrintLotSerial.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOReceiptPrintNon.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/ds_barcode_double.Designer.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/ds_wo_receipt.Designer.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FConsumeWIPReport.vb` | No/Low | No/Low | Outstanding, Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FJumboPrintingReport.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWOLaborFeedbackReport.designer.vb` | No/Low | No/Low | - |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWOLaborFeedbackReport.vb` | No/Low | No/Low | Outstanding, Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReceiptReport.designer.vb` | No/Low | No/Low | - |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReceiptReport.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReport.vb` | No/Low | Yes | Outstanding, Qty |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrinting.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrintingTinta.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 5 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FLotSerialSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 5 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FJumboPrintingReport.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP2.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt_old.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FProjectAccountSearch.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FUMSearch.vb` | No/Low | No/Low | - |
| 4 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FWOSearch.vb` | No/Low | No/Low | Outstanding, Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRPrintBarcodeSingle.vb` | No/Low | No/Low | - |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FConsumeWIPReport.vb` | No/Low | No/Low | Outstanding, Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWOLaborFeedbackReport.vb` | No/Low | No/Low | Outstanding, Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReceiptReport.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Cancel, Outstanding, Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/ModFunctionSpecial.vb` | No/Low | Yes | Qty, credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FAssetSearch.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryIssueSearch.designer.vb` | No/Low | No/Low | - |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FInventoryIssueSearch.vb` | No/Low | No/Low | Qty |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FInvoiceSearch.vb` | No/Low | No/Low | Outstanding |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FPartnerSearch.vb` | No/Low | Yes | credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Sales Order/Transaction/FSOContract.vb` | Yes | No/Low | Outstanding, Qty, Shipment |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/___Function Helper/function_data.vb` | No/Low | Yes | Over Due, Qty, Shipment, credit |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FDRCRMemoSearch.vb` | No/Low | Yes | Outstanding, Shipment |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FConsumeWIPReport.vb` | No/Low | No/Low | Outstanding, Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FJumboPrintingReport.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWOLaborFeedbackReport.vb` | No/Low | No/Low | Outstanding, Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReceiptReport.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReport.vb` | No/Low | Yes | Outstanding, Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP2.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrinting.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrintingTinta.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FPalletIDImport.vb` | No/Low | No/Low | - |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FRouting.vb` | No/Low | Yes | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FSOContractImport.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt_old.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.designer.vb` | No/Low | No/Low | Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Cancel, Outstanding, Qty |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Company/FZEmployeImport.vb` | No/Low | No/Low | - |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Company/FZEmployee.vb` | No/Low | No/Low | Can't Delete |
| 1 | `Alkindo Solution/AlkindoPT.Project/Module/Master Data/Item Sites/FColor.vb` | No/Low | No/Low | - |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReport.vb` | No/Low | Yes | Outstanding, Qty |
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWORouteMaintenance.vb` | No/Low | Yes | Can't Delete, Qty |
| 5 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Cancel, Outstanding, Qty |
| 5 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FAccountSearch.vb` | No/Low | Yes | - |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReport.Designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP2.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FConsumeWIP2.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FRouting.vb` | No/Low | Yes | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWorkOrder.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FWCSearch.vb` | No/Low | No/Low | Can't Delete, Qty |
| 4 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FWOSearch.vb` | No/Low | No/Low | Outstanding, Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelHCPBGSub.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRLabelHCPBSub.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Print Out/XRWOListPrint.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FConsumeWIPReport.vb` | No/Low | No/Low | Outstanding, Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWOLaborFeedbackReport.vb` | No/Low | No/Low | Outstanding, Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Report/FWorkOrderReceiptReport.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrinting.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FJumboPrintingTinta.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWOReceipt_old.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 3 | `Alkindo Solution/AlkindoPT.Project/Module/Manufacture/Transaction/FWORouteMaintenance.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FRoutingSearch.vb` | No/Low | Yes | Qty |
| 3 | `Alkindo Solution/AlkindoPT.Project/__Browse References/FWORoutingSearch.vb` | No/Low | Yes | Outstanding, Qty |
| 2 | `Alkindo Solution/AlkindoPT.Project/Module/Distribution/Transaction/FInventorySlitting_new_WIP2.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
