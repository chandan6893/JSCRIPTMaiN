let nums1=[1,2,3];
let nums2=[4,5,6];
console.log(nums1,'Vasanth',nums2);

// console.log(nums1.concat('Vasanth',nums2));

    // BUT IT WOULD BE BETTER IF WE USE SPREAD OPERATOR(...) ans we must put {...nums1,'Vasanth',...nums2} 
    // inside square bracket otherwise it will extract the elements from array and throw 1, 2, 3, 'Vasanth', 4, 5, 6 
    // outside of array and we will not be able to REUSE IT
    console.log(...nums1,'Vasanth',...nums2)

    console.log([...nums1,'Vasanth',...nums2]); 

