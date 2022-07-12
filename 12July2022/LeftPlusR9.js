let nums=[2,3,5,6,7,8];
let target=9;
let left=0;
let right=nums.length-1;
while(left<right){
    if(nums[left]+nums[right]===target){
        console.log(nums[left],nums[right]);
        left=left+1;
        right=right-1;
    }else if(nums[left]+nums[right]>target){
        right=right-1;
    }else if(nums[left]+nums[right]<target){
        left=left+1
    }

}



