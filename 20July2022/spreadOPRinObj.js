let nums=[4,6,8];
let digits=nums;
digits[0]=10;
console.log(nums,digits);
console.log('SPREAD OPERATOR IN ARRAY.IT IS USED FOR COPYING')
let nums1=[4,6,8];
let numbers=[...nums1];
numbers[0]=10;
console.log(nums1,numbers);
console.log('XXXXXXXXXXXXXXXXX SPREAD OPERAROR IN OBJECT XXXXXXXXXXXXXXXXXXX');
let person={
    name:'Rohit',
    age:5,
};
let copy=person;
person['name']='Rajiv';
console.log(person,copy);
console.log('Spread Operaror is used inside {} in OBjecttttttttttttttttttttttt');
let newPerson={
    name:'Raj',
    age:6,
};
let addAnotherOne={...newPerson};
addAnotherOne['name']='Aadi';
console.log(newPerson,addAnotherOne)