let obj={
    name:'David',
    age:17,
    country:'england',
};
// how to get the length of an OBJECT
console.log(Object.keys(obj));
console.log(Object.keys(obj).length);
console.log('OR using for in loop');

let object1={
    name:'David',
    age:17,
    country:'england',
};
let count=0;
for(let key in object1){
    count=count+1;
}
console.log(count);
