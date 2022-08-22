// .flat() Method is used to convert n-Dimensionsl array into one-Dimensional Array.
let nums2=[
    [1,2],
    [3,4],
    [5,6],
];
console.log(nums2.flat());
// here default value is 1 in nums2.flat()
console.log('HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH');
let nums3=[
    [1,2],
    [3,4],
    [5,6],
    [[7,8],
    [9,10],
]
];
console.log(nums3.flat());
console.log(nums3.flat(2))
console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
let nums4=[
    [1,2],
    [3,4],
    [5,6],
    [[[7,"Vasanth"],8],
    [9,10],
]
];
console.log(nums4.flat());
console.log(nums4.flat(3));