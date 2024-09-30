class Person {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }

  introduce() {
    console.log(
      `Hello, Nama saya Adalah ${this.nama} dan saya berumur ${this.umur} Tahun.`
    );
  }
}

const person1 = new Person("Bewok", 22);
person1.introduce(); //
