# ALKINDO_PASS3_IMPACT_MATRIX

Pass-3 final: matrix dampak perubahan fitur -> file/method/entity untuk eksekusi coding cepat.

## sales_workflow_approval

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderGift.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderGiftApproval.vb` | Yes | Yes | Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderMergeSOI.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryLendRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryRequest.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferIssueApproval.vb` | Yes | Yes | Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Requisition/FRequisition.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Requisition/FRequisitionApproval.vb` | Yes | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname2.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname_WIP.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname_new.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FStockOpnameApproval_new.vb` | Yes | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetRequest.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_data.vb` | Yes | Yes | Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Document/FDocumentIssues.vb` | Yes | No/Low | Can't Delete, Qty |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.designer.vb` | Yes | No/Low | Qty, Shipment |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.vb` | Yes | No/Low | Qty |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble2.vb` | Yes | Yes | Can't Save, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferReceipts.vb` | No/Low | Yes | Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FARPaymentTax.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoReceipt.vb` | No/Low | Yes | credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoTax.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/Tax Invoice/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Cancel, Outstanding, Qty |

## purchase_receipt_posting

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/FVoucherTax.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/__Browse References/FPurchaseOrderSearch.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.vb` | Yes | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.designer.vb` | No/Low | No/Low | - |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt_new.designer.vb` | No/Low | No/Low | - |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt_new.vb` | No/Low | Yes | Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReturn.vb` | No/Low | Yes | Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/QC/FQualityControl.vb` | No/Low | Yes | Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetCapitalization.vb` | No/Low | No/Low | Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_data.vb` | Yes | Yes | Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.designer.vb` | Yes | No/Low | Qty, Shipment |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/XRAPInvoice.designer.vb` | No/Low | No/Low | Outstanding, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/XRAPInvoiceNoPO.designer.vb` | No/Low | No/Low | Outstanding, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/ds_ap.Designer.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoTax.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/Fix Assets/FAssetMasterFinancial.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Master Data/Item Sites/FPartNumber.vb` | No/Low | Yes | Qty |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderMergeSOI.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Alkindo Solution/Alkindo.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Print Out/XRPurchaseOrderPrintOut.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Print Out/ds_barcode_double.Designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.designer.vb` | Yes | No/Low | Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Requisition/FRequisition.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty |

## inventory_issue_receipt

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble2.vb` | Yes | Yes | Can't Save, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryDisassemble.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryRewinding.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryRewinding2.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_WIP.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_new.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_new_WIP.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferIssueApproval.vb` | Yes | Yes | Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferIssues.vb` | Yes | Yes | Can't Delete, Can't Cancel, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FTransferReceipts.vb` | No/Low | Yes | Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Qty |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname2.vb` | Yes | No/Low | Can't Save, Can't Delete, Can't Cancel, Qty |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Distribution/StockOpname/FCOStockOpname_new.vb` | Yes | No/Low | Can't Delete, Can't Cancel, Qty |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FJumboPrinting.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderMergeSOI.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 5 | `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 5 | `Alkindo Solution/Alkindo.Project/__Browse References/FLocationSearch.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Alkindo Solution/Alkindo.Project/__Browse References/FPalletIDSearchNew.vb` | No/Low | No/Low | Qty, Shipment |
| 5 | `Alkindo Solution/Alkindo.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 5 | `Alkindo Solution/Alkindo.Project/__Browse References/FSalesOrderSearch.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Document/FDocumentIssues.vb` | Yes | No/Low | Can't Delete, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.designer.vb` | Yes | No/Low | Qty, Shipment |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.vb` | Yes | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Packaging/FInventoryPackaging.vb` | No/Low | No/Low | Can't Save, Can't Delete, Qty, Shipment |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventoryAssemble2.designer.vb` | No/Low | No/Low | Qty |

## ar_invoice_payment_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 3 | `Alkindo Solution/Alkindo.Project/Module/Administrative Tools/FCorrectionData.vb` | Yes | Yes | Qty, Shipment |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FARPaymentTax.Designer.vb` | No/Low | No/Low | - |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FARPaymentTax.vb` | No/Low | Yes | Outstanding, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoTax.vb` | No/Low | Yes | Outstanding, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Financial/Tax Invoice/FFakturPajak.vb` | Yes | No/Low | Can't Cancel, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderMergeSOI.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Over Due, Qty, Shipment, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseOrder.vb` | Yes | Yes | Can't Save, Can't Delete, Can't Cancel, Outstanding, Qty, Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt.vb` | No/Low | Yes | Qty, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReceipt_new.vb` | No/Low | Yes | Qty, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Purchase Order/Transaction/FPurchaseReturn.vb` | No/Low | Yes | Qty, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/FVoucherTax.vb` | No/Low | Yes | Outstanding, Qty, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Financial/AP Invoice/XRAPInvoiceNoPO.designer.vb` | No/Low | No/Low | Outstanding, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoReceipt.vb` | No/Low | Yes | credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/FDRCRMemoTax.designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Financial/AR Invoice/XRInvoiceDisc2.designer.vb` | No/Low | No/Low | Qty, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlain.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Financial/Tax Invoice/XRFakturPajakFormPlainIDR.designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Import Data/FSODetailImport.vb` | No/Low | Yes | Outstanding, Qty, Shipment |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Master Data/Company/FCustomer.designer.vb` | No/Low | No/Low | Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Master Data/Company/FCustomer.vb` | No/Low | Yes | Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipRealization.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp.vb` | No/Low | Yes | Can't Save, Qty, Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp2.vb` | No/Low | Yes | Can't Save, Qty, Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSOShipTemp_old.vb` | No/Low | Yes | Can't Save, Qty, Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderReturnToShipment.designer.vb` | No/Low | No/Low | Outstanding, Shipment |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Sales Order/Transaction/FSalesOrderShipment.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, Shipment, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_collection.vb` | Yes | Yes | Qty, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/___Function Helper/function_data.vb` | Yes | Yes | Over Due, Qty, Shipment, credit |

