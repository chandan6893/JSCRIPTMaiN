// Sum Of Diagonal elements(1+6+11+16) in Matrix
// let matrix=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];

// let row=matrix.length;
// let cols=matrix[0].length;
// let sum=0;
// for(let i=0;i<row;i++){
//     for(let j=0;j<cols;j++){
//         if(i===j){
//             sum=sum+matrix[i][j];

//         }
        
//     }
// }
// console.log(sum);

// let matrix=[
//     [1,2,3,4],
//     [5,6,7,8],
//     [9,10,11,12],
//     [13,14,15,16]
// ];

// let row=matrix.length;
// let cols=matrix[0].length;
// let sum=0;
// let start=0;
// for(let i=0;i<row;i++){
    
//     sum=sum+matrix[i][start];
//     start=start+1;

//          }
// console.log(sum); ===============>OutPut==34

// Sum Of Diagonal elements(4+7+10+17) in Matrix

let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [17,14,15,16]
];

let row=matrix.length;
let cols=matrix[0].length;
let sum=0;
let start=matrix[0].length-1;
for(let i=0;i<row;i++){
    
    sum=sum+matrix[i][start];
    start=start-1;

         }
console.log(sum);