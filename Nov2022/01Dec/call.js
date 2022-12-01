let person={
    fname:"Ankit",
    lname:"Singh",
}
function getName(city,village){
    return `His FullName is ${this.fname} ${this.lname} and he is from ${village} ${city}`
}

// let fullName= getName.call(person,"Rampur","Kanpur");
let fullName = getName.apply(person,[ "Rampur", "Kanpur"]);
console.log(fullName);