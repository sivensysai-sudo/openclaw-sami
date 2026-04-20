# SERVICE CATALOG - SIVENSYS ERP Desktop v2019

## Scope
Catalog fungsi/modul (bukan HTTP service). Sistem desktop ini berbasis form + helper + SQL.

## Financial > Cash Management (baseline: Grafindo)
Path dasar:
`Grafindo Solution/Grafindo.Project/Module/Financial/Cash Management`

### Transaction Forms
- `FDisbursementRequest.vb` (DR)
- `FDisbursementApproval.vb` (Approval DR)
- `FDisbursementVoucher.vb` (DV)
- `FDisbursementRealization.vb` (DZ/Realization)
- `FDisbursementRealizationApproval.vb` (Approval DZ)
- `FOverBooking.vb`
- `FOverBookingAdjustment.vb`

### Reports / Print
- `Report/*` (DR/DV/DZ report forms)
- `Print Out/*` (print templates untuk transaksi)

### Shared Helpers
- `Core/Global.Lib/function_data.vb` (lookup/list pendukung)
- Utility workflow, email, transaction number, GL helper via modul global (`mf`, `func_coll`, dsb).
