# Materi Otentikasi (Auth)

Otentikasi (auth) adalah proses penting dalam pengembangan aplikasi untuk memastikan bahwa hanya pengguna yang sah yang dapat mengakses data atau fitur tertentu. Berikut adalah beberapa poin utama dalam materi auth:

1. **Jenis-Jenis Otentikasi**: Terdapat berbagai metode otentikasi yang digunakan untuk memverifikasi identitas pengguna, seperti _basic authentication_ dengan username dan password, _token-based authentication_ seperti JWT, _OAuth_ untuk integrasi pihak ketiga, dan _multi-factor authentication_ (MFA) yang menambah lapisan keamanan tambahan.

2. **Proses Otentikasi dan Otorisasi**: Otentikasi bertujuan untuk memastikan identitas pengguna, sedangkan otorisasi menentukan hak akses pengguna setelah identitasnya terverifikasi. Penting untuk memisahkan otentikasi dan otorisasi agar pengguna hanya dapat mengakses data atau fitur sesuai dengan perannya.

3. **Keamanan Token dan Pencegahan Serangan**: Token otentikasi harus disimpan dan dikelola dengan aman untuk melindungi aplikasi dari serangan seperti _Cross-Site Scripting (XSS)_, _Cross-Site Request Forgery (CSRF)_, dan pencurian token. Penggunaan _http-only cookies_, _secure cookies_, dan implementasi _refresh token_ adalah beberapa cara yang efektif untuk menjaga keamanan token dan memastikan pengalaman pengguna yang lancar.

Dengan memahami konsep dasar otentikasi dan praktik keamanannya, aplikasi dapat dirancang dengan lebih aman, mengurangi risiko akses yang tidak sah.
