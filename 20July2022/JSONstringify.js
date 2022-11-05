//  converting OBJECT TO STRING

let person={
    name:'Rohit',
    age:5,
    son:{
        name:'Sunil',
        job:'Cricket',
    },
};
console.log(JSON.stringify(person));
console.log(typeof(JSON.stringify(person)));
console.log('XXXXXXXXXXX        OBJECT TO STRING AND STRING TO AGAIN OBJECT (noted in copy)      XXXXXXXXXXXXXXXXXXXX');
let newPerson={
    name:'Vasanth',
    wife:'Samantha',
    son:{
        name:'Chezian',
        age:10,
    },
};
let copy=JSON.stringify(newPerson);
// here copy["name"] will not work. it will give undefined because copy is not an OBJECT .
console.log('changing string(copy) into object using Json.parse() ||||||||||')
let copiedPerson=JSON.parse(copy);
console.log(copy);
console.log(copiedPerson);
console.log('SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS');
console.log(copiedPerson["name"]);
// BUT here copiedPerson["name"] will  work because copiedPerson is an OBJECT .
console.log('999999999999999999999999999999999999999999999999999999999999999999999999999999999999999');
// NOW newPerson AND copiedPerson BOTH ARE OBJECT .IF WE CHANGE THE VALUE OF PERSON THEN WILL THE VALUE OF copiedPerson CHANGE....
// OBSERVE BELOW CAREFULLY
newPerson["name"]="Vikram";
console.log(newPerson);
console.log(copiedPerson);