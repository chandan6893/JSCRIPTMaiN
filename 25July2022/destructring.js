// DESTRUCTRING

// array destructring
let nums=[1,2,3,4,5];
let n1,n2=nums;
console.log(n1,n2);
console.log('----------array destructring---------');
[n1,n2,...rest]=nums;
console.log(n1,n2,rest);
console.log('++++++++++++++++++++++++OBJECT destructring++++++++++++++++++++++++++++');

let obj={
    name1:"Vasanth",
    branch:"CSE",
    age:21,
};
let {x,y}=obj;
console.log(x,y);


let {name1,branch}=obj;
console.log(name1,branch)
