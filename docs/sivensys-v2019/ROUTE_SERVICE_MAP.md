# ROUTE_SERVICE_MAP - SIVENSYS ERP Desktop v2019

## Penting
Aplikasi desktop v2019 tidak memakai route URL seperti Blazor.
Mapping di sini memakai pola:
`MENU/FORM -> File Implementasi -> Fungsi Bisnis`

## Mapping Cash Management
1. Disbursement Request
- Form: `FDisbursementRequest.vb`
- Business: create/edit/delete/approve-flow prep, validasi tipe `pby_type`, relasi detail DR.

2. Disbursement Approval
- Form: `FDisbursementApproval.vb`
- Business: workflow approval DR, update status transaksi, trigger jurnal sesuai tipe.

3. Disbursement Voucher
- Form: `FDisbursementVoucher.vb`
- Business: settlement DR ke voucher, mapping detail akun (`cashd_ac_id`), posting GL termasuk akun bank.

4. Disbursement Realization
- Form: `FDisbursementRealization.vb`
- Business: realisasi/consume terhadap DR, kontrol amount vs request, approval path terpisah.

5. Disbursement Realization Approval
- Form: `FDisbursementRealizationApproval.vb`
- Business: approval/cancel/rollback realisasi.
