// #Given an array of integers nums and an integer target, 
// return indices of the two numbers such that they add 
// up to target.

// var twoSum = function(nums, target) {
    
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//              console.log(nums[i],nums[j])
//              console.log(i,j)
//             }
            
//         }
        
//     }
    
// };
// console.log(twoSum([1,2,7,8,11,15],9))

var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
            console.log([nums[i], nums[j]]) ;
         
        }
      } 
    }
   
  }
  twoSum([1, 2, 3,6,7, 8, 11, 15], 9)