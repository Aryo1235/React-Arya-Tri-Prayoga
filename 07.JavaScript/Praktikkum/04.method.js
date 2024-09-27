const calculator = {
  tambah: function (a, b) {
    return a + b;
  },

  kurang: function (a, b) {
    return a - b;
  },

  kali: function (a, b) {
    return a * b;
  },

  bagi: function (a, b) {
    if (b === 0) {
      return "Tidak bisa dibagi dengan 0!";
    }
    return a / b;
  },
};

console.log("tambah: ", calculator.tambah(5, 3));
console.log("kurang: ", calculator.kurang(5, 3));
console.log("kali: ", calculator.kali(5, 3));
console.log("bagi: ", calculator.bagi(5, 3));
