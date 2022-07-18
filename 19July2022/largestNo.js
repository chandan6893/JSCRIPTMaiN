let nums=[11,9,7,17,25,33,19];
function getLargestNo(nums,pos){
    nums.sort((a,b)=> a-b);
    console.log(nums);
    return nums[pos-1];
}
console.log(getLargestNo(nums,1))