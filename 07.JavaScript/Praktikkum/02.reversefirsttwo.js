// const reverseFirstTwo = ([a, b]) => {
//   return [b, a];
// };

// const arr = [1, 2, 3, 4];
// const result = reverseFirstTwo(arr);
// console.log(result);

// const reverse = (arr2) => {
//   return arr2.reverse();
// };

// const arr2 = [1, 2, 3, 5];
// const result2 = reverse(arr2);
// console.log(result2);

// const fizzBuzz = (total) => {
//   for (let index = 0; index <= total; index++) {
//     if (index % 3 === 0 && index % 5 === 0) {
//       console.log("FizzBuzz");
//     } else if (index % 3 === 0) {
//       console.log("Fizz");
//     } else if (index % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log("udahan");
//     }
//   }
// };

// const hasil = fizzBuzz(30);
// console.log(hasil);

const bayu = [
  {
    name: "Bayu",
    age: 20,
    hobby: "Coli",
  },
  {
    name: "Budi",
    age: 22,
    hobby: "Gaming",
  },
  {
    name: "Cici",
    age: 19,
    hobby: "Reading",
  },
];

// bayu.forEach((item) => {
//   return `Name: ${item.name}, Age: ${item.age}, Hobby: ${item.hobby}`;
// });

// Cara looping dengan forEach sudah benar seperti pada fungsi batol

// const arr1 = [1, 2, 3, 4, 5];
// const arr12 = [6, 7, 8, 9, 10];

// const array = arr1.concat(arr12);
// const name1 = ["Bayu", "Budi", "Cici"];

// const evan = "Cina1Ngga1punya1Toko";
// console.log(evan.split("1"));

// console.log(typeof name1.join([", "]));
// console.log(array);

// function generateFizzBuzz(limit = 100) {
//   const result = [];

//   for (let i = 1; i <= limit; i++) {
//     if (i % 15 === 0) {
//       result.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       result.push("Fizz");
//     } else if (i % 5 === 0) {
//       result.push("Buzz");
//     } else {
//       result.push(i);
//     }
//   }

//   return result;
// }

// // Contoh pemakaian (misalnya di React)
// const fizzBuzzData = generateFizzBuzz(100);
// console.log(fizzBuzzData); // opsional, kalau mau cek di devtool

// function fizzBuzz(n) {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       arr.push("FizzBuzz");
//     } else if (i % 3 === 0) {
//       arr.push("fizz");
//     } else if (i % 5 === 0) {
//       arr.push("Buzz");
//     } else {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// const resultFizzBuzz = fizzBuzz(30);
// console.log(resultFizzBuzz); // opsional, kalau mau cek di devtool

// function palinDrome(kata) {
//   let palindrome = "";
//   const indexAkhir = kata.length - 1;
//   for (let indexAwal = 0; indexAwal < kata.length; indexAwal++) {
//     const nilai = indexAkhir - indexAwal;

//     console.log(nilai, indexAwal);
//     if (kata[indexAwal] === kata[nilai]) {
//       palindrome = "ispalindrome";
//     } else {
//       return "is not Palindrome";
//     }
//   }
//   return palindrome;
// }

// const kata = "katok";
// console.log(palinDrome(kata));

function bintang(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    for (let j = 1; j <= i; j++) {
      pola += "*";
    }

    pola += "\n";
  }
  return pola;
}

console.log(bintang(5));

function segitigapenuh(baris) {
  let pola = "";
  for (let i = 1; i <= baris; i++) {
    pola += "\n";
    for (let spasi = 1; spasi <= baris - i; spasi++) {
      pola += " ";
    }
    for (let bintang = 1; bintang <= 2 * i - 1; bintang++) {
      pola += "*";
    }
  }
  return pola;
}

console.log(segitigapenuh(5));
