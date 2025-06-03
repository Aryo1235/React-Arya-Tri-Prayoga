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

const fizzBuzz = (total) => {
  for (let index = 0; index <= total; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("FizzBuzz");
    } else if (index % 3 === 0) {
      console.log("Fizz");
    } else if (index % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(index);
    }
  }
};

const hasil = fizzBuzz(30);
console.log(hasil);