## manufacturing_wip_flow

| Score | File | Workflow | GL | Validation |
|---:|---|---|---|---|
| 5 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrder.vb` | No/Low | Yes | Can't Cancel, Outstanding, Qty |
| 5 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrderMulti.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FMultiWOLaborFeedback.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FRouting.vb` | No/Low | Yes | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedback.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedback.vb` | No/Low | Yes | Can't Save, Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedbackMulti.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrder.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWorkOrderMulti.designer.vb` | No/Low | No/Low | Qty |
| 4 | `Alkindo Solution/Alkindo.Project/__Browse References/FPartNumberSearch.vb` | No/Low | Yes | Qty |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FJumboPrinting.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FMultiWOLaborFeedback.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWIPInventoryIssues.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWIPInventoryReceipts.vb` | No/Low | Yes | Can't Save, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWIPReturn.vb` | No/Low | Yes | Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLabel.vb` | Yes | No/Low | Qty |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLaborFeedbackMulti.designer.vb` | No/Low | No/Low | Qty |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOReceipt.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOReceiptMulti.vb` | No/Low | Yes | Can't Delete, Outstanding, Qty, credit |
| 3 | `Alkindo Solution/Alkindo.Project/__Browse References/FWORoutingSearch.vb` | No/Low | Yes | Outstanding, Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.designer.vb` | Yes | No/Low | Qty, Shipment |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/FControlFileDistribution.vb` | Yes | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Distribution/Inventory/Transaction/FInventorySlitting_new_WIP.vb` | No/Low | Yes | Can't Save, Can't Delete, Qty, credit |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_cids.Designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_wipreturn.Designer.vb` | Yes | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_wo_receipt.Designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Print Out/ds_wo_release.Designer.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FComponentIssue.vb` | No/Low | No/Low | Qty |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWIPReturn.designer.vb` | No/Low | No/Low | - |
| 2 | `Alkindo Solution/Alkindo.Project/Module/Manufacture/Transaction/FWOLabel.designer.vb` | No/Low | No/Low | Qty |
