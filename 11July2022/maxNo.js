let nums=[1,20,32,17,89,10,27,100];
`the last value of the array nums --->${console.log(nums[nums.length-1])} and output will be 100`

// find the largest value in the given Array
let max=0;
for(let i=0;i<nums.length;i++){
    
    if(max<nums[i]){
        max=nums[i];
       
} 

}console.log(max);


negativeNo=[-1,-20,-32,-17,-89,-10,-27,-100];
let maximum=negativeNo[0];
for(let i=1;i<negativeNo.length;i++)
// i=1 because negativeNo[i=0] will always startfrom -1 .We can also put i=0;
{     
    
    if(maximum<negativeNo[i]){
        maximum=negativeNo[i];
    }
    // console.log(max);
}
console.log(maximum);



