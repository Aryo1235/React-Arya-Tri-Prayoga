## React Hooks: useState dan useEffect

1. **useState untuk State Management**: `useState` memungkinkan kita menambahkan **state** ke dalam komponen fungsional. State dapat diakses dan diperbarui melalui fungsi setter, yang memicu re-render komponen ketika nilai state berubah.

2. **useEffect untuk Side Effects**: `useEffect` digunakan untuk mengelola **side effects** seperti fetching data, berlangganan event, atau memodifikasi DOM secara langsung. Hook ini dijalankan setelah render dan dapat dikonfigurasi untuk dijalankan kembali hanya ketika dependensi tertentu berubah.

3. **Dependency Array di useEffect**: Dependency array di `useEffect` memungkinkan kita untuk mengontrol kapan efek dijalankan. Jika array kosong, efek hanya dijalankan sekali setelah render pertama. Jika terdapat nilai dalam array, efek dijalankan setiap kali nilai tersebut berubah.
