# Manual Guide SIVENSYS ERP
## Modul Cash Management - Disbursement Request (DR)

Dokumen ini adalah panduan pengguna untuk menu **Disbursement Request (DR)** pada SIVENSYS ERP.

---

## 1) Tujuan Menu DR
Menu DR digunakan untuk membuat **permintaan pencairan dana** sebelum pembayaran diproses lebih lanjut.

Alur utamanya:
1. Buat DR
2. Approval DR
3. Lanjut ke Disbursement Voucher (DV)
4. Lanjut ke Disbursement Realization (DZ)

Dengan DR, proses pengeluaran dana menjadi lebih terkontrol dan terdokumentasi.

---

## 2) Akses Menu
- **Transaction**
  - Disbursement Request (`/FDisbursementRequest`)
  - Disbursement Request Create (`/FDisbursementRequestCreate`)
  - Disbursement Approval (`/FDisbursementApproval`)
- **Report**
  - Disbursement Request Report (`/FDisbursementRequestReport`)
- **Print**
  - Disbursement Request Viewer (`/FDisbursementRequestViewer/...`)
  - Disbursement Request Release Print (`/FDisbursementRequestReleasePrint`)

---

## 3) Data Header yang Diisi
Saat membuat DR, user mengisi data header utama berikut:
- Entity
- Branch
- Type
- Customer/Partner (jika diperlukan)
- Cost Center
- Project (jika diperlukan)
- Currency
- Bank
- Account
- Employee/PIC
- Transaction Type
- Date & Due Date
- Exchange Rate
- Remark/Deskripsi

Catatan: beberapa field bisa otomatis terisi/terkunci tergantung tipe DR.

---

## 4) Tipe DR dan Dampaknya
Di coding saat ini, DR menggunakan 3 tipe: **K, P, L**.

### A. Tipe K
Karakter utama:
- Account cenderung mengikuti account Cost Center.
- Bank dibuat read-only.

Konsekuensi:
- Cocok untuk skenario pengeluaran yang dikendalikan lewat Cost Center.
- Terhubung ke DV dengan filter type yang sama.

### B. Tipe P
Karakter utama:
- **Bank wajib dipilih**.
- Jika bank belum dipilih, sistem menolak simpan (validasi).

Konsekuensi:
- Cocok untuk transaksi yang wajib jelas sumber bank/kasnya.
- DR tipe P hanya terbaca pada proses DV yang memilih tipe P.

### C. Tipe L
Karakter utama:
- Bank read-only (seperti K), dengan pola account berbeda dari P.

Konsekuensi:
- Digunakan untuk kebutuhan transaksi sesuai setup tipe L pada master.
- Tetap terhubung ke DV berdasarkan type yang sama.

> Catatan penting: nama label user-facing untuk K/P/L mengikuti master `pbyt_type` di database.

---

## 5) Input Detail DR
Setelah header, user mengisi detail pengeluaran (grid detail), umumnya berisi:
- Account detail
- Cost Center detail
- Project detail
- Deskripsi
- Amount
- Remarks

Tips:
- Pastikan total detail sesuai nilai pengajuan.
- Pastikan Cost Center/Project sesuai kebutuhan pelaporan.

---

## 6) Proses Simpan & Update
Saat simpan/update, sistem menyimpan:
- Header DR (`pby_mstr`)
- Detail DR (`pbyd_det`)

Jika validasi gagal (contoh: tipe P tapi bank kosong), dokumen tidak bisa disimpan.

---

## 7) Approval DR
Menu approval digunakan untuk:
- Approve
- Cancel
- Rollback

Setelah approve, sistem dapat menjalankan notifikasi/email sesuai konfigurasi workflow.

---

## 8) Hubungan DR dengan Menu Lain
DR adalah dokumen awal pada alur cash management:

1. **DR (permintaan dana)**
2. **DV (disbursement voucher/pembayaran)**
3. **DZ (realisasi/disbursement realization)**

Pada DV, data DR diambil melalui pencarian/filter berdasarkan:
- Entity
- Branch
- Currency
- Cost Center
- **Type DR**

Artinya, ketepatan pemilihan type DR di awal sangat penting agar dokumen lanjutannya terbaca dengan benar.

---

## 9) Laporan & Cetak
User dapat melakukan:
- Monitoring daftar DR di report
- Cetak dokumen DR untuk kebutuhan administrasi/audit

Pastikan status dokumen sudah sesuai (draft/open/approved) sebelum final print.

---

## 10) Best Practice Penggunaan
1. Pilih type DR sesuai skenario bisnis.
2. Untuk type P, pilih bank sebelum simpan.
3. Pastikan Cost Center dan Project valid.
4. Isi detail dengan deskripsi yang jelas.
5. Lakukan approval sesuai otorisasi.
6. Lanjutkan ke DV dan DZ sesuai alur.

---

## 11) Troubleshooting Singkat
- **Tidak bisa simpan DR**
  - Cek mandatory field.
  - Cek type P: bank harus dipilih.
- **DR tidak muncul saat pilih di DV**
  - Samakan filter entity/branch/currency/cost center.
  - Pastikan type DV sama dengan type DR.
  - Pastikan status DR memenuhi syarat proses lanjutan.

---

Dokumen ini disusun berdasarkan struktur coding modul Cash Management SIVENSYS ERP yang aktif saat ini.