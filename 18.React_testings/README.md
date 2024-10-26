1. Component Testing
   Component Testing adalah proses pengujian unit untuk memastikan setiap komponen React berjalan sesuai harapan. Dengan menggunakan pustaka seperti @testing-library/react atau Jest, kita dapat:

Merender elemen yang benar berdasarkan props yang diberikan.
Memverifikasi keluaran yang diharapkan ketika komponen menerima input tertentu.
Menguji interaksi pengguna sesuai dengan fungsionalitas yang dirancang.

2. Mocking dan Simulasi Interaksi
   Mocking adalah teknik untuk mensimulasikan fungsi, API, atau event handler tanpa menjalankan kode sebenarnya. Dalam React Testing:

Mock Functions: Digunakan untuk menguji komponen tanpa memanggil fungsi asli. Dengan jest.fn(), kita dapat membuat fungsi mock untuk menguji apakah fungsi tersebut terpanggil dengan benar.
Simulasi Event: React Testing Library menyediakan fireEvent dan userEvent untuk mensimulasikan berbagai interaksi seperti klik, input teks, atau perubahan elemen dropdown.

3. Testing Lifecycle dan State
   React memiliki siklus hidup komponen (component lifecycle) dan state yang memengaruhi perilaku dan tampilan komponen. Dalam pengujian:

Kita dapat memastikan bahwa komponen bereaksi terhadap perubahan state sesuai dengan yang diharapkan.
Siklus hidup React, seperti componentDidMount atau useEffect pada functional components, dapat diuji untuk memastikan setiap efek samping berjalan dengan benar.
