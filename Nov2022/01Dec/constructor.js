function Person(fname,lname){
  this.firstName=fname,
  this.lastName=lname;

}

const person1= new Person("Ankit","Singh");
const person2=new Person();
Person.prototype.gender="Male";

Person.prototype.fullName=function(){
    return `His Full Name is ${person1.firstName}  ${person1.lastName} and he is a ${person1.gender}`;
    // console.log(`His Full Name is ${person1.firstName}  ${person1.lastName}`)
  };
console.log(person1.fullName());
console.log(person1.gender)
