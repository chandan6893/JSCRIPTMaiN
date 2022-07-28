    // CONSTRUCTOR FUNCTION
    // In JavaScript, a constructor function is used to create objects. For example,

// constructor function
function Person () {
    this.name = 'John',
    this.age =23
}

// create an object
const person = new Person();
console.log(person)

// In the above example, function Person() is an object constructor function.

// To create an object from a constructor function, we use the new keyword.

// Note: It is considered a good practice to capitalize the first letter of your constructor function.

console.log("------WE CAN CREATE MULTIPLE OBJECTS WITH CONSTRUCTOR FUNCTION--------");
// In JavaScript, you can create multiple objects from a constructor function. For example,

// constructor function
function PersonA  () {
    this.name = 'John',
    this.age = 23,

     this.greet = function () {
        console.log('hello');
    }
}

// create objects
const person1 = new PersonA();
const person2 = new PersonA();

// access properties
console.log(person1.name);  // John
console.log(person2.name);  // John
// In the above program, two objects are created using the same constructor function.
console.log("++++++++++++++++++++++constructor function with parameters++++++++++++");
// JavaScript Constructor Function Parameters
// You can also create a constructor function with parameters. For example,

// constructor function
function PersonB (person_name, person_age, person_gender) {

   // assigning  parameter values to the calling object
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function () {
        return ('Hi' + ' ' + this.name);
    }
}


// creating objects
const personA1 = new PersonB('John', 23, 'male');
const personA2 = new PersonB('Sam', 25, 'female');

// accessing properties
console.log(personA1.name); // "John"
console.log(personA2.name); // "Sam"

// In the above example, we have passed arguments to the constructor function during the creation of the object.

// const personA1 = new PersonB('John', 23, 'male');
// const personA2 = new PersonB('Sam', 25, 'male');
// This allows each object to have different properties. As shown above,

console.log(personA1.name); 
// gives John

console.log(personA2.name); 
// gives Sam
