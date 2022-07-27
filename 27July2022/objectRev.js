// OBJECT REVISION
let person={
    name:"Chandan",
    age:28,
    proffession:"coding",
    greet:function(){
        return ("Say Hello");
    },
};
console.log(person);
console.log("------------Accessing property-------------");
console.log(person["name"]);
console.log(person["age"]);
console.log("OOOOO-----Accessing Method By Putting () at the end of method key like below------OOOOO");
console.log(person.greet());
console.log("xxxxxxxxxxx XXXXXXXXXXXXXXXXXXXXXXXXJavaScript this Keyword XXXXXXXXXXXXXXXXXXXXXXXXXxxxxxxx ");

// To access a property of an object from within a method of the same object, you need to use the this keyword.
//  Let's consider an example.

const personA = {
    name: 'John',
    age: 30,

    // accessing name property by using this.name
    greet: function() { return (`The name is===> ${this.name}`); }
};

console.log(personA.greet());
// In the method greet, while accessing a property of an object, this keyword is used.

// In order to access the properties of an object, this keyword is used following by . and key.

// Note: In JavaScript, this keyword when used with the object's method refers to the object. this is bound to an object.


