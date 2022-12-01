class Person {
  constuctor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }
  fullName() {
    // console.log(`his name is ${this.fname} ${this.lname}`);
    return `his name is ${this.fname} ${this.lname}`;
  }
}

const person1 = new Person("anki", "singh");
const person2 = new Person("Navneel", "Neerad");
console.log(person2.fname);
console.log(person1.fullName());
