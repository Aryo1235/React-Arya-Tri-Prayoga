content = """

# React JS Fundamentals

## 1. JSX

- **Sintaks JSX**: JSX adalah ekstensi sintaks JavaScript yang memungkinkan Anda menulis elemen HTML di dalam kode JavaScript. JSX membuat penulisan UI lebih intuitif.
- **Interpolasi**: Dengan JSX, Anda bisa menyisipkan ekspresi JavaScript dalam kurung kurawal `{}` untuk menampilkan data dinamis.
- **JSX Transpile**: JSX di-_transpile_ menjadi JavaScript murni menggunakan tools seperti Babel, karena browser tidak secara langsung memahami JSX.

## 2. React Component

- **Komponen sebagai Fungsi atau Kelas**: Komponen React bisa ditulis sebagai fungsi (_functional components_) atau kelas (_class components_), keduanya mampu mengelola state dan props.
- **Reusable Components**: Komponen dapat digunakan kembali, yang membuat kode lebih modular, terstruktur, dan mudah dikelola.
- **Props dan State**: Props digunakan untuk mengirim data dari komponen induk ke anak, sedangkan state dikelola dalam komponen untuk perubahan data internal.

## 3. Component Composition

- **Hierarki Komponen**: Komponen dapat disusun secara hirarkis di mana komponen induk mengandung komponen anak. Ini memungkinkan pembentukan antarmuka yang kompleks dari blok-blok sederhana.
- **Penggunaan Props**: Props digunakan untuk menghubungkan komponen induk dengan komponen anak, memungkinkan data mengalir di antara komponen.
- **High-Order Components (HOC)**: Komponen yang bisa membungkus komponen lain, menyediakan cara untuk meningkatkan fungsi komponen dengan memodifikasi atau menambahkan fitur.

## 4. React Lifecycle

- **Mounting**: Tahap pertama saat komponen ditambahkan ke DOM, sering digunakan untuk inisialisasi state dan API call.
- **Updating**: Ketika state atau props berubah, komponen akan _re-render_ untuk memperbarui tampilan.
- **Unmounting**: Saat komponen dihapus dari DOM, tahap ini digunakan untuk membersihkan sumber daya atau menonaktifkan event listeners.

## 5. Conditional Rendering

- **If-Else Statement**: Anda dapat menggunakan pernyataan kondisional dalam JSX dengan bantuan operator `if-else` untuk merender komponen secara dinamis.
- **Ternary Operator**: Alternatif sederhana untuk pernyataan `if-else`, menggunakan operator ternary (`condition ? true : false`) untuk rendering berdasarkan kondisi.
- **Logical AND (`&&`)**: Merender komponen jika kondisi bernilai benar, metode ini efisien untuk menangani rendering berdasarkan kebenaran kondisi.

## 6. Directory Structure

- **Separation of Concerns**: Memisahkan file berdasarkan tanggung jawabnya, seperti komponen, layanan, dan utilitas, untuk menjaga struktur proyek tetap terorganisir.
- **Folder untuk Komponen**: Biasanya, setiap komponen ditempatkan dalam folder terpisah dengan file JavaScript dan file CSS-nya.
- **Atomic Design Pattern**: Menyusun komponen berdasarkan tingkatannya, seperti "atoms", "molecules", dan "organisms", untuk menjaga struktur skala besar tetap modular.

## 7. Exercise RF (React Functional)

- **Latihan Functional Components**: Fokus pada penulisan komponen fungsional yang bersifat lebih ringan dan menggunakan _hooks_ untuk pengelolaan state dan side-effects.
- **Penggunaan Hooks**: Melatih penggunaan hooks seperti `useState`, `useEffect`, untuk menggantikan _lifecycle methods_ yang ada di komponen kelas.
- **Code Reusability**: Melatih kemampuan dalam membuat komponen yang dapat digunakan kembali untuk berbagai skenario dalam aplikasi.
  """
