// sum of columns elements in a matrix

let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

let row=matrix.length;
let cols=matrix[0].length;
let sum=0;
let start=2;
for(let i=0;i<cols;i++){
    sum=sum+matrix[i][start];
}
console.log(sum);

    
        

        
        