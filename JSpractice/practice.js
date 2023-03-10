// function neww(b,c){
//     let a=b=c;
//     // console.log(a);
//     return (a,a);

// }
// // neww("Kumar");   
// console.log(neww("Kumar","Kumbha"));




// function neww(b){
// return second(b);

// }
// console.log(neww("54"));

// function second(z){
//     console.log(z,"SECOND FUCTION CONSOLE");
//     return z;
// }


// let fname=10
// console.log(fname);




// 
// let num=5;
// for(let i=1;i<=num;i++){
//     let stars =" ";
//     for(let j=1;j<=num;j++){
//         stars=stars+"*";
//         // console.log(stars);
//     }
//     console.log(stars);
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=5;j++){
//         console.log(i,j);
        

//     }
    
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     let stars='';
//     for(let j=1;j<=num;j++){
//         stars=stars + i;
        
//     }
//     console.log(stars)
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     let stars='';
//     for(let j=1;j<=i;j++){
//         stars=stars + '*';
        

//     }
//     console.log(stars);
// }



// let num=5;
// let count=1;

// for(let i=1;i<=num;i++){
//     let sum='';
//     for(let j=1;j<=i;j++){
//         sum=sum+`${count}  `;
//         count=count+1;
        
//     }
//     console.log(sum);
// }


// let num=5;
// for(let i=1;i<=num;i++){
//     let space='';
//     let count;
    
//     for(let j=1;j<=i;j++){ 
//         if(i%2==0){
//             count=0;
//         }
//         else{
//             count=1;
//         }
//         space=space+count;

//     }
//     console.log(space);
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     let space='';
//     let count;
    
//     for(let j=1;j<=i;j++){ 
//         if(j%2==0){
//             count=0;
//         }
//         else{
//             count=1;
//         }
//         space=space+count;

//     }
//     console.log(space);
// }

// let num=6;
// for(let i=1;i<=num;i++){
//     space='';
//     for(let j=1;j<=i;j++){
//         if((i+j)%2==0){
//             space=space+1;
//         }
//         else{
//             space=space+0;
//         }
//     }
//     console.log(space);
// }



// let num=5;
// let count=1;
// for(let i=1;i<=num;i++){
//     space='';
//     for(let j=1;j<=i;j++){
//         if(count>3){
//             count=1;
//         }
//         space=space+count;
//         count++;
//     }
//     console.log(space);
// }

// let num=5;

// for(let i=num;i>=1;i--){
//     space='';
//     for(let j=num;j>=i;j--){
//         space=space+j ;

//     }
//     console.log(space);
// }


// for(let i =0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     })
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   });
// }

//  function recursuion(x){
//     if(x===0){
//         return 1
//     }
//    else {
//     return x*recursuion(x-1)
//    }

//  }
//  recursuion(5)


// class,constructor,object

// class Pen{
//   constructor(name,color,price){
//     this.name=name;
//     this.color=color;
//     this.price=price;
//   }
//   showDetails(){
//     console.log(`Price of pen is ${this.price}, color is ${this.color} and name is ${this.name}`)
//   }
// }
// const pen1 = new Pen("Marker","Blue","Rs100");
// pen1.showDetails();
// console.log(x);
// let x=10;

// let promise1 = new Promise((res,rj)=>{
//   res("hello")
// })
// promise1.then((d)=>console.log(d))

// const person1 = {
//   name: "Ankit",
//   age: 28,
//   findAge: function () {
//     return `his name is ${this.name} and he is ${this.age} years old`;
//   },
// };

// const person2 = {
//   name: "Navneel",
//   age: 32,
// };

// console.log(person1.findAge.call(person2));
// let sum = 0;
// for (let i = 1; i < 3; i++) {
//   for (let j = 1; j < 3; j++) {
//     sum = sum + j;
//   }
// }
// console.log(sum);

// **********Custom map Method

// function myFun(cb,arr){

//   let newArr=[];
//   for(let i=0;i<arr.length;i++){
//     newArr.push(cb(arr[i]))
//   }
//   return newArr
// }
// function square(n){
//   return n*n;
// }
// myFun(square,[1,2,3])

// custom filter method

// function myFun(cb, arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// function evenNo(x) {
//   return x % 2 === 0;
// }

// console.log(myFun(evenNo, [1, 2, 3, 4]));

// custom bind method
function getDetails() {
  return `his full name is ${this.fname} ${this.lname}`;
}

const person = {
  fname: "Ankit",
  lname: "Singh",
};
// const details=getDetails.bind(person)

// console.log(details());

Function.prototype.myBind = function (obj) {
  const func = this;
  return function () {
    return func.call(obj);
  };
};

const details = getDetails.myBind(person);
console.log(details());
details();

