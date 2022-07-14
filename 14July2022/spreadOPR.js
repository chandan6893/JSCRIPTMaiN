// let nums1=[1,2,3];
// let nums2=nums1;
// nums2[0]=10;

// console.log(nums1,nums2)

// but


let nums1=[1,2,3];
let nums2=[...nums1];
nums2[0]=10;

console.log(nums1,nums2);
// Spread Operator is used to copy all values and return the all values in a New Array