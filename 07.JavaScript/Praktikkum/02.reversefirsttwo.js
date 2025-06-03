const reverseFirstTwo = ([a, b]) => {
  return [b, a];
};

const arr = [1, 2, 3, 4];
const result = reverseFirstTwo(arr);
console.log(result);

const reverse = (arr2) => {
  return arr2.reverse();
};

const arr2 = [1, 2, 3, 5];
const result2 = reverse(arr2);
console.log(result2);

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

const arr1 = [1, 2, 3, 4, 5];
const arr12 = [6, 7, 8, 9, 10];

const array = arr1.concat(arr12);
const name1 = ["Bayu", "Budi", "Cici"];

const evan = "Cina1Ngga1punya1Toko";
console.log(evan.split("1"));

console.log(typeof name1.join([", "]));
console.log(array);
