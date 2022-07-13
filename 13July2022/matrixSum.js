let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];
// let row=matrix.length;
// let cols=matrix[0].length;
// let sum=0;
// for(let i=0;i<row;i++){
//     for(let j=0;j<cols;j++){
//         sum=sum+matrix[i][j];
//     }
// }
// console.log(sum);

let row=matrix.length;
let cols=matrix[0].length;
let sum=0;
for(let i=0;i<row;i++){
    
        sum=sum+matrix[i][i];
    //  there is no need of two for loops because if i and j shoud be same(i=j) then instw=ed if j we can also write i=i
}
console.log(sum);
    

    