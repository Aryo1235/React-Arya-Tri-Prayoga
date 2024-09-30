function findLargest(arr) {
  // Inisialisasi variabel untuk menyimpan nilai terbesar
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

const numbers = [7, 6, 9, 15, 10];
console.log(findLargest(numbers));
