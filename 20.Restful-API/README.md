# API dan RESTful API

**API** (Application Programming Interface) adalah sekumpulan aturan yang memungkinkan berbagai aplikasi berkomunikasi satu sama lain. API memungkinkan aplikasi untuk menggunakan fungsi, data, dan layanan dari aplikasi lain, tanpa harus mengakses kode sumber aplikasi tersebut.

**RESTful API** adalah jenis API yang mengikuti prinsip-prinsip arsitektur **REST** (Representational State Transfer). RESTful API biasanya digunakan dalam pengembangan aplikasi berbasis web karena fleksibilitas dan kesederhanaannya.

---

## 3 Poin Penting tentang RESTful API

1. **Menggunakan Metode HTTP:**
   RESTful API menggunakan metode HTTP standar untuk operasi CRUD (Create, Read, Update, Delete):

   - `GET`: Mengambil data dari server.
   - `POST`: Mengirim data baru ke server.
   - `PUT`: Memperbarui data yang ada di server.
   - `DELETE`: Menghapus data dari server.

2. **Stateless (Tanpa Status):**
   RESTful API bersifat stateless, artinya setiap permintaan dari klien ke server harus menyertakan semua informasi yang diperlukan untuk memproses permintaan tersebut. Server tidak menyimpan informasi status klien antar permintaan, sehingga membuat API lebih efisien dan mudah diskalakan.

3. **Struktur URL yang Sederhana dan Konsisten:**
   RESTful API menggunakan URL yang sederhana dan terstruktur untuk mengidentifikasi resource. Setiap endpoint merepresentasikan resource tertentu dan mengikuti pola konsisten yang mudah dipahami, contohnya:
   - `GET /api/users`: Mengambil daftar semua pengguna.
   - `GET /api/users/1`: Mengambil data pengguna dengan ID 1.
   - `POST /api/users`: Menambahkan pengguna baru.

---
