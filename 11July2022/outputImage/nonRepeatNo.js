// print NONREPEATING AND REPEATING Numbers
// *********NONREPEATING*****
let nums=[1,2,1,2,1,3,4];
// console.log(nums.indexOf(4))
// console.log(nums.length)
for(let i=0;i<nums.length;i++){
    if(nums.indexOf(nums[i])===nums.lastIndexOf(nums[i])){
        console.log(nums[i]);
    }
}

// *******RepeatingNo************
console.log("*******RepeatingNo************")
for(let i=0;i<nums.length;i++){
    if(nums.indexOf(nums[i])!==nums.lastIndexOf(nums[i])){
        console.log(nums[i]);
    }
}