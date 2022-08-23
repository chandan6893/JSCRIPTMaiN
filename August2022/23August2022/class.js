// function Person(name){
//     this.name = name;
//     this.getName = function(){
//         return this.name;
//     };
// }
// let vasanth = new Person("Kumar");
// let anish = Person("Singh");
// console.log(vasanth);
// console.log(anish);

// *****************CLASS****************

class Person {
    constructor(name) {
        this.name = name;
    }
    getName(){
        return this.name;
    }
    b=4;
}

let vasanth = new Person("vasanth");
let anish = new Person("anish");
console.log(vasanth.getName());
console.log(vasanth);
console.log(vasanth.b);