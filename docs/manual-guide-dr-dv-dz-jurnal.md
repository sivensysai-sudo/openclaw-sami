# Manual Guide SIVENSYS ERP
## Disbursement Request (DR), Disbursement Voucher (DV), Disbursement Realization (DZ)

Dokumen ini menjelaskan alur DR → DV → DZ, aturan per tipe, jurnal akuntansi, dan contoh numerik.

---

## 1) Gambaran Alur

1. **DR (Disbursement Request)**
   - Pengajuan kebutuhan dana.
   - Menentukan tujuan biaya, cost center/project, jenis disbursement, dan approval routing.

2. **DV (Disbursement Voucher)**
   - Eksekusi pencairan dana berdasarkan DR yang sudah siap diproses.
   - Menentukan bank/cash movement aktual, nominal bayar, dan detail distribusi akun.

3. **DZ (Disbursement Realization)**
   - Pertanggungjawaban/realisasi akhir dari dana yang sudah dicairkan.
   - Menangani realisasi final termasuk kemungkinan refund/sisa.

---

## 2) DR - Disbursement Request

### 2.1 Field penting (Header)
- Entity, Branch
- **Type** (K / P / L)
- Customer (opsional sesuai proses)
- Cost Center, Project
- Date, Due Date
- Currency, Exchange Rate
- Bank, Account (tergantung tipe)
- Employee
- Routing Approval
- Remarks

### 2.2 Perbedaan Tipe DR (sesuai logic coding)

#### A. Tipe `K`
- Account header otomatis dari **Cost Center** (`cc_ac_id`).
- Field Bank cenderung non-editable.
- Pada DV, `cash_interval_day` aktif dan mengambil config `interval_day_kasbon`.

#### B. Tipe `P`
- Account header otomatis dari **Bank** (`bk_ac_id`).
- Bank wajib terisi (validasi).
- Field Bank editable.

#### C. Tipe `L`
- Account header default account pertama.
- Field Bank non-editable.
- Tidak menggunakan interval kasbon seperti tipe K.

### 2.3 Output DR
- Dokumen permintaan dana + detail akun/biaya.
- Masuk ke proses approval.

---

## 3) DV - Disbursement Voucher

### 3.1 Fungsi
- Mencairkan dana terhadap DR.
- Menentukan bagaimana dana keluar dari kas/bank.

### 3.2 Komponen utama
- Header: Entity, Branch, Date, Currency, Exchange Rate, Bank, Type, Bilyet Giro (jika ada), Remarks.
- Tab DR: memilih DR yang menjadi dasar pencairan.
- Tab List Account: distribusi akun, cash amount, variance/discount.

### 3.3 Output DV
- Bukti pencairan (cash out voucher).
- Menjadi basis kontrol sebelum tahap realisasi (DZ).

---

## 4) DZ - Disbursement Realization

### 4.1 Fungsi
- Finalisasi penggunaan dana yang sudah dicairkan di DV.
- Menentukan realisasi sesungguhnya, termasuk refund/sisa.

### 4.2 Komponen utama
- Header: Entity, Branch, Date, Currency, Exchange Rate, Bank, Refund Amount, Approval routing, Remarks.
- Tab DR + List Account untuk mapping realisasi per akun.

### 4.3 Output DZ
- Bukti realisasi disbursement.
- Basis laporan pertanggungjawaban dan rekonsiliasi.

---

## 5) Jurnal Akuntansi (Template Standar)

> Catatan: akun riil mengikuti mapping COA di master (bank, biaya, hutang sementara/kasbon, refund, variance). Di bawah ini template umum.

### 5.1 Saat DV (Pencairan)

#### Opsi A - Langsung ke Biaya
- **Dr** Biaya / Akun tujuan (sesuai detail)
- **Cr** Kas/Bank

#### Opsi B - Via Uang Muka/Kasbon Sementara
- **Dr** Uang Muka Karyawan / Disbursement Clearing
- **Cr** Kas/Bank

### 5.2 Saat DZ (Realisasi)

Jika sebelumnya pakai akun sementara:
- **Dr** Biaya aktual (sesuai bukti realisasi)
- **Cr** Uang Muka Karyawan / Disbursement Clearing

Jika ada selisih:
- Kurang bayar: tambah pengeluaran sesuai kebijakan.
- Lebih bayar (refund):
  - **Dr** Kas/Bank
  - **Cr** Uang Muka Karyawan / Piutang Karyawan (sesuai setup)

### 5.3 Variance/Discount (jika dipakai di DV)
- Selisih bisa diarahkan ke akun variance/discount:
  - **Dr/Cr** Variance Expense/Income
  - lawan akun sesuai posisi selisih.

---

## 6) Contoh End-to-End

### Kasus
- DR diajukan untuk operasional proyek: **Rp10.000.000**
- DV dicairkan penuh: **Rp10.000.000**
- Realisasi DZ aktual: **Rp9.200.000**
- Refund (sisa dikembalikan): **Rp800.000**

### 6.1 Jurnal DV (pakai akun sementara)
- **Dr Uang Muka Karyawan** 10.000.000
- **Cr Bank** 10.000.000

### 6.2 Jurnal DZ (realisasi + refund)
1) Realisasi biaya:
- **Dr Biaya Operasional Proyek** 9.200.000
- **Cr Uang Muka Karyawan** 9.200.000

2) Refund sisa:
- **Dr Bank** 800.000
- **Cr Uang Muka Karyawan** 800.000

Saldo akun Uang Muka kembali **0** (clear).

---

## 7) SOP Ringkas (Praktis)

1. User buat **DR** lengkap (type, CC, project, detail akun) → submit approval.
2. Approver proses **DR Approval**.
3. Finance buat **DV** berdasarkan DR approved → lakukan pencairan.
4. PIC submit bukti realisasi.
5. Finance buat **DZ** untuk realisasi akhir + refund/selisih.
6. Pastikan jurnal terposting dan saldo akun sementara clear.

---

## 8) Checklist Kontrol

- DR type sudah benar (K/P/L)
- Routing approval sesuai otorisasi
- Bank & account mapping valid
- Nilai DV tidak melebihi kebijakan
- DZ didukung bukti realisasi
- Selisih/refund terselesaikan
- Jurnal balance dan akun clearing nol di akhir
