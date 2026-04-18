# Data Dictionary - sivensys_sim

- Schemas: **6**
- Tables: **607**
- Columns: **8707**
- PK columns: **0**
- FK columns: **0**

## Table count per schema

- `akses`: 19 table(s)
- `chatbot`: 5 table(s)
- `custom`: 7 table(s)
- `hris`: 77 table(s)
- `public`: 491 table(s)
- `sms`: 8 table(s)

---

## Schema `akses`

### `akses.im`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `im_oid` : `uuid` NOT NULL
  - `  2` `im_code` : `character varying` NULL
  - `  3` `im_add_date` : `timestamp without time zone` NULL
  - `  4` `im_add_by` : `bigint` NULL
  - `  5` `im_upd_date` : `timestamp without time zone` NULL
  - `  6` `im_upd_by` : `bigint` NULL
  - `  7` `im_tipe` : `character varying` NULL
  - `  8` `im_to` : `text` NULL
  - `  9` `im_to_emp_id` : `bigint` NULL
  - ` 10` `im_from` : `character varying` NULL
  - ` 11` `im_cc` : `character varying` NULL
  - ` 12` `im_dd` : `date` NULL
  - ` 13` `im_re` : `character varying` NULL
  - ` 14` `im_untuk_diketahui` : `character varying` NULL
  - ` 15` `im_untuk_diinformasikan` : `character varying` NULL
  - ` 16` `im_untuk_disetujui` : `character varying` NULL
  - ` 17` `im_untuk_ditindaklanjuti` : `character varying` NULL
  - ` 18` `im_untuk_ditandatangani` : `character varying` NULL
  - ` 19` `im_untuk_diarsipkan` : `character varying` NULL
  - ` 20` `im_isi` : `text` NULL
  - ` 21` `im_status` : `bigint` NULL
  - ` 22` `im_balas` : `character varying` NULL

### `akses.im_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `im_det_oid` : `uuid` NOT NULL
  - `  2` `im_det_im_oid` : `uuid` NULL
  - `  3` `im_det_to_emp_id` : `bigint` NULL
  - `  4` `im_det_read` : `bigint` NULL

### `akses.inbox_mail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `inbox_mail_oid` : `uuid` NOT NULL
  - `  2` `inbox_mail_emp_id` : `bigint` NULL
  - `  3` `inbox_mail_sender` : `character varying` NULL
  - `  4` `inbox_mail_subject` : `character varying` NULL
  - `  5` `inbox_mail_text` : `text` NULL
  - `  6` `inbox_mail_date` : `timestamp without time zone` NULL
  - `  7` `inbox_mail_status` : `character varying` NULL
  - `  8` `inbox_mail_attachment` : `text` NULL

### `akses.info_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `info_det_oid` : `uuid` NOT NULL
  - `  2` `info_det_info_mstr_oid` : `uuid` NULL
  - `  3` `info_det_emp_id` : `bigint` NULL
  - `  4` `info_det_read` : `integer` NULL
  - `  5` `info_det_status` : `integer` NULL

### `akses.info_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `info_mstr_oid` : `uuid` NOT NULL
  - `  2` `info_mstr_judul` : `character varying` NULL
  - `  3` `info_mstr_ringkas` : `text` NULL
  - `  4` `info_mstr_lengkap` : `text` NULL
  - `  5` `info_mstr_gambar` : `character varying` NULL
  - `  6` `info_mstr_add_date` : `timestamp without time zone` NULL
  - `  7` `info_mstr_add_by` : `bigint` NULL
  - `  8` `info_mstr_aktif` : `character` NULL
  - `  9` `info_mstr_hrhirarki_id` : `bigint` NULL
  - ` 10` `info_mstr_category_id` : `bigint` NULL
  - ` 11` `info_mstr_start` : `date` NULL
  - ` 12` `info_mstr_end` : `date` NULL
  - ` 13` `info_mstr_to` : `text` NULL
  - ` 14` `info_mstr_en_id` : `bigint` NULL
  - ` 15` `info_mstr_read` : `bigint` NULL

### `akses.izin`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `izin_oid` : `uuid` NOT NULL
  - `  2` `izin_emp_id` : `bigint` NULL
  - `  3` `izin_ket_id` : `character varying` NULL
  - `  4` `izin_date_awal` : `date` NULL
  - `  5` `izin_date_akhir` : `date` NULL
  - `  6` `izin_date` : `timestamp without time zone` NULL
  - `  7` `izin_status` : `character varying` NULL
  - `  8` `izin_jam_awal` : `time without time zone` NULL
  - `  9` `izin_jam_akhir` : `time without time zone` NULL
  - ` 10` `izin_detail` : `character varying` NULL

### `akses.kode_log`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kode_log_oid` : `uuid` NOT NULL
  - `  2` `kode_log_date` : `timestamp without time zone` NULL
  - `  3` `kode_log_emp_id` : `bigint` NULL
  - `  4` `kode_log_kode` : `character varying` NULL
  - `  5` `kode_log_hp` : `character varying` NULL
  - `  6` `kode_log_status` : `integer` NULL
  - `  7` `kode_log_ip` : `character varying` NULL
  - `  8` `kode_log_host` : `character varying` NULL

### `akses.lembur`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `lembur_oid` : `uuid` NOT NULL
  - `  2` `lembur_date` : `date` NULL
  - `  3` `lembur_mulai` : `time without time zone` NULL
  - `  4` `lembur_selesai` : `time without time zone` NULL
  - `  5` `lembur_emp_id` : `bigint` NULL
  - `  6` `lembur_jenis_kerja` : `character varying` NULL
  - `  7` `lembur_hasil_kerja` : `character varying` NULL
  - `  8` `lembur_date_create` : `timestamp without time zone` NULL
  - `  9` `lembur_status` : `character varying` NULL

### `akses.log_finger`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `log_finger_oid` : `uuid` NOT NULL
  - `  2` `log_finger_emp_id` : `bigint` NULL
  - `  3` `log_finger_date` : `timestamp without time zone` NULL
  - `  4` `log_mesin` : `character varying` NULL

### `akses.outbox_mail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `outbox_mail_oid` : `uuid` NOT NULL
  - `  2` `outbox_mail_emp_id` : `bigint` NULL
  - `  3` `outbox_mail_to` : `character varying` NULL
  - `  4` `outbox_mail_subject` : `character varying` NULL
  - `  5` `outbox_mail_text` : `text` NULL
  - `  6` `outbox_mail_date` : `timestamp without time zone` NULL
  - `  7` `outbox_mail_status` : `character varying` NULL
  - `  8` `outbox_mail_attachment` : `text` NULL

### `akses.pengaduan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pengaduan_oid` : `uuid` NOT NULL
  - `  2` `pengaduan_code` : `character varying` NULL
  - `  3` `pengaduan_emp_id` : `bigint` NULL
  - `  4` `pengaduan_service_type_id` : `bigint` NULL
  - `  5` `pengaduan_service_type_det_id` : `bigint` NULL
  - `  6` `pengaduan_detail` : `text` NULL
  - `  7` `pengaduan_status` : `character varying` NULL
  - `  8` `pengaduan_date` : `timestamp without time zone` NULL
  - `  9` `pengaduan_time_start` : `time without time zone` NULL
  - ` 10` `pengaduan_time_end` : `time without time zone` NULL
  - ` 11` `pengaduan_antrian` : `integer` NULL

### `akses.pengaduan_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pengaduan_det_oid` : `uuid` NOT NULL
  - `  2` `pengaduan_det_pengduan_oid` : `uuid` NULL
  - `  3` `pengduan_det_masalah` : `text` NULL
  - `  4` `pengduan_det_penanganan` : `text` NULL
  - `  5` `pengduan_det_status` : `character varying` NULL

### `akses.service_type`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `service_type_id` : `bigint` NOT NULL
  - `  2` `service_type_name` : `character varying` NULL
  - `  3` `service_type_status` : `character` NULL

### `akses.service_type_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `service_type_det_id` : `bigint` NOT NULL
  - `  2` `service_type_det_name` : `character varying` NULL
  - `  3` `service_type_det_status` : `character` NULL

### `akses.sk`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sk_oid` : `uuid` NOT NULL
  - `  2` `sk_code` : `character varying` NULL
  - `  3` `sk_add_date` : `timestamp without time zone` NULL
  - `  4` `sk_add_by` : `bigint` NULL
  - `  5` `sk_upd_date` : `timestamp without time zone` NULL
  - `  6` `sk_upd_by` : `bigint` NULL
  - `  7` `sk_tipe` : `character varying` NULL
  - `  8` `sk_to` : `text` NULL
  - `  9` `sk_to_emp_id` : `bigint` NULL
  - ` 10` `sk_from` : `character varying` NULL
  - ` 11` `sk_cc` : `character varying` NULL
  - ` 12` `sk_dd` : `date` NULL
  - ` 13` `sk_re` : `character varying` NULL
  - ` 14` `sk_untuk_diketahui` : `character varying` NULL
  - ` 15` `sk_untuk_diinformasikan` : `character varying` NULL
  - ` 16` `sk_untuk_disetujui` : `character varying` NULL
  - ` 17` `sk_untuk_ditindaklanjuti` : `character varying` NULL
  - ` 18` `sk_untuk_ditandatangani` : `character varying` NULL
  - ` 19` `sk_untuk_diarsipkan` : `character varying` NULL
  - ` 20` `sk_isi` : `text` NULL
  - ` 21` `sk_status` : `bigint` NULL
  - ` 22` `sk_balas` : `character varying` NULL

### `akses.sk_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sk_det_oid` : `uuid` NOT NULL
  - `  2` `sk_det_sk_oid` : `uuid` NULL
  - `  3` `sk_det_to_emp_id` : `bigint` NULL
  - `  4` `sk_det_read` : `bigint` NULL

### `akses.text_category`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `text_category_id` : `bigint` NOT NULL
  - `  2` `text_category_name` : `character varying` NULL
  - `  3` `text_category_aktif` : `character` NULL

### `akses.text_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `text_det_oid` : `uuid` NOT NULL
  - `  2` `text_det_text_mstr_oid` : `uuid` NULL
  - `  3` `text_det_add_date` : `timestamp without time zone` NULL
  - `  4` `text_det_add_by` : `timestamp without time zone` NULL
  - `  5` `text_det_aktif` : `character` NULL
  - `  6` `text_det_text` : `text` NULL

### `akses.text_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `text_mstr_oid` : `uuid` NOT NULL
  - `  2` `text_mstr_judul` : `character varying` NULL
  - `  3` `text_mstr_ringkas` : `text` NULL
  - `  4` `text_mstr_lengkap` : `text` NULL
  - `  5` `text_mstr_gambar` : `bigint` NULL
  - `  6` `text_mstr_add_date` : `timestamp without time zone` NULL
  - `  7` `text_mstr_add_by` : `bigint` NULL
  - `  8` `text_mstr_upd_date` : `timestamp without time zone` NULL
  - `  9` `text_mstr_upd_by` : `character varying` NULL
  - ` 10` `text_mstr_aktif` : `character` NULL
  - ` 11` `text_mstr_en_id` : `bigint` NULL
  - ` 12` `text_mstr_hrhirarki_id` : `bigint` NULL
  - ` 13` `text_mstr_category_id` : `bigint` NULL
  - ` 14` `text_mstr_start` : `date` NULL
  - ` 15` `text_mstr_end` : `date` NULL
  - ` 16` `text_mstr_em_id` : `bigint` NULL
  - ` 17` `text_mstr_read` : `bigint` NULL

## Schema `chatbot`

### `chatbot.chatbot`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `Id` : `integer` NOT NULL
  - `  2` `tag_message` : `text` NOT NULL

### `chatbot.chatbot_data`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `chatbot_data_id` : `uuid` NOT NULL
  - `  2` `add_by` : `character varying` NULL
  - `  3` `add_date` : `timestamp without time zone` NOT NULL
  - `  4` `upd_by` : `uuid` NULL
  - `  5` `upd_date` : `timestamp without time zone` NOT NULL
  - `  6` `rowversion` : `timestamp without time zone` NULL
  - `  7` `prompt_words` : `text` NOT NULL
  - `  8` `data_link_online` : `text` NOT NULL

### `chatbot.chatbot_files`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `chatbot_files_id` : `uuid` NOT NULL
  - `  2` `add_by` : `character varying` NULL
  - `  3` `add_date` : `timestamp without time zone` NOT NULL
  - `  4` `upd_by` : `character varying` NULL
  - `  5` `upd_date` : `timestamp without time zone` NOT NULL
  - `  6` `rowversion` : `timestamp without time zone` NULL
  - `  7` `prompt_words` : `text` NOT NULL
  - `  8` `file_name` : `text` NOT NULL
  - `  9` `content_length` : `integer` NOT NULL

### `chatbot.chatbot_group`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `chatbot_group_id` : `uuid` NOT NULL
  - `  2` `add_date` : `timestamp without time zone` NOT NULL
  - `  3` `upd_by` : `character varying` NULL
  - `  4` `upd_date` : `timestamp without time zone` NOT NULL
  - `  5` `rowversion` : `timestamp without time zone` NULL
  - `  6` `group_name` : `text` NOT NULL
  - `  7` `group_id` : `text` NOT NULL
  - `  8` `is_receive_broadcast` : `boolean` NOT NULL

### `chatbot.chatbot_response`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `Id` : `integer` NOT NULL
  - `  2` `tag_message` : `text` NOT NULL
  - `  3` `type` : `integer` NULL
  - `  4` `order` : `integer` NULL

## Schema `custom`

### `custom.codes_trans_type`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `transaction_type` : `character varying` NOT NULL

### `custom.dlvsc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlvsc_oid` : `uuid` NOT NULL
  - `  2` `dlvsc_dom_id` : `smallint` NOT NULL
  - `  3` `dlvsc_en_id` : `integer` NOT NULL
  - `  4` `dlvsc_branch_id` : `integer` NOT NULL
  - `  5` `dlvsc_cc_id` : `integer` NOT NULL
  - `  6` `dlvsc_add_by` : `character varying` NULL
  - `  7` `dlvsc_add_date` : `timestamp without time zone` NULL
  - `  8` `dlvsc_upd_by` : `character varying` NULL
  - `  9` `dlvsc_upd_date` : `timestamp without time zone` NULL
  - ` 10` `dlvsc_dt` : `timestamp without time zone` NULL
  - ` 11` `dlvsc_code` : `character varying` NOT NULL
  - ` 12` `dlvsc_date` : `date` NULL
  - ` 13` `dlvsc_dlv_oid` : `uuid` NULL
  - ` 14` `dlvsc_weight_content` : `numeric` NULL
  - ` 15` `dlvsc_weight_empty` : `numeric` NULL
  - ` 16` `dlvsc_net` : `numeric` NULL
  - ` 17` `dlvsc_remarks` : `character varying` NULL
  - ` 18` `dlvsc_um` : `integer` NULL
  - ` 19` `dlvsc_print_status` : `character` NULL
  - ` 20` `dlvsc_print_date` : `timestamp without time zone` NULL
  - ` 21` `dlvsc_print_count` : `integer` NULL
  - ` 22` `dlvsc_total_pw` : `numeric` NULL
  - ` 23` `dlvsc_trans_id` : `character` NULL

### `custom.dlvscd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlvscd_oid` : `uuid` NOT NULL
  - `  2` `dlvscd_dlvsc_oid` : `uuid` NOT NULL
  - `  3` `dlvscd_dt` : `timestamp without time zone` NULL
  - `  4` `dlvscd_qty` : `numeric` NULL
  - `  5` `dlvscd_remarks` : `character varying` NULL
  - `  6` `dlvscd_packaging_id` : `integer` NULL
  - `  7` `dlvscd_total_packaging` : `numeric` NULL
  - `  8` `dlvscd_packaging_weight` : `numeric` NULL

### `custom.doc_approve_type`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `doc_approve_type` : `integer` NOT NULL
  - `  2` `doc_approve_desc` : `character varying` NOT NULL

### `custom.menul_list`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `menul_name` : `character varying` NOT NULL
  - `  2` `menul_desc` : `character varying` NOT NULL

### `custom.rcvsc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rcvsc_oid` : `uuid` NOT NULL
  - `  2` `rcvsc_dom_id` : `smallint` NOT NULL
  - `  3` `rcvsc_en_id` : `integer` NOT NULL
  - `  4` `rcvsc_branch_id` : `integer` NOT NULL
  - `  5` `rcvsc_cc_id` : `integer` NOT NULL
  - `  6` `rcvsc_add_by` : `character varying` NULL
  - `  7` `rcvsc_add_date` : `timestamp without time zone` NULL
  - `  8` `rcvsc_upd_by` : `character varying` NULL
  - `  9` `rcvsc_upd_date` : `timestamp without time zone` NULL
  - ` 10` `rcvsc_dt` : `timestamp without time zone` NULL
  - ` 11` `rcvsc_code` : `character varying` NOT NULL
  - ` 12` `rcvsc_date` : `date` NULL
  - ` 13` `rcvsc_ptnr_id` : `integer` NOT NULL
  - ` 14` `rcvsc_packing_slip` : `character varying` NULL
  - ` 15` `rcvsc_vehicle_no` : `character varying` NULL
  - ` 16` `rcvsc_driver` : `character varying` NULL
  - ` 17` `rcvsc_driver_hp` : `character varying` NULL
  - ` 18` `rcvsc_remarks` : `character varying` NULL
  - ` 19` `rcvsc_weight_content` : `numeric` NULL
  - ` 20` `rcvsc_weight_empty` : `numeric` NULL
  - ` 21` `rcvsc_net` : `numeric` NULL
  - ` 22` `rcvsc_um` : `integer` NULL
  - ` 23` `rcvsc_print_status` : `character` NULL
  - ` 24` `rcvsc_print_date` : `timestamp without time zone` NULL
  - ` 25` `rcvsc_print_count` : `integer` NULL

### `custom.rcvscd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rcvscd_oid` : `uuid` NOT NULL
  - `  2` `rcvscd_rcvsc_oid` : `uuid` NOT NULL
  - `  3` `rcvscd_dt` : `timestamp without time zone` NULL
  - `  4` `rcvscd_pt_id` : `bigint` NOT NULL
  - `  5` `rcvscd_qty` : `numeric` NULL
  - `  6` `rcvscd_remarks` : `character varying` NULL

## Schema `hris`

### `hris.hr_alasan_terlambat`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kode` : `character varying` NOT NULL
  - `  2` `deskripsi` : `character varying` NULL

### `hris.hr_area_pot_makan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `area_id` : `integer` NULL

### `hris.hr_day_code`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `day_name` : `character varying` NOT NULL
  - `  2` `day_code` : `integer` NULL

### `hris.hr_day_holiday`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hr_day_date` : `date` NOT NULL
  - `  2` `hr_day_remark` : `character varying` NULL
  - `  3` `hr_day_add_by` : `character varying` NULL
  - `  4` `hr_day_add_date` : `timestamp without time zone` NULL
  - `  5` `hr_day_upd_by` : `character varying` NULL
  - `  6` `hr_day_upd_date` : `timestamp without time zone` NULL

### `hris.hr_finger`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `id_finger` : `bigint` NULL
  - `  2` `finger` : `text` NULL
  - `  3` `finger_index` : `integer` NULL
  - `  4` `finger_flag` : `integer` NULL

### `hris.hr_hub_kel`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrhub_id` : `character varying` NOT NULL
  - `  2` `hrhub_name` : `character varying` NULL

### `hris.hr_keluarga`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrkel_oid` : `uuid` NOT NULL
  - `  2` `hrkel_emp_id` : `integer` NULL
  - `  3` `hrkel_seq` : `integer` NULL
  - `  4` `hrkel_hub_id` : `character varying` NULL
  - `  5` `hrkel_nama` : `character varying` NULL
  - `  6` `hrkel_remarks` : `character varying` NULL
  - `  7` `hrkel_tgl_lahir` : `date` NULL

### `hris.hr_ket_tdk_msk`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ket_id` : `character varying` NOT NULL
  - `  2` `ket_desc` : `character varying` NULL
  - `  3` `ket_active` : `character varying` NULL

### `hris.hr_kontrak`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrkontrak_oid` : `uuid` NOT NULL
  - `  2` `hrkontrak_emp_id` : `integer` NULL
  - `  3` `hrkontrak_seq` : `integer` NULL
  - `  4` `hrkontrak_start` : `date` NULL
  - `  5` `hrkontrak_end` : `date` NULL
  - `  6` `hrkontrak_remarks` : `character varying` NULL
  - `  7` `hrkontrak_number` : `character varying` NULL

### `hris.hr_lembur_matrik_detail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `matrik_code` : `character varying` NULL
  - `  2` `jam_akhir` : `numeric` NULL
  - `  3` `pengali` : `numeric` NULL
  - `  4` `jam_awal` : `numeric` NULL

### `hris.hr_lembur_matrik_master`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `matrik_code` : `character varying` NOT NULL
  - `  2` `work_group` : `character varying` NULL
  - `  3` `keterangan` : `character varying` NULL
  - `  4` `day_code` : `integer` NULL
  - `  5` `is_holiday` : `character varying` NULL

### `hris.hr_mesin_finger`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kode_mesin` : `character varying` NOT NULL
  - `  2` `ip_address` : `character varying` NULL
  - `  3` `keterangan` : `character varying` NULL

### `hris.hr_office_hours_default`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `day_name` : `character varying` NOT NULL
  - `  2` `day_code` : `integer` NULL
  - `  3` `hour_in` : `time without time zone` NULL
  - `  4` `hour_leave` : `time without time zone` NULL
  - `  5` `break_out` : `time without time zone` NULL
  - `  6` `break_in` : `time without time zone` NULL
  - `  7` `break_option` : `boolean` NULL
  - `  8` `add_by` : `character varying` NULL
  - `  9` `add_date` : `timestamp without time zone` NULL
  - ` 10` `upd_by` : `character varying` NULL
  - ` 11` `upd_date` : `timestamp without time zone` NULL
  - ` 12` `day_oid` : `uuid` NOT NULL

### `hris.hr_office_hours_detail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NULL
  - `  2` `day_name` : `character varying` NULL
  - `  3` `hour_in` : `time without time zone` NULL
  - `  4` `hour_leave` : `time without time zone` NULL
  - `  5` `break_option` : `boolean` NULL
  - `  6` `break_out` : `time without time zone` NULL
  - `  7` `break_in` : `time without time zone` NULL
  - `  8` `total_istirahat` : `numeric` NULL

### `hris.hr_office_hours_master`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NOT NULL
  - `  2` `date_start` : `date` NULL
  - `  3` `date_end` : `date` NULL
  - `  4` `remark` : `character varying` NULL
  - `  5` `add_by` : `character varying` NULL
  - `  6` `add_date` : `timestamp without time zone` NULL
  - `  7` `upd_by` : `character varying` NULL
  - `  8` `upd_date` : `timestamp without time zone` NULL
  - `  9` `work_group` : `character varying` NULL
  - ` 10` `use_shift` : `character varying` NULL
  - ` 11` `code_shift` : `character varying` NULL

### `hris.hr_pendidikan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpend_oid` : `uuid` NOT NULL
  - `  2` `hrpend_emp_id` : `integer` NULL
  - `  3` `hrpend_seq` : `integer` NULL
  - `  4` `hrpend_jenjang` : `character varying` NULL
  - `  5` `hrpend_lembaga` : `character varying` NULL
  - `  6` `hrpend_jurusan` : `character varying` NULL
  - `  7` `hrpend_start` : `integer` NULL
  - `  8` `hrpend_end` : `integer` NULL

### `hris.hr_pendidikan_non`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpendn_oid` : `uuid` NOT NULL
  - `  2` `hrpendn_emp_id` : `integer` NULL
  - `  3` `hrpendn_seq` : `integer` NULL
  - `  4` `hrpendn_lembaga` : `character varying` NULL
  - `  5` `hrpendn_keterangan` : `character varying` NULL
  - `  6` `hrpendn_start` : `integer` NULL
  - `  7` `hrpendn_end` : `integer` NULL
  - `  8` `hrpendn_jns_pendidikan` : `character varying` NULL

### `hris.hr_pengalaman`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpeng_oid` : `uuid` NOT NULL
  - `  2` `hrpeng_emp_id` : `integer` NULL
  - `  3` `hrpeng_seq` : `integer` NULL
  - `  4` `hrpeng_perusahaan` : `character varying` NULL
  - `  5` `hrpeng_jabatan` : `character varying` NULL
  - `  6` `hrpeng_status` : `character varying` NULL
  - `  7` `hrpeng_start` : `integer` NULL
  - `  8` `hrpeng_end` : `integer` NULL

### `hris.hr_posisi`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpos_oid` : `uuid` NOT NULL
  - `  2` `hrpos_emp_id` : `integer` NULL
  - `  3` `hrpos_seq` : `integer` NULL
  - `  4` `hrpos_posisi` : `character varying` NULL
  - `  5` `hrpos_start` : `date` NULL
  - `  6` `hrpos_end` : `date` NULL
  - `  7` `hrpos_remarks` : `character varying` NULL

### `hris.hr_rating`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hr_rating_oid` : `uuid` NOT NULL
  - `  2` `hr_rating_emp_id` : `integer` NULL
  - `  3` `hr_rating_absensi` : `bigint` NULL

### `hris.hr_rule_sp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sp_seq` : `integer` NOT NULL
  - `  2` `limit_min` : `integer` NULL
  - `  3` `limit_max` : `integer` NULL
  - `  4` `sp_name` : `character varying` NULL
  - `  5` `sp_desc` : `character varying` NULL

### `hris.hr_temp_abs`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `temp_abs_oid` : `uuid` NOT NULL
  - `  2` `temp_abs_date` : `date` NULL
  - `  3` `temp_abs_emp_id` : `bigint` NULL
  - `  4` `temp_abs_status` : `integer` NULL
  - `  5` `temp_abs_time` : `timestamp without time zone` NULL
  - `  6` `temp_abs_processed` : `character varying` NULL
  - `  7` `temp_abs_mesin` : `character varying` NULL
  - `  8` `temp_abs_mode` : `integer` NULL

### `hris.hr_temp_day`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `temp_day_date` : `date` NOT NULL
  - `  2` `temp_day_holiday` : `boolean` NULL
  - `  3` `temp_day_group` : `character varying` NULL

### `hris.hr_temp_week`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hr_temp_week_id` : `uuid` NOT NULL
  - `  2` `hr_temp_week_week` : `integer` NULL
  - `  3` `hr_temp_week_start` : `date` NULL
  - `  4` `hr_temp_week_end` : `date` NULL

### `hris.hr_week_temp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hr_week_temp_id` : `uuid` NOT NULL
  - `  2` `hr_week_temp_week` : `integer` NULL
  - `  3` `hr_week_temp_start` : `integer` NULL
  - `  4` `hr_week_temp_end` : `integer` NULL
  - `  5` `hr_week_temp_month` : `integer` NULL
  - `  6` `hr_week_temp_year` : `integer` NULL

### `hris.hr_work_group`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wg_id` : `character varying` NOT NULL
  - `  2` `wg_desc` : `character varying` NULL
  - `  3` `wg_active` : `character varying` NULL
  - `  4` `use_shift` : `character varying` NULL

### `hris.hrabs_lap_terlambat_new2`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrabs_lap_terlambat_id` : `character varying` NULL
  - `  2` `hrabs_lap_terlambat` : `date` NULL
  - `  3` `hrabs_lap_terlambat_emp_id` : `bigint` NULL
  - `  4` `hrabs_lap_terlambat_kali_1` : `bigint` NULL
  - `  5` `hrabs_lap_terlambat_ket_kali_1` : `bigint` NULL
  - `  6` `hrabs_lap_terlambat_kali_2` : `bigint` NULL
  - `  7` `hrabs_lap_terlambat_ket_kali_2` : `bigint` NULL
  - `  8` `hrabs_lap_terlambat_kali_3` : `bigint` NULL
  - `  9` `hrabs_lap_terlambat_ket_kali_3` : `bigint` NULL
  - ` 10` `hrabs_lap_terlambat_kali_4` : `bigint` NULL
  - ` 11` `hrabs_lap_terlambat_ket_kali_4` : `bigint` NULL
  - ` 12` `hrabs_lap_terlambat_kali_5` : `bigint` NULL
  - ` 13` `hrabs_lap_terlambat_ket_kali_5` : `bigint` NULL
  - ` 14` `hrabs_lap_terlambat_kali_6` : `bigint` NULL
  - ` 15` `hrabs_lap_terlambat_ket_kali_6` : `bigint` NULL
  - ` 16` `hrabs_lap_terlambat_jam` : `numeric` NULL
  - ` 17` `hrabs_lap_terlambat_kode` : `character varying` NULL
  - ` 18` `hrabs_lap_terlambat_sanksi` : `character varying` NULL
  - ` 19` `hrabs_lap_terlambat_tot` : `bigint` NULL
  - ` 20` `hrabs_lap_terlambat_report` : `character varying` NULL
  - ` 21` `hrabs_lap_terlambat_tahun` : `bigint` NULL

### `hris.hrabs_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrabs_oid` : `uuid` NOT NULL
  - `  2` `hrabs_emp_id` : `bigint` NULL
  - `  3` `hrabs_tanggal` : `date` NULL
  - `  4` `hrabs_nmasuk` : `timestamp without time zone` NULL
  - `  5` `hrabs_nkeluar` : `timestamp without time zone` NULL
  - `  6` `hrabs_nkeluar_ist` : `timestamp without time zone` NULL
  - `  7` `hrabs_nmasuk_ist` : `timestamp without time zone` NULL
  - `  8` `hrabs_lmasuk` : `timestamp without time zone` NULL
  - `  9` `hrabs_lpulang` : `timestamp without time zone` NULL
  - ` 10` `hrabs_ket_alasan` : `character varying` NULL
  - ` 11` `hrabs_lmasuk_ist` : `timestamp without time zone` NULL
  - ` 12` `hrabs_lkeluar_ist` : `timestamp without time zone` NULL
  - ` 13` `hrabs_ijkeluar` : `timestamp without time zone` NULL
  - ` 14` `hrabs_ijmasuk` : `timestamp without time zone` NULL
  - ` 15` `add_by` : `character varying` NULL
  - ` 16` `add_date` : `timestamp without time zone` NULL
  - ` 17` `upd_by` : `character varying` NULL
  - ` 18` `upd_date` : `timestamp without time zone` NULL
  - ` 19` `hrabs_ket_tidak_masuk` : `character varying` NULL
  - ` 20` `hrabs_jam_kerja` : `numeric` NULL
  - ` 21` `hrabs_keterlambatan` : `numeric` NULL
  - ` 22` `hrabs_istirahat` : `numeric` NULL
  - ` 23` `hrabs_jam_kerja_net` : `numeric` NULL
  - ` 24` `hrabs_status_gen_keterlambatan` : `character varying` NULL
  - ` 25` `hrabs_jam_lembur` : `numeric` NULL
  - ` 26` `hrabs_jam_lembur_ttl` : `numeric` NULL
  - ` 27` `hrabs_dinas_keluar` : `timestamp without time zone` NULL
  - ` 28` `hrabs_dinas_masuk` : `timestamp without time zone` NULL
  - ` 29` `hrabs_apprv_lembur` : `character varying` NULL
  - ` 30` `hrabs_kekurangan_jam_kerja` : `numeric` NULL
  - ` 31` `hrabs_kode_shift` : `character varying` NULL
  - ` 32` `hrabs_status_gen_lembur` : `character varying` NULL
  - ` 33` `hrabs_status_gen_jam_kerja` : `character varying` NULL
  - ` 34` `hrabs_makan_lembur` : `numeric` NULL
  - ` 35` `hrabs_status` : `character varying` NULL
  - ` 36` `hrabs_jam_kerja_seharusnya` : `numeric` NULL
  - ` 37` `hrabs_alasan_terlambat` : `character varying` NULL
  - ` 38` `hrabs_pot_makan` : `numeric` NULL
  - ` 39` `hrabs_status_gen_makan` : `character varying` NULL

### `hris.hrabs_pekanan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrabs_pekanan_tahun` : `integer` NULL
  - `  2` `hrabs_pekanan_bulan` : `integer` NULL
  - `  3` `hrabs_pekanan_mingguan` : `integer` NULL
  - `  4` `hrabs_pekanan_awal` : `integer` NULL
  - `  5` `hrabs_pekanan_akhir` : `integer` NULL
  - `  6` `hrabs_pekanan_status` : `integer` NULL

### `hris.hrabs_terlambat`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrabs_terlambat_emp_id` : `integer` NOT NULL
  - `  2` `hrabs_terlambat_date` : `date` NOT NULL
  - `  3` `hrabs_terlambat` : `time without time zone` NOT NULL
  - `  4` `hrabs_terlambat_keterangan` : `character varying` NULL

### `hris.hrabs_terlambat_temp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrabs_terlambat_temp_id` : `character varying` NULL
  - `  2` `hrabs_terlambat_temp` : `date` NULL
  - `  3` `hrabs_terlambat_temp_emp_id` : `bigint` NULL
  - `  4` `hrabs_terlambat_temp_date` : `date` NULL
  - `  5` `hrabs_terlambat_temp_jam` : `numeric` NULL
  - `  6` `hrabs_terlambat_temp_kali` : `bigint` NULL
  - `  7` `hrabs_terlambat_temp_ket_kali` : `bigint` NULL
  - `  8` `hrabs_terlambat_temp_keterangan` : `text` NULL
  - `  9` `hrabs_terlambat_temp_kode` : `character varying` NULL
  - ` 10` `hrabs_terlambat_temp_status` : `character varying` NULL

### `hris.hrabsn_send_email`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrabsn_send_email` : `bigint` NOT NULL
  - `  2` `hrabsn_send_email_emp_id` : `bigint` NOT NULL

### `hris.hrabsn_send_sms`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrabsn_send_sms` : `bigint` NOT NULL
  - `  2` `hrabsn_send_sms_emp_id` : `bigint` NOT NULL

### `hris.hrabsn_sms`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrabsn_sms_emp_id` : `bigint` NOT NULL
  - `  2` `hrabsn_sms_date` : `date` NOT NULL
  - `  3` `hrabsn_sms_masuk` : `timestamp without time zone` NULL
  - `  4` `hrabsn_sms_keluar` : `timestamp without time zone` NULL
  - `  5` `hrabsn_sms_send_emp_id` : `bigint` NOT NULL

### `hris.hredit_gaji`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hredit_oid` : `uuid` NOT NULL
  - `  2` `hredit_dom_id` : `smallint` NULL
  - `  3` `hredit_add_by` : `character varying` NULL
  - `  4` `hredit_add_date` : `timestamp without time zone` NULL
  - `  5` `hredit_upd_by` : `character varying` NULL
  - `  6` `hredit_upd_date` : `timestamp without time zone` NULL
  - `  7` `hredit_emp_id` : `bigint` NULL
  - `  8` `hrpayd_gj_sblm` : `numeric` NULL
  - `  9` `hrpayd_gj_tujuan` : `numeric` NULL
  - ` 10` `hrpayd_fix` : `character` NULL
  - ` 11` `hrpayd_sisa` : `character` NULL
  - ` 12` `hrpayd_gapok1` : `numeric` NULL
  - ` 13` `hrpayd_perum1` : `numeric` NULL
  - ` 14` `hrpayd_transport1` : `numeric` NULL
  - ` 15` `hrpayd_bbm1` : `numeric` NULL
  - ` 16` `hrpayd_makan1` : `numeric` NULL
  - ` 17` `hrpayd_telp1` : `numeric` NULL
  - ` 18` `hrpayd_gapok2` : `numeric` NULL
  - ` 19` `hrpayd_perum2` : `numeric` NULL
  - ` 20` `hrpayd_transport2` : `numeric` NULL
  - ` 21` `hrpayd_bbm2` : `numeric` NULL
  - ` 22` `hrpayd_makan2` : `numeric` NULL
  - ` 23` `hrpayd_telp2` : `numeric` NULL
  - ` 24` `hrpayd_lain2` : `numeric` NULL
  - ` 25` `hrpayd_kenaikan` : `numeric` NULL
  - ` 26` `hredit_dt` : `timestamp without time zone` NULL

### `hris.hrgaji_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrgaji_code` : `character varying` NOT NULL
  - `  2` `hrgaji_periode` : `character varying` NULL
  - `  3` `hrgaji_add_by` : `character varying` NULL
  - `  4` `hrgaji_add_date` : `timestamp without time zone` NULL
  - `  5` `hrgaji_upd_by` : `character varying` NULL
  - `  6` `hrgaji_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrgaji_date` : `date` NULL
  - `  8` `hrgaji_remarks` : `character varying` NULL
  - `  9` `hrgaji_total` : `numeric` NULL

### `hris.hrgaji_mstr_borongan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrgaji_code` : `character varying` NOT NULL
  - `  2` `hrgaji_periode` : `character varying` NULL
  - `  3` `hrgaji_add_by` : `character varying` NULL
  - `  4` `hrgaji_add_date` : `timestamp without time zone` NULL
  - `  5` `hrgaji_upd_by` : `character varying` NULL
  - `  6` `hrgaji_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrgaji_date` : `date` NULL
  - `  8` `hrgaji_remarks` : `character varying` NULL
  - `  9` `hrgaji_total` : `numeric` NULL

### `hris.hrgajid_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrgajid_oid` : `uuid` NOT NULL
  - `  2` `hrgajid_emp_id` : `integer` NULL
  - `  3` `hrgajid_emp_nik_old` : `character varying` NULL
  - `  4` `hrgajid_emp_fname` : `character varying` NULL
  - `  5` `hrgajid_pangkat_id` : `real` NULL
  - `  6` `hrgajid_pangkat_desc` : `character varying` NULL
  - `  7` `hrgajid_gol_id` : `integer` NULL
  - `  8` `hrgajid_gol_desc` : `character varying` NULL
  - `  9` `hrgajid_status_nikah` : `character varying` NULL
  - ` 10` `hrgajid_masa_kerja` : `character varying` NULL
  - ` 11` `hrgajid_departemen` : `character varying` NULL
  - ` 12` `hrgajid_gapok` : `bytea` NULL
  - ` 13` `hrgajid_t_perum` : `bytea` NULL
  - ` 14` `hrgajid_t_transport` : `bytea` NULL
  - ` 15` `hrgajid_t_bbm` : `bytea` NULL
  - ` 16` `hrgajid_t_lembur` : `bytea` NULL
  - ` 17` `hrgajid_t_telepon` : `bytea` NULL
  - ` 18` `hrgajid_makan` : `bytea` NULL
  - ` 19` `hrgajid_t_fungsional` : `bytea` NULL
  - ` 20` `hrgajid_u_makan_lembur` : `bytea` NULL
  - ` 21` `hrgajid_klaim_berobat` : `bytea` NULL
  - ` 22` `hrgajid_santunan` : `bytea` NULL
  - ` 23` `hrgajid_kurang_bayar` : `bytea` NULL
  - ` 24` `hrgajid_sblm_lembur_obat_bns` : `bytea` NULL
  - ` 25` `hrgajid_sblm_pot` : `bytea` NULL
  - ` 26` `hrgajid_jam_kerja` : `numeric` NULL
  - ` 27` `hrgajid_cicilan_hutang` : `bytea` NULL
  - ` 28` `hrgajid_pemby_buku` : `bytea` NULL
  - ` 29` `hrgajid_iuran_koperasi` : `bytea` NULL
  - ` 30` `hrgajid_pot_trans_makan` : `bytea` NULL
  - ` 31` `hrgajid_jml_tot_jam_lembur` : `numeric` NULL
  - ` 32` `hrgajid_jml_jam_kerja_shrsnya` : `numeric` NULL
  - ` 33` `hrgajid_kekurangan_jam_kerja` : `numeric` NULL
  - ` 34` `hrgajid_cuti_lain` : `numeric` NULL
  - ` 35` `hrgajid_izin` : `numeric` NULL
  - ` 36` `hrgajid_sakit_ket_dokter` : `numeric` NULL
  - ` 37` `hrgajid_sakit_t_ket_dokter` : `numeric` NULL
  - ` 38` `hrgajid_cuti` : `numeric` NULL
  - ` 39` `hrgajid_alpa` : `numeric` NULL
  - ` 40` `hrgajid_hrgaji_code` : `character varying` NULL
  - ` 41` `hrgajid_status_karyawan` : `character varying` NULL
  - ` 42` `hrgajid_seq` : `integer` NULL
  - ` 43` `hrgajid_tot_potongan` : `bytea` NULL
  - ` 44` `hrgajid_tot_thp` : `bytea` NULL
  - ` 45` `hrgajid_en_id` : `integer` NULL
  - ` 46` `hrgajid_en_desc` : `character varying` NULL
  - ` 47` `hrgajid_no_urut` : `integer` NULL
  - ` 48` `hrgajid_status_active` : `character varying` NULL
  - ` 49` `hrgajid_pot_makan` : `bytea` NULL

### `hris.hrgajid_det_borongan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrgajid_oid` : `uuid` NOT NULL
  - `  2` `hrgajid_emp_id` : `integer` NULL
  - `  3` `hrgajid_emp_nik_old` : `character varying` NULL
  - `  4` `hrgajid_emp_fname` : `character varying` NULL
  - `  5` `hrgajid_pangkat_id` : `integer` NULL
  - `  6` `hrgajid_pangkat_desc` : `character varying` NULL
  - `  7` `hrgajid_gol_id` : `integer` NULL
  - `  8` `hrgajid_gol_desc` : `character varying` NULL
  - `  9` `hrgajid_status_nikah` : `character varying` NULL
  - ` 10` `hrgajid_masa_kerja` : `character varying` NULL
  - ` 11` `hrgajid_departemen` : `character varying` NULL
  - ` 12` `hrgajid_gaji` : `bytea` NULL
  - ` 13` `hrgajid_gaji_lembur` : `bytea` NULL
  - ` 14` `hrgajid_t_makan_lembur` : `bytea` NULL
  - ` 15` `hrgajid_perbaikan` : `bytea` NULL
  - ` 16` `hrgajid_jml_jam_kerja` : `numeric` NULL
  - ` 17` `hrgajid_jml_jam_lembur` : `numeric` NULL
  - ` 18` `hrgajid_cuti_lain` : `numeric` NULL
  - ` 19` `hrgajid_izin` : `numeric` NULL
  - ` 20` `hrgajid_sakit_ket_dokter` : `numeric` NULL
  - ` 21` `hrgajid_sakit_t_ket_dokter` : `numeric` NULL
  - ` 22` `hrgajid_cuti` : `numeric` NULL
  - ` 23` `hrgajid_alpa` : `numeric` NULL
  - ` 24` `hrgajid_hrgaji_code` : `character varying` NULL
  - ` 25` `hrgajid_status_karyawan` : `character varying` NULL
  - ` 26` `hrgajid_seq` : `integer` NULL
  - ` 27` `hrgajid_tot_thp` : `bytea` NULL
  - ` 28` `hrgajid_en_id` : `integer` NULL
  - ` 29` `hrgajid_en_desc` : `character varying` NULL
  - ` 30` `hrgajid_no_urut` : `integer` NULL

### `hris.hrgol_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrgol_dom_id` : `smallint` NULL
  - `  2` `hrgol_en_id` : `integer` NULL
  - `  3` `hrgol_add_by` : `character varying` NULL
  - `  4` `hrgol_add_date` : `timestamp without time zone` NULL
  - `  5` `hrgol_upd_by` : `character varying` NULL
  - `  6` `hrgol_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrgol_id` : `integer` NOT NULL
  - `  8` `hrgol_code` : `character varying` NULL
  - `  9` `hrgol_name` : `character varying` NULL
  - ` 10` `hrgol_active` : `character` NULL
  - ` 11` `hrgol_dt` : `timestamp without time zone` NULL

### `hris.hrhirarki`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `id` : `integer` NOT NULL
  - `  2` `code` : `character varying` NULL
  - `  3` `description` : `character varying` NULL
  - `  4` `parent` : `integer` NULL
  - `  5` `add_by` : `character varying` NULL
  - `  6` `add_date` : `timestamp without time zone` NULL
  - `  7` `upd_by` : `character varying` NULL
  - `  8` `upd_date` : `timestamp without time zone` NULL
  - `  9` `inisial_jabatan` : `character varying` NULL

### `hris.hrjob_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrjob_kode` : `character varying` NOT NULL
  - `  2` `hrjob_tanggal` : `date` NULL
  - `  3` `hrjob_hirarki` : `integer` NULL
  - `  4` `hrjob_ket` : `character varying` NULL
  - `  5` `hrjob_add_by` : `character varying` NULL
  - `  6` `hrjob_add_date` : `timestamp without time zone` NULL
  - `  7` `hrjob_upd_by` : `character varying` NULL
  - `  8` `hrjob_upd_date` : `timestamp without time zone` NULL

### `hris.hrjobd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrjobd_oid` : `uuid` NOT NULL
  - `  2` `hrjobd_hrjob_kode` : `character varying` NULL
  - `  3` `hrjobd_job` : `character varying` NULL
  - `  4` `hrjobd_seq` : `integer` NULL

### `hris.hrkasbon_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrkasbon_dom_id` : `smallint` NULL
  - `  2` `hrkasbon_en_id` : `integer` NULL
  - `  3` `hrkasbon_add_by` : `character varying` NULL
  - `  4` `hrkasbon_add_date` : `timestamp without time zone` NULL
  - `  5` `hrkasbon_upd_by` : `character varying` NULL
  - `  6` `hrkasbon_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrkasbon_code` : `character varying` NOT NULL
  - `  8` `hrkasbon_date` : `date` NULL
  - `  9` `hrkasbon_emp_id` : `bigint` NULL
  - ` 10` `hrkasbon_total` : `numeric` NULL
  - ` 11` `hrkasbon_remarks` : `character varying` NULL
  - ` 12` `hrkasbon_dt` : `timestamp without time zone` NULL

### `hris.hrkasbond_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrkasbond_oid` : `uuid` NOT NULL
  - `  2` `hrkasbond_hrkasbon_code` : `character varying` NULL
  - `  3` `hrkasbond_seq` : `smallint` NULL
  - `  4` `hrkasbond_jumlah` : `numeric` NULL
  - `  5` `hrkasbond_dt` : `timestamp without time zone` NULL
  - `  6` `hrkasbond_periode` : `character varying` NULL
  - `  7` `hrkasbond_remarks` : `character varying` NULL

### `hris.hrklaim_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrklaim_dom_id` : `smallint` NULL
  - `  2` `hrklaim_en_id` : `integer` NULL
  - `  3` `hrklaim_add_by` : `character varying` NULL
  - `  4` `hrklaim_add_date` : `timestamp without time zone` NULL
  - `  5` `hrklaim_upd_by` : `character varying` NULL
  - `  6` `hrklaim_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrklaim_code` : `character varying` NOT NULL
  - `  8` `hrklaim_date` : `date` NULL
  - `  9` `hrklaim_gl_date` : `date` NULL
  - ` 10` `hrklaim_emp_id` : `bigint` NULL
  - ` 11` `hrklaim_platfon` : `numeric` NULL
  - ` 12` `hrklaim_total` : `numeric` NULL
  - ` 13` `hrklaim_ditanggung` : `numeric` NULL
  - ` 14` `hrklaim_remarks` : `character varying` NULL
  - ` 15` `hrklaim_dt` : `timestamp without time zone` NULL
  - ` 16` `hrklaim_periode` : `character varying` NULL

### `hris.hrklaimd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrklaimd_oid` : `uuid` NOT NULL
  - `  2` `hrklaimd_hrklaim_code` : `character varying` NULL
  - `  3` `hrklaimd_seq` : `smallint` NULL
  - `  4` `hrklaimd_relation` : `integer` NULL
  - `  5` `hrklaimd_name` : `character varying` NULL
  - `  6` `hrklaimd_sakit` : `character varying` NULL
  - `  7` `hrklaimd_operasi` : `character` NULL
  - `  8` `hrklaimd_keterangan` : `character varying` NULL
  - `  9` `hrklaimd_biaya` : `numeric` NULL
  - ` 10` `hrklaimd_dt` : `timestamp without time zone` NULL

### `hris.hrkontrak`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrkontrak_oid` : `uuid` NOT NULL
  - `  2` `hrkontrak_emp_id` : `integer` NULL
  - `  3` `hrkontrak_seq` : `integer` NULL
  - `  4` `hrkontrak_start` : `date` NULL
  - `  5` `hrkontrak_end` : `date` NULL
  - `  6` `hrkontrak_remarks` : `character varying` NULL
  - `  7` `hrkontrak_number` : `character varying` NULL

### `hris.hrkurang_bayar`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrkurang_dom_id` : `smallint` NULL
  - `  2` `hrkurang_en_id` : `integer` NULL
  - `  3` `hrkurang_add_by` : `character varying` NULL
  - `  4` `hrkurang_add_date` : `timestamp without time zone` NULL
  - `  5` `hrkurang_upd_by` : `character varying` NULL
  - `  6` `hrkurang_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrkurang_code` : `character varying` NOT NULL
  - `  8` `hrkurang_date` : `date` NULL
  - `  9` `hrkurang_emp_id` : `bigint` NULL
  - ` 10` `hrkurang_jumlah` : `numeric` NULL
  - ` 11` `hrkurang_remarks` : `character varying` NULL
  - ` 12` `hrkurang_dt` : `timestamp without time zone` NULL
  - ` 13` `hrkurang_periode` : `character varying` NULL

### `hris.hrpay_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpay_oid` : `uuid` NOT NULL
  - `  2` `hrperiode_oid` : `uuid` NULL
  - `  3` `hrpay_add_by` : `character varying` NULL
  - `  4` `hrpay_add_date` : `timestamp without time zone` NULL
  - `  5` `hrpay_upd_by` : `character varying` NULL
  - `  6` `hrpay_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrpay_code` : `character varying` NULL
  - `  8` `hrpay_date` : `date` NULL
  - `  9` `hrpay_gl_date` : `date` NULL
  - ` 10` `hrpay_desc` : `character varying` NULL
  - ` 11` `hrpay_status` : `character` NULL
  - ` 12` `hrpay_dt` : `timestamp without time zone` NULL

### `hris.hrpayd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpayd_oid` : `uuid` NOT NULL
  - `  2` `hrpayd_hrpay_oid` : `uuid` NULL
  - `  3` `hrpayd_emp_id` : `bigint` NULL
  - `  4` `hrpayd_kode_gaji` : `character varying` NULL
  - `  5` `hrpayd_nik` : `character varying` NULL
  - `  6` `hrpayd_nama_lengkap` : `character varying` NULL
  - `  7` `hrpayd_nlevel` : `character varying` NULL
  - `  8` `hrpayd_golongan` : `character varying` NULL
  - `  9` `hrpayd_pangkat` : `character varying` NULL
  - ` 10` `hrpayd_gapok` : `numeric` NULL
  - ` 11` `hrpayd_rumah` : `numeric` NULL
  - ` 12` `hrpayd_transport` : `numeric` NULL
  - ` 13` `hrpayd_bbm` : `numeric` NULL
  - ` 14` `hrpayd_telp` : `numeric` NULL
  - ` 15` `hrpayd_makan` : `numeric` NULL
  - ` 16` `hrpayd_fungsional` : `numeric` NULL
  - ` 17` `hrpayd_gaji` : `numeric` NULL
  - ` 18` `hrpayd_pph21` : `numeric` NULL
  - ` 19` `hrpayd_klaim_berobat` : `numeric` NULL
  - ` 20` `hrpayd_klaim_operasi` : `numeric` NULL
  - ` 21` `hrpayd_thr` : `numeric` NULL
  - ` 22` `hrpayd_lembur` : `numeric` NULL
  - ` 23` `hrpayd_lembur_makan` : `numeric` NULL
  - ` 24` `hrpayd_shift` : `numeric` NULL
  - ` 25` `hrpayd_kekurangan_byl` : `numeric` NULL
  - ` 26` `hrpayd_bonus` : `numeric` NULL
  - ` 27` `hrpayd_gaji_bruto` : `numeric` NULL
  - ` 28` `hrpayd_faktur_sygma` : `numeric` NULL
  - ` 29` `hrpayd_kasbon` : `numeric` NULL
  - ` 30` `hrpayd_kelebihan_byl` : `numeric` NULL
  - ` 31` `hrpayd_pot_koperasi` : `numeric` NULL
  - ` 32` `hrpayd_pot_premi_trans` : `numeric` NULL
  - ` 33` `hrpayd_pot_kerja` : `numeric` NULL
  - ` 34` `hrpayd_pot_internal` : `numeric` NULL
  - ` 35` `hrpayd_pot_external` : `numeric` NULL
  - ` 36` `hrpayd_gaji_net` : `numeric` NULL
  - ` 37` `hrpayd_transfer_bank` : `numeric` NULL
  - ` 38` `hrpayd_faktur_quran` : `numeric` NULL
  - ` 39` `hrpayd_faktur_kreasi` : `numeric` NULL
  - ` 40` `hrpayd_no_rek` : `character varying` NULL
  - ` 41` `hrpayd_jam_lembur` : `character varying` NULL
  - ` 42` `hrpayd_jam_hrs_kerja` : `character varying` NULL
  - ` 43` `hrpayd_kekurangan_jamkerja` : `character varying` NULL
  - ` 44` `hrpayd_cuti` : `smallint` NULL
  - ` 45` `hrpayd_ijin` : `smallint` NULL
  - ` 46` `hrpayd_sakit_ket_dokter` : `smallint` NULL
  - ` 47` `hrpayd_sakit_tket_dokter` : `smallint` NULL
  - ` 48` `hrpayd_salfa` : `smallint` NULL
  - ` 49` `hrpayd_masa_kerja` : `character varying` NULL
  - ` 50` `hrpayd_department` : `character varying` NULL

### `hris.hrpembuku_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpembuku_dom_id` : `smallint` NULL
  - `  2` `hrpembuku_en_id` : `integer` NULL
  - `  3` `hrpembuku_add_by` : `character varying` NULL
  - `  4` `hrpembuku_add_date` : `timestamp without time zone` NULL
  - `  5` `hrpembuku_upd_by` : `character varying` NULL
  - `  6` `hrpembuku_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrpembuku_code` : `character varying` NOT NULL
  - `  8` `hrpembuku_date` : `date` NULL
  - `  9` `hrpembuku_emp_id` : `bigint` NULL
  - ` 10` `hrpembuku_total` : `numeric` NULL
  - ` 11` `hrpembuku_remarks` : `character varying` NULL
  - ` 12` `hrpembuku_dt` : `timestamp without time zone` NULL

### `hris.hrpembukud_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpembukud_oid` : `uuid` NOT NULL
  - `  2` `hrpembukud_hrpembuku_code` : `character varying` NULL
  - `  3` `hrpembukud_seq` : `smallint` NULL
  - `  4` `hrpembukud_jumlah` : `numeric` NULL
  - `  5` `hrpembukud_dt` : `timestamp without time zone` NULL
  - `  6` `hrpembukud_periode` : `character varying` NULL
  - `  7` `hrpembukud_remarks` : `character varying` NULL

### `hris.hrperiode_borongan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrperiode_add_by` : `character varying` NULL
  - `  2` `hrperiode_add_date` : `timestamp without time zone` NULL
  - `  3` `hrperiode_upd_by` : `character varying` NULL
  - `  4` `hrperiode_upd_date` : `timestamp without time zone` NULL
  - `  5` `hrperiode_code` : `character varying` NOT NULL
  - `  6` `hrperiode_start_date` : `date` NULL
  - `  7` `hrperiode_end_date` : `date` NULL
  - `  8` `hrperiode_status` : `character` NULL
  - `  9` `hrperiode_dt` : `timestamp without time zone` NULL
  - ` 10` `hrperiode_bulan_code` : `character varying` NULL
  - ` 11` `tahun` : `integer` NULL

### `hris.hrperiode_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrperiode_add_by` : `character varying` NULL
  - `  2` `hrperiode_add_date` : `timestamp without time zone` NULL
  - `  3` `hrperiode_upd_by` : `character varying` NULL
  - `  4` `hrperiode_upd_date` : `timestamp without time zone` NULL
  - `  5` `hrperiode_code` : `character varying` NOT NULL
  - `  6` `hrperiode_start_date` : `date` NULL
  - `  7` `hrperiode_end_date` : `date` NULL
  - `  8` `hrperiode_status` : `character` NULL
  - `  9` `hrperiode_dt` : `timestamp without time zone` NULL
  - ` 10` `hrperiode_bulan_code` : `character varying` NULL
  - ` 11` `tahun` : `integer` NULL

### `hris.hrpos_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrpos_oid` : `uuid` NOT NULL
  - `  2` `hrpos_dom_id` : `smallint` NULL
  - `  3` `hrpos_en_id` : `integer` NULL
  - `  4` `hrpos_add_by` : `character varying` NULL
  - `  5` `hrpos_add_date` : `timestamp without time zone` NULL
  - `  6` `hrpos_upd_by` : `character varying` NULL
  - `  7` `hrpos_upd_date` : `timestamp without time zone` NULL
  - `  8` `hrpos_id` : `integer` NULL
  - `  9` `hrpos_code` : `character varying` NULL
  - ` 10` `hrpos_name` : `character varying` NULL
  - ` 11` `hrpos_active` : `character` NULL
  - ` 12` `hrpos_dt` : `timestamp without time zone` NULL

### `hris.hrsantunan_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrsantunan_dom_id` : `smallint` NULL
  - `  2` `hrsantunan_en_id` : `integer` NULL
  - `  3` `hrsantunan_add_by` : `character varying` NULL
  - `  4` `hrsantunan_add_date` : `timestamp without time zone` NULL
  - `  5` `hrsantunan_upd_by` : `character varying` NULL
  - `  6` `hrsantunan_upd_date` : `timestamp without time zone` NULL
  - `  7` `hrsantunan_code` : `character varying` NOT NULL
  - `  8` `hrsantunan_date` : `date` NULL
  - `  9` `hrsantunan_emp_id` : `bigint` NULL
  - ` 10` `hrsantunan_jumlah` : `numeric` NULL
  - ` 11` `hrsantunan_remarks` : `character varying` NULL
  - ` 12` `hrsantunan_dt` : `timestamp without time zone` NULL
  - ` 13` `hrsantunan_periode` : `character varying` NULL

### `hris.hrstatus_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrstatus_oid` : `uuid` NOT NULL
  - `  2` `hrstatus_dom_id` : `smallint` NULL
  - `  3` `hrstatus_en_id` : `integer` NULL
  - `  4` `hrstatus_add_by` : `character varying` NULL
  - `  5` `hrstatus_add_date` : `timestamp without time zone` NULL
  - `  6` `hrstatus_upd_by` : `character varying` NULL
  - `  7` `hrstatus_upd_date` : `timestamp without time zone` NULL
  - `  8` `hrstatus_id` : `integer` NULL
  - `  9` `hrstatus_code` : `character varying` NULL
  - ` 10` `hrstatus_name` : `character varying` NULL
  - ` 11` `hrstatus_active` : `character` NULL
  - ` 12` `hrstatus_dt` : `timestamp without time zone` NULL

### `hris.hrwi_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrwi_kode` : `character varying` NOT NULL
  - `  2` `hrwi_tanggal` : `date` NULL
  - `  3` `hrwi_hirarki` : `integer` NULL
  - `  4` `hrwi_ket` : `character varying` NULL
  - `  5` `hrwi_add_by` : `character varying` NULL
  - `  6` `hrwi_add_date` : `timestamp without time zone` NULL
  - `  7` `hrwi_upd_by` : `character varying` NULL
  - `  8` `hrwi_upd_date` : `timestamp without time zone` NULL

### `hris.hrwid_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `hrwid_oid` : `uuid` NOT NULL
  - `  2` `hrwid_hrwi_kode` : `character varying` NULL
  - `  3` `hrwid_wi` : `character varying` NULL
  - `  4` `hrwid_seq` : `integer` NULL

### `hris.mnt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `mnt_code` : `character varying` NOT NULL
  - `  2` `mnt_desc` : `character varying` NULL
  - `  3` `mnt_romawi` : `character varying` NULL
  - `  4` `mnt_dt` : `timestamp without time zone` NULL

### `hris.pangkat_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pangkat_dom_id` : `smallint` NULL
  - `  2` `pangkat_en_id` : `integer` NULL
  - `  3` `pangkat_add_by` : `character varying` NULL
  - `  4` `pangkat_add_date` : `timestamp without time zone` NULL
  - `  5` `pangkat_upd_by` : `character varying` NULL
  - `  6` `pangkat_upd_date` : `timestamp without time zone` NULL
  - `  7` `pangkat_id` : `real` NOT NULL
  - `  8` `pangkat_code` : `character varying` NULL
  - `  9` `pangkat_name` : `character varying` NULL
  - ` 10` `pangkat_platfon_rawat_jalan` : `numeric` NULL
  - ` 11` `pangkat_platfon_rawat_inap` : `numeric` NULL
  - ` 12` `pangkat_active` : `character` NULL
  - ` 13` `pangkat_dt` : `timestamp without time zone` NULL
  - ` 14` `pangkat_uang_makan` : `numeric` NULL

### `hris.rekrut_gen_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `gen_code` : `character varying` NOT NULL
  - `  2` `gen_date` : `date` NULL
  - `  3` `gen_pgj_code` : `character varying` NULL
  - `  4` `gen_add_date` : `timestamp without time zone` NULL
  - `  5` `gen_upd_by` : `character varying` NULL
  - `  6` `gen_upd_date` : `timestamp without time zone` NULL
  - `  7` `gen_add_by` : `character varying` NULL
  - `  8` `gen_remark` : `character varying` NULL

### `hris.rekrut_gend_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `gend_oid` : `uuid` NOT NULL
  - `  2` `gend_gen_code` : `character varying` NULL
  - `  3` `gend_seq` : `integer` NULL
  - `  4` `gend_proses` : `character varying` NULL
  - `  5` `gend_keterangan` : `character varying` NULL
  - `  6` `gend_status_proccess` : `character varying` NULL

### `hris.rekrut_gend_plm`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `genp_oid` : `uuid` NOT NULL
  - `  2` `genp_gen_code` : `character varying` NULL
  - `  3` `genp_plm_code` : `character varying` NULL

### `hris.rekrut_iklan_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `iklan_kode` : `character varying` NOT NULL
  - `  2` `iklan_tanggal` : `date` NULL
  - `  3` `iklan_keterangan` : `character varying` NULL
  - `  4` `iklan_media` : `character varying` NULL
  - `  5` `iklan_spesifikasi` : `character varying` NULL
  - `  6` `iklan_add_by` : `character varying` NULL
  - `  7` `iklan_add_date` : `timestamp without time zone` NULL
  - `  8` `iklan_upd_by` : `character varying` NULL
  - `  9` `iklan_upd_date` : `timestamp without time zone` NULL

### `hris.rekrut_ikland_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ikland_uid` : `uuid` NOT NULL
  - `  2` `ikland_iklan_code` : `character varying` NULL
  - `  3` `ikland_pgj_code` : `character varying` NULL
  - `  4` `ikland_ket` : `character varying` NULL

### `hris.rekrut_pelamar`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `plm_code` : `character varying` NOT NULL
  - `  2` `plm_date` : `date` NULL
  - `  3` `plm_nama` : `character varying` NULL
  - `  4` `plm_posisi` : `character varying` NULL
  - `  5` `plm_tempat_lahir` : `character varying` NULL
  - `  6` `plm_tgl_lahir` : `date` NULL
  - `  7` `plm_suku` : `character varying` NULL
  - `  8` `plm_gol_darah` : `character varying` NULL
  - `  9` `plm_tinggi` : `numeric` NULL
  - ` 10` `plm_berat` : `numeric` NULL
  - ` 11` `plm_jns_kelamin` : `character varying` NULL
  - ` 12` `plm_telepon` : `character varying` NULL
  - ` 13` `plm_hobi` : `character varying` NULL
  - ` 14` `plm_alamat` : `character varying` NULL
  - ` 15` `plm_kota` : `character varying` NULL
  - ` 16` `plm_propinsi` : `character varying` NULL
  - ` 17` `plm_anak_ke` : `integer` NULL
  - ` 18` `plm_anak_dari` : `integer` NULL
  - ` 19` `plm_cita_cita` : `character varying` NULL
  - ` 20` `plm_status_marital` : `integer` NULL
  - ` 21` `plm_jml_anak` : `integer` NULL
  - ` 22` `plm_status_rumah` : `character varying` NULL
  - ` 23` `plm_kendaraan` : `character varying` NULL
  - ` 24` `plm_sim` : `character varying` NULL
  - ` 25` `plm_ayah` : `character varying` NULL
  - ` 26` `plm_ibu` : `character varying` NULL
  - ` 27` `plm_add_date` : `timestamp without time zone` NULL
  - ` 28` `plm_add_by` : `character varying` NULL
  - ` 29` `plm_upd_date` : `timestamp without time zone` NULL
  - ` 30` `plm_upd_by` : `character varying` NULL
  - ` 31` `plm_status_close` : `character varying` NULL
  - ` 32` `plm_close_date` : `date` NULL

### `hris.rekrut_pelamar_bahasa`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bhs_oid` : `uuid` NOT NULL
  - `  2` `bhs_plm_code` : `character varying` NULL
  - `  3` `bhs_bahasa` : `character varying` NULL
  - `  4` `bhs_lisan` : `character varying` NULL
  - `  5` `bhs_tulisan` : `character varying` NULL
  - `  6` `bhs_seq` : `integer` NULL

### `hris.rekrut_pelamar_ketrampilan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ket_oid` : `uuid` NOT NULL
  - `  2` `ket_plm_code` : `character varying` NULL
  - `  3` `ket_jenis` : `character varying` NULL
  - `  4` `ket_tingkat` : `character varying` NULL
  - `  5` `ket_seq` : `integer` NULL

### `hris.rekrut_pelamar_organisasi`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `org_oid` : `uuid` NOT NULL
  - `  2` `org_plm_code` : `character varying` NULL
  - `  3` `org_lembaga` : `character varying` NULL
  - `  4` `org_jabatan` : `character varying` NULL
  - `  5` `org_tempat` : `character varying` NULL
  - `  6` `org_lamanya` : `numeric` NULL
  - `  7` `org_seq` : `integer` NULL

### `hris.rekrut_pelamar_pendidikan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pnddk_oid` : `uuid` NOT NULL
  - `  2` `pnddk_plm_code` : `character varying` NULL
  - `  3` `pnddk_jenjang` : `character varying` NULL
  - `  4` `pnddk_nama_lembaga` : `character varying` NULL
  - `  5` `pnddk_jurusan` : `character varying` NULL
  - `  6` `pnddk_tahun_lulus` : `integer` NULL
  - `  7` `pnddk_seq` : `integer` NULL

### `hris.rekrut_pelamar_pengalaman`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `peng_oid` : `uuid` NOT NULL
  - `  2` `peng_plm_code` : `character varying` NULL
  - `  3` `peng_perusahaan` : `character varying` NULL
  - `  4` `peng_jabatan` : `character varying` NULL
  - `  5` `peng_tahun` : `integer` NULL
  - `  6` `peng_status` : `character varying` NULL
  - `  7` `peng_seq` : `integer` NULL

### `hris.rekrut_pelamar_saudara`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `saud_oid` : `uuid` NOT NULL
  - `  2` `saud_plm_code` : `character varying` NULL
  - `  3` `saud_nama` : `character varying` NULL
  - `  4` `saud_status` : `character varying` NULL
  - `  5` `saud_pekerjaan_sekolah` : `character varying` NULL
  - `  6` `saud_seq` : `integer` NULL

### `hris.rekrut_pengajuan`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pgj_code` : `character varying` NOT NULL
  - `  2` `pgj_date` : `date` NULL
  - `  3` `pgj_en_id` : `integer` NULL
  - `  4` `pgj_hirarki` : `integer` NULL
  - `  5` `pgj_alasan` : `character varying` NULL
  - `  6` `pgj_jumlah` : `integer` NULL
  - `  7` `pgj_jenis_kelamin` : `character varying` NULL
  - `  8` `pgj_status_karyawan` : `character varying` NULL
  - `  9` `pgj_lama_kontrak` : `numeric` NULL
  - ` 10` `pgj_level` : `character varying` NULL
  - ` 11` `pgj_pangkat` : `character varying` NULL
  - ` 12` `pgj_rentang_gaji_min` : `numeric` NULL
  - ` 13` `pgj_rentang_gaji_max` : `numeric` NULL
  - ` 14` `pgj_tgl_terpenuhi` : `date` NULL
  - ` 15` `pgj_usia_min` : `numeric` NULL
  - ` 16` `pgj_usia_max` : `numeric` NULL
  - ` 17` `pgj_status_marital` : `character varying` NULL
  - ` 18` `pgj_pendidikan` : `character varying` NULL
  - ` 19` `pgj_jurusan` : `character varying` NULL
  - ` 20` `pgj_bahasa` : `character varying` NULL
  - ` 21` `pgj_kemampuan_bahasa` : `character varying` NULL
  - ` 22` `pgj_keahlian_komputer` : `character varying` NULL
  - ` 23` `pgj_pengalaman` : `character varying` NULL
  - ` 24` `pgj_syarat_lain` : `character varying` NULL
  - ` 25` `pgj_job1` : `character varying` NULL
  - ` 26` `pgj_job2` : `character varying` NULL
  - ` 27` `pgj_job3` : `character varying` NULL
  - ` 28` `pgj_job4` : `character varying` NULL
  - ` 29` `pgj_job5` : `character varying` NULL
  - ` 30` `pgj_job6` : `character varying` NULL
  - ` 31` `pgj_job7` : `character varying` NULL
  - ` 32` `pgj_job8` : `character varying` NULL
  - ` 33` `pgj_add_by` : `character varying` NULL
  - ` 34` `pgj_add_date` : `timestamp without time zone` NULL
  - ` 35` `pgj_upd_by` : `character varying` NULL
  - ` 36` `pgj_upd_date` : `timestamp without time zone` NULL
  - ` 37` `pgj_status_close` : `character varying` NULL
  - ` 38` `pgj_close_date` : `date` NULL
  - ` 39` `pgj_stts_kry_id` : `integer` NULL
  - ` 40` `pgj_pangkat_id` : `integer` NULL
  - ` 41` `pgj_level_id` : `integer` NULL
  - ` 42` `pgj_marital_id` : `integer` NULL
  - ` 43` `pgj_stts_iklan` : `character varying` NULL

### `hris.rekrut_routing`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `route_oid` : `uuid` NOT NULL
  - `  2` `route_plm_code` : `character varying` NULL
  - `  3` `route_gend_oid` : `uuid` NULL
  - `  4` `route_status` : `character varying` NULL
  - `  5` `route_date` : `date` NULL
  - `  6` `route_timestamp` : `timestamp without time zone` NULL
  - `  7` `route_keterangan` : `character varying` NULL
  - `  8` `route_gen_code` : `character varying` NULL

### `hris.tconfhrsetting`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `limit_jam_masuk_shift` : `time without time zone` NULL
  - `  2` `code_shift_1` : `character varying` NULL
  - `  3` `code_shift_2` : `character varying` NULL
  - `  4` `uang_makan_lembur` : `numeric` NULL
  - `  5` `min_lembur_biasa` : `numeric` NULL
  - `  6` `min_lembur_libur` : `numeric` NULL
  - `  7` `pot_koperasi` : `numeric` NULL
  - `  8` `pangkat_gaji_max` : `integer` NULL
  - `  9` `kode_borongan` : `character varying` NULL
  - ` 10` `pass_hr` : `character varying` NULL
  - ` 11` `pass_hris` : `character varying` NULL
  - ` 12` `start_pot_makan` : `date` NULL

## Schema `public`

### `public.ac_id_in_cash_flow`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ac_id` : `integer` NOT NULL

### `public.ac_id_profit_setting`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tipe` : `character varying` NOT NULL
  - `  2` `ac_id` : `integer` NULL

### `public.ac_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ac_oid` : `uuid` NOT NULL
  - `  2` `ac_dom_id` : `smallint` NOT NULL
  - `  3` `ac_add_by` : `character varying` NULL
  - `  4` `ac_add_date` : `timestamp without time zone` NULL
  - `  5` `ac_upd_by` : `character varying` NULL
  - `  6` `ac_upd_date` : `timestamp without time zone` NULL
  - `  7` `ac_id` : `integer` NULL
  - `  8` `ac_code` : `character varying` NULL
  - `  9` `ac_name` : `character varying` NULL
  - ` 10` `ac_desc` : `character varying` NULL
  - ` 11` `ac_parent` : `integer` NULL
  - ` 12` `ac_type` : `character` NOT NULL
  - ` 13` `ac_is_sumlevel` : `character` NOT NULL
  - ` 14` `ac_sign` : `character` NOT NULL
  - ` 15` `ac_active` : `character` NOT NULL
  - ` 16` `ac_dt` : `timestamp without time zone` NULL
  - ` 17` `ac_subclass` : `integer` NULL
  - ` 18` `ac_subclass_2` : `integer` NULL
  - ` 19` `ac_subclass_3` : `integer` NULL
  - ` 20` `ac_cu_id` : `integer` NULL
  - ` 21` `ac_cash_flow` : `integer` NULL
  - ` 22` `ac_in_cash_flow` : `character` NULL
  - ` 23` `ac_is_budget` : `character` NULL
  - ` 24` `ac_code_hirarki` : `character varying` NULL
  - ` 25` `ac_level` : `integer` NULL
  - ` 26` `ac_priority` : `integer` NULL
  - ` 27` `ac_is_cf` : `character` NULL
  - ` 28` `ac_tax_type` : `character` NULL

### `public.ac_setting_profit_loss`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ac_subclass` : `integer` NOT NULL
  - `  2` `group_1_number` : `integer` NULL
  - `  3` `group_2_number` : `integer` NULL
  - `  4` `sign` : `character` NULL

### `public.ac_transaction_setting`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `id` : `integer` NOT NULL
  - `  2` `code` : `character varying` NULL
  - `  3` `desc` : `character varying` NULL
  - `  4` `ac_id` : `integer` NULL

### `public.ac_type_in_balance_sheet`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ac_type` : `character varying` NOT NULL
  - `  2` `Remark` : `character varying` NULL
  - `  3` `ac_sign` : `character` NULL
  - `  4` `ac_type_sifat` : `integer` NULL

### `public.activate_modul_gl`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `id` : `character varying` NOT NULL
  - `  2` `desc` : `character varying` NULL
  - `  3` `aktif` : `boolean` NULL

### `public.ap_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ap_oid` : `uuid` NOT NULL
  - `  2` `ap_dom_id` : `smallint` NULL
  - `  3` `ap_en_id` : `integer` NULL
  - `  4` `ap_add_by` : `character varying` NULL
  - `  5` `ap_add_date` : `timestamp without time zone` NULL
  - `  6` `ap_upd_by` : `character varying` NULL
  - `  7` `ap_upd_date` : `timestamp without time zone` NULL
  - `  8` `ap_code` : `character varying` NULL
  - `  9` `ap_date` : `date` NULL
  - ` 10` `ap_tax_date` : `date` NULL
  - ` 11` `ap_ptnr_id` : `integer` NULL
  - ` 12` `ap_cu_id` : `integer` NULL
  - ` 13` `ap_bk_id` : `integer` NULL
  - ` 14` `ap_credit_term` : `integer` NULL
  - ` 15` `ap_eff_date` : `date` NULL
  - ` 16` `ap_disc_date` : `date` NULL
  - ` 17` `ap_expt_date` : `date` NULL
  - ` 18` `ap_ap_ac_id` : `integer` NULL
  - ` 19` `ap_ap_sb_id` : `integer` NULL
  - ` 20` `ap_ap_cc_id` : `integer` NULL
  - ` 21` `ap_disc_ac_id` : `integer` NULL
  - ` 22` `ap_disc_sb_id` : `integer` NULL
  - ` 23` `ap_disc_cc_id` : `integer` NULL
  - ` 24` `ap_type` : `integer` NULL
  - ` 25` `ap_taxable` : `character` NULL
  - ` 26` `ap_tax_class_id` : `integer` NOT NULL
  - ` 27` `ap_amount` : `numeric` NULL
  - ` 28` `ap_pay_amount` : `numeric` NULL
  - ` 29` `ap_remarks` : `character varying` NULL
  - ` 30` `ap_status` : `character` NULL
  - ` 31` `ap_dt` : `timestamp without time zone` NULL
  - ` 32` `ap_invoice` : `character varying` NULL
  - ` 33` `ap_due_date` : `date` NULL
  - ` 34` `ap_pay_prepaid` : `numeric` NULL
  - ` 35` `ap_ac_prepaid` : `integer` NULL
  - ` 36` `ap_exc_rate` : `numeric` NULL
  - ` 37` `ap_fp_code` : `character varying` NULL
  - ` 38` `ap_fp_date` : `date` NULL
  - ` 39` `ap_tran_id` : `integer` NULL
  - ` 40` `ap_trans_id` : `character` NULL
  - ` 41` `ap_tax_remarks` : `character varying` NULL
  - ` 42` `ap_tax_apr_date` : `date` NULL
  - ` 43` `ap_dpp` : `numeric` NULL
  - ` 44` `ap_ppn` : `numeric` NULL
  - ` 45` `ap_pph` : `numeric` NULL
  - ` 46` `ap_remarks2` : `character varying` NULL
  - ` 47` `ap_tax_inc` : `character` NULL
  - ` 48` `ap_branch_id` : `integer` NOT NULL
  - ` 49` `ap_cc_id` : `integer` NULL
  - ` 50` `ap_exc_rate_tax` : `numeric` NULL
  - ` 51` `ap_pay_dpp` : `numeric` NULL
  - ` 52` `ap_pay_ppn_pph` : `numeric` NULL
  - ` 53` `ap_pjc_id` : `integer` NOT NULL
  - ` 54` `ap_print_status` : `character` NULL
  - ` 55` `ap_print_date` : `timestamp without time zone` NULL
  - ` 56` `ap_print_count` : `integer` NULL
  - ` 57` `ap_is_nota` : `character` NULL

### `public.apc_cat`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `apc_oid` : `uuid` NOT NULL
  - `  2` `apc_dom_id` : `smallint` NULL
  - `  3` `apc_en_id` : `integer` NULL
  - `  4` `apc_add_by` : `character varying` NULL
  - `  5` `apc_add_date` : `timestamp without time zone` NULL
  - `  6` `apc_upd_by` : `character varying` NULL
  - `  7` `apc_upd_date` : `timestamp without time zone` NULL
  - `  8` `apc_id` : `integer` NULL
  - `  9` `apc_code` : `character varying` NULL
  - ` 10` `apc_desc` : `character varying` NULL
  - ` 11` `apc_dt` : `timestamp without time zone` NULL

### `public.apd_dist`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `apd_oid` : `uuid` NOT NULL
  - `  2` `apd_ap_oid` : `uuid` NULL
  - `  3` `apd_tax_distribution` : `character` NULL
  - `  4` `apd_taxable` : `character` NULL
  - `  5` `apd_tax_class_id` : `integer` NULL
  - `  6` `apd_ac_id` : `integer` NULL
  - `  7` `apd_sb_id` : `integer` NULL
  - `  8` `apd_cc_id` : `integer` NULL
  - `  9` `apd_amount` : `numeric` NULL
  - ` 10` `apd_remarks` : `character varying` NULL
  - ` 11` `apd_dt` : `timestamp without time zone` NULL
  - ` 12` `apd_tax_inc` : `character` NULL

### `public.apl_level`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `apl_oid` : `uuid` NOT NULL
  - `  2` `apl_dom_id` : `smallint` NULL
  - `  3` `apl_en_id` : `integer` NULL
  - `  4` `apl_add_by` : `character varying` NULL
  - `  5` `apl_add_date` : `timestamp without time zone` NULL
  - `  6` `apl_upd_by` : `character varying` NULL
  - `  7` `apl_upd_date` : `timestamp without time zone` NULL
  - `  8` `apl_id` : `integer` NULL
  - `  9` `apl_desc` : `character varying` NULL
  - ` 10` `apl_amount` : `numeric` NULL
  - ` 11` `apl_curr` : `integer` NULL
  - ` 12` `apl_dt` : `timestamp without time zone` NULL
  - ` 13` `apl_seq` : `integer` NULL
  - ` 14` `apl_tran_id` : `integer` NULL

### `public.apnota_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `apnota_oid` : `uuid` NOT NULL
  - `  2` `apnota_dom_id` : `smallint` NOT NULL
  - `  3` `apnota_en_id` : `integer` NOT NULL
  - `  4` `apnota_add_by` : `character varying` NULL
  - `  5` `apnota_add_date` : `timestamp without time zone` NULL
  - `  6` `apnota_upd_by` : `character varying` NULL
  - `  7` `apnota_upd_date` : `timestamp without time zone` NULL
  - `  8` `apnota_dt` : `timestamp without time zone` NULL
  - `  9` `apnota_code` : `character varying` NULL
  - ` 10` `apnota_date` : `date` NULL
  - ` 11` `apnota_ptnr_id` : `integer` NOT NULL
  - ` 12` `apnota_cu_id` : `integer` NOT NULL
  - ` 13` `apnota_amount` : `numeric` NULL
  - ` 14` `apnota_pay_amount` : `numeric` NULL
  - ` 15` `apnota_remarks` : `character varying` NULL
  - ` 16` `apnota_trans_id` : `character` NULL
  - ` 17` `apnota_branch_id` : `integer` NOT NULL
  - ` 18` `apnota_due_date` : `date` NULL
  - ` 19` `apnota_remarks2` : `character varying` NULL

### `public.apnotad_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `apnotad_oid` : `uuid` NOT NULL
  - `  2` `apnotad_apnota_oid` : `uuid` NOT NULL
  - `  3` `apnotad_seq` : `smallint` NULL
  - `  4` `apnotad_ap_oid` : `uuid` NULL
  - `  5` `apnotad_amount` : `numeric` NULL
  - `  6` `apnotad_pay_amount` : `numeric` NULL
  - `  7` `apnotad_remarks` : `character varying` NULL
  - `  8` `apnotad_trans_id` : `character` NULL

### `public.app_po`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `app_oid` : `uuid` NOT NULL
  - `  2` `app_ap_oid` : `uuid` NULL
  - `  3` `app_po_oid` : `uuid` NULL

### `public.appay_payment`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `appay_oid` : `uuid` NOT NULL
  - `  2` `appay_dom_id` : `smallint` NULL
  - `  3` `appay_en_id` : `integer` NULL
  - `  4` `appay_add_by` : `character varying` NULL
  - `  5` `appay_add_date` : `timestamp without time zone` NULL
  - `  6` `appay_upd_by` : `character varying` NULL
  - `  7` `appay_upd_date` : `timestamp without time zone` NULL
  - `  8` `appay_code` : `character varying` NULL
  - `  9` `appay_supplier` : `integer` NULL
  - ` 10` `appay_cu_id` : `integer` NULL
  - ` 11` `appay_bk_id` : `integer` NULL
  - ` 12` `appay_ap_ac_id` : `integer` NULL
  - ` 13` `appay_ap_sb_id` : `integer` NULL
  - ` 14` `appay_ap_cc_id` : `integer` NULL
  - ` 15` `appay_disc_ac_id` : `integer` NULL
  - ` 16` `appay_disc_sb_id` : `integer` NULL
  - ` 17` `appay_disc_cc_id` : `integer` NULL
  - ` 18` `appay_date` : `date` NULL
  - ` 19` `appay_eff_date` : `date` NULL
  - ` 20` `appay_total_amount` : `numeric` NULL
  - ` 21` `appay_remarks` : `character varying` NULL
  - ` 22` `appay_dt` : `timestamp without time zone` NULL
  - ` 23` `appay_pby_oid` : `uuid` NULL
  - ` 24` `appay_pby_code` : `character varying` NULL
  - ` 25` `appay_pay_method` : `integer` NULL
  - ` 26` `appay_cek_bg` : `character varying` NULL
  - ` 27` `appay_branch_id` : `integer` NOT NULL
  - ` 28` `appay_cc_id` : `integer` NULL
  - ` 29` `appay_type` : `character` NULL
  - ` 30` `appay_pay_type` : `integer` NOT NULL
  - ` 31` `appay_bg_oid` : `uuid` NULL
  - ` 32` `appay_bg_ac_id` : `integer` NOT NULL
  - ` 33` `appay_bg_due_date` : `date` NULL
  - ` 34` `appay_print_status` : `character` NULL
  - ` 35` `appay_print_date` : `timestamp without time zone` NULL
  - ` 36` `appay_print_count` : `integer` NULL

### `public.appayd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `appayd_oid` : `uuid` NOT NULL
  - `  2` `appayd_appay_oid` : `uuid` NULL
  - `  3` `appayd_ap_oid` : `uuid` NULL
  - `  4` `appayd_ap_ref` : `character varying` NULL
  - `  5` `appayd_type` : `character` NULL
  - `  6` `appayd_ac_id` : `integer` NULL
  - `  7` `appayd_sb_id` : `integer` NULL
  - `  8` `appayd_cc_id` : `integer` NULL
  - `  9` `appayd_amount` : `numeric` NULL
  - ` 10` `appayd_cash_amount` : `numeric` NULL
  - ` 11` `appayd_disc_amount` : `numeric` NULL
  - ` 12` `appayd_remarks` : `character varying` NULL
  - ` 13` `appayd_dt` : `timestamp without time zone` NULL
  - ` 14` `appayd_cur_amount` : `numeric` NULL
  - ` 15` `appayd_exc_rate` : `numeric` NULL

### `public.appaydd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `appaydd_oid` : `uuid` NOT NULL
  - `  2` `appaydd_appayd_oid` : `uuid` NULL
  - `  3` `appaydd_type` : `character` NULL
  - `  4` `appaydd_ac_id` : `integer` NULL
  - `  5` `appaydd_sb_id` : `integer` NULL
  - `  6` `appaydd_amount` : `numeric` NULL
  - `  7` `appaydd_remarks` : `character varying` NULL
  - `  8` `appaydd_dt` : `timestamp without time zone` NULL
  - `  9` `appaydd_cc_id` : `integer` NULL

### `public.apr_rcv`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `apr_oid` : `uuid` NOT NULL
  - `  2` `apr_ap_oid` : `uuid` NULL
  - `  3` `apr_seq` : `smallint` NULL
  - `  4` `apr_rcvd_oid` : `uuid` NULL
  - `  5` `apr_taxable` : `character` NULL
  - `  6` `apr_tax_class_id` : `integer` NULL
  - `  7` `apr_tax_inc` : `character` NULL
  - `  8` `apr_open` : `numeric` NULL
  - `  9` `apr_invoice` : `numeric` NULL
  - ` 10` `apr_po_cost` : `numeric` NULL
  - ` 11` `apr_gl_cost` : `numeric` NULL
  - ` 12` `apr_invoice_cost` : `numeric` NULL
  - ` 13` `apr_close_line` : `character` NULL
  - ` 14` `apr_dt` : `timestamp without time zone` NULL

### `public.aprv_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `aprv_oid` : `uuid` NOT NULL
  - `  2` `aprv_dom_id` : `smallint` NULL
  - `  3` `aprv_en_id` : `integer` NULL
  - `  4` `aprv_tran_id` : `integer` NULL
  - `  5` `aprv_user_id` : `character varying` NULL
  - `  6` `aprv_sub_acct_from` : `integer` NULL
  - `  7` `aprv_cc_acct_from` : `integer` NULL
  - `  8` `aprv_sub_acct_to` : `integer` NULL
  - `  9` `aprv_cc_acct_to` : `integer` NULL
  - ` 10` `aprv_review_level` : `integer` NULL
  - ` 11` `aprv_approve_level` : `integer` NULL
  - ` 12` `aprv_pl_id` : `integer` NULL
  - ` 13` `aprv_apc_id` : `integer` NULL
  - ` 14` `aprv_user_alt_1` : `character varying` NULL
  - ` 15` `aprv_user_alt_2` : `character varying` NULL
  - ` 16` `aprv_user_admin` : `character varying` NULL
  - ` 17` `aprv_start_date` : `date` NULL
  - ` 18` `aprv_start_date2` : `date` NULL
  - ` 19` `aprv_is_vertical` : `character` NULL
  - ` 20` `aprv_is_horizontal` : `character` NULL
  - ` 21` `aprv_is_pl` : `character` NULL
  - ` 22` `aprv_dt` : `timestamp without time zone` NULL
  - ` 23` `aprv_seq` : `smallint` NULL
  - ` 24` `aprv_type` : `character` NULL
  - ` 25` `aprv_is_netoff` : `character` NULL
  - ` 26` `aprv_is_refund_journal` : `character` NULL

### `public.aprvd_dok`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `aprvd_oid` : `uuid` NOT NULL
  - `  2` `aprvd_dom_id` : `smallint` NULL
  - `  3` `aprvd_en_id` : `integer` NULL
  - `  4` `aprvd_add_by` : `character varying` NULL
  - `  5` `aprvd_add_date` : `timestamp without time zone` NULL
  - `  6` `aprvd_upd_by` : `character varying` NULL
  - `  7` `aprvd_upd_date` : `timestamp without time zone` NULL
  - `  8` `aprvd_dt` : `timestamp without time zone` NULL
  - `  9` `aprvd_type` : `integer` NULL
  - ` 10` `aprvd_desc` : `character varying` NULL
  - ` 11` `aprvd_name_1` : `character varying` NULL
  - ` 12` `aprvd_name_2` : `character varying` NULL
  - ` 13` `aprvd_name_3` : `character varying` NULL
  - ` 14` `aprvd_name_4` : `character varying` NULL
  - ` 15` `aprvd_start_eff` : `date` NULL
  - ` 16` `aprvd_end_eff` : `date` NULL
  - ` 17` `aprvd_active` : `character` NULL
  - ` 18` `aprvd_pos_1` : `character varying` NULL
  - ` 19` `aprvd_pos_2` : `character varying` NULL
  - ` 20` `aprvd_pos_3` : `character varying` NULL
  - ` 21` `aprvd_pos_4` : `character varying` NULL
  - ` 22` `aprvd_frs` : `character` NULL
  - ` 23` `aprvd_sign_1` : `character varying` NULL
  - ` 24` `aprvd_sign_2` : `character varying` NULL
  - ` 25` `aprvd_sign_3` : `character varying` NULL
  - ` 26` `aprvd_sign_4` : `character varying` NULL
  - ` 27` `aprvd_cap_1` : `character varying` NULL
  - ` 28` `aprvd_cap_2` : `character varying` NULL
  - ` 29` `aprvd_cap_3` : `character varying` NULL
  - ` 30` `aprvd_cap_4` : `character varying` NULL

### `public.ar_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ar_oid` : `uuid` NOT NULL
  - `  2` `ar_dom_id` : `smallint` NULL
  - `  3` `ar_en_id` : `integer` NULL
  - `  4` `ar_add_by` : `character varying` NULL
  - `  5` `ar_add_date` : `timestamp without time zone` NULL
  - `  6` `ar_upd_by` : `character varying` NULL
  - `  7` `ar_upd_date` : `timestamp without time zone` NULL
  - `  8` `ar_code` : `character varying` NULL
  - `  9` `ar_bill_to` : `integer` NULL
  - ` 10` `ar_cu_id` : `integer` NULL
  - ` 11` `ar_date` : `date` NULL
  - ` 12` `ar_eff_date` : `date` NULL
  - ` 13` `ar_amount` : `numeric` NULL
  - ` 14` `ar_pay_amount` : `numeric` NULL
  - ` 15` `ar_disc_date` : `date` NULL
  - ` 16` `ar_due_date` : `date` NULL
  - ` 17` `ar_expt_date` : `date` NULL
  - ` 18` `ar_exc_rate` : `numeric` NULL
  - ` 19` `ar_taxable` : `character` NULL
  - ` 20` `ar_tax_class_id` : `integer` NOT NULL
  - ` 21` `ar_ac_id` : `integer` NOT NULL
  - ` 22` `ar_sb_id` : `integer` NULL
  - ` 23` `ar_cc_id` : `integer` NULL
  - ` 24` `ar_remarks` : `character varying` NULL
  - ` 25` `ar_status` : `character` NULL
  - ` 26` `ar_dt` : `timestamp without time zone` NULL
  - ` 27` `ar_type` : `integer` NOT NULL
  - ` 28` `ar_credit_term` : `integer` NOT NULL
  - ` 29` `ar_pay_prepaid` : `numeric` NULL
  - ` 30` `ar_ac_prepaid` : `integer` NULL
  - ` 31` `ar_bk_id` : `integer` NULL
  - ` 32` `ar_terbilang` : `character varying` NULL
  - ` 33` `ar_tax_inc` : `character` NULL
  - ` 34` `ar_ppn_type` : `character` NULL
  - ` 35` `ar_ti_in_use` : `character` NULL
  - ` 36` `ar_branch_id` : `integer` NULL
  - ` 37` `ar_sales_id` : `integer` NULL
  - ` 38` `ar_amount_return` : `numeric` NULL
  - ` 39` `ar_dpp` : `numeric` NULL
  - ` 40` `ar_ppn` : `numeric` NULL
  - ` 41` `ar_pph` : `numeric` NULL
  - ` 42` `ar_exc_rate_tax` : `numeric` NULL
  - ` 43` `ar_pay_dpp` : `numeric` NULL
  - ` 44` `ar_pay_ppn_pph` : `numeric` NULL
  - ` 45` `ar_is_com` : `character` NULL
  - ` 46` `ar_royalti_paid` : `character` NULL
  - ` 47` `ar_com_pay` : `character` NULL
  - ` 48` `ar_print_status` : `character` NULL
  - ` 49` `ar_print_date` : `timestamp without time zone` NULL
  - ` 50` `ar_print_count` : `integer` NULL
  - ` 51` `ar_is_nota` : `character` NULL
  - ` 52` `ar_fu_date` : `date` NULL
  - ` 53` `ar_ptnra_oid` : `uuid` NULL

### `public.ard_dist`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ard_oid` : `uuid` NOT NULL
  - `  2` `ard_ar_oid` : `uuid` NULL
  - `  3` `ard_tax_distribution` : `character` NULL
  - `  4` `ard_taxable` : `character` NULL
  - `  5` `ard_tax_class_id` : `integer` NULL
  - `  6` `ard_ac_id` : `integer` NULL
  - `  7` `ard_sb_id` : `integer` NULL
  - `  8` `ard_cc_id` : `integer` NULL
  - `  9` `ard_amount` : `numeric` NULL
  - ` 10` `ard_remarks` : `character varying` NULL
  - ` 11` `ard_dt` : `timestamp without time zone` NULL
  - ` 12` `ard_tax_inc` : `character` NULL

### `public.area_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `area_oid` : `uuid` NOT NULL
  - `  2` `area_dom_id` : `smallint` NULL
  - `  3` `area_add_by` : `character varying` NULL
  - `  4` `area_add_date` : `timestamp without time zone` NULL
  - `  5` `area_upd_by` : `character varying` NULL
  - `  6` `area_upd_date` : `timestamp without time zone` NULL
  - `  7` `area_id` : `integer` NULL
  - `  8` `area_code` : `character varying` NULL
  - `  9` `area_name` : `character varying` NULL
  - ` 10` `area_desc` : `character varying` NULL
  - ` 11` `area_parent` : `integer` NULL
  - ` 12` `area_dt` : `timestamp without time zone` NULL

### `public.arnota_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `arnota_oid` : `uuid` NOT NULL
  - `  2` `arnota_dom_id` : `smallint` NOT NULL
  - `  3` `arnota_en_id` : `integer` NOT NULL
  - `  4` `arnota_add_by` : `character varying` NULL
  - `  5` `arnota_add_date` : `timestamp without time zone` NULL
  - `  6` `arnota_upd_by` : `character varying` NULL
  - `  7` `arnota_upd_date` : `timestamp without time zone` NULL
  - `  8` `arnota_dt` : `timestamp without time zone` NULL
  - `  9` `arnota_code` : `character varying` NULL
  - ` 10` `arnota_date` : `date` NULL
  - ` 11` `arnota_ptnr_id` : `integer` NOT NULL
  - ` 12` `arnota_cu_id` : `integer` NOT NULL
  - ` 13` `arnota_amount` : `numeric` NULL
  - ` 14` `arnota_pay_amount` : `numeric` NULL
  - ` 15` `arnota_remarks` : `character varying` NULL
  - ` 16` `arnota_trans_id` : `character` NULL
  - ` 17` `arnota_xemp_id` : `integer` NOT NULL
  - ` 18` `arnota_branch_id` : `integer` NOT NULL
  - ` 19` `arnota_due_date` : `date` NULL
  - ` 20` `arnota_remarks2` : `character varying` NULL
  - ` 21` `arnota_ptnra_oid` : `uuid` NOT NULL

### `public.arnotad_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `arnotad_oid` : `uuid` NOT NULL
  - `  2` `arnotad_arnota_oid` : `uuid` NULL
  - `  3` `arnotad_seq` : `smallint` NULL
  - `  4` `arnotad_ar_oid` : `uuid` NULL
  - `  5` `arnotad_amount` : `numeric` NULL
  - `  6` `arnotad_pay_amount` : `numeric` NULL
  - `  7` `arnotad_remarks` : `character varying` NULL
  - `  8` `arnotad_trans_id` : `character` NULL

### `public.arpay_payment`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `arpay_oid` : `uuid` NOT NULL
  - `  2` `arpay_dom_id` : `smallint` NULL
  - `  3` `arpay_en_id` : `integer` NULL
  - `  4` `arpay_add_by` : `character varying` NULL
  - `  5` `arpay_add_date` : `timestamp without time zone` NULL
  - `  6` `arpay_upd_by` : `character varying` NULL
  - `  7` `arpay_upd_date` : `timestamp without time zone` NULL
  - `  8` `arpay_code` : `character varying` NULL
  - `  9` `arpay_gl_code` : `character varying` NULL
  - ` 10` `arpay_bill_to` : `integer` NULL
  - ` 11` `arpay_cu_id` : `integer` NULL
  - ` 12` `arpay_bk_id` : `integer` NULL
  - ` 13` `arpay_ar_ac_id` : `integer` NULL
  - ` 14` `arpay_ar_sb_id` : `integer` NULL
  - ` 15` `arpay_ar_cc_id` : `integer` NULL
  - ` 16` `arpay_disc_ac_id` : `integer` NULL
  - ` 17` `arpay_disc_sb_id` : `integer` NULL
  - ` 18` `arpay_disc_cc_id` : `integer` NULL
  - ` 19` `arpay_date` : `date` NULL
  - ` 20` `arpay_eff_date` : `date` NULL
  - ` 21` `arpay_total_amount` : `numeric` NULL
  - ` 22` `arpay_remarks` : `character varying` NULL
  - ` 23` `arpay_dt` : `timestamp without time zone` NULL
  - ` 24` `arpay_exp_ac_id` : `integer` NULL
  - ` 25` `arpay_exp_sb_id` : `integer` NULL
  - ` 26` `arpay_exp_cc_id` : `integer` NULL
  - ` 27` `arpay_tbilang` : `character varying` NULL
  - ` 28` `arpay_branch_id` : `integer` NULL
  - ` 29` `arpay_sales_id` : `integer` NULL
  - ` 30` `arpay_type` : `character` NULL
  - ` 31` `arpay_pay_type` : `integer` NOT NULL
  - ` 32` `arpay_bg_code` : `character varying` NULL
  - ` 33` `arpay_bg_ac_id` : `integer` NOT NULL
  - ` 34` `arpay_bg_due_date` : `date` NULL
  - ` 35` `arpay_sinv_oid` : `uuid` NULL
  - ` 36` `arpay_ob_amount` : `numeric` NULL
  - ` 37` `arpay_total_cash_amount` : `numeric` NULL
  - ` 38` `arpay_is_ob` : `character` NULL
  - ` 39` `arpay_print_status` : `character` NULL
  - ` 40` `arpay_print_date` : `timestamp without time zone` NULL
  - ` 41` `arpay_print_count` : `integer` NULL
  - ` 42` `arpay_arnota_oid` : `uuid` NULL
  - ` 43` `arpay_debt_id` : `integer` NOT NULL

### `public.arpayd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `arpayd_oid` : `uuid` NOT NULL
  - `  2` `arpayd_arpay_oid` : `uuid` NULL
  - `  3` `arpayd_ar_oid` : `uuid` NULL
  - `  4` `arpayd_ar_ref` : `character varying` NULL
  - `  5` `arpayd_type` : `character` NULL
  - `  6` `arpayd_ac_id` : `integer` NULL
  - `  7` `arpayd_sb_id` : `integer` NULL
  - `  8` `arpayd_cc_id` : `integer` NULL
  - `  9` `arpayd_amount` : `numeric` NULL
  - ` 10` `arpayd_cash_amount` : `numeric` NULL
  - ` 11` `arpayd_disc_amount` : `numeric` NULL
  - ` 12` `arpayd_remarks` : `character varying` NULL
  - ` 13` `arpayd_dt` : `timestamp without time zone` NULL
  - ` 14` `arpayd_cur_amount` : `numeric` NULL
  - ` 15` `arpayd_exc_rate` : `numeric` NULL
  - ` 16` `arpayd_exp_amount` : `numeric` NULL
  - ` 17` `arpayd_sokp_oid` : `uuid` NULL
  - ` 18` `arpayd_arnotad_oid` : `uuid` NULL

### `public.arpaydd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `arpaydd_oid` : `uuid` NOT NULL
  - `  2` `arpaydd_arpayd_oid` : `uuid` NULL
  - `  3` `arpaydd_ac_id` : `integer` NULL
  - `  4` `arpaydd_sb_id` : `integer` NULL
  - `  5` `arpaydd_cc_id` : `integer` NULL
  - `  6` `arpaydd_amount` : `numeric` NULL
  - `  7` `arpaydd_remarks` : `character varying` NULL
  - `  8` `arpaydd_dt` : `timestamp without time zone` NULL
  - `  9` `arpaydd_type` : `character` NULL
  - ` 10` `arpaydd_is_prepaid` : `character` NULL

### `public.arr_report1`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `arr_code` : `character varying` NULL
  - `  2` `arr_date` : `date` NULL
  - `  3` `arr_type` : `character varying` NULL
  - `  4` `arr_cust_name` : `character varying` NULL
  - `  5` `arr_opening_balance` : `numeric` NULL
  - `  6` `arr_debit` : `numeric` NULL
  - `  7` `arr_credit` : `numeric` NULL
  - `  8` `arr_ending_balance` : `numeric` NULL
  - `  9` `arr_branch_name` : `character varying` NULL
  - ` 10` `arr_sales_person` : `character varying` NULL
  - ` 11` `arr_add_by` : `character varying` NULL
  - ` 12` `arr_basic_amount` : `numeric` NULL
  - ` 13` `arr_seq` : `integer` NULL
  - ` 14` `arr_cu_name` : `character varying` NULL
  - ` 15` `arr_exc_rate` : `numeric` NULL

### `public.ars_ship`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ars_oid` : `uuid` NOT NULL
  - `  2` `ars_ar_oid` : `uuid` NULL
  - `  3` `ars_seq` : `smallint` NULL
  - `  4` `ars_soshipd_oid` : `uuid` NULL
  - `  5` `ars_taxable` : `character` NULL
  - `  6` `ars_tax_class_id` : `integer` NULL
  - `  7` `ars_tax_inc` : `character` NULL
  - `  8` `ars_open` : `numeric` NULL
  - `  9` `ars_invoice` : `numeric` NULL
  - ` 10` `ars_so_price` : `numeric` NULL
  - ` 11` `ars_gl_price` : `numeric` NULL
  - ` 12` `ars_invoice_price` : `numeric` NULL
  - ` 13` `ars_close_line` : `character` NULL
  - ` 14` `ars_dt` : `timestamp without time zone` NULL
  - ` 15` `ars_fp_status` : `character` NULL
  - ` 16` `ars_so_disc_value` : `numeric` NULL
  - ` 17` `ars_shipment` : `numeric` NULL
  - ` 18` `ars_disc1` : `numeric` NULL
  - ` 19` `ars_disc2` : `numeric` NULL
  - ` 20` `ars_siteid_id` : `integer` NULL
  - ` 21` `ars_amount_restitution` : `numeric` NULL
  - ` 22` `ars_price_line` : `numeric` NULL
  - ` 23` `ars_ppn` : `numeric` NULL
  - ` 24` `ars_pph` : `numeric` NULL
  - ` 25` `ars_dpp` : `numeric` NULL

### `public.arso_so`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `arso_oid` : `uuid` NOT NULL
  - `  2` `arso_ar_oid` : `uuid` NULL
  - `  3` `arso_seq` : `smallint` NULL
  - `  4` `arso_so_oid` : `uuid` NULL
  - `  5` `arso_so_code` : `character varying` NULL
  - `  6` `arso_so_date` : `date` NULL
  - `  7` `arso_dt` : `timestamp without time zone` NULL
  - `  8` `arso_amount` : `numeric` NULL

### `public.asback_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asback_oid` : `uuid` NOT NULL
  - `  2` `asback_dom_id` : `smallint` NULL
  - `  3` `asback_en_id` : `integer` NULL
  - `  4` `asback_add_by` : `character varying` NULL
  - `  5` `asback_add_date` : `timestamp without time zone` NULL
  - `  6` `asback_upd_by` : `character varying` NULL
  - `  7` `asback_upd_date` : `timestamp without time zone` NULL
  - `  8` `asback_code` : `character varying` NULL
  - `  9` `asback_date` : `date` NULL
  - ` 10` `asback_rmks` : `character varying` NULL
  - ` 11` `asback_tran_id` : `integer` NULL
  - ` 12` `asback_trans_id` : `character` NULL
  - ` 13` `asback_trans_rmks` : `character varying` NULL
  - ` 14` `asback_dt` : `timestamp without time zone` NULL
  - ` 15` `asback_branch_id` : `integer` NOT NULL
  - ` 16` `asback_print_status` : `character` NULL
  - ` 17` `asback_print_date` : `timestamp without time zone` NULL
  - ` 18` `asback_print_count` : `integer` NULL

### `public.asbackd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asbackd_oid` : `uuid` NOT NULL
  - `  2` `asbackd_asback_oid` : `uuid` NOT NULL
  - `  3` `asbackd_seq` : `smallint` NULL
  - `  4` `asbackd_ass_id` : `bigint` NULL
  - `  5` `asbackd_reason` : `integer` NULL
  - `  6` `asbackd_its_id` : `integer` NULL
  - `  7` `asbackd_rmks` : `character varying` NULL
  - `  8` `asbackd_dt` : `timestamp without time zone` NULL
  - `  9` `asbackd_loc_id` : `integer` NOT NULL
  - ` 10` `asbackd_branch_id` : `integer` NOT NULL
  - ` 11` `asbackd_branch_id_from` : `integer` NULL
  - ` 12` `asbackd_loc_id_from` : `integer` NULL

### `public.asrtr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asrtr_oid` : `uuid` NOT NULL
  - `  2` `asrtr_dom_id` : `smallint` NULL
  - `  3` `asrtr_en_id` : `integer` NULL
  - `  4` `asrtr_add_by` : `character varying` NULL
  - `  5` `asrtr_add_date` : `timestamp without time zone` NULL
  - `  6` `asrtr_upd_by` : `character varying` NULL
  - `  7` `asrtr_upd_date` : `timestamp without time zone` NULL
  - `  8` `asrtr_code` : `character varying` NULL
  - `  9` `asrtr_date` : `date` NULL
  - ` 10` `asrtr_dispose_date` : `date` NULL
  - ` 11` `asrtr_rmks` : `character varying` NULL
  - ` 12` `asrtr_tran_id` : `integer` NULL
  - ` 13` `asrtr_trans_id` : `character` NULL
  - ` 14` `asrtr_trans_rmks` : `character varying` NULL
  - ` 15` `asrtr_dt` : `timestamp without time zone` NULL
  - ` 16` `asrtr_branch_id` : `integer` NOT NULL
  - ` 17` `asrtr_type` : `integer` NULL
  - ` 18` `asrtr_othcost_ac` : `integer` NULL
  - ` 19` `asrtr_tmp_ac` : `integer` NULL
  - ` 20` `asrtr_print_status` : `character` NULL
  - ` 21` `asrtr_print_date` : `timestamp without time zone` NULL
  - ` 22` `asrtr_print_count` : `integer` NULL

### `public.asrtrd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asrtrd_oid` : `uuid` NOT NULL
  - `  2` `asrtrd_asrtr_oid` : `uuid` NULL
  - `  3` `asrtrd_seq` : `smallint` NULL
  - `  4` `asrtrd_ass_id` : `bigint` NOT NULL
  - `  5` `asrtrd_dispose_date` : `date` NULL
  - `  6` `asrtrd_type` : `integer` NULL
  - `  7` `asrtrd_reason` : `integer` NOT NULL
  - `  8` `asrtrd_dispose_cost` : `numeric` NULL
  - `  9` `asrtrd_rmks` : `character varying` NULL
  - ` 10` `asrtrd_dt` : `timestamp without time zone` NULL
  - ` 11` `asrtrd_service_cost` : `numeric` NULL
  - ` 12` `asrtrd_depr_acum` : `numeric` NULL

### `public.ass_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ass_oid` : `uuid` NOT NULL
  - `  2` `ass_dom_id` : `smallint` NULL
  - `  3` `ass_en_id` : `integer` NOT NULL
  - `  4` `ass_add_by` : `character varying` NULL
  - `  5` `ass_add_date` : `timestamp without time zone` NULL
  - `  6` `ass_upd_by` : `character varying` NULL
  - `  7` `ass_upd_date` : `timestamp without time zone` NULL
  - `  8` `ass_id` : `bigint` NOT NULL
  - `  9` `ass_pt_id` : `bigint` NOT NULL
  - ` 10` `ass_code` : `character varying` NULL
  - ` 11` `ass_barcode` : `character varying` NULL
  - ` 12` `ass_desc` : `character varying` NULL
  - ` 13` `ass_ref_req` : `character varying` NULL
  - ` 14` `ass_ref_po` : `character varying` NULL
  - ` 15` `ass_ref_rcpt` : `character varying` NULL
  - ` 16` `ass_ref_rcpt_oid` : `uuid` NULL
  - ` 17` `ass_ref_inv` : `character varying` NULL
  - ` 18` `ass_model` : `character varying` NULL
  - ` 19` `ass_qty` : `integer` NULL
  - ` 20` `ass_qty_assgn` : `integer` NULL
  - ` 21` `ass_qty_del` : `integer` NULL
  - ` 22` `ass_sn` : `character varying` NULL
  - ` 23` `ass_service_date` : `date` NULL
  - ` 24` `ass_gar_date` : `date` NULL
  - ` 25` `ass_line` : `bigint` NULL
  - ` 26` `ass_ptnr_id` : `integer` NULL
  - ` 27` `ass_st_purc` : `integer` NOT NULL
  - ` 28` `ass_lic_type` : `integer` NOT NULL
  - ` 29` `ass_service_cost` : `numeric` NULL
  - ` 30` `ass_emp_id` : `bigint` NOT NULL
  - ` 31` `ass_emp_dept` : `integer` NULL
  - ` 32` `ass_emp_rg` : `integer` NULL
  - ` 33` `ass_confirm` : `character` NULL
  - ` 34` `ass_its_id` : `integer` NULL
  - ` 35` `ass_dt` : `timestamp without time zone` NULL
  - ` 36` `ass_salvage_cost` : `numeric` NULL
  - ` 37` `ass_basis_cost` : `numeric` NULL
  - ` 38` `ass_depr_acum` : `numeric` NULL
  - ` 39` `ass_depr_date` : `date` NULL
  - ` 40` `ass_disp_amount` : `numeric` NULL
  - ` 41` `ass_disp_date` : `date` NULL
  - ` 42` `ass_remarks` : `character varying` NULL
  - ` 43` `ass_manual` : `character` NULL
  - ` 44` `ass_loc_id` : `integer` NULL
  - ` 45` `ass_opname_date` : `date` NULL
  - ` 46` `ass_branch_id` : `integer` NOT NULL
  - ` 47` `ass_class` : `integer` NOT NULL
  - ` 48` `ass_is_po_cash` : `character` NULL
  - ` 49` `ass_pm_assvcsch_id` : `integer` NULL
  - ` 50` `ass_pm_track_date` : `date` NULL
  - ` 51` `ass_pm_status` : `character` NULL
  - ` 52` `ass_pm_track_1_meter` : `numeric` NULL
  - ` 53` `ass_pm_track_2_meter` : `numeric` NULL
  - ` 54` `ass_pm_upd_meter` : `date` NULL
  - ` 55` `ass_remarks2` : `character varying` NULL
  - ` 56` `ass_is_maintenance` : `character` NULL
  - ` 57` `ass_is_technical` : `character` NULL
  - ` 58` `ass_id_parent` : `bigint` NULL

### `public.assbk_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assbk_oid` : `uuid` NOT NULL
  - `  2` `assbk_ass_oid` : `uuid` NULL
  - `  3` `assbk_fabk_id` : `bigint` NULL
  - `  4` `assbk_famt_id` : `bigint` NULL
  - `  5` `assbk_exp_life` : `smallint` NULL
  - `  6` `assbk_cost` : `numeric` NULL
  - `  7` `assbk_depr_acum` : `numeric` NULL
  - `  8` `assbk_per_year` : `smallint` NULL
  - `  9` `assbk_per_month` : `smallint` NULL
  - ` 10` `assbk_dt` : `timestamp without time zone` NULL
  - ` 11` `assbk_rate_depreciation` : `numeric` NULL
  - ` 12` `assbk_exp_life_month` : `smallint` NULL

### `public.asslife_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asslife_oid` : `uuid` NOT NULL
  - `  2` `asslife_dom_id` : `smallint` NOT NULL
  - `  3` `asslife_en_id` : `integer` NOT NULL
  - `  4` `asslife_add_by` : `character varying` NOT NULL
  - `  5` `asslife_add_date` : `timestamp without time zone` NOT NULL
  - `  6` `asslife_upd_by` : `character varying` NULL
  - `  7` `asslife_upd_date` : `timestamp without time zone` NULL
  - `  8` `asslife_code` : `character varying` NOT NULL
  - `  9` `asslife_date` : `date` NOT NULL
  - ` 10` `asslife_rmks` : `character varying` NULL
  - ` 11` `asslife_dt` : `timestamp without time zone` NOT NULL
  - ` 12` `asslife_branch_id` : `integer` NOT NULL

### `public.asslifed_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asslifed_oid` : `uuid` NOT NULL
  - `  2` `asslifed_asslife_oid` : `uuid` NULL
  - `  3` `asslifed_ass_id` : `integer` NULL
  - `  4` `asslifed_run` : `numeric` NULL
  - `  5` `asslifed_off_reason` : `integer` NOT NULL
  - `  6` `asslifed_off` : `numeric` NULL
  - `  7` `asslifed_seq` : `integer` NULL
  - `  8` `asslifed_remarks` : `character varying` NULL

### `public.assmtrupd_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assmtrupd_oid` : `uuid` NOT NULL
  - `  2` `assmtrupd_id` : `integer` NOT NULL
  - `  3` `assmtrupd_dom_id` : `smallint` NOT NULL
  - `  4` `assmtrupd_en_id` : `integer` NOT NULL
  - `  5` `assmtrupd_add_by` : `character varying` NOT NULL
  - `  6` `assmtrupd_add_date` : `timestamp without time zone` NOT NULL
  - `  7` `assmtrupd_upd_by` : `character varying` NULL
  - `  8` `assmtrupd_upd_date` : `timestamp without time zone` NULL
  - `  9` `assmtrupd_ass_id` : `integer` NOT NULL
  - ` 10` `assmtrupd_track_1_meter` : `numeric` NULL
  - ` 11` `assmtrupd_track_2_meter` : `numeric` NULL
  - ` 12` `assmtrupd_date` : `timestamp without time zone` NOT NULL
  - ` 13` `assmtrupd_dt` : `timestamp without time zone` NOT NULL
  - ` 14` `assmtrupd_remarks` : `character varying` NULL

### `public.asspmdlbr_labor`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asspmdlbr_oid` : `uuid` NOT NULL
  - `  2` `asspmdlbr_add_by` : `character varying` NOT NULL
  - `  3` `asspmdlbr_add_date` : `timestamp without time zone` NOT NULL
  - `  4` `asspmdlbr_upd_by` : `character varying` NULL
  - `  5` `asspmdlbr_upd_date` : `timestamp without time zone` NULL
  - `  6` `asspmdlbr_ass_id` : `bigint` NOT NULL
  - `  7` `asspmdlbr_seq` : `integer` NOT NULL
  - `  8` `asspmdlbr_assvcschd_oid` : `uuid` NOT NULL
  - `  9` `asspmdlbr_service_by` : `character` NOT NULL
  - ` 10` `asspmdlbr_ptnr_id` : `bigint` NOT NULL
  - ` 11` `asspmdlbr_rate` : `numeric` NOT NULL
  - ` 12` `asspmdlbr_hours` : `integer` NOT NULL
  - ` 13` `asspmdlbr_cost` : `numeric` NOT NULL
  - ` 14` `asspmdlbr_desc` : `character varying` NOT NULL
  - ` 15` `asspmdlbr_dt` : `timestamp with time zone` NOT NULL
  - ` 16` `asspmdlbr_employee_id` : `integer` NULL

### `public.asspmdpt_parts`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asspmdpt_oid` : `uuid` NOT NULL
  - `  2` `asspmdpt_add_by` : `character varying` NOT NULL
  - `  3` `asspmdpt_add_date` : `timestamp without time zone` NOT NULL
  - `  4` `asspmdpt_upd_by` : `character varying` NULL
  - `  5` `asspmdpt_upd_date` : `timestamp without time zone` NULL
  - `  6` `asspmdpt_ass_id` : `bigint` NOT NULL
  - `  7` `asspmdpt_seq` : `integer` NOT NULL
  - `  8` `asspmdpt_assvcschd_oid` : `uuid` NOT NULL
  - `  9` `asspmdpt_pt_id` : `bigint` NOT NULL
  - ` 10` `asspmdpt_desc` : `character varying` NOT NULL
  - ` 11` `asspmdpt_qty` : `numeric` NOT NULL
  - ` 12` `asspmdpt_cost` : `numeric` NOT NULL
  - ` 13` `asspmdpt_dt` : `timestamp with time zone` NOT NULL

### `public.assrep_report`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assrep_ass_id` : `integer` NOT NULL
  - `  2` `assrep_depr_today` : `numeric` NULL
  - `  3` `assrep_tahun` : `integer` NOT NULL
  - `  4` `assrep_bulan` : `integer` NOT NULL
  - `  5` `assrep_date` : `date` NULL
  - `  6` `assrep_bulan_ke` : `integer` NOT NULL
  - `  7` `assrep_depresiasi` : `numeric` NULL
  - `  8` `assrep_depr_acum` : `numeric` NULL
  - `  9` `assrep_nilai_buku` : `numeric` NULL
  - ` 10` `assrep_usr_id` : `integer` NOT NULL

### `public.asssrvc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asssrvc_oid` : `uuid` NOT NULL
  - `  2` `asssrvc_id` : `integer` NOT NULL
  - `  3` `asssrvc_dom_id` : `smallint` NOT NULL
  - `  4` `asssrvc_en_id` : `integer` NOT NULL
  - `  5` `asssrvc_add_by` : `character varying` NOT NULL
  - `  6` `asssrvc_add_date` : `timestamp without time zone` NOT NULL
  - `  7` `asssrvc_upd_by` : `character varying` NULL
  - `  8` `asssrvc_upd_date` : `timestamp without time zone` NULL
  - `  9` `asssrvc_code` : `character varying` NOT NULL
  - ` 10` `asssrvc_name` : `character varying` NOT NULL
  - ` 11` `asssrvc_desc` : `character varying` NULL
  - ` 12` `asssrvc_dt` : `timestamp without time zone` NOT NULL
  - ` 13` `asssrvc_is_default` : `character` NULL

### `public.assvcreq_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcreq_oid` : `uuid` NOT NULL
  - `  2` `assvcreq_id` : `integer` NOT NULL
  - `  3` `assvcreq_dom_id` : `smallint` NOT NULL
  - `  4` `assvcreq_en_id` : `integer` NOT NULL
  - `  5` `assvcreq_add_by` : `character varying` NOT NULL
  - `  6` `assvcreq_add_date` : `timestamp without time zone` NOT NULL
  - `  7` `assvcreq_upd_by` : `character varying` NULL
  - `  8` `assvcreq_upd_date` : `timestamp without time zone` NULL
  - `  9` `assvcreq_code` : `character varying` NOT NULL
  - ` 10` `assvcreq_date` : `timestamp without time zone` NOT NULL
  - ` 11` `assvcreq_process_date` : `timestamp without time zone` NULL
  - ` 12` `assvcreq_ass_id` : `bigint` NOT NULL
  - ` 13` `assvcreq_req_by` : `character varying` NOT NULL
  - ` 14` `assvcreq_status` : `character` NOT NULL
  - ` 15` `assvcreq_rmks` : `character varying` NULL
  - ` 16` `assvcreq_dt` : `timestamp without time zone` NOT NULL
  - ` 17` `assvcreq_foto` : `character varying` NULL
  - ` 18` `assvcreq_foto2` : `character varying` NULL
  - ` 19` `assvcreq_branch_id` : `integer` NULL
  - ` 20` `assvcreq_is_wo` : `character` NULL
  - ` 21` `assvcreq_off` : `timestamp without time zone` NULL
  - ` 22` `assvcreq_is_off` : `character` NULL
  - ` 23` `assvcreq_current_meter1` : `numeric` NULL
  - ` 24` `assvcreq_current_meter2` : `numeric` NULL
  - ` 25` `assvcreq_last_meter1` : `numeric` NULL
  - ` 26` `assvcreq_last_meter2` : `numeric` NULL
  - ` 27` `assvcreq_cc_id` : `integer` NOT NULL
  - ` 28` `assvcreq_addressed_to` : `bigint` NOT NULL

### `public.assvcreqd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcreqd_oid` : `uuid` NOT NULL
  - `  2` `assvcreqd_assvcreq_oid` : `uuid` NOT NULL
  - `  3` `assvcreqd_seq` : `integer` NOT NULL
  - `  4` `assvcreqd_assvcschd_oid` : `uuid` NOT NULL
  - `  5` `assvcreqd_priority` : `character` NOT NULL
  - `  6` `assvcreqd_rmks` : `character varying` NULL
  - `  7` `assvcreqd_dt` : `timestamp with time zone` NOT NULL
  - `  8` `assvcreqd_assvct_id` : `integer` NULL

### `public.assvcreqdlabor_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcreqdlabor_oid` : `uuid` NOT NULL
  - `  2` `assvcreqdlabor_assvcreq_oid` : `uuid` NOT NULL
  - `  3` `assvcreqdlabor_emp_id` : `integer` NULL
  - `  4` `assvcreqdlabor_cost` : `numeric` NULL
  - `  5` `assvcreqdlabor_qty` : `numeric` NULL
  - `  6` `assvcreqdlabor_total` : `numeric` NULL
  - `  7` `assvcreqdlabor_ptnr_id` : `integer` NULL
  - `  8` `assvcreqdlabor_type` : `character varying` NULL
  - `  9` `assvcreqdlabor_assvcreqd_oid` : `uuid` NOT NULL

### `public.assvcreqdpart_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcreqdpart_oid` : `uuid` NOT NULL
  - `  2` `assvcreqdpart_assvcreq_oid` : `uuid` NOT NULL
  - `  3` `assvcreqdpart_pt_id` : `integer` NOT NULL
  - `  4` `assvcreqdpart_qty` : `numeric` NULL
  - `  5` `assvcreqdpart_um` : `integer` NULL
  - `  6` `assvcreqdpart_cost` : `numeric` NULL
  - `  7` `assvcreqdpart_total` : `numeric` NULL
  - `  8` `assvcreqdpart_seq` : `integer` NULL
  - `  9` `assvcreqdpart_assvcreqd_oid` : `uuid` NOT NULL

### `public.assvcsch_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcsch_oid` : `uuid` NOT NULL
  - `  2` `assvcsch_id` : `integer` NOT NULL
  - `  3` `assvcsch_dom_id` : `smallint` NOT NULL
  - `  4` `assvcsch_en_id` : `integer` NOT NULL
  - `  5` `assvcsch_add_by` : `character varying` NOT NULL
  - `  6` `assvcsch_add_date` : `timestamp without time zone` NOT NULL
  - `  7` `assvcsch_upd_by` : `character varying` NULL
  - `  8` `assvcsch_upd_date` : `timestamp without time zone` NULL
  - `  9` `assvcsch_code` : `character varying` NOT NULL
  - ` 10` `assvcsch_name` : `character varying` NOT NULL
  - ` 11` `assvcsch_desc1` : `character varying` NULL
  - ` 12` `assvcsch_desc2` : `character varying` NULL
  - ` 13` `assvcsch_track_date` : `character` NOT NULL
  - ` 14` `assvcsch_track_1` : `character` NOT NULL
  - ` 15` `assvcsch_track_1_type_id` : `integer` NOT NULL
  - ` 16` `assvcsch_track_2` : `character` NOT NULL
  - ` 17` `assvcsch_track_2_type_id` : `integer` NOT NULL
  - ` 18` `assvcsch_active` : `character` NOT NULL
  - ` 19` `assvcsch_dt` : `timestamp without time zone` NOT NULL
  - ` 20` `assvcsch_ass_id` : `integer` NULL

### `public.assvcschd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcschd_oid` : `uuid` NOT NULL
  - `  2` `assvcschd_assvcsch_oid` : `uuid` NOT NULL
  - `  3` `assvcschd_name` : `character varying` NULL
  - `  4` `assvcschd_seq` : `integer` NOT NULL
  - `  5` `assvcschd_assvct_id` : `integer` NOT NULL
  - `  6` `assvcschd_priority` : `character` NOT NULL
  - `  7` `assvcschd_active` : `character` NOT NULL
  - `  8` `assvcschd_track_date` : `character` NOT NULL
  - `  9` `assvcschd_track_date_interval` : `integer` NOT NULL
  - ` 10` `assvcschd_track_date_type` : `character` NOT NULL
  - ` 11` `assvcschd_track_date_adv` : `character` NOT NULL
  - ` 12` `assvcschd_track_date_adv_interval` : `integer` NOT NULL
  - ` 13` `assvcschd_track_1` : `character` NOT NULL
  - ` 14` `assvcschd_track_1_interval` : `integer` NOT NULL
  - ` 15` `assvcschd_track_1_adv` : `character` NOT NULL
  - ` 16` `assvcschd_track_1_adv_interval` : `integer` NOT NULL
  - ` 17` `assvcschd_track_2` : `character` NOT NULL
  - ` 18` `assvcschd_track_2_interval` : `integer` NOT NULL
  - ` 19` `assvcschd_track_2_adv` : `character` NOT NULL
  - ` 20` `assvcschd_track_2_adv_interval` : `integer` NOT NULL
  - ` 21` `assvcschd_dt` : `timestamp with time zone` NOT NULL
  - ` 22` `assvcschd_asssrvc_id` : `integer` NULL

### `public.assvcschdd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcschdd_oid` : `uuid` NOT NULL
  - `  2` `assvcschdd_assvcschd_oid` : `uuid` NOT NULL
  - `  3` `assvcschdd_ass_id` : `integer` NOT NULL
  - `  4` `assvcschdd_date` : `date` NULL
  - `  5` `assvcschdd_track_1` : `integer` NULL
  - `  6` `assvcschdd_track_2` : `integer` NULL

### `public.assvcschdlabor_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcschdlabor_oid` : `uuid` NOT NULL
  - `  2` `assvcschdlabor_assvcsch_oid` : `uuid` NULL
  - `  3` `assvcschdlabor_emp_id` : `integer` NULL
  - `  4` `assvcschdlabor_cost` : `numeric` NULL
  - `  5` `assvcschdlabor_qty` : `numeric` NULL
  - `  6` `assvcschdlabor_total` : `numeric` NULL
  - `  7` `assvcschdlabor_ptnr_id` : `integer` NULL
  - `  8` `assvcschdlabor_type` : `character varying` NULL
  - `  9` `assvcschdlabor_assvcschd_oid` : `uuid` NULL

### `public.assvcschdpart_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvcschdpart_oid` : `uuid` NOT NULL
  - `  2` `assvcschdpart_assvcschd_oid` : `uuid` NULL
  - `  3` `assvcschdpart_pt_id` : `integer` NULL
  - `  4` `assvcschdpart_qty` : `numeric` NULL
  - `  5` `assvcschdpart_um` : `integer` NULL
  - `  6` `assvcschdpart_cost` : `numeric` NULL
  - `  7` `assvcschdpart_total` : `numeric` NULL
  - `  8` `assvcschdpart_seq` : `integer` NULL
  - `  9` `assvcschdpart_assvcsch_oid` : `uuid` NULL

### `public.assvct_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `assvct_oid` : `uuid` NOT NULL
  - `  2` `assvct_id` : `integer` NOT NULL
  - `  3` `assvct_dom_id` : `smallint` NOT NULL
  - `  4` `assvct_en_id` : `integer` NOT NULL
  - `  5` `assvct_add_by` : `character varying` NOT NULL
  - `  6` `assvct_add_date` : `timestamp without time zone` NOT NULL
  - `  7` `assvct_upd_by` : `character varying` NULL
  - `  8` `assvct_upd_date` : `timestamp without time zone` NULL
  - `  9` `assvct_code` : `character varying` NOT NULL
  - ` 10` `assvct_name` : `character varying` NOT NULL
  - ` 11` `assvct_desc` : `character varying` NULL
  - ` 12` `assvct_create_wo` : `character` NOT NULL
  - ` 13` `assvct_dt` : `timestamp without time zone` NOT NULL
  - ` 14` `assvct_is_default` : `character` NULL

### `public.asswo_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswo_oid` : `uuid` NOT NULL
  - `  2` `asswo_dom_id` : `smallint` NOT NULL
  - `  3` `asswo_en_id` : `integer` NOT NULL
  - `  4` `asswo_add_by` : `character varying` NOT NULL
  - `  5` `asswo_add_date` : `timestamp without time zone` NOT NULL
  - `  6` `asswo_upd_by` : `character varying` NULL
  - `  7` `asswo_upd_date` : `timestamp without time zone` NULL
  - `  8` `asswo_code` : `character varying` NOT NULL
  - `  9` `asswo_date` : `date` NOT NULL
  - ` 10` `asswo_start_date` : `timestamp without time zone` NULL
  - ` 11` `asswo_end_date` : `timestamp without time zone` NULL
  - ` 12` `asswo_status` : `character` NOT NULL
  - ` 13` `asswo_assign_to` : `character` NULL
  - ` 14` `asswo_ptnr_id` : `bigint` NULL
  - ` 15` `asswo_rmks` : `character varying` NULL
  - ` 16` `asswo_dt` : `timestamp without time zone` NOT NULL
  - ` 17` `asswo_ass_id` : `bigint` NULL
  - ` 18` `asswo_employee_id` : `bigint` NULL
  - ` 19` `asswo_assvcsch_oid` : `uuid` NULL
  - ` 20` `asswo_assvcreq_oid` : `uuid` NULL
  - ` 21` `asswo_current_meter1` : `numeric` NULL
  - ` 22` `asswo_branch_id` : `integer` NULL
  - ` 23` `asswo_part_total` : `numeric` NULL
  - ` 24` `asswo_confirm_date` : `date` NULL
  - ` 25` `asswo_current_meter2` : `numeric` NULL
  - ` 26` `asswo_last_meter1` : `numeric` NULL
  - ` 27` `asswo_last_meter2` : `numeric` NULL
  - ` 28` `asswo_cc_id` : `integer` NOT NULL

### `public.asswoc_close`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswoc_oid` : `uuid` NOT NULL
  - `  2` `asswoc_code` : `character varying` NOT NULL
  - `  3` `asswoc_dom_id` : `integer` NULL
  - `  4` `asswoc_en_id` : `integer` NULL
  - `  5` `asswoc_add_by` : `character varying` NULL
  - `  6` `asswoc_add_date` : `timestamp without time zone` NULL
  - `  7` `asswoc_upd_by` : `character varying` NULL
  - `  8` `asswoc_date` : `date` NULL
  - `  9` `asswoc_asswo_oid` : `uuid` NULL
  - ` 10` `asswoc_upd_date` : `timestamp without time zone` NULL
  - ` 11` `asswoc_branch_id` : `integer` NULL
  - ` 12` `asswoc_track_1_meter` : `numeric` NULL
  - ` 13` `asswoc_track_1_type_id` : `integer` NULL
  - ` 14` `asswoc_track_2_meter` : `numeric` NULL
  - ` 15` `asswoc_track_2_type_id` : `integer` NULL
  - ` 16` `asswoc_remarks` : `character varying` NULL
  - ` 17` `asswoc_end_date` : `timestamp without time zone` NULL
  - ` 18` `asswoc_cc_id` : `integer` NOT NULL
  - ` 19` `asswoc_dt` : `timestamp without time zone` NULL
  - ` 20` `asswoc_tran_id` : `integer` NULL
  - ` 21` `asswoc_trans_id` : `character` NULL
  - ` 22` `asswoc_remarks_cl` : `character varying` NULL

### `public.asswocc_close_confirm`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswoc_oid` : `uuid` NOT NULL
  - `  2` `asswoc_code` : `character varying` NOT NULL
  - `  3` `asswoc_dom_id` : `integer` NULL
  - `  4` `asswoc_en_id` : `integer` NULL
  - `  5` `asswoc_add_by` : `character varying` NULL
  - `  6` `asswoc_add_date` : `timestamp without time zone` NULL
  - `  7` `asswoc_upd_by` : `character varying` NULL
  - `  8` `asswoc_date` : `date` NULL
  - `  9` `asswoc_asswo_oid` : `uuid` NULL
  - ` 10` `asswoc_branch_id` : `integer` NULL
  - ` 11` `asswoc_upd_date` : `timestamp without time zone` NULL
  - ` 12` `asswoc_tran_id` : `integer` NULL
  - ` 13` `asswoc_trans_id` : `character` NULL
  - ` 14` `asswoc_remarks_cl` : `character varying` NULL
  - ` 15` `asswoc_cc_id` : `integer` NOT NULL
  - ` 16` `asswoc_dt` : `timestamp without time zone` NULL

### `public.asswocd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswocd_oid` : `uuid` NOT NULL
  - `  2` `asswocd_asswoc_oid` : `uuid` NOT NULL
  - `  3` `asswocd_dt` : `timestamp without time zone` NULL
  - `  4` `asswocd_asssrvc_id` : `integer` NOT NULL
  - `  5` `asswocd_assvct_id` : `integer` NOT NULL
  - `  6` `asswocd_date_last` : `date` NOT NULL
  - `  7` `asswocd_date_next` : `date` NOT NULL
  - `  8` `asswocd_track_1_last` : `integer` NOT NULL
  - `  9` `asswocd_track_1_next` : `integer` NOT NULL
  - ` 10` `asswocd_track_2_last` : `integer` NOT NULL
  - ` 11` `asswocd_track_2_next` : `integer` NOT NULL
  - ` 12` `asswocd_assvcschd_oid` : `uuid` NOT NULL

### `public.asswoci_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswoci_oid` : `uuid` NOT NULL
  - `  2` `asswoci_dom_id` : `smallint` NOT NULL
  - `  3` `asswoci_en_id` : `integer` NOT NULL
  - `  4` `asswoci_add_by` : `character varying` NULL
  - `  5` `asswoci_add_date` : `timestamp without time zone` NULL
  - `  6` `asswoci_upd_by` : `character varying` NULL
  - `  7` `asswoci_upd_date` : `timestamp without time zone` NULL
  - `  8` `asswoci_code` : `character varying` NOT NULL
  - `  9` `asswoci_date` : `date` NULL
  - ` 10` `asswoci_remarks` : `character varying` NULL
  - ` 11` `asswoci_dt` : `timestamp without time zone` NULL
  - ` 12` `asswoci_asswo_oid` : `uuid` NULL
  - ` 13` `asswoci_branch_id` : `integer` NOT NULL
  - ` 14` `asswoci_trans_id` : `character` NULL
  - ` 15` `asswoci_cc_id` : `integer` NOT NULL

### `public.asswocid_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswocid_oid` : `uuid` NOT NULL
  - `  2` `asswocid_asswoci_oid` : `uuid` NOT NULL
  - `  3` `asswocid_pt_id` : `integer` NOT NULL
  - `  4` `asswocid_qty` : `numeric` NULL
  - `  5` `asswocid_um` : `integer` NULL
  - `  6` `asswocid_um_conv` : `numeric` NULL
  - `  7` `asswocid_qty_real` : `numeric` NULL
  - `  8` `asswocid_loc_id` : `bigint` NOT NULL
  - `  9` `asswocid_cost` : `numeric` NULL
  - ` 10` `asswocid_ac_id` : `integer` NOT NULL
  - ` 11` `asswocid_dt` : `timestamp without time zone` NULL
  - ` 12` `asswocid_asswodpart_oid` : `uuid` NULL
  - ` 13` `asswocid_qty_return` : `numeric` NULL
  - ` 14` `asswocid_remarks` : `character varying` NULL

### `public.asswocids_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswocids_oid` : `uuid` NOT NULL
  - `  2` `asswocids_asswocid_oid` : `uuid` NULL
  - `  3` `asswocids_qty` : `numeric` NULL
  - `  4` `asswocids_loc_id` : `bigint` NULL
  - `  5` `asswocids_lot_serial` : `character varying` NULL
  - `  6` `asswocids_dt` : `timestamp without time zone` NULL
  - `  7` `asswocids_um` : `integer` NULL
  - `  8` `asswocids_exp_date` : `date` NULL

### `public.asswod_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswod_oid` : `uuid` NOT NULL
  - `  2` `asswod_asswo_oid` : `uuid` NOT NULL
  - `  3` `asswod_seq` : `integer` NOT NULL
  - `  4` `asswod_assvct_id` : `integer` NOT NULL
  - `  5` `asswod_priority` : `character` NOT NULL
  - `  6` `asswod_dt` : `timestamp with time zone` NOT NULL
  - `  7` `asswod_asssrvc_id` : `integer` NOT NULL
  - `  8` `asswod_remarks` : `character varying` NULL
  - `  9` `asswod_assvcschd_oid` : `uuid` NOT NULL
  - ` 10` `asswod_is_add` : `character` NULL

### `public.asswodlabor_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswodlabor_oid` : `uuid` NOT NULL
  - `  2` `asswodlabor_asswo_oid` : `uuid` NULL
  - `  3` `asswodlabor_emp_id` : `integer` NULL
  - `  4` `asswodlabor_cost` : `numeric` NULL
  - `  5` `asswodlabor_qty` : `numeric` NULL
  - `  6` `asswodlabor_total` : `numeric` NULL
  - `  7` `asswodlabor_ptnr_id` : `integer` NULL
  - `  8` `asswodlabor_type` : `character varying` NULL
  - `  9` `asswodlabor_asswod_oid` : `uuid` NOT NULL

### `public.asswodpart_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `asswodpart_oid` : `uuid` NOT NULL
  - `  2` `asswodpart_asswo_oid` : `uuid` NULL
  - `  3` `asswodpart_pt_id` : `integer` NULL
  - `  4` `asswodpart_qty` : `numeric` NULL
  - `  5` `asswodpart_um` : `integer` NULL
  - `  6` `asswodpart_cost` : `numeric` NULL
  - `  7` `asswodpart_total` : `numeric` NULL
  - `  8` `asswodpart_seq` : `integer` NULL
  - `  9` `asswodpart_qty_issued` : `numeric` NULL
  - ` 10` `asswodpart_asswod_oid` : `uuid` NOT NULL

### `public.astrnf_transfer`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `astrnf_oid` : `uuid` NOT NULL
  - `  2` `astrnf_dom_id` : `smallint` NULL
  - `  3` `astrnf_en_id` : `integer` NULL
  - `  4` `astrnf_add_by` : `character varying` NULL
  - `  5` `astrnf_add_date` : `timestamp without time zone` NULL
  - `  6` `astrnf_upd_by` : `character varying` NULL
  - `  7` `astrnf_upd_date` : `timestamp without time zone` NULL
  - `  8` `astrnf_code` : `character varying` NOT NULL
  - `  9` `astrnf_date` : `date` NULL
  - ` 10` `astrnf_rmks` : `character varying` NULL
  - ` 11` `astrnf_tran_id` : `integer` NULL
  - ` 12` `astrnf_trans_id` : `character` NULL
  - ` 13` `astrnf_trans_rmks` : `character varying` NULL
  - ` 14` `astrnf_dt` : `timestamp without time zone` NULL
  - ` 15` `astrnf_type` : `character` NULL
  - ` 16` `astrnf_branch_id` : `integer` NULL
  - ` 17` `astrnf_print_status` : `character` NULL
  - ` 18` `astrnf_print_date` : `timestamp without time zone` NULL
  - ` 19` `astrnf_print_count` : `integer` NULL

### `public.astrnfd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `astrnfd_oid` : `uuid` NOT NULL
  - `  2` `astrnfd_astrnf_oid` : `uuid` NOT NULL
  - `  3` `astrnfd_seq` : `smallint` NULL
  - `  4` `astrnfd_ass_id` : `bigint` NOT NULL
  - `  5` `astrnfd_emp_id_from` : `bigint` NULL
  - `  6` `astrnfd_emp_id_to` : `bigint` NOT NULL
  - `  7` `astrnfd_rmks` : `character varying` NULL
  - `  8` `astrnfd_dt` : `timestamp without time zone` NULL
  - `  9` `astrnfd_dept_id_to` : `integer` NULL
  - ` 10` `astrnfd_rg_id_to` : `integer` NULL
  - ` 11` `astrnfd_dept_id_from` : `integer` NULL
  - ` 12` `astrnfd_rg_id_from` : `integer` NULL
  - ` 13` `astrnfd_loc_id_from` : `integer` NULL
  - ` 14` `astrnfd_loc_id_to` : `integer` NOT NULL
  - ` 15` `astrnfd_branch_id_from` : `integer` NULL
  - ` 16` `astrnfd_branch_id_to` : `integer` NOT NULL

### `public.bdgt_approval`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdgt_code` : `character varying` NULL
  - `  2` `en_id` : `integer` NULL
  - `  3` `status_approval` : `character` NULL
  - `  4` `date_aproval` : `timestamp without time zone` NULL
  - `  5` `approval_by` : `character varying` NULL
  - `  6` `approval_level` : `integer` NULL

### `public.bdgt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdgt_oid` : `uuid` NOT NULL
  - `  2` `bdgt_dom_id` : `smallint` NULL
  - `  3` `bdgt_en_id` : `integer` NULL
  - `  4` `bdgt_add_by` : `character varying` NULL
  - `  5` `bdgt_add_date` : `timestamp without time zone` NULL
  - `  6` `bdgt_upd_by` : `character varying` NULL
  - `  7` `bdgt_upd_date` : `timestamp without time zone` NULL
  - `  8` `bdgt_date` : `date` NULL
  - `  9` `bdgt_year` : `integer` NULL
  - ` 10` `bdgt_remarks` : `character varying` NULL
  - ` 11` `bdgt_trans_id` : `character` NULL
  - ` 12` `bdgt_dt` : `timestamp without time zone` NULL
  - ` 13` `bdgt_tran_id` : `integer` NULL
  - ` 14` `bdgt_cc_id` : `integer` NULL
  - ` 15` `bdgt_code` : `character varying` NULL
  - ` 16` `bdgt_rev` : `smallint` NULL
  - ` 17` `bdgt_active` : `character` NULL
  - ` 18` `bdgt_year_periode` : `character varying` NULL
  - ` 19` `bdgt_pjc_id` : `integer` NULL
  - ` 20` `bdgt_branch_id` : `integer` NULL
  - ` 21` `bdgt_remarks_cl` : `character varying` NULL
  - ` 22` `bdgt_type` : `character` NULL

### `public.bdgt_mstr_old`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdgt_oid` : `uuid` NOT NULL
  - `  2` `bdgt_dom_id` : `smallint` NULL
  - `  3` `bdgt_en_id` : `integer` NULL
  - `  4` `bdgt_add_by` : `character varying` NULL
  - `  5` `bdgt_add_date` : `timestamp without time zone` NULL
  - `  6` `bdgt_upd_by` : `character varying` NULL
  - `  7` `bdgt_upd_date` : `timestamp without time zone` NULL
  - `  8` `bdgt_date` : `date` NULL
  - `  9` `bdgt_month` : `smallint` NULL
  - ` 10` `bdgt_year` : `integer` NULL
  - ` 11` `bdgt_ac_id` : `integer` NULL
  - ` 12` `bdgt_sb_id` : `integer` NULL
  - ` 13` `bdgt_cc_id` : `integer` NULL
  - ` 14` `bdgt_budget_1` : `numeric` NULL
  - ` 15` `bdgt_budget_2` : `numeric` NULL
  - ` 16` `bdgt_budget_3` : `numeric` NULL
  - ` 17` `bdgt_budget_4` : `numeric` NULL
  - ` 18` `bdgt_budget_5` : `numeric` NULL
  - ` 19` `bdgt_alokasi_1` : `numeric` NULL
  - ` 20` `bdgt_alokasi_2` : `numeric` NULL
  - ` 21` `bdgt_alokasi_3` : `numeric` NULL
  - ` 22` `bdgt_alokasi_4` : `numeric` NULL
  - ` 23` `bdgt_alokasi_5` : `numeric` NULL
  - ` 24` `bdgt_realisasi_1` : `numeric` NULL
  - ` 25` `bdgt_realisasi_2` : `numeric` NULL
  - ` 26` `bdgt_realisasi_3` : `numeric` NULL
  - ` 27` `bdgt_realisasi_4` : `numeric` NULL
  - ` 28` `bdgt_realisasi_5` : `numeric` NULL
  - ` 29` `bdgt_dt` : `timestamp without time zone` NULL
  - ` 30` `bdgt_code` : `character varying` NULL
  - ` 31` `bdgt_remark` : `character varying` NULL
  - ` 32` `bdgt_level` : `integer` NULL

### `public.bdgt_trans`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdgt_oid` : `uuid` NOT NULL
  - `  2` `bdgt_dom_id` : `smallint` NULL
  - `  3` `bdgt_en_id` : `integer` NULL
  - `  4` `bdgt_add_by` : `character varying` NULL
  - `  5` `bdgt_add_date` : `timestamp without time zone` NULL
  - `  6` `bdgt_upd_by` : `character varying` NULL
  - `  7` `bdgt_upd_date` : `timestamp without time zone` NULL
  - `  8` `bdgt_dt` : `timestamp without time zone` NULL
  - `  9` `bdgt_code` : `character varying` NULL
  - ` 10` `bdgt_date` : `date` NULL
  - ` 11` `bdgt_pjc_id` : `integer` NULL
  - ` 12` `bdgt_ac_id` : `integer` NULL
  - ` 13` `bdgt_cc_id` : `integer` NULL
  - ` 14` `bdgt_amount` : `numeric` NULL
  - ` 15` `bdgt_desc` : `character varying` NULL
  - ` 16` `bdgt_ref_code` : `character varying` NULL
  - ` 17` `bdgt_amount_type` : `character` NULL
  - ` 18` `bdgt_branch_id` : `integer` NULL
  - ` 19` `bdgt_bdgt_code` : `text` NULL
  - ` 20` `bdgt_bdgtp_id` : `integer` NULL

### `public.bdgtd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdgtd_oid` : `uuid` NOT NULL
  - `  2` `bdgtd_bdgt_oid` : `uuid` NULL
  - `  3` `bdgtd_add_by` : `character varying` NULL
  - `  4` `bdgtd_add_date` : `timestamp without time zone` NULL
  - `  5` `bdgtd_upd_by` : `character varying` NULL
  - `  6` `bdgtd_upd_date` : `timestamp without time zone` NULL
  - `  7` `bdgtd_bdgtp_id` : `integer` NULL
  - `  8` `bdgtd_ac_id` : `integer` NULL
  - `  9` `bdgtd_sb_id` : `integer` NULL
  - ` 10` `bdgtd_budget` : `numeric` NULL
  - ` 11` `bdgtd_alokasi` : `numeric` NULL
  - ` 12` `bdgtd_realisasi` : `numeric` NULL
  - ` 13` `bdgtd_dt` : `timestamp without time zone` NULL
  - ` 14` `bdgtd_budget_sisa` : `numeric` NULL
  - ` 15` `bdgtd_budget_sum` : `numeric` NULL
  - ` 16` `bdgtd_relokasi` : `numeric` NULL
  - ` 17` `bdgtd_static_amount` : `numeric` NULL

### `public.bdgth_hist`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdgth_oid` : `uuid` NOT NULL
  - `  2` `bdgth_dom_id` : `smallint` NULL
  - `  3` `bdgth_en_id` : `integer` NULL
  - `  4` `bdgth_add_by` : `character varying` NULL
  - `  5` `bdgth_add_date` : `timestamp without time zone` NULL
  - `  6` `bdgth_upd_by` : `character varying` NULL
  - `  7` `bdgth_upd_date` : `timestamp without time zone` NULL
  - `  8` `bdgth_date` : `date` NULL
  - `  9` `bdgth_year` : `integer` NULL
  - ` 10` `bdgth_remarks` : `character varying` NULL
  - ` 11` `bdgth_trans_id` : `character` NULL
  - ` 12` `bdgth_dt` : `timestamp without time zone` NULL
  - ` 13` `bdgth_tran_id` : `integer` NULL
  - ` 14` `bdgth_cc_id` : `integer` NULL
  - ` 15` `bdgth_code` : `character varying` NULL
  - ` 16` `bdgth_rev` : `smallint` NULL
  - ` 17` `bdgth_active` : `character` NULL
  - ` 18` `bdgth_year_periode` : `character varying` NULL
  - ` 19` `bdgth_pjc_id` : `integer` NULL
  - ` 20` `bdgth_branch_id` : `integer` NOT NULL

### `public.bdgthd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdgthd_oid` : `uuid` NOT NULL
  - `  2` `bdgthd_bdgth_oid` : `uuid` NULL
  - `  3` `bdgthd_add_by` : `character varying` NULL
  - `  4` `bdgthd_add_date` : `timestamp without time zone` NULL
  - `  5` `bdgthd_upd_by` : `character varying` NULL
  - `  6` `bdgthd_upd_date` : `timestamp without time zone` NULL
  - `  7` `bdgthd_bdgtp_id` : `integer` NULL
  - `  8` `bdgthd_ac_id` : `integer` NULL
  - `  9` `bdgthd_sb_id` : `integer` NULL
  - ` 10` `bdgthd_static_amount` : `numeric` NULL
  - ` 11` `bdgthd_budget` : `numeric` NULL
  - ` 12` `bdgthd_alokasi` : `numeric` NULL
  - ` 13` `bdgthd_realisasi` : `numeric` NULL
  - ` 14` `bdgthd_relokasi` : `numeric` NULL
  - ` 15` `bdgthd_dt` : `timestamp without time zone` NULL
  - ` 16` `bdgthd_budget_sisa` : `numeric` NULL
  - ` 17` `bdgthd_budget_sum` : `numeric` NULL

### `public.bdgtp_periode`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdgtp_oid` : `uuid` NOT NULL
  - `  2` `bdgtp_dom_id` : `smallint` NULL
  - `  3` `bdgtp_en_id` : `integer` NULL
  - `  4` `bdgtp_add_by` : `character varying` NULL
  - `  5` `bdgtp_add_date` : `timestamp without time zone` NULL
  - `  6` `bdgtp_upd_by` : `character varying` NULL
  - `  7` `bdgtp_upd_date` : `timestamp without time zone` NULL
  - `  8` `bdgtp_id` : `integer` NULL
  - `  9` `bdgtp_code` : `character varying` NULL
  - ` 10` `bdgtp_remarks` : `character varying` NULL
  - ` 11` `bdgtp_start_date` : `date` NULL
  - ` 12` `bdgtp_end_date` : `date` NULL
  - ` 13` `bdgtp_dt` : `timestamp without time zone` NULL
  - ` 14` `bdgtp_year` : `character varying` NULL
  - ` 15` `bdgtp_is_close` : `character` NULL
  - ` 16` `bdgtp_is_project` : `character` NULL
  - ` 17` `bdgtp_pjc_id` : `integer` NULL
  - ` 18` `bdgtp_branch_id` : `integer` NULL

### `public.bds_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bds_oid` : `uuid` NOT NULL
  - `  2` `bds_dom_id` : `smallint` NULL
  - `  3` `bds_en_id` : `integer` NULL
  - `  4` `bds_add_by` : `character varying` NULL
  - `  5` `bds_add_date` : `timestamp without time zone` NULL
  - `  6` `bds_upd_by` : `character varying` NULL
  - `  7` `bds_upd_date` : `timestamp without time zone` NULL
  - `  8` `bds_code` : `character varying` NULL
  - `  9` `bds_date` : `date` NULL
  - ` 10` `bds_start_date` : `date` NULL
  - ` 11` `bds_end_date` : `date` NULL
  - ` 12` `bds_remark` : `character varying` NULL
  - ` 13` `bds_trans_id` : `character` NULL
  - ` 14` `bds_dt` : `timestamp without time zone` NULL
  - ` 15` `bds_generate` : `character` NULL

### `public.bdsd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdsd_oid` : `uuid` NOT NULL
  - `  2` `bdsd_bds_oid` : `uuid` NULL
  - `  3` `bdsd_ptnr_id` : `integer` NULL
  - `  4` `bdsd_sales_unit` : `numeric` NULL
  - `  5` `bdsd_faktor_pengali` : `numeric` NULL
  - `  6` `bdsd_dt` : `timestamp without time zone` NULL
  - `  7` `bds_gen_by` : `character varying` NULL
  - `  8` `bds_gen_date` : `timestamp without time zone` NULL
  - `  9` `bdsd_total` : `numeric` NULL
  - ` 10` `bdsd_total_dibayar` : `numeric` NULL

### `public.bdsr_rule`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bdsr_oid` : `uuid` NOT NULL
  - `  2` `bdsr_dom_id` : `smallint` NULL
  - `  3` `bdsr_en_id` : `integer` NULL
  - `  4` `bdsr_add_by` : `character varying` NULL
  - `  5` `bdsr_add_date` : `timestamp without time zone` NULL
  - `  6` `bdsr_upd_by` : `character varying` NULL
  - `  7` `bdsr_upd_date` : `timestamp without time zone` NULL
  - `  8` `bdsr_sales_unit_from` : `numeric` NULL
  - `  9` `bdsr_sales_unit_to` : `numeric` NULL
  - ` 10` `bdsr_faktor_pengali` : `numeric` NULL
  - ` 11` `bdsr_start_date` : `date` NULL
  - ` 12` `bdsr_end_date` : `date` NULL
  - ` 13` `brsr_dt` : `timestamp without time zone` NULL

### `public.bg_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bg_oid` : `uuid` NOT NULL
  - `  2` `bg_dom_id` : `smallint` NULL
  - `  3` `bg_en_id` : `integer` NULL
  - `  4` `bg_branch_id` : `integer` NULL
  - `  5` `bg_add_by` : `character varying` NULL
  - `  6` `bg_add_date` : `timestamp without time zone` NULL
  - `  7` `bg_upd_by` : `character varying` NULL
  - `  8` `bg_upd_date` : `timestamp without time zone` NULL
  - `  9` `bg_type` : `character` NULL
  - ` 10` `bg_date` : `date` NULL
  - ` 11` `bg_code` : `character varying` NULL
  - ` 12` `bg_desc` : `character varying` NULL
  - ` 13` `bg_ptnr_id` : `integer` NULL
  - ` 14` `bg_bk_id` : `integer` NULL
  - ` 15` `bg_cu_id` : `integer` NULL
  - ` 16` `bg_amount` : `numeric` NULL
  - ` 17` `bg_due_date` : `date` NULL
  - ` 18` `bg_reff_code` : `character varying` NULL
  - ` 19` `bg_supl_bk_id` : `integer` NULL
  - ` 20` `bg_trans_id` : `character` NULL
  - ` 21` `bg_dt` : `timestamp without time zone` NULL
  - ` 22` `bg_ac_id` : `integer` NULL
  - ` 23` `bg_generate_date` : `date` NULL
  - ` 24` `bg_remarks` : `text` NULL
  - ` 25` `bg_confirm_date` : `date` NULL

### `public.bgtinfo_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bgtinfo_oid` : `uuid` NOT NULL
  - `  2` `bgtinfo_en_id` : `integer` NULL
  - `  3` `bgtinfo_ref_oid` : `uuid` NULL
  - `  4` `bgtinfo_pjc_id` : `integer` NULL
  - `  5` `bgtinfo_cc_id` : `integer` NULL
  - `  6` `bgtinfo_ac_id` : `integer` NULL
  - `  7` `bgtinfo_remaining_amount` : `numeric` NULL
  - `  8` `bgtinfo_request_amount` : `numeric` NULL
  - `  9` `bgtinfo_variance_amount` : `numeric` NULL
  - ` 10` `bgtinfo_check_by` : `character varying` NULL
  - ` 11` `bgtinfo_check_date` : `timestamp without time zone` NULL

### `public.bk_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bk_oid` : `uuid` NOT NULL
  - `  2` `bk_dom_id` : `smallint` NULL
  - `  3` `bk_en_id` : `integer` NULL
  - `  4` `bk_add_by` : `character varying` NULL
  - `  5` `bk_add_date` : `timestamp without time zone` NULL
  - `  6` `bk_upd_by` : `character varying` NULL
  - `  7` `bk_upd_date` : `timestamp without time zone` NULL
  - `  8` `bk_id` : `integer` NULL
  - `  9` `bk_code` : `character varying` NULL
  - ` 10` `bk_name` : `character varying` NULL
  - ` 11` `bk_cu_id` : `integer` NULL
  - ` 12` `bk_ac_id` : `integer` NULL
  - ` 13` `bk_cc_id` : `integer` NULL
  - ` 14` `bk_sb_id` : `integer` NULL
  - ` 15` `bk_active` : `character` NULL
  - ` 16` `bk_dt` : `timestamp without time zone` NULL
  - ` 17` `bk_branch_id` : `integer` NOT NULL
  - ` 18` `bk_is_global` : `character` NULL
  - ` 19` `bk_is_dummy` : `character` NULL
  - ` 20` `bk_on_name` : `text` NULL
  - ` 21` `bk_off_overissue` : `character` NULL

### `public.bkr_restrc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bkr_oid` : `uuid` NOT NULL
  - `  2` `bkr_dom_id` : `smallint` NULL
  - `  3` `bkr_en_id` : `integer` NULL
  - `  4` `bkr_add_by` : `character varying` NULL
  - `  5` `bkr_add_date` : `timestamp without time zone` NULL
  - `  6` `bkr_upd_by` : `character varying` NULL
  - `  7` `bkr_upd_date` : `timestamp without time zone` NULL
  - `  8` `bkr_bk_id` : `integer` NULL
  - `  9` `bkr_user_id` : `integer` NULL
  - ` 10` `bkr_remarks` : `character varying` NULL
  - ` 11` `bkr_dt` : `timestamp without time zone` NULL

### `public.bom_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bom_oid` : `uuid` NOT NULL
  - `  2` `bom_dom_id` : `smallint` NULL
  - `  3` `bom_en_id` : `integer` NULL
  - `  4` `bom_add_by` : `character varying` NULL
  - `  5` `bom_add_date` : `timestamp without time zone` NULL
  - `  6` `bom_upd_by` : `character varying` NULL
  - `  7` `bom_upd_date` : `timestamp without time zone` NULL
  - `  8` `bom_id` : `bigint` NULL
  - `  9` `bom_code` : `character varying` NULL
  - ` 10` `bom_desc` : `character varying` NULL
  - ` 11` `bom_um_id` : `integer` NULL
  - ` 12` `bom_active` : `character` NOT NULL
  - ` 13` `bom_dt` : `timestamp without time zone` NULL

### `public.boq_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `boq_oid` : `uuid` NOT NULL
  - `  2` `boq_dom_id` : `smallint` NULL
  - `  3` `boq_en_id` : `integer` NULL
  - `  4` `boq_add_by` : `character varying` NULL
  - `  5` `boq_add_date` : `timestamp without time zone` NULL
  - `  6` `boq_upd_by` : `character varying` NULL
  - `  7` `boq_upd_date` : `timestamp without time zone` NULL
  - `  8` `boq_dt` : `timestamp without time zone` NULL
  - `  9` `boq_so_oid` : `uuid` NULL
  - ` 10` `boq_code` : `character varying` NULL
  - ` 11` `boq_date` : `date` NULL
  - ` 12` `boq_remark` : `character varying` NULL
  - ` 13` `boq_trans_id` : `character` NULL
  - ` 14` `boq_tran_id` : `integer` NULL
  - ` 15` `boq_branch_id` : `integer` NOT NULL
  - ` 16` `boq_pjc_id` : `integer` NULL
  - ` 17` `boq_fc_oid` : `uuid` NULL
  - ` 18` `boq_print_status` : `character` NULL
  - ` 19` `boq_print_date` : `timestamp without time zone` NULL
  - ` 20` `boq_print_count` : `integer` NULL
  - ` 21` `boq_remarks_cl` : `character varying` NULL

### `public.boqd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `boqd_oid` : `uuid` NOT NULL
  - `  2` `boqd_add_by` : `character varying` NULL
  - `  3` `boqd_add_date` : `timestamp without time zone` NULL
  - `  4` `boqd_upd_by` : `character varying` NULL
  - `  5` `boqd_upd_date` : `timestamp without time zone` NULL
  - `  6` `boqd_dt` : `timestamp without time zone` NULL
  - `  7` `boqd_seq` : `smallint` NULL
  - `  8` `boqd_boq_oid` : `uuid` NULL
  - `  9` `boqd_sod_oid` : `uuid` NULL
  - ` 10` `boqd_pt_id` : `integer` NULL
  - ` 11` `boqd_qty_plan` : `numeric` NULL
  - ` 12` `boqd_qty` : `numeric` NULL
  - ` 13` `boqd_um` : `integer` NULL
  - ` 14` `boqd_qty_wor` : `numeric` NULL
  - ` 15` `boqd_qty_wo` : `numeric` NULL
  - ` 16` `boqd_remarks` : `character varying` NULL

### `public.boqs_stand`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `boqs_oid` : `uuid` NOT NULL
  - `  2` `boqs_add_by` : `character varying` NULL
  - `  3` `boqs_add_date` : `timestamp without time zone` NULL
  - `  4` `boqs_upd_by` : `character varying` NULL
  - `  5` `boqs_upd_date` : `timestamp without time zone` NULL
  - `  6` `boqs_dt` : `timestamp without time zone` NULL
  - `  7` `boqs_boq_oid` : `uuid` NULL
  - `  8` `boqs_seq` : `integer` NULL
  - `  9` `boqs_pt_id` : `integer` NULL
  - ` 10` `boqs_qty_plan` : `numeric` NULL
  - ` 11` `boqs_qty` : `numeric` NULL
  - ` 12` `boqs_qty_pr` : `numeric` NULL
  - ` 13` `boqs_qty_po` : `numeric` NULL
  - ` 14` `boqs_qty_receipt` : `numeric` NULL
  - ` 15` `boqs_qty_wo` : `numeric` NULL
  - ` 16` `boqs_is_manual` : `character` NULL
  - ` 17` `boqs_qty_return` : `numeric` NULL
  - ` 18` `boqs_qty_relocation` : `numeric` NULL
  - ` 19` `boqs_cost` : `numeric` NULL
  - ` 20` `boqs_qty_issue` : `numeric` NULL
  - ` 21` `boqs_remarks` : `character varying` NULL

### `public.bp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bp_oid` : `uuid` NOT NULL
  - `  2` `bp_dom_id` : `smallint` NULL
  - `  3` `bp_en_id` : `integer` NULL
  - `  4` `bp_add_by` : `character varying` NULL
  - `  5` `bp_add_date` : `timestamp without time zone` NULL
  - `  6` `bp_upd_by` : `character varying` NULL
  - `  7` `bp_upd_date` : `timestamp without time zone` NULL
  - `  8` `bp_dt` : `timestamp without time zone` NULL
  - `  9` `bp_tran_id` : `integer` NULL
  - ` 10` `bp_trans_id` : `character` NULL
  - ` 11` `bp_code` : `character varying` NULL
  - ` 12` `bp_date` : `date` NULL
  - ` 13` `bp_start_date` : `date` NULL
  - ` 14` `bp_end_date` : `date` NULL
  - ` 15` `bp_close_date` : `date` NULL
  - ` 16` `bp_remarks` : `character varying` NULL
  - ` 17` `bp_total` : `numeric` NULL

### `public.bpd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bpd_oid` : `uuid` NOT NULL
  - `  2` `bpd_dom_id` : `smallint` NULL
  - `  3` `bpd_en_id` : `integer` NULL
  - `  4` `bpd_add_by` : `character varying` NULL
  - `  5` `bpd_add_date` : `timestamp without time zone` NULL
  - `  6` `bpd_upd_by` : `character varying` NULL
  - `  7` `bpd_upd_date` : `timestamp without time zone` NULL
  - `  8` `bpd_dt` : `timestamp without time zone` NULL
  - `  9` `bpd_trans_id` : `character` NULL
  - ` 10` `bpd_bp_oid` : `uuid` NULL
  - ` 11` `bpd_seq` : `integer` NULL
  - ` 12` `bpd_pt_id` : `integer` NULL
  - ` 13` `bpd_desc1` : `character varying` NULL
  - ` 14` `bpd_desc2` : `character varying` NULL
  - ` 15` `bpd_um` : `integer` NULL
  - ` 16` `bpd_qty` : `numeric` NULL
  - ` 17` `bpd_qty_consume` : `numeric` NULL
  - ` 18` `bpd_cost` : `numeric` NULL
  - ` 19` `bpd_remarks` : `character varying` NULL

### `public.branch_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `branch_oid` : `uuid` NOT NULL
  - `  2` `branch_dom_id` : `smallint` NOT NULL
  - `  3` `branch_en_id` : `integer` NULL
  - `  4` `branch_add_by` : `character varying` NULL
  - `  5` `branch_add_date` : `timestamp without time zone` NULL
  - `  6` `branch_upd_by` : `character varying` NULL
  - `  7` `branch_upd_date` : `timestamp without time zone` NULL
  - `  8` `branch_dt` : `timestamp without time zone` NULL
  - `  9` `branch_id` : `integer` NOT NULL
  - ` 10` `branch_code` : `character` NOT NULL
  - ` 11` `branch_name` : `character varying` NULL
  - ` 12` `branch_desc` : `character varying` NULL
  - ` 13` `branch_address_line1` : `character varying` NULL
  - ` 14` `branch_address_line2` : `character varying` NULL
  - ` 15` `branch_address_line3` : `character varying` NULL
  - ` 16` `branch_telp` : `character varying` NULL
  - ` 17` `branch_fax` : `character varying` NULL
  - ` 18` `branch_active` : `character` NULL
  - ` 19` `branch_type_id` : `integer` NULL
  - ` 20` `branch_regional_id` : `integer` NULL
  - ` 21` `branch_ap_ac_id` : `integer` NOT NULL
  - ` 22` `branch_ar_ac_id` : `integer` NOT NULL
  - ` 23` `branch_posting` : `character` NULL
  - ` 24` `branch_codes_setting` : `character varying` NULL
  - ` 25` `branch_logo` : `character varying` NULL
  - ` 26` `branch_date_off` : `smallint` NULL

### `public.brancha_account`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `brancha_oid` : `uuid` NOT NULL
  - `  2` `brancha_branch_id` : `integer` NULL
  - `  3` `brancha_ac_id` : `integer` NULL
  - `  4` `brancha_dt` : `timestamp without time zone` NULL

### `public.brs_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `brs_oid` : `uuid` NOT NULL
  - `  2` `brs_dom_id` : `smallint` NULL
  - `  3` `brs_en_id` : `integer` NULL
  - `  4` `brs_add_by` : `character varying` NULL
  - `  5` `brs_add_date` : `timestamp without time zone` NULL
  - `  6` `brs_upd_by` : `character varying` NULL
  - `  7` `brs_upd_date` : `timestamp without time zone` NULL
  - `  8` `brs_code` : `character varying` NULL
  - `  9` `brs_date` : `date` NULL
  - ` 10` `brs_start_date` : `date` NULL
  - ` 11` `brs_end_date` : `date` NULL
  - ` 12` `brs_remark` : `character varying` NULL
  - ` 13` `brs_trans_id` : `character` NULL
  - ` 14` `brs_dt` : `timestamp without time zone` NULL
  - ` 15` `brs_generate` : `character` NULL
  - ` 16` `brs_gen_by` : `character varying` NULL
  - ` 17` `brs_gen_date` : `timestamp without time zone` NULL

### `public.brsc_cf`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `brsc_oid` : `uuid` NOT NULL
  - `  2` `brsc_min_pct` : `numeric` NULL
  - `  3` `brsc_max_pct` : `numeric` NULL
  - `  4` `brsc_dt` : `timestamp without time zone` NULL

### `public.brsd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `brsd_oid` : `uuid` NOT NULL
  - `  2` `brsd_brs_oid` : `uuid` NULL
  - `  3` `brsd_ptnr_id` : `integer` NULL
  - `  4` `brsd_position_id` : `integer` NULL
  - `  5` `brsd_target` : `numeric` NULL
  - `  6` `brsd_pencapaian` : `numeric` NULL
  - `  7` `brsd_bobot_insentive` : `numeric` NULL
  - `  8` `brsd_nilai_insentive` : `numeric` NULL
  - `  9` `brsd_bobot_selisih` : `numeric` NULL
  - ` 10` `brsd_tambahan_insentive` : `numeric` NULL
  - ` 11` `brsd_sales_cat_before` : `numeric` NULL
  - ` 12` `brsd_sales_cat_current` : `numeric` NULL
  - ` 13` `brsd_sales_cat_amount` : `numeric` NULL
  - ` 14` `brsd_dt` : `timestamp without time zone` NULL
  - ` 15` `brsd_area_id` : `integer` NULL

### `public.brsr_rule`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `brsr_oid` : `uuid` NOT NULL
  - `  2` `brsr_dom_id` : `smallint` NULL
  - `  3` `brsr_en_id` : `integer` NULL
  - `  4` `brsr_add_by` : `character varying` NULL
  - `  5` `brsr_add_date` : `timestamp without time zone` NULL
  - `  6` `brsr_upd_by` : `character varying` NULL
  - `  7` `brsr_upd_date` : `timestamp without time zone` NULL
  - `  8` `brsr_position_id` : `integer` NULL
  - `  9` `brsr_start_date` : `date` NULL
  - ` 10` `brsr_end_date` : `date` NULL
  - ` 11` `brsr_target_amount` : `numeric` NULL
  - ` 12` `brsr_insentive` : `numeric` NULL
  - ` 13` `brsr_bobot` : `numeric` NULL
  - ` 14` `brsr_dt` : `timestamp without time zone` NULL
  - ` 15` `brsr_area_id` : `integer` NULL

### `public.brsrc_cat`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `brsrc_oid` : `uuid` NOT NULL
  - `  2` `brsrc_add_by` : `character varying` NULL
  - `  3` `brsrc_add_date` : `timestamp without time zone` NULL
  - `  4` `brsrc_upd_by` : `character varying` NULL
  - `  5` `brsrc_upd_date` : `timestamp without time zone` NULL
  - `  6` `brsrc_sales_cat` : `integer` NULL
  - `  7` `brsrc_start_date` : `date` NULL
  - `  8` `brsrc_end_date` : `date` NULL
  - `  9` `brsrc_bobot` : `numeric` NULL
  - ` 10` `brsrc_dt` : `timestamp without time zone` NULL

### `public.bs_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bs_number` : `integer` NOT NULL
  - `  2` `bs_caption` : `character varying` NULL
  - `  3` `bs_group` : `character varying` NULL
  - `  4` `bs_remarks` : `character varying` NULL

### `public.bs_report`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ac_id` : `integer` NULL
  - `  2` `ac_code` : `character varying` NULL
  - `  3` `ac_name` : `character varying` NULL
  - `  4` `ac_desc` : `character varying` NULL
  - `  5` `ac_parent` : `integer` NULL
  - `  6` `ac_type` : `character` NOT NULL
  - `  7` `ac_is_sumlevel` : `character` NOT NULL
  - `  8` `ac_sign` : `character` NOT NULL
  - `  9` `ac_active` : `character` NOT NULL
  - ` 10` `ac_cu_id` : `integer` NULL
  - ` 11` `ac_cash_flow` : `integer` NULL
  - ` 12` `ac_level` : `integer` NULL
  - ` 13` `ac_value` : `numeric` NULL
  - ` 14` `ac_code_sort` : `character varying` NULL
  - ` 15` `ac_value_display` : `numeric` NULL
  - ` 16` `user_id` : `character varying` NULL
  - ` 17` `ac_value2` : `numeric` NULL
  - ` 18` `ac_value3` : `numeric` NULL
  - ` 19` `aktiva1` : `numeric` NULL
  - ` 20` `aktiva2` : `numeric` NULL
  - ` 21` `aktiva3` : `numeric` NULL
  - ` 22` `total1` : `numeric` NULL
  - ` 23` `total2` : `numeric` NULL
  - ` 24` `total3` : `numeric` NULL

### `public.bsd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bsd_oid` : `uuid` NOT NULL
  - `  2` `bsd_bs_number` : `integer` NULL
  - `  3` `bsd_caption` : `character varying` NULL
  - `  4` `bsd_number` : `integer` NULL
  - `  5` `bsd_remarks` : `character varying` NULL

### `public.bsda_account`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bsda_oid` : `uuid` NOT NULL
  - `  2` `bsda_bsdi_oid` : `uuid` NULL
  - `  3` `bsda_ac_id` : `integer` NULL
  - `  4` `bsda_ac_hirarki` : `character varying` NULL

### `public.bsdi_det_item`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `bsdi_oid` : `uuid` NOT NULL
  - `  2` `bsdi_bsd_oid` : `uuid` NULL
  - `  3` `bsdi_number` : `integer` NULL
  - `  4` `bsdi_caption` : `character varying` NULL

### `public.cash_approval`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cash_code` : `character varying` NULL
  - `  2` `en_id` : `integer` NULL
  - `  3` `status_approval` : `character` NULL
  - `  4` `date_aproval` : `timestamp without time zone` NULL
  - `  5` `approval_by` : `character varying` NULL
  - `  6` `approval_level` : `integer` NULL

### `public.cash_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cash_oid` : `uuid` NOT NULL
  - `  2` `cash_dom_id` : `smallint` NOT NULL
  - `  3` `cash_en_id` : `integer` NOT NULL
  - `  4` `cash_add_by` : `character varying` NULL
  - `  5` `cash_add_date` : `timestamp without time zone` NULL
  - `  6` `cash_upd_by` : `character varying` NULL
  - `  7` `cash_upd_date` : `timestamp without time zone` NULL
  - `  8` `cash_bk_id` : `integer` NOT NULL
  - `  9` `cash_code` : `character varying` NULL
  - ` 10` `cash_date` : `date` NULL
  - ` 11` `cash_type` : `character` NULL
  - ` 12` `cash_cu_id` : `integer` NOT NULL
  - ` 13` `cash_book_balance` : `numeric` NULL
  - ` 14` `cash_bank_balance` : `numeric` NULL
  - ` 15` `cash_exch_rate` : `numeric` NULL
  - ` 16` `cash_remarks` : `character varying` NULL
  - ` 17` `cash_dt` : `timestamp without time zone` NULL
  - ` 18` `cash_tran_id` : `integer` NOT NULL
  - ` 19` `cash_trans_id` : `character` NULL
  - ` 20` `cash_cek_bg` : `character varying` NULL
  - ` 21` `cash_dpp` : `numeric` NULL
  - ` 22` `cash_ppn` : `numeric` NULL
  - ` 23` `cash_pph` : `numeric` NULL
  - ` 24` `cash_amount` : `numeric` NULL
  - ` 25` `cash_pdpr_id` : `integer` NULL
  - ` 26` `cash_interval_day` : `integer` NULL
  - ` 27` `cash_kasbon_oid` : `uuid` NULL
  - ` 28` `cash_close_date` : `date` NULL
  - ` 29` `cash_branch_id` : `integer` NOT NULL
  - ` 30` `cash_disc_ac_id` : `integer` NULL
  - ` 31` `cash_cc_id` : `integer` NULL
  - ` 32` `cash_print_status` : `character` NULL
  - ` 33` `cash_print_date` : `timestamp without time zone` NULL
  - ` 34` `cash_print_count` : `integer` NULL
  - ` 35` `cash_remarks_cl` : `character varying` NULL
  - ` 36` `cash_is_pby` : `character` NULL
  - ` 37` `cash_reff` : `character varying` NULL
  - ` 38` `cash_xemp_id` : `integer` NULL
  - ` 39` `cash_prepayment_amount` : `numeric` NULL
  - ` 40` `cash_total_amount` : `numeric` NULL
  - ` 41` `cash_total_cash_amount` : `numeric` NULL
  - ` 42` `cash_close_periode` : `character` NULL
  - ` 43` `cash_close_date_periode` : `date` NULL
  - ` 44` `cash_submitted` : `character` NULL
  - ` 45` `cash_susp_acc_id` : `integer` NULL
  - ` 46` `cash_overexpense_ac_id` : `integer` NULL
  - ` 47` `cash_directexpense_bk_id` : `integer` NULL
  - ` 48` `cash_directexpense_netoff_amount` : `numeric` NULL
  - ` 49` `cash_overexpense_status` : `character` NULL
  - ` 50` `cash_directexpense_status` : `character` NULL
  - ` 51` `cash_total_dv` : `numeric` NULL
  - ` 52` `cash_is_cashout` : `character` NULL
  - ` 53` `cash_overexpense_amount` : `numeric` NULL
  - ` 54` `cash_bg_oid` : `uuid` NULL

### `public.cashd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cashd_oid` : `uuid` NOT NULL
  - `  2` `cashd_cash_oid` : `uuid` NULL
  - `  3` `cashd_seq` : `smallint` NULL
  - `  4` `cashd_dom_id` : `smallint` NULL
  - `  5` `cashd_en_id` : `integer` NULL
  - `  6` `cashd_rek_number` : `character varying` NULL
  - `  7` `cashd_ac_id` : `integer` NULL
  - `  8` `cashd_sb_id` : `integer` NULL
  - `  9` `cashd_cc_id` : `integer` NULL
  - ` 10` `cashd_amount` : `numeric` NULL
  - ` 11` `cashd_desc` : `character varying` NULL
  - ` 12` `cashd_dt` : `timestamp without time zone` NULL
  - ` 13` `cashd_taxable` : `character` NULL
  - ` 14` `cashd_tax_inc` : `character` NULL
  - ` 15` `cashd_tax_class` : `integer` NULL
  - ` 16` `cashd_tax_pph` : `numeric` NULL
  - ` 17` `cashd_tax_ppn` : `numeric` NULL
  - ` 18` `cashd_loc_eu_site_id` : `bigint` NULL
  - ` 19` `cashd_pjc_id` : `integer` NULL
  - ` 20` `cashd_pbyd_oid` : `uuid` NULL
  - ` 21` `cashd_xemp_id` : `bigint` NULL
  - ` 22` `cashd_activity_code_id` : `bigint` NULL
  - ` 23` `cashd_remarks` : `character varying` NULL
  - ` 24` `cashd_pjc_ref_id` : `integer` NULL
  - ` 25` `cashd_refund_amount` : `numeric` NULL
  - ` 26` `cashd_cash_amount` : `numeric` NULL
  - ` 27` `cashd_disc_amount` : `numeric` NULL
  - ` 28` `cashd_siteid_id` : `integer` NULL
  - ` 29` `cashd_prepayment_amount` : `numeric` NULL
  - ` 30` `cashd_overexpense_amount` : `numeric` NULL
  - ` 31` `cashd_directexpense_netoff_amount` : `numeric` NULL
  - ` 32` `cashd_amount_pay` : `numeric` NULL

### `public.cashdd_dz`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cashdd_oid` : `uuid` NOT NULL
  - `  2` `cashdd_pby_oid` : `uuid` NULL
  - `  3` `cashdd_dt` : `timestamp without time zone` NULL
  - `  4` `cashdd_cash_oid` : `uuid` NULL
  - `  5` `cashdd_dv_oid` : `uuid` NULL
  - `  6` `cashdd_overexpense_ac_id` : `integer` NULL

### `public.cashddd_dz_de`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cashddd_oid` : `uuid` NOT NULL
  - `  2` `cashddd_dt` : `timestamp without time zone` NULL
  - `  3` `cashddd_cash_oid` : `uuid` NULL
  - `  4` `cashddd_dv_oid` : `uuid` NULL

### `public.cashdp_pd`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cashdp_oid` : `uuid` NOT NULL
  - `  2` `cashdp_cashd_oid` : `uuid` NULL
  - `  3` `cashdp_pbyd_oid` : `uuid` NULL
  - `  4` `cashdp_dt` : `timestamp without time zone` NULL
  - `  5` `cashdp_pby_oid` : `uuid` NULL
  - `  6` `cashdp_cash_oid` : `uuid` NULL
  - `  7` `cashdp_pby_ref_net_off_oid` : `uuid` NULL

### `public.cashdpn_netoff`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cashdpn_oid` : `uuid` NOT NULL
  - `  2` `cashdpn_pbyn_oid` : `uuid` NULL
  - `  3` `cashdpn_pby_oid` : `uuid` NULL
  - `  4` `cashdpn_dt` : `timestamp without time zone` NULL
  - `  5` `cashdpn_cash_oid` : `uuid` NULL
  - `  6` `cashdpn_pbyn_amount` : `numeric` NULL

### `public.cashi_in`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cashi_oid` : `uuid` NOT NULL
  - `  2` `cashi_dom_id` : `integer` NULL
  - `  3` `cashi_en_id` : `integer` NULL
  - `  4` `cashi_add_by` : `character varying` NULL
  - `  5` `cashi_add_date` : `timestamp without time zone` NULL
  - `  6` `cashi_upd_by` : `character varying` NULL
  - `  7` `cashi_upd_date` : `timestamp without time zone` NULL
  - `  8` `cashi_bk_id` : `integer` NULL
  - `  9` `cashi_ptnr_id` : `integer` NULL
  - ` 10` `cashi_code` : `character varying` NOT NULL
  - ` 11` `cashi_date` : `date` NULL
  - ` 12` `cashi_remarks` : `character varying` NULL
  - ` 13` `cashi_reff` : `character varying` NULL
  - ` 14` `cashi_amount` : `numeric` NULL
  - ` 15` `cashi_check_number` : `character varying` NULL
  - ` 16` `cashi_post_dated_check` : `character varying` NULL
  - ` 17` `cashi_cu_id` : `integer` NULL
  - ` 18` `cashi_exc_rate` : `numeric` NULL
  - ` 19` `cashi_branch_id` : `integer` NOT NULL
  - ` 20` `cashi_so_oid` : `uuid` NULL
  - ` 21` `cashi_ob_amount` : `numeric` NULL
  - ` 22` `cashi_is_ob` : `character` NULL
  - ` 23` `cashi_print_status` : `character` NULL
  - ` 24` `cashi_print_date` : `timestamp without time zone` NULL
  - ` 25` `cashi_print_count` : `integer` NULL

### `public.cashid_detail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cashid_oid` : `uuid` NOT NULL
  - `  2` `cashid_cashi_oid` : `uuid` NULL
  - `  3` `cashid_ac_id` : `integer` NULL
  - `  4` `cashid_amount` : `numeric` NULL
  - `  5` `cashid_remarks` : `character varying` NULL
  - `  6` `cashid_seq` : `integer` NULL
  - `  7` `cashid_cc_id` : `integer` NULL

### `public.casho_out`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `casho_oid` : `uuid` NOT NULL
  - `  2` `casho_dom_id` : `integer` NULL
  - `  3` `casho_en_id` : `integer` NULL
  - `  4` `casho_add_by` : `character varying` NULL
  - `  5` `casho_add_date` : `timestamp without time zone` NULL
  - `  6` `casho_upd_by` : `character varying` NULL
  - `  7` `casho_upd_date` : `timestamp without time zone` NULL
  - `  8` `casho_bk_id` : `integer` NULL
  - `  9` `casho_ptnr_id` : `integer` NULL
  - ` 10` `casho_code` : `character varying` NOT NULL
  - ` 11` `casho_date` : `date` NULL
  - ` 12` `casho_remarks` : `character varying` NULL
  - ` 13` `casho_reff` : `character varying` NULL
  - ` 14` `casho_amount` : `numeric` NULL
  - ` 15` `casho_check_number` : `character varying` NULL
  - ` 16` `casho_post_dated_check` : `character varying` NULL
  - ` 17` `casho_cu_id` : `integer` NULL
  - ` 18` `casho_exc_rate` : `numeric` NULL
  - ` 19` `casho_branch_id` : `integer` NOT NULL
  - ` 20` `casho_print_status` : `character` NULL
  - ` 21` `casho_print_date` : `timestamp without time zone` NULL
  - ` 22` `casho_print_count` : `integer` NULL
  - ` 23` `casho_bg_oid` : `uuid` NULL
  - ` 24` `casho_cash_oid` : `uuid` NULL
  - ` 25` `casho_cash_ac_id` : `integer` NULL

### `public.cashod_detail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cashod_oid` : `uuid` NOT NULL
  - `  2` `cashod_casho_oid` : `uuid` NULL
  - `  3` `cashod_ac_id` : `integer` NULL
  - `  4` `cashod_amount` : `numeric` NULL
  - `  5` `cashod_remarks` : `character varying` NULL
  - `  6` `cashod_seq` : `integer` NULL
  - `  7` `cashod_cc_id` : `integer` NULL
  - `  8` `cashod_pjc_id` : `integer` NULL

### `public.casht_transfer`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `casht_oid` : `uuid` NOT NULL
  - `  2` `casht_dom` : `integer` NULL
  - `  3` `casht_en` : `integer` NULL
  - `  4` `casht_add_by` : `character varying` NULL
  - `  5` `casht_add_date` : `timestamp without time zone` NULL
  - `  6` `casht_upd_by` : `character varying` NULL
  - `  7` `casht_upd_date` : `timestamp without time zone` NULL
  - `  8` `casht_bk_id_from` : `integer` NULL
  - `  9` `casht_cu_id` : `integer` NULL
  - ` 10` `casht_exch_rate` : `numeric` NULL
  - ` 11` `casht_remarks` : `character varying` NULL
  - ` 12` `casht_bk_id_to` : `integer` NULL
  - ` 13` `casht_reff` : `character varying` NULL
  - ` 14` `casht_amount` : `numeric` NULL
  - ` 15` `casht_code` : `character varying` NULL
  - ` 16` `casht_date` : `date` NULL

### `public.cbdgt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cbdgt_oid` : `uuid` NOT NULL
  - `  2` `cbdgt_dom_id` : `smallint` NULL
  - `  3` `cbdgt_en_id` : `integer` NULL
  - `  4` `cbdgt_add_by` : `character varying` NULL
  - `  5` `cbdgt_add_date` : `timestamp without time zone` NULL
  - `  6` `cbdgt_upd_by` : `character varying` NULL
  - `  7` `cbdgt_upd_date` : `timestamp without time zone` NULL
  - `  8` `cbdgt_date` : `date` NULL
  - `  9` `cbdgt_year` : `integer` NULL
  - ` 10` `cbdgt_ac_from_id` : `integer` NULL
  - ` 11` `cbdgt_sb_from_id` : `integer` NULL
  - ` 12` `cbdgt_cc_from_id` : `integer` NULL
  - ` 13` `cbdgt_periode_from` : `integer` NULL
  - ` 14` `cbdgt_ac_to_id` : `integer` NULL
  - ` 15` `cbdgt_sb_to_id` : `integer` NULL
  - ` 16` `cbdgt_cc_to_id` : `integer` NULL
  - ` 17` `cbdgt_periode_to` : `integer` NULL
  - ` 18` `cbdgt_remarks` : `character varying` NULL
  - ` 19` `cbdgt_dt` : `timestamp without time zone` NULL
  - ` 20` `cbdgt_amount` : `numeric` NULL
  - ` 21` `cbdgt_bdgt_oid` : `uuid` NULL
  - ` 22` `cbdgt_trans_id` : `character` NULL
  - ` 23` `cbdgt_tran_id` : `integer` NULL
  - ` 24` `cbdgt_code` : `character varying` NULL
  - ` 25` `cbdgt_branch_id` : `integer` NULL

### `public.cbh_hist`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cbh_oid` : `uuid` NOT NULL
  - `  2` `cbh_dom_id` : `smallint` NULL
  - `  3` `cbh_en_id` : `integer` NULL
  - `  4` `cbh_dt` : `timestamp without time zone` NULL
  - `  5` `cbh_bk_id` : `integer` NULL
  - `  6` `cbh_date` : `date` NULL
  - `  7` `cbh_amount` : `numeric` NULL
  - `  8` `cbh_ref_oid` : `uuid` NULL
  - `  9` `cbh_ref_code` : `character varying` NULL
  - ` 10` `cbh_remarks` : `character varying` NULL
  - ` 11` `cbh_type` : `character varying` NULL
  - ` 12` `cbh_is_opn` : `character` NULL

### `public.cc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cc_oid` : `uuid` NOT NULL
  - `  2` `cc_dom_id` : `smallint` NULL
  - `  3` `cc_en_id` : `integer` NULL
  - `  4` `cc_add_by` : `character varying` NULL
  - `  5` `cc_add_date` : `timestamp without time zone` NULL
  - `  6` `cc_upd_by` : `character varying` NULL
  - `  7` `cc_upd_date` : `timestamp without time zone` NULL
  - `  8` `cc_id` : `integer` NULL
  - `  9` `cc_code` : `character varying` NULL
  - ` 10` `cc_desc` : `character varying` NULL
  - ` 11` `cc_active` : `character` NOT NULL
  - ` 12` `cc_dt` : `timestamp without time zone` NULL
  - ` 13` `cc_ac_id` : `integer` NOT NULL
  - ` 14` `cc_loc_id` : `integer` NOT NULL
  - ` 15` `cc_is_budget` : `character` NULL
  - ` 16` `cc_codes_setting` : `character varying` NULL
  - ` 17` `cc_branch_id` : `integer` NOT NULL
  - ` 18` `cc_bk_id` : `integer` NULL

### `public.cca_acount`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cca_oid` : `uuid` NOT NULL
  - `  2` `cca_dom_id` : `smallint` NULL
  - `  3` `cca_en_id` : `integer` NULL
  - `  4` `cca_add_by` : `character varying` NULL
  - `  5` `cca_add_date` : `timestamp without time zone` NULL
  - `  6` `cca_upd_by` : `character varying` NULL
  - `  7` `cca_upd_date` : `timestamp without time zone` NULL
  - `  8` `cca_cc_id` : `integer` NULL
  - `  9` `cca_ac_id` : `integer` NULL
  - ` 10` `cca_remarks` : `character varying` NULL
  - ` 11` `cca_dt` : `timestamp without time zone` NULL
  - ` 12` `cca_status` : `boolean` NULL

### `public.ccr_restrc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ccr_oid` : `uuid` NOT NULL
  - `  2` `ccr_dom_id` : `smallint` NULL
  - `  3` `ccr_en_id` : `integer` NULL
  - `  4` `ccr_add_by` : `character varying` NULL
  - `  5` `ccr_add_date` : `timestamp without time zone` NULL
  - `  6` `ccr_upd_by` : `character varying` NULL
  - `  7` `ccr_upd_date` : `timestamp without time zone` NULL
  - `  8` `ccr_cc_id` : `integer` NULL
  - `  9` `ccr_user_id` : `integer` NULL
  - ` 10` `ccr_remarks` : `character varying` NULL
  - ` 11` `ccr_dt` : `timestamp without time zone` NULL

### `public.ccre_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ccre_date` : `timestamp without time zone` NULL
  - `  2` `ccre_add_by` : `character varying` NULL
  - `  3` `ccre_add_date` : `timestamp without time zone` NULL
  - `  4` `ccre_upd_by` : `character varying` NULL
  - `  5` `ccre_upd_date` : `timestamp without time zone` NULL
  - `  6` `ccre_type` : `character` NULL
  - `  7` `ccre_pt_id` : `bigint` NULL
  - `  8` `ccre_si_id` : `integer` NULL
  - `  9` `ccre_loc_id` : `bigint` NULL
  - ` 10` `ccre_lot_serial` : `character varying` NULL
  - ` 11` `ccre_qty` : `numeric` NULL
  - ` 12` `ccre_um_id` : `integer` NULL
  - ` 13` `ccre_um_conv` : `numeric` NULL
  - ` 14` `ccre_qty_real` : `numeric` NULL
  - ` 15` `ccre_cost` : `numeric` NULL
  - ` 16` `ccre_dt` : `timestamp without time zone` NULL
  - ` 17` `ccre_en_id` : `integer` NULL
  - ` 18` `ccre_oid` : `uuid` NOT NULL
  - ` 19` `ccre_qty_old` : `numeric` NULL
  - ` 20` `ccre_branch_id` : `integer` NOT NULL
  - ` 21` `ccre_code` : `character varying` NULL

### `public.cf_report`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NULL
  - `  2` `remark` : `character varying` NULL
  - `  3` `sort_number` : `integer` NULL
  - `  4` `remark_header` : `character varying` NULL
  - `  5` `remark_footer` : `character varying` NULL
  - `  6` `seq` : `integer` NULL
  - `  7` `cfsign` : `character` NOT NULL
  - `  8` `ac_id` : `integer` NULL
  - `  9` `ac_code` : `character varying` NULL
  - ` 10` `ac_name` : `character varying` NULL
  - ` 11` `ac_parent` : `integer` NULL
  - ` 12` `ac_type` : `character` NOT NULL
  - ` 13` `ac_is_sumlevel` : `character` NOT NULL
  - ` 14` `ac_sign` : `character` NOT NULL
  - ` 15` `ac_active` : `character` NOT NULL
  - ` 16` `ac_cu_id` : `integer` NULL
  - ` 17` `ac_level` : `integer` NULL
  - ` 18` `cf_value` : `numeric` NULL
  - ` 19` `cf_is_toplevel` : `character varying` NULL
  - ` 20` `cf_value_cash_beginning` : `numeric` NULL
  - ` 21` `cf_value_display` : `numeric` NULL
  - ` 22` `cf_value_cash_ending` : `numeric` NULL
  - ` 23` `ac_code_hirarki` : `character varying` NULL

### `public.cf_report_temp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ac_id` : `integer` NULL
  - `  2` `ac_value` : `numeric` NULL

### `public.cf_setting_direct`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `oid_number` : `uuid` NULL
  - `  2` `ac_code` : `character varying` NULL
  - `  3` `desc_detail` : `character varying` NULL
  - `  4` `type_value` : `character varying` NULL
  - `  5` `sign_report` : `double precision` NULL
  - `  6` `type_set` : `character varying` NULL
  - `  7` `n1` : `character varying` NULL
  - `  8` `n1_desc` : `character varying` NULL
  - `  9` `n2` : `character varying` NULL
  - ` 10` `n2_desc` : `character varying` NULL
  - ` 11` `n3` : `character varying` NULL
  - ` 12` `n3_desc` : `character varying` NULL
  - ` 13` `n4` : `character varying` NULL
  - ` 14` `n4_desc` : `character varying` NULL
  - ` 15` `n5` : `character varying` NULL

### `public.cf_setting_indirect`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `oid_number` : `uuid` NULL
  - `  2` `ac_code` : `character varying` NULL
  - `  3` `desc_detail` : `character varying` NULL
  - `  4` `type_value` : `character varying` NULL
  - `  5` `sign_report` : `double precision` NULL
  - `  6` `type_set` : `character varying` NULL
  - `  7` `n1` : `character varying` NULL
  - `  8` `n1_desc` : `character varying` NULL
  - `  9` `n2` : `character varying` NULL
  - ` 10` `n2_desc` : `character varying` NULL
  - ` 11` `n3` : `character varying` NULL
  - ` 12` `n3_desc` : `character varying` NULL
  - ` 13` `n4` : `character varying` NULL
  - ` 14` `n4_desc` : `character varying` NULL
  - ` 15` `n5` : `character varying` NULL

### `public.cfd_temp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cfd_session` : `uuid` NOT NULL
  - `  2` `cfd_ref_oid` : `uuid` NULL
  - `  3` `cfd_amount` : `numeric` NULL
  - `  4` `cfd_gcal_oid` : `uuid` NULL

### `public.cfdrule_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cfdrule_oid` : `uuid` NOT NULL
  - `  2` `cfdrule_dom_id` : `smallint` NULL
  - `  3` `cfdrule_en_id` : `integer` NULL
  - `  4` `cfdrule_add_by` : `character varying` NULL
  - `  5` `cfdrule_add_date` : `timestamp without time zone` NULL
  - `  6` `cfdrule_upd_by` : `character varying` NULL
  - `  7` `cfdrule_upd_date` : `timestamp without time zone` NULL
  - `  8` `cfdrule_seq` : `integer` NULL
  - `  9` `cfdrule_group_id` : `integer` NULL
  - ` 10` `cfdrule_line_id` : `integer` NULL
  - ` 11` `cfdrule_is_sum` : `character` NULL
  - ` 12` `cfdrule_dt` : `timestamp without time zone` NULL
  - ` 13` `cfdrule_remarks` : `character varying` NULL

### `public.cfdruled_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cfdruled_oid` : `uuid` NOT NULL
  - `  2` `cfdruled_cfdrule_oid` : `uuid` NOT NULL
  - `  3` `cfdruled_seq` : `integer` NULL
  - `  4` `cfdruled_ac_id` : `integer` NULL
  - `  5` `cfdruled_sign` : `character` NULL

### `public.cfdrules_sum`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cfdrules_oid` : `uuid` NOT NULL
  - `  2` `cfdrules_cfdrule_oid` : `uuid` NOT NULL
  - `  3` `cfdrules_seq` : `integer` NULL
  - `  4` `cfdrules_ref_oid` : `uuid` NOT NULL

### `public.cfid_report`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cfid_oid` : `uuid` NOT NULL
  - `  2` `cfid_cfidruled_oid` : `uuid` NULL
  - `  3` `cfid_gcal_oid` : `uuid` NULL
  - `  4` `cfid_amount` : `numeric` NULL
  - `  5` `cfid_user_id` : `integer` NULL

### `public.cfidrule_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cfidrule_oid` : `uuid` NOT NULL
  - `  2` `cfidrule_dom_id` : `smallint` NULL
  - `  3` `cfidrule_en_id` : `integer` NULL
  - `  4` `cfidrule_add_by` : `character varying` NULL
  - `  5` `cfidrule_add_date` : `timestamp without time zone` NULL
  - `  6` `cfidrule_upd_by` : `character varying` NULL
  - `  7` `cfidrule_upd_date` : `timestamp without time zone` NULL
  - `  8` `cfidrule_header` : `character varying` NULL
  - `  9` `cfidrule_subheader` : `character varying` NULL
  - ` 10` `cfidrule_footer` : `character varying` NULL
  - ` 11` `cfidrule_seq` : `integer` NULL
  - ` 12` `cfidrule_remarks` : `character varying` NULL
  - ` 13` `cfidrule_is_invert` : `character` NULL
  - ` 14` `cfidrule_dt` : `timestamp without time zone` NULL

### `public.cfidruled_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cfidruled_oid` : `uuid` NOT NULL
  - `  2` `cfidruled_cfidrule_oid` : `uuid` NOT NULL
  - `  3` `cfidruled_seq` : `integer` NULL
  - `  4` `cfidruled_ac_id` : `integer` NULL

### `public.cfr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cfr_oid` : `uuid` NOT NULL
  - `  2` `cfr_dom_id` : `smallint` NOT NULL
  - `  3` `cfr_en_id` : `integer` NOT NULL
  - `  4` `cfr_add_by` : `character varying` NOT NULL
  - `  5` `cfr_add_date` : `timestamp without time zone` NULL
  - `  6` `cfr_tran_id` : `integer` NULL
  - `  7` `cfr_ref_oid` : `uuid` NULL
  - `  8` `cfr_ref_code` : `character varying` NULL
  - `  9` `cfr_date` : `date` NULL
  - ` 10` `cfr_remarks` : `character varying` NULL
  - ` 11` `cfr_ptnr_id` : `bigint` NULL
  - ` 12` `cfr_type` : `character` NULL
  - ` 13` `cfr_bk_id` : `integer` NOT NULL
  - ` 14` `cfr_cu_id` : `smallint` NOT NULL
  - ` 15` `cfr_ac_id` : `integer` NOT NULL
  - ` 16` `cfr_sb_id` : `integer` NULL
  - ` 17` `cfr_cc_id` : `integer` NOT NULL
  - ` 18` `cfr_pjc_id` : `integer` NULL
  - ` 19` `cfr_activity_code_id` : `bigint` NULL
  - ` 20` `cfr_exc_rate` : `numeric` NOT NULL
  - ` 21` `cfr_base_amount` : `numeric` NOT NULL
  - ` 22` `cfr_amount` : `numeric` NOT NULL
  - ` 23` `cfr_dt` : `timestamp without time zone` NOT NULL
  - ` 24` `cfr_ref_header_oid` : `uuid` NULL
  - ` 25` `cfr_ref_header_code` : `character varying` NULL
  - ` 26` `cfr_ref_detail_oid` : `uuid` NULL
  - ` 27` `cfr_ref_detail_code` : `character varying` NULL
  - ` 28` `cfr_loc_eu_site_id` : `bigint` NULL
  - ` 29` `cfr_pay_status` : `character` NULL
  - ` 30` `cfr_exc_rate_ref` : `numeric` NULL
  - ` 31` `cfr_prepayment_amount` : `numeric` NULL
  - ` 32` `cfr_overexpense_ac_id` : `integer` NULL

### `public.chat_boths`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `Id` : `integer` NOT NULL
  - `  2` `tag_message` : `text` NOT NULL

### `public.chat_boths_data`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `chat_boths_data_id` : `uuid` NOT NULL
  - `  2` `add_by` : `character varying` NULL
  - `  3` `add_date` : `timestamp without time zone` NOT NULL
  - `  4` `upd_by` : `character varying` NULL
  - `  5` `upd_date` : `timestamp without time zone` NOT NULL
  - `  6` `rowversion` : `timestamp without time zone` NULL
  - `  7` `prompt_words` : `text` NOT NULL
  - `  8` `data_link_online` : `text` NOT NULL

### `public.chat_boths_files`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `chat_boths_files_id` : `uuid` NOT NULL
  - `  2` `add_by` : `character varying` NULL
  - `  3` `add_date` : `timestamp without time zone` NOT NULL
  - `  4` `upd_by` : `character varying` NULL
  - `  5` `upd_date` : `timestamp without time zone` NOT NULL
  - `  6` `rowversion` : `timestamp without time zone` NULL
  - `  7` `prompt_words` : `text` NOT NULL
  - `  8` `file_name` : `text` NOT NULL
  - `  9` `content_length` : `integer` NOT NULL

### `public.chat_boths_respone`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `Id` : `integer` NOT NULL
  - `  2` `tag_message` : `text` NOT NULL
  - `  3` `type` : `integer` NULL
  - `  4` `order` : `integer` NULL

### `public.ci_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ci_oid` : `uuid` NOT NULL
  - `  2` `ci_dom_id` : `smallint` NULL
  - `  3` `ci_en_id` : `integer` NULL
  - `  4` `ci_code` : `character varying` NULL
  - `  5` `ci_date` : `date` NULL
  - `  6` `ci_remarks` : `character varying` NULL
  - `  7` `ci_dt` : `timestamp without time zone` NULL
  - `  8` `ci_si_id` : `integer` NULL
  - `  9` `ci_wc_id` : `integer` NULL
  - ` 10` `ci_add_by` : `character varying` NULL
  - ` 11` `ci_add_date` : `timestamp without time zone` NULL
  - ` 12` `ci_upd_by` : `character varying` NULL
  - ` 13` `ci_upd_date` : `timestamp without time zone` NULL
  - ` 14` `ci_cc_id` : `integer` NOT NULL
  - ` 15` `ci_trans_id` : `character` NULL
  - ` 16` `ci_print_status` : `character` NULL
  - ` 17` `ci_print_date` : `timestamp without time zone` NULL
  - ` 18` `ci_print_count` : `integer` NULL
  - ` 19` `ci_branch_id` : `integer` NOT NULL

### `public.cid_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cid_oid` : `uuid` NOT NULL
  - `  2` `cid_ci_oid` : `uuid` NULL
  - `  3` `cid_seq` : `smallint` NULL
  - `  4` `cid_qty` : `numeric` NULL
  - `  5` `cid_pt_id` : `bigint` NULL
  - `  6` `cid_si_id` : `integer` NULL
  - `  7` `cid_loc_id` : `bigint` NULL
  - `  8` `cid_dt` : `timestamp without time zone` NULL
  - `  9` `cid_cost_std` : `numeric` NULL
  - ` 10` `cid_mtl_tl` : `numeric` NULL
  - ` 11` `cid_loc_wip_id` : `integer` NOT NULL
  - ` 12` `cid_ovh_tl` : `numeric` NULL
  - ` 13` `cid_lbr_tl` : `numeric` NULL
  - ` 14` `cid_bdn_tl` : `numeric` NULL
  - ` 15` `cid_sub_tl` : `numeric` NULL
  - ` 16` `cid_mtl_ll` : `numeric` NULL
  - ` 17` `cid_ovh_ll` : `numeric` NULL
  - ` 18` `cid_lbr_ll` : `numeric` NULL
  - ` 19` `cid_bdn_ll` : `numeric` NULL
  - ` 20` `cid_sub_ll` : `numeric` NULL

### `public.cids_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cids_oid` : `uuid` NOT NULL
  - `  2` `cids_cid_oid` : `uuid` NULL
  - `  3` `cids_seq` : `smallint` NULL
  - `  4` `cids_qty` : `numeric` NULL
  - `  5` `cids_si_id` : `integer` NULL
  - `  6` `cids_loc_id` : `bigint` NULL
  - `  7` `cids_lot_serial` : `character varying` NULL
  - `  8` `cids_dt` : `timestamp without time zone` NULL
  - `  9` `cids_exp_date` : `date` NULL

### `public.cln_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cln_oid` : `uuid` NOT NULL
  - `  2` `cln_dom_id` : `smallint` NOT NULL
  - `  3` `cln_en_id` : `integer` NOT NULL
  - `  4` `cln_add_by` : `character varying` NULL
  - `  5` `cln_add_date` : `timestamp without time zone` NULL
  - `  6` `cln_upd_by` : `character varying` NULL
  - `  7` `cln_upd_date` : `timestamp without time zone` NULL
  - `  8` `cln_dt` : `timestamp without time zone` NULL
  - `  9` `cln_pt_id` : `bigint` NOT NULL
  - ` 10` `cln_loc_id` : `integer` NOT NULL
  - ` 11` `cln_lot_serial_from` : `character varying` NOT NULL
  - ` 12` `cln_lot_serial_to` : `character varying` NOT NULL
  - ` 13` `cln_qty` : `numeric` NULL
  - ` 14` `cln_exp_date` : `date` NULL
  - ` 15` `cln_branch_id` : `integer` NOT NULL
  - ` 16` `cln_code` : `character varying` NOT NULL
  - ` 17` `cln_date` : `date` NULL
  - ` 18` `cln_remarks` : `character varying` NULL

### `public.cmaddr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cmaddr_oid` : `uuid` NOT NULL
  - `  2` `cmaddr_dom_id` : `smallint` NULL
  - `  3` `cmaddr_en_id` : `integer` NULL
  - `  4` `cmaddr_id` : `integer` NULL
  - `  5` `cmaddr_code` : `character varying` NULL
  - `  6` `cmaddr_name` : `character varying` NULL
  - `  7` `cmaddr_line_1` : `character varying` NULL
  - `  8` `cmaddr_line_2` : `character varying` NULL
  - `  9` `cmaddr_line_3` : `character varying` NULL
  - ` 10` `cmaddr_phone_1` : `character varying` NULL
  - ` 11` `cmaddr_phone_2` : `character varying` NULL
  - ` 12` `cmaddr_dt` : `timestamp without time zone` NULL
  - ` 13` `cmaddr_npwp` : `character varying` NULL
  - ` 14` `cmaddr_pkp_date` : `date` NULL
  - ` 15` `cmaddr_code_cabang` : `character varying` NULL
  - ` 16` `cmaddr_tax_line_1` : `character varying` NULL
  - ` 17` `cmaddr_tax_line_2` : `character varying` NULL
  - ` 18` `cmaddr_tax_line_3` : `character varying` NULL
  - ` 19` `cmaddr_tax_phone_1` : `character varying` NULL
  - ` 20` `cmaddr_tax_phone_2` : `character varying` NULL

### `public.cmt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cmt_oid` : `uuid` NOT NULL
  - `  2` `cmt_dom_id` : `smallint` NULL
  - `  3` `cmt_table` : `character varying` NULL
  - `  4` `cmt_code` : `character varying` NULL
  - `  5` `cmt_seq` : `smallint` NULL
  - `  6` `cmt_type` : `character varying` NULL
  - `  7` `cmt_ref_oid` : `uuid` NULL
  - `  8` `cmt_ref_code` : `character varying` NULL
  - `  9` `cmt_comment` : `text` NULL
  - ` 10` `cmt_dt` : `timestamp without time zone` NULL

### `public.code_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code_oid` : `uuid` NOT NULL
  - `  2` `code_dom_id` : `smallint` NULL
  - `  3` `code_en_id` : `integer` NULL
  - `  4` `code_add_by` : `character varying` NULL
  - `  5` `code_add_date` : `timestamp without time zone` NULL
  - `  6` `code_upd_by` : `character varying` NULL
  - `  7` `code_upd_date` : `timestamp without time zone` NULL
  - `  8` `code_id` : `integer` NULL
  - `  9` `code_seq` : `integer` NULL
  - ` 10` `code_field` : `character varying` NULL
  - ` 11` `code_code` : `character varying` NULL
  - ` 12` `code_name` : `character varying` NULL
  - ` 13` `code_desc` : `character varying` NULL
  - ` 14` `code_default` : `character` NULL
  - ` 15` `code_parent` : `integer` NULL
  - ` 16` `code_usr_1` : `character varying` NULL
  - ` 17` `code_usr_2` : `character varying` NULL
  - ` 18` `code_usr_3` : `character varying` NULL
  - ` 19` `code_usr_4` : `character varying` NULL
  - ` 20` `code_usr_5` : `character varying` NULL
  - ` 21` `code_active` : `character` NULL
  - ` 22` `code_dt` : `timestamp without time zone` NULL
  - ` 23` `code_usr_6` : `bigint` NULL

### `public.code_mstr_temp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code_oid` : `uuid` NOT NULL
  - `  2` `code_dom_id` : `smallint` NULL
  - `  3` `code_en_id` : `integer` NULL
  - `  4` `code_add_by` : `character varying` NULL
  - `  5` `code_add_date` : `timestamp without time zone` NULL
  - `  6` `code_upd_by` : `character varying` NULL
  - `  7` `code_upd_date` : `timestamp without time zone` NULL
  - `  8` `code_id` : `integer` NULL
  - `  9` `code_seq` : `integer` NULL
  - ` 10` `code_field` : `character varying` NULL
  - ` 11` `code_code` : `character varying` NULL
  - ` 12` `code_name` : `character varying` NULL
  - ` 13` `code_desc` : `character varying` NULL
  - ` 14` `code_default` : `character` NULL
  - ` 15` `code_parent` : `integer` NULL
  - ` 16` `code_usr_1` : `character varying` NULL
  - ` 17` `code_usr_2` : `character varying` NULL
  - ` 18` `code_usr_3` : `character varying` NULL
  - ` 19` `code_usr_4` : `character varying` NULL
  - ` 20` `code_usr_5` : `character varying` NULL
  - ` 21` `code_active` : `character` NULL
  - ` 22` `code_dt` : `timestamp without time zone` NULL

### `public.codes_setting`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `codes_oid` : `uuid` NOT NULL
  - `  2` `codes_transaction_type` : `character varying` NULL
  - `  3` `codes_en_status` : `character` NULL
  - `  4` `codes_en_separator` : `character` NULL
  - `  5` `codes_branch_status` : `character` NULL
  - `  6` `codes_branch_separator` : `character` NULL
  - `  7` `codes_cc_status` : `character` NULL
  - `  8` `codes_cc_separator` : `character` NULL
  - `  9` `codes_transaction_status` : `character` NULL
  - ` 10` `codes_transaction_separator` : `character` NULL
  - ` 11` `codes_year_separator` : `character` NULL
  - ` 12` `codes_month_separator` : `character` NULL
  - ` 13` `codes_digit` : `smallint` NULL
  - ` 14` `codes_transaction_code` : `character varying` NULL
  - ` 15` `codes_example` : `character varying` NULL
  - ` 16` `codes_number_type` : `character varying` NULL
  - ` 17` `codes_active` : `character` NULL
  - ` 18` `codes_en_id` : `integer` NULL

### `public.codes_trans_type`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `transaction_type` : `character varying` NOT NULL

### `public.comsales_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `comsales_oid` : `uuid` NOT NULL
  - `  2` `comsales_dom_id` : `smallint` NULL
  - `  3` `comsales_en_id` : `integer` NULL
  - `  4` `comsales_add_by` : `character varying` NULL
  - `  5` `comsales_add_date` : `timestamp without time zone` NULL
  - `  6` `comsales_upd_by` : `character varying` NULL
  - `  7` `comsales_upd_date` : `timestamp without time zone` NULL
  - `  8` `comsales_code` : `character varying` NULL
  - `  9` `comsales_date` : `date` NULL
  - ` 10` `comsales_eff_date` : `date` NULL
  - ` 11` `comsales_total_amount` : `numeric` NULL
  - ` 12` `comsales_cu_id` : `integer` NULL
  - ` 13` `comsales_exc_rate` : `numeric` NULL
  - ` 14` `comsales_ext_total_amount` : `numeric` NULL
  - ` 15` `comsales_remarks` : `character varying` NULL
  - ` 16` `comsales_dt` : `timestamp without time zone` NULL
  - ` 17` `comsales_trans_to` : `date` NULL

### `public.comsalesd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `comsalesd_oid` : `uuid` NOT NULL
  - `  2` `comsalesd_comsales_oid` : `uuid` NOT NULL
  - `  3` `comsalesd_branch_id` : `integer` NULL
  - `  4` `comsalesd_sales_id` : `integer` NULL
  - `  5` `comsalesd_amount` : `numeric` NULL
  - `  6` `comsalesd_ext_amount` : `numeric` NULL
  - `  7` `comsalesd_remarks` : `character varying` NULL
  - `  8` `comsalesd_dt` : `timestamp without time zone` NULL

### `public.comsalesdd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `comsalesdd_oid` : `uuid` NOT NULL
  - `  2` `comsalesdd_comsalesd_oid` : `uuid` NULL
  - `  3` `comsalesdd_ar_oid` : `uuid` NULL
  - `  4` `comsalesdd_ar_eff_date` : `timestamp without time zone` NULL
  - `  5` `comsalesdd_arpay_oid` : `uuid` NULL
  - `  6` `comsalesdd_arpay_eff_date` : `timestamp without time zone` NULL
  - `  7` `comsalesdd_dpp_amount` : `numeric` NULL
  - `  8` `comsalesdd_commission_amount` : `numeric` NULL
  - `  9` `comsalesdd_remarks` : `character varying` NULL
  - ` 10` `comsalesdd_dt` : `timestamp without time zone` NULL
  - ` 11` `comsalesdd_ars_oid` : `uuid` NULL
  - ` 12` `comsalesdd_percentfee` : `numeric` NULL
  - ` 13` `comsalesdd_exc_rate` : `numeric` NULL
  - ` 14` `comsalesdd_dpp_amount_ext` : `numeric` NULL

### `public.comsalesp3_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `comsalesp3_oid` : `uuid` NOT NULL
  - `  2` `comsalesp3_dom_id` : `smallint` NULL
  - `  3` `comsalesp3_en_id` : `integer` NULL
  - `  4` `comsalesp3_add_by` : `character varying` NULL
  - `  5` `comsalesp3_add_date` : `timestamp without time zone` NULL
  - `  6` `comsalesp3_upd_by` : `character varying` NULL
  - `  7` `comsalesp3_upd_date` : `timestamp without time zone` NULL
  - `  8` `comsalesp3_code` : `character varying` NULL
  - `  9` `comsalesp3_date` : `date` NULL
  - ` 10` `comsalesp3_eff_date` : `date` NULL
  - ` 11` `comsalesp3_comtype_id` : `integer` NULL
  - ` 12` `comsalesp3_branch_id` : `integer` NULL
  - ` 13` `comsalesp3_cust_id` : `integer` NULL
  - ` 14` `comsalesp3_salesp3_id` : `integer` NULL
  - ` 15` `comsalesp3_total_amount` : `numeric` NULL
  - ` 16` `comsalesp3_cu_id` : `integer` NULL
  - ` 17` `comsalesp3_exc_rate` : `numeric` NULL
  - ` 18` `comsalesp3_ext_total_amount` : `numeric` NULL
  - ` 19` `comsalesp3_remarks` : `character varying` NULL
  - ` 20` `comsalesp3_dt` : `timestamp without time zone` NULL

### `public.comsalesp3d_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `comsalesp3d_oid` : `uuid` NOT NULL
  - `  2` `comsalesp3d_comsalesp3_oid` : `uuid` NULL
  - `  3` `comsalesp3d_ar_ship_oid` : `uuid` NULL
  - `  4` `comsalesp3d_ar_ship_ref` : `character varying` NULL
  - `  5` `comsalesp3d_ar_ship_date` : `timestamp without time zone` NULL
  - `  6` `comsalesp3d_desc` : `character varying` NULL
  - `  7` `comsalesp3d_base_amount` : `numeric` NULL
  - `  8` `comsalesp3d_commission_amount` : `numeric` NULL
  - `  9` `comsalesp3d_remarks` : `character varying` NULL
  - ` 10` `comsalesp3d_dt` : `timestamp without time zone` NULL
  - ` 11` `comsalesp3d_percentfee` : `numeric` NULL
  - ` 12` `comsalesp3d_ars_oid` : `uuid` NULL

### `public.conf_file`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `conf_oid` : `uuid` NOT NULL
  - `  2` `conf_name` : `character varying` NULL
  - `  3` `conf_value` : `character varying` NULL

### `public.consr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `consr_oid` : `uuid` NOT NULL
  - `  2` `consr_dom_id` : `smallint` NOT NULL
  - `  3` `consr_en_id` : `integer` NOT NULL
  - `  4` `consr_add_by` : `character varying` NULL
  - `  5` `consr_add_date` : `timestamp without time zone` NULL
  - `  6` `consr_upd_by` : `character varying` NULL
  - `  7` `consr_upd_date` : `timestamp without time zone` NULL
  - `  8` `consr_dt` : `timestamp without time zone` NULL
  - `  9` `consr_code` : `character varying` NOT NULL
  - ` 10` `consr_date` : `date` NULL
  - ` 11` `consr_ptsfr_oid` : `uuid` NOT NULL
  - ` 12` `consr_remarks` : `character varying` NULL
  - ` 13` `consr_branch_id` : `integer` NULL

### `public.consrd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `consrd_oid` : `uuid` NOT NULL
  - `  2` `consrd_consr_oid` : `uuid` NOT NULL
  - `  3` `consrd_ptsfrd_oid` : `uuid` NOT NULL
  - `  4` `consrd_dt` : `timestamp without time zone` NULL
  - `  5` `consrd_qty` : `numeric` NULL
  - `  6` `consrd_loc_id` : `integer` NULL
  - `  7` `consrd_remarks` : `character varying` NULL
  - `  8` `consrd_lot_serial` : `character varying` NULL

### `public.consrds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `consrds_oid` : `uuid` NOT NULL
  - `  2` `consrds_consrd_oid` : `uuid` NULL
  - `  3` `consrds_ptsfrds_oid` : `uuid` NULL
  - `  4` `consrds_qty` : `numeric` NULL
  - `  5` `consrds_loc_id` : `bigint` NULL
  - `  6` `consrds_lot_serial` : `character varying` NULL
  - `  7` `consrds_dt` : `timestamp without time zone` NULL

### `public.contractwr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `contractwr_oid` : `uuid` NOT NULL
  - `  2` `contractwr_dom_id` : `smallint` NULL
  - `  3` `contractwr_en_id` : `integer` NULL
  - `  4` `contractwr_add_by` : `character varying` NULL
  - `  5` `contractwr_add_date` : `timestamp without time zone` NULL
  - `  6` `contractwr_upd_by` : `character varying` NULL
  - `  7` `contractwr_upd_date` : `timestamp without time zone` NULL
  - `  8` `contractwr_code` : `character varying` NULL
  - `  9` `contractwr_date` : `date` NULL
  - ` 10` `contractwr_eff_date` : `date` NULL
  - ` 11` `contractwr_minpay_date` : `date` NULL
  - ` 12` `contractwr_ptnr_idwriter` : `integer` NULL
  - ` 13` `contractwr_active` : `character` NULL
  - ` 14` `contractwr_end` : `character` NULL
  - ` 15` `contractwr_end_date` : `date` NULL
  - ` 16` `contractwr_remarks` : `character varying` NULL
  - ` 17` `contractwr_dt` : `timestamp without time zone` NULL

### `public.contractwrd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `contractwrd_oid` : `uuid` NOT NULL
  - `  2` `contractwrd_contractwr_oid` : `uuid` NULL
  - `  3` `contractwrd_seq` : `smallint` NULL
  - `  4` `contractwrd_pt_id` : `bigint` NULL
  - `  5` `contractwrd_royalties` : `numeric` NULL
  - `  6` `contractwrd_remarks` : `character varying` NULL
  - `  7` `contractwrd_dt` : `timestamp without time zone` NULL
  - `  8` `contractwrd_pt_class_id` : `integer` NULL
  - `  9` `contractwrd_ptnr_id` : `integer` NULL
  - ` 10` `contractwrd_so_group_id` : `integer` NULL

### `public.cp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cp_oid` : `uuid` NOT NULL
  - `  2` `cp_dom_id` : `smallint` NULL
  - `  3` `cp_en_id` : `integer` NULL
  - `  4` `cp_add_by` : `character varying` NULL
  - `  5` `cp_add_date` : `timestamp without time zone` NULL
  - `  6` `cp_upd_by` : `character varying` NULL
  - `  7` `cp_upd_date` : `timestamp without time zone` NULL
  - `  8` `cp_dt` : `timestamp without time zone` NULL
  - `  9` `cp_id` : `integer` NULL
  - ` 10` `cp_code` : `character varying` NULL
  - ` 11` `cp_desc1` : `character varying` NULL
  - ` 12` `cp_desc2` : `character varying` NULL
  - ` 13` `cp_um` : `integer` NULL
  - ` 14` `cp_ptnr_id` : `integer` NULL

### `public.cpright_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cpright_oid` : `uuid` NOT NULL
  - `  2` `cpright_dom_id` : `smallint` NOT NULL
  - `  3` `cpright_en_id` : `integer` NOT NULL
  - `  4` `cpright_add_by` : `character varying` NULL
  - `  5` `cpright_add_date` : `timestamp without time zone` NULL
  - `  6` `cpright_upd_by` : `character varying` NULL
  - `  7` `cpright_upd_date` : `timestamp without time zone` NULL
  - `  8` `cpright_dt` : `timestamp without time zone` NULL
  - `  9` `cpright_code` : `character varying` NOT NULL
  - ` 10` `cpright_date` : `date` NULL
  - ` 11` `cpright_ptnr_id` : `integer` NOT NULL
  - ` 12` `cpright_country_id` : `integer` NOT NULL
  - ` 13` `cpright_start_date` : `date` NOT NULL
  - ` 14` `cpright_end_date` : `date` NOT NULL
  - ` 15` `cpright_remarks` : `character varying` NULL
  - ` 16` `cpright_branch_id` : `integer` NULL

### `public.cprightd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cprightd_oid` : `uuid` NOT NULL
  - `  2` `cprightd_cpright_oid` : `uuid` NOT NULL
  - `  3` `cprightd_pt_id` : `integer` NOT NULL

### `public.cs_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cs_oid` : `uuid` NOT NULL
  - `  2` `cs_dom_id` : `smallint` NULL
  - `  3` `cs_en_id` : `integer` NULL
  - `  4` `cs_add_by` : `character varying` NULL
  - `  5` `cs_upd_by` : `character varying` NULL
  - `  6` `cs_add_date` : `timestamp without time zone` NULL
  - `  7` `cs_upd_date` : `timestamp without time zone` NULL
  - `  8` `cs_dt` : `timestamp without time zone` NULL
  - `  9` `cs_id` : `integer` NULL
  - ` 10` `cs_name` : `character varying` NULL
  - ` 11` `cs_desc` : `character varying` NULL
  - ` 12` `cs_type` : `character` NULL
  - ` 13` `cs_methode` : `character` NULL
  - ` 14` `cs_is_default` : `character varying` NULL

### `public.csc_category`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `csc_oid` : `uuid` NOT NULL
  - `  2` `csc_dom_id` : `smallint` NULL
  - `  3` `csc_en_id` : `integer` NULL
  - `  4` `csc_add_by` : `character varying` NULL
  - `  5` `csc_add_date` : `timestamp without time zone` NULL
  - `  6` `csc_upd_by` : `character varying` NULL
  - `  7` `csc_upd_date` : `timestamp without time zone` NULL
  - `  8` `csc_dt` : `timestamp without time zone` NULL
  - `  9` `csc_id` : `integer` NULL
  - ` 10` `csc_code` : `character varying` NULL
  - ` 11` `csc_name` : `character varying` NULL
  - ` 12` `csc_ac_id` : `integer` NULL

### `public.csd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `csd_oid` : `uuid` NOT NULL
  - `  2` `csd_cs_oid` : `uuid` NULL
  - `  3` `csd_add_by` : `character varying` NULL
  - `  4` `csd_add_date` : `timestamp without time zone` NULL
  - `  5` `csd_upd_by` : `character varying` NULL
  - `  6` `csd_upd_date` : `timestamp without time zone` NULL
  - `  7` `csd_dt` : `timestamp without time zone` NULL
  - `  8` `csd_seq` : `smallint` NULL
  - `  9` `csd_element` : `character varying` NULL
  - ` 10` `csd_csc_id` : `integer` NULL
  - ` 11` `csd_desc` : `character varying` NULL

### `public.cu_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `cu_oid` : `uuid` NOT NULL
  - `  2` `cu_add_by` : `character varying` NULL
  - `  3` `cu_add_date` : `timestamp without time zone` NULL
  - `  4` `cu_upd_by` : `character varying` NULL
  - `  5` `cu_upd_date` : `timestamp without time zone` NULL
  - `  6` `cu_id` : `integer` NULL
  - `  7` `cu_code` : `character varying` NULL
  - `  8` `cu_name` : `character varying` NULL
  - `  9` `cu_symbol` : `character varying` NULL
  - ` 10` `cu_desc` : `character varying` NULL
  - ` 11` `cu_active` : `character` NULL
  - ` 12` `cu_dt` : `timestamp without time zone` NULL
  - ` 13` `cu_ac_unreal_exc_gain_id` : `integer` NULL
  - ` 14` `cu_ac_unreal_exc_lost_id` : `integer` NULL
  - ` 15` `cu_ac_real_exc_gain_id` : `integer` NULL
  - ` 16` `cu_ac_real_exc_lost_id` : `integer` NULL
  - ` 17` `cu_ac_unreal_exc_gain_buy_id` : `integer` NULL
  - ` 18` `cu_ac_unreal_exc_lost_buy_id` : `integer` NULL
  - ` 19` `cu_ac_real_exc_gain_buy_id` : `integer` NULL
  - ` 20` `cu_ac_real_exc_lost_buy_id` : `integer` NULL

### `public.curclist_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `curclist_oid` : `uuid` NOT NULL
  - `  2` `curclist_dom_id` : `smallint` NULL
  - `  3` `curclist_en_id` : `integer` NULL
  - `  4` `curclist_add_by` : `character varying` NULL
  - `  5` `curclist_add_date` : `timestamp without time zone` NULL
  - `  6` `curclist_pt_bom_id` : `bigint` NOT NULL
  - `  7` `curclist_phantom` : `character` NOT NULL
  - `  8` `curclist_dt` : `timestamp without time zone` NULL

### `public.curcperiod_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `curcperiod_oid` : `uuid` NOT NULL
  - `  2` `curcperiod_dom_id` : `smallint` NULL
  - `  3` `curcperiod_en_id` : `integer` NULL
  - `  4` `curcperiod_add_by` : `character varying` NULL
  - `  5` `curcperiod_add_date` : `timestamp without time zone` NULL
  - `  6` `curcperiod_perioddate` : `timestamp without time zone` NULL
  - `  7` `curcperiod_dt` : `timestamp without time zone` NULL
  - `  8` `curcperiod_remarks` : `character varying` NULL
  - `  9` `curcperiod_upd_date_cost` : `date` NULL
  - ` 10` `curcperiod_code` : `character varying` NULL
  - ` 11` `curcperiod_cs_id` : `integer` NULL
  - ` 12` `curcperiod_cs_id_to` : `integer` NULL

### `public.curcperiodd_item`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `curcperiodd_oid` : `uuid` NOT NULL
  - `  2` `curcperiodd_curcperiod_oid` : `uuid` NOT NULL
  - `  3` `curcperiodd_dom_id` : `smallint` NULL
  - `  4` `curcperiodd_en_id` : `integer` NULL
  - `  5` `curcperiodd_add_by` : `character varying` NULL
  - `  6` `curcperiodd_add_date` : `timestamp without time zone` NULL
  - `  7` `curcperiodd_pt_bom_id` : `bigint` NOT NULL
  - `  8` `curcperiodd_phantom` : `character` NOT NULL
  - `  9` `curcperiodd_dt` : `timestamp without time zone` NULL
  - ` 10` `curcperiodd_totalcurcost` : `numeric` NULL
  - ` 11` `curcperiodd_total_mtl` : `numeric` NULL
  - ` 12` `curcperiodd_total_ovh` : `numeric` NULL
  - ` 13` `curcperiodd_total_tl_lbr` : `numeric` NULL
  - ` 14` `curcperiodd_total_tl_bdn` : `numeric` NULL
  - ` 15` `curcperiodd_total_tl_sub` : `numeric` NULL
  - ` 16` `curcperiodd_total_ll_lbr` : `numeric` NULL
  - ` 17` `curcperiodd_total_ll_bdn` : `numeric` NULL
  - ` 18` `curcperiodd_total_ll_sub` : `numeric` NULL
  - ` 19` `curcperiodd_total_tl_ovh` : `numeric` NULL

### `public.curcperiodm_mtrl`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `curcperiodm_oid` : `uuid` NOT NULL
  - `  2` `curcperiodm_curcperiodd_oid` : `uuid` NULL
  - `  3` `curcperiodm_add_by` : `character varying` NULL
  - `  4` `curcperiodm_add_date` : `timestamp without time zone` NULL
  - `  5` `curcperiodm_pt_bom_id` : `bigint` NULL
  - `  6` `curcperiodm_code` : `character varying` NULL
  - `  7` `curcperiodm_desc` : `character varying` NULL
  - `  8` `curcperiodm_qty` : `numeric` NOT NULL
  - `  9` `curcperiodm_currentcost` : `numeric` NULL
  - ` 10` `curcperiodm_subtotcost` : `numeric` NULL
  - ` 11` `curcperiodm_dt` : `timestamp without time zone` NULL
  - ` 12` `curcperiodm_ovhcost` : `numeric` NULL
  - ` 13` `curcperiodm_subtotovhcost` : `numeric` NULL

### `public.curcperiodr_routing`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `curcperiodr_oid` : `uuid` NOT NULL
  - `  2` `curcperiodr_curcperiodd_oid` : `uuid` NULL
  - `  3` `curcperiodr_add_by` : `character varying` NULL
  - `  4` `curcperiodr_add_date` : `timestamp without time zone` NULL
  - `  5` `curcperiodr_pt_bom_id` : `bigint` NULL
  - `  6` `curcperiodr_code` : `character varying` NULL
  - `  7` `curcperiodr_desc` : `character varying` NULL
  - `  8` `curcperiodr_qty` : `numeric` NOT NULL
  - `  9` `curcperiodr_lv` : `character varying` NULL
  - ` 10` `curcperiodr_rod_oid` : `uuid` NULL
  - ` 11` `curcperiodr_total_lbr` : `numeric` NULL
  - ` 12` `curcperiodr_total_bdn` : `numeric` NULL
  - ` 13` `curcperiodr_total_sub` : `numeric` NULL
  - ` 14` `curcperiodr_dt` : `timestamp without time zone` NULL

### `public.dlv_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlv_oid` : `uuid` NOT NULL
  - `  2` `dlv_dom_id` : `smallint` NOT NULL
  - `  3` `dlv_en_id` : `integer` NOT NULL
  - `  4` `dlv_add_by` : `character varying` NULL
  - `  5` `dlv_add_date` : `timestamp without time zone` NULL
  - `  6` `dlv_upd_by` : `character varying` NULL
  - `  7` `dlv_upd_date` : `timestamp without time zone` NULL
  - `  8` `dlv_dt` : `timestamp without time zone` NULL
  - `  9` `dlv_code` : `character varying` NOT NULL
  - ` 10` `dlv_date` : `date` NULL
  - ` 11` `dlv_vehicle_id` : `integer` NOT NULL
  - ` 12` `dlv_driver_id` : `bigint` NULL
  - ` 13` `dlv_driver_assistance_id` : `bigint` NULL
  - ` 14` `dlv_total_tonnage` : `numeric` NULL
  - ` 15` `dlv_print_status` : `character` NULL
  - ` 16` `dlv_print_date` : `timestamp without time zone` NULL
  - ` 17` `dlv_print_count` : `integer` NULL
  - ` 18` `dlv_remarks` : `character varying` NULL
  - ` 19` `dlv_expediter` : `integer` NOT NULL
  - ` 20` `dlv_vehicle_tonnage` : `numeric` NULL
  - ` 21` `dlv_branch_id` : `integer` NOT NULL
  - ` 22` `dlv_remarks2` : `character varying` NULL
  - ` 23` `dlv_date_receipt` : `timestamp without time zone` NULL

### `public.dlvrd_riud`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlvrd_oid` : `uuid` NOT NULL
  - `  2` `dlvrd_dlv_oid` : `uuid` NULL
  - `  3` `dlvrd_riud_oid` : `uuid` NULL
  - `  4` `dlvrd_qty` : `numeric` NULL
  - `  5` `dlvrd_qty_packaging` : `numeric` NULL
  - `  6` `dlvrd_tonnage` : `numeric` NULL
  - `  7` `dlvrd_type` : `character` NULL

### `public.dlvrds_riuds`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlvrds_oid` : `uuid` NOT NULL
  - `  2` `dlvrds_dlv_oid` : `uuid` NULL
  - `  3` `dlvrds_riud_oid` : `uuid` NULL
  - `  4` `dlvrds_riuds_oid` : `uuid` NULL
  - `  5` `dlvrds_qty` : `numeric` NULL
  - `  6` `dlvrds_qty_packaging` : `numeric` NULL
  - `  7` `dlvrds_type` : `character` NULL

### `public.dlvsd_soshipd`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlvsd_oid` : `uuid` NOT NULL
  - `  2` `dlvsd_dlv_oid` : `uuid` NULL
  - `  3` `dlvsd_soshipd_oid` : `uuid` NULL
  - `  4` `dlvsd_qty` : `numeric` NULL
  - `  5` `dlvsd_qty_packaging` : `numeric` NULL
  - `  6` `dlvsd_tonnage` : `numeric` NULL

### `public.dlvsds_soshipds`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlvsds_oid` : `uuid` NOT NULL
  - `  2` `dlvsds_dlv_oid` : `uuid` NULL
  - `  3` `dlvsds_soshipd_oid` : `uuid` NULL
  - `  4` `dlvsds_soshipds_oid` : `uuid` NULL
  - `  5` `dlvsds_qty` : `numeric` NULL
  - `  6` `dlvsds_qty_packaging` : `numeric` NULL

### `public.dlvtd_ptsfrd`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlvtd_oid` : `uuid` NOT NULL
  - `  2` `dlvtd_dlv_oid` : `uuid` NULL
  - `  3` `dlvtd_ptsfrd_oid` : `uuid` NULL
  - `  4` `dlvtd_qty` : `numeric` NULL
  - `  5` `dlvtd_qty_packaging` : `numeric` NULL
  - `  6` `dlvtd_tonnage` : `numeric` NULL

### `public.dlvtds_ptsfrds`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dlvtds_oid` : `uuid` NOT NULL
  - `  2` `dlvtds_dlv_oid` : `uuid` NULL
  - `  3` `dlvtds_ptsfrd_oid` : `uuid` NULL
  - `  4` `dlvtds_ptsfrds_oid` : `uuid` NULL
  - `  5` `dlvtds_qty` : `numeric` NULL
  - `  6` `dlvtds_qty_packaging` : `numeric` NULL

### `public.doc_approve_type`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `doc_approve_type` : `integer` NOT NULL
  - `  2` `doc_approve_desc` : `character varying` NOT NULL

### `public.dom_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dom_oid` : `uuid` NOT NULL
  - `  2` `dom_id` : `smallint` NULL
  - `  3` `dom_code` : `character varying` NOT NULL
  - `  4` `dom_desc` : `character varying` NOT NULL
  - `  5` `dom_active` : `character` NOT NULL
  - `  6` `dom_dt` : `timestamp without time zone` NULL
  - `  7` `dom_base_cur_id` : `integer` NULL
  - `  8` `dom_pl_ac` : `integer` NULL
  - `  9` `dom_re_ac` : `integer` NULL
  - ` 10` `dom_psa_ac` : `integer` NULL
  - ` 11` `dom_lbr_ac_id` : `integer` NULL
  - ` 12` `dom_ovh_ac_id` : `integer` NULL
  - ` 13` `dom_bdn_ac_id` : `integer` NULL
  - ` 14` `dom_mtl_ac_id` : `integer` NULL
  - ` 15` `dom_sbc_ac_id` : `integer` NULL
  - ` 16` `dom_la_ac` : `integer` NULL
  - ` 17` `dom_las_ac` : `integer` NULL
  - ` 18` `dom_drop_ac_id` : `integer` NULL
  - ` 19` `dom_step1_ac` : `character` NULL
  - ` 20` `dom_step2_ac` : `character` NULL

### `public.dpt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dpt_oid` : `uuid` NOT NULL
  - `  2` `dpt_dom_id` : `smallint` NULL
  - `  3` `dpt_en_id` : `integer` NULL
  - `  4` `dpt_add_by` : `character varying` NULL
  - `  5` `dpt_add_date` : `timestamp without time zone` NULL
  - `  6` `dpt_upd_by` : `character varying` NULL
  - `  7` `dpt_upd_date` : `timestamp without time zone` NULL
  - `  8` `dpt_id` : `integer` NULL
  - `  9` `dpt_code` : `character varying` NULL
  - ` 10` `dpt_desc` : `character varying` NULL
  - ` 11` `dpt_lbr_cap` : `integer` NULL
  - ` 12` `dpt_active` : `character` NOT NULL
  - ` 13` `dpt_dt` : `timestamp without time zone` NULL

### `public.dpta_acct`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dpta_oid` : `uuid` NOT NULL
  - `  2` `dpta_dpt_oid` : `uuid` NULL
  - `  3` `dpta_acc_type` : `character varying` NULL
  - `  4` `dpta_ac_id` : `integer` NULL
  - `  5` `dpta_sb_id` : `integer` NULL
  - `  6` `dpta_cc_id` : `integer` NULL
  - `  7` `dpta_dt` : `timestamp without time zone` NULL
  - `  8` `dpta_desc` : `character varying` NULL

### `public.dptal_list`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `dptal_oid` : `uuid` NOT NULL
  - `  2` `dptal_seq` : `smallint` NULL
  - `  3` `dptal_acc_type` : `character varying` NULL
  - `  4` `dptal_ac_id` : `integer` NULL
  - `  5` `dptal_sb_id` : `integer` NULL
  - `  6` `dptal_cc_id` : `integer` NULL
  - `  7` `dptal_dt` : `timestamp without time zone` NULL
  - `  8` `dptal_desc` : `character varying` NULL

### `public.drcc_acount`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `drcc_oid` : `uuid` NOT NULL
  - `  2` `drcc_dom_id` : `smallint` NULL
  - `  3` `drcc_en_id` : `integer` NULL
  - `  4` `drcc_add_by` : `character varying` NULL
  - `  5` `drcc_add_date` : `timestamp without time zone` NULL
  - `  6` `drcc_upd_by` : `character varying` NULL
  - `  7` `drcc_upd_date` : `timestamp without time zone` NULL
  - `  8` `drcc_cc_id` : `integer` NULL
  - `  9` `drcc_ac_id` : `integer` NULL
  - ` 10` `drcc_remarks` : `character varying` NULL

### `public.emp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `emp_oid` : `uuid` NOT NULL
  - `  2` `emp_add_by` : `character varying` NULL
  - `  3` `emp_add_date` : `timestamp without time zone` NULL
  - `  4` `emp_upd_by` : `character varying` NULL
  - `  5` `emp_upd_date` : `timestamp without time zone` NULL
  - `  6` `emp_id` : `bigint` NULL
  - `  7` `emp_fname` : `character varying` NULL
  - `  8` `emp_mname` : `character varying` NULL
  - `  9` `emp_lname` : `character varying` NULL
  - ` 10` `emp_orgs_id` : `integer` NULL
  - ` 11` `emp_orgs_aprv` : `integer` NULL
  - ` 12` `emp_gender` : `character` NULL
  - ` 13` `emp_pos_id` : `integer` NULL
  - ` 14` `emp_dt` : `timestamp without time zone` NULL
  - ` 15` `emp_birth_date` : `date` NULL
  - ` 16` `emp_birth_place` : `character varying` NULL
  - ` 17` `emp_relation` : `character` NULL
  - ` 18` `emp_area_id` : `integer` NULL
  - ` 19` `emp_no_ktp` : `character varying` NULL
  - ` 20` `emp_pin` : `character varying` NULL
  - ` 21` `emp_tinggi_badan` : `numeric` NULL
  - ` 22` `emp_berat_badan` : `numeric` NULL
  - ` 23` `emp_penyakit` : `character varying` NULL
  - ` 24` `emp_cacat` : `character varying` NULL
  - ` 25` `emp_telp_rumah` : `character varying` NULL
  - ` 26` `emp_telp_alt` : `character varying` NULL
  - ` 27` `emp_hp` : `character varying` NULL
  - ` 28` `emp_email` : `character varying` NULL
  - ` 29` `emp_website` : `character varying` NULL
  - ` 30` `emp_inisial` : `character varying` NULL
  - ` 31` `emp_tgl_masuk` : `date` NULL
  - ` 32` `emp_hrgol_id` : `integer` NULL
  - ` 33` `emp_hrstatus_id` : `integer` NULL
  - ` 34` `emp_hrpos_id` : `integer` NULL
  - ` 35` `emp_pangkat_id` : `real` NULL
  - ` 36` `emp_status_koperasi` : `character` NULL
  - ` 37` `emp_active` : `character` NULL
  - ` 38` `emp_finger` : `bytea` NULL
  - ` 39` `emp_nik_new` : `character varying` NULL
  - ` 40` `emp_tgl_keluar` : `date` NULL
  - ` 41` `emp_alasan_keluar` : `text` NULL
  - ` 42` `emp_nik_old` : `character varying` NULL
  - ` 43` `emp_address` : `character varying` NULL
  - ` 44` `emp_photo` : `bytea` NULL
  - ` 45` `emp_type` : `character` NULL
  - ` 46` `emp_kota` : `character varying` NULL
  - ` 47` `emp_propinsi` : `character varying` NULL
  - ` 48` `emp_kd_pos` : `character varying` NULL
  - ` 49` `emp_en_id` : `integer` NULL
  - ` 50` `emp_status_marital` : `integer` NULL
  - ` 51` `emp_no_rek` : `character varying` NULL
  - ` 52` `emp_id_finger` : `integer` NULL
  - ` 53` `emp_work_group` : `character varying` NULL
  - ` 54` `emp_gaji_pokok` : `bytea` NULL
  - ` 55` `emp_t_transport` : `bytea` NULL
  - ` 56` `emp_t_perumahan` : `bytea` NULL
  - ` 57` `emp_t_bbm` : `bytea` NULL
  - ` 58` `emp_t_telpon` : `bytea` NULL
  - ` 59` `emp_t_makan` : `bytea` NULL
  - ` 60` `emp_t_fungsional` : `bytea` NULL
  - ` 61` `emp_upah_perjam_borongan` : `bytea` NULL
  - ` 62` `emp_privilege_finger` : `integer` NULL
  - ` 63` `emp_password_finger` : `numeric` NULL
  - ` 64` `emp_no_urut` : `integer` NULL
  - ` 65` `emp_hirarki` : `integer` NULL

### `public.en_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `en_oid` : `uuid` NOT NULL
  - `  2` `en_dom_id` : `smallint` NULL
  - `  3` `en_add_by` : `character varying` NULL
  - `  4` `en_add_date` : `timestamp without time zone` NULL
  - `  5` `en_upd_by` : `character varying` NULL
  - `  6` `en_upd_date` : `timestamp without time zone` NULL
  - `  7` `en_id` : `integer` NULL
  - `  8` `en_code` : `character varying` NULL
  - `  9` `en_desc` : `character varying` NULL
  - ` 10` `en_parent` : `integer` NULL
  - ` 11` `en_active` : `character` NOT NULL
  - ` 12` `en_dt` : `timestamp without time zone` NULL
  - ` 13` `en_codes_setting` : `character varying` NULL
  - ` 14` `en_logo` : `character varying` NULL

### `public.eng_group`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `eng_oid` : `uuid` NOT NULL
  - `  2` `eng_add_by` : `character varying` NULL
  - `  3` `eng_add_date` : `timestamp without time zone` NULL
  - `  4` `eng_dt` : `timestamp without time zone` NULL
  - `  5` `eng_code` : `character varying` NULL
  - `  6` `eng_name` : `character varying` NULL
  - `  7` `eng_id` : `integer` NULL
  - `  8` `eng_upd_by` : `character varying` NULL
  - `  9` `eng_upd_date` : `timestamp without time zone` NULL

### `public.engd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `engd_oid` : `uuid` NOT NULL
  - `  2` `engd_eng_oid` : `uuid` NULL
  - `  3` `engd_en_id` : `integer` NULL

### `public.exr_rate`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `exr_oid` : `uuid` NOT NULL
  - `  2` `exr_dom_id` : `smallint` NULL
  - `  3` `exr_add_by` : `character varying` NULL
  - `  4` `exr_add_date` : `timestamp without time zone` NULL
  - `  5` `exr_upd_by` : `character varying` NULL
  - `  6` `exr_upd_date` : `timestamp without time zone` NULL
  - `  7` `exr_cu_id_1` : `integer` NULL
  - `  8` `exr_cu_id_2` : `integer` NULL
  - `  9` `exr_cu_rate_1` : `numeric` NULL
  - ` 10` `exr_cu_rate_2` : `numeric` NULL
  - ` 11` `exr_start_date` : `date` NULL
  - ` 12` `exr_end_date` : `date` NULL
  - ` 13` `exr_dt` : `timestamp without time zone` NULL
  - ` 14` `exr_code` : `character varying` NULL

### `public.exrh_hist`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `exrh_oid` : `uuid` NOT NULL
  - `  2` `exrh_dom_id` : `smallint` NOT NULL
  - `  3` `exrh_en_id` : `integer` NOT NULL
  - `  4` `exrh_add_by` : `character varying` NULL
  - `  5` `exrh_add_date` : `timestamp without time zone` NULL
  - `  6` `exrh_dt` : `timestamp without time zone` NULL
  - `  7` `exrh_date` : `date` NULL
  - `  8` `exrh_ref_type` : `character` NULL
  - `  9` `exrh_ref_oid` : `uuid` NOT NULL
  - ` 10` `exrh_amount` : `numeric` NULL

### `public.fabk_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `fabk_oid` : `uuid` NOT NULL
  - `  2` `fabk_dom_id` : `smallint` NULL
  - `  3` `fabk_add_by` : `character varying` NULL
  - `  4` `fabk_add_date` : `timestamp without time zone` NULL
  - `  5` `fabk_upd_by` : `character varying` NULL
  - `  6` `fabk_upd_date` : `timestamp without time zone` NULL
  - `  7` `fabk_id` : `bigint` NULL
  - `  8` `fabk_code` : `character varying` NULL
  - `  9` `fabk_desc` : `character varying` NULL
  - ` 10` `fabk_posted` : `character` NULL
  - ` 11` `fabk_dt` : `timestamp without time zone` NULL

### `public.famt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `famt_oid` : `uuid` NOT NULL
  - `  2` `famt_dom_id` : `smallint` NULL
  - `  3` `famt_add_by` : `character varying` NULL
  - `  4` `famt_add_date` : `timestamp without time zone` NULL
  - `  5` `famt_upd_by` : `character varying` NULL
  - `  6` `famt_upd_date` : `timestamp without time zone` NULL
  - `  7` `famt_id` : `bigint` NULL
  - `  8` `famt_code` : `character varying` NULL
  - `  9` `famt_method` : `character` NULL
  - ` 10` `famt_conv` : `character` NULL
  - ` 11` `famt_desc` : `character varying` NULL
  - ` 12` `famt_salv` : `character` NULL
  - ` 13` `famt_actual` : `character` NULL
  - ` 14` `famt_exp_life` : `smallint` NULL
  - ` 15` `famt_dt` : `timestamp without time zone` NULL

### `public.famtd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `famtd_oid` : `uuid` NOT NULL
  - `  2` `famtd_famt_oid` : `uuid` NULL
  - `  3` `famtd_add_by` : `character varying` NULL
  - `  4` `famtd_add_date` : `timestamp without time zone` NULL
  - `  5` `famtd_upd_by` : `character varying` NULL
  - `  6` `famtd_upd_date` : `timestamp without time zone` NULL
  - `  7` `famtd_year` : `smallint` NULL
  - `  8` `famtd_per_1` : `numeric` NULL
  - `  9` `famtd_per_2` : `numeric` NULL
  - ` 10` `famtd_per_3` : `numeric` NULL
  - ` 11` `famtd_per_4` : `numeric` NULL
  - ` 12` `famtd_per_5` : `numeric` NULL
  - ` 13` `famtd_per_6` : `numeric` NULL
  - ` 14` `famtd_per_7` : `numeric` NULL
  - ` 15` `famtd_per_8` : `numeric` NULL
  - ` 16` `famtd_per_9` : `numeric` NULL
  - ` 17` `famtd_per_10` : `numeric` NULL
  - ` 18` `famtd_per_11` : `numeric` NULL
  - ` 19` `famtd_per_12` : `numeric` NULL
  - ` 20` `famtd_dt` : `timestamp without time zone` NULL

### `public.fes_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `fes_oid` : `uuid` NOT NULL
  - `  2` `fes_dom_id` : `smallint` NOT NULL
  - `  3` `fes_en_id` : `integer` NOT NULL
  - `  4` `fes_add_by` : `character varying` NULL
  - `  5` `fes_add_date` : `timestamp without time zone` NULL
  - `  6` `fes_upd_by` : `character varying` NULL
  - `  7` `fes_upd_date` : `timestamp without time zone` NULL
  - `  8` `fes_dt` : `timestamp without time zone` NULL
  - `  9` `fes_formname` : `character varying` NULL
  - ` 10` `fes_columnname` : `character varying` NULL
  - ` 11` `fes_disable` : `character` NOT NULL
  - ` 12` `fes_mandatory` : `character` NOT NULL

### `public.fibp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `fibp_oid` : `uuid` NOT NULL
  - `  2` `fibp_pt_id` : `integer` NULL
  - `  3` `fibp_dom_id` : `integer` NULL
  - `  4` `fibp_en_id` : `integer` NULL
  - `  5` `fibp_upd_date` : `timestamp without time zone` NULL
  - `  6` `fibp_upd_by` : `character varying` NULL
  - `  7` `fibp_add_date` : `timestamp without time zone` NULL
  - `  8` `fibp_add_by` : `character varying` NULL
  - `  9` `fibp_code` : `character varying` NULL
  - ` 10` `fibp_date` : `date` NULL
  - ` 11` `fibp_sub_judul` : `character varying` NULL
  - ` 12` `fibp_penulis` : `character varying` NULL
  - ` 13` `fibp_ukuran_cover` : `character varying` NULL
  - ` 14` `fibp_ukuran_isi` : `character varying` NULL
  - ` 15` `fibp_jml_hal` : `character varying` NULL
  - ` 16` `fibp_tebal_punggung` : `character varying` NULL
  - ` 17` `fibp_isbn` : `character varying` NULL
  - ` 18` `fibp_kemasan` : `character varying` NULL
  - ` 19` `fibp_cetak_cover` : `character varying` NULL
  - ` 20` `fibp_cetak_isi` : `character varying` NULL
  - ` 21` `fibp_finishing_cover` : `character varying` NULL
  - ` 22` `fibp_jilid` : `character varying` NULL
  - ` 23` `fibp_bahan_cover` : `character varying` NULL
  - ` 24` `fibp_bahan_isi` : `character varying` NULL
  - ` 25` `fibp_oplah` : `numeric` NULL
  - ` 26` `fibp_total_biaya_prod` : `numeric` NULL
  - ` 27` `fibp_biaya_cetak_per_eks` : `numeric` NULL
  - ` 28` `fibp_total_biaya_cetak` : `numeric` NULL
  - ` 29` `fibp_kategori` : `character varying` NULL
  - ` 30` `fibp_hpp_net` : `numeric` NULL
  - ` 31` `fibp_biaya_prod_per_eks` : `numeric` NULL

### `public.fibpd_detail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `fibpd_oid` : `uuid` NOT NULL
  - `  2` `fibpd_fibp_oid` : `uuid` NULL
  - `  3` `fibpd_jns` : `integer` NULL
  - `  4` `fibpd_biaya` : `numeric` NULL
  - `  5` `fibpd_ket` : `character varying` NULL

### `public.fp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `fp_oid` : `uuid` NOT NULL
  - `  2` `fp_dom_id` : `smallint` NULL
  - `  3` `fp_en_id` : `integer` NULL
  - `  4` `fp_add_by` : `character varying` NULL
  - `  5` `fp_add_date` : `timestamp without time zone` NULL
  - `  6` `fp_upd_by` : `character varying` NULL
  - `  7` `fp_upd_date` : `timestamp without time zone` NULL
  - `  8` `fp_code` : `character varying` NOT NULL
  - `  9` `fp_pengali_tax` : `numeric` NULL
  - ` 10` `fp_dt` : `timestamp without time zone` NULL
  - ` 11` `fp_date` : `date` NULL
  - ` 12` `fp_sign` : `character varying` NULL
  - ` 13` `fp_status` : `character` NULL
  - ` 14` `fp_customer_type` : `character varying` NULL
  - ` 15` `fp_area` : `character varying` NULL
  - ` 16` `fp_ppn_type` : `character` NULL
  - ` 17` `fp_ptnr_id` : `integer` NULL
  - ` 18` `fp_tax_inc` : `character` NULL
  - ` 19` `fp_ar_oid` : `uuid` NULL
  - ` 20` `fp_trans_id` : `character` NULL
  - ` 21` `fp_rev` : `integer` NULL
  - ` 22` `fp_unstrikeout` : `character varying` NULL
  - ` 23` `fp_ptnr_addr_oid` : `uuid` NULL
  - ` 24` `fp_tran_id` : `integer` NULL
  - ` 25` `fp_fp_oid` : `uuid` NULL
  - ` 26` `fp_exc_rate` : `numeric` NULL
  - ` 27` `fp_exr_code` : `character varying` NULL
  - ` 28` `fp_remarks` : `character varying` NULL
  - ` 29` `fp_code_original` : `character varying` NULL
  - ` 30` `fp_export_count` : `integer` NULL
  - ` 31` `fp_docp_code` : `character varying` NULL
  - ` 32` `fp_trans_code_id` : `integer` NULL
  - ` 33` `fp_add_remarks_id` : `integer` NULL
  - ` 34` `fp_pacility_stamp_id` : `integer` NULL
  - ` 35` `fp_date_replacement` : `date` NULL
  - ` 36` `fp_dok_pendukung` : `character varying` NULL
  - ` 37` `fp_period_dok_pendukung` : `character varying` NULL

### `public.fpar_ar`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `fpar_oid` : `uuid` NOT NULL
  - `  2` `fpar_fp_oid` : `uuid` NULL
  - `  3` `fpar_ar_oid` : `uuid` NULL

### `public.fpd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `fpd_oid` : `uuid` NOT NULL
  - `  2` `fpd_dom_id` : `smallint` NULL
  - `  3` `fpd_en_id` : `integer` NULL
  - `  4` `fpd_add_by` : `character varying` NULL
  - `  5` `fpd_add_date` : `timestamp without time zone` NULL
  - `  6` `fpd_upd_by` : `character varying` NULL
  - `  7` `fpd_upd_date` : `timestamp without time zone` NULL
  - `  8` `fpd_dt` : `timestamp without time zone` NULL
  - `  9` `fpd_ars_oid` : `uuid` NULL
  - ` 10` `fpd_fp_oid` : `uuid` NULL

### `public.gcal_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `gcal_oid` : `uuid` NOT NULL
  - `  2` `gcal_dom_id` : `smallint` NULL
  - `  3` `gcal_add_by` : `character varying` NULL
  - `  4` `gcal_add_date` : `timestamp without time zone` NULL
  - `  5` `gcal_upd_by` : `character varying` NULL
  - `  6` `gcal_upd_date` : `timestamp without time zone` NULL
  - `  7` `gcal_year` : `integer` NOT NULL
  - `  8` `gcal_periode` : `smallint` NOT NULL
  - `  9` `gcal_start_date` : `date` NOT NULL
  - ` 10` `gcal_end_date` : `date` NOT NULL
  - ` 11` `gcal_dt` : `timestamp without time zone` NULL
  - ` 12` `gcal_save` : `character varying` NULL

### `public.gcald_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `gcald_oid` : `uuid` NOT NULL
  - `  2` `gcald_gcal_oid` : `uuid` NULL
  - `  3` `gcald_en_id` : `integer` NULL
  - `  4` `gcald_ap` : `character` NULL
  - `  5` `gcald_ar` : `character` NULL
  - `  6` `gcald_fa` : `character` NULL
  - `  7` `gcald_ic` : `character` NULL
  - `  8` `gcald_so` : `character` NULL
  - `  9` `gcald_gl` : `character` NULL
  - ` 10` `gcald_year` : `character` NULL
  - ` 11` `gcal_dt` : `timestamp without time zone` NULL

### `public.giftretrnd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `giftretrnd_oid` : `uuid` NOT NULL
  - `  2` `giftretrnd_giftrtrn_oid` : `uuid` NOT NULL
  - `  3` `giftretrnd_pt_id` : `integer` NOT NULL
  - `  4` `giftretrnd_qty` : `numeric` NULL
  - `  5` `giftretrnd_um` : `integer` NULL
  - `  6` `giftretrnd_um_conv` : `numeric` NULL
  - `  7` `giftretrnd_qty_real` : `numeric` NULL
  - `  8` `giftretrnd_si_id` : `integer` NOT NULL
  - `  9` `giftretrnd_loc_id` : `bigint` NOT NULL
  - ` 10` `giftretrnd_cost` : `numeric` NULL
  - ` 11` `giftretrnd_ac_id` : `integer` NOT NULL
  - ` 12` `giftretrnd_dt` : `timestamp without time zone` NULL
  - ` 13` `giftretrnd_riud_oid` : `uuid` NULL
  - ` 14` `giftretrnd_reason_id` : `integer` NULL
  - ` 15` `giftretrnd_qty_packaging` : `numeric` NULL
  - ` 16` `giftretrnd_packaging_id` : `integer` NOT NULL

### `public.giftretrnds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `giftretrnds_oid` : `uuid` NOT NULL
  - `  2` `giftretrnds_giftretrnd_oid` : `uuid` NULL
  - `  3` `giftretrnds_qty` : `numeric` NULL
  - `  4` `giftretrnds_si_id` : `integer` NULL
  - `  5` `giftretrnds_loc_id` : `bigint` NULL
  - `  6` `giftretrnds_lot_serial` : `character varying` NULL
  - `  7` `giftretrnds_dt` : `timestamp without time zone` NULL
  - `  8` `giftretrnds_um` : `integer` NULL
  - `  9` `giftretrnds_qty_packaging` : `numeric` NULL

### `public.giftrtrn_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `giftrtrn_oid` : `uuid` NOT NULL
  - `  2` `giftrtrn_dom_id` : `smallint` NOT NULL
  - `  3` `giftrtrn_en_id` : `integer` NOT NULL
  - `  4` `giftrtrn_add_by` : `character varying` NULL
  - `  5` `giftrtrn_add_date` : `timestamp without time zone` NULL
  - `  6` `giftrtrn_upd_by` : `character varying` NULL
  - `  7` `giftrtrn_upd_date` : `timestamp without time zone` NULL
  - `  8` `giftrtrn_code` : `character varying` NULL
  - `  9` `giftrtrn_date` : `date` NULL
  - ` 10` `giftrtrn_remarks` : `character varying` NULL
  - ` 11` `giftrtrn_dt` : `timestamp without time zone` NULL
  - ` 12` `giftrtrn_ref_riu_oid` : `uuid` NULL
  - ` 13` `giftrtrn_branch_id` : `integer` NOT NULL

### `public.gl_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `gl_oid` : `uuid` NOT NULL
  - `  2` `gl_add_by` : `character varying` NULL
  - `  3` `gl_add_date` : `timestamp without time zone` NULL
  - `  4` `gl_upd_by` : `character varying` NULL
  - `  5` `gl_upd_date` : `timestamp without time zone` NULL
  - `  6` `gl_dom_id` : `smallint` NULL
  - `  7` `gl_code` : `character varying` NULL
  - `  8` `gl_date` : `date` NULL
  - `  9` `gl_type` : `character` NULL
  - ` 10` `glt_amount` : `numeric` NULL
  - ` 11` `gl_trans_id` : `character` NULL
  - ` 12` `gl_tran_id` : `integer` NULL
  - ` 13` `po_current_route` : `character varying` NULL
  - ` 14` `gl_next_route` : `character varying` NULL
  - ` 15` `gl_dt` : `timestamp without time zone` NULL

### `public.gl_status`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `form_name` : `character varying` NOT NULL
  - `  2` `gl_on` : `boolean` NULL

### `public.glbal_balance`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `glbal_oid` : `uuid` NOT NULL
  - `  2` `glbal_dom_id` : `smallint` NULL
  - `  3` `glbal_en_id` : `integer` NULL
  - `  4` `glbal_add_by` : `character varying` NULL
  - `  5` `glbal_add_date` : `timestamp without time zone` NULL
  - `  6` `glbal_upd_by` : `character varying` NULL
  - `  7` `glbal_upd_date` : `timestamp without time zone` NULL
  - `  8` `glbal_gcal_oid` : `uuid` NULL
  - `  9` `glbal_ac_id` : `integer` NULL
  - ` 10` `glbal_sb_id` : `integer` NULL
  - ` 11` `glbal_cc_id` : `integer` NULL
  - ` 12` `glbal_cu_id` : `integer` NULL
  - ` 13` `glbal_balance_open` : `numeric` NULL
  - ` 14` `glbal_balance_unposted` : `numeric` NULL
  - ` 15` `glbal_balance_posted` : `numeric` NULL
  - ` 16` `glbal_dt` : `timestamp without time zone` NULL
  - ` 17` `glbal_balance_posted_end_month` : `numeric` NULL
  - ` 18` `glbal_balance_trial` : `numeric` NULL
  - ` 19` `glbal_balance_open_curr` : `numeric` NULL
  - ` 20` `glbal_balance_unposted_curr` : `numeric` NULL
  - ` 21` `glbal_balance_posted_curr` : `numeric` NULL
  - ` 22` `glbal_sync_remarks` : `character varying` NULL

### `public.glt_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `glt_oid` : `uuid` NOT NULL
  - `  2` `glt_dom_id` : `smallint` NULL
  - `  3` `glt_en_id` : `integer` NULL
  - `  4` `glt_add_by` : `character varying` NULL
  - `  5` `glt_add_date` : `timestamp without time zone` NULL
  - `  6` `glt_upd_by` : `character varying` NULL
  - `  7` `glt_upd_date` : `timestamp without time zone` NULL
  - `  8` `glt_gl_oid` : `uuid` NULL
  - `  9` `glt_code` : `character varying` NOT NULL
  - ` 10` `glt_date` : `date` NULL
  - ` 11` `glt_type` : `character` NULL
  - ` 12` `glt_cu_id` : `integer` NULL
  - ` 13` `glt_exc_rate` : `numeric` NULL
  - ` 14` `glt_seq` : `integer` NULL
  - ` 15` `glt_ac_id` : `integer` NULL
  - ` 16` `glt_sb_id` : `integer` NULL
  - ` 17` `glt_cc_id` : `integer` NULL
  - ` 18` `glt_desc` : `character varying` NULL
  - ` 19` `glt_debit` : `numeric` NULL
  - ` 20` `glt_credit` : `numeric` NULL
  - ` 21` `glt_ref_tran_id` : `integer` NULL
  - ` 22` `glt_ref_trans_code` : `character varying` NULL
  - ` 23` `glt_posted` : `character` NULL
  - ` 24` `glt_dt` : `timestamp without time zone` NULL
  - ` 25` `glt_daybook` : `character varying` NULL
  - ` 26` `glt_ref_oid` : `uuid` NULL
  - ` 27` `glt_is_reverse` : `character` NULL
  - ` 28` `glt_is_gen_ros` : `character` NULL
  - ` 29` `glt_desc_detail` : `character varying` NULL
  - ` 30` `glt_ref_detail_no` : `character varying` NULL
  - ` 31` `glt_branch_id` : `integer` NULL
  - ` 32` `glt_pjc_id` : `integer` NOT NULL
  - ` 33` `glt_remarks` : `character varying` NULL

### `public.gltbuf_buffer`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `gltbuf_session` : `uuid` NOT NULL
  - `  2` `gltbuf_ac_code` : `character varying` NULL
  - `  3` `gltbuf_ac_name` : `character varying` NULL
  - `  4` `gltbuf_date` : `timestamp without time zone` NULL
  - `  5` `gltbuf_code` : `character varying` NULL
  - `  6` `gltbuf_desc` : `character varying` NULL
  - `  7` `gltbuf_exc_rate` : `numeric` NULL
  - `  8` `gltbuf_debit` : `numeric` NULL
  - `  9` `gltbuf_credit` : `numeric` NULL
  - ` 10` `gltbuf_balance` : `numeric` NULL
  - ` 11` `gltbuf_oid` : `uuid` NULL
  - ` 12` `gltbuf_seq` : `integer` NULL
  - ` 13` `gltbuf_ref_trans_code` : `character varying` NULL
  - ` 14` `gltbuf_cc_desc` : `character varying` NULL
  - ` 15` `gltbuf_add_by` : `character varying` NULL
  - ` 16` `gltbuf_remarks` : `character varying` NULL

### `public.gltbuf_buffer_all`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `gltbuf_session` : `uuid` NOT NULL
  - `  2` `gltbuf_ac_code` : `character varying` NULL
  - `  3` `gltbuf_ac_name` : `character varying` NULL
  - `  4` `gltbuf_date` : `timestamp without time zone` NULL
  - `  5` `gltbuf_code` : `character varying` NULL
  - `  6` `gltbuf_desc` : `character varying` NULL
  - `  7` `gltbuf_exc_rate` : `numeric` NULL
  - `  8` `gltbuf_debit` : `numeric` NULL
  - `  9` `gltbuf_credit` : `numeric` NULL
  - ` 10` `gltbuf_balance` : `numeric` NULL
  - ` 11` `gltbuf_oid` : `uuid` NULL
  - ` 12` `gltbuf_seq` : `integer` NULL
  - ` 13` `gltbuf_ref_trans_code` : `character varying` NULL
  - ` 14` `gltbuf_ac_code_from` : `character varying` NULL
  - ` 15` `gltbuf_ac_name_from` : `character varying` NULL
  - ` 16` `gltbuf_ac_id_from` : `integer` NULL

### `public.hpp_setting`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `number` : `character varying` NULL
  - `  2` `ac_code` : `character varying` NULL
  - `  3` `ac_header` : `character varying` NULL
  - `  4` `desc_detail` : `character varying` NULL
  - `  5` `type_value` : `character varying` NULL
  - `  6` `sign_report` : `double precision` NULL
  - `  7` `n1` : `character varying` NULL
  - `  8` `n2` : `character varying` NULL
  - `  9` `n1_desc` : `character varying` NULL
  - ` 10` `n2_desc` : `character varying` NULL
  - ` 11` `n3` : `character varying` NULL
  - ` 12` `type_set` : `character varying` NULL
  - ` 13` `n3_desc` : `character varying` NULL
  - ` 14` `n4` : `character varying` NULL
  - ` 15` `n4_desc` : `character varying` NULL
  - ` 16` `n5` : `character varying` NULL
  - ` 17` `oid_number` : `uuid` NULL
  - ` 18` `branch_id` : `integer` NULL

### `public.inst_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `inst_oid` : `uuid` NOT NULL
  - `  2` `inst_dom_id` : `smallint` NULL
  - `  3` `inst_en_id` : `integer` NOT NULL
  - `  4` `inst_add_by` : `character varying` NULL
  - `  5` `inst_add_date` : `timestamp without time zone` NULL
  - `  6` `inst_upd_by` : `character varying` NULL
  - `  7` `inst_upd_date` : `timestamp without time zone` NULL
  - `  8` `inst_dt` : `timestamp without time zone` NULL
  - `  9` `inst_branch_id` : `integer` NOT NULL
  - ` 10` `inst_id` : `integer` NOT NULL
  - ` 11` `inst_name` : `character varying` NULL
  - ` 12` `inst_desc` : `character varying` NULL
  - ` 13` `inst_active` : `character` NULL

### `public.invc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invc_oid` : `uuid` NOT NULL
  - `  2` `invc_dom_id` : `smallint` NULL
  - `  3` `invc_en_id` : `integer` NULL
  - `  4` `invc_si_id` : `integer` NULL
  - `  5` `invc_loc_id` : `bigint` NULL
  - `  6` `invc_pt_id` : `bigint` NULL
  - `  7` `invc_qty` : `numeric` NULL
  - `  8` `invc_serial` : `character varying` NULL
  - `  9` `pt_tax_class` : `character` NULL
  - ` 10` `invc_qty_alloc` : `numeric` NULL
  - ` 11` `invc_qty_old` : `numeric` NULL
  - ` 12` `invc_exp_date` : `date` NULL
  - ` 13` `invc_ref_oid` : `uuid` NULL
  - ` 14` `invc_ref_type` : `character` NULL

### `public.invcc_change`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invcc_oid` : `uuid` NOT NULL
  - `  2` `invcc_dom_id` : `smallint` NOT NULL
  - `  3` `invcc_en_id` : `integer` NOT NULL
  - `  4` `invcc_add_by` : `character varying` NULL
  - `  5` `invcc_add_date` : `timestamp without time zone` NULL
  - `  6` `invcc_upd_by` : `character varying` NULL
  - `  7` `invcc_upd_date` : `timestamp without time zone` NULL
  - `  8` `invcc_dt` : `timestamp without time zone` NULL
  - `  9` `invcc_remarks` : `character varying` NULL
  - ` 10` `invcc_branch_id` : `integer` NOT NULL
  - ` 11` `invcc_code` : `character varying` NOT NULL
  - ` 12` `invcc_date` : `date` NULL

### `public.invccd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invccd_oid` : `uuid` NOT NULL
  - `  2` `invccd_invcc_oid` : `uuid` NOT NULL
  - `  3` `invccd_pt_id_from` : `integer` NOT NULL
  - `  4` `invccd_loc_id_from` : `integer` NOT NULL
  - `  5` `invccd_pt_id_to` : `integer` NOT NULL
  - `  6` `invccd_loc_id_to` : `integer` NOT NULL
  - `  7` `invccd_remarks` : `character varying` NULL
  - `  8` `invccd_qty_from` : `numeric` NULL
  - `  9` `invccd_qty_to` : `numeric` NULL

### `public.invccds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invccds_oid` : `uuid` NOT NULL
  - `  2` `invccds_invccd_oid` : `uuid` NOT NULL
  - `  3` `invccds_qty_from` : `numeric` NULL
  - `  4` `invccds_loc_id_from` : `integer` NOT NULL
  - `  5` `invccds_loc_id_to` : `integer` NOT NULL
  - `  6` `invccds_lot_serial_from` : `character varying` NULL
  - `  7` `invccds_lot_serial_to` : `character varying` NULL
  - `  8` `invccds_qty_to` : `numeric` NULL

### `public.invclc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invclc_oid` : `uuid` NOT NULL
  - `  2` `invclc_add_by` : `character varying` NULL
  - `  3` `invclc_add_date` : `timestamp without time zone` NULL
  - `  4` `invclc_upd_by` : `character varying` NULL
  - `  5` `invclc_upd_date` : `timestamp without time zone` NULL
  - `  6` `invclc_dt` : `timestamp without time zone` NULL
  - `  7` `invclc_code` : `character varying` NULL
  - `  8` `invclc_date` : `date` NULL
  - `  9` `invclc_loc_id` : `integer` NULL
  - ` 10` `invclc_remarks` : `character varying` NULL
  - ` 11` `invclc_trans_id` : `character` NULL
  - ` 12` `invclc_en_id` : `integer` NULL
  - ` 13` `invclc_branch_id` : `integer` NULL
  - ` 14` `invclc_tran_id` : `integer` NULL
  - ` 15` `invclc_close_entry` : `character` NULL

### `public.invclcd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invclcd_oid` : `uuid` NOT NULL
  - `  2` `invclcd_invclc_oid` : `uuid` NOT NULL
  - `  3` `invclcd_pt_id` : `integer` NOT NULL
  - `  4` `invclcd_qty_stock` : `numeric` NULL
  - `  5` `invclcd_qty_opname` : `numeric` NULL
  - `  6` `invclcd_loc_id` : `integer` NULL
  - `  7` `invclcd_cost` : `numeric` NULL
  - `  8` `invclcd_remarks` : `character varying` NULL

### `public.invct_table`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invct_oid` : `uuid` NOT NULL
  - `  2` `invct_dom_id` : `smallint` NULL
  - `  3` `invct_pt_id` : `bigint` NULL
  - `  4` `invct_date` : `timestamp without time zone` NULL
  - `  5` `invct_qty` : `numeric` NULL
  - `  6` `invct_cost` : `numeric` NULL
  - `  7` `invct_en_id` : `integer` NULL
  - `  8` `invct_si_id` : `integer` NULL

### `public.invh_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invh_oid` : `uuid` NOT NULL
  - `  2` `invh_tran_id` : `integer` NULL
  - `  3` `invh_seq` : `integer` NULL
  - `  4` `invh_dom_id` : `smallint` NULL
  - `  5` `invh_en_id` : `integer` NULL
  - `  6` `invh_trn_code` : `character varying` NULL
  - `  7` `invh_trn_oid` : `uuid` NULL
  - `  8` `invh_date` : `date` NOT NULL
  - `  9` `invh_desc` : `character varying` NULL
  - ` 10` `invh_opn_type` : `character` NULL
  - ` 11` `invh_si_id` : `integer` NULL
  - ` 12` `invh_loc_id` : `bigint` NULL
  - ` 13` `invh_pt_id` : `bigint` NULL
  - ` 14` `invh_qty` : `numeric` NULL
  - ` 15` `invh_cost` : `numeric` NULL
  - ` 16` `invh_serial` : `character varying` NULL
  - ` 17` `dt_timestamp` : `timestamp without time zone` NULL
  - ` 18` `invh_avg_cost` : `numeric` NULL
  - ` 19` `invh_qty_old` : `numeric` NULL
  - ` 20` `invh_branch_id` : `integer` NOT NULL
  - ` 21` `invh_cc_id` : `integer` NULL
  - ` 22` `invh_remarks` : `character varying` NULL
  - ` 23` `invh_add_by` : `character varying` NULL
  - ` 24` `invh_add_date` : `timestamp without time zone` NULL
  - ` 25` `invh_ptnr_id` : `integer` NULL

### `public.invw_wip`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invw_oid` : `uuid` NOT NULL
  - `  2` `invw_dom_id` : `smallint` NULL
  - `  3` `invw_en_id` : `integer` NULL
  - `  4` `invw_wo_oid` : `uuid` NULL
  - `  5` `invw_pt_id` : `integer` NULL
  - `  6` `invw_qty` : `numeric` NULL
  - `  7` `invw_serial` : `character varying` NULL
  - `  8` `invw_standard_cost` : `numeric` NULL
  - `  9` `invw_current_cost` : `numeric` NULL
  - ` 10` `invw_loc_id` : `integer` NOT NULL
  - ` 11` `invw_lbr_cost` : `numeric` NULL
  - ` 12` `invw_ovh_cost` : `numeric` NULL
  - ` 13` `invw_bdn_cost` : `numeric` NULL
  - ` 14` `invw_sub_cost` : `numeric` NULL
  - ` 15` `invw_exp_date` : `date` NULL
  - ` 16` `invw_mtl_ll` : `numeric` NULL
  - ` 17` `invw_lbr_ll` : `numeric` NULL
  - ` 18` `invw_ovh_ll` : `numeric` NULL
  - ` 19` `invw_bdn_ll` : `numeric` NULL
  - ` 20` `invw_sub_ll` : `numeric` NULL

### `public.is_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `is_oid` : `uuid` NOT NULL
  - `  2` `is_dom_id` : `smallint` NULL
  - `  3` `is_en_id` : `integer` NULL
  - `  4` `is_add_by` : `character varying` NULL
  - `  5` `is_add_date` : `timestamp without time zone` NULL
  - `  6` `is_upd_by` : `character varying` NULL
  - `  7` `is_upd_date` : `timestamp without time zone` NULL
  - `  8` `is_id` : `integer` NULL
  - `  9` `is_code` : `character varying` NULL
  - ` 10` `is_desc` : `character varying` NULL
  - ` 11` `is_avail` : `character` NULL
  - ` 12` `is_nettable` : `character` NULL
  - ` 13` `is_overissue` : `character` NULL
  - ` 14` `is_dt` : `timestamp without time zone` NULL

### `public.isd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `isd_oid` : `uuid` NOT NULL
  - `  2` `isd_add_by` : `character varying` NULL
  - `  3` `isd_add_date` : `timestamp without time zone` NULL
  - `  4` `isd_upd_by` : `character varying` NULL
  - `  5` `isd_upd_date` : `timestamp without time zone` NULL
  - `  6` `isd_its_oid` : `uuid` NULL
  - `  7` `isd_seq` : `smallint` NULL
  - `  8` `isd_tran_id` : `integer` NULL
  - `  9` `isd_dt` : `timestamp without time zone` NULL

### `public.its_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `its_oid` : `uuid` NOT NULL
  - `  2` `its_dom_id` : `smallint` NULL
  - `  3` `its_add_by` : `character varying` NULL
  - `  4` `its_add_date` : `timestamp without time zone` NULL
  - `  5` `its_upd_by` : `character varying` NULL
  - `  6` `its_upd_date` : `timestamp without time zone` NULL
  - `  7` `its_id` : `integer` NULL
  - `  8` `its_code` : `character varying` NULL
  - `  9` `its_desc` : `character varying` NULL
  - ` 10` `its_dt` : `timestamp without time zone` NULL

### `public.itsc_cc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `itsc_oid` : `uuid` NOT NULL
  - `  2` `itsc_add_by` : `character varying` NULL
  - `  3` `itsc_add_date` : `timestamp without time zone` NULL
  - `  4` `itsc_its_oid` : `uuid` NOT NULL
  - `  5` `itsc_seq` : `smallint` NULL
  - `  6` `itsc_cc_id` : `integer` NOT NULL
  - `  7` `itsc_dt` : `timestamp without time zone` NULL

### `public.itsd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `itsd_oid` : `uuid` NOT NULL
  - `  2` `itsd_add_by` : `character varying` NULL
  - `  3` `itsd_add_date` : `timestamp without time zone` NULL
  - `  4` `itsd_upd_by` : `character varying` NULL
  - `  5` `itsd_upd_date` : `timestamp without time zone` NULL
  - `  6` `itsd_its_oid` : `uuid` NULL
  - `  7` `itsd_seq` : `smallint` NULL
  - `  8` `itsd_tran_id` : `integer` NULL
  - `  9` `itsd_dt` : `timestamp without time zone` NULL

### `public.kpip_product`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kpip_oid` : `uuid` NOT NULL
  - `  2` `kpip_add_date` : `timestamp without time zone` NULL
  - `  3` `kpip_add_by` : `character varying` NULL
  - `  4` `kpip_upd_date` : `timestamp without time zone` NULL
  - `  5` `kpip_upd_by` : `character varying` NULL
  - `  6` `kpip_dt` : `timestamp without time zone` NULL
  - `  7` `kpip_dom_id` : `smallint` NOT NULL
  - `  8` `kpip_en_id` : `integer` NOT NULL
  - `  9` `kpip_name` : `character varying` NULL
  - ` 10` `kpip_remarks` : `character varying` NULL
  - ` 11` `kpip_code` : `character varying` NULL
  - ` 12` `kpip_active` : `character` NULL

### `public.kpipd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kpipd_oid` : `uuid` NOT NULL
  - `  2` `kpipd_kpip_oid` : `uuid` NULL
  - `  3` `kpipd_pt_id` : `integer` NULL

### `public.kpit_target`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kpit_oid` : `uuid` NOT NULL
  - `  2` `kpit_add_date` : `timestamp without time zone` NULL
  - `  3` `kpit_add_by` : `character varying` NULL
  - `  4` `kpit_upd_date` : `timestamp without time zone` NULL
  - `  5` `kpit_upd_by` : `character varying` NULL
  - `  6` `kpit_dt` : `timestamp without time zone` NULL
  - `  7` `kpit_dom_id` : `smallint` NOT NULL
  - `  8` `kpit_en_id` : `integer` NOT NULL
  - `  9` `kpit_remarks` : `character varying` NULL
  - ` 10` `kpit_type` : `character` NULL
  - ` 11` `kpit_branch_id` : `integer` NOT NULL
  - ` 12` `kpit_tgslsp_id` : `integer` NOT NULL
  - ` 13` `kpit_generate_achievement` : `character` NULL
  - ` 14` `kpit_generate_date` : `date` NULL

### `public.kpitd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kpitd_oid` : `uuid` NOT NULL
  - `  2` `kpitd_kpit_oid` : `uuid` NOT NULL
  - `  3` `kpitd_sales_id` : `integer` NULL
  - `  4` `kpitd_bobot` : `numeric` NULL
  - `  5` `kpitd_amount` : `numeric` NULL
  - `  6` `kpitd_seq` : `smallint` NULL
  - `  7` `kpitd_pt_code` : `character varying` NULL
  - `  8` `kpitd_pt_desc` : `character varying` NULL
  - `  9` `kpitd_qty` : `numeric` NULL
  - ` 10` `kpitd_amount_acv` : `numeric` NULL
  - ` 11` `kpitd_qty_acv` : `numeric` NULL
  - ` 12` `kpitd_prct_acv_qty` : `numeric` NULL
  - ` 13` `kpitd_prct_acv_amount` : `numeric` NULL
  - ` 14` `kpitd_dt` : `timestamp without time zone` NULL
  - ` 15` `kpitd_pt_id` : `integer` NULL
  - ` 16` `kpitd_cust_id` : `integer` NULL

### `public.kpits_ship`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kpits_oid` : `uuid` NOT NULL
  - `  2` `kpits_kpit_oid` : `uuid` NOT NULL
  - `  3` `kpits_soship_oid` : `uuid` NOT NULL

### `public.lfbt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `lfbt_oid` : `uuid` NOT NULL
  - `  2` `lfbt_dom_id` : `smallint` NOT NULL
  - `  3` `lfbt_en_id` : `integer` NOT NULL
  - `  4` `lfbt_add_by` : `character varying` NULL
  - `  5` `lfbt_add_date` : `timestamp without time zone` NULL
  - `  6` `lfbt_upd_by` : `character varying` NULL
  - `  7` `lfbt_upd_date` : `timestamp without time zone` NULL
  - `  8` `lfbt_dt` : `timestamp without time zone` NULL
  - `  9` `lfbt_active` : `character` NULL
  - ` 10` `lfbt_id` : `integer` NOT NULL
  - ` 11` `lfbt_code` : `character varying` NOT NULL
  - ` 12` `lfbt_name` : `character varying` NULL
  - ` 13` `lfbt_cat_id` : `integer` NOT NULL
  - ` 14` `lfbt_finish` : `character` NULL

### `public.limit_return_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `limit_en_id` : `integer` NULL
  - `  2` `limit_id` : `integer` NOT NULL
  - `  3` `limit_cust_id` : `integer` NULL
  - `  4` `limit_start_periode` : `date` NULL
  - `  5` `limit_end_periode` : `date` NULL
  - `  6` `limit_percent` : `numeric` NULL
  - `  7` `limit_add_by` : `character varying` NULL
  - `  8` `limit_add_date` : `timestamp without time zone` NULL
  - `  9` `limit_upd_by` : `character varying` NULL
  - ` 10` `limit_upd_date` : `timestamp without time zone` NULL
  - ` 11` `limit_branch_id` : `integer` NULL

### `public.loani_in`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `loani_oid` : `uuid` NOT NULL
  - `  2` `loani_dom_id` : `smallint` NOT NULL
  - `  3` `loani_en_id` : `integer` NULL
  - `  4` `loani_branch_id` : `integer` NOT NULL
  - `  5` `loani_add_by` : `character varying` NULL
  - `  6` `loani_add_date` : `timestamp without time zone` NULL
  - `  7` `loani_upd_by` : `character varying` NULL
  - `  8` `loani_upd_date` : `timestamp without time zone` NULL
  - `  9` `loani_bk_id` : `integer` NULL
  - ` 10` `loani_pocust_oid` : `uuid` NULL
  - ` 11` `loani_code` : `character varying` NULL
  - ` 12` `loani_date` : `date` NULL
  - ` 13` `loani_remarks` : `character varying` NULL
  - ` 14` `loani_reff` : `character varying` NULL
  - ` 15` `loani_amount` : `numeric` NULL
  - ` 16` `loani_cu_id` : `integer` NULL
  - ` 17` `loani_exc_rate` : `numeric` NULL
  - ` 18` `loani_print_status` : `character` NULL
  - ` 19` `loani_print_date` : `timestamp without time zone` NULL
  - ` 20` `loani_print_count` : `integer` NULL

### `public.loanid_detail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `loanid_oid` : `uuid` NOT NULL
  - `  2` `loanid_loani_oid` : `uuid` NOT NULL
  - `  3` `loanid_ac_id` : `integer` NOT NULL
  - `  4` `loanid_amount` : `numeric` NULL
  - `  5` `loanid_pjc_id` : `integer` NOT NULL
  - `  6` `loanid_remarks` : `character varying` NULL
  - `  7` `loanid_cc_id` : `integer` NOT NULL
  - `  8` `loanid_seq` : `integer` NULL

### `public.loano_out`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `loano_oid` : `uuid` NOT NULL
  - `  2` `loano_dom_id` : `integer` NULL
  - `  3` `loano_en_id` : `integer` NULL
  - `  4` `loano_add_by` : `character varying` NULL
  - `  5` `loano_add_date` : `timestamp without time zone` NULL
  - `  6` `loano_upd_by` : `character varying` NULL
  - `  7` `loano_upd_date` : `timestamp without time zone` NULL
  - `  8` `loano_bk_id` : `integer` NULL
  - `  9` `loano_code` : `character varying` NOT NULL
  - ` 10` `loano_date` : `date` NULL
  - ` 11` `loano_remarks` : `character varying` NULL
  - ` 12` `loano_reff` : `character varying` NULL
  - ` 13` `loano_amount` : `numeric` NULL
  - ` 14` `loano_check_number` : `character varying` NULL
  - ` 15` `loano_post_dated_check` : `character varying` NULL
  - ` 16` `loano_cu_id` : `integer` NULL
  - ` 17` `loano_exc_rate` : `numeric` NULL
  - ` 18` `loano_branch_id` : `integer` NOT NULL
  - ` 19` `loano_pocust_oid` : `uuid` NOT NULL
  - ` 20` `loano_print_status` : `character` NULL
  - ` 21` `loano_print_date` : `timestamp without time zone` NULL
  - ` 22` `loano_print_count` : `integer` NULL

### `public.loanod_detail`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `loanod_oid` : `uuid` NOT NULL
  - `  2` `loanod_loano_oid` : `uuid` NULL
  - `  3` `loanod_ac_id` : `integer` NULL
  - `  4` `loanod_amount` : `numeric` NULL
  - `  5` `loanod_remarks` : `character varying` NULL
  - `  6` `loanod_seq` : `integer` NULL
  - `  7` `loanod_cc_id` : `integer` NULL
  - `  8` `loanod_pjc_id` : `integer` NOT NULL

### `public.loc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `loc_oid` : `uuid` NOT NULL
  - `  2` `loc_dom_id` : `smallint` NULL
  - `  3` `loc_en_id` : `integer` NULL
  - `  4` `loc_add_by` : `character varying` NULL
  - `  5` `loc_add_date` : `timestamp without time zone` NULL
  - `  6` `loc_upd_by` : `character varying` NULL
  - `  7` `loc_upd_date` : `timestamp without time zone` NULL
  - `  8` `loc_id` : `integer` NULL
  - `  9` `loc_wh_id` : `integer` NULL
  - ` 10` `loc_si_id` : `integer` NULL
  - ` 11` `loc_code` : `character varying` NULL
  - ` 12` `loc_desc` : `character varying` NULL
  - ` 13` `loc_type` : `integer` NULL
  - ` 14` `loc_cat` : `integer` NULL
  - ` 15` `loc_is_id` : `integer` NULL
  - ` 16` `loc_active` : `character` NOT NULL
  - ` 17` `loc_dt` : `timestamp without time zone` NULL
  - ` 18` `loc_ptnr_id` : `integer` NULL
  - ` 19` `loc_address_line1` : `character varying` NULL
  - ` 20` `loc_address_line2` : `character varying` NULL
  - ` 21` `loc_address_line3` : `character varying` NULL
  - ` 22` `loc_telp` : `character varying` NULL
  - ` 23` `loc_fax` : `character varying` NULL
  - ` 24` `loc_contact_person` : `character varying` NULL
  - ` 25` `loc_telp_contact_person` : `character varying` NULL
  - ` 26` `loc_branch_id` : `integer` NULL
  - ` 27` `loc_global` : `character` NULL

### `public.login_limit`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `login_limit_id` : `uuid` NOT NULL
  - `  2` `device` : `text` NOT NULL
  - `  3` `rowversion` : `timestamp without time zone` NOT NULL
  - `  4` `app_type` : `character` NULL
  - `  5` `hit_count` : `smallint` NULL
  - `  6` `is_locked` : `boolean` NULL
  - `  7` `locked_until` : `timestamp without time zone` NULL
  - `  8` `ip_address` : `text` NULL

### `public.mch_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `mch_oid` : `uuid` NOT NULL
  - `  2` `mch_dom_id` : `smallint` NULL
  - `  3` `mch_en_id` : `integer` NULL
  - `  4` `mch_add_by` : `character varying` NULL
  - `  5` `mch_add_date` : `timestamp without time zone` NULL
  - `  6` `mch_upd_by` : `character varying` NULL
  - `  7` `mch_upd_date` : `timestamp without time zone` NULL
  - `  8` `mch_id` : `integer` NULL
  - `  9` `mch_code` : `character varying` NULL
  - ` 10` `mch_name` : `character varying` NULL
  - ` 11` `mch_desc` : `character varying` NULL
  - ` 12` `mch_dt` : `timestamp without time zone` NULL
  - ` 13` `mch_active` : `character` NULL
  - ` 14` `mch_capacity` : `numeric` NULL
  - ` 15` `mch_um_id` : `integer` NULL
  - ` 16` `mch_group_id` : `integer` NOT NULL

### `public.menu_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `menu_id` : `integer` NOT NULL
  - `  2` `menu_name` : `character varying` NULL
  - `  3` `menu_display` : `character varying` NULL
  - `  4` `menu_parent_id` : `integer` NULL
  - `  5` `menu_root` : `character` NULL
  - `  6` `menu_seq` : `integer` NULL
  - `  7` `menu_image_index` : `integer` NULL
  - `  8` `menu_assembly` : `text` NULL
  - `  9` `menu_key_id` : `uuid` NOT NULL
  - ` 10` `menu_manual_guide_web` : `character varying` NULL

### `public.menuc_conf`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `menuc_groupid` : `integer` NOT NULL
  - `  2` `menuc_menu_id` : `integer` NOT NULL
  - `  3` `enablestatus` : `boolean` NULL
  - `  4` `visiblestatus` : `boolean` NULL
  - `  5` `editablestatus` : `boolean` NULL
  - `  6` `cancelablestatus` : `boolean` NULL
  - `  7` `insertstatus` : `boolean` NULL
  - `  8` `editstatus` : `boolean` NULL
  - `  9` `deletestatus` : `boolean` NULL
  - ` 10` `approveline` : `boolean` NULL
  - ` 11` `cancelline` : `boolean` NULL
  - ` 12` `visiblewebstatus` : `boolean` NULL
  - ` 13` `visiblemobilestatus` : `boolean` NULL

### `public.menul_list`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `menul_name` : `character varying` NOT NULL
  - `  2` `menul_desc` : `character varying` NOT NULL

### `public.number_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `number_oid` : `uuid` NOT NULL
  - `  2` `number_dom_id` : `smallint` NOT NULL
  - `  3` `number_en_id` : `integer` NOT NULL
  - `  4` `number_add_by` : `character varying` NULL
  - `  5` `number_add_date` : `timestamp without time zone` NULL
  - `  6` `number_dt` : `timestamp without time zone` NULL
  - `  7` `number_code` : `character varying` NOT NULL
  - `  8` `number_type` : `character` NULL
  - `  9` `number_ref_oid` : `uuid` NULL

### `public.ob_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ob_oid` : `uuid` NOT NULL
  - `  2` `ob_dom_id` : `smallint` NULL
  - `  3` `ob_en_id` : `integer` NULL
  - `  4` `ob_add_by` : `character varying` NULL
  - `  5` `ob_add_date` : `timestamp without time zone` NULL
  - `  6` `ob_upd_by` : `character varying` NULL
  - `  7` `ob_upd_date` : `timestamp without time zone` NULL
  - `  8` `ob_bk_id` : `integer` NULL
  - `  9` `ob_code` : `character varying` NULL
  - ` 10` `ob_date` : `date` NULL
  - ` 11` `ob_type` : `character` NULL
  - ` 12` `ob_cu_id` : `integer` NULL
  - ` 13` `ob_book_balance` : `numeric` NULL
  - ` 14` `ob_bank_balance` : `numeric` NULL
  - ` 15` `ob_exch_rate` : `numeric` NULL
  - ` 16` `ob_remarks` : `character varying` NULL
  - ` 17` `ob_dt` : `timestamp without time zone` NULL
  - ` 18` `ob_tran_id` : `integer` NULL
  - ` 19` `ob_trans_id` : `character` NULL
  - ` 20` `ob_cek_bg` : `character varying` NULL
  - ` 21` `ob_dpp` : `numeric` NULL
  - ` 22` `ob_ppn` : `numeric` NULL
  - ` 23` `ob_pph` : `numeric` NULL
  - ` 24` `ob_amount` : `numeric` NULL
  - ` 25` `ob_pdpr_id` : `integer` NULL
  - ` 26` `ob_interval_day` : `integer` NULL
  - ` 27` `ob_kasbon_oid` : `uuid` NULL
  - ` 28` `ob_close_date` : `date` NULL
  - ` 29` `ob_branch_id` : `integer` NULL
  - ` 30` `ob_disc_ac_id` : `integer` NULL
  - ` 31` `ob_cc_id` : `integer` NULL
  - ` 32` `ob_ref_type` : `character` NULL
  - ` 33` `ob_ref_tran_oid` : `uuid` NULL
  - ` 34` `ob_print_status` : `character` NULL
  - ` 35` `ob_print_date` : `timestamp without time zone` NULL
  - ` 36` `ob_print_count` : `integer` NULL
  - ` 37` `ob_bg_oid` : `uuid` NULL

### `public.obd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `obd_oid` : `uuid` NOT NULL
  - `  2` `obd_ob_oid` : `uuid` NULL
  - `  3` `obd_seq` : `smallint` NULL
  - `  4` `obd_dom_id` : `smallint` NULL
  - `  5` `obd_en_id` : `integer` NULL
  - `  6` `obd_rek_number` : `character varying` NULL
  - `  7` `obd_ac_id` : `integer` NULL
  - `  8` `obd_sb_id` : `integer` NULL
  - `  9` `obd_cc_id` : `integer` NULL
  - ` 10` `obd_amount` : `numeric` NULL
  - ` 11` `obd_desc` : `character varying` NULL
  - ` 12` `obd_dt` : `timestamp without time zone` NULL
  - ` 13` `obd_taxable` : `character` NULL
  - ` 14` `obd_tax_inc` : `character` NULL
  - ` 15` `obd_tax_class` : `integer` NULL
  - ` 16` `obd_tax_pph` : `numeric` NULL
  - ` 17` `obd_tax_ppn` : `numeric` NULL
  - ` 18` `obd_loc_eu_site_id` : `bigint` NULL
  - ` 19` `obd_pjc_id` : `integer` NULL
  - ` 20` `obd_pbyd_oid` : `uuid` NULL
  - ` 21` `obd_xemp_id` : `bigint` NULL
  - ` 22` `obd_activity_code_id` : `bigint` NULL
  - ` 23` `obd_remarks` : `character varying` NULL
  - ` 24` `obd_pjc_ref_id` : `integer` NULL
  - ` 25` `obd_refund_amount` : `numeric` NULL
  - ` 26` `obd_ob_amount` : `numeric` NULL
  - ` 27` `obd_disc_amount` : `numeric` NULL

### `public.org_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `org_oid` : `uuid` NOT NULL
  - `  2` `org_dom_id` : `smallint` NULL
  - `  3` `org_en_id` : `integer` NULL
  - `  4` `org_add_by` : `character varying` NULL
  - `  5` `org_add_date` : `timestamp without time zone` NULL
  - `  6` `org_upd_by` : `character varying` NULL
  - `  7` `org_upd_date` : `timestamp without time zone` NULL
  - `  8` `org_id` : `integer` NULL
  - `  9` `org_type_id` : `integer` NULL
  - ` 10` `org_code` : `character varying` NULL
  - ` 11` `org_name` : `character varying` NULL
  - ` 12` `org_approver_id` : `character varying` NULL
  - ` 13` `org_remarks` : `character varying` NULL
  - ` 14` `org_default` : `character` NULL
  - ` 15` `org_active` : `character` NULL
  - ` 16` `org_dt` : `timestamp without time zone` NULL

### `public.orgs_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `orgs_oid` : `uuid` NOT NULL
  - `  2` `orgs_dom_id` : `smallint` NULL
  - `  3` `orgs_en_id` : `integer` NULL
  - `  4` `orgs_add_by` : `character varying` NULL
  - `  5` `orgs_add_date` : `timestamp without time zone` NULL
  - `  6` `orgs_upd_by` : `character varying` NULL
  - `  7` `orgs_upd_date` : `timestamp without time zone` NULL
  - `  8` `orgs_id` : `integer` NULL
  - `  9` `orgs_code` : `character varying` NULL
  - ` 10` `orgs_desc` : `character varying` NULL
  - ` 11` `orgs_type` : `character` NULL
  - ` 12` `orgs_active` : `character` NULL
  - ` 13` `orgs_dt` : `timestamp without time zone` NULL

### `public.orgsd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `orgsd_oid` : `uuid` NOT NULL
  - `  2` `orgsd_add_by` : `character varying` NULL
  - `  3` `orgsd_add_date` : `timestamp without time zone` NULL
  - `  4` `orgsd_upd_by` : `character varying` NULL
  - `  5` `orgsd_upd_date` : `timestamp without time zone` NULL
  - `  6` `orgsd_seq` : `smallint` NULL
  - `  7` `orgsd_orgs_oid` : `uuid` NULL
  - `  8` `orgsd_org_type` : `integer` NULL
  - `  9` `orgsd_org_id` : `integer` NULL
  - ` 10` `orgsd_parent_org` : `integer` NULL
  - ` 11` `orgsd_dt` : `timestamp without time zone` NULL

### `public.otp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `otp_id` : `uuid` NOT NULL
  - `  2` `email` : `character varying` NULL
  - `  3` `no_hp` : `character varying` NULL
  - `  4` `code` : `character varying` NOT NULL
  - `  5` `purpose` : `integer` NOT NULL
  - `  6` `rowversion` : `timestamp with time zone` NOT NULL
  - `  7` `expires_at` : `timestamp with time zone` NOT NULL

### `public.out_outstanding_move`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `out_oid` : `uuid` NOT NULL
  - `  2` `out_en_id` : `integer` NULL
  - `  3` `out_branch_id_from` : `integer` NULL
  - `  4` `out_sales_id_from` : `integer` NULL
  - `  5` `out_branch_id_to` : `integer` NULL
  - `  6` `out_sales_id_to` : `integer` NULL
  - `  7` `out_add_by` : `character varying` NULL
  - `  8` `out_add_date` : `timestamp without time zone` NULL
  - `  9` `out_upd_by` : `character varying` NULL
  - ` 10` `out_upd_date` : `timestamp without time zone` NULL
  - ` 11` `out_start_date` : `date` NULL
  - ` 12` `out_date` : `date` NULL
  - ` 13` `out_cc_id_to` : `integer` NOT NULL

### `public.outd_customer`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `outd_oid` : `uuid` NOT NULL
  - `  2` `outd_out_oid` : `uuid` NOT NULL
  - `  3` `outd_customer_id` : `integer` NOT NULL

### `public.paper_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `paper_oid` : `uuid` NOT NULL
  - `  2` `paper_dom_id` : `integer` NULL
  - `  3` `paper_en_id` : `integer` NULL
  - `  4` `paper_user_id` : `integer` NULL
  - `  5` `paper_paperkind` : `integer` NULL
  - `  6` `paper_landscape` : `character` NULL
  - `  7` `paper_left_margin` : `integer` NULL
  - `  8` `paper_right_margin` : `integer` NULL
  - `  9` `paper_top_margin` : `integer` NULL
  - ` 10` `paper_bottom_margin` : `integer` NULL
  - ` 11` `paper_dt` : `timestamp without time zone` NULL
  - ` 12` `paper_report_name` : `character varying` NULL
  - ` 13` `paper_name` : `character varying` NULL

### `public.parameter_footer_rugi_laba`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `nomor` : `integer` NOT NULL
  - `  2` `parameter` : `character varying` NULL

### `public.pb_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pb_oid` : `uuid` NOT NULL
  - `  2` `pb_dom_id` : `smallint` NULL
  - `  3` `pb_en_id` : `integer` NULL
  - `  4` `pb_add_by` : `character varying` NULL
  - `  5` `pb_add_date` : `timestamp without time zone` NULL
  - `  6` `pb_upd_by` : `character varying` NULL
  - `  7` `pb_upd_date` : `timestamp without time zone` NULL
  - `  8` `pb_date` : `date` NULL
  - `  9` `pb_due_date` : `date` NULL
  - ` 10` `pb_requested` : `character varying` NULL
  - ` 11` `pb_end_user` : `character varying` NULL
  - ` 12` `pb_rmks` : `character varying` NULL
  - ` 13` `pb_status` : `character` NULL
  - ` 14` `pb_close_date` : `date` NULL
  - ` 15` `pb_dt` : `timestamp without time zone` NULL
  - ` 16` `pb_code` : `character varying` NULL
  - ` 17` `pb_trans_id` : `character` NULL
  - ` 18` `pb_tran_id` : `integer` NULL
  - ` 19` `pb_branch_id_from` : `integer` NULL
  - ` 20` `pb_branch_id_to` : `integer` NULL
  - ` 21` `pb_print_status` : `character` NULL
  - ` 22` `pb_print_date` : `timestamp without time zone` NULL
  - ` 23` `pb_print_count` : `integer` NULL
  - ` 24` `pb_remarks_close` : `character varying` NULL
  - ` 25` `pb_remarks_cl` : `character varying` NULL
  - ` 26` `pb_loc_id_to` : `integer` NULL

### `public.pbd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pbd_oid` : `uuid` NOT NULL
  - `  2` `pbd_dom_id` : `smallint` NULL
  - `  3` `pbd_en_id` : `integer` NULL
  - `  4` `pbd_add_by` : `character varying` NULL
  - `  5` `pbd_add_date` : `timestamp without time zone` NULL
  - `  6` `pbd_upd_by` : `character varying` NULL
  - `  7` `pbd_upd_date` : `timestamp without time zone` NULL
  - `  8` `pbd_pb_oid` : `uuid` NULL
  - `  9` `pbd_seq` : `smallint` NULL
  - ` 10` `pbd_pt_id` : `bigint` NULL
  - ` 11` `pbd_rmks` : `character varying` NULL
  - ` 12` `pbd_end_user` : `character varying` NULL
  - ` 13` `pbd_qty` : `numeric` NULL
  - ` 14` `pbd_qty_processed` : `numeric` NULL
  - ` 15` `pbd_qty_completed` : `numeric` NULL
  - ` 16` `pbd_um` : `integer` NULL
  - ` 17` `pbd_due_date` : `date` NULL
  - ` 18` `pbd_status` : `character` NULL
  - ` 19` `pbd_dt` : `timestamp without time zone` NULL
  - ` 20` `pbd_si_id` : `integer` NULL
  - ` 21` `pbd_qty_riud` : `numeric` NULL
  - ` 22` `pbd_um_conv` : `numeric` NULL
  - ` 23` `pbd_qty_real` : `numeric` NULL

### `public.pby_approval`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pby_code` : `character varying` NULL
  - `  2` `en_id` : `integer` NULL
  - `  3` `status_approval` : `character` NULL
  - `  4` `date_aproval` : `timestamp without time zone` NULL
  - `  5` `approval_by` : `character varying` NULL
  - `  6` `approval_level` : `integer` NULL

### `public.pby_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pby_oid` : `uuid` NOT NULL
  - `  2` `pby_dom_id` : `smallint` NOT NULL
  - `  3` `pby_en_id` : `integer` NOT NULL
  - `  4` `pby_add_by` : `character varying` NULL
  - `  5` `pby_add_date` : `timestamp without time zone` NULL
  - `  6` `pby_upd_by` : `character varying` NULL
  - `  7` `pby_upd_date` : `timestamp without time zone` NULL
  - `  8` `pby_code` : `character varying` NULL
  - `  9` `pby_date` : `date` NULL
  - ` 10` `pby_type` : `character` NULL
  - ` 11` `pby_cc_id` : `integer` NOT NULL
  - ` 12` `pby_sb_id` : `integer` NULL
  - ` 13` `pby_remarks` : `character varying` NULL
  - ` 14` `pby_tran_id` : `integer` NOT NULL
  - ` 15` `pby_trans_id` : `character` NULL
  - ` 16` `pby_dt` : `timestamp without time zone` NULL
  - ` 17` `pby_ac_id` : `integer` NOT NULL
  - ` 18` `pby_bk_id` : `integer` NOT NULL
  - ` 19` `pby_cu_id` : `integer` NOT NULL
  - ` 20` `pby_exc_rate` : `numeric` NULL
  - ` 21` `pby_peruntukan_id` : `integer` NULL
  - ` 22` `pby_due_date` : `date` NULL
  - ` 23` `pby_amount` : `numeric` NULL
  - ` 24` `pby_pd_rekap` : `character` NULL
  - ` 25` `pby_realisasi_amount` : `numeric` NULL
  - ` 26` `pby_pengembalian_amount` : `numeric` NULL
  - ` 27` `pby_xemp_id` : `bigint` NULL
  - ` 28` `pby_is_budget` : `character` NULL
  - ` 29` `pby_amount_pay` : `numeric` NULL
  - ` 30` `pby_exp_date` : `date` NULL
  - ` 31` `pby_dpp` : `numeric` NULL
  - ` 32` `pby_ppn` : `numeric` NULL
  - ` 33` `pby_pph` : `numeric` NULL
  - ` 34` `pby_doc_rcp_date` : `timestamp without time zone` NULL
  - ` 35` `pby_doc_rcp_by` : `character varying` NULL
  - ` 36` `pby_remarks2` : `character varying` NULL
  - ` 37` `pby_branch_id` : `integer` NOT NULL
  - ` 38` `pby_cust_id` : `integer` NOT NULL
  - ` 39` `pby_pjc_id` : `integer` NOT NULL
  - ` 40` `pby_print_status` : `character` NULL
  - ` 41` `pby_print_date` : `timestamp without time zone` NULL
  - ` 42` `pby_print_count` : `integer` NULL
  - ` 43` `pby_remarks_cl` : `character varying` NULL
  - ` 44` `pby_cash_oid` : `uuid` NULL
  - ` 45` `pby_remarks_close` : `character varying` NULL
  - ` 46` `pby_close_date` : `timestamp without time zone` NULL
  - ` 47` `pby_total_prepayment_balance` : `numeric` NULL
  - ` 48` `pby_submitted` : `character` NULL
  - ` 49` `pby_overexpense_amount` : `numeric` NULL
  - ` 50` `pby_overexpense_pay` : `numeric` NULL

### `public.pbyd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pbyd_oid` : `uuid` NOT NULL
  - `  2` `pbyd_pby_oid` : `uuid` NULL
  - `  3` `pbyd_seq` : `smallint` NULL
  - `  4` `pbyd_ac_id` : `integer` NULL
  - `  5` `pbyd_sb_id` : `integer` NULL
  - `  6` `pbyd_cc_id` : `integer` NULL
  - `  7` `pbyd_desc` : `character varying` NULL
  - `  8` `pbyd_amount` : `numeric` NULL
  - `  9` `pbyd_dt` : `timestamp without time zone` NULL
  - ` 10` `pbyd_pjc_id` : `integer` NULL
  - ` 11` `pbyd_amount_pay` : `numeric` NULL
  - ` 12` `pbyd_activity_code_id` : `integer` NULL
  - ` 13` `pbyd_loc_eu_site_id` : `bigint` NULL
  - ` 14` `pbyd_remarks` : `character varying` NULL
  - ` 15` `pbyd_site_relok` : `character varying` NULL
  - ` 16` `pbyd_pjc_ref_id` : `integer` NULL
  - ` 17` `pbyd_realisasi_amount` : `numeric` NULL
  - ` 18` `pbyd_pengembalian_amount` : `numeric` NULL
  - ` 19` `pbyd_siteid_id` : `integer` NULL
  - ` 20` `pbyd_prepayment_balance` : `numeric` NULL
  - ` 21` `pbyd_netoff_amount` : `numeric` NULL
  - ` 22` `pbyd_overexpense_amount` : `numeric` NULL
  - ` 23` `pbyd_overexpense_pay` : `numeric` NULL

### `public.pbyt_type`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pbyt_id` : `integer` NOT NULL
  - `  2` `pbyt_code` : `character` NULL
  - `  3` `pbyt_name` : `character varying` NULL

### `public.pdpr_periode`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pdpr_oid` : `uuid` NOT NULL
  - `  2` `pdpr_dom_id` : `smallint` NULL
  - `  3` `pdpr_en_id` : `integer` NULL
  - `  4` `pdpr_add_by` : `character varying` NULL
  - `  5` `pdpr_add_date` : `timestamp without time zone` NULL
  - `  6` `pdpr_upd_by` : `character varying` NULL
  - `  7` `pdpr_upd_date` : `timestamp without time zone` NULL
  - `  8` `pdpr_id` : `integer` NULL
  - `  9` `pdpr_name` : `character varying` NULL
  - ` 10` `pdpr_awal` : `date` NULL
  - ` 11` `pdpr_akhir` : `date` NULL
  - ` 12` `pdpr_tran_id` : `integer` NULL
  - ` 13` `pdpr_trans_id` : `character` NULL
  - ` 14` `pdpr_trans_rmks` : `character varying` NULL
  - ` 15` `pdpr_dt` : `timestamp without time zone` NULL
  - ` 16` `pdpr_generate` : `character` NULL
  - ` 17` `pdpr_usr_generate` : `character varying` NULL
  - ` 18` `pdpr_code` : `character varying` NULL

### `public.pi_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pi_oid` : `uuid` NOT NULL
  - `  2` `pi_dom_id` : `smallint` NULL
  - `  3` `pi_en_id` : `integer` NULL
  - `  4` `pi_add_by` : `character varying` NULL
  - `  5` `pi_add_date` : `timestamp without time zone` NULL
  - `  6` `pi_upd_by` : `character varying` NULL
  - `  7` `pi_upd_date` : `timestamp without time zone` NULL
  - `  8` `pi_id` : `integer` NULL
  - `  9` `pi_code` : `character varying` NULL
  - ` 10` `pi_desc` : `character varying` NULL
  - ` 11` `pi_so_type` : `character` NULL
  - ` 12` `pi_promo_id` : `integer` NULL
  - ` 13` `pi_cu_id` : `integer` NULL
  - ` 14` `pi_sales_program` : `integer` NULL
  - ` 15` `pi_start_date` : `date` NULL
  - ` 16` `pi_end_date` : `date` NULL
  - ` 17` `pi_active` : `character` NULL
  - ` 18` `pi_dt` : `timestamp without time zone` NULL
  - ` 19` `pi_ptnrg_id` : `integer` NULL
  - ` 20` `pi_editable_price_disc` : `character` NULL
  - ` 21` `pi_editable_disc` : `character` NULL

### `public.pic_copy`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pic_oid` : `uuid` NOT NULL
  - `  2` `pic_dom_id` : `smallint` NULL
  - `  3` `pic_en_id_from` : `integer` NULL
  - `  4` `pic_add_by` : `character varying` NULL
  - `  5` `pic_add_date` : `date` NULL
  - `  6` `pic_upd_by` : `character varying` NULL
  - `  7` `pic_upd_date` : `date` NULL
  - `  8` `pic_dt` : `timestamp without time zone` NULL
  - `  9` `pic_pi_oid_from` : `uuid` NULL
  - ` 10` `pic_pi_oid_to` : `uuid` NULL
  - ` 11` `pic_en_id_to` : `integer` NULL

### `public.picgd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `picgd_oid` : `uuid` NOT NULL
  - `  2` `picgd_add_by` : `character varying` NULL
  - `  3` `picgd_add_date` : `timestamp without time zone` NULL
  - `  4` `picgd_upd_by` : `character varying` NULL
  - `  5` `picgd_upd_date` : `timestamp without time zone` NULL
  - `  6` `picgd_dt` : `timestamp without time zone` NULL
  - `  7` `picgd_pi_oid` : `uuid` NULL
  - `  8` `picgd_min_amount` : `numeric` NULL
  - `  9` `picgd_disc` : `numeric` NULL
  - ` 10` `picgd_payment_type` : `integer` NULL

### `public.pid_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pid_oid` : `uuid` NOT NULL
  - `  2` `pid_add_by` : `character varying` NULL
  - `  3` `pid_add_date` : `timestamp without time zone` NULL
  - `  4` `pid_upd_date` : `timestamp without time zone` NULL
  - `  5` `pid_upd_by` : `character varying` NULL
  - `  6` `pid_pi_oid` : `uuid` NULL
  - `  7` `pid_pt_id` : `bigint` NULL
  - `  8` `pid_dt` : `timestamp without time zone` NULL

### `public.pidd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pidd_oid` : `uuid` NOT NULL
  - `  2` `pidd_add_by` : `character varying` NULL
  - `  3` `pidd_add_date` : `timestamp without time zone` NULL
  - `  4` `pidd_upd_date` : `timestamp without time zone` NULL
  - `  5` `pidd_upd_by` : `character varying` NULL
  - `  6` `pidd_pid_oid` : `uuid` NULL
  - `  7` `pidd_payment_type` : `integer` NULL
  - `  8` `pidd_price` : `numeric` NULL
  - `  9` `pidd_disc` : `numeric` NULL
  - ` 10` `pidd_dp` : `numeric` NULL
  - ` 11` `pidd_interval` : `smallint` NULL
  - ` 12` `pidd_payment` : `numeric` NULL
  - ` 13` `pidd_min_qty` : `smallint` NULL
  - ` 14` `pidd_sales_unit` : `numeric` NULL
  - ` 15` `pidd_dt` : `timestamp without time zone` NULL
  - ` 16` `pidd_include` : `character` NULL
  - ` 17` `pidd_disc2` : `numeric` NULL
  - ` 18` `pidd_disc_max` : `numeric` NULL
  - ` 19` `pidd_disc2_max` : `numeric` NULL
  - ` 20` `pidd_start_date` : `date` NULL
  - ` 21` `pidd_end_date` : `date` NULL

### `public.piddt_temp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `piddt_oid` : `uuid` NOT NULL
  - `  2` `piddt_add_by` : `character varying` NULL
  - `  3` `piddt_add_date` : `timestamp without time zone` NULL
  - `  4` `piddt_upd_by` : `character varying` NULL
  - `  5` `piddt_upd_date` : `timestamp without time zone` NULL
  - `  6` `piddt_dt` : `timestamp without time zone` NULL
  - `  7` `piddt_pidd_oid` : `uuid` NOT NULL
  - `  8` `piddt_price` : `numeric` NULL
  - `  9` `piddt_disc` : `numeric` NULL
  - ` 10` `piddt_disc2` : `numeric` NULL
  - ` 11` `piddt_disc_max` : `numeric` NULL
  - ` 12` `piddt_disc2_max` : `numeric` NULL
  - ` 13` `piddt_time_start` : `timestamp without time zone` NULL
  - ` 14` `piddt_time_end` : `timestamp without time zone` NULL

### `public.pjc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pjc_oid` : `uuid` NOT NULL
  - `  2` `pjc_dom_id` : `smallint` NULL
  - `  3` `pjc_en_id` : `integer` NULL
  - `  4` `pjc_add_by` : `character varying` NULL
  - `  5` `pjc_add_date` : `timestamp without time zone` NULL
  - `  6` `pjc_upd_by` : `character varying` NULL
  - `  7` `pjc_upd_date` : `timestamp without time zone` NULL
  - `  8` `pjc_id` : `integer` NULL
  - `  9` `pjc_code` : `character varying` NULL
  - ` 10` `pjc_date` : `date` NULL
  - ` 11` `pjc_desc` : `character varying` NULL
  - ` 12` `pjc_active` : `character` NOT NULL
  - ` 13` `pjc_dt` : `timestamp without time zone` NULL
  - ` 14` `pjc_is_budget` : `character` NOT NULL
  - ` 15` `pjc_branch_id` : `integer` NULL
  - ` 16` `pjc_ac_id` : `integer` NOT NULL
  - ` 17` `pjc_progress` : `numeric` NULL
  - ` 18` `pjc_is_closed` : `character` NULL
  - ` 19` `pjc_is_boq` : `character` NULL

### `public.pjcp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pjcp_oid` : `uuid` NOT NULL
  - `  2` `pjcp_dom_id` : `smallint` NOT NULL
  - `  3` `pjcp_en_id` : `integer` NOT NULL
  - `  4` `pjcp_add_by` : `character varying` NULL
  - `  5` `pjcp_add_date` : `timestamp without time zone` NULL
  - `  6` `pjcp_upd_by` : `character varying` NULL
  - `  7` `pjcp_upd_date` : `timestamp without time zone` NULL
  - `  8` `pjcp_dt` : `timestamp without time zone` NULL
  - `  9` `pjcp_pjc_id` : `integer` NOT NULL
  - ` 10` `pjcp_date` : `date` NULL
  - ` 11` `pjcp_progress` : `numeric` NULL
  - ` 12` `pjcp_remarks` : `character varying` NULL
  - ` 13` `pjcp_branch_id` : `integer` NOT NULL
  - ` 14` `pjcp_seq` : `smallint` NULL

### `public.pjcpd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pjcpd_oid` : `uuid` NOT NULL
  - `  2` `pjcpd_pjcp_oid` : `uuid` NOT NULL
  - `  3` `pjcpd_seq` : `smallint` NULL
  - `  4` `pjcpd_remarks` : `character varying` NULL
  - `  5` `pjcpd_dt` : `timestamp without time zone` NULL

### `public.pl_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pl_oid` : `uuid` NOT NULL
  - `  2` `pl_dom_id` : `smallint` NULL
  - `  3` `pl_add_by` : `character varying` NULL
  - `  4` `pl_add_date` : `timestamp without time zone` NULL
  - `  5` `pl_upd_by` : `character varying` NULL
  - `  6` `pl_upd_date` : `timestamp without time zone` NULL
  - `  7` `pl_id` : `integer` NULL
  - `  8` `pl_code` : `character varying` NULL
  - `  9` `pl_desc` : `character varying` NULL
  - ` 10` `pl_taxable` : `character` NOT NULL
  - ` 11` `pl_tax_class` : `integer` NULL
  - ` 12` `pl_active` : `character` NOT NULL
  - ` 13` `pl_dt` : `timestamp without time zone` NULL
  - ` 14` `pl_fa_depr` : `character` NULL

### `public.pl_report`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ac_id` : `integer` NULL
  - `  2` `ac_code` : `character varying` NULL
  - `  3` `ac_name` : `character varying` NULL
  - `  4` `ac_desc` : `character varying` NULL
  - `  5` `ac_parent` : `integer` NULL
  - `  6` `ac_type` : `character` NOT NULL
  - `  7` `ac_is_sumlevel` : `character` NOT NULL
  - `  8` `ac_sign` : `character` NOT NULL
  - `  9` `ac_active` : `character` NOT NULL
  - ` 10` `ac_cu_id` : `integer` NULL
  - ` 11` `ac_cash_flow` : `integer` NULL
  - ` 12` `ac_level` : `integer` NULL
  - ` 13` `ac_value` : `numeric` NULL
  - ` 14` `ac_code_sort` : `character varying` NULL
  - ` 15` `remark_header` : `character varying` NULL
  - ` 16` `remark_footer` : `character varying` NULL
  - ` 17` `sort_number` : `integer` NULL
  - ` 18` `seq` : `integer` NULL
  - ` 19` `ac_value_display` : `numeric` NULL
  - ` 20` `is_toplevel` : `character varying` NULL
  - ` 21` `ac_code_hirarki` : `character varying` NULL

### `public.pl_setting`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `number` : `character varying` NULL
  - `  2` `ac_code` : `character varying` NULL
  - `  3` `ac_header` : `character varying` NULL
  - `  4` `desc_detail` : `character varying` NULL
  - `  5` `type_value` : `character varying` NULL
  - `  6` `sign_report` : `double precision` NULL
  - `  7` `n1` : `character varying` NULL
  - `  8` `n2` : `character varying` NULL
  - `  9` `n1_desc` : `character varying` NULL
  - ` 10` `n2_desc` : `character varying` NULL
  - ` 11` `n3` : `character varying` NULL
  - ` 12` `type_set` : `character varying` NULL
  - ` 13` `n3_desc` : `character varying` NULL
  - ` 14` `oid_number` : `uuid` NULL
  - ` 15` `branch_id` : `integer` NULL

### `public.pl_setting_account`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pla_oid` : `uuid` NOT NULL
  - `  2` `pla_pls_oid` : `uuid` NULL
  - `  3` `pla_ac_id` : `integer` NULL
  - `  4` `pla_ac_hirarki` : `character varying` NULL

### `public.pl_setting_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pl_oid` : `uuid` NOT NULL
  - `  2` `pl_footer` : `character varying` NULL
  - `  3` `pl_sign` : `character varying` NULL
  - `  4` `pl_number` : `character varying` NULL

### `public.pl_setting_sub`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pls_oid` : `uuid` NOT NULL
  - `  2` `pls_pl_oid` : `uuid` NULL
  - `  3` `pls_item` : `character varying` NULL
  - `  4` `pls_number` : `character varying` NULL
  - `  5` `pls_value` : `integer` NULL

### `public.pla_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pla_oid` : `uuid` NOT NULL
  - `  2` `pla_seq` : `smallint` NULL
  - `  3` `pla_param` : `character varying` NULL
  - `  4` `pla_code` : `character varying` NULL
  - `  5` `pla_desc` : `character varying` NULL
  - `  6` `pla_ac_id` : `integer` NULL
  - `  7` `pla_sb_id` : `integer` NULL
  - `  8` `pla_cc_id` : `integer` NULL
  - `  9` `pla_dt` : `timestamp without time zone` NULL
  - ` 10` `pla_pl_id` : `integer` NULL

### `public.plafon_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `plafon_oid` : `uuid` NOT NULL
  - `  2` `plafon_dom_id` : `smallint` NULL
  - `  3` `plafon_en_id` : `integer` NULL
  - `  4` `plafon_add_by` : `character varying` NULL
  - `  5` `plafon_add_date` : `timestamp without time zone` NULL
  - `  6` `plafon_upd_by` : `character varying` NULL
  - `  7` `plafon_upd_date` : `timestamp without time zone` NULL
  - `  8` `plafon_id` : `smallint` NULL
  - `  9` `plafon_code` : `character varying` NOT NULL
  - ` 10` `plafon_desc` : `character varying` NULL
  - ` 11` `plafon_plafon` : `numeric` NULL
  - ` 12` `plafon_dt` : `timestamp without time zone` NULL

### `public.plam_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `plam_oid` : `uuid` NOT NULL
  - `  2` `plam_code` : `character varying` NULL
  - `  3` `plam_desc` : `character varying` NULL
  - `  4` `plam_param` : `character varying` NULL
  - `  5` `plam_seq` : `smallint` NULL
  - `  6` `plam_dt` : `timestamp without time zone` NULL
  - `  7` `plam_visible` : `character` NULL

### `public.plbr_branch`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `plbr_oid` : `uuid` NOT NULL
  - `  2` `plbr_dom_id` : `smallint` NULL
  - `  3` `plbr_add_by` : `character varying` NULL
  - `  4` `plbr_add_date` : `timestamp without time zone` NULL
  - `  5` `plbr_upd_by` : `character varying` NULL
  - `  6` `plbr_upd_date` : `timestamp without time zone` NULL
  - `  7` `plbr_pl_id` : `integer` NULL
  - `  8` `plbr_branch_id` : `integer` NULL
  - `  9` `plbr_dt` : `timestamp without time zone` NULL

### `public.plbra_acct`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `plbra_oid` : `uuid` NOT NULL
  - `  2` `plbra_plbr_oid` : `uuid` NULL
  - `  3` `plbra_seq` : `smallint` NULL
  - `  4` `plbra_code` : `character varying` NULL
  - `  5` `plbra_desc` : `character varying` NULL
  - `  6` `plbra_ac_id` : `integer` NULL
  - `  7` `plbra_dt` : `timestamp without time zone` NULL

### `public.plfabk_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `plfabk_oid` : `uuid` NOT NULL
  - `  2` `plfabk_pl_id` : `integer` NULL
  - `  3` `plfabk_fabk_id` : `bigint` NULL
  - `  4` `plfabk_famt_id` : `bigint` NULL
  - `  5` `plfabk_exp_life` : `smallint` NULL
  - `  6` `plfabk_dt` : `timestamp without time zone` NULL

### `public.plinv_inv`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `plinv_oid` : `uuid` NOT NULL
  - `  2` `plinv_dom_id` : `smallint` NULL
  - `  3` `plinv_add_by` : `character varying` NULL
  - `  4` `plinv_add_date` : `timestamp without time zone` NULL
  - `  5` `plinv_upd_by` : `character varying` NULL
  - `  6` `plinv_upd_date` : `timestamp without time zone` NULL
  - `  7` `plinv_pl_id` : `integer` NULL
  - `  8` `plinv_loc_id` : `bigint` NULL
  - `  9` `plinv_dt` : `timestamp without time zone` NULL

### `public.plinva_acct`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `plinva_oid` : `uuid` NOT NULL
  - `  2` `plinva_plinv_oid` : `uuid` NULL
  - `  3` `plinva_seq` : `smallint` NULL
  - `  4` `plinva_code` : `character varying` NULL
  - `  5` `plinva_desc` : `character varying` NULL
  - `  6` `plinva_ac_id` : `integer` NULL
  - `  7` `plinva_sb_id` : `integer` NULL
  - `  8` `plinva_cc_id` : `integer` NULL
  - `  9` `plinva_dt` : `timestamp without time zone` NULL

### `public.po_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `po_oid` : `uuid` NOT NULL
  - `  2` `po_dom_id` : `smallint` NULL
  - `  3` `po_en_id` : `integer` NULL
  - `  4` `po_upd_date` : `timestamp without time zone` NULL
  - `  5` `po_upd_by` : `character varying` NULL
  - `  6` `po_add_date` : `timestamp without time zone` NULL
  - `  7` `po_add_by` : `character varying` NULL
  - `  8` `po_code` : `character varying` NULL
  - `  9` `po_ptnr_id` : `integer` NULL
  - ` 10` `po_cmaddr_id` : `integer` NULL
  - ` 11` `po_date` : `date` NULL
  - ` 12` `po_need_date` : `date` NULL
  - ` 13` `po_due_date` : `date` NULL
  - ` 14` `po_rmks` : `character varying` NULL
  - ` 15` `po_sb_id` : `integer` NULL
  - ` 16` `po_cc_id` : `integer` NOT NULL
  - ` 17` `po_si_id` : `integer` NULL
  - ` 18` `po_pjc_id` : `integer` NULL
  - ` 19` `po_close_date` : `date` NULL
  - ` 20` `po_total` : `numeric` NULL
  - ` 21` `po_tran_id` : `integer` NULL
  - ` 22` `po_trans_id` : `character` NULL
  - ` 23` `po_credit_term` : `integer` NOT NULL
  - ` 24` `po_taxable` : `character` NULL
  - ` 25` `po_tax_inc` : `character` NULL
  - ` 26` `po_tax_class` : `integer` NULL
  - ` 27` `po_cu_id` : `integer` NULL
  - ` 28` `po_exc_rate` : `numeric` NULL
  - ` 29` `po_trans_rmks` : `character varying` NULL
  - ` 30` `po_current_route` : `character varying` NULL
  - ` 31` `po_next_route` : `character varying` NULL
  - ` 32` `po_dt` : `timestamp without time zone` NULL
  - ` 33` `po_total_ppn` : `numeric` NULL
  - ` 34` `po_freight` : `numeric` NULL
  - ` 35` `po_total_pph` : `numeric` NULL
  - ` 36` `po_status_cash` : `character` NULL
  - ` 37` `po_bk_id` : `integer` NULL
  - ` 38` `po_branch_id` : `integer` NOT NULL
  - ` 39` `po_type_id` : `integer` NOT NULL
  - ` 40` `po_print_status` : `character` NULL
  - ` 41` `po_print_date` : `timestamp without time zone` NULL
  - ` 42` `po_print_count` : `integer` NULL
  - ` 43` `po_remarks_close` : `character varying` NULL
  - ` 44` `po_remarks_cl` : `character varying` NULL

### `public.pocust_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pocust_oid` : `uuid` NOT NULL
  - `  2` `pocust_dom_id` : `smallint` NULL
  - `  3` `pocust_en_id` : `integer` NULL
  - `  4` `pocust_add_by` : `character varying` NULL
  - `  5` `pocust_add_date` : `timestamp without time zone` NULL
  - `  6` `pocust_upd_by` : `character varying` NULL
  - `  7` `pocust_upd_date` : `timestamp without time zone` NULL
  - `  8` `pocust_code` : `character varying` NULL
  - `  9` `pocust_ptnr_id_sold` : `integer` NOT NULL
  - ` 10` `pocust_date` : `date` NULL
  - ` 11` `pocust_taxable` : `character` NULL
  - ` 12` `pocust_tax_class` : `integer` NOT NULL
  - ` 13` `pocust_type` : `character` NULL
  - ` 14` `pocust_sales_person` : `integer` NOT NULL
  - ` 15` `pocust_pi_id` : `integer` NOT NULL
  - ` 16` `pocust_total` : `numeric` NULL
  - ` 17` `pocust_close_date` : `date` NULL
  - ` 18` `pocust_tran_id` : `integer` NOT NULL
  - ` 19` `pocust_trans_id` : `character` NULL
  - ` 20` `pocust_trans_rmks` : `character varying` NULL
  - ` 21` `pocust_dt` : `timestamp without time zone` NULL
  - ` 22` `pocust_cu_id` : `integer` NOT NULL
  - ` 23` `pocust_total_ppn` : `numeric` NULL
  - ` 24` `pocust_total_pph` : `numeric` NULL
  - ` 25` `pocust_exc_rate` : `numeric` NULL
  - ` 26` `pocust_tax_inc` : `character` NULL
  - ` 27` `pocust_ppn_type` : `character` NOT NULL
  - ` 28` `pocust_branch_id` : `integer` NOT NULL
  - ` 29` `pocust_credit_term` : `integer` NOT NULL
  - ` 30` `pocust_loan_amount` : `numeric` NULL
  - ` 31` `pocust_pay_amount` : `numeric` NULL
  - ` 32` `pocust_refund_amount` : `numeric` NULL
  - ` 33` `pocust_disc1` : `numeric` NULL
  - ` 34` `pocust_return` : `numeric` NULL
  - ` 35` `pocust_promotion` : `numeric` NULL
  - ` 36` `pocust_pay_date` : `date` NULL
  - ` 37` `pocust_arpay_date` : `date` NULL
  - ` 38` `pocust_disc2` : `numeric` NULL
  - ` 39` `pocust_rev` : `smallint` NULL
  - ` 40` `pocust_print_status` : `character` NULL
  - ` 41` `pocust_print_date` : `timestamp without time zone` NULL
  - ` 42` `pocust_print_count` : `integer` NULL
  - ` 43` `pocust_remarks_cl` : `character varying` NULL
  - ` 44` `pocust_remarks_close` : `character varying` NULL
  - ` 45` `pocust_is_cm` : `character` NULL

### `public.pocustd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pocustd_oid` : `uuid` NOT NULL
  - `  2` `pocustd_dom_id` : `smallint` NULL
  - `  3` `pocustd_en_id` : `integer` NULL
  - `  4` `pocustd_add_by` : `character varying` NULL
  - `  5` `pocustd_add_date` : `timestamp without time zone` NULL
  - `  6` `pocustd_upd_by` : `character varying` NULL
  - `  7` `pocustd_upd_date` : `timestamp without time zone` NULL
  - `  8` `pocustd_pocust_oid` : `uuid` NULL
  - `  9` `pocustd_seq` : `smallint` NULL
  - ` 10` `pocustd_pt_id` : `bigint` NULL
  - ` 11` `pocustd_rmks` : `character varying` NULL
  - ` 12` `pocustd_qty` : `numeric` NULL
  - ` 13` `pocustd_qty_so` : `numeric` NULL
  - ` 14` `pocustd_um` : `integer` NULL
  - ` 15` `pocustd_price` : `numeric` NULL
  - ` 16` `pocustd_disc` : `numeric` NULL
  - ` 17` `pocustd_taxable` : `character` NULL
  - ` 18` `pocustd_tax_inc` : `character` NULL
  - ` 19` `pocustd_tax_class` : `integer` NULL
  - ` 20` `pocustd_status` : `character` NULL
  - ` 21` `pocustd_dt` : `timestamp without time zone` NULL
  - ` 22` `pocustd_ppn` : `numeric` NULL
  - ` 23` `pocustd_pph` : `numeric` NULL
  - ` 24` `pocustd_price_line` : `numeric` NULL
  - ` 25` `pocustd_disc1` : `numeric` NULL
  - ` 26` `pocustd_disc2` : `numeric` NULL
  - ` 27` `pocustd_packaging_id` : `integer` NOT NULL
  - ` 28` `pocustd_qty_packaging` : `numeric` NULL
  - ` 29` `pocustd_disc_amount` : `numeric` NULL
  - ` 30` `pocustd_cust_id` : `integer` NULL
  - ` 31` `pocustd_sales_person` : `integer` NULL
  - ` 32` `pocustd_qty_moving` : `numeric` NULL

### `public.pod_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pod_oid` : `uuid` NOT NULL
  - `  2` `pod_dom_id` : `smallint` NULL
  - `  3` `pod_en_id` : `integer` NULL
  - `  4` `pod_add_by` : `character varying` NULL
  - `  5` `pod_add_date` : `timestamp without time zone` NULL
  - `  6` `pod_upd_by` : `character varying` NULL
  - `  7` `pod_upd_date` : `timestamp without time zone` NULL
  - `  8` `pod_po_oid` : `uuid` NULL
  - `  9` `pod_seq` : `smallint` NULL
  - ` 10` `pod_reqd_oid` : `uuid` NULL
  - ` 11` `pod_si_id` : `integer` NULL
  - ` 12` `pod_pt_id` : `bigint` NULL
  - ` 13` `pod_rmks` : `character varying` NULL
  - ` 14` `pod_end_user` : `character varying` NULL
  - ` 15` `pod_qty` : `numeric` NULL
  - ` 16` `pod_qty_receive` : `numeric` NULL
  - ` 17` `pod_qty_invoice` : `numeric` NULL
  - ` 18` `pod_um` : `integer` NULL
  - ` 19` `pod_cost` : `numeric` NULL
  - ` 20` `pod_disc` : `numeric` NULL
  - ` 21` `pod_sb_id` : `integer` NULL
  - ` 22` `pod_cc_id` : `integer` NULL
  - ` 23` `pod_pjc_id` : `integer` NULL
  - ` 24` `pod_need_date` : `date` NULL
  - ` 25` `pod_due_date` : `date` NULL
  - ` 26` `pod_um_conv` : `numeric` NULL
  - ` 27` `pod_qty_real` : `numeric` NULL
  - ` 28` `pod_pt_class` : `character` NULL
  - ` 29` `pod_taxable` : `character` NULL
  - ` 30` `pod_tax_inc` : `character` NULL
  - ` 31` `pod_tax_class` : `integer` NULL
  - ` 32` `pod_status` : `character` NULL
  - ` 33` `pod_dt` : `timestamp without time zone` NULL
  - ` 34` `pod_qty_return` : `numeric` NULL
  - ` 35` `pod_memo` : `character` NULL
  - ` 36` `pod_pt_desc1` : `character varying` NULL
  - ` 37` `pod_pt_desc2` : `character varying` NULL
  - ` 38` `pod_qty_so` : `numeric` NULL
  - ` 39` `pod_loc_id` : `integer` NULL
  - ` 40` `pod_height` : `numeric` NULL
  - ` 41` `pod_width` : `numeric` NULL
  - ` 42` `pod_branch_id` : `integer` NOT NULL
  - ` 43` `pod_ac_id` : `integer` NULL
  - ` 44` `pod_ppn` : `numeric` NULL
  - ` 45` `pod_pph` : `numeric` NULL
  - ` 46` `pod_cost_line` : `numeric` NULL
  - ` 47` `pod_packaging_id` : `integer` NOT NULL
  - ` 48` `pod_qty_packaging` : `numeric` NULL
  - ` 49` `pod_cost_standard` : `numeric` NULL
  - ` 50` `pod_cost_id` : `numeric` NULL
  - ` 51` `pod_cost_cl` : `numeric` NULL
  - ` 52` `pod_siteid_id` : `integer` NULL
  - ` 53` `pod_last_cost` : `numeric` NULL
  - ` 54` `pod_netto` : `numeric` NULL

### `public.pods_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pods_oid` : `uuid` NOT NULL
  - `  2` `pods_pod_oid` : `uuid` NULL
  - `  3` `pods_qty` : `numeric` NULL
  - `  4` `pods_um` : `integer` NULL
  - `  5` `pods_si_id` : `integer` NULL
  - `  6` `pods_loc_id` : `bigint` NULL
  - `  7` `pods_lot_serial` : `character varying` NULL
  - `  8` `pods_dt` : `timestamp without time zone` NULL
  - `  9` `pods_exp_date` : `date` NULL

### `public.printout_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `printout_oid` : `uuid` NOT NULL
  - `  2` `printout_add_by` : `character varying` NULL
  - `  3` `printout_add_date` : `timestamp without time zone` NULL
  - `  4` `printout_upd_by` : `character varying` NULL
  - `  5` `printout_upd_date` : `timestamp without time zone` NULL
  - `  6` `printout_dt` : `timestamp without time zone` NULL
  - `  7` `printout_id` : `integer` NOT NULL
  - `  8` `printout_menu` : `character varying` NULL
  - `  9` `printout_name` : `character varying` NULL

### `public.prj_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `prj_oid` : `uuid` NOT NULL
  - `  2` `prj_dom_id` : `smallint` NULL
  - `  3` `prj_en_id` : `integer` NULL
  - `  4` `prj_add_by` : `character varying` NULL
  - `  5` `prj_add_date` : `timestamp without time zone` NULL
  - `  6` `prj_upd_by` : `character varying` NULL
  - `  7` `prj_upd_date` : `timestamp without time zone` NULL
  - `  8` `prj_dt` : `timestamp without time zone` NULL
  - `  9` `prj_code` : `character varying` NULL
  - ` 10` `prj_ptnr_id_sold` : `integer` NULL
  - ` 11` `prj_ptnr_id_bill` : `integer` NULL
  - ` 12` `prj_sales_person_id` : `integer` NULL
  - ` 13` `prj_pjt_code_id` : `integer` NULL
  - ` 14` `prj_ord_date` : `date` NULL
  - ` 15` `prj_start_date` : `date` NULL
  - ` 16` `prj_end_date` : `date` NULL
  - ` 17` `prj_si_id` : `integer` NULL
  - ` 18` `prj_cu_id` : `integer` NULL
  - ` 19` `prj_exc_rate` : `numeric` NULL
  - ` 20` `prj_credit_term` : `integer` NULL
  - ` 21` `prj_taxable` : `character` NULL
  - ` 22` `prj_tax_inc` : `character` NULL
  - ` 23` `prj_tax_class` : `integer` NULL
  - ` 24` `prj_total` : `numeric` NULL
  - ` 25` `prj_total_ppn` : `numeric` NULL
  - ` 26` `prj_total_pph` : `numeric` NULL
  - ` 27` `prj_tran_id` : `integer` NULL
  - ` 28` `prj_trans_id` : `character` NULL
  - ` 29` `prj_pocust_oid` : `uuid` NULL
  - ` 30` `prj_ar_ac_id` : `integer` NULL
  - ` 31` `prj_ar_sb_id` : `integer` NULL
  - ` 32` `prj_ar_cc_id` : `integer` NULL
  - ` 33` `prj_area_id` : `integer` NULL

### `public.prjc_cust`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `prjc_oid` : `uuid` NOT NULL
  - `  2` `prjc_dom_id` : `smallint` NULL
  - `  3` `prjc_en_id` : `integer` NULL
  - `  4` `prjc_add_by` : `character varying` NULL
  - `  5` `prjc_add_date` : `timestamp without time zone` NULL
  - `  6` `prjc_upd_by` : `character varying` NULL
  - `  7` `prjc_upd_date` : `timestamp without time zone` NULL
  - `  8` `prjc_dt` : `timestamp without time zone` NULL
  - `  9` `prjc_prj_oid` : `uuid` NULL
  - ` 10` `prjc_seq` : `smallint` NULL
  - ` 11` `prjc_si_id` : `integer` NULL
  - ` 12` `prjc_cp_id` : `integer` NULL
  - ` 13` `prjc_pt_desc1` : `character varying` NULL
  - ` 14` `prjc_pt_desc2` : `character varying` NULL
  - ` 15` `prjc_loc_id` : `integer` NULL
  - ` 16` `prjc_qty` : `numeric` NULL
  - ` 17` `prjc_qty_full` : `numeric` NULL
  - ` 18` `prjc_um` : `integer` NULL
  - ` 19` `prjc_cost` : `numeric` NULL
  - ` 20` `prjc_price` : `numeric` NULL
  - ` 21` `prjc_disc` : `numeric` NULL
  - ` 22` `prjc_um_conv` : `numeric` NULL
  - ` 23` `prjc_qty_real` : `numeric` NULL
  - ` 24` `prjc_taxable` : `character` NULL
  - ` 25` `prjc_tax_inc` : `character` NULL
  - ` 26` `prjc_tax_class` : `integer` NULL
  - ` 27` `prjc_trans_id` : `character` NULL
  - ` 28` `prjc_qty_inv` : `numeric` NULL

### `public.prjd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `prjd_oid` : `uuid` NOT NULL
  - `  2` `prjd_dom_id` : `smallint` NULL
  - `  3` `prjd_en_id` : `integer` NULL
  - `  4` `prjd_add_by` : `character varying` NULL
  - `  5` `prjd_add_date` : `timestamp without time zone` NULL
  - `  6` `prjd_upd_by` : `character varying` NULL
  - `  7` `prjd_upd_date` : `timestamp without time zone` NULL
  - `  8` `prjd_dt` : `timestamp without time zone` NULL
  - `  9` `prjd_prj_oid` : `uuid` NULL
  - ` 10` `prjd_seq` : `smallint` NULL
  - ` 11` `prjd_si_id` : `integer` NULL
  - ` 12` `prjd_pt_id` : `integer` NULL
  - ` 13` `prjd_pt_desc1` : `character varying` NULL
  - ` 14` `prjd_pt_desc2` : `character varying` NULL
  - ` 15` `prjd_loc_id` : `integer` NULL
  - ` 16` `prjd_qty` : `numeric` NULL
  - ` 17` `prjd_qty_full` : `numeric` NULL
  - ` 18` `prjd_um` : `integer` NULL
  - ` 19` `prjd_cost` : `numeric` NULL
  - ` 20` `prjd_price` : `numeric` NULL
  - ` 21` `prjd_disc` : `numeric` NULL
  - ` 22` `prjd_um_conv` : `numeric` NULL
  - ` 23` `prjd_qty_real` : `numeric` NULL
  - ` 24` `prjd_taxable` : `character` NULL
  - ` 25` `prjd_tax_inc` : `character` NULL
  - ` 26` `prjd_tax_class` : `integer` NULL
  - ` 27` `prjd_trans_id` : `character` NULL
  - ` 28` `prjd_qty_pao` : `numeric` NULL
  - ` 29` `prjd_qty_mo` : `numeric` NULL
  - ` 30` `prjd_type` : `integer` NULL
  - ` 31` `prjd_qty_do` : `numeric` NULL
  - ` 32` `prjd_is_close` : `character` NULL
  - ` 33` `prjd_qty_shipment` : `numeric` NULL
  - ` 34` `prjd_qty_inv` : `numeric` NULL
  - ` 35` `prjd_progress_pay` : `numeric` NULL
  - ` 36` `prjd_progress_pay_inv` : `numeric` NULL

### `public.promo_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `promo_oid` : `uuid` NOT NULL
  - `  2` `promo_dom_id` : `smallint` NULL
  - `  3` `promo_en_id` : `integer` NULL
  - `  4` `promo_add_by` : `character varying` NULL
  - `  5` `promo_add_date` : `timestamp without time zone` NULL
  - `  6` `promo_upd_by` : `character varying` NULL
  - `  7` `promo_upd_date` : `timestamp without time zone` NULL
  - `  8` `promo_id` : `integer` NULL
  - `  9` `promo_code` : `character varying` NULL
  - ` 10` `promo_desc` : `character varying` NULL
  - ` 11` `promo_sales_id` : `integer` NULL
  - ` 12` `promo_penjamin` : `numeric` NULL
  - ` 13` `promo_start_date` : `date` NULL
  - ` 14` `promo_end_date` : `date` NULL
  - ` 15` `promo_active` : `character` NOT NULL
  - ` 16` `promo_dt` : `timestamp without time zone` NULL

### `public.ps_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ps_oid` : `uuid` NOT NULL
  - `  2` `ps_dom_id` : `smallint` NULL
  - `  3` `ps_en_id` : `integer` NULL
  - `  4` `ps_add_by` : `character varying` NULL
  - `  5` `ps_add_date` : `timestamp without time zone` NULL
  - `  6` `ps_upd_by` : `character varying` NULL
  - `  7` `ps_upd_date` : `timestamp without time zone` NULL
  - `  8` `ps_id` : `bigint` NULL
  - `  9` `ps_par` : `character varying` NULL
  - ` 10` `ps_desc` : `character varying` NULL
  - ` 11` `ps_use_bom` : `character` NOT NULL
  - ` 12` `ps_pt_bom_id` : `bigint` NOT NULL
  - ` 13` `ps_active` : `character` NOT NULL
  - ` 14` `ps_dt` : `timestamp without time zone` NULL
  - ` 15` `ps_remarks` : `character varying` NULL
  - ` 16` `ps_default` : `character` NULL

### `public.psd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `psd_oid` : `uuid` NOT NULL
  - `  2` `psd_ps_oid` : `uuid` NULL
  - `  3` `psd_add_by` : `character varying` NULL
  - `  4` `psd_add_date` : `timestamp without time zone` NULL
  - `  5` `psd_upd_by` : `character varying` NULL
  - `  6` `psd_upd_date` : `timestamp without time zone` NULL
  - `  7` `psd_use_bom` : `character` NOT NULL
  - `  8` `psd_pt_bom_id` : `bigint` NULL
  - `  9` `psd_comp` : `character varying` NULL
  - ` 10` `psd_ref` : `character varying` NULL
  - ` 11` `psd_desc` : `character varying` NULL
  - ` 12` `psd_start_date` : `date` NULL
  - ` 13` `psd_end_date` : `date` NULL
  - ` 14` `psd_qty` : `numeric` NOT NULL
  - ` 15` `psd_str_type` : `character` NULL
  - ` 16` `psd_scrp_pct` : `numeric` NULL
  - ` 17` `psd_lt_off` : `smallint` NULL
  - ` 18` `psd_op` : `smallint` NULL
  - ` 19` `psd_seq` : `integer` NULL
  - ` 20` `psd_fcst_pct` : `numeric` NULL
  - ` 21` `psd_group` : `integer` NULL
  - ` 22` `psd_process` : `integer` NULL
  - ` 23` `psd_dt` : `timestamp without time zone` NULL
  - ` 24` `psd_ps_id_ref` : `integer` NULL

### `public.pstruct_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pstruct_oid` : `uuid` NOT NULL
  - `  2` `pstruct_code` : `character varying` NULL
  - `  3` `pstruct_pt_id` : `integer` NULL
  - `  4` `pstruct_add_date` : `timestamp without time zone` NULL
  - `  5` `pstruct_add_by` : `character varying` NULL
  - `  6` `pstruct_upd_date` : `timestamp without time zone` NULL
  - `  7` `pstruct_upd_by` : `character varying` NULL
  - `  8` `pstruct_dom_id` : `integer` NULL
  - `  9` `pstruct_en_id` : `integer` NULL
  - ` 10` `pstruct_remarks` : `character varying` NULL

### `public.pstructd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pstructd_oid` : `uuid` NOT NULL
  - `  2` `pstructd_pstruct_oid` : `uuid` NULL
  - `  3` `pstructd_pt_id` : `integer` NULL
  - `  4` `psdtructd_dt` : `timestamp without time zone` NULL

### `public.pt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pt_oid` : `uuid` NOT NULL
  - `  2` `pt_dom_id` : `smallint` NULL
  - `  3` `pt_en_id` : `integer` NULL
  - `  4` `pt_add_by` : `character varying` NULL
  - `  5` `pt_add_date` : `timestamp without time zone` NULL
  - `  6` `pt_upd_by` : `character varying` NULL
  - `  7` `pt_upd_date` : `timestamp without time zone` NULL
  - `  8` `pt_id` : `bigint` NOT NULL
  - `  9` `pt_code` : `character varying` NULL
  - ` 10` `pt_desc1` : `character varying` NULL
  - ` 11` `pt_desc2` : `character varying` NULL
  - ` 12` `pt_pl_id` : `integer` NOT NULL
  - ` 13` `pt_um` : `integer` NOT NULL
  - ` 14` `pt_its_id` : `integer` NOT NULL
  - ` 15` `pt_type` : `character` NULL
  - ` 16` `pt_cost_method` : `character` NULL
  - ` 17` `pt_loc_type` : `integer` NOT NULL
  - ` 18` `pt_po_is` : `integer` NOT NULL
  - ` 19` `pt_group` : `integer` NOT NULL
  - ` 20` `pt_taxable` : `character` NOT NULL
  - ` 21` `pt_pm_code` : `character` NULL
  - ` 22` `pt_ls` : `character` NULL
  - ` 23` `pt_sfty_stk` : `numeric` NULL
  - ` 24` `pt_rop` : `numeric` NULL
  - ` 25` `pt_ord_min` : `numeric` NULL
  - ` 26` `pt_ord_max` : `numeric` NULL
  - ` 27` `pt_cost` : `numeric` NULL
  - ` 28` `pt_price` : `numeric` NULL
  - ` 29` `pt_dt` : `timestamp without time zone` NULL
  - ` 30` `pt_loc_id` : `integer` NOT NULL
  - ` 31` `pt_syslog_code` : `character varying` NULL
  - ` 32` `pt_class` : `character` NULL
  - ` 33` `pt_writer_id` : `integer` NULL
  - ` 34` `pt_eng_id` : `integer` NULL
  - ` 35` `pt_ppn_type` : `character` NULL
  - ` 36` `pt_tax_class` : `integer` NULL
  - ` 37` `pt_si_id` : `integer` NOT NULL
  - ` 38` `pt_tax_inc` : `character` NULL
  - ` 39` `pt_approval_status` : `character` NULL
  - ` 40` `pt_isbn` : `character varying` NULL
  - ` 41` `pt_phantom` : `character` NULL
  - ` 42` `pt_ro_id` : `integer` NULL
  - ` 43` `pt_class_id` : `integer` NOT NULL
  - ` 44` `pt_size` : `character varying` NULL
  - ` 45` `pt_page_cover` : `integer` NULL
  - ` 46` `pt_page_content` : `integer` NULL
  - ` 47` `pt_colour_cover` : `character varying` NULL
  - ` 48` `pt_colour_content` : `character varying` NULL
  - ` 49` `pt_material_cover` : `character varying` NULL
  - ` 50` `pt_material_content` : `character varying` NULL
  - ` 51` `pt_bookbinding` : `character varying` NULL
  - ` 52` `pt_finishing` : `character varying` NULL
  - ` 53` `pt_packing` : `character varying` NULL
  - ` 54` `pt_remarks` : `character varying` NULL
  - ` 55` `pt_gramatur` : `numeric` NULL
  - ` 56` `pt_active` : `character` NULL
  - ` 57` `pt_disc_type` : `integer` NULL
  - ` 58` `pt_buy_desc1` : `character varying` NULL
  - ` 59` `pt_buy_desc2` : `character varying` NULL
  - ` 60` `pt_hide_picklist` : `character` NULL
  - ` 61` `pt_is_active` : `character` NULL
  - ` 62` `pt_print` : `integer` NULL
  - ` 63` `pt_thick` : `integer` NULL
  - ` 64` `pt_print_date` : `date` NULL
  - ` 65` `pt_ladder_id` : `integer` NULL
  - ` 66` `pt_print_status_id` : `integer` NULL
  - ` 67` `pt_decree_code` : `character varying` NULL
  - ` 68` `pt_noi` : `integer` NULL
  - ` 69` `pt_page_fc` : `integer` NULL
  - ` 70` `pt_print_run` : `integer` NULL
  - ` 71` `pt_vel` : `integer` NULL
  - ` 72` `pt_deadline` : `date` NULL
  - ` 73` `pt_division` : `character varying` NULL
  - ` 74` `pt_results` : `character varying` NULL
  - ` 75` `pt_receipt_date` : `date` NULL
  - ` 76` `pt_editor` : `character varying` NULL
  - ` 77` `pt_designer` : `character varying` NULL
  - ` 78` `pt_illustrator` : `character varying` NULL
  - ` 79` `pt_layouter` : `character varying` NULL
  - ` 80` `pt_printed_material` : `character varying` NULL
  - ` 81` `pt_cooperation` : `character varying` NULL
  - ` 82` `pt_picture` : `character varying` NULL
  - ` 83` `pt_tonnage` : `numeric` NULL
  - ` 84` `pt_is_scale` : `character` NULL
  - ` 85` `pt_min_stk` : `numeric` NULL
  - ` 86` `pt_is_price_basic` : `character` NULL
  - ` 87` `pt_last_movement` : `timestamp without time zone` NULL
  - ` 88` `pt_code_tax` : `character varying` NULL

### `public.pt_raw_temp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid_temp` : `integer` NULL
  - `  2` `ps_par_temp` : `character varying` NULL
  - `  3` `ps_desc_temp` : `character varying` NULL
  - `  4` `ps_use_bom_temp` : `character` NULL
  - `  5` `ps_pt_bom_id_desc_temp` : `integer` NULL
  - `  6` `pt_bom_desc_temp` : `character varying` NULL
  - `  7` `ps_quan_temp` : `numeric` NULL
  - `  8` `pt_bom_code_temp` : `character varying` NULL

### `public.ptm_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptm_oid` : `uuid` NOT NULL
  - `  2` `ptm_dom_id` : `smallint` NOT NULL
  - `  3` `ptm_en_id` : `integer` NOT NULL
  - `  4` `ptm_branch_id` : `integer` NOT NULL
  - `  5` `ptm_add_by` : `character varying` NULL
  - `  6` `ptm_add_date` : `timestamp without time zone` NULL
  - `  7` `ptm_upd_by` : `character varying` NULL
  - `  8` `ptm_upd_date` : `timestamp without time zone` NULL
  - `  9` `ptm_dt` : `timestamp without time zone` NULL
  - ` 10` `ptm_remarks` : `character varying` NULL
  - ` 11` `ptm_code` : `character varying` NOT NULL
  - ` 12` `ptm_date` : `date` NULL

### `public.ptmd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptmd_oid` : `uuid` NOT NULL
  - `  2` `ptmd_ptm_oid` : `uuid` NOT NULL
  - `  3` `ptmd_pt_id_from` : `integer` NOT NULL
  - `  4` `ptmd_loc_id_from` : `integer` NOT NULL
  - `  5` `ptmd_pt_id_to` : `integer` NOT NULL
  - `  6` `ptmd_loc_id_to` : `integer` NOT NULL
  - `  7` `ptmd_qty` : `numeric` NULL
  - `  8` `ptmd_remarks` : `character varying` NULL

### `public.ptmds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptmds_oid` : `uuid` NOT NULL
  - `  2` `ptmds_ptmd_oid` : `uuid` NOT NULL
  - `  3` `ptmds_loc_id_from` : `integer` NOT NULL
  - `  4` `ptmds_loc_id_to` : `integer` NOT NULL
  - `  5` `ptmds_lot_serial_from` : `character varying` NULL
  - `  6` `ptmds_lot_serial_to` : `character varying` NULL
  - `  7` `ptmds_qty` : `numeric` NULL
  - `  8` `ptmds_exp_date` : `date` NULL

### `public.ptnr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnr_oid` : `uuid` NOT NULL
  - `  2` `ptnr_dom_id` : `smallint` NULL
  - `  3` `ptnr_en_id` : `integer` NULL
  - `  4` `ptnr_add_by` : `character varying` NULL
  - `  5` `ptnr_add_date` : `timestamp without time zone` NULL
  - `  6` `ptnr_upd_by` : `character varying` NULL
  - `  7` `ptnr_upd_date` : `timestamp without time zone` NULL
  - `  8` `ptnr_id` : `integer` NULL
  - `  9` `ptnr_code` : `character varying` NULL
  - ` 10` `ptnr_name` : `character varying` NULL
  - ` 11` `ptnr_ptnrg_id` : `integer` NULL
  - ` 12` `ptnr_url` : `character varying` NULL
  - ` 13` `ptnr_remarks` : `character varying` NULL
  - ` 14` `ptnr_parent` : `integer` NULL
  - ` 15` `ptnr_is_cust` : `character` NULL
  - ` 16` `ptnr_is_vend` : `character` NULL
  - ` 17` `ptnr_active` : `character` NULL
  - ` 18` `ptnr_dt` : `timestamp without time zone` NULL
  - ` 19` `ptnr_ac_ar_id` : `integer` NOT NULL
  - ` 20` `ptnr_sb_ar_id` : `integer` NOT NULL
  - ` 21` `ptnr_cc_ar_id` : `integer` NOT NULL
  - ` 22` `ptnr_ac_ap_id` : `integer` NOT NULL
  - ` 23` `ptnr_sb_ap_id` : `integer` NOT NULL
  - ` 24` `ptnr_cc_ap_id` : `integer` NOT NULL
  - ` 25` `ptnr_cu_id` : `integer` NOT NULL
  - ` 26` `ptnr_limit_credit` : `numeric` NULL
  - ` 27` `ptnr_is_member` : `character` NULL
  - ` 28` `ptnr_prepaid_balance` : `numeric` NULL
  - ` 29` `ptnr_is_emp` : `character` NULL
  - ` 30` `ptnr_npwp` : `character varying` NULL
  - ` 31` `ptnr_nppkp` : `character varying` NULL
  - ` 32` `ptnr_is_writer` : `character` NULL
  - ` 33` `ptnr_transaction_code_id` : `integer` NULL
  - ` 34` `ptnr_email` : `character varying` NULL
  - ` 35` `ptnr_address_tax` : `character varying` NULL
  - ` 36` `ptnr_contact_tax` : `character varying` NULL
  - ` 37` `ptnr_name_alt` : `character varying` NULL
  - ` 38` `ptnr_institution_id` : `integer` NOT NULL
  - ` 39` `ptnr_branch_id` : `integer` NOT NULL
  - ` 40` `ptnr_type_id` : `integer` NULL
  - ` 41` `ptnr_root` : `character` NULL
  - ` 42` `ptnr_credit_terms_id` : `integer` NOT NULL
  - ` 43` `ptnr_sales_id` : `integer` NOT NULL
  - ` 44` `ptnr_taxable` : `character` NULL
  - ` 45` `ptnr_tax_class` : `integer` NOT NULL
  - ` 46` `ptnr_tax_include` : `character` NULL
  - ` 47` `ptnr_tax_code` : `character varying` NULL
  - ` 48` `ptnr_sales_fee` : `numeric` NULL
  - ` 49` `ptnr_blacklist` : `character` NULL
  - ` 50` `ptnr_pph21` : `numeric` NULL
  - ` 51` `ptnr_address_tax2` : `character varying` NULL
  - ` 52` `ptnr_sosmed_code` : `character varying` NULL
  - ` 53` `ptnr_logo` : `character varying` NULL
  - ` 54` `ptnr_country_id` : `integer` NULL
  - ` 55` `ptnr_ppn_type` : `character` NULL
  - ` 56` `ptnr_rn_count` : `integer` NULL
  - ` 57` `ptnr_so_group_id` : `integer` NOT NULL
  - ` 58` `ptnr_is_bonded` : `character` NULL
  - ` 59` `ptnr_bonded_date` : `date` NULL
  - ` 60` `ptnr_remarks2` : `character varying` NULL
  - ` 61` `ptnr_bk_id` : `integer` NOT NULL
  - ` 62` `ptnr_cl_ar_count` : `smallint` NOT NULL
  - ` 63` `ptnr_cust_id_type` : `character varying` NULL
  - ` 64` `ptnr_id_tku` : `character varying` NULL
  - ` 65` `ptnr_codes_setting` : `integer` NULL
  - ` 66` `ptnr_coretax_support_doc` : `character` NULL

### `public.ptnra_addr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnra_oid` : `uuid` NOT NULL
  - `  2` `ptnra_id` : `integer` NULL
  - `  3` `ptnra_dom_id` : `smallint` NULL
  - `  4` `ptnra_en_id` : `integer` NULL
  - `  5` `ptnra_add_by` : `character varying` NULL
  - `  6` `ptnra_add_date` : `timestamp without time zone` NULL
  - `  7` `ptnra_upd_by` : `character varying` NULL
  - `  8` `ptnra_upd_date` : `timestamp without time zone` NULL
  - `  9` `ptnra_line` : `integer` NULL
  - ` 10` `ptnra_line_1` : `character varying` NULL
  - ` 11` `ptnra_line_2` : `character varying` NULL
  - ` 12` `ptnra_line_3` : `character varying` NULL
  - ` 13` `ptnra_phone_1` : `character varying` NULL
  - ` 14` `ptnra_phone_2` : `character varying` NULL
  - ` 15` `ptnra_fax_1` : `character varying` NULL
  - ` 16` `ptnra_fax_2` : `character varying` NULL
  - ` 17` `ptnra_zip` : `character varying` NULL
  - ` 18` `ptnra_ptnr_oid` : `uuid` NULL
  - ` 19` `ptnra_addr_type` : `integer` NULL
  - ` 20` `ptnra_comment` : `character varying` NULL
  - ` 21` `ptnra_active` : `character` NULL
  - ` 22` `ptnra_dt` : `timestamp without time zone` NULL
  - ` 23` `ptnra_is_default` : `character` NULL
  - ` 24` `ptnra_is_so` : `character` NULL
  - ` 25` `ptnra_is_ar` : `character` NULL
  - ` 26` `ptnra_seq` : `integer` NOT NULL

### `public.ptnrac_cntc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrac_oid` : `uuid` NOT NULL
  - `  2` `addrc_ptnra_oid` : `uuid` NULL
  - `  3` `ptnrac_add_by` : `character varying` NULL
  - `  4` `ptnrac_add_date` : `timestamp without time zone` NULL
  - `  5` `ptnrac_seq` : `smallint` NOT NULL
  - `  6` `ptnrac_function` : `integer` NULL
  - `  7` `ptnrac_contact_name` : `character varying` NULL
  - `  8` `ptnrac_phone_1` : `character varying` NULL
  - `  9` `ptnrac_phone_2` : `character varying` NULL
  - ` 10` `ptnrac_email` : `character varying` NULL
  - ` 11` `ptnrac_dt` : `timestamp without time zone` NULL
  - ` 12` `ptnrac_upd_by` : `character varying` NULL
  - ` 13` `ptnrac_upd_date` : `timestamp without time zone` NULL

### `public.ptnrb_bank`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrb_oid` : `uuid` NOT NULL
  - `  2` `ptnrb_add_by` : `character varying` NULL
  - `  3` `ptnrb_add_date` : `timestamp without time zone` NULL
  - `  4` `ptnrb_upd_by` : `character varying` NULL
  - `  5` `ptnrb_upd_date` : `timestamp without time zone` NULL
  - `  6` `ptnrb_ptnr_oid` : `uuid` NULL
  - `  7` `ptnrb_seq` : `smallint` NULL
  - `  8` `ptnrb_bk_id` : `integer` NULL
  - `  9` `ptnrb_bank_addr_1` : `character varying` NULL
  - ` 10` `ptnrb_bank_addr_2` : `character varying` NULL
  - ` 11` `ptnrb_bank_addr_3` : `character varying` NULL
  - ` 12` `ptnrb_bank_city` : `character varying` NULL
  - ` 13` `ptnrb_bank_provice` : `character varying` NULL
  - ` 14` `ptnrb_bank_country` : `character varying` NULL
  - ` 15` `ptnrb_bank_code` : `character varying` NULL
  - ` 16` `ptnrb_rek_nbr` : `character varying` NULL
  - ` 17` `ptnrb_vnd_address_def` : `character varying` NULL
  - ` 18` `ptnrb_dt` : `timestamp without time zone` NULL

### `public.ptnrbl_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrbl_oid` : `uuid` NOT NULL
  - `  2` `ptnrbl_dom_id` : `smallint` NULL
  - `  3` `ptnrbl_en_id` : `integer` NULL
  - `  4` `ptnrbl_branch_id` : `integer` NULL
  - `  5` `ptnrbl_add_by` : `character varying` NULL
  - `  6` `ptnrbl_add_date` : `timestamp without time zone` NULL
  - `  7` `ptnrbl_upd_by` : `character varying` NULL
  - `  8` `ptnrbl_upd_date` : `timestamp without time zone` NULL
  - `  9` `ptnrbl_code` : `character varying` NULL
  - ` 10` `ptnrbl_date` : `date` NULL
  - ` 11` `ptnrbl_ptnr_id` : `integer` NOT NULL
  - ` 12` `ptnrbl_blacklist_before` : `character` NULL
  - ` 13` `ptnrbl_blacklist_now` : `character` NULL
  - ` 14` `ptnrbl_remarks` : `character varying` NULL
  - ` 15` `ptnrbl_dt` : `timestamp without time zone` NULL

### `public.ptnrcl_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrcl_oid` : `uuid` NOT NULL
  - `  2` `ptnrcl_dom_id` : `smallint` NULL
  - `  3` `ptnrcl_en_id` : `integer` NULL
  - `  4` `ptnrcl_branch_id` : `integer` NULL
  - `  5` `ptnrcl_add_by` : `character varying` NULL
  - `  6` `ptnrcl_add_date` : `timestamp without time zone` NULL
  - `  7` `ptnrcl_upd_by` : `character varying` NULL
  - `  8` `ptnrcl_upd_date` : `timestamp without time zone` NULL
  - `  9` `ptnrcl_code` : `character varying` NULL
  - ` 10` `ptnrcl_date` : `date` NULL
  - ` 11` `ptnrcl_ptnr_id` : `integer` NOT NULL
  - ` 12` `ptnrcl_value_before` : `numeric` NULL
  - ` 13` `ptnrcl_value_now` : `numeric` NULL
  - ` 14` `ptnrcl_remarks` : `character varying` NULL
  - ` 15` `ptnrcl_dt` : `timestamp without time zone` NULL
  - ` 16` `ptnrcl_tran_id` : `integer` NULL
  - ` 17` `ptnrcl_trans_id` : `character` NULL
  - ` 18` `ptnrcl_remarks_cl` : `character varying` NULL

### `public.ptnrclar_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrclar_oid` : `uuid` NOT NULL
  - `  2` `ptnrclar_dom_id` : `smallint` NULL
  - `  3` `ptnrclar_en_id` : `integer` NULL
  - `  4` `ptnrclar_branch_id` : `integer` NULL
  - `  5` `ptnrclar_add_by` : `character varying` NULL
  - `  6` `ptnrclar_add_date` : `timestamp without time zone` NULL
  - `  7` `ptnrclar_upd_by` : `character varying` NULL
  - `  8` `ptnrclar_upd_date` : `timestamp without time zone` NULL
  - `  9` `ptnrclar_dt` : `timestamp without time zone` NULL
  - ` 10` `ptnrclar_code` : `character varying` NULL
  - ` 11` `ptnrclar_date` : `date` NULL
  - ` 12` `ptnrclar_ptnr_id` : `integer` NULL
  - ` 13` `ptnrclar_so_oid` : `uuid` NULL
  - ` 14` `ptnrclar_status` : `character` NULL
  - ` 15` `ptnrclar_remarks` : `character varying` NULL

### `public.ptnrcls_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrcls_oid` : `uuid` NOT NULL
  - `  2` `ptnrcls_dom_id` : `smallint` NULL
  - `  3` `ptnrcls_en_id` : `integer` NULL
  - `  4` `ptnrcls_branch_id` : `integer` NULL
  - `  5` `ptnrcls_add_by` : `character varying` NULL
  - `  6` `ptnrcls_add_date` : `timestamp without time zone` NULL
  - `  7` `ptnrcls_upd_by` : `character varying` NULL
  - `  8` `ptnrcls_upd_date` : `timestamp without time zone` NULL
  - `  9` `ptnrcls_code` : `character varying` NULL
  - ` 10` `ptnrcls_date` : `date` NULL
  - ` 11` `ptnrcls_ptnr_id` : `integer` NOT NULL
  - ` 12` `ptnrcls_value_before` : `numeric` NULL
  - ` 13` `ptnrcls_value_now` : `numeric` NULL
  - ` 14` `ptnrcls_remarks` : `character varying` NULL
  - ` 15` `ptnrcls_dt` : `timestamp without time zone` NULL

### `public.ptnrd_driver`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrd_oid` : `uuid` NOT NULL
  - `  2` `ptnrd_ptnr_oid` : `uuid` NULL
  - `  3` `ptnrd_add_by` : `character varying` NULL
  - `  4` `ptnrd_add_date` : `timestamp without time zone` NULL
  - `  5` `ptnrd_upd_by` : `character varying` NULL
  - `  6` `ptnrd_upd_date` : `timestamp without time zone` NULL
  - `  7` `ptnrd_dt` : `timestamp without time zone` NULL
  - `  8` `ptnrd_name` : `integer` NULL
  - `  9` `ptnrd_phone` : `character varying` NULL
  - ` 10` `ptnrd_active` : `character` NULL
  - ` 11` `ptnrd_default` : `character` NULL

### `public.ptnrg_grp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrg_oid` : `uuid` NOT NULL
  - `  2` `ptnrg_dom_id` : `smallint` NOT NULL
  - `  3` `ptnrg_en_id` : `integer` NULL
  - `  4` `ptnrg_id` : `integer` NULL
  - `  5` `ptnrg_add_by` : `character varying` NULL
  - `  6` `ptnrg_add_date` : `timestamp without time zone` NULL
  - `  7` `ptnrg_upd_by` : `character varying` NULL
  - `  8` `ptnrg_upd_date` : `timestamp without time zone` NULL
  - `  9` `ptnrg_code` : `character varying` NULL
  - ` 10` `ptnrg_name` : `character varying` NULL
  - ` 11` `ptnrg_desc` : `character varying` NULL
  - ` 12` `ptnrg_active` : `character` NULL
  - ` 13` `ptnrg_dt` : `timestamp without time zone` NULL
  - ` 14` `ptnrg_is_sales` : `character` NULL
  - ` 15` `ptnrg_branch_id` : `integer` NULL

### `public.ptnrs_sales`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrs_oid` : `uuid` NOT NULL
  - `  2` `ptnrs_add_by` : `character varying` NULL
  - `  3` `ptnrs_add_date` : `timestamp without time zone` NULL
  - `  4` `ptnrs_upd_by` : `character varying` NULL
  - `  5` `ptnrs_upd_date` : `timestamp without time zone` NULL
  - `  6` `ptnrs_id` : `integer` NULL
  - `  7` `ptnrs_ptnr_oid` : `uuid` NULL
  - `  8` `ptnrs_code` : `character varying` NULL
  - `  9` `ptnrs_name` : `character varying` NULL
  - ` 10` `ptnrs_remarks` : `character varying` NULL
  - ` 11` `ptnrs_active` : `character` NULL
  - ` 12` `ptnrs_dt` : `timestamp without time zone` NULL

### `public.ptnrv_vehicle`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptnrv_oid` : `uuid` NOT NULL
  - `  2` `ptnrv_ptnr_oid` : `uuid` NOT NULL
  - `  3` `ptnrv_add_by` : `character varying` NULL
  - `  4` `ptnrv_add_date` : `timestamp without time zone` NULL
  - `  5` `ptnrv_upd_by` : `character varying` NULL
  - `  6` `ptnrv_upd_date` : `timestamp without time zone` NULL
  - `  7` `ptnrv_dt` : `timestamp without time zone` NULL
  - `  8` `ptnrv_number` : `character varying` NULL
  - `  9` `ptnrv_name` : `character varying` NULL
  - ` 10` `ptnrv_active` : `character` NULL
  - ` 11` `ptnrv_default` : `character` NULL

### `public.pts_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pts_oid` : `uuid` NOT NULL
  - `  2` `pts_dom_id` : `smallint` NULL
  - `  3` `pts_en_id` : `integer` NULL
  - `  4` `pts_add_by` : `character varying` NULL
  - `  5` `pts_add_date` : `timestamp without time zone` NULL
  - `  6` `pts_upd_by` : `character varying` NULL
  - `  7` `pts_upd_date` : `timestamp without time zone` NULL
  - `  8` `pts_ps_id` : `bigint` NULL
  - `  9` `pts_pt_id` : `bigint` NULL
  - ` 10` `pts_pt_sub_id` : `bigint` NULL
  - ` 11` `pts_qty` : `numeric` NULL
  - ` 12` `pts_desc` : `character varying` NULL
  - ` 13` `pts_active` : `character` NOT NULL
  - ` 14` `pts_dt` : `timestamp without time zone` NULL

### `public.ptsfr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptsfr_oid` : `uuid` NOT NULL
  - `  2` `ptsfr_dom_id` : `smallint` NULL
  - `  3` `ptsfr_en_id` : `integer` NULL
  - `  4` `ptsfr_add_by` : `character varying` NULL
  - `  5` `ptsfr_add_date` : `timestamp without time zone` NULL
  - `  6` `ptsfr_upd_by` : `character varying` NULL
  - `  7` `ptsfr_upd_date` : `timestamp without time zone` NULL
  - `  8` `ptsfr_en_to_id` : `integer` NULL
  - `  9` `ptsfr_code` : `character varying` NULL
  - ` 10` `ptsfr_date` : `date` NULL
  - ` 11` `ptsfr_receive_date` : `date` NULL
  - ` 12` `ptsfr_si_id` : `integer` NULL
  - ` 13` `ptsfr_loc_id` : `integer` NULL
  - ` 14` `ptsfr_loc_git` : `integer` NULL
  - ` 15` `ptsfr_remarks` : `character varying` NULL
  - ` 16` `ptsfr_trans_id` : `character` NULL
  - ` 17` `ptsfr_dt` : `timestamp without time zone` NULL
  - ` 18` `ptsfr_loc_to_id` : `integer` NULL
  - ` 19` `ptsfr_si_to_id` : `integer` NULL
  - ` 20` `ptsfr_pb_oid` : `uuid` NULL
  - ` 21` `ptsfr_so_oid` : `uuid` NULL
  - ` 22` `pt_tax_class` : `character` NULL
  - ` 23` `ptsfr_tran_id` : `integer` NOT NULL
  - ` 24` `ptsfr_vehicle_no` : `character varying` NULL
  - ` 25` `ptsfr_driver_name` : `character varying` NULL
  - ` 26` `ptsfr_driver_hp` : `character varying` NULL
  - ` 27` `ptsfr_ptnr_id` : `integer` NULL
  - ` 28` `ptsfr_path_logo` : `character varying` NULL
  - ` 29` `ptsfr_branch_id` : `integer` NOT NULL
  - ` 30` `ptsfr_branch_to_id` : `integer` NOT NULL
  - ` 31` `ptsfr_cust_id` : `integer` NULL
  - ` 32` `ptsfr_pi_id` : `integer` NULL
  - ` 33` `ptsfr_cu_id` : `integer` NULL
  - ` 34` `ptsfr_taxable` : `character` NULL
  - ` 35` `ptsfr_tax_inc` : `character` NULL
  - ` 36` `ptsfr_tax_class` : `integer` NULL
  - ` 37` `ptsfr_type` : `character` NULL
  - ` 38` `ptsfr_total` : `numeric` NULL
  - ` 39` `ptsfr_total_ppn` : `numeric` NULL
  - ` 40` `ptsfr_total_pph` : `numeric` NULL
  - ` 41` `ptsfr_use_git` : `character` NULL
  - ` 42` `ptsfr_type_id` : `integer` NULL
  - ` 43` `ptsfr_print_status` : `character` NULL
  - ` 44` `ptsfr_print_date` : `timestamp without time zone` NULL
  - ` 45` `ptsfr_print_count` : `integer` NULL
  - ` 46` `ptsfr_remarks_close` : `character varying` NULL
  - ` 47` `ptsfr_remarks_cl` : `character varying` NULL
  - ` 48` `ptsfr_sales_person` : `integer` NULL
  - ` 49` `ptsfr_delivery_status` : `character` NULL
  - ` 50` `ptsfr_is_avg` : `character` NULL

### `public.ptsfrd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptsfrd_oid` : `uuid` NOT NULL
  - `  2` `ptsfrd_ptsfr_oid` : `uuid` NULL
  - `  3` `ptsfrd_seq` : `smallint` NULL
  - `  4` `ptsfrd_pt_id` : `bigint` NULL
  - `  5` `ptsfrd_qty` : `numeric` NULL
  - `  6` `ptsfrd_qty_receive` : `numeric` NULL
  - `  7` `ptsfrd_um` : `integer` NULL
  - `  8` `ptsfrd_si_to_id` : `integer` NULL
  - `  9` `ptsfrd_loc_to_id` : `integer` NOT NULL
  - ` 10` `ptsfrd_cost` : `numeric` NULL
  - ` 11` `ptsfrd_dt` : `timestamp without time zone` NULL
  - ` 12` `ptsfrd_pbd_oid` : `uuid` NULL
  - ` 13` `ptsfrd_sod_oid` : `uuid` NULL
  - ` 14` `ptsfrd_gramatur` : `numeric` NULL
  - ` 15` `ptsfrd_standard_koli` : `numeric` NULL
  - ` 16` `ptsfrd_koli` : `numeric` NULL
  - ` 17` `ptsfrd_eceran` : `numeric` NULL
  - ` 18` `ptsfrd_total_tonase` : `numeric` NULL
  - ` 19` `ptsfrd_remark` : `character varying` NULL
  - ` 20` `ptsfrd_qty_return_cons` : `numeric` NULL
  - ` 21` `ptsfrd_qty_packaging` : `numeric` NULL
  - ` 22` `ptsfrd_packaging_id` : `integer` NOT NULL
  - ` 23` `ptsfrd_loc_id` : `integer` NOT NULL
  - ` 24` `ptsfrd_lot_serial` : `character varying` NULL
  - ` 25` `ptsfrd_um_conv` : `numeric` NULL
  - ` 26` `ptsfrd_qty_real` : `numeric` NULL
  - ` 27` `ptsfrd_price` : `numeric` NULL
  - ` 28` `ptsfrd_disc` : `numeric` NULL
  - ` 29` `ptsfrd_disc1` : `numeric` NULL
  - ` 30` `ptsfrd_disc2` : `numeric` NULL
  - ` 31` `ptsfrd_ppn` : `numeric` NULL
  - ` 32` `ptsfrd_pph` : `numeric` NULL
  - ` 33` `ptsfrd_price_line` : `numeric` NULL
  - ` 34` `ptsfrd_disc_amount` : `numeric` NULL
  - ` 35` `ptsfrd_taxable` : `character` NULL
  - ` 36` `ptsfrd_tax_inc` : `character` NULL
  - ` 37` `ptsfrd_tax_class` : `integer` NULL
  - ` 38` `ptsfrd_remarks` : `character varying` NULL
  - ` 39` `ptsfrd_qty_delivery` : `numeric` NULL
  - ` 40` `ptsfrd_qty_packaging_delivery` : `numeric` NULL
  - ` 41` `ptsfrd_cogs_tl_m` : `numeric` NULL
  - ` 42` `ptsfrd_cogs_tl_l` : `numeric` NULL
  - ` 43` `ptsfrd_cogs_tl_b` : `numeric` NULL
  - ` 44` `ptsfrd_cogs_tl_o` : `numeric` NULL
  - ` 45` `ptsfrd_cogs_tl_s` : `numeric` NULL
  - ` 46` `ptsfrd_cogs_ll_m` : `numeric` NULL
  - ` 47` `ptsfrd_cogs_ll_l` : `numeric` NULL
  - ` 48` `ptsfrd_cogs_ll_b` : `numeric` NULL
  - ` 49` `ptsfrd_cogs_ll_o` : `numeric` NULL
  - ` 50` `ptsfrd_cogs_ll_s` : `numeric` NULL

### `public.ptsfrds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptsfrds_oid` : `uuid` NOT NULL
  - `  2` `ptsfrds_ptsfrd_oid` : `uuid` NULL
  - `  3` `ptsfrds_qty` : `numeric` NULL
  - `  4` `ptsfrds_qty_receive` : `numeric` NULL
  - `  5` `ptsfrds_si_id` : `integer` NULL
  - `  6` `ptsfrds_loc_id` : `integer` NULL
  - `  7` `ptsfrds_lot_serial` : `character varying` NULL
  - `  8` `ptsfrds_dt` : `timestamp without time zone` NULL
  - `  9` `ptsfrds_qty_return_cons` : `numeric` NULL
  - ` 10` `ptsfrds_qty_packaging` : `numeric` NULL
  - ` 11` `ptsfrds_loc_to_id` : `integer` NULL
  - ` 12` `ptsfrds_qty_packaging_delivery` : `numeric` NULL
  - ` 13` `ptsfrds_qty_delivery` : `numeric` NULL
  - ` 14` `ptsfrds_exp_date` : `date` NULL

### `public.ptsp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ptsp_oid` : `uuid` NULL
  - `  2` `ptsp_dom_id` : `smallint` NULL
  - `  3` `ptsp_en_id` : `integer` NULL
  - `  4` `ptsp_add_by` : `character varying` NULL
  - `  5` `ptsp_add_date` : `timestamp without time zone` NULL
  - `  6` `ptsp_upd_by` : `character varying` NULL
  - `  7` `ptsp_upd_date` : `timestamp without time zone` NULL
  - `  8` `ptsp_pt_oid` : `uuid` NULL
  - `  9` `ptsp_contract_code` : `character varying` NULL
  - ` 10` `ptsp_royalti` : `numeric` NULL
  - ` 11` `ptsp_jenis_buku` : `character varying` NULL
  - ` 12` `ptsp_judul` : `character varying` NULL
  - ` 13` `ptsp_judul_asli` : `character varying` NULL
  - ` 14` `ptsp_subjudul` : `character varying` NULL
  - ` 15` `ptsp_penulis` : `character varying` NULL
  - ` 16` `ptsp_penerjemah` : `character varying` NULL
  - ` 17` `ptsp_editor` : `character varying` NULL
  - ` 18` `ptsp_isbn` : `character varying` NULL
  - ` 19` `ptsp_cover_preview` : `character varying` NULL
  - ` 20` `ptsp_cover` : `character varying` NULL
  - ` 21` `ptsp_cetak_isi` : `character varying` NULL
  - ` 22` `ptsp_tgl_terbit` : `date` NULL
  - ` 23` `ptsp_dt` : `timestamp without time zone` NULL

### `public.qc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `qc_oid` : `uuid` NOT NULL
  - `  2` `qc_dom_id` : `smallint` NULL
  - `  3` `qc_en_id` : `integer` NULL
  - `  4` `qc_add_by` : `character varying` NULL
  - `  5` `qc_add_date` : `timestamp without time zone` NULL
  - `  6` `qc_upd_by` : `character varying` NULL
  - `  7` `qc_upd_date` : `timestamp without time zone` NULL
  - `  8` `qc_code` : `character varying` NULL
  - `  9` `qc_date` : `date` NULL
  - ` 10` `qc_ref_oid` : `uuid` NULL
  - ` 11` `qc_dt` : `timestamp without time zone` NULL
  - ` 12` `qc_execute` : `character` NULL
  - ` 13` `qc_send_loc_id` : `integer` NULL
  - ` 14` `qc_eff_date` : `date` NULL
  - ` 15` `qc_ref_option` : `character` NULL
  - ` 16` `qc_send_si_id` : `integer` NULL
  - ` 17` `qc_pass_si_id` : `integer` NULL
  - ` 18` `qc_pass_loc_id` : `integer` NULL
  - ` 19` `qc_remarks` : `character varying` NULL
  - ` 20` `qc_branch_id` : `integer` NULL
  - ` 21` `qc_ac_id` : `integer` NULL
  - ` 22` `qc_print_status` : `character` NULL
  - ` 23` `qc_print_date` : `timestamp without time zone` NULL
  - ` 24` `qc_print_count` : `integer` NULL

### `public.qcd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `qcd_oid` : `uuid` NOT NULL
  - `  2` `qcd_qc_oid` : `uuid` NULL
  - `  3` `qcd_ref_oid` : `uuid` NULL
  - `  4` `qcd_qty` : `numeric` NULL
  - `  5` `qcd_um` : `integer` NULL
  - `  6` `qcd_qty_pass` : `numeric` NULL
  - `  7` `qcd_qty_reject` : `numeric` NULL
  - `  8` `qcd_dt` : `timestamp without time zone` NULL
  - `  9` `qcd_pt_id` : `integer` NULL
  - ` 10` `qcd_bef_loc_id` : `integer` NULL
  - ` 11` `qcd_bef_si_id` : `integer` NULL
  - ` 12` `qcd_rea_code_id` : `integer` NULL
  - ` 13` `qcd_pjc_id` : `integer` NULL
  - ` 14` `qcd_cost` : `numeric` NULL
  - ` 15` `qcd_ac_id` : `integer` NULL
  - ` 16` `qcd_reject_loc_id` : `integer` NULL
  - ` 17` `qcd_remarks` : `character varying` NULL
  - ` 18` `qcd_um_conv` : `numeric` NULL
  - ` 19` `qcd_qty_real` : `numeric` NULL
  - ` 20` `qcd_qty_reject_real` : `numeric` NULL

### `public.qcdr_reject`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `qcdr_oid` : `uuid` NOT NULL
  - `  2` `qcdr_qcd_oid` : `uuid` NULL
  - `  3` `qcdr_dt` : `timestamp without time zone` NULL
  - `  4` `qcdr_qty` : `numeric` NULL
  - `  5` `qcdr_rea_code_id` : `integer` NULL
  - `  6` `qcdr_remarks` : `character varying` NULL
  - `  7` `qcdr_um_conv` : `numeric` NULL
  - `  8` `qcdr_qty_real` : `numeric` NULL

### `public.qcds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `qcds_oid` : `uuid` NOT NULL
  - `  2` `qcds_qcd_oid` : `uuid` NULL
  - `  3` `qcds_ref_oid` : `uuid` NULL
  - `  4` `qcds_qty` : `numeric` NULL
  - `  5` `qcds_um` : `integer` NULL
  - `  6` `qcds_lot_serial` : `character varying` NULL
  - `  7` `qcds_dt` : `timestamp without time zone` NULL
  - `  8` `qcds_bef_loc_id` : `integer` NULL
  - `  9` `qcds_bef_si_id` : `integer` NULL
  - ` 10` `qcds_status` : `character` NULL
  - ` 11` `qcds_remarks` : `character varying` NULL
  - ` 12` `qcds_exp_date` : `date` NULL
  - ` 13` `qcds_um_conv` : `numeric` NULL
  - ` 14` `qcds_qty_real` : `numeric` NULL

### `public.rcv_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rcv_oid` : `uuid` NOT NULL
  - `  2` `rcv_dom_id` : `smallint` NULL
  - `  3` `rcv_en_id` : `integer` NULL
  - `  4` `rcv_add_by` : `character varying` NULL
  - `  5` `rcv_add_date` : `timestamp without time zone` NULL
  - `  6` `rcv_upd_by` : `character varying` NULL
  - `  7` `rcv_upd_date` : `timestamp without time zone` NULL
  - `  8` `rcv_code` : `character varying` NULL
  - `  9` `rcv_date` : `date` NULL
  - ` 10` `rcv_eff_date` : `date` NULL
  - ` 11` `rcv_po_oid` : `uuid` NULL
  - ` 12` `rcv_packing_slip` : `character varying` NULL
  - ` 13` `rcv_dt` : `timestamp without time zone` NULL
  - ` 14` `rcv_is_receive` : `character` NULL
  - ` 15` `rcv_ret_replace` : `character` NULL
  - ` 16` `rcv_cu_id` : `integer` NULL
  - ` 17` `rcv_exc_rate` : `numeric` NULL
  - ` 18` `rcv_branch_id` : `integer` NOT NULL
  - ` 19` `rcv_ref_no` : `character varying` NULL
  - ` 20` `rcv_remarks` : `character varying` NULL
  - ` 21` `rcv_print_status` : `character` NULL
  - ` 22` `rcv_print_date` : `timestamp without time zone` NULL
  - ` 23` `rcv_print_count` : `integer` NULL
  - ` 24` `rcv_rcvsc_oid` : `uuid` NULL

### `public.rcvd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rcvd_oid` : `uuid` NOT NULL
  - `  2` `rcvd_rcv_oid` : `uuid` NULL
  - `  3` `rcvd_pod_oid` : `uuid` NULL
  - `  4` `rcvd_qty` : `numeric` NULL
  - `  5` `rcvd_um` : `integer` NULL
  - `  6` `rcvd_packing_qty` : `numeric` NULL
  - `  7` `rcvd_um_conv` : `numeric` NULL
  - `  8` `rcvd_qty_real` : `numeric` NULL
  - `  9` `rcvd_si_id` : `integer` NULL
  - ` 10` `rcvd_loc_id` : `bigint` NULL
  - ` 11` `rcvd_supp_lot` : `character varying` NULL
  - ` 12` `rcvd_dt` : `timestamp without time zone` NULL
  - ` 13` `rcvd_rea_code_id` : `integer` NULL
  - ` 14` `rcvd_qty_inv` : `numeric` NULL
  - ` 15` `rcvd_close_line` : `character` NULL
  - ` 16` `rcvd_qty_qc` : `numeric` NULL
  - ` 17` `rcvd_close_pod` : `character` NULL
  - ` 18` `rcvd_packaging_id` : `integer` NOT NULL
  - ` 19` `rcvd_lot_serial` : `character varying` NULL
  - ` 20` `rcvd_cost` : `numeric` NULL
  - ` 21` `rcvd_disc` : `numeric` NULL
  - ` 22` `rcvd_ppn` : `numeric` NULL
  - ` 23` `rcvd_pph` : `numeric` NULL
  - ` 24` `rcvd_cost_line` : `numeric` NULL
  - ` 25` `rcvd_remarks` : `character varying` NULL

### `public.rcvds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rcvds_oid` : `uuid` NOT NULL
  - `  2` `rcvds_rcvd_oid` : `uuid` NULL
  - `  3` `rcvds_qty` : `numeric` NULL
  - `  4` `rcvds_um` : `integer` NULL
  - `  5` `rcvds_si_id` : `integer` NULL
  - `  6` `rcvds_loc_id` : `bigint` NULL
  - `  7` `rcvds_lot_serial` : `character varying` NULL
  - `  8` `rcvds_dt` : `timestamp without time zone` NULL
  - `  9` `rcvds_exp_date` : `date` NULL
  - ` 10` `rcvds_remarks` : `character varying` NULL

### `public.reconciliation_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `recd_oid` : `uuid` NOT NULL
  - `  2` `recd_dom_id` : `integer` NULL
  - `  3` `recd_en_id` : `integer` NULL
  - `  4` `recd_bk_id` : `integer` NULL
  - `  5` `recd_cu_id` : `integer` NULL
  - `  6` `recd_ex_rate` : `numeric` NULL
  - `  7` `recd_add_by` : `character varying` NULL
  - `  8` `recd_add_date` : `timestamp without time zone` NULL
  - `  9` `recd_upd_by` : `character varying` NULL
  - ` 10` `recd_upd_date` : `timestamp without time zone` NULL
  - ` 11` `recd_amount` : `numeric` NULL
  - ` 12` `recd_date` : `date` NULL
  - ` 13` `recd_reff` : `character varying` NULL
  - ` 14` `recd_remarks` : `character varying` NULL
  - ` 15` `recd_type` : `character varying` NULL
  - ` 16` `recd_ex_rate_ext` : `numeric` NULL
  - ` 17` `recd_code_mstr` : `character varying` NULL

### `public.reconciliation_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `recm_oid` : `uuid` NOT NULL
  - `  2` `recm_code` : `character varying` NULL
  - `  3` `recm_date` : `date` NULL
  - `  4` `recm_add_by` : `character varying` NULL
  - `  5` `recm_add_date` : `timestamp without time zone` NULL
  - `  6` `recm_upd_by` : `character varying` NULL
  - `  7` `recm_upd_date` : `timestamp without time zone` NULL
  - `  8` `recm_beginning` : `numeric` NULL
  - `  9` `recm_changes` : `numeric` NULL
  - ` 10` `recm_ending` : `numeric` NULL
  - ` 11` `recm_start_date` : `date` NULL
  - ` 12` `recm_end_date` : `date` NULL
  - ` 13` `recm_is_beginning` : `character varying` NULL
  - ` 14` `recm_ending_bank` : `numeric` NULL
  - ` 15` `recm_bk_id` : `integer` NULL
  - ` 16` `recm_en_id` : `integer` NULL
  - ` 17` `recm_dom_id` : `integer` NULL
  - ` 18` `recm_remarks` : `character varying` NULL
  - ` 19` `recm_cu_id` : `integer` NULL
  - ` 20` `recm_exc_rate` : `numeric` NULL

### `public.req_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `req_oid` : `uuid` NOT NULL
  - `  2` `req_dom_id` : `smallint` NULL
  - `  3` `req_en_id` : `integer` NULL
  - `  4` `req_upd_date` : `timestamp without time zone` NULL
  - `  5` `req_upd_by` : `character varying` NULL
  - `  6` `req_add_date` : `timestamp without time zone` NULL
  - `  7` `req_add_by` : `character varying` NULL
  - `  8` `req_code` : `character varying` NULL
  - `  9` `req_ptnr_id` : `integer` NULL
  - ` 10` `req_cmaddr_id` : `integer` NULL
  - ` 11` `req_date` : `date` NULL
  - ` 12` `req_need_date` : `date` NULL
  - ` 13` `req_due_date` : `date` NULL
  - ` 14` `req_requested` : `character varying` NULL
  - ` 15` `req_end_user` : `character varying` NULL
  - ` 16` `req_rmks` : `character varying` NULL
  - ` 17` `req_sb_id` : `integer` NULL
  - ` 18` `req_cc_id` : `integer` NULL
  - ` 19` `req_si_id` : `integer` NULL
  - ` 20` `req_type` : `character` NULL
  - ` 21` `req_pjc_id` : `integer` NULL
  - ` 22` `req_close_date` : `date` NULL
  - ` 23` `req_total` : `numeric` NULL
  - ` 24` `req_tran_id` : `integer` NULL
  - ` 25` `req_trans_id` : `character` NULL
  - ` 26` `req_trans_rmks` : `character varying` NULL
  - ` 27` `req_current_route` : `character varying` NULL
  - ` 28` `req_next_route` : `character varying` NULL
  - ` 29` `req_dt` : `timestamp without time zone` NULL
  - ` 30` `req_branch_id` : `integer` NOT NULL
  - ` 31` `req_print_status` : `character` NULL
  - ` 32` `req_print_date` : `timestamp without time zone` NULL
  - ` 33` `req_print_count` : `integer` NULL
  - ` 34` `req_remarks_close` : `character varying` NULL
  - ` 35` `req_remarks_cl` : `character varying` NULL

### `public.reqd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `reqd_oid` : `uuid` NOT NULL
  - `  2` `reqd_dom_id` : `smallint` NULL
  - `  3` `reqd_en_id` : `integer` NULL
  - `  4` `reqd_add_by` : `character varying` NULL
  - `  5` `reqd_add_date` : `timestamp without time zone` NULL
  - `  6` `reqd_upd_by` : `character varying` NULL
  - `  7` `reqd_upd_date` : `timestamp without time zone` NULL
  - `  8` `reqd_req_oid` : `uuid` NULL
  - `  9` `reqd_seq` : `smallint` NULL
  - ` 10` `reqd_related_oid` : `uuid` NULL
  - ` 11` `reqd_ptnr_id` : `integer` NULL
  - ` 12` `reqd_si_id` : `integer` NULL
  - ` 13` `reqd_pt_id` : `bigint` NULL
  - ` 14` `reqd_rmks` : `character varying` NULL
  - ` 15` `reqd_end_user` : `character varying` NULL
  - ` 16` `reqd_qty` : `numeric` NULL
  - ` 17` `reqd_qty_processed` : `numeric` NULL
  - ` 18` `reqd_qty_completed` : `numeric` NULL
  - ` 19` `reqd_um` : `integer` NULL
  - ` 20` `reqd_cost` : `numeric` NULL
  - ` 21` `reqd_disc` : `numeric` NULL
  - ` 22` `reqd_need_date` : `date` NULL
  - ` 23` `reqd_due_date` : `date` NULL
  - ` 24` `reqd_um_conv` : `numeric` NULL
  - ` 25` `reqd_qty_real` : `numeric` NULL
  - ` 26` `reqd_pt_class` : `character` NULL
  - ` 27` `reqd_status` : `character` NULL
  - ` 28` `reqd_dt` : `timestamp without time zone` NULL
  - ` 29` `reqd_related_type` : `character` NULL
  - ` 30` `reqd_pt_desc1` : `character varying` NULL
  - ` 31` `reqd_pt_desc2` : `character varying` NULL
  - ` 32` `reqd_loc_id` : `integer` NULL
  - ` 33` `reqd_boqs_oid` : `uuid` NULL
  - ` 34` `reqd_tonnage` : `numeric` NULL
  - ` 35` `reqd_excess_cost` : `numeric` NULL
  - ` 36` `reqd_other_cost` : `numeric` NULL
  - ` 37` `reqd_emp_id` : `integer` NULL
  - ` 38` `reqd_branch_id` : `integer` NOT NULL
  - ` 39` `reqd_pjc_id` : `integer` NOT NULL

### `public.reqs_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `reqs_oid` : `uuid` NOT NULL
  - `  2` `reqs_dom_id` : `smallint` NULL
  - `  3` `reqs_en_id` : `integer` NULL
  - `  4` `reqs_add_by` : `character varying` NULL
  - `  5` `reqs_add_date` : `timestamp without time zone` NULL
  - `  6` `reqs_upd_by` : `character varying` NULL
  - `  7` `reqs_upd_date` : `timestamp without time zone` NULL
  - `  8` `reqs_code` : `character varying` NULL
  - `  9` `reqs_date` : `date` NULL
  - ` 10` `reqs_req_oid` : `uuid` NULL
  - ` 11` `reqs_en_id_to` : `integer` NULL
  - ` 12` `reqs_loc_id_from` : `bigint` NULL
  - ` 13` `reqs_loc_id_git` : `bigint` NULL
  - ` 14` `reqs_loc_id_to` : `bigint` NULL
  - ` 15` `reqs_trans_id` : `character` NULL
  - ` 16` `reqs_receive_date` : `date` NULL
  - ` 17` `reqs_remarks` : `character varying` NULL
  - ` 18` `reqs_dt` : `timestamp without time zone` NULL
  - ` 19` `reqs_si_id` : `integer` NULL
  - ` 20` `reqs_si_to_id` : `integer` NULL
  - ` 21` `reqs_tran_id` : `integer` NULL
  - ` 22` `reqs_branch_id` : `integer` NULL

### `public.reqsd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `reqds_oid` : `uuid` NOT NULL
  - `  2` `reqds_add_by` : `character varying` NULL
  - `  3` `reqds_add_date` : `timestamp without time zone` NULL
  - `  4` `reqds_upd_by` : `character varying` NULL
  - `  5` `reqds_upd_date` : `timestamp without time zone` NULL
  - `  6` `reqds_reqs_oid` : `uuid` NULL
  - `  7` `reqds_reqd_oid` : `uuid` NULL
  - `  8` `reqds_seq` : `smallint` NULL
  - `  9` `reqds_qty` : `numeric` NULL
  - ` 10` `reqds_um` : `integer` NULL
  - ` 11` `reqds_qty_real` : `numeric` NULL
  - ` 12` `reqds_dt` : `timestamp without time zone` NULL
  - ` 13` `reqds_cost` : `numeric` NULL
  - ` 14` `reqds_emp_id` : `integer` NULL
  - ` 15` `reqds_ass_id` : `integer` NULL
  - ` 16` `reqds_dept_id` : `integer` NULL
  - ` 17` `reqds_rg` : `integer` NULL
  - ` 18` `reqds_loc_id` : `integer` NULL
  - ` 19` `reqds_branch_id` : `integer` NULL

### `public.riu_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `riu_oid` : `uuid` NOT NULL
  - `  2` `riu_dom_id` : `smallint` NOT NULL
  - `  3` `riu_en_id` : `integer` NOT NULL
  - `  4` `riu_add_by` : `character varying` NULL
  - `  5` `riu_add_date` : `timestamp without time zone` NULL
  - `  6` `riu_upd_by` : `character varying` NULL
  - `  7` `riu_upd_date` : `timestamp without time zone` NULL
  - `  8` `riu_type2` : `character varying` NULL
  - `  9` `riu_date` : `date` NULL
  - ` 10` `riu_remarks` : `character varying` NULL
  - ` 11` `riu_dt` : `timestamp without time zone` NULL
  - ` 12` `riu_ref_so_code` : `character varying` NULL
  - ` 13` `riu_ref_so_oid` : `uuid` NULL
  - ` 14` `riu_ref_pb_oid` : `uuid` NULL
  - ` 15` `riu_ref_pb_code` : `character varying` NULL
  - ` 16` `riu_ptnr_id` : `integer` NULL
  - ` 17` `riu_branch_id` : `integer` NOT NULL
  - ` 18` `riu_sales_person` : `integer` NULL
  - ` 19` `riu_type` : `character varying` NULL
  - ` 20` `riu_tran_id` : `integer` NULL
  - ` 21` `riu_trans_id` : `character` NULL
  - ` 22` `riu_print_status` : `character` NULL
  - ` 23` `riu_print_date` : `timestamp without time zone` NULL
  - ` 24` `riu_print_count` : `integer` NULL
  - ` 25` `riu_remarks_cl` : `character varying` NULL
  - ` 26` `riu_expeditur` : `integer` NULL
  - ` 27` `riu_vehicle_no` : `character varying` NULL
  - ` 28` `riu_driver` : `character varying` NULL
  - ` 29` `riu_driver_hp` : `character varying` NULL
  - ` 30` `riu_delivery_status` : `character` NULL
  - ` 31` `riu_cc_id` : `integer` NOT NULL
  - ` 32` `riu_is_avg` : `character` NULL
  - ` 33` `riu_ptnra_oid` : `uuid` NULL

### `public.riub_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `riub_oid` : `uuid` NOT NULL
  - `  2` `riub_dom_id` : `smallint` NULL
  - `  3` `riub_en_id` : `integer` NULL
  - `  4` `riub_branch_id` : `integer` NULL
  - `  5` `riub_add_by` : `character varying` NULL
  - `  6` `riub_add_date` : `timestamp without time zone` NULL
  - `  7` `riub_upd_by` : `character varying` NULL
  - `  8` `riub_upd_date` : `timestamp without time zone` NULL
  - `  9` `riub_dt` : `timestamp without time zone` NULL
  - ` 10` `riub_code` : `character varying` NULL
  - ` 11` `riub_date` : `date` NULL
  - ` 12` `riub_pt_id` : `integer` NULL
  - ` 13` `riub_um` : `integer` NULL
  - ` 14` `riub_qty` : `numeric` NULL
  - ` 15` `riub_loc_id` : `bigint` NULL
  - ` 16` `riub_mtl_cost` : `numeric` NULL
  - ` 17` `riub_ovh_cost` : `numeric` NULL
  - ` 18` `riub_lbr_cost` : `numeric` NULL
  - ` 19` `riub_bdn_cost` : `numeric` NULL
  - ` 20` `riub_sub_cost` : `numeric` NULL
  - ` 21` `riub_trans_id` : `character` NULL
  - ` 22` `riub_remarks` : `character varying` NULL
  - ` 23` `riub_type` : `character` NULL
  - ` 24` `riub_cc_id` : `integer` NULL
  - ` 25` `riub_print_status` : `character` NULL
  - ` 26` `riub_print_date` : `timestamp without time zone` NULL
  - ` 27` `riub_print_count` : `smallint` NULL

### `public.riubd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `riubd_oid` : `uuid` NOT NULL
  - `  2` `riubd_riub_oid` : `uuid` NULL
  - `  3` `riubd_dt` : `timestamp without time zone` NULL
  - `  4` `riubd_pt_id` : `integer` NULL
  - `  5` `riubd_qty` : `numeric` NULL
  - `  6` `riubd_um` : `integer` NULL
  - `  7` `riubd_loc_id` : `integer` NULL
  - `  8` `riubd_mtl_cost` : `numeric` NULL
  - `  9` `riubd_ovh_cost` : `numeric` NULL
  - ` 10` `riubd_bdn_cost` : `numeric` NULL
  - ` 11` `riubd_lbr_cost` : `numeric` NULL
  - ` 12` `riubd_sub_cost` : `numeric` NULL
  - ` 13` `riubd_remarks` : `character varying` NULL

### `public.riubds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `riubds_oid` : `uuid` NOT NULL
  - `  2` `riubds_riubd_oid` : `uuid` NULL
  - `  3` `riubds_dt` : `timestamp without time zone` NULL
  - `  4` `riubds_qty` : `numeric` NULL
  - `  5` `riubds_loc_id` : `integer` NULL
  - `  6` `riubds_lot_serial` : `character varying` NULL
  - `  7` `riubds_um` : `integer` NULL
  - `  8` `riubds_exp_date` : `date` NULL

### `public.riubs_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `riubs_oid` : `uuid` NOT NULL
  - `  2` `riubs_riub_oid` : `uuid` NULL
  - `  3` `riubs_dt` : `timestamp without time zone` NULL
  - `  4` `riubs_qty` : `numeric` NULL
  - `  5` `riubs_loc_id` : `integer` NULL
  - `  6` `riubs_lot_serial` : `character varying` NULL
  - `  7` `riubs_um` : `integer` NULL
  - `  8` `riubs_exp_date` : `timestamp without time zone` NULL

### `public.riud_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `riud_oid` : `uuid` NOT NULL
  - `  2` `riud_riu_oid` : `uuid` NOT NULL
  - `  3` `riud_pt_id` : `integer` NOT NULL
  - `  4` `riud_qty` : `numeric` NULL
  - `  5` `riud_um` : `integer` NOT NULL
  - `  6` `riud_um_conv` : `numeric` NULL
  - `  7` `riud_qty_real` : `numeric` NULL
  - `  8` `riud_si_id` : `integer` NOT NULL
  - `  9` `riud_loc_id` : `bigint` NOT NULL
  - ` 10` `riud_cost` : `numeric` NULL
  - ` 11` `riud_ac_id` : `integer` NOT NULL
  - ` 12` `riud_sb_id` : `integer` NULL
  - ` 13` `riud_cc_id` : `integer` NULL
  - ` 14` `riud_dt` : `timestamp without time zone` NULL
  - ` 15` `riud_sod_oid` : `uuid` NULL
  - ` 16` `riud_pbd_oid` : `uuid` NULL
  - ` 17` `riud_qty_return` : `numeric` NULL
  - ` 18` `riud_qty_packaging` : `numeric` NULL
  - ` 19` `riud_packaging_id` : `integer` NOT NULL
  - ` 20` `riud_remarks` : `character varying` NULL
  - ` 21` `riud_ovh_cost` : `numeric` NULL
  - ` 22` `riud_lbr_cost` : `numeric` NULL
  - ` 23` `riud_bdn_cost` : `numeric` NULL
  - ` 24` `riud_sub_cost` : `numeric` NULL
  - ` 25` `riud_pjc_id` : `integer` NULL
  - ` 26` `riud_qty_packaging_delivery` : `numeric` NULL
  - ` 27` `riud_qty_delivery` : `numeric` NULL
  - ` 28` `riud_cogs_tl_m` : `numeric` NULL
  - ` 29` `riud_cogs_tl_l` : `numeric` NULL
  - ` 30` `riud_cogs_tl_b` : `numeric` NULL
  - ` 31` `riud_cogs_tl_o` : `numeric` NULL
  - ` 32` `riud_cogs_tl_s` : `numeric` NULL
  - ` 33` `riud_cogs_ll_m` : `numeric` NULL
  - ` 34` `riud_cogs_ll_l` : `numeric` NULL
  - ` 35` `riud_cogs_ll_b` : `numeric` NULL
  - ` 36` `riud_cogs_ll_o` : `numeric` NULL
  - ` 37` `riud_cogs_ll_s` : `numeric` NULL

### `public.riuds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `riuds_oid` : `uuid` NOT NULL
  - `  2` `riuds_riud_oid` : `uuid` NULL
  - `  3` `riuds_qty` : `numeric` NULL
  - `  4` `riuds_si_id` : `integer` NULL
  - `  5` `riuds_loc_id` : `bigint` NULL
  - `  6` `riuds_lot_serial` : `character varying` NULL
  - `  7` `riuds_dt` : `timestamp without time zone` NULL
  - `  8` `riuds_um` : `integer` NULL
  - `  9` `riuds_exp_date` : `date` NULL
  - ` 10` `riuds_um_conv` : `numeric` NULL
  - ` 11` `riuds_qty_real` : `numeric` NULL
  - ` 12` `riuds_qty_packaging_delivery` : `numeric` NULL
  - ` 13` `riuds_qty_delivery` : `numeric` NULL
  - ` 14` `riuds_qty_packaging` : `numeric` NULL

### `public.rms_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rms_oid` : `uuid` NOT NULL
  - `  2` `rms_dom_id` : `smallint` NULL
  - `  3` `rms_en_id` : `integer` NULL
  - `  4` `rms_add_by` : `character varying` NULL
  - `  5` `rms_add_date` : `timestamp without time zone` NULL
  - `  6` `rms_upd_by` : `character varying` NULL
  - `  7` `rms_upd_date` : `timestamp without time zone` NULL
  - `  8` `rms_code` : `character varying` NULL
  - `  9` `rms_date` : `date` NULL
  - ` 10` `rms_start_date` : `date` NULL
  - ` 11` `rms_end_date` : `date` NULL
  - ` 12` `rms_remark` : `character varying` NULL
  - ` 13` `rms_trans_id` : `character` NULL
  - ` 14` `rms_dt` : `timestamp without time zone` NULL
  - ` 15` `rms_generate` : `character` NULL
  - ` 16` `rms_gen_by` : `character varying` NULL
  - ` 17` `rms_gen_date` : `timestamp without time zone` NULL

### `public.rmsd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rmsd_oid` : `uuid` NOT NULL
  - `  2` `rmsd_rms_oid` : `uuid` NULL
  - `  3` `rmsd_soshipd_oid` : `uuid` NULL
  - `  4` `rmsd_ptnr_id` : `integer` NULL
  - `  5` `rmsd_pt_id` : `bigint` NULL
  - `  6` `rmsd_pt_price` : `numeric` NULL
  - `  7` `rmsd_prosentase` : `numeric` NULL
  - `  8` `rmsd_qty` : `numeric` NULL
  - `  9` `rmsd_dt` : `timestamp without time zone` NULL

### `public.ro_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ro_oid` : `uuid` NOT NULL
  - `  2` `ro_dom_id` : `smallint` NOT NULL
  - `  3` `ro_en_id` : `integer` NOT NULL
  - `  4` `ro_add_by` : `character varying` NULL
  - `  5` `ro_add_date` : `timestamp without time zone` NULL
  - `  6` `ro_upd_by` : `character varying` NULL
  - `  7` `ro_upd_date` : `timestamp without time zone` NULL
  - `  8` `ro_id` : `bigint` NOT NULL
  - `  9` `ro_code` : `character varying` NOT NULL
  - ` 10` `ro_desc` : `character varying` NOT NULL
  - ` 11` `ro_active` : `character` NOT NULL
  - ` 12` `ro_dt` : `timestamp without time zone` NULL
  - ` 13` `ro_pt_id` : `integer` NOT NULL
  - ` 14` `ro_cs_id` : `integer` NOT NULL
  - ` 15` `ro_total` : `numeric` NULL
  - ` 16` `ro_is_default` : `character` NULL

### `public.rod_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rod_oid` : `uuid` NOT NULL
  - `  2` `rod_ro_oid` : `uuid` NULL
  - `  3` `rod_add_by` : `character varying` NULL
  - `  4` `rod_add_date` : `timestamp without time zone` NULL
  - `  5` `rod_upd_by` : `character varying` NULL
  - `  6` `rod_upd_date` : `timestamp without time zone` NULL
  - `  7` `rod_op` : `smallint` NULL
  - `  8` `rod_start_date` : `date` NULL
  - `  9` `rod_end_date` : `date` NULL
  - ` 10` `rod_wc_id` : `integer` NULL
  - ` 11` `rod_desc` : `character varying` NULL
  - ` 12` `rod_mch_op` : `smallint` NULL
  - ` 13` `rod_tran_qty` : `integer` NULL
  - ` 14` `rod_queue` : `numeric` NULL
  - ` 15` `rod_wait` : `numeric` NULL
  - ` 16` `rod_move` : `numeric` NULL
  - ` 17` `rod_run` : `numeric` NULL
  - ` 18` `rod_setup` : `numeric` NULL
  - ` 19` `rod_yield_pct` : `numeric` NULL
  - ` 20` `rod_milestone` : `character` NULL
  - ` 21` `rod_sub_lead` : `smallint` NULL
  - ` 22` `rod_setup_men` : `numeric` NULL
  - ` 23` `rod_men_mch` : `numeric` NULL
  - ` 24` `rod_tool_code` : `integer` NOT NULL
  - ` 25` `rod_ptnr_id` : `integer` NULL
  - ` 26` `rod_sub_cost` : `numeric` NULL
  - ` 27` `rod_dt` : `timestamp without time zone` NULL
  - ` 28` `rod_lbr_ac_id` : `integer` NULL
  - ` 29` `rod_lbr_amount` : `numeric` NULL
  - ` 30` `rod_bdn_ac_id` : `integer` NULL
  - ` 31` `rod_bdn_amount` : `numeric` NULL
  - ` 32` `rod_sbc_ac_id` : `integer` NULL
  - ` 33` `rod_sbc_amount` : `numeric` NULL

### `public.royaltipay_payment`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `royaltipay_oid` : `uuid` NOT NULL
  - `  2` `royaltipay_dom_id` : `smallint` NULL
  - `  3` `royaltipay_en_id` : `integer` NULL
  - `  4` `royaltipay_add_by` : `character varying` NULL
  - `  5` `royaltipay_add_date` : `timestamp without time zone` NULL
  - `  6` `royaltipay_upd_by` : `character varying` NULL
  - `  7` `royaltipay_upd_date` : `timestamp without time zone` NULL
  - `  8` `royaltipay_code` : `character varying` NULL
  - `  9` `royaltipay_date` : `date` NULL
  - ` 10` `royaltipay_eff_date` : `date` NULL
  - ` 11` `royaltipay_total_amount` : `numeric` NULL
  - ` 12` `royaltipay_ptnr_idwriter` : `integer` NULL
  - ` 13` `royaltipay_bk_id` : `integer` NULL
  - ` 14` `royaltipay_cu_id` : `integer` NULL
  - ` 15` `royaltipay_exc_rate` : `numeric` NULL
  - ` 16` `royaltipay_remarks` : `character varying` NULL
  - ` 17` `royaltipay_pay_type` : `character` NULL
  - ` 18` `royaltipay_dt` : `timestamp without time zone` NULL
  - ` 19` `royaltipay_branch_id` : `integer` NOT NULL
  - ` 20` `royaltipay_print_status` : `character` NULL
  - ` 21` `royaltipay_print_date` : `timestamp without time zone` NULL
  - ` 22` `royaltipay_print_count` : `integer` NULL
  - ` 23` `royaltipay_ac_id` : `integer` NOT NULL

### `public.royaltipayd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `royaltipayd_oid` : `uuid` NOT NULL
  - `  2` `royaltipayd_royaltipay_oid` : `uuid` NULL
  - `  3` `royaltipayd_royaltiwrd_oid` : `uuid` NULL
  - `  4` `royaltipayd_amount` : `numeric` NULL
  - `  5` `royaltipayd_remarks` : `character varying` NULL
  - `  6` `royaltipayd_dt` : `timestamp without time zone` NULL
  - `  7` `royaltipayd_cash_amount` : `numeric` NULL
  - `  8` `royaltipayd_disc_amount` : `numeric` NULL
  - `  9` `royaltipayd_ac_id` : `integer` NULL

### `public.royaltipaydd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `royaltipaydd_oid` : `uuid` NOT NULL
  - `  2` `royaltipaydd_royaltipayd_oid` : `uuid` NULL
  - `  3` `royaltipaydd_ac_id` : `integer` NULL
  - `  4` `royaltipaydd_sb_id` : `integer` NULL
  - `  5` `royaltipaydd_amount` : `numeric` NULL
  - `  6` `royaltipaydd_remarks` : `character varying` NULL
  - `  7` `royaltipaydd_dt` : `timestamp without time zone` NULL

### `public.royaltiwr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `royaltiwr_oid` : `uuid` NOT NULL
  - `  2` `royaltiwr_dom_id` : `smallint` NULL
  - `  3` `royaltiwr_en_id` : `integer` NULL
  - `  4` `royaltiwr_add_by` : `character varying` NULL
  - `  5` `royaltiwr_add_date` : `timestamp without time zone` NULL
  - `  6` `royaltiwr_upd_by` : `character varying` NULL
  - `  7` `royaltiwr_upd_date` : `timestamp without time zone` NULL
  - `  8` `royaltiwr_code` : `character varying` NULL
  - `  9` `royaltiwr_date` : `date` NULL
  - ` 10` `royaltiwr_eff_date` : `date` NULL
  - ` 11` `royaltiwr_total_amount` : `numeric` NULL
  - ` 12` `royaltiwr_cu_id` : `integer` NULL
  - ` 13` `royaltiwr_exc_rate` : `numeric` NULL
  - ` 14` `royaltiwr_ext_total_amount` : `numeric` NULL
  - ` 15` `royaltiwr_remarks` : `character varying` NULL
  - ` 16` `royaltiwr_dt` : `timestamp without time zone` NULL
  - ` 17` `royaltiwr_payment_amount` : `numeric` NULL
  - ` 18` `royaltiwr_branch_id` : `integer` NOT NULL

### `public.royaltiwrd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `royaltiwrd_oid` : `uuid` NOT NULL
  - `  2` `royaltiwrd_royaltiwr_oid` : `uuid` NOT NULL
  - `  3` `royaltiwrd_branch_id` : `integer` NULL
  - `  4` `royaltiwrd_ptnr_idwriter` : `integer` NULL
  - `  5` `royaltiwrd_amount` : `numeric` NULL
  - `  6` `royaltiwrd_ext_amount` : `numeric` NULL
  - `  7` `royaltiwrd_remarks` : `character varying` NULL
  - `  8` `royaltiwrd_dt` : `timestamp without time zone` NULL
  - `  9` `royaltiwrd_payment_amount` : `numeric` NULL

### `public.royaltiwrdd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `royaltiwrdd_oid` : `uuid` NOT NULL
  - `  2` `royaltiwrdd_royaltiwrd_oid` : `uuid` NULL
  - `  3` `royaltiwrdd_ar_oid` : `uuid` NULL
  - `  4` `royaltiwrdd_ar_eff_date` : `timestamp without time zone` NULL
  - `  5` `royaltiwrdd_ars_oid` : `uuid` NULL
  - `  6` `royaltiwrdd_arpay_oid` : `uuid` NULL
  - `  7` `royaltiwrdd_arpay_eff_date` : `timestamp without time zone` NULL
  - `  8` `royaltiwrdd_dpp_amount` : `numeric` NULL
  - `  9` `royaltiwrdd_percentfee` : `numeric` NULL
  - ` 10` `royaltiwrdd_royalti_amount` : `numeric` NULL
  - ` 11` `royaltiwrdd_remarks` : `character varying` NULL
  - ` 12` `royaltiwrdd_dt` : `timestamp without time zone` NULL
  - ` 13` `royaltiwrdd_contractwr_oid` : `uuid` NULL

### `public.royaltiwrdd_det_so`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `royaltiwrdd_oid` : `uuid` NOT NULL
  - `  2` `royaltiwrdd_royaltiwrd_oid` : `uuid` NULL
  - `  3` `royaltiwrdd_ref_oid` : `uuid` NULL
  - `  4` `royaltiwrdd_ar_eff_date` : `timestamp without time zone` NULL
  - `  5` `royaltiwrdd_ars_oid` : `uuid` NULL
  - `  6` `royaltiwrdd_arpay_oid` : `uuid` NULL
  - `  7` `royaltiwrdd_arpay_eff_date` : `timestamp without time zone` NULL
  - `  8` `royaltiwrdd_dpp_amount` : `numeric` NULL
  - `  9` `royaltiwrdd_percentfee` : `numeric` NULL
  - ` 10` `royaltiwrdd_royalti_amount` : `numeric` NULL
  - ` 11` `royaltiwrdd_remarks` : `character varying` NULL
  - ` 12` `royaltiwrdd_dt` : `timestamp without time zone` NULL
  - ` 13` `royaltiwrdd_contractwr_oid` : `uuid` NULL

### `public.royt_table`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `royt_oid` : `uuid` NOT NULL
  - `  2` `royt_dom_id` : `smallint` NULL
  - `  3` `royt_add_by` : `character varying` NULL
  - `  4` `royt_add_date` : `timestamp without time zone` NULL
  - `  5` `royt_upd_by` : `character varying` NULL
  - `  6` `royt_upd_date` : `timestamp without time zone` NULL
  - `  7` `royt_pt_id` : `bigint` NULL
  - `  8` `royt_seq` : `smallint` NULL
  - `  9` `royt_qty_royalti` : `numeric` NULL
  - ` 10` `royt_royalti_amt` : `numeric` NULL
  - ` 11` `royt_qty_so` : `numeric` NULL
  - ` 12` `royt_remarks` : `character varying` NULL
  - ` 13` `royt_dt` : `timestamp without time zone` NULL
  - ` 14` `royt_en_id` : `integer` NULL

### `public.rstbal_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rstbal_oid` : `uuid` NOT NULL
  - `  2` `rstbal_dom_id` : `smallint` NULL
  - `  3` `rstbal_en_id` : `integer` NULL
  - `  4` `rstbal_add_by` : `character varying` NULL
  - `  5` `rstbal_add_date` : `timestamp without time zone` NULL
  - `  6` `rstbal_upd_by` : `character varying` NULL
  - `  7` `rstbal_upd_date` : `timestamp without time zone` NULL
  - `  8` `rstbal_rstrule_oid` : `uuid` NOT NULL
  - `  9` `rstbal_gcal_oid` : `uuid` NOT NULL
  - ` 10` `rstbal_amount` : `numeric` NULL
  - ` 11` `rstbal_dt` : `timestamp without time zone` NULL
  - ` 12` `rstbal_openbal_amount` : `numeric` NULL

### `public.rstrule_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rstrule_oid` : `uuid` NOT NULL
  - `  2` `rstrule_dom_id` : `smallint` NULL
  - `  3` `rstrule_en_id` : `integer` NULL
  - `  4` `rstrule_add_by` : `character varying` NULL
  - `  5` `rstrule_add_date` : `timestamp without time zone` NULL
  - `  6` `rstrule_upd_by` : `character varying` NULL
  - `  7` `rstrule_upd_date` : `timestamp without time zone` NULL
  - `  8` `rstrule_group_id` : `integer` NULL
  - `  9` `rstrule_name_id` : `integer` NULL
  - ` 10` `rstrule_line_id` : `integer` NULL
  - ` 11` `rstrule_cashflow_id` : `integer` NULL
  - ` 12` `rstrule_dt` : `timestamp without time zone` NULL
  - ` 13` `rstrule_remarks` : `character varying` NULL

### `public.rstruled_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `rstruled_oid` : `uuid` NOT NULL
  - `  2` `rstruled_rstrule_oid` : `uuid` NOT NULL
  - `  3` `rstruled_seq` : `integer` NULL
  - `  4` `rstruled_ac_id1` : `integer` NULL
  - `  5` `rstruled_sign1` : `character` NULL
  - `  6` `rstruled_ac_id2` : `integer` NULL
  - `  7` `rstruled_sign2` : `character` NULL

### `public.sb_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sb_oid` : `uuid` NOT NULL
  - `  2` `sb_dom_id` : `smallint` NULL
  - `  3` `sb_en_id` : `integer` NULL
  - `  4` `sb_add_by` : `character varying` NULL
  - `  5` `sb_add_date` : `timestamp without time zone` NULL
  - `  6` `sb_upd_by` : `character varying` NULL
  - `  7` `sb_upd_date` : `timestamp without time zone` NULL
  - `  8` `sb_id` : `integer` NULL
  - `  9` `sb_code` : `character varying` NULL
  - ` 10` `sb_desc` : `character varying` NULL
  - ` 11` `sb_active` : `character` NOT NULL
  - ` 12` `sb_dt` : `timestamp without time zone` NULL

### `public.sct_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sct_oid` : `uuid` NOT NULL
  - `  2` `sct_dom_id` : `smallint` NULL
  - `  3` `sct_en_id` : `integer` NULL
  - `  4` `sct_add_by` : `character varying` NULL
  - `  5` `sct_add_date` : `timestamp without time zone` NULL
  - `  6` `sct_upd_by` : `character varying` NULL
  - `  7` `sct_upd_date` : `timestamp without time zone` NULL
  - `  8` `sct_dt` : `timestamp without time zone` NULL
  - `  9` `sct_si_id` : `integer` NULL
  - ` 10` `sct_pt_id` : `integer` NULL
  - ` 11` `sct_cs_id` : `integer` NULL
  - ` 12` `sct_total` : `numeric` NULL
  - ` 13` `sct_rollup_date` : `timestamp without time zone` NULL
  - ` 14` `sct_mtl_tl` : `numeric` NULL
  - ` 15` `sct_lbr_tl` : `numeric` NULL
  - ` 16` `sct_bdn_tl` : `numeric` NULL
  - ` 17` `sct_ovh_tl` : `numeric` NULL
  - ` 18` `sct_sub_tl` : `numeric` NULL
  - ` 19` `sct_mtl_ll` : `numeric` NULL
  - ` 20` `sct_lbr_ll` : `numeric` NULL
  - ` 21` `sct_bdn_ll` : `numeric` NULL
  - ` 22` `sct_ovh_ll` : `numeric` NULL
  - ` 23` `sct_sub_ll` : `numeric` NULL
  - ` 24` `sct_rollup_ps` : `character` NULL
  - ` 25` `sct_rollup_routing` : `character` NULL
  - ` 26` `sct_price` : `numeric` NULL
  - ` 27` `sct_remarks` : `character varying` NULL

### `public.sctd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sctd_oid` : `uuid` NOT NULL
  - `  2` `sctd_add_by` : `character varying` NULL
  - `  3` `sctd_add_date` : `timestamp without time zone` NULL
  - `  4` `sctd_upd_by` : `character varying` NULL
  - `  5` `sctd_upd_date` : `timestamp without time zone` NULL
  - `  6` `sctd_dt` : `timestamp without time zone` NULL
  - `  7` `sctd_sct_oid` : `uuid` NULL
  - `  8` `sctd_csd_oid` : `uuid` NULL
  - `  9` `sctd_tl_amount` : `numeric` NULL
  - ` 10` `sctd_ll_amount` : `numeric` NULL
  - ` 11` `sctd_amount` : `numeric` NULL
  - ` 12` `sctd_ac_id` : `integer` NULL
  - ` 13` `sctd_seq` : `bigint` NULL

### `public.scth_hist`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `scth_oid` : `uuid` NOT NULL
  - `  2` `scth_dom_id` : `smallint` NOT NULL
  - `  3` `scth_en_id` : `integer` NOT NULL
  - `  4` `scth_add_by` : `character varying` NULL
  - `  5` `scth_add_date` : `timestamp without time zone` NULL
  - `  6` `scth_upd_by` : `character varying` NULL
  - `  7` `scth_upd_date` : `timestamp without time zone` NULL
  - `  8` `scth_dt` : `timestamp without time zone` NULL
  - `  9` `scth_date` : `timestamp without time zone` NOT NULL
  - ` 10` `scth_pt_id` : `integer` NOT NULL
  - ` 11` `scth_cs_id` : `integer` NOT NULL
  - ` 12` `scth_total` : `numeric` NULL
  - ` 13` `scth_cogs_m` : `numeric` NULL
  - ` 14` `scth_cogs_l` : `numeric` NULL
  - ` 15` `scth_cogs_b` : `numeric` NULL
  - ` 16` `scth_cogs_o` : `numeric` NULL
  - ` 17` `scth_cogs_s` : `numeric` NULL
  - ` 18` `scth_ref_type` : `character` NULL
  - ` 19` `scth_ref_oid` : `uuid` NULL

### `public.scthw_hist`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `scthw_oid` : `uuid` NOT NULL
  - `  2` `scthw_dom_id` : `smallint` NOT NULL
  - `  3` `scthw_en_id` : `integer` NOT NULL
  - `  4` `scthw_add_by` : `character varying` NULL
  - `  5` `scthw_add_date` : `timestamp without time zone` NULL
  - `  6` `scthw_upd_by` : `character varying` NULL
  - `  7` `scthw_upd_date` : `timestamp without time zone` NULL
  - `  8` `scthw_dt` : `timestamp without time zone` NULL
  - `  9` `scthw_date` : `timestamp without time zone` NOT NULL
  - ` 10` `scthw_pt_id` : `integer` NOT NULL
  - ` 11` `scthw_total` : `numeric` NULL
  - ` 12` `scthw_cogs_m` : `numeric` NULL
  - ` 13` `scthw_cogs_l` : `numeric` NULL
  - ` 14` `scthw_cogs_b` : `numeric` NULL
  - ` 15` `scthw_cogs_o` : `numeric` NULL
  - ` 16` `scthw_cogs_s` : `numeric` NULL

### `public.sctrcv_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sctrcv_oid` : `uuid` NOT NULL
  - `  2` `sctrcv_dom_id` : `smallint` NOT NULL
  - `  3` `sctrcv_en_id` : `integer` NOT NULL
  - `  4` `sctrcv_add_by` : `character varying` NULL
  - `  5` `sctrcv_add_date` : `timestamp without time zone` NULL
  - `  6` `sctrcv_upd_by` : `character varying` NULL
  - `  7` `sctrcv_upd_date` : `timestamp without time zone` NULL
  - `  8` `sctrcv_dt` : `timestamp without time zone` NULL
  - `  9` `sctrcv_pt_id` : `bigint` NOT NULL
  - ` 10` `sctrcv_cost` : `numeric` NULL
  - ` 11` `sctrcv_ref_oid` : `uuid` NULL
  - ` 12` `sctrcv_type` : `text` NULL

### `public.sh_region_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `region_oid` : `uuid` NOT NULL
  - `  2` `region_dom_id` : `smallint` NOT NULL
  - `  3` `region_en_id` : `integer` NOT NULL
  - `  4` `region_add_by` : `character varying` NULL
  - `  5` `region_add_date` : `timestamp without time zone` NULL
  - `  6` `region_upd_by` : `character varying` NULL
  - `  7` `region_upd_date` : `timestamp without time zone` NULL
  - `  8` `region_dt` : `timestamp without time zone` NULL
  - `  9` `region_id` : `integer` NOT NULL
  - ` 10` `region_name` : `character varying` NOT NULL
  - ` 11` `region_charge_design` : `numeric` NULL
  - ` 12` `region_charge_exp` : `numeric` NULL
  - ` 13` `region_remarks` : `character varying` NULL
  - ` 14` `region_code` : `character varying` NULL
  - ` 15` `region_active` : `character` NULL

### `public.sh_so_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `so_oid` : `uuid` NOT NULL
  - `  2` `so_dom_id` : `smallint` NOT NULL
  - `  3` `so_en_id` : `integer` NOT NULL
  - `  4` `so_add_by` : `character varying` NULL
  - `  5` `so_add_date` : `timestamp without time zone` NULL
  - `  6` `so_upd_by` : `character varying` NULL
  - `  7` `so_upd_date` : `timestamp without time zone` NULL
  - `  8` `so_dt` : `timestamp without time zone` NULL
  - `  9` `so_code` : `character varying` NOT NULL
  - ` 10` `so_date` : `date` NULL
  - ` 11` `so_ptnr_id` : `integer` NOT NULL
  - ` 12` `so_project_name` : `character varying` NULL
  - ` 13` `so_project_address` : `character varying` NULL
  - ` 14` `so_project_phone` : `character varying` NULL
  - ` 15` `so_project_budget` : `numeric` NULL
  - ` 16` `so_project_survey_date` : `date` NULL
  - ` 17` `so_project_survey_time` : `time without time zone` NULL
  - ` 18` `so_branch_id` : `integer` NOT NULL
  - ` 19` `so_sales_person` : `integer` NOT NULL
  - ` 20` `so_cu_id` : `integer` NOT NULL
  - ` 21` `so_exc_rate` : `numeric` NULL
  - ` 22` `so_credit_term` : `integer` NOT NULL
  - ` 23` `so_taxable` : `character` NULL
  - ` 24` `so_tax_inc` : `character` NULL
  - ` 25` `so_tax_class` : `integer` NOT NULL
  - ` 26` `so_bk_id` : `integer` NOT NULL
  - ` 27` `so_trans_id` : `character` NULL
  - ` 28` `so_remarks` : `character varying` NULL
  - ` 29` `so_paid_dp` : `character` NULL
  - ` 30` `so_paid_dp_amount` : `numeric` NULL
  - ` 31` `so_project_type` : `integer` NOT NULL
  - ` 32` `so_project_region` : `integer` NOT NULL
  - ` 33` `so_total_dp` : `numeric` NULL
  - ` 34` `so_total_dp_ppn` : `numeric` NULL
  - ` 35` `so_total_dp_pph` : `numeric` NULL
  - ` 36` `so_additional_charge` : `numeric` NULL

### `public.shift_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `shift_oid` : `uuid` NOT NULL
  - `  2` `shift_en_id` : `integer` NULL
  - `  3` `shift_add_by` : `character varying` NULL
  - `  4` `shift_add_date` : `timestamp without time zone` NULL
  - `  5` `shift_upd_by` : `character varying` NULL
  - `  6` `shift_upd_date` : `timestamp without time zone` NULL
  - `  7` `shift_dt` : `timestamp without time zone` NULL
  - `  8` `shift_id` : `integer` NULL
  - `  9` `shift_code` : `character varying` NULL
  - ` 10` `shift_name` : `character varying` NULL
  - ` 11` `shift_desc` : `character varying` NULL
  - ` 12` `shift_start_wt` : `time without time zone` NULL
  - ` 13` `shift_end_wt` : `time without time zone` NULL
  - ` 14` `shift_cross_day` : `character` NULL
  - ` 15` `shift_active` : `character` NULL
  - ` 16` `shift_global` : `character` NULL

### `public.si_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `si_oid` : `uuid` NOT NULL
  - `  2` `si_dom_id` : `smallint` NULL
  - `  3` `si_en_id` : `integer` NULL
  - `  4` `si_add_by` : `character varying` NULL
  - `  5` `si_add_date` : `timestamp without time zone` NULL
  - `  6` `si_upd_by` : `character varying` NULL
  - `  7` `si_upd_date` : `timestamp without time zone` NULL
  - `  8` `si_id` : `integer` NULL
  - `  9` `si_code` : `character varying` NULL
  - ` 10` `si_desc` : `character varying` NULL
  - ` 11` `si_active` : `character` NOT NULL
  - ` 12` `si_dt` : `timestamp without time zone` NULL

### `public.sinv_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sinv_oid` : `uuid` NOT NULL
  - `  2` `sinv_dom_id` : `smallint` NULL
  - `  3` `sinv_en_id` : `integer` NULL
  - `  4` `sinv_add_by` : `character varying` NULL
  - `  5` `sinv_add_date` : `timestamp without time zone` NULL
  - `  6` `sinv_upd_by` : `character varying` NULL
  - `  7` `sinv_upd_date` : `timestamp without time zone` NULL
  - `  8` `sinv_numfrom` : `integer` NULL
  - `  9` `sinv_numto` : `integer` NULL
  - ` 10` `sinv_date` : `timestamp without time zone` NULL
  - ` 11` `sinv_branch_id` : `integer` NULL
  - ` 12` `sinv_ptnr_id` : `integer` NULL
  - ` 13` `sinv_print` : `character` NULL
  - ` 14` `sinv_dt` : `timestamp without time zone` NULL
  - ` 15` `sinv_is_pay` : `character` NULL
  - ` 16` `sinv_is_close` : `character` NULL
  - ` 17` `sinv_reason_id` : `integer` NULL

### `public.sls_strct`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sls_oid` : `uuid` NOT NULL
  - `  2` `sls_add_by` : `character varying` NULL
  - `  3` `sls_add_date` : `timestamp without time zone` NULL
  - `  4` `sls_upd_by` : `character varying` NULL
  - `  5` `sls_upd_date` : `timestamp without time zone` NULL
  - `  6` `sls_emp_id` : `bigint` NULL
  - `  7` `sls_parent_id` : `bigint` NULL
  - `  8` `sls_start_date` : `date` NULL
  - `  9` `sls_end_date` : `date` NULL
  - ` 10` `sls_active` : `character` NULL

### `public.so_exr_rate`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `so_exr_oid` : `uuid` NOT NULL
  - `  2` `so_exr_dom_id` : `smallint` NULL
  - `  3` `so_exr_add_by` : `character varying` NULL
  - `  4` `so_exr_add_date` : `timestamp without time zone` NULL
  - `  5` `so_exr_upd_by` : `character varying` NULL
  - `  6` `so_exr_upd_date` : `timestamp without time zone` NULL
  - `  7` `so_exr_cu_id_1` : `integer` NULL
  - `  8` `so_exr_cu_id_2` : `integer` NULL
  - `  9` `so_exr_cu_rate_1` : `numeric` NULL
  - ` 10` `so_exr_cu_rate_2` : `numeric` NULL
  - ` 11` `so_exr_start_date` : `date` NULL
  - ` 12` `so_exr_end_date` : `date` NULL
  - ` 13` `so_exr_dt` : `timestamp without time zone` NULL

### `public.so_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `so_oid` : `uuid` NOT NULL
  - `  2` `so_dom_id` : `smallint` NULL
  - `  3` `so_en_id` : `integer` NULL
  - `  4` `so_add_by` : `character varying` NULL
  - `  5` `so_add_date` : `timestamp without time zone` NULL
  - `  6` `so_upd_by` : `character varying` NULL
  - `  7` `so_upd_date` : `timestamp without time zone` NULL
  - `  8` `so_code` : `character varying` NULL
  - `  9` `so_ptnr_id_sold` : `integer` NOT NULL
  - ` 10` `so_ptnr_id_bill` : `integer` NOT NULL
  - ` 11` `so_date` : `date` NULL
  - ` 12` `so_credit_term` : `integer` NOT NULL
  - ` 13` `so_taxable` : `character` NULL
  - ` 14` `so_tax_class` : `integer` NOT NULL
  - ` 15` `so_si_id` : `integer` NOT NULL
  - ` 16` `so_type` : `character` NULL
  - ` 17` `so_sales_person` : `integer` NOT NULL
  - ` 18` `so_pi_id` : `integer` NULL
  - ` 19` `so_pay_type` : `integer` NOT NULL
  - ` 20` `so_pay_method` : `integer` NOT NULL
  - ` 21` `so_ar_ac_id` : `integer` NOT NULL
  - ` 22` `so_ar_sb_id` : `integer` NULL
  - ` 23` `so_ar_cc_id` : `integer` NULL
  - ` 24` `so_dp` : `numeric` NULL
  - ` 25` `so_disc_header` : `numeric` NULL
  - ` 26` `so_total` : `numeric` NULL
  - ` 27` `so_print_count` : `smallint` NULL
  - ` 28` `so_payment_date` : `date` NULL
  - ` 29` `so_close_date` : `date` NULL
  - ` 30` `so_tran_id` : `integer` NOT NULL
  - ` 31` `so_trans_id` : `character` NULL
  - ` 32` `so_trans_rmks` : `character varying` NULL
  - ` 33` `so_current_route` : `character varying` NULL
  - ` 34` `so_next_route` : `character varying` NULL
  - ` 35` `so_dt` : `timestamp without time zone` NULL
  - ` 36` `so_cu_id` : `integer` NOT NULL
  - ` 37` `so_total_ppn` : `numeric` NULL
  - ` 38` `so_total_pph` : `numeric` NULL
  - ` 39` `so_payment` : `numeric` NULL
  - ` 40` `so_exc_rate` : `numeric` NULL
  - ` 41` `so_tax_inc` : `character` NULL
  - ` 42` `so_cons` : `character` NULL
  - ` 43` `so_terbilang` : `character varying` NULL
  - ` 44` `so_bk_id` : `integer` NOT NULL
  - ` 45` `so_interval` : `integer` NULL
  - ` 46` `so_ref_po_code` : `character varying` NULL
  - ` 47` `so_ref_po_oid` : `uuid` NULL
  - ` 48` `so_ppn_type` : `character` NOT NULL
  - ` 49` `so_branch_id` : `integer` NULL
  - ` 50` `so_group_id` : `integer` NOT NULL
  - ` 51` `so_disc_type` : `integer` NULL
  - ` 52` `so_prct_limit_return` : `numeric` NULL
  - ` 53` `so_autho_user` : `character varying` NULL
  - ` 54` `so_autho_remarks` : `character varying` NULL
  - ` 55` `so_exc_rate_pi` : `numeric` NULL
  - ` 56` `so_disc_pay` : `numeric` NULL
  - ` 57` `so_pocust_oid` : `uuid` NULL
  - ` 58` `so_royalti_paid` : `character` NULL
  - ` 59` `so_print_status` : `character` NULL
  - ` 60` `so_print_date` : `timestamp without time zone` NULL
  - ` 61` `so_remarks_close` : `character varying` NULL
  - ` 62` `so_remarks_cl` : `character varying` NULL
  - ` 63` `so_is_recap` : `character` NULL
  - ` 64` `so_cc_id` : `integer` NOT NULL
  - ` 65` `so_ptnra_oid` : `uuid` NOT NULL
  - ` 66` `so_is_cm` : `character` NULL
  - ` 67` `so_is_boq` : `character` NULL

### `public.soa_attr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soa_oid` : `uuid` NOT NULL
  - `  2` `soa_bekerja_pada` : `character varying` NULL
  - `  3` `soa_jabatan_bagian` : `character varying` NULL
  - `  4` `soa_kantor_alamat_1` : `character varying` NULL
  - `  5` `soa_kantor_alamat_2` : `character varying` NULL
  - `  6` `soa_kantor_lantai` : `character varying` NULL
  - `  7` `soa_kantor_telp` : `character varying` NULL
  - `  8` `soa_ktp` : `character varying` NULL
  - `  9` `soa_email` : `character varying` NULL
  - ` 10` `soa_rumah_alamat_1` : `character varying` NULL
  - ` 11` `soa_rumah_alamat_2` : `character varying` NULL
  - ` 12` `soa_rumah_kode_pos` : `character varying` NULL
  - ` 13` `soa_rumah_telp` : `character varying` NULL
  - ` 14` `soa_rumah_hp` : `character varying` NULL
  - ` 15` `soa_status_alamat_kirim` : `character` NULL
  - ` 16` `soa_status_alamat_tagih` : `character` NULL
  - ` 17` `soa_suami_nama` : `character varying` NULL
  - ` 18` `soa_suami_bekerja` : `character varying` NULL
  - ` 19` `soa_suami_jabatan` : `character varying` NULL
  - ` 20` `soa_suami_kantor_alamat_1` : `character varying` NULL
  - ` 21` `soa_suami_kantor_alamat_2` : `character varying` NULL
  - ` 22` `soa_suami_telp` : `character varying` NULL
  - ` 23` `soa_suami_hp` : `character varying` NULL
  - ` 24` `soa_anak_nama_1` : `character varying` NULL
  - ` 25` `soa_anak_tgl_lahir_1` : `character varying` NULL
  - ` 26` `soa_anak_sekolah_1` : `character varying` NULL
  - ` 27` `soa_anak_nama_2` : `character varying` NULL
  - ` 28` `soa_anak_tgl_lahir_2` : `character varying` NULL
  - ` 29` `soa_anak_sekolah_2` : `character varying` NULL
  - ` 30` `soa_anak_nama_3` : `character varying` NULL
  - ` 31` `soa_anak_tgl_lahir_3` : `character varying` NULL
  - ` 32` `soa_anak_sekolah_3` : `character varying` NULL
  - ` 33` `soa_keluarga_dekat_nama` : `character varying` NULL
  - ` 34` `soa_keluarga_dekat_alamat_1` : `character varying` NULL
  - ` 35` `soa_keluarga_dekat_alamat_2` : `character varying` NULL
  - ` 36` `soa_keluarga_dekat_telp` : `character varying` NULL
  - ` 37` `soa_keluarga_dekat_hp` : `character varying` NULL
  - ` 38` `soa_status_tempat_tinggal` : `character` NULL
  - ` 39` `soa_jenis_kartu_kredit` : `character varying` NULL
  - ` 40` `soa_no_kartu_kredit` : `character varying` NULL
  - ` 41` `soa_bank` : `integer` NULL
  - ` 42` `soa_berlaku_sd` : `date` NULL
  - ` 43` `soa_dt` : `timestamp without time zone` NULL
  - ` 44` `soa_kjb_code` : `character varying` NULL
  - ` 45` `soa_so_oid` : `uuid` NULL

### `public.soadp_payment`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soadp_oid` : `uuid` NOT NULL
  - `  2` `soadp_code` : `character varying` NULL
  - `  3` `soadp_date` : `date` NULL
  - `  4` `soadp_dt` : `timestamp without time zone` NULL
  - `  5` `soadp_dom_id` : `integer` NULL
  - `  6` `soadp_en_id` : `integer` NULL
  - `  7` `soadp_branch_id` : `integer` NULL
  - `  8` `soadp_bk_id` : `integer` NULL
  - `  9` `soadp_so_oid` : `uuid` NULL
  - ` 10` `soadp_ac_id` : `integer` NULL
  - ` 11` `soadp_add_by` : `character varying` NULL
  - ` 12` `soadp_add_date` : `timestamp without time zone` NULL
  - ` 13` `soadp_upd_by` : `character varying` NULL
  - ` 14` `soadp_upd_date` : `timestamp without time zone` NULL
  - ` 15` `soadp_remarks` : `character varying` NULL
  - ` 16` `soadp_amount` : `numeric` NULL
  - ` 17` `soadp_cu_id` : `integer` NULL
  - ` 18` `soadp_exc_rate` : `numeric` NULL

### `public.soalloc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soalloc_oid` : `uuid` NOT NULL
  - `  2` `soalloc_dom_id` : `smallint` NOT NULL
  - `  3` `soalloc_en_id` : `integer` NOT NULL
  - `  4` `soalloc_add_by` : `character varying` NULL
  - `  5` `soalloc_add_date` : `timestamp without time zone` NULL
  - `  6` `soalloc_upd_by` : `character varying` NULL
  - `  7` `soalloc_upd_date` : `timestamp without time zone` NULL
  - `  8` `soalloc_dt` : `timestamp without time zone` NULL
  - `  9` `soalloc_branch_id` : `integer` NOT NULL
  - ` 10` `soalloc_cc_id` : `integer` NOT NULL
  - ` 11` `soalloc_code` : `character varying` NOT NULL
  - ` 12` `soalloc_date` : `date` NULL
  - ` 13` `soalloc_so_oid` : `uuid` NOT NULL
  - ` 14` `soalloc_remarks` : `character varying` NULL
  - ` 15` `soalloc_print_status` : `character` NULL
  - ` 16` `soalloc_print_date` : `timestamp without time zone` NULL
  - ` 17` `soalloc_print_count` : `integer` NULL
  - ` 18` `soalloc_type` : `character` NULL

### `public.soallocd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soallocd_oid` : `uuid` NOT NULL
  - `  2` `soallocd_soalloc_oid` : `uuid` NOT NULL
  - `  3` `soallocd_sod_oid` : `uuid` NOT NULL
  - `  4` `soallocd_seq` : `smallint` NULL
  - `  5` `soallocd_qty` : `numeric` NULL
  - `  6` `soallocd_um` : `integer` NOT NULL
  - `  7` `soallocd_um_conv` : `numeric` NULL
  - `  8` `soallocd_qty_real` : `numeric` NULL
  - `  9` `soallocd_remarks` : `character varying` NULL
  - ` 10` `soallocd_loc_id` : `integer` NOT NULL

### `public.soallocds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soallocds_oid` : `uuid` NOT NULL
  - `  2` `soallocds_soallocd_oid` : `uuid` NOT NULL
  - `  3` `soallocds_seq` : `smallint` NULL
  - `  4` `soallocds_loc_id` : `integer` NOT NULL
  - `  5` `soallocds_qty` : `numeric` NULL
  - `  6` `soallocds_um_conv` : `numeric` NULL
  - `  7` `soallocds_qty_real` : `numeric` NULL
  - `  8` `soallocds_lot_serial` : `character varying` NULL
  - `  9` `soallocds_exp_date` : `date` NULL

### `public.sob_bonus`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sob_oid` : `uuid` NOT NULL
  - `  2` `sob_so_oid` : `uuid` NULL
  - `  3` `sob_so_code` : `character varying` NULL
  - `  4` `sob_so_date` : `date` NULL
  - `  5` `sob_seq` : `smallint` NULL
  - `  6` `sob_ptnr_id` : `integer` NULL
  - `  7` `sob_so_dp` : `numeric` NULL
  - `  8` `sob_so_disc_header` : `numeric` NULL
  - `  9` `sob_so_total` : `numeric` NULL
  - ` 10` `sob_sales_unit` : `numeric` NULL
  - ` 11` `sob_dt` : `timestamp without time zone` NULL

### `public.soct_cost`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soct_oid` : `uuid` NOT NULL
  - `  2` `soct_so_oid` : `uuid` NULL
  - `  3` `soct_soship_oid` : `uuid` NOT NULL
  - `  4` `soct_soshipd_oid` : `uuid` NOT NULL
  - `  5` `soct_soshipds_seq` : `smallint` NULL
  - `  6` `soct_qty_ship` : `numeric` NULL
  - `  7` `soct_qty_ret` : `numeric` NULL
  - `  8` `soct_qty_inv` : `numeric` NULL
  - `  9` `soct_cost` : `numeric` NULL

### `public.sod_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sod_oid` : `uuid` NOT NULL
  - `  2` `sod_dom_id` : `smallint` NULL
  - `  3` `sod_en_id` : `integer` NULL
  - `  4` `sod_add_by` : `character varying` NULL
  - `  5` `sod_add_date` : `timestamp without time zone` NULL
  - `  6` `sod_upd_by` : `character varying` NULL
  - `  7` `sod_upd_date` : `timestamp without time zone` NULL
  - `  8` `sod_so_oid` : `uuid` NULL
  - `  9` `sod_seq` : `smallint` NULL
  - ` 10` `sod_is_additional_charge` : `character` NULL
  - ` 11` `sod_si_id` : `integer` NULL
  - ` 12` `sod_pt_id` : `bigint` NULL
  - ` 13` `sod_rmks` : `character varying` NULL
  - ` 14` `sod_qty` : `numeric` NULL
  - ` 15` `sod_qty_allocated` : `numeric` NULL
  - ` 16` `sod_qty_picked` : `numeric` NULL
  - ` 17` `sod_qty_shipment` : `numeric` NULL
  - ` 18` `sod_qty_pending_inv` : `numeric` NULL
  - ` 19` `sod_qty_invoice` : `numeric` NULL
  - ` 20` `sod_um` : `integer` NULL
  - ` 21` `sod_cost` : `numeric` NULL
  - ` 22` `sod_price` : `numeric` NULL
  - ` 23` `sod_disc` : `numeric` NULL
  - ` 24` `sod_sales_ac_id` : `integer` NULL
  - ` 25` `sod_sales_sb_id` : `integer` NULL
  - ` 26` `sod_sales_cc_id` : `integer` NULL
  - ` 27` `sod_disc_ac_id` : `integer` NULL
  - ` 28` `sod_um_conv` : `numeric` NULL
  - ` 29` `sod_qty_real` : `numeric` NULL
  - ` 30` `sod_taxable` : `character` NULL
  - ` 31` `sod_tax_inc` : `character` NULL
  - ` 32` `sod_tax_class` : `integer` NULL
  - ` 33` `sod_status` : `character` NULL
  - ` 34` `sod_dt` : `timestamp without time zone` NULL
  - ` 35` `sod_payment` : `numeric` NULL
  - ` 36` `sod_dp` : `numeric` NULL
  - ` 37` `sod_sales_unit` : `numeric` NULL
  - ` 38` `sod_loc_id` : `integer` NULL
  - ` 39` `sod_serial` : `character varying` NULL
  - ` 40` `sod_qty_return` : `numeric` NULL
  - ` 41` `sod_ppn_type` : `character` NULL
  - ` 42` `sod_pod_oid` : `uuid` NULL
  - ` 43` `sod_qty_ir` : `numeric` NULL
  - ` 44` `sod_invc_oid` : `uuid` NULL
  - ` 45` `sod_invc_loc_id` : `integer` NULL
  - ` 46` `sod_qty_transfer` : `numeric` NULL
  - ` 47` `sod_ppn` : `numeric` NULL
  - ` 48` `sod_pph` : `numeric` NULL
  - ` 49` `sod_price_line` : `numeric` NULL
  - ` 50` `sod_disc1` : `numeric` NULL
  - ` 51` `sod_disc2` : `numeric` NULL
  - ` 52` `sod_packaging_id` : `integer` NOT NULL
  - ` 53` `sod_qty_packaging` : `numeric` NULL
  - ` 54` `sod_pi_inc` : `character` NULL
  - ` 55` `sod_disc_amount` : `numeric` NULL
  - ` 56` `sod_cogs_m` : `numeric` NULL
  - ` 57` `sod_cogs_l` : `numeric` NULL
  - ` 58` `sod_cogs_b` : `numeric` NULL
  - ` 59` `sod_cogs_o` : `numeric` NULL
  - ` 60` `sod_cogs_s` : `numeric` NULL
  - ` 61` `sod_price_basic` : `numeric` NULL
  - ` 62` `sod_pt_desc1` : `character varying` NULL
  - ` 63` `sod_pt_desc2` : `character varying` NULL
  - ` 64` `sod_pocustd_oid` : `uuid` NULL
  - ` 65` `sod_qty_recap` : `numeric` NULL
  - ` 66` `sod_qty_packaging_recap` : `numeric` NULL
  - ` 67` `sod_qty_wo` : `numeric` NULL
  - ` 68` `sod_due_date` : `date` NULL
  - ` 69` `sod_siteid_id` : `integer` NULL
  - ` 70` `sod_gr_number` : `integer` NULL

### `public.sods_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sods_oid` : `uuid` NOT NULL
  - `  2` `sods_sod_oid` : `uuid` NULL
  - `  3` `sods_seq` : `smallint` NULL
  - `  4` `sods_qty` : `numeric` NULL
  - `  5` `sods_qty_packaging` : `numeric` NULL
  - `  6` `sods_si_id` : `integer` NULL
  - `  7` `sods_loc_id` : `bigint` NULL
  - `  8` `sods_lot_serial` : `character varying` NULL
  - `  9` `sods_dt` : `timestamp without time zone` NULL
  - ` 10` `sods_qty_real` : `numeric` NULL
  - ` 11` `sods_um_conv` : `numeric` NULL

### `public.sogr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sogr_oid` : `uuid` NOT NULL
  - `  2` `sogr_dom_id` : `smallint` NULL
  - `  3` `sogr_en_id` : `integer` NULL
  - `  4` `sogr_add_by` : `character varying` NULL
  - `  5` `sogr_add_date` : `timestamp without time zone` NULL
  - `  6` `sogr_upd_by` : `character varying` NULL
  - `  7` `sogr_upd_date` : `timestamp without time zone` NULL
  - `  8` `sogr_date` : `date` NULL
  - `  9` `sogr_due_date` : `date` NULL
  - ` 10` `sogr_rmks` : `character varying` NULL
  - ` 11` `sogr_status` : `character` NULL
  - ` 12` `sogr_close_date` : `date` NULL
  - ` 13` `sogr_dt` : `timestamp without time zone` NULL
  - ` 14` `sogr_code` : `character varying` NULL
  - ` 15` `sogr_trans_id` : `character` NULL
  - ` 16` `sogr_tran_id` : `integer` NULL
  - ` 17` `sogr_branch_id` : `integer` NULL
  - ` 18` `sogr_print_status` : `character` NULL
  - ` 19` `sogr_print_date` : `timestamp without time zone` NULL
  - ` 20` `sogr_print_count` : `integer` NULL
  - ` 21` `sogr_remarks_close` : `character varying` NULL
  - ` 22` `sogr_remarks_cl` : `character varying` NULL
  - ` 23` `sogr_cust_id` : `integer` NULL
  - ` 24` `sogr_sales_person` : `integer` NULL

### `public.sogrd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sogrd_oid` : `uuid` NOT NULL
  - `  2` `sogrd_dom_id` : `smallint` NULL
  - `  3` `sogrd_add_by` : `character varying` NULL
  - `  4` `sogrd_add_date` : `timestamp without time zone` NULL
  - `  5` `sogrd_upd_by` : `character varying` NULL
  - `  6` `sogrd_upd_date` : `timestamp without time zone` NULL
  - `  7` `sogrd_sogr_oid` : `uuid` NULL
  - `  8` `sogrd_seq` : `smallint` NULL
  - `  9` `sogrd_pt_id` : `bigint` NULL
  - ` 10` `sogrd_rmks` : `character varying` NULL
  - ` 11` `sogrd_qty` : `numeric` NULL
  - ` 12` `sogrd_um` : `integer` NULL
  - ` 13` `sogrd_due_date` : `date` NULL
  - ` 14` `sogrd_status` : `character` NULL
  - ` 15` `sogrd_dt` : `timestamp without time zone` NULL
  - ` 16` `sogrd_qty_riud` : `numeric` NULL
  - ` 17` `sogrd_um_conv` : `numeric` NULL
  - ` 18` `sogrd_qty_real` : `numeric` NULL

### `public.sokp_piutang`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sokp_oid` : `uuid` NOT NULL
  - `  2` `sokp_so_oid` : `uuid` NULL
  - `  3` `sokp_seq` : `smallint` NULL
  - `  4` `sokp_amount` : `numeric` NULL
  - `  5` `sokp_amount_pay` : `numeric` NULL
  - `  6` `sokp_description` : `character varying` NULL
  - `  7` `sokp_due_date` : `date` NULL
  - `  8` `sokp_status` : `character` NULL
  - `  9` `sokp_ar_oid` : `uuid` NULL
  - ` 10` `sokp_ref` : `character varying` NULL
  - ` 11` `sokp_date_payment` : `date` NULL

### `public.sor_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sor_oid` : `uuid` NOT NULL
  - `  2` `sor_dom_id` : `smallint` NOT NULL
  - `  3` `sor_en_id` : `integer` NOT NULL
  - `  4` `sor_add_by` : `character varying` NULL
  - `  5` `sor_add_date` : `timestamp without time zone` NULL
  - `  6` `sor_upd_by` : `character varying` NULL
  - `  7` `sor_upd_date` : `timestamp without time zone` NULL
  - `  8` `sor_dt` : `timestamp without time zone` NULL
  - `  9` `sor_code` : `character varying` NOT NULL
  - ` 10` `sor_date` : `date` NULL
  - ` 11` `sor_vehicle_id` : `integer` NOT NULL
  - ` 12` `sor_driver_id` : `bigint` NOT NULL
  - ` 13` `sor_driver_assistance_id` : `bigint` NOT NULL
  - ` 14` `sor_print_status` : `character` NULL
  - ` 15` `sor_print_date` : `timestamp without time zone` NULL
  - ` 16` `sor_print_count` : `integer` NULL
  - ` 17` `sor_remarks` : `character varying` NULL
  - ` 18` `sor_expediter` : `integer` NOT NULL
  - ` 19` `sor_branch_id` : `integer` NOT NULL
  - ` 20` `sor_remarks2` : `character varying` NULL
  - ` 21` `sor_due_date` : `date` NULL
  - ` 22` `sor_status` : `character` NULL
  - ` 23` `sor_is_shipment` : `character` NULL

### `public.sord_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sord_oid` : `uuid` NOT NULL
  - `  2` `sord_sor_oid` : `uuid` NOT NULL
  - `  3` `sord_sod_oid` : `uuid` NOT NULL
  - `  4` `sord_qty` : `numeric` NULL
  - `  5` `sord_qty_packaging` : `numeric` NULL
  - `  6` `sord_loc_id` : `integer` NOT NULL
  - `  7` `sord_is_shipment` : `character` NULL
  - `  8` `sord_qty_shipment` : `numeric` NULL
  - `  9` `sord_status` : `character` NULL
  - ` 10` `sord_rmks` : `text` NULL

### `public.sords_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sords_oid` : `uuid` NOT NULL
  - `  2` `sords_sord_oid` : `uuid` NOT NULL
  - `  3` `sords_qty` : `numeric` NULL
  - `  4` `sords_qty_packaging` : `numeric` NULL
  - `  5` `sords_lot_serial` : `character varying` NULL
  - `  6` `sords_loc_id` : `integer` NOT NULL

### `public.soship_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soship_oid` : `uuid` NOT NULL
  - `  2` `soship_dom_id` : `smallint` NULL
  - `  3` `soship_en_id` : `integer` NOT NULL
  - `  4` `soship_add_by` : `character varying` NULL
  - `  5` `soship_add_date` : `timestamp without time zone` NULL
  - `  6` `soship_upd_by` : `character varying` NULL
  - `  7` `soship_upd_date` : `timestamp without time zone` NULL
  - `  8` `soship_code` : `character varying` NULL
  - `  9` `soship_date` : `date` NULL
  - ` 10` `soship_so_oid` : `uuid` NOT NULL
  - ` 11` `soship_si_id` : `integer` NOT NULL
  - ` 12` `soship_is_shipment` : `character` NULL
  - ` 13` `soship_dt` : `timestamp without time zone` NULL
  - ` 14` `soship_exc_rate` : `numeric` NOT NULL
  - ` 15` `soship_cu_id` : `integer` NOT NULL
  - ` 16` `soship_ti_in_use` : `character` NULL
  - ` 17` `soship_branch_id` : `integer` NOT NULL
  - ` 18` `soship_ar_oid` : `uuid` NULL
  - ` 19` `soship_expeditur` : `integer` NOT NULL
  - ` 20` `soship_vehicle_no` : `character varying` NULL
  - ` 21` `soship_driver` : `character varying` NULL
  - ` 22` `soship_is_com` : `character` NULL
  - ` 23` `soship_driver_hp` : `character varying` NULL
  - ` 24` `soship_remarks` : `character varying` NULL
  - ` 25` `soship_print_status` : `character` NULL
  - ` 26` `soship_print_date` : `timestamp without time zone` NULL
  - ` 27` `soship_print_count` : `integer` NULL
  - ` 28` `soship_delivery_status` : `character` NULL
  - ` 29` `soship_remarks2` : `character varying` NULL
  - ` 30` `soship_vehicle_id` : `integer` NOT NULL
  - ` 31` `soship_driver_id` : `bigint` NOT NULL
  - ` 32` `soship_driver_assistance_id` : `bigint` NOT NULL
  - ` 33` `soship_sor_oid` : `uuid` NULL
  - ` 34` `soship_cc_id` : `integer` NOT NULL
  - ` 35` `soship_is_avg` : `character` NULL
  - ` 36` `soship_ptnra_oid` : `uuid` NOT NULL

### `public.soshipd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soshipd_oid` : `uuid` NOT NULL
  - `  2` `soshipd_soship_oid` : `uuid` NULL
  - `  3` `soshipd_sod_oid` : `uuid` NULL
  - `  4` `soshipd_seq` : `smallint` NULL
  - `  5` `soshipd_qty` : `numeric` NULL
  - `  6` `soshipd_um` : `integer` NULL
  - `  7` `soshipd_um_conv` : `numeric` NULL
  - `  8` `soshipd_cancel_bo` : `character` NULL
  - `  9` `soshipd_qty_real` : `numeric` NULL
  - ` 10` `soshipd_si_id` : `integer` NULL
  - ` 11` `soshipd_loc_id` : `bigint` NULL
  - ` 12` `soshipd_lot_serial` : `character varying` NULL
  - ` 13` `soshipd_rea_code_id` : `integer` NULL
  - ` 14` `soshipd_dt` : `timestamp without time zone` NULL
  - ` 15` `soshipd_qty_inv` : `numeric` NULL
  - ` 16` `soshipd_close_line` : `character` NULL
  - ` 17` `soshipd_qty_allocated` : `numeric` NULL
  - ` 18` `soshipd_oid_shipment` : `uuid` NULL
  - ` 19` `soshipd_qty_return` : `numeric` NULL
  - ` 20` `soshipd_packaging_id` : `integer` NOT NULL
  - ` 21` `soshipd_qty_packaging` : `numeric` NULL
  - ` 22` `soshipd_cogs_m` : `numeric` NULL
  - ` 23` `soshipd_cogs_l` : `numeric` NULL
  - ` 24` `soshipd_cogs_b` : `numeric` NULL
  - ` 25` `soshipd_cogs_o` : `numeric` NULL
  - ` 26` `soshipd_cogs_s` : `numeric` NULL
  - ` 27` `soshipd_qty_delivery` : `numeric` NULL
  - ` 28` `soshipd_qty_packaging_delivery` : `numeric` NULL
  - ` 29` `soshipd_cogs_tl_m` : `numeric` NULL
  - ` 30` `soshipd_cogs_tl_l` : `numeric` NULL
  - ` 31` `soshipd_cogs_tl_b` : `numeric` NULL
  - ` 32` `soshipd_cogs_tl_o` : `numeric` NULL
  - ` 33` `soshipd_cogs_tl_s` : `numeric` NULL
  - ` 34` `soshipd_siteid_id` : `integer` NULL
  - ` 35` `soshipd_amount_restitution` : `numeric` NULL
  - ` 36` `soshipd_price` : `numeric` NULL
  - ` 37` `soshipd_disc` : `numeric` NULL
  - ` 38` `soshipd_disc_amount` : `numeric` NULL
  - ` 39` `soshipd_ppn` : `numeric` NULL
  - ` 40` `soshipd_pph` : `numeric` NULL
  - ` 41` `soshipd_price_line` : `numeric` NULL
  - ` 42` `soshipd_tax_class` : `integer` NULL
  - ` 43` `soshipd_remarks` : `character varying` NULL

### `public.soshipds_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soshipds_oid` : `uuid` NOT NULL
  - `  2` `soshipds_soshipd_oid` : `uuid` NULL
  - `  3` `soshipds_seq` : `smallint` NULL
  - `  4` `soshipds_qty` : `numeric` NULL
  - `  5` `soshipds_qty_real` : `numeric` NOT NULL
  - `  6` `soshipds_si_id` : `integer` NULL
  - `  7` `soshipds_loc_id` : `bigint` NULL
  - `  8` `soshipds_lot_serial` : `character varying` NULL
  - `  9` `soshipds_dt` : `timestamp without time zone` NULL
  - ` 10` `soshipds_qty_packaging` : `numeric` NULL
  - ` 11` `soshipds_exp_date` : `date` NULL
  - ` 12` `soshipds_um_conv` : `numeric` NULL
  - ` 13` `soshipds_qty_delivery` : `numeric` NULL
  - ` 14` `soshipds_qty_packaging_delivery` : `numeric` NULL
  - ` 15` `soshipds_remarks` : `character varying` NULL

### `public.soshippe_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `soshippe_oid` : `uuid` NOT NULL
  - `  2` `soshippe_dom_id` : `smallint` NOT NULL
  - `  3` `soshippe_en_id` : `integer` NOT NULL
  - `  4` `soshippe_branch_id` : `integer` NOT NULL
  - `  5` `soshippe_add_by` : `character varying` NULL
  - `  6` `soshippe_add_date` : `timestamp without time zone` NULL
  - `  7` `soshippe_upd_by` : `character varying` NULL
  - `  8` `soshippe_upd_date` : `timestamp without time zone` NULL
  - `  9` `soshippe_dt` : `timestamp without time zone` NULL
  - ` 10` `soshippe_code` : `character varying` NULL
  - ` 11` `soshippe_date` : `date` NULL
  - ` 12` `soshippe_ptnr_id` : `integer` NOT NULL
  - ` 13` `soshippe_so_oid` : `uuid` NOT NULL
  - ` 14` `soshippe_status` : `character` NULL
  - ` 15` `soshippe_remarks` : `character varying` NULL
  - ` 16` `soshippe_soship_oid` : `uuid` NULL

### `public.sq_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sq_oid` : `uuid` NOT NULL
  - `  2` `sq_dom_id` : `smallint` NULL
  - `  3` `sq_en_id` : `integer` NULL
  - `  4` `sq_add_by` : `character varying` NULL
  - `  5` `sq_add_date` : `timestamp without time zone` NULL
  - `  6` `sq_upd_by` : `character varying` NULL
  - `  7` `sq_upd_date` : `timestamp without time zone` NULL
  - `  8` `sq_code` : `character varying` NULL
  - `  9` `sq_ptnr_id_sold` : `integer` NULL
  - ` 10` `sq_ptnr_id_bill` : `integer` NULL
  - ` 11` `sq_date` : `date` NULL
  - ` 12` `sq_credit_term` : `integer` NULL
  - ` 13` `sq_taxable` : `character` NULL
  - ` 14` `sq_tax_class` : `integer` NULL
  - ` 15` `sq_si_id` : `integer` NULL
  - ` 16` `sq_type` : `character` NULL
  - ` 17` `sq_sales_person` : `integer` NULL
  - ` 18` `sq_pi_id` : `integer` NULL
  - ` 19` `sq_pay_type` : `integer` NULL
  - ` 20` `sq_pay_method` : `integer` NULL
  - ` 21` `sq_dp` : `numeric` NULL
  - ` 22` `sq_disc_header` : `numeric` NULL
  - ` 23` `sq_total` : `numeric` NULL
  - ` 24` `sq_print_count` : `smallint` NULL
  - ` 25` `sq_due_date` : `date` NULL
  - ` 26` `sq_close_date` : `date` NULL
  - ` 27` `sq_tran_id` : `integer` NULL
  - ` 28` `sq_trans_id` : `character` NULL
  - ` 29` `sq_trans_rmks` : `character varying` NULL
  - ` 30` `sq_current_route` : `character varying` NULL
  - ` 31` `sq_next_route` : `character varying` NULL
  - ` 32` `sq_dt` : `timestamp without time zone` NULL
  - ` 33` `sq_bk_appr` : `character` NULL
  - ` 34` `sq_cu_id` : `integer` NULL
  - ` 35` `sq_total_ppn` : `numeric` NULL
  - ` 36` `sq_total_pph` : `numeric` NULL
  - ` 37` `sq_payment` : `numeric` NULL
  - ` 38` `sq_exc_rate` : `numeric` NULL
  - ` 39` `sq_tax_inc` : `character` NULL
  - ` 40` `sq_cons` : `character` NULL
  - ` 41` `sq_terbilang` : `character varying` NULL
  - ` 42` `sq_bk_id` : `integer` NULL
  - ` 43` `sq_interval` : `integer` NULL
  - ` 44` `sq_ref_po_code` : `character varying` NULL
  - ` 45` `sq_ref_po_oid` : `uuid` NULL
  - ` 46` `sq_ppn_type` : `character` NULL
  - ` 47` `sq_ac_prepaid` : `integer` NULL
  - ` 48` `sq_pay_prepaod` : `numeric` NULL
  - ` 49` `sq_ar_ac_id` : `smallint` NULL
  - ` 50` `sq_ar_sb_id` : `smallint` NULL
  - ` 51` `sq_ar_cc_id` : `smallint` NULL
  - ` 52` `sq_need_date` : `date` NULL
  - ` 53` `sq_payment_date` : `date` NULL
  - ` 54` `sq_last_transaction` : `date` NULL

### `public.sqa_attr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sqa_oid` : `uuid` NOT NULL
  - `  2` `sqa_bekerja_pada` : `character varying` NULL
  - `  3` `sqa_jabatan_bagian` : `character varying` NULL
  - `  4` `sqa_kantor_alamat_1` : `character varying` NULL
  - `  5` `sqa_kantor_alamat_2` : `character varying` NULL
  - `  6` `sqa_kantor_lantai` : `character varying` NULL
  - `  7` `sqa_kantor_telp` : `character varying` NULL
  - `  8` `sqa_ktp` : `character varying` NULL
  - `  9` `sqa_email` : `character varying` NULL
  - ` 10` `sqa_rumah_alamat_1` : `character varying` NULL
  - ` 11` `sqa_rumah_alamat_2` : `character varying` NULL
  - ` 12` `sqa_rumah_kode_pos` : `character varying` NULL
  - ` 13` `sqa_rumah_telp` : `character varying` NULL
  - ` 14` `sqa_rumah_hp` : `character varying` NULL
  - ` 15` `sqa_status_alamat_kirim` : `character` NULL
  - ` 16` `sqa_status_alamat_tagih` : `character` NULL
  - ` 17` `sqa_suami_nama` : `character varying` NULL
  - ` 18` `sqa_suami_bekerja` : `character varying` NULL
  - ` 19` `sqa_suami_jabatan` : `character varying` NULL
  - ` 20` `sqa_suami_kantor_alamat_1` : `character varying` NULL
  - ` 21` `sqa_suami_kantor_alamat_2` : `character varying` NULL
  - ` 22` `sqa_suami_telp` : `character varying` NULL
  - ` 23` `sqa_suami_hp` : `character varying` NULL
  - ` 24` `sqa_anak_nama_1` : `character varying` NULL
  - ` 25` `sqa_anak_tgl_lahir_1` : `character varying` NULL
  - ` 26` `sqa_anak_sekolah_1` : `character varying` NULL
  - ` 27` `sqa_anak_nama_2` : `character varying` NULL
  - ` 28` `sqa_anak_tgl_lahir_2` : `character varying` NULL
  - ` 29` `sqa_anak_sekolah_2` : `character varying` NULL
  - ` 30` `sqa_anak_nama_3` : `character varying` NULL
  - ` 31` `sqa_anak_tgl_lahir_3` : `character varying` NULL
  - ` 32` `sqa_anak_sekolah_3` : `character varying` NULL
  - ` 33` `sqa_keluarga_dekat_nama` : `character varying` NULL
  - ` 34` `sqa_keluarga_dekat_alamat_1` : `character varying` NULL
  - ` 35` `sqa_keluarga_dekat_alamat_2` : `character varying` NULL
  - ` 36` `sqa_keluarga_dekat_telp` : `character varying` NULL
  - ` 37` `sqa_keluarga_dekat_hp` : `character varying` NULL
  - ` 38` `sqa_status_tempat_tinggal` : `character` NULL
  - ` 39` `sqa_jenis_kartu_kredit` : `character varying` NULL
  - ` 40` `sqa_no_kartu_kredit` : `character varying` NULL
  - ` 41` `sqa_bank` : `integer` NULL
  - ` 42` `sqa_berlaku_sd` : `date` NULL
  - ` 43` `sqa_dt` : `timestamp without time zone` NULL
  - ` 44` `sqa_kjb_code` : `character varying` NULL
  - ` 45` `sqa_sq_oid` : `uuid` NULL

### `public.sqd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sqd_oid` : `uuid` NOT NULL
  - `  2` `sqd_dom_id` : `smallint` NULL
  - `  3` `sqd_en_id` : `integer` NULL
  - `  4` `sqd_add_by` : `character varying` NULL
  - `  5` `sqd_add_date` : `timestamp without time zone` NULL
  - `  6` `sqd_upd_by` : `character varying` NULL
  - `  7` `sqd_upd_date` : `timestamp without time zone` NULL
  - `  8` `sqd_sq_oid` : `uuid` NULL
  - `  9` `sqd_seq` : `smallint` NULL
  - ` 10` `sqd_is_additional_charge` : `character` NULL
  - ` 11` `sqd_si_id` : `integer` NULL
  - ` 12` `sqd_pt_id` : `bigint` NULL
  - ` 13` `sqd_rmks` : `character varying` NULL
  - ` 14` `sqd_qty` : `numeric` NULL
  - ` 15` `sqd_qty_allocated` : `numeric` NULL
  - ` 16` `sqd_qty_picked` : `numeric` NULL
  - ` 17` `sqd_qty_shipment` : `numeric` NULL
  - ` 18` `sqd_qty_pending_inv` : `numeric` NULL
  - ` 19` `sqd_qty_invoice` : `numeric` NULL
  - ` 20` `sqd_um` : `integer` NULL
  - ` 21` `sqd_cost` : `numeric` NULL
  - ` 22` `sqd_price` : `numeric` NULL
  - ` 23` `sqd_disc` : `numeric` NULL
  - ` 24` `sqd_sales_ac_id` : `integer` NULL
  - ` 25` `sqd_sales_sb_id` : `integer` NULL
  - ` 26` `sqd_sales_cc_id` : `integer` NULL
  - ` 27` `sqd_disc_ac_id` : `integer` NULL
  - ` 28` `sqd_um_conv` : `numeric` NULL
  - ` 29` `sqd_qty_real` : `numeric` NULL
  - ` 30` `sqd_taxable` : `character` NULL
  - ` 31` `sqd_tax_inc` : `character` NULL
  - ` 32` `sqd_tax_class` : `integer` NULL
  - ` 33` `sqd_status` : `character` NULL
  - ` 34` `sqd_dt` : `timestamp without time zone` NULL
  - ` 35` `sqd_payment` : `numeric` NULL
  - ` 36` `sqd_dp` : `numeric` NULL
  - ` 37` `sqd_sales_unit` : `numeric` NULL
  - ` 38` `sqd_loc_id` : `integer` NULL
  - ` 39` `sqd_serial` : `character varying` NULL
  - ` 40` `sqd_qty_return` : `numeric` NULL
  - ` 41` `sqd_ppn_type` : `character` NULL
  - ` 42` `sqd_pod_oid` : `uuid` NULL
  - ` 43` `sqd_qty_ir` : `numeric` NULL
  - ` 44` `sqd_invc_oid` : `uuid` NULL
  - ` 45` `sqd_invc_loc_id` : `integer` NULL
  - ` 46` `sqd_need_date` : `date` NULL
  - ` 47` `sqd_qty_transfer_receipt` : `numeric` NULL
  - ` 48` `sqd_qty_transfer_issue` : `numeric` NULL
  - ` 49` `sqd_total_amount_price` : `numeric` NULL
  - ` 50` `sbd_qty_riud` : `numeric` NULL
  - ` 51` `sbd_qty_processed` : `numeric` NULL
  - ` 52` `sbd_qty_completed` : `numeric` NULL

### `public.sqtsfr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sqtsfr_oid` : `uuid` NOT NULL
  - `  2` `sqtsfr_dom_id` : `smallint` NULL
  - `  3` `sqtsfr_en_id` : `integer` NULL
  - `  4` `sqtsfr_add_by` : `character varying` NULL
  - `  5` `sqtsfr_add_date` : `timestamp without time zone` NULL
  - `  6` `sqtsfr_upd_by` : `character varying` NULL
  - `  7` `sqtsfr_upd_date` : `timestamp without time zone` NULL
  - `  8` `sqtsfr_en_to_id` : `integer` NULL
  - `  9` `sqtsfr_code` : `character varying` NULL
  - ` 10` `sqtsfr_date` : `date` NULL
  - ` 11` `sqtsfr_receive_date` : `date` NULL
  - ` 12` `sqtsfr_si_id` : `integer` NULL
  - ` 13` `sqtsfr_loc_id` : `bigint` NULL
  - ` 14` `sqtsfr_loc_git` : `bigint` NULL
  - ` 15` `sqtsfr_remarks` : `character varying` NULL
  - ` 16` `sqtsfr_trans_id` : `character` NULL
  - ` 17` `sqtsfr_dt` : `timestamp without time zone` NULL
  - ` 18` `sqtsfr_loc_to_id` : `bigint` NULL
  - ` 19` `sqtsfr_si_to_id` : `integer` NULL
  - ` 20` `sqtsfr_pb_oid` : `uuid` NULL
  - ` 21` `sqtsfr_so_oid` : `uuid` NULL
  - ` 22` `pt_tax_class` : `character` NULL
  - ` 23` `sqtsfr_tran_id` : `integer` NULL
  - ` 24` `sqtsfr_sq_oid` : `uuid` NULL

### `public.sqtsfrd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sqtsfrd_oid` : `uuid` NOT NULL
  - `  2` `sqtsfrd_sqtsfr_oid` : `uuid` NULL
  - `  3` `sqtsfrd_seq` : `smallint` NULL
  - `  4` `sqtsfrd_pt_id` : `bigint` NULL
  - `  5` `sqtsfrd_qty` : `numeric` NULL
  - `  6` `sqtsfrd_qty_receive` : `numeric` NULL
  - `  7` `sqtsfrd_um` : `integer` NULL
  - `  8` `sqtsfrd_si_to_id` : `integer` NULL
  - `  9` `sqtsfrd_loc_to_id` : `bigint` NULL
  - ` 10` `sqtsfrd_lot_serial` : `character varying` NULL
  - ` 11` `sqtsfrd_cost` : `numeric` NULL
  - ` 12` `sqtsfrd_dt` : `timestamp without time zone` NULL
  - ` 13` `sqtsfrd_pbd_oid` : `uuid` NULL
  - ` 14` `sqtsfrd_sqd_oid` : `uuid` NULL

### `public.t_sql_out`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sql_uid` : `uuid` NOT NULL
  - `  2` `seq` : `double precision` NULL
  - `  3` `sql_command` : `text` NULL
  - `  4` `waktu` : `timestamp without time zone` NULL
  - `  5` `mili_second` : `integer` NULL
  - `  6` `type` : `character` NULL
  - `  7` `sql_from` : `character varying` NULL

### `public.t_sql_out_tes`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sql_uid` : `uuid` NOT NULL
  - `  2` `seq` : `double precision` NULL
  - `  3` `sql_command` : `text` NULL
  - `  4` `waktu` : `timestamp without time zone` NULL
  - `  5` `mili_second` : `integer` NULL

### `public.tax_addr_remarsk`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tax_addr_oid` : `uuid` NOT NULL
  - `  2` `tax_addr_dom_id` : `smallint` NULL
  - `  3` `tax_addr_en_id` : `integer` NULL
  - `  4` `tax_addr_add_by` : `character varying` NULL
  - `  5` `tax_addr_add_date` : `timestamp without time zone` NULL
  - `  6` `tax_addr_upd_by` : `character varying` NULL
  - `  7` `tax_addr_upd_date` : `timestamp without time zone` NULL
  - `  8` `tax_addr_dt` : `timestamp without time zone` NULL
  - `  9` `tax_addr_id` : `integer` NULL
  - ` 10` `tax_addr_seq` : `integer` NULL
  - ` 11` `tax_addr_code_id` : `integer` NULL
  - ` 12` `tax_addr_code` : `character varying` NULL
  - ` 13` `tax_addr_desc` : `character varying` NULL
  - ` 14` `tax_addr_active` : `character` NULL
  - ` 15` `tax_addr_type` : `character` NULL

### `public.tax_um_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tax_um_oid` : `uuid` NOT NULL
  - `  2` `tax_um_dom_id` : `smallint` NULL
  - `  3` `tax_um_en_id` : `integer` NULL
  - `  4` `tax_um_add_by` : `character varying` NULL
  - `  5` `tax_um_add_date` : `timestamp without time zone` NULL
  - `  6` `tax_um_upd_by` : `character varying` NULL
  - `  7` `tax_um_upd_date` : `timestamp without time zone` NULL
  - `  8` `tax_um_dt` : `timestamp without time zone` NULL
  - `  9` `tax_um_id` : `integer` NULL
  - ` 10` `tax_um_um_id` : `integer` NULL
  - ` 11` `tax_um_code` : `character varying` NULL
  - ` 12` `tax_um_active` : `character` NULL

### `public.taxi_invoice`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `taxi_oid` : `uuid` NOT NULL
  - `  2` `taxi_dom_id` : `smallint` NULL
  - `  3` `taxi_en_id` : `integer` NULL
  - `  4` `taxi_add_by` : `character varying` NULL
  - `  5` `taxi_add_date` : `timestamp without time zone` NULL
  - `  6` `taxi_upd_by` : `character varying` NULL
  - `  7` `taxi_upd_date` : `timestamp without time zone` NULL
  - `  8` `taxi_dt` : `timestamp without time zone` NULL
  - `  9` `taxi_code` : `character varying` NOT NULL
  - ` 10` `taxi_date` : `date` NULL
  - ` 11` `taxi_initial_code` : `character varying` NULL
  - ` 12` `taxi_start_inv_code` : `character varying` NULL
  - ` 13` `taxi_end_inv_code` : `character varying` NULL
  - ` 14` `taxi_remarks` : `character varying` NULL
  - ` 15` `taxi_active` : `character` NOT NULL

### `public.taxid_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `taxid_oid` : `uuid` NOT NULL
  - `  2` `taxid_taxi_oid` : `uuid` NULL
  - `  3` `taxid_code` : `character varying` NULL
  - `  4` `taxid_status` : `character` NULL

### `public.taxr_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `taxr_oid` : `uuid` NOT NULL
  - `  2` `taxr_dom_id` : `smallint` NULL
  - `  3` `taxr_add_by` : `character varying` NULL
  - `  4` `taxr_add_date` : `timestamp without time zone` NULL
  - `  5` `taxr_upd_by` : `character varying` NULL
  - `  6` `taxr_upd_date` : `timestamp without time zone` NULL
  - `  7` `taxr_tax_type` : `integer` NULL
  - `  8` `taxr_tax_class` : `integer` NULL
  - `  9` `taxr_date` : `date` NULL
  - ` 10` `taxr_rate` : `numeric` NULL
  - ` 11` `taxr_ac_sales_id` : `integer` NULL
  - ` 12` `taxr_sb_sales_id` : `integer` NULL
  - ` 13` `taxr_cc_sales_id` : `integer` NULL
  - ` 14` `taxr_ac_ap_id` : `integer` NULL
  - ` 15` `taxr_sb_ap_id` : `integer` NULL
  - ` 16` `taxr_cc_ap_id` : `integer` NULL
  - ` 17` `taxr_active` : `character` NOT NULL
  - ` 18` `taxr_dt` : `timestamp without time zone` NULL
  - ` 19` `taxr_ac_ar_id` : `integer` NULL

### `public.tconf_columns`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `form_name` : `character varying` NULL
  - `  2` `gv_name` : `character varying` NULL
  - `  3` `userid` : `smallint` NULL
  - `  4` `column_name` : `character varying` NULL
  - `  5` `status_visible` : `boolean` NULL
  - `  6` `visible_index` : `smallint` NULL
  - `  7` `status_visible_awal` : `boolean` NULL
  - `  8` `visible_index_awal` : `smallint` NULL
  - `  9` `fixed` : `boolean` NULL
  - ` 10` `fixed_alignment` : `character varying` NULL

### `public.tconfchart`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `smallint` NULL
  - `  2` `form_name` : `character varying` NULL
  - `  3` `chart_name` : `character varying` NULL
  - `  4` `chart_view` : `character varying` NULL
  - `  5` `chart_appearance` : `character varying` NULL
  - `  6` `bar_appearance` : `character varying` NULL
  - `  7` `explode` : `character varying` NULL
  - `  8` `label_position` : `character varying` NULL
  - `  9` `view_label` : `boolean` NULL
  - ` 10` `value_percent` : `boolean` NULL

### `public.tconfchart_setting`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `chart_uid` : `uuid` NOT NULL
  - `  2` `chart_name` : `character varying` NULL
  - `  3` `chart_type` : `character varying` NULL
  - `  4` `chart_min` : `numeric` NULL
  - `  5` `chart_max` : `numeric` NULL
  - `  6` `chart_mode` : `integer` NULL
  - `  7` `chart_user_id` : `character varying` NULL
  - `  8` `chart_start_date` : `date` NULL
  - `  9` `chart_end_date` : `date` NULL
  - ` 10` `chart_pl_id` : `integer` NULL
  - ` 11` `chart_loc_id` : `integer` NULL
  - ` 12` `chart_en_id` : `integer` NULL
  - ` 13` `chart_add_by` : `character varying` NULL
  - ` 14` `chart_add_date` : `timestamp without time zone` NULL
  - ` 15` `chart_upd_by` : `character varying` NULL
  - ` 16` `chart_upd_date` : `timestamp without time zone` NULL
  - ` 17` `chart_code_id` : `integer` NULL
  - ` 18` `chart_userid` : `integer` NULL

### `public.tconffavorite`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `form_name` : `character varying` NOT NULL
  - `  2` `userid` : `smallint` NOT NULL
  - `  3` `form_caption` : `character varying` NULL

### `public.tconfgroup`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `groupid` : `integer` NOT NULL
  - `  2` `groupkode` : `character varying` NULL
  - `  3` `groupnama` : `character varying` NULL
  - `  4` `groupactive` : `character` NULL
  - `  5` `grouphris` : `character varying` NULL
  - `  6` `group_is_cost` : `character` NULL
  - `  7` `groupdefault` : `character` NULL

### `public.tconfmenu`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `groupid` : `integer` NOT NULL
  - `  2` `menuid` : `integer` NOT NULL
  - `  3` `enablestatus` : `boolean` NULL
  - `  4` `visiblestatus` : `boolean` NULL
  - `  5` `editablestatus` : `boolean` NULL
  - `  6` `deleteablestatus` : `boolean` NULL
  - `  7` `insertablestatus` : `boolean` NULL
  - `  8` `cancelablestatus` : `boolean` NULL

### `public.tconfmenucollection`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `menuid` : `integer` NOT NULL
  - `  2` `menuname` : `character varying` NULL
  - `  3` `menuid_parent` : `integer` NULL
  - `  4` `menudesc` : `character varying` NULL
  - `  5` `menuseq` : `numeric` NULL

### `public.tconfmenuuser`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `menuid` : `integer` NOT NULL
  - `  3` `enablestatus` : `boolean` NULL
  - `  4` `visiblestatus` : `boolean` NULL
  - `  5` `editablestatus` : `boolean` NULL
  - `  6` `deleteablestatus` : `boolean` NULL
  - `  7` `insertablestatus` : `boolean` NULL
  - `  8` `cancelablestatus` : `boolean` NULL

### `public.tconfmycustom`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `form_alias` : `character varying` NOT NULL
  - `  2` `userid` : `smallint` NOT NULL
  - `  3` `form_name_asal` : `character varying` NULL
  - `  4` `form_name_baru` : `character varying` NULL

### `public.tconfsetting`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `create_jurnal` : `boolean` NULL
  - `  2` `server_code` : `character` NULL
  - `  3` `xmpp_name` : `character varying` NULL
  - `  4` `xmpp_ip` : `character varying` NULL
  - `  5` `version` : `character varying` NULL
  - `  6` `version2` : `character varying` NULL

### `public.tconfsetting_pldproject`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NOT NULL
  - `  2` `ac_id` : `integer` NOT NULL
  - `  3` `seq` : `integer` NOT NULL

### `public.tconfsetting_plproject`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NOT NULL
  - `  2` `remark` : `character varying` NULL
  - `  3` `sort_number` : `integer` NULL

### `public.tconfsettingacc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NOT NULL
  - `  2` `remark` : `character varying` NULL
  - `  3` `setting` : `integer` NULL

### `public.tconfsettingcashflow`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NOT NULL
  - `  2` `remark` : `character varying` NULL
  - `  3` `sort_number` : `integer` NULL
  - `  4` `remark_header` : `character varying` NULL
  - `  5` `remark_footer` : `character varying` NULL
  - `  6` `cfsign_header` : `character varying` NULL

### `public.tconfsettingcashflowdet`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NOT NULL
  - `  2` `ac_id` : `integer` NOT NULL
  - `  3` `seq` : `integer` NOT NULL
  - `  4` `cfsign` : `character varying` NULL

### `public.tconfsettingendmoth`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `end_oid` : `uuid` NOT NULL
  - `  2` `end_ac_id_from` : `integer` NULL
  - `  3` `end_ac_id_to` : `integer` NULL
  - `  4` `end_seq` : `integer` NULL
  - `  5` `end_remark` : `character varying` NULL
  - `  6` `end_step` : `integer` NULL

### `public.tconfsettingprofitloss`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NOT NULL
  - `  2` `remark` : `character varying` NULL
  - `  3` `sort_number` : `integer` NULL
  - `  4` `remark_header` : `character varying` NULL
  - `  5` `remark_footer` : `character varying` NULL

### `public.tconfsettingprofitlossdet`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `code` : `character varying` NOT NULL
  - `  2` `ac_id` : `integer` NOT NULL
  - `  3` `seq` : `integer` NOT NULL

### `public.tconfskin`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `form_skin` : `character varying` NULL
  - `  3` `mainmenu_style` : `character varying` NULL
  - `  4` `grid_style` : `character varying` NULL
  - `  5` `hris_master_data` : `boolean` NULL
  - `  6` `hris_recrutment` : `boolean` NULL
  - `  7` `hris_hr` : `boolean` NULL
  - `  8` `hris_payroll` : `boolean` NULL
  - `  9` `erp_master_data` : `boolean` NULL
  - ` 10` `erp_distribution` : `boolean` NULL
  - ` 11` `erp_manufacturing` : `boolean` NULL
  - ` 12` `erp_financial` : `boolean` NULL
  - ` 13` `erp_customer_services` : `boolean` NULL
  - ` 14` `hris_attendance` : `boolean` NULL
  - ` 15` `syspro_financial` : `boolean` NULL
  - ` 16` `syspro_additional` : `boolean` NULL

### `public.tconfuser`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `userkode` : `character varying` NULL
  - `  3` `usernama` : `character varying` NULL
  - `  4` `password` : `character varying` NULL
  - `  5` `groupid` : `integer` NULL
  - `  6` `last_access` : `timestamp without time zone` NULL
  - `  7` `id_karyawan` : `integer` NULL
  - `  8` `time_reminder` : `integer` NULL
  - `  9` `en_id` : `integer` NOT NULL
  - ` 10` `useractive` : `character` NULL
  - ` 11` `useremail` : `character varying` NULL
  - ` 12` `usernik` : `character varying` NULL
  - ` 13` `userpidgin` : `character varying` NULL
  - ` 14` `userpidgin_hris` : `character varying` NULL
  - ` 15` `force_change_pass` : `character` NULL
  - ` 16` `multiple_login` : `character` NULL
  - ` 17` `on_use` : `character` NULL
  - ` 18` `ipaddress_login` : `character varying` NULL
  - ` 19` `is_receipt_mail_group` : `character` NULL
  - ` 20` `login_count` : `integer` NULL
  - ` 21` `user_loc_id` : `integer` NULL
  - ` 22` `user_branch_id` : `integer` NOT NULL
  - ` 23` `server_code_default` : `character varying` NULL
  - ` 24` `force_change_pass_last_date` : `date` NULL
  - ` 25` `force_change_pass_interval` : `smallint` NULL
  - ` 26` `user_cc_id` : `integer` NULL
  - ` 27` `user_sp_id` : `integer` NULL
  - ` 28` `user_xemp_id` : `bigint` NULL
  - ` 29` `theme` : `character varying` NULL
  - ` 30` `reset_password_token` : `uuid` NULL
  - ` 31` `reset_password_expires_at` : `timestamp without time zone` NULL
  - ` 32` `last_password_reset_at` : `timestamp without time zone` NULL
  - ` 33` `google_id` : `text` NULL
  - ` 34` `photo_url_path` : `text` NULL
  - ` 35` `no_hp` : `text` NULL
  - ` 36` `is_2fa` : `boolean` NULL
  - ` 37` `tipe_2fa` : `character varying` NULL
  - ` 39` `recovery_code_2fa` : `text` NULL
  - ` 40` `last_login_device` : `text` NULL
  - ` 41` `secret_key_2fa` : `text` NULL
  - ` 42` `old_email` : `text` NULL
  - ` 43` `is_verified_email` : `boolean` NOT NULL

### `public.tconfuser_2fa_history`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `user_2fa_history_id` : `uuid` NOT NULL
  - `  2` `userid` : `integer` NOT NULL
  - `  3` `date_access` : `timestamp without time zone` NOT NULL
  - `  4` `login_device` : `text` NOT NULL

### `public.tconfuserarea`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `area_id` : `integer` NOT NULL

### `public.tconfusercc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `cc_id` : `integer` NOT NULL

### `public.tconfuserdomain`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `user_dom_id` : `integer` NOT NULL

### `public.tconfuserentity`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `user_en_id` : `integer` NOT NULL

### `public.tconfuserentityview`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `user_en_id` : `integer` NOT NULL

### `public.tconfusergroup`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userid` : `integer` NOT NULL
  - `  2` `groupid` : `integer` NOT NULL

### `public.temp_ass_trans_post`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ass_id` : `integer` NOT NULL
  - `  2` `tahun` : `integer` NOT NULL
  - `  3` `bulan` : `integer` NOT NULL
  - `  4` `tanggal` : `date` NULL
  - `  5` `depr_per_month` : `numeric` NULL
  - `  6` `depr_acumulasi` : `numeric` NULL
  - `  7` `usr_id` : `integer` NOT NULL

### `public.temp_invct_table`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `invct_oid` : `uuid` NOT NULL
  - `  2` `invct_dom_id` : `smallint` NULL
  - `  3` `invct_pt_id` : `bigint` NULL
  - `  4` `invct_date` : `timestamp without time zone` NULL
  - `  5` `invct_qty` : `numeric` NULL
  - `  6` `invct_cost` : `numeric` NULL
  - `  7` `invct_en_id` : `integer` NULL
  - `  8` `invct_si_id` : `integer` NULL

### `public.temp_pt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `pt_oid` : `uuid` NOT NULL
  - `  2` `pt_dom_id` : `smallint` NULL
  - `  3` `pt_en_id` : `integer` NULL
  - `  4` `pt_add_by` : `character varying` NULL
  - `  5` `pt_add_date` : `timestamp without time zone` NULL
  - `  6` `pt_upd_by` : `character varying` NULL
  - `  7` `pt_upd_date` : `timestamp without time zone` NULL
  - `  8` `pt_id` : `bigint` NOT NULL
  - `  9` `pt_code` : `character varying` NULL
  - ` 10` `pt_desc1` : `character varying` NULL
  - ` 11` `pt_desc2` : `character varying` NULL
  - ` 12` `pt_pl_id` : `integer` NULL
  - ` 13` `pt_um` : `integer` NULL
  - ` 14` `pt_its_id` : `integer` NULL
  - ` 15` `pt_type` : `character` NULL
  - ` 16` `pt_cost_method` : `character` NULL
  - ` 17` `pt_loc_type` : `integer` NULL
  - ` 18` `pt_po_is` : `integer` NULL
  - ` 19` `pt_group` : `integer` NULL
  - ` 20` `pt_taxable` : `character` NOT NULL
  - ` 21` `pt_pm_code` : `character` NULL
  - ` 22` `pt_ls` : `character` NULL
  - ` 23` `pt_sfty_stk` : `numeric` NULL
  - ` 24` `pt_rop` : `numeric` NULL
  - ` 25` `pt_ord_min` : `numeric` NULL
  - ` 26` `pt_ord_max` : `numeric` NULL
  - ` 27` `pt_cost` : `numeric` NULL
  - ` 28` `pt_price` : `numeric` NULL
  - ` 29` `pt_dt` : `timestamp without time zone` NULL
  - ` 30` `pt_loc_id` : `integer` NULL
  - ` 31` `pt_syslog_code` : `character varying` NULL
  - ` 32` `pt_class` : `character` NULL
  - ` 33` `pt_writer_id` : `integer` NULL
  - ` 34` `pt_eng_id` : `integer` NULL
  - ` 35` `pt_ppn_type` : `character` NULL
  - ` 36` `pt_tax_class` : `integer` NULL
  - ` 37` `pt_si_id` : `integer` NULL
  - ` 38` `pt_tax_inc` : `character` NULL
  - ` 39` `pt_approval_status` : `character` NULL
  - ` 40` `pt_isbn` : `character varying` NULL
  - ` 41` `pt_phantom` : `character` NULL
  - ` 42` `pt_ro_id` : `integer` NULL
  - ` 43` `pt_class_id` : `integer` NULL
  - ` 44` `pt_size` : `character varying` NULL
  - ` 45` `pt_page_cover` : `integer` NULL
  - ` 46` `pt_page_content` : `integer` NULL
  - ` 47` `pt_colour_cover` : `character varying` NULL
  - ` 48` `pt_colour_content` : `character varying` NULL
  - ` 49` `pt_material_cover` : `character varying` NULL
  - ` 50` `pt_material_content` : `character varying` NULL
  - ` 51` `pt_bookbinding` : `character varying` NULL
  - ` 52` `pt_finishing` : `character varying` NULL
  - ` 53` `pt_packing` : `character varying` NULL
  - ` 54` `pt_remarks` : `character varying` NULL
  - ` 55` `pt_gramatur` : `numeric` NULL

### `public.tempm_mutasi`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tempm_oid` : `uuid` NOT NULL
  - `  2` `tempm_pt_id` : `bigint` NOT NULL
  - `  3` `tempm_loc_id` : `bigint` NOT NULL
  - `  4` `tempm_trans_desc` : `character varying` NOT NULL
  - `  5` `tempm_trans_qty` : `numeric` NULL
  - `  6` `tempm_usr_id` : `integer` NOT NULL

### `public.tgslsp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tgslsp_oid` : `uuid` NOT NULL
  - `  2` `tgslsp_dom_id` : `smallint` NOT NULL
  - `  3` `tgslsp_en_id` : `integer` NOT NULL
  - `  4` `tgslsp_add_by` : `character varying` NULL
  - `  5` `tgslsp_add_date` : `timestamp without time zone` NULL
  - `  6` `tgslsp_upd_by` : `character varying` NULL
  - `  7` `tgslsp_upd_date` : `timestamp without time zone` NULL
  - `  8` `tgslsp_dt` : `timestamp without time zone` NULL
  - `  9` `tgslsp_id` : `integer` NOT NULL
  - ` 10` `tgslsp_year` : `integer` NULL
  - ` 11` `tgslsp_first_date` : `date` NULL
  - ` 12` `tgslsp_last_date` : `date` NULL
  - ` 13` `tgslsp_seq` : `smallint` NULL

### `public.thp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `thp_oid` : `uuid` NOT NULL
  - `  2` `thp_add_date` : `timestamp without time zone` NULL
  - `  3` `thp_add_by` : `character varying` NULL
  - `  4` `thp_upd_date` : `timestamp without time zone` NULL
  - `  5` `thp_upd_by` : `character varying` NULL
  - `  6` `thp_dt` : `timestamp without time zone` NULL
  - `  7` `thp_dom_id` : `smallint` NOT NULL
  - `  8` `thp_en_id` : `integer` NOT NULL
  - `  9` `thp_name` : `character varying` NULL
  - ` 10` `thp_kpi` : `numeric` NULL
  - ` 11` `thp_prct` : `numeric` NULL
  - ` 12` `thp_active` : `character` NULL

### `public.thpsp_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `thpsp_oid` : `uuid` NOT NULL
  - `  2` `thpsp_kpit_oid` : `uuid` NOT NULL
  - `  3` `thpsp_dt` : `timestamp without time zone` NULL
  - `  4` `thpsp_sales_id` : `integer` NOT NULL
  - `  5` `thpsp_kpi_prct` : `numeric` NULL
  - `  6` `thpsp_thp_prct` : `numeric` NULL
  - `  7` `thpsp_thp_prct_add` : `numeric` NULL

### `public.ti_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `ti_oid` : `uuid` NOT NULL
  - `  2` `ti_dom_id` : `smallint` NULL
  - `  3` `ti_en_id` : `integer` NULL
  - `  4` `ti_add_by` : `character varying` NULL
  - `  5` `ti_add_date` : `timestamp without time zone` NULL
  - `  6` `ti_upd_by` : `character varying` NULL
  - `  7` `ti_upd_date` : `timestamp without time zone` NULL
  - `  8` `ti_dt` : `timestamp without time zone` NULL
  - `  9` `ti_code` : `character varying` NULL
  - ` 10` `ti_date` : `date` NULL
  - ` 11` `ti_sign_id` : `integer` NOT NULL
  - ` 12` `ti_ptnr_id` : `integer` NOT NULL
  - ` 13` `ti_status` : `character` NULL
  - ` 14` `ti_customer_type` : `character varying` NULL
  - ` 15` `ti_area` : `character varying` NULL
  - ` 16` `ti_ppn_type` : `character` NULL
  - ` 17` `ti_tran_id` : `integer` NULL
  - ` 18` `ti_trans_id` : `character` NULL
  - ` 19` `ti_rev` : `smallint` NULL
  - ` 20` `ti_unstrikeout` : `character varying` NULL
  - ` 21` `ti_ti_oid` : `uuid` NULL
  - ` 22` `ti_cu_id` : `integer` NULL
  - ` 23` `ti_so_cash` : `character` NULL
  - ` 24` `ti_ref_ar` : `character varying` NULL
  - ` 25` `ti_ref_so` : `character varying` NULL
  - ` 26` `ti_branch_id` : `integer` NULL
  - ` 27` `ti_is_auto` : `character` NULL
  - ` 28` `ti_code_original` : `character varying` NULL
  - ` 29` `ti_exc_rate` : `numeric` NULL
  - ` 30` `ti_export_count` : `integer` NULL

### `public.tia_ar`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tia_oid` : `uuid` NOT NULL
  - `  2` `tia_ti_oid` : `uuid` NULL
  - `  3` `tia_seq` : `smallint` NULL
  - `  4` `tia_ar_oid` : `uuid` NULL

### `public.tip_pt`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tip_oid` : `uuid` NOT NULL
  - `  2` `tip_ti_oid` : `uuid` NULL
  - `  3` `tip_seq` : `smallint` NULL
  - `  4` `tip_pt_id` : `integer` NULL
  - `  5` `tip_qty` : `numeric` NULL
  - `  6` `tip_price` : `numeric` NULL
  - `  7` `tip_ppn` : `numeric` NULL
  - `  8` `tip_pph` : `numeric` NULL
  - `  9` `tip_total` : `numeric` NULL
  - ` 10` `tip_disc` : `numeric` NULL
  - ` 11` `tip_soshipd_oid` : `uuid` NULL
  - ` 12` `tip_tax_rate` : `numeric` NULL
  - ` 13` `tip_exc_rate` : `numeric` NULL
  - ` 14` `tip_so_price` : `numeric` NULL
  - ` 15` `tip_so_disc` : `numeric` NULL
  - ` 16` `tip_so_disc_value` : `numeric` NULL
  - ` 17` `tip_tax_class` : `integer` NULL
  - ` 18` `tip_taxable` : `character` NULL
  - ` 19` `tip_tax_include` : `character` NULL

### `public.tipg_group`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tipg_oid` : `uuid` NOT NULL
  - `  2` `tipg_dom_id` : `smallint` NULL
  - `  3` `tipg_add_by` : `character varying` NULL
  - `  4` `tipg_add_date` : `timestamp without time zone` NULL
  - `  5` `tipg_upd_by` : `character varying` NULL
  - `  6` `tipg_upd_date` : `timestamp without time zone` NULL
  - `  7` `tipg_dt` : `timestamp without time zone` NULL
  - `  8` `tipg_code` : `character varying` NULL
  - `  9` `tipg_desc` : `character varying` NULL
  - ` 10` `tipg_ptnr_id` : `integer` NULL

### `public.tipgd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tipgd_oid` : `uuid` NOT NULL
  - `  2` `tipgd_tipg_oid` : `uuid` NULL
  - `  3` `tipgd_seq` : `smallint` NULL
  - `  4` `tipgd_en_id` : `integer` NULL
  - `  5` `tipgd_ptnr_id` : `integer` NULL
  - `  6` `tipgd_remarks` : `character varying` NULL

### `public.tis_soship`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tis_oid` : `uuid` NOT NULL
  - `  2` `tis_ti_oid` : `uuid` NULL
  - `  3` `tis_seq` : `smallint` NULL
  - `  4` `tis_soship_oid` : `uuid` NULL

### `public.tld_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tld_oid` : `uuid` NOT NULL
  - `  2` `tld_dom_id` : `smallint` NOT NULL
  - `  3` `tld_en_id` : `integer` NOT NULL
  - `  4` `tld_add_by` : `character varying` NULL
  - `  5` `tld_add_date` : `timestamp without time zone` NULL
  - `  6` `tld_upd_by` : `character varying` NULL
  - `  7` `tld_upd_date` : `timestamp without time zone` NULL
  - `  8` `tld_dt` : `timestamp without time zone` NULL
  - `  9` `tld_id` : `integer` NOT NULL
  - ` 10` `tld_loc_id` : `integer` NOT NULL
  - ` 11` `tld_tran_type` : `character varying` NOT NULL
  - ` 12` `tld_user_id` : `integer` NOT NULL
  - ` 13` `tld_branch_id` : `integer` NOT NULL

### `public.tphone`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tphone_oid` : `uuid` NOT NULL
  - `  2` `notification_status` : `character varying` NULL
  - `  3` `notification_phone` : `character varying` NULL
  - `  4` `remark` : `character varying` NULL

### `public.tracjob_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tracjob_oid` : `uuid` NOT NULL
  - `  2` `tracjob_dom_id` : `smallint` NOT NULL
  - `  3` `tracjob_en_id` : `integer` NOT NULL
  - `  4` `tracjob_add_by` : `character varying` NULL
  - `  5` `tracjob_add_date` : `timestamp without time zone` NULL
  - `  6` `tracjob_upd_by` : `character varying` NULL
  - `  7` `tracjob_upd_date` : `timestamp without time zone` NULL
  - `  8` `tracjob_dt` : `timestamp without time zone` NULL
  - `  9` `tracjob_date` : `date` NULL
  - ` 10` `tracjob_machine_id` : `integer` NOT NULL
  - ` 11` `tracjob_start_time` : `timestamp without time zone` NULL
  - ` 12` `tracjob_end_time` : `timestamp without time zone` NULL
  - ` 13` `tracjob_lfbt_id` : `integer` NOT NULL
  - ` 14` `tracjob_wop_oid` : `uuid` NULL
  - ` 15` `tracjob_katern1_code` : `character varying` NULL
  - ` 16` `tracjob_katern2_code` : `character varying` NULL
  - ` 17` `tracjob_page` : `numeric` NULL
  - ` 18` `tracjob_color` : `numeric` NULL
  - ` 19` `tracjob_teller` : `numeric` NULL
  - ` 20` `tracjob_oplah` : `numeric` NULL
  - ` 21` `tracjob_remarks` : `character varying` NULL
  - ` 22` `tracjob_run_crew` : `integer` NULL
  - ` 23` `tracjob_xemp_id` : `integer` NOT NULL
  - ` 24` `tracjob_code` : `character varying` NOT NULL

### `public.tran_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tran_oid` : `uuid` NOT NULL
  - `  2` `tran_id` : `integer` NULL
  - `  3` `tran_table` : `character varying` NULL
  - `  4` `tran_name` : `character varying` NULL
  - `  5` `tran_desc` : `character varying` NULL
  - `  6` `tran_review_amount` : `character` NULL
  - `  7` `tran_dt` : `timestamp without time zone` NULL
  - `  8` `tran_active` : `character` NULL
  - `  9` `tran_com` : `character` NULL
  - ` 10` `tran_type` : `character` NULL
  - ` 11` `tran_add_by` : `character varying` NULL
  - ` 12` `tran_add_date` : `timestamp without time zone` NULL
  - ` 13` `tran_upd_by` : `character varying` NULL
  - ` 14` `tran_upd_date` : `timestamp without time zone` NULL

### `public.tranaprvd_dok`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tranaprvd_oid` : `uuid` NOT NULL
  - `  2` `tranaprvd_dom_id` : `smallint` NULL
  - `  3` `tranaprvd_en_id` : `integer` NULL
  - `  4` `tranaprvd_add_by` : `character varying` NULL
  - `  5` `tranaprvd_add_date` : `timestamp without time zone` NULL
  - `  6` `tranaprvd_upd_by` : `character varying` NULL
  - `  7` `tranaprvd_upd_date` : `timestamp without time zone` NULL
  - `  8` `tranaprvd_dt` : `timestamp without time zone` NULL
  - `  9` `tranaprvd_tran_oid` : `uuid` NULL
  - ` 10` `tranaprvd_tran_code` : `character varying` NULL
  - ` 11` `tranaprvd_name_1` : `character varying` NULL
  - ` 12` `tranaprvd_name_2` : `character varying` NULL
  - ` 13` `tranaprvd_name_3` : `character varying` NULL
  - ` 14` `tranaprvd_name_4` : `character varying` NULL
  - ` 15` `tranaprvd_pos_1` : `character varying` NULL
  - ` 16` `tranaprvd_pos_2` : `character varying` NULL
  - ` 17` `tranaprvd_pos_3` : `character varying` NULL
  - ` 18` `tranaprvd_pos_4` : `character varying` NULL
  - ` 19` `tranaprvd_name_5` : `character varying` NULL
  - ` 20` `tranaprvd_name_6` : `character varying` NULL
  - ` 21` `tranaprvd_name_7` : `character varying` NULL
  - ` 22` `tranaprvd_name_8` : `character varying` NULL
  - ` 23` `tranaprvd_pos_5` : `character varying` NULL
  - ` 24` `tranaprvd_pos_6` : `character varying` NULL
  - ` 25` `tranaprvd_pos_7` : `character varying` NULL
  - ` 26` `tranaprvd_pos_8` : `character varying` NULL
  - ` 27` `tranaprvd_sign_1` : `character varying` NULL
  - ` 28` `tranaprvd_sign_2` : `character varying` NULL
  - ` 29` `tranaprvd_sign_3` : `character varying` NULL
  - ` 30` `tranaprvd_sign_4` : `character varying` NULL
  - ` 31` `tranaprvd_cap_1` : `character varying` NULL
  - ` 32` `tranaprvd_cap_2` : `character varying` NULL
  - ` 33` `tranaprvd_cap_3` : `character varying` NULL
  - ` 34` `tranaprvd_cap_4` : `character varying` NULL

### `public.trand_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `trand_oid` : `uuid` NOT NULL
  - `  2` `trand_tran_oid` : `uuid` NULL
  - `  3` `trand_en_id` : `integer` NULL
  - `  4` `trand_seq` : `smallint` NULL
  - `  5` `trand_trans_id` : `character` NULL
  - `  6` `trand_edit` : `character` NULL
  - `  7` `trand_delete` : `character` NULL
  - `  8` `trand_dt` : `timestamp without time zone` NULL

### `public.trane_entity`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `trane_oid` : `uuid` NOT NULL
  - `  2` `trane_tran_oid` : `uuid` NULL
  - `  3` `trane_seq` : `smallint` NULL
  - `  4` `trane_trans_id` : `character` NULL
  - `  5` `trane_edit` : `character` NULL
  - `  6` `trane_delete` : `character` NULL
  - `  7` `trane_dt` : `timestamp without time zone` NULL

### `public.traninv_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `traninv_oid` : `uuid` NOT NULL
  - `  2` `traninv_id` : `integer` NOT NULL
  - `  3` `traninv_code` : `character varying` NULL
  - `  4` `traninv_name` : `character varying` NULL

### `public.tranl_list`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tranl_oid` : `uuid` NOT NULL
  - `  2` `tranl_tran_oid` : `uuid` NULL
  - `  3` `tranl_name` : `character varying` NULL
  - `  4` `tranl_upd_date` : `timestamp without time zone` NULL
  - `  5` `tranl_upd_by` : `character varying` NULL
  - `  6` `tranl_dt` : `timestamp without time zone` NULL
  - `  7` `tranl_status` : `boolean` NULL

### `public.trans_status`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `trans_oid` : `uuid` NOT NULL
  - `  2` `trans_id` : `character` NULL
  - `  3` `trans_desc` : `character varying` NULL
  - `  4` `trans_wf_start` : `character` NULL
  - `  5` `trans_dt` : `timestamp without time zone` NULL

### `public.tranu_usr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `tranu_oid` : `uuid` NOT NULL
  - `  2` `tranu_tran_id` : `integer` NULL
  - `  3` `tranu_user_id` : `integer` NULL
  - `  4` `tranu_dt` : `timestamp without time zone` NULL

### `public.um_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `um_oid` : `uuid` NOT NULL
  - `  2` `um_dom_id` : `smallint` NULL
  - `  3` `um_add_by` : `character varying` NULL
  - `  4` `um_add_date` : `timestamp without time zone` NULL
  - `  5` `um_upd_by` : `character varying` NULL
  - `  6` `um_upd_date` : `timestamp without time zone` NULL
  - `  7` `um_pt_um` : `integer` NULL
  - `  8` `um_pt_um_alt` : `integer` NULL
  - `  9` `um_conv` : `numeric` NULL
  - ` 10` `um_active` : `character` NULL
  - ` 11` `um_dt` : `timestamp without time zone` NULL
  - ` 12` `um_pt_id` : `bigint` NULL
  - ` 13` `um_en_id` : `integer` NULL

### `public.user_branch`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `user_userid` : `integer` NOT NULL
  - `  2` `user_branch_id` : `integer` NOT NULL

### `public.user_online`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `id_oid` : `uuid` NOT NULL
  - `  2` `time_stamp` : `timestamp without time zone` NULL
  - `  3` `ip_address` : `character varying` NULL
  - `  4` `userid` : `integer` NULL
  - `  5` `port` : `integer` NULL

### `public.user_wc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `user_userid` : `integer` NOT NULL
  - `  2` `user_wc_id` : `integer` NOT NULL

### `public.userac_accs`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userac_oid` : `uuid` NOT NULL
  - `  2` `userac_user_id` : `integer` NULL
  - `  3` `userac_login_date` : `timestamp without time zone` NULL
  - `  4` `userac_logout_date` : `timestamp without time zone` NULL
  - `  5` `userac_computer_name` : `character varying` NULL
  - `  6` `userac_user_computer` : `character varying` NULL
  - `  7` `userac_user_syspro` : `character varying` NULL
  - `  8` `userac_syspro_version` : `character varying` NULL
  - `  9` `userac_ip_address` : `character varying` NULL

### `public.useraccd_dml`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `useraccd_oid` : `uuid` NOT NULL
  - `  2` `date_activity` : `timestamp without time zone` NULL
  - `  3` `user_id` : `character varying` NULL
  - `  4` `activity` : `character varying` NULL
  - `  5` `detail_user` : `character varying` NULL

### `public.userd_device`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userd_userid` : `integer` NOT NULL
  - `  2` `userd_device_code` : `character varying` NOT NULL
  - `  3` `userd_device_token` : `character varying` NOT NULL
  - `  4` `userd_dt` : `timestamp without time zone` NULL

### `public.userl_loc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userl_userid` : `integer` NOT NULL
  - `  2` `userl_loc_id` : `integer` NOT NULL

### `public.userw_wc`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `userw_userid` : `integer` NOT NULL
  - `  2` `userw_wc_id` : `integer` NOT NULL

### `public.v_depr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `v_part_number` : `character varying` NULL
  - `  2` `v_serial` : `character varying` NULL
  - `  3` `v_asbk` : `character varying` NULL
  - `  4` `v_asmt` : `character varying` NULL
  - `  5` `v_year` : `integer` NULL
  - `  6` `v_month` : `character varying` NULL
  - `  7` `v_periode` : `integer` NULL
  - `  8` `v_depr` : `numeric` NULL
  - `  9` `v_sisa` : `numeric` NULL
  - ` 10` `v_month_no` : `integer` NULL

### `public.vehicle_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `vehicle_oid` : `uuid` NOT NULL
  - `  2` `vehicle_dom_id` : `smallint` NOT NULL
  - `  3` `vehicle_en_id` : `integer` NOT NULL
  - `  4` `vehicle_add_by` : `character varying` NULL
  - `  5` `vehicle_add_date` : `timestamp without time zone` NULL
  - `  6` `vehicle_upd_by` : `character varying` NULL
  - `  7` `vehicle_upd_date` : `timestamp without time zone` NULL
  - `  8` `vehicle_dt` : `timestamp without time zone` NULL
  - `  9` `vehicle_id` : `integer` NOT NULL
  - ` 10` `vehicle_number` : `character varying` NOT NULL
  - ` 11` `vehicle_type` : `integer` NOT NULL
  - ` 12` `vehicle_name` : `character varying` NULL
  - ` 13` `vehicle_driver` : `bigint` NOT NULL
  - ` 14` `vehicle_driver_assistance` : `bigint` NOT NULL
  - ` 15` `vehicle_active` : `character` NULL
  - ` 16` `vehicle_tonnage` : `numeric` NULL

### `public.vsloc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `vsloc_oid` : `uuid` NOT NULL
  - `  2` `vsloc_dom_id` : `smallint` NOT NULL
  - `  3` `vsloc_en_id` : `integer` NULL
  - `  4` `vsloc_add_by` : `character varying` NULL
  - `  5` `vsloc_add_date` : `timestamp without time zone` NULL
  - `  6` `vsloc_upd_by` : `character varying` NULL
  - `  7` `vsloc_upd_date` : `timestamp without time zone` NULL
  - `  8` `vsloc_loc_id` : `integer` NOT NULL
  - `  9` `vsloc_type` : `character` NOT NULL
  - ` 10` `vsloc_remarks` : `character varying` NULL
  - ` 11` `vsloc_vs1` : `character` NULL
  - ` 12` `vsloc_vs2` : `character` NULL

### `public.vspt_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `vspt_oid` : `uuid` NOT NULL
  - `  2` `vspt_dom_id` : `smallint` NOT NULL
  - `  3` `vspt_en_id` : `integer` NOT NULL
  - `  4` `vspt_add_by` : `character varying` NULL
  - `  5` `vspt_add_date` : `timestamp without time zone` NULL
  - `  6` `vspt_upd_by` : `character varying` NULL
  - `  7` `vspt_upd_date` : `timestamp without time zone` NULL
  - `  8` `vspt_dt` : `timestamp without time zone` NULL
  - `  9` `vspt_pt_id` : `bigint` NOT NULL
  - ` 10` `vspt_group_id` : `integer` NOT NULL
  - ` 11` `vspt_days` : `smallint` NOT NULL
  - ` 12` `vspt_remarks` : `character varying` NULL
  - ` 13` `vspt_type` : `character` NOT NULL

### `public.wc_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wc_oid` : `uuid` NOT NULL
  - `  2` `wc_dom_id` : `smallint` NULL
  - `  3` `wc_en_id` : `integer` NULL
  - `  4` `wc_add_by` : `character varying` NULL
  - `  5` `wc_add_date` : `timestamp without time zone` NULL
  - `  6` `wc_upd_by` : `character varying` NULL
  - `  7` `wc_upd_date` : `timestamp without time zone` NULL
  - `  8` `wc_id` : `integer` NULL
  - `  9` `wc_code` : `character varying` NULL
  - ` 10` `wc_machine` : `character varying` NULL
  - ` 11` `wc_desc` : `character varying` NULL
  - ` 12` `wc_dpt_id` : `bigint` NULL
  - ` 13` `wc_queue` : `numeric` NULL
  - ` 14` `wc_wait` : `numeric` NULL
  - ` 15` `wc_mch_op` : `smallint` NULL
  - ` 16` `wc_setup_men` : `numeric` NULL
  - ` 17` `wc_men_mch` : `numeric` NULL
  - ` 18` `wc_mch_wkctr` : `numeric` NULL
  - ` 19` `wc_mch_bdn_rate` : `numeric` NULL
  - ` 20` `wc_setup_rate` : `numeric` NULL
  - ` 21` `wc_lbr_rate` : `numeric` NULL
  - ` 22` `wc_bdn_rate` : `numeric` NULL
  - ` 23` `wc_bdn_pct` : `numeric` NULL
  - ` 24` `wc_active` : `character` NOT NULL
  - ` 25` `wc_dt` : `timestamp without time zone` NULL

### `public.wcd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wcd_oid` : `uuid` NOT NULL
  - `  2` `wcd_wc_oid` : `uuid` NOT NULL
  - `  3` `wcd_seq` : `smallint` NULL
  - `  4` `wcd_mch_id` : `integer` NOT NULL
  - `  5` `wcd_setup_men` : `numeric` NULL
  - `  6` `wcd_setup_rate` : `numeric` NULL
  - `  7` `wcd_men_mch` : `numeric` NULL
  - `  8` `wcd_lbr_rate` : `numeric` NULL
  - `  9` `wcd_mch_op` : `numeric` NULL
  - ` 10` `wcd_mch_bdn_rate` : `numeric` NULL
  - ` 11` `wcd_active` : `character` NULL
  - ` 12` `wcd_dt` : `timestamp without time zone` NULL

### `public.wf_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wf_oid` : `uuid` NOT NULL
  - `  2` `wf_dom_id` : `smallint` NULL
  - `  3` `wf_en_id` : `integer` NULL
  - `  4` `wf_tran_id` : `integer` NULL
  - `  5` `wf_ref_oid` : `uuid` NOT NULL
  - `  6` `wf_ref_code` : `character varying` NULL
  - `  7` `wf_ref_desc` : `character varying` NULL
  - `  8` `wf_seq` : `smallint` NULL
  - `  9` `wf_user_id` : `character varying` NULL
  - ` 10` `wf_wfs_id` : `character` NULL
  - ` 11` `wf_date_to` : `timestamp without time zone` NULL
  - ` 12` `wf_desc` : `character varying` NULL
  - ` 13` `wf_iscurrent` : `character` NULL
  - ` 14` `wf_dt` : `timestamp without time zone` NULL
  - ` 15` `wf_aprv_user` : `character varying` NULL
  - ` 16` `wf_aprv_date` : `timestamp without time zone` NULL
  - ` 17` `wf_eff_date` : `date` NULL
  - ` 18` `wf_notification` : `integer` NULL

### `public.wfs_status`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wfs_oid` : `uuid` NOT NULL
  - `  2` `wfs_id` : `character` NULL
  - `  3` `wfs_desc` : `character varying` NULL
  - `  4` `wfs_dt` : `timestamp without time zone` NULL

### `public.wh_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wh_oid` : `uuid` NOT NULL
  - `  2` `wh_dom_id` : `smallint` NULL
  - `  3` `wh_en_id` : `integer` NULL
  - `  4` `wh_id` : `integer` NULL
  - `  5` `wh_add_by` : `character varying` NULL
  - `  6` `wh_add_date` : `timestamp without time zone` NULL
  - `  7` `wh_upd_by` : `character varying` NULL
  - `  8` `wh_upd_date` : `timestamp without time zone` NULL
  - `  9` `wh_seq` : `smallint` NULL
  - ` 10` `wh_parent` : `integer` NULL
  - ` 11` `wh_code` : `character varying` NULL
  - ` 12` `wh_desc` : `character varying` NULL
  - ` 13` `wh_type` : `integer` NULL
  - ` 14` `wh_cat` : `integer` NULL
  - ` 15` `wh_active` : `character` NOT NULL
  - ` 16` `wh_dt` : `timestamp without time zone` NULL

### `public.wipa_account`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wipa_oid` : `uuid` NOT NULL
  - `  2` `wipa_ac_id` : `integer` NULL
  - `  3` `wipa_dt` : `timestamp without time zone` NULL
  - `  4` `wipa_code` : `character varying` NULL

### `public.wipretur_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wipretur_oid` : `uuid` NOT NULL
  - `  2` `wipretur_dom_id` : `smallint` NULL
  - `  3` `wipretur_en_id` : `integer` NULL
  - `  4` `wipretur_add_by` : `character varying` NULL
  - `  5` `wipretur_add_date` : `timestamp without time zone` NULL
  - `  6` `wipretur_upd_by` : `character varying` NULL
  - `  7` `wipretur_upd_date` : `timestamp without time zone` NULL
  - `  8` `wipretur_code` : `character varying` NULL
  - `  9` `wipretur_date` : `date` NULL
  - ` 10` `wipretur_loc_id` : `integer` NULL
  - ` 11` `wipretur_remarks` : `character varying` NULL
  - ` 12` `wipretur_dt` : `timestamp without time zone` NULL
  - ` 13` `wipretur_print_status` : `character` NULL
  - ` 14` `wipretur_print_date` : `timestamp without time zone` NULL
  - ` 15` `wipretur_print_count` : `integer` NULL
  - ` 16` `wipretur_is_avg` : `character` NULL
  - ` 17` `wipretur_branch_id` : `integer` NOT NULL
  - ` 18` `wipretur_cc_id` : `integer` NOT NULL

### `public.wipreturd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wipreturd_oid` : `uuid` NOT NULL
  - `  2` `wipreturd_wipretur_oid` : `uuid` NULL
  - `  3` `wipreturd_seq` : `integer` NULL
  - `  4` `wipreturd_pt_id` : `integer` NULL
  - `  5` `wipreturd_qty` : `numeric` NULL
  - `  6` `wipreturd_serial` : `character varying` NULL
  - `  7` `wipreturd_standard_cost` : `numeric` NULL
  - `  8` `wipreturd_current_cost` : `numeric` NULL
  - `  9` `wipreturd_dt` : `timestamp without time zone` NULL
  - ` 10` `wipreturd_loc_id` : `integer` NOT NULL
  - ` 11` `wipreturd_ovh_cost` : `numeric` NULL
  - ` 12` `wipreturd_lbr_cost` : `numeric` NULL
  - ` 13` `wipreturd_bdn_cost` : `numeric` NULL
  - ` 14` `wipreturd_sub_cost` : `numeric` NULL
  - ` 15` `wipreturd_mtl_ll` : `numeric` NULL
  - ` 16` `wipreturd_ovh_ll` : `numeric` NULL
  - ` 17` `wipreturd_lbr_ll` : `numeric` NULL
  - ` 18` `wipreturd_bdn_ll` : `numeric` NULL
  - ` 19` `wipreturd_sub_ll` : `numeric` NULL

### `public.wo_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wo_oid` : `uuid` NOT NULL
  - `  2` `wo_dom_id` : `smallint` NULL
  - `  3` `wo_en_id` : `integer` NULL
  - `  4` `wo_si_id` : `integer` NULL
  - `  5` `wo_id` : `bigint` NULL
  - `  6` `wo_code` : `character varying` NULL
  - `  7` `wo_type` : `character` NULL
  - `  8` `wo_pt_id` : `bigint` NULL
  - `  9` `wo_qty_ord` : `numeric` NULL
  - ` 10` `wo_qty_comp` : `numeric` NULL
  - ` 11` `wo_qty_rjc` : `numeric` NULL
  - ` 12` `wo_ord_date` : `date` NULL
  - ` 13` `wo_rel_date` : `date` NULL
  - ` 14` `wo_due_date` : `date` NULL
  - ` 15` `wo_yield_pct` : `numeric` NULL
  - ` 16` `wo_bom_id` : `bigint` NULL
  - ` 17` `wo_ro_id` : `bigint` NULL
  - ` 18` `wo_status` : `character` NULL
  - ` 19` `wo_remarks` : `character varying` NULL
  - ` 20` `wo_dt` : `timestamp without time zone` NULL
  - ` 21` `wo_date_close` : `date` NULL
  - ` 22` `wo_ref_rework` : `uuid` NULL
  - ` 23` `wo_add_by` : `character varying` NULL
  - ` 24` `wo_add_date` : `timestamp without time zone` NULL
  - ` 25` `wo_upd_by` : `character varying` NULL
  - ` 26` `wo_upd_date` : `timestamp without time zone` NULL
  - ` 27` `wo_cc_id` : `integer` NOT NULL
  - ` 28` `wo_remarks2` : `character varying` NULL
  - ` 29` `wo_ps_id` : `integer` NULL
  - ` 30` `wo_pjc_id` : `integer` NULL
  - ` 31` `wo_print_status` : `character` NULL
  - ` 32` `wo_print_date` : `timestamp without time zone` NULL
  - ` 33` `wo_print_count` : `integer` NULL
  - ` 34` `wo_is_bill` : `character` NULL
  - ` 35` `wo_remarks_close` : `character varying` NULL
  - ` 36` `wo_remarks_cl` : `character varying` NULL
  - ` 37` `wo_branch_id` : `integer` NOT NULL
  - ` 38` `wo_um` : `integer` NULL
  - ` 39` `wo_um_conv` : `numeric` NULL
  - ` 40` `wo_qty_real` : `numeric` NULL
  - ` 41` `wo_qty_req` : `numeric` NULL
  - ` 42` `wo_sch_status` : `character` NULL
  - ` 43` `wo_mch_group_id` : `integer` NOT NULL
  - ` 44` `wo_qty_sch` : `numeric` NULL

### `public.woass_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `woass_oid` : `uuid` NOT NULL
  - `  2` `woass_code` : `character varying` NULL
  - `  3` `woass_dom_id` : `integer` NULL
  - `  4` `woass_en_id` : `integer` NULL
  - `  5` `woass_si_id` : `integer` NULL
  - `  6` `woass_status` : `character varying` NULL
  - `  7` `woass_date_issued` : `date` NULL
  - `  8` `woass_date_started` : `date` NULL
  - `  9` `woass_date_complete` : `date` NULL
  - ` 10` `woass_assvcsch_oid` : `uuid` NULL

### `public.woci_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `woci_oid` : `uuid` NOT NULL
  - `  2` `woci_dom_id` : `smallint` NULL
  - `  3` `woci_en_id` : `integer` NULL
  - `  4` `woci_code` : `character varying` NULL
  - `  5` `woci_wo_id` : `bigint` NULL
  - `  6` `woci_op` : `smallint` NULL
  - `  7` `woci_date` : `date` NULL
  - `  8` `woci_issue_alloc` : `character` NULL
  - `  9` `woci_issue_picked` : `character` NULL
  - ` 10` `woci_remarks` : `character varying` NULL
  - ` 11` `woci_dt` : `timestamp without time zone` NULL
  - ` 12` `woci_si_id` : `integer` NULL
  - ` 13` `woci_wc_id` : `integer` NULL
  - ` 14` `woci_add_by` : `character varying` NULL
  - ` 15` `woci_add_date` : `timestamp without time zone` NULL
  - ` 16` `woci_upd_by` : `character varying` NULL
  - ` 17` `woci_upd_date` : `timestamp without time zone` NULL
  - ` 18` `woci_woi_oid` : `uuid` NULL
  - ` 19` `woci_cc_id` : `integer` NOT NULL
  - ` 20` `woci_trans_id` : `character` NULL
  - ` 21` `woci_print_status` : `character` NULL
  - ` 22` `woci_print_date` : `timestamp without time zone` NULL
  - ` 23` `woci_print_count` : `integer` NULL
  - ` 24` `woci_branch_id` : `integer` NOT NULL

### `public.wocid_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wocid_oid` : `uuid` NOT NULL
  - `  2` `wocid_woci_oid` : `uuid` NULL
  - `  3` `wocid_wod_oid` : `uuid` NULL
  - `  4` `wocid_seq` : `smallint` NULL
  - `  5` `wocid_op` : `smallint` NULL
  - `  6` `wocid_qty` : `numeric` NULL
  - `  7` `wocid_substitute` : `character` NULL
  - `  8` `wocid_pt_subs_id` : `bigint` NULL
  - `  9` `wocid_si_id` : `integer` NULL
  - ` 10` `wocid_loc_id` : `bigint` NULL
  - ` 11` `wocid_lot_serial` : `character varying` NULL
  - ` 12` `wocid_dt` : `timestamp without time zone` NULL
  - ` 13` `wocid_qty_comp` : `numeric` NULL
  - ` 14` `wocid_loc_type` : `character varying` NULL
  - ` 15` `wocid_cost_std` : `numeric` NULL
  - ` 16` `wocid_cost_current` : `numeric` NULL
  - ` 17` `wocid_wc_id` : `integer` NULL
  - ` 18` `wocid_loc_wip_id` : `integer` NOT NULL
  - ` 19` `wocid_ovh_cost` : `numeric` NULL
  - ` 20` `wocid_lbr_cost` : `numeric` NULL
  - ` 21` `wocid_bdn_cost` : `numeric` NULL
  - ` 22` `wocid_sub_cost` : `numeric` NULL
  - ` 23` `wocid_mtl_ll` : `numeric` NULL
  - ` 24` `wocid_ovh_ll` : `numeric` NULL
  - ` 25` `wocid_lbr_ll` : `numeric` NULL
  - ` 26` `wocid_bdn_ll` : `numeric` NULL
  - ` 27` `wocid_sub_ll` : `numeric` NULL

### `public.wocids_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wocids_oid` : `uuid` NOT NULL
  - `  2` `wocids_wocid_oid` : `uuid` NULL
  - `  3` `wocids_seq` : `smallint` NULL
  - `  4` `wocids_qty` : `numeric` NULL
  - `  5` `wocids_si_id` : `integer` NULL
  - `  6` `wocids_loc_id` : `bigint` NULL
  - `  7` `wocids_lot_serial` : `character varying` NULL
  - `  8` `wocids_dt` : `timestamp without time zone` NULL
  - `  9` `wocids_exp_date` : `date` NULL

### `public.wod_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wod_oid` : `uuid` NOT NULL
  - `  2` `wod_wo_oid` : `uuid` NULL
  - `  3` `wod_use_bom` : `character` NOT NULL
  - `  4` `wod_pt_bom_id` : `bigint` NULL
  - `  5` `wod_comp` : `character varying` NULL
  - `  6` `wod_op` : `smallint` NULL
  - `  7` `wod_qty_per` : `numeric` NULL
  - `  8` `wod_qty_req` : `numeric` NULL
  - `  9` `wod_qty_alloc` : `numeric` NULL
  - ` 10` `wod_qty_picked` : `numeric` NULL
  - ` 11` `wod_qty_issued` : `numeric` NULL
  - ` 12` `wod_cost` : `numeric` NULL
  - ` 13` `wod_dt` : `timestamp without time zone` NULL
  - ` 14` `wod_cost_current` : `numeric` NULL
  - ` 15` `wod_is_ps` : `character` NULL
  - ` 16` `wod_qty_mr` : `numeric` NULL
  - ` 17` `wod_qty_receipt` : `numeric` NULL
  - ` 18` `wod_ps_id_ref` : `integer` NULL
  - ` 19` `wod_qty_ps` : `numeric` NULL
  - ` 20` `wod_remarks` : `character varying` NULL

### `public.woi_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `woi_oid` : `uuid` NOT NULL
  - `  2` `woi_dom_id` : `smallint` NOT NULL
  - `  3` `woi_en_id` : `integer` NOT NULL
  - `  4` `woi_add_by` : `character varying` NULL
  - `  5` `woi_add_date` : `timestamp without time zone` NULL
  - `  6` `woi_upd_by` : `character varying` NULL
  - `  7` `woi_upd_date` : `timestamp without time zone` NULL
  - `  8` `woi_dt` : `timestamp without time zone` NULL
  - `  9` `woi_wo_oid` : `uuid` NOT NULL
  - ` 10` `woi_code` : `character varying` NULL
  - ` 11` `woi_date` : `date` NULL
  - ` 12` `woi_trans_id` : `character` NULL
  - ` 13` `woi_remarks` : `character varying` NULL
  - ` 14` `woi_cc_id` : `integer` NOT NULL
  - ` 15` `woi_print_status` : `character` NULL
  - ` 16` `woi_print_date` : `timestamp without time zone` NULL
  - ` 17` `woi_print_count` : `integer` NULL
  - ` 18` `woi_branch_id` : `integer` NOT NULL
  - ` 19` `woi_qty_req` : `numeric` NULL

### `public.woid_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `woid_oid` : `uuid` NOT NULL
  - `  2` `woid_woi_oid` : `uuid` NOT NULL
  - `  3` `woid_wod_oid` : `uuid` NOT NULL
  - `  4` `woid_seq` : `smallint` NULL
  - `  5` `woid_qty` : `numeric` NULL
  - `  6` `woid_qty_issue` : `numeric` NULL
  - `  7` `woid_dt` : `timestamp without time zone` NULL
  - `  8` `woid_remarks` : `character varying` NULL

### `public.wop_pt`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wop_oid` : `uuid` NOT NULL
  - `  2` `wop_wo_oid` : `uuid` NULL
  - `  3` `wop_pt_id` : `integer` NULL
  - `  4` `wop_qty_ord` : `numeric` NULL
  - `  5` `wop_qty_com` : `numeric` NULL
  - `  6` `wop_qty_rjc` : `numeric` NULL
  - `  7` `wop_remarks` : `character varying` NULL

### `public.wor_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wor_oid` : `uuid` NOT NULL
  - `  2` `wor_dom_id` : `smallint` NULL
  - `  3` `wor_en_id` : `integer` NULL
  - `  4` `wor_add_by` : `character varying` NULL
  - `  5` `wor_add_date` : `timestamp without time zone` NULL
  - `  6` `wor_upd_by` : `character varying` NULL
  - `  7` `wor_upd_date` : `timestamp without time zone` NULL
  - `  8` `wor_code` : `character varying` NULL
  - `  9` `wor_date` : `date` NULL
  - ` 10` `wor_date_eff` : `date` NULL
  - ` 11` `wor_wo_id` : `bigint` NULL
  - ` 12` `wor_loc_id` : `integer` NULL
  - ` 13` `wor_si_id` : `integer` NULL
  - ` 14` `wor_qty_comp` : `numeric` NULL
  - ` 15` `wor_qty_reject` : `numeric` NULL
  - ` 16` `wor_remarks` : `character varying` NULL
  - ` 17` `wor_close` : `character` NULL
  - ` 18` `wor_dt` : `timestamp without time zone` NULL
  - ` 19` `wor_qty_qc` : `numeric` NULL
  - ` 20` `wor_wc_id` : `integer` NULL
  - ` 21` `wor_lot_serial` : `character varying` NULL
  - ` 22` `wor_cost` : `numeric` NULL
  - ` 23` `wor_cc_id` : `integer` NOT NULL
  - ` 24` `wor_ovh_ac_id` : `integer` NULL
  - ` 25` `wor_ovh_amount` : `numeric` NULL
  - ` 26` `wor_qty1` : `numeric` NULL
  - ` 27` `wor_qty2` : `numeric` NULL
  - ` 28` `wor_qty3` : `numeric` NULL
  - ` 29` `wor_print_status` : `character` NULL
  - ` 30` `wor_print_date` : `timestamp without time zone` NULL
  - ` 31` `wor_print_count` : `integer` NULL
  - ` 32` `wor_close_line` : `character` NULL
  - ` 33` `wor_cogs_tl_m` : `numeric` NULL
  - ` 34` `wor_cogs_tl_l` : `numeric` NULL
  - ` 35` `wor_cogs_tl_b` : `numeric` NULL
  - ` 36` `wor_cogs_tl_o` : `numeric` NULL
  - ` 37` `wor_cogs_tl_s` : `numeric` NULL
  - ` 38` `wor_cogs_ll_m` : `numeric` NULL
  - ` 39` `wor_cogs_ll_l` : `numeric` NULL
  - ` 40` `wor_cogs_ll_b` : `numeric` NULL
  - ` 41` `wor_cogs_ll_o` : `numeric` NULL
  - ` 42` `wor_cogs_ll_s` : `numeric` NULL
  - ` 43` `wor_is_avg` : `character` NULL
  - ` 44` `wor_um` : `integer` NOT NULL
  - ` 45` `wor_um_conv` : `numeric` NULL
  - ` 46` `wor_qty_comp_real` : `numeric` NULL
  - ` 47` `wor_branch_id` : `integer` NOT NULL

### `public.word_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `word_oid` : `uuid` NOT NULL
  - `  2` `word_dom_id` : `smallint` NULL
  - `  3` `word_en_id` : `integer` NULL
  - `  4` `word_dt` : `timestamp without time zone` NULL
  - `  5` `word_wor_oid` : `uuid` NULL
  - `  6` `word_wop_oid` : `uuid` NULL
  - `  7` `word_qty` : `numeric` NULL
  - `  8` `word_remarks` : `character varying` NULL
  - `  9` `word_seq` : `smallint` NULL
  - ` 10` `word_qty_reject` : `numeric` NULL

### `public.wors_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wors_oid` : `uuid` NOT NULL
  - `  2` `wors_wor_oid` : `uuid` NULL
  - `  3` `wors_qty` : `numeric` NULL
  - `  4` `wors_um` : `integer` NULL
  - `  5` `wors_si_id` : `integer` NULL
  - `  6` `wors_lot_serial` : `character varying` NULL
  - `  7` `wors_loc_id` : `integer` NULL
  - `  8` `wors_dt` : `timestamp without time zone` NULL
  - `  9` `wors_packaging_id` : `integer` NOT NULL
  - ` 10` `wors_exp_date` : `date` NULL
  - ` 11` `wors_qty_packaging` : `numeric` NULL
  - ` 12` `wors_um_conv` : `numeric` NULL
  - ` 13` `wors_qty_real` : `numeric` NULL

### `public.wors_so`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wors_oid` : `uuid` NOT NULL
  - `  2` `wors_wor_oid` : `uuid` NOT NULL
  - `  3` `wors_sod_oid` : `uuid` NOT NULL
  - `  4` `wors_qty_comp` : `numeric` NULL
  - `  5` `wors_qty_reject` : `numeric` NULL
  - `  6` `wors_remarks` : `character varying` NULL
  - `  7` `wors_dt` : `timestamp without time zone` NULL

### `public.worw_wip`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `worw_oid` : `uuid` NOT NULL
  - `  2` `worw_wor_oid` : `uuid` NOT NULL
  - `  3` `worw_pt_id` : `integer` NULL
  - `  4` `worw_qty` : `numeric` NULL
  - `  5` `worw_wod_oid` : `uuid` NULL
  - `  6` `worw_qty_reject` : `numeric` NULL
  - `  7` `worw_cost_std` : `numeric` NULL
  - `  8` `worw_cost_current` : `numeric` NULL
  - `  9` `worw_loc_id` : `integer` NOT NULL
  - ` 10` `worw_ovh_cost` : `numeric` NULL
  - ` 11` `worw_lbr_cost` : `numeric` NULL
  - ` 12` `worw_bdn_cost` : `numeric` NULL
  - ` 13` `worw_sub_cost` : `numeric` NULL
  - ` 14` `worw_mtl_ll` : `numeric` NULL
  - ` 15` `worw_ovh_ll` : `numeric` NULL
  - ` 16` `worw_lbr_ll` : `numeric` NULL
  - ` 17` `worw_bdn_ll` : `numeric` NULL
  - ` 18` `worw_sub_ll` : `numeric` NULL

### `public.worws_serial`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `worws_oid` : `uuid` NOT NULL
  - `  2` `worws_worw_oid` : `uuid` NOT NULL
  - `  3` `worws_qty` : `numeric` NULL
  - `  4` `worws_lot_serial` : `character varying` NULL
  - `  5` `worws_exp_date` : `date` NULL

### `public.wos_so`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wos_oid` : `uuid` NOT NULL
  - `  2` `wos_wo_oid` : `uuid` NOT NULL
  - `  3` `wos_sod_oid` : `uuid` NOT NULL
  - `  4` `wos_qty_ord` : `numeric` NULL
  - `  5` `wos_qty_comp` : `numeric` NULL
  - `  6` `wos_qty_rjc` : `numeric` NULL
  - `  7` `wos_dt` : `timestamp without time zone` NULL

### `public.wr_route`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wr_oid` : `uuid` NOT NULL
  - `  2` `wr_dom_id` : `smallint` NULL
  - `  3` `wr_en_id` : `integer` NULL
  - `  4` `wr_add_by` : `character varying` NULL
  - `  5` `wr_add_date` : `timestamp without time zone` NULL
  - `  6` `wr_upd_by` : `character varying` NULL
  - `  7` `wr_upd_date` : `timestamp without time zone` NULL
  - `  8` `wr_dt` : `timestamp without time zone` NULL
  - `  9` `wr_wo_oid` : `uuid` NULL
  - ` 10` `wr_op` : `smallint` NULL
  - ` 11` `wr_wc_id` : `integer` NULL
  - ` 12` `wr_setup_men` : `smallint` NULL
  - ` 13` `wr_setup_rate` : `numeric` NULL
  - ` 14` `wr_setup` : `numeric` NULL
  - ` 15` `wr_setup_real` : `numeric` NULL
  - ` 16` `wr_lbr_rate` : `numeric` NULL
  - ` 17` `wr_men_mch` : `smallint` NULL
  - ` 18` `wr_run` : `numeric` NULL
  - ` 19` `wr_run_real` : `numeric` NULL
  - ` 20` `wr_sub_cost` : `numeric` NULL
  - ` 21` `wr_sub_cost_real` : `numeric` NULL
  - ` 22` `wr_mch_op` : `smallint` NULL
  - ` 23` `wr_mch_bdn_rate` : `numeric` NULL
  - ` 24` `wr_trans_id` : `character` NULL
  - ` 25` `wr_qty_wo` : `numeric` NULL
  - ` 26` `wr_qty_feedback` : `numeric` NULL
  - ` 27` `wr_setup_men_real` : `smallint` NULL
  - ` 28` `wr_men_mch_real` : `smallint` NULL
  - ` 29` `wr_lbr_ac_id` : `integer` NOT NULL
  - ` 30` `wr_bdn_ac_id` : `integer` NOT NULL
  - ` 31` `wr_sbc_ac_id` : `integer` NOT NULL
  - ` 32` `wr_qty_wrtd` : `numeric` NULL

### `public.wrd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wrd_oid` : `uuid` NOT NULL
  - `  2` `wrd_dom_id` : `smallint` NULL
  - `  3` `wrd_en_id` : `integer` NULL
  - `  4` `wrd_add_by` : `character varying` NULL
  - `  5` `wrd_add_date` : `timestamp without time zone` NULL
  - `  6` `wrd_upd_by` : `character varying` NULL
  - `  7` `wrd_upd_date` : `timestamp without time zone` NULL
  - `  8` `wrd_dt` : `timestamp without time zone` NULL
  - `  9` `wrd_wr_oid` : `uuid` NULL
  - ` 10` `wrd_seq` : `smallint` NULL
  - ` 11` `wrd_eff_date` : `date` NULL
  - ` 12` `wrd_qty` : `numeric` NULL
  - ` 13` `wrd_start_setup` : `timestamp without time zone` NULL
  - ` 14` `wrd_stop_setup` : `timestamp without time zone` NULL
  - ` 15` `wrd_elapsed_setup` : `numeric` NULL
  - ` 16` `wrd_start_run` : `timestamp without time zone` NULL
  - ` 17` `wrd_stop_run` : `timestamp without time zone` NULL
  - ` 18` `wrd_elapsed_run` : `numeric` NULL
  - ` 19` `wrd_down_time` : `numeric` NULL
  - ` 20` `wrd_down_reason_id` : `integer` NULL
  - ` 21` `wrd_po_oid` : `uuid` NULL
  - ` 22` `wrd_sub_cost` : `numeric` NULL
  - ` 23` `wrd_remark` : `character varying` NULL
  - ` 24` `wrd_qty_rework` : `numeric` NULL
  - ` 25` `wrd_cc_id` : `integer` NOT NULL
  - ` 26` `wrd_setup_men_real` : `smallint` NULL
  - ` 27` `wrd_men_mch_real` : `smallint` NULL
  - ` 28` `wrd_code` : `character varying` NULL
  - ` 29` `wrd_is_wo_receipt` : `character` NULL
  - ` 30` `wrd_wor_oid` : `uuid` NULL
  - ` 31` `wrd_start_down` : `timestamp without time zone` NULL
  - ` 32` `wrd_stop_down` : `timestamp without time zone` NULL
  - ` 33` `wrd_setup_rate` : `numeric` NULL
  - ` 34` `wrd_lbr_rate` : `numeric` NULL
  - ` 35` `wrd_mch_bdn_rate` : `numeric` NULL
  - ` 36` `wrd_shift_id` : `integer` NULL
  - ` 37` `wrd_mch_id` : `integer` NULL
  - ` 38` `wrd_branch_id` : `integer` NOT NULL

### `public.wrdd_down`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wrdd_oid` : `uuid` NOT NULL
  - `  2` `wrdd_wrd_oid` : `uuid` NULL
  - `  3` `wrdd_dt` : `timestamp without time zone` NULL
  - `  4` `wrdd_seq` : `smallint` NULL
  - `  5` `wrdd_down_time` : `numeric` NULL
  - `  6` `wrdd_down_reason_id` : `integer` NULL
  - `  7` `wrdd_remarks` : `character varying` NULL
  - `  8` `wrdd_start_down` : `timestamp without time zone` NULL
  - `  9` `wrdd_stop_down` : `timestamp without time zone` NULL

### `public.wrtd_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `wrtd_oid` : `uuid` NOT NULL
  - `  2` `wrtd_wr_oid` : `uuid` NOT NULL
  - `  3` `wrtd_add_by` : `character varying` NULL
  - `  4` `wrtd_add_date` : `timestamp without time zone` NULL
  - `  5` `wrtd_upd_by` : `character varying` NULL
  - `  6` `wrtd_upd_date` : `timestamp without time zone` NULL
  - `  7` `wrtd_dt` : `timestamp without time zone` NULL
  - `  8` `wrtd_seq` : `smallint` NULL
  - `  9` `wrtd_mch_id` : `integer` NOT NULL
  - ` 10` `wrtd_time_start` : `timestamp without time zone` NOT NULL
  - ` 11` `wrtd_qty` : `numeric` NULL
  - ` 12` `wrtd_remarks` : `character varying` NULL
  - ` 13` `wrtd_time_stop` : `timestamp without time zone` NOT NULL

### `public.xemp_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `xemp_oid` : `uuid` NOT NULL
  - `  2` `xemp_dom_id` : `smallint` NOT NULL
  - `  3` `xemp_en_id` : `integer` NULL
  - `  4` `xemp_id` : `bigint` NULL
  - `  5` `xemp_code` : `character varying` NULL
  - `  6` `xemp_name` : `character varying` NULL
  - `  7` `xemp_rg` : `integer` NULL
  - `  8` `xemp_dept` : `integer` NULL
  - `  9` `xemp_div` : `integer` NULL
  - ` 10` `xemp_dt` : `timestamp without time zone` NULL
  - ` 11` `xemp_is_active` : `character` NULL
  - ` 12` `xemp_position` : `integer` NOT NULL
  - ` 13` `xemp_code_acc` : `character varying` NULL
  - ` 14` `xemp_bank_name` : `character varying` NULL
  - ` 15` `xemp_name_acc` : `character varying` NULL
  - ` 16` `xemp_branch_id` : `integer` NULL
  - ` 17` `xemp_add_by` : `character varying` NULL
  - ` 18` `xemp_add_date` : `timestamp without time zone` NULL
  - ` 19` `xemp_upd_by` : `character varying` NULL
  - ` 20` `xemp_upd_date` : `timestamp without time zone` NULL
  - ` 21` `xemp_gol` : `integer` NULL
  - ` 22` `xemp_is_employee` : `character` NULL
  - ` 23` `xemp_is_debt_coll` : `character` NULL
  - ` 24` `xemp_phone1` : `character varying` NULL
  - ` 25` `xemp_phone2` : `character varying` NULL
  - ` 26` `xemp_email` : `character varying` NULL
  - ` 27` `xemp_prepayment_balance` : `numeric` NULL

### `public.xfs1_mstr`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `xfs1_oid` : `uuid` NOT NULL
  - `  2` `xfs1_dom_id` : `smallint` NULL
  - `  3` `xfs1_en_id` : `integer` NULL
  - `  4` `xfs1_add_by` : `character varying` NULL
  - `  5` `xfs1_add_date` : `timestamp without time zone` NULL
  - `  6` `xfs1_upd_by` : `character varying` NULL
  - `  7` `xfs1_upd_date` : `timestamp without time zone` NULL
  - `  8` `xfs1_dt` : `timestamp without time zone` NULL
  - `  9` `xfs1_desc` : `character varying` NULL
  - ` 10` `xfs1_type` : `character` NULL

### `public.xfs1d_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `xfs1d_oid` : `uuid` NOT NULL
  - `  2` `xfs1d_xfs1_oid` : `uuid` NULL
  - `  3` `xfs1d_add_by` : `character varying` NULL
  - `  4` `xfs1d_add_date` : `timestamp without time zone` NULL
  - `  5` `xfs1d_upd_by` : `character varying` NULL
  - `  6` `xfs1d_upd_date` : `timestamp without time zone` NULL
  - `  7` `xfs1d_dt` : `timestamp without time zone` NULL
  - `  8` `xfs1d_ac_id` : `integer` NULL
  - `  9` `xfs1d_seq` : `smallint` NULL

### `public.xtable`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `kode_brg` : `character varying` NULL
  - `  2` `description` : `character varying` NULL
  - `  3` `isbn` : `character varying` NULL

## Schema `sms`

### `sms.sms_command`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sms_command_id` : `uuid` NOT NULL
  - `  2` `sms_command_keyword` : `character varying` NOT NULL
  - `  3` `sms_command_keyword_2` : `character varying` NULL
  - `  4` `sms_command_description` : `character varying` NULL
  - `  5` `sms_command_relpy` : `text` NULL
  - `  6` `sms_command_sparator` : `character varying` NULL
  - `  7` `sms_command_forward_to_email` : `character varying` NULL
  - `  8` `sms_command_forward_to_hp` : `character varying` NULL
  - `  9` `sms_command_foward_to_group` : `character varying` NULL
  - ` 10` `sms_command_blast` : `character` NULL
  - ` 11` `sms_command_sender` : `character varying` NULL
  - ` 12` `sms_command_status` : `character` NULL
  - ` 13` `sms_command_en_id` : `integer` NULL
  - ` 14` `sms_command_user` : `character varying` NULL

### `sms.sms_command_det`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sms_command_det_id` : `uuid` NOT NULL
  - `  2` `sms_command_det_sms_command_id` : `uuid` NULL
  - `  3` `sms_command_det_key3` : `character varying` NULL
  - `  4` `sms_command_det_key4` : `character varying` NULL
  - `  5` `sms_command_det_key5` : `character varying` NULL

### `sms.sms_group`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sms_group_id` : `uuid` NOT NULL
  - `  2` `sms_group_name` : `character varying` NULL
  - `  3` `sms_group_member` : `text` NULL
  - `  4` `sms_group_status` : `character varying` NULL
  - `  5` `sms_group_en_id` : `integer` NULL

### `sms.sms_inbox`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sms_inbox_id` : `uuid` NOT NULL
  - `  2` `sms_inbox_date` : `timestamp without time zone` NULL
  - `  3` `sms_inbox_sender` : `character varying` NOT NULL
  - `  4` `sms_inbox_message` : `text` NULL
  - `  5` `sms_inbox_status` : `character varying` NULL
  - `  6` `sms_inbox_received` : `timestamp without time zone` NULL
  - `  7` `sms_inbox_en_id` : `integer` NULL
  - `  8` `sms_inbox_ptnrg_id` : `integer` NULL

### `sms.sms_outbox`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sms_outbox_id` : `uuid` NOT NULL
  - `  2` `sms_outbox_date` : `timestamp without time zone` NULL
  - `  3` `sms_outbox_number` : `character varying` NOT NULL
  - `  4` `sms_outbox_message` : `text` NULL
  - `  5` `sms_outbox_status` : `character varying` NULL
  - `  6` `sms_outbox_send` : `timestamp without time zone` NULL
  - `  7` `sms_outbox_en_id` : `integer` NULL
  - `  8` `sms_outbox_ptnrg_id` : `integer` NULL
  - `  9` `sms_outbox_user` : `character varying` NULL
  - ` 10` `sms_outbox_report` : `character varying` NULL

### `sms.sms_outbox_temp`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sms_outbox_temp_id` : `uuid` NOT NULL
  - `  2` `sms_outbox_temp_date` : `timestamp without time zone` NULL
  - `  3` `sms_outbox_temp_number` : `character varying` NOT NULL
  - `  4` `sms_outbox_temp_message` : `text` NULL
  - `  5` `sms_outbox_temp_status` : `character varying` NULL
  - `  6` `sms_outbox_temp_send` : `timestamp without time zone` NULL
  - `  7` `sms_outbox_temp_en_id` : `integer` NULL
  - `  8` `sms_outbox_temp_user` : `character varying` NULL

### `sms.sms_phonebook`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sms_phonebook_id` : `uuid` NOT NULL
  - `  2` `sms_phonebook_number` : `character varying` NULL
  - `  3` `sms_phonebook_name` : `character varying` NULL
  - `  4` `sms_phonebook_email` : `character varying` NULL
  - `  5` `sms_phonebook_address` : `text` NULL
  - `  6` `sms_phonebook_status` : `character varying` NULL
  - `  7` `sms_phonebook_en_id` : `integer` NULL
  - `  8` `sms_phonebook_ptnrg_grp_id` : `integer` NULL

### `sms.sms_reg`
- PK: (none)
- FK: (none)
- Columns:
  - `  1` `sms_reg_id` : `uuid` NULL
  - `  2` `sms_reg_key_1` : `character varying` NULL
  - `  3` `sms_reg_key_2` : `character varying` NULL
  - `  4` `sms_reg_key_3` : `character varying` NULL
  - `  5` `sms_reg_key_4` : `character varying` NULL
  - `  6` `sms_reg_key_5` : `character varying` NULL
  - `  7` `sms_reg_date` : `timestamp without time zone` NULL
  - `  8` `sms_reg_en_id` : `integer` NULL
  - `  9` `sms_reg_hp` : `character varying` NOT NULL

