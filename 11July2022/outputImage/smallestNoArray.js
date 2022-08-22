// find the smallestr vale in an array
let nums=[-1,-20,-32,-17,-89,-10,-27,-100];
let min=nums[0];
for(let i=1;i<nums.length;i++){
    if(min>nums[i]){
        min=nums[i];
    }
    // if(nums[i]<min){
    //     min=nums[i]
    // }
    
}
console.log(min)
