class Person {
  constructor(name, age) {
    this.name = name; // Menyimpan nama ke properti name
    this.age = age; // Menyimpan usia ke properti age
  }

  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

// Contoh penggunaan
const person1 = new Person("Bewok", 22);
person1.introduce(); // Output: Hello, my name is Alice and I am 30 years old.
