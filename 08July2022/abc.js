let nums=[1,3,4,3,2,5,7,1];

for(let i=0;i<nums.length;i++){
    if(nums.includes(nums[i],i+1)){
        console.log(nums[i]);
    }


}