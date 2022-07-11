let numsA=[1,6,2,9,8,7];
console.log(numsA.sort());
// OUTPUT FOR---->console.log(numsA.sort());...WILL Be .......>[1,2,6,7,8,9]
console.log(numsA.sort(function(a,b){
    return b-a;
}));
// OUTPUT FOR---->console.log(numsA.sort(function(a,b){return b-a;}));...WILL Be .......>[9,8,7,6,2,1]


// Traditional Anonymous Function
// (function (a, b) {
//     return a + b + 100;
//   })
  
  // Arrow Function
//   (a, b) => a + b + 100;***it is not necessary ro write "return STATMENT" in ARROW functin...it is inbuilt in it



let nums=[1,7,11,100,1100,15]
console.log(nums.sort());
// OUTPUT FOR---->console.log(nums.sort());...WILL Be .......>[1,100,11,1100,15,7]
console.log(nums.sort((a,b)=>a-b));
// OUTPUT FOR---->console.log(nums.sort((a,b)=>a-b));...WILL Be .......>[1,7,11,15,100,1100]

console.log(nums.sort((a,b)=>b-a));
// OUTPUT FOR---->console.log(nums.sort((a,b)=>b-a));...WILL Be .......>[1100,100,15,11,7,1]
