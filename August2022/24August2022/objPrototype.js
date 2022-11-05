// object prototypes
let person = {
    name:"vasanth",
    age :20,
};

let person2 = {
    name : "Sameer",
};

 person2._proto_ = person;
//  console.log(Object.getPrototypeOf(person));
console.log(person2.age);
 console.log(Object.getPrototypeOf(person2));
 console.log(Object.hasOwn(person,"name"));