// prototypical inheritance

// let person = {
//     name: "Vasanth",
//     age:30,
//     getInfo: function(){
//         console.log(`${this.name} is ${this.age} years old`)
//     },
// };

// let person2 = {
//     name: "Rajni",
// };

// // never ever do this in your code .It is ony to understand how it happens behond the scene
// person2._proto_ = person;

// person.getInfo();
// ************************Polyfill---->creating own method***********************

// Array.prototype.vasanth = function(){
//     console.log("vasanth method");
// };
// [].vasanth();

// ...............................................

// Function.prototype.sumA = function(){
//     console.log("Addition");
// };
// function add(){

// }

// add.sumA();

// map method

// let numb = [1,2,3,4];
// let resulT= numb.map((n)=>{
// return n*2;
// });
// console.log(resulT);

// -------------polyfill=>creating own array---------
// Array.prototype.myMap = function(callbackfn){
//     console.log("this--->",this);
//     let resultArr = [];
//     for(let i=0;i<this.length;i++){
//         resultArr.push(callbackfn(this[i]));
//     }
//     return resultArr;
// }

// let nums = [1,2,3,4];
// let result = nums.myMap(function(num){
//     console.log(num);
//     return num * 2;
// });
// console.log(result);

// filter method

// let filterNums=[1,2,3,4].filter((num)=>num>2);
// console.log(filterNums);

// ----------creating own filter method----------

// Array.prototype.myFilter = function(callbackfn){
//     let result = [];
//     for (let i=0;i<this.length;i++){
//         if(callbackfn(this[i])){
//             result.push(this[i]);
//         }
//     }
//     return result;
// }

// let filteredNums = [1,2,3,4].myFilter((num)=>num>2);
// console.log(filteredNums); 


// ..................reduce method........................
// let reducedNum = [1,2,3,4].reduce((acc,current)=>acc + current,5);
// console.log(reducedNum);

// creating own reduce method
// Array.prototype.myReduce =function(){
//     console.log(this);
// };
// [1,2,3,4].myReduce();
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// Array.prototype.myReduce =function(){
//     // console.log(this);
//     for(let i=0;i<this.length;i++){
//         console.log(this[i]);
//     }
// };
// [1,2,3,4].myReduce();

// ***********************creatingOwnReduce***********************************

// Array.prototype.myReduce =function(callbackFn,initialValue){
//     // console.log(this);
//     let acc = initialValue;
//     for(let i=0;i<this.length;i++){
//         // console.log(this[i]);
//         acc = callbackFn(acc,this[i]);
//     }
//     return acc;
// };
// let reducedNum = [1,2,3,4].myReduce((acc,current)=>{
//     // console.log(acc,current);
//     return acc + current;
// },0);
// console.log(reducedNum);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXANDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

Array.prototype.myReduce =function(callbackFn,initialValue){
    // console.log(this);
    let acc = initialValue;
    for(let i=0;i<this.length;i++){
        // console.log(this[i]);
if(acc !== undefined){
    acc = callbackFn(acc,this[i]);
      }else {
    acc = this[i];
          }
    }
    return acc;
};
let reducedNum = [1,2,3,4].myReduce((acc,current)=>{
    // console.log(acc,current);
    return acc + current;
});
console.log(reducedNum);
