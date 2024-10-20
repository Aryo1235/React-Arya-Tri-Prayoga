## Controlled vs. Uncontrolled Components in React

### Controlled Components

Dalam React, form biasanya dikelola menggunakan Controlled Components, di mana nilai input form dikontrol oleh state React. Nilai input dihubungkan dengan state komponen melalui atribut value, dan perubahan nilai ditangani oleh event handler seperti onChange.

### Uncontrolled Components

Uncontrolled components adalah alternatif dari controlled components, di mana data input dikelola langsung oleh DOM, bukan state React. Untuk mendapatkan nilai input, referensi (ref) digunakan melalui React.useRef(), dan nilai diakses saat form dikirimkan, sehingga React tidak perlu menyimpan nilai secara real-time.

### Form Submission

Saat form dikirimkan, event onSubmit digunakan untuk menangani aksi pengiriman. Event ini biasanya disertai dengan fungsi validasi untuk memastikan data input sesuai, dan dapat mencegah perilaku default pengiriman dengan event.preventDefault().
"""
