function swapValues(a, b) {
  // Menggunakan let untuk menampung nilai sementara
  let spmn = a; // Menyimpan nilai a ke dalam temp
  a = b; // Menetapkan nilai b ke a
  b = spmn; // Menetapkan nilai temp (nilai a yang lama) ke b
  console.log(`Nilai setelah ditukar: a = ${a}, b = ${b}`);
}

// Contoh penggunaan
swapValues(5, 10);
