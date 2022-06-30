// function neww(b,c){
//     let a=b=c;
//     // console.log(a);
//     return (a,a);

// }
// // neww("Kumar");   
// console.log(neww("Kumar","Kumbha"));




// function neww(b){
// return second(b);

// }
// console.log(neww("54"));

// function second(z){
//     console.log(z,"SECOND FUCTION CONSOLE");
//     return z;
// }


// let fname=10
// console.log(fname);




// 
// let num=5;
// for(let i=1;i<=num;i++){
//     let stars =" ";
//     for(let j=1;j<=num;j++){
//         stars=stars+"*";
//         // console.log(stars);
//     }
//     console.log(stars);
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     for(let j=1;j<=5;j++){
//         console.log(i,j);
        

//     }
    
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     let stars='';
//     for(let j=1;j<=num;j++){
//         stars=stars + i;
        
//     }
//     console.log(stars)
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     let stars='';
//     for(let j=1;j<=i;j++){
//         stars=stars + '*';
        

//     }
//     console.log(stars);
// }



// let num=5;
// let count=1;

// for(let i=1;i<=num;i++){
//     let sum='';
//     for(let j=1;j<=i;j++){
//         sum=sum+`${count}  `;
//         count=count+1;
        
//     }
//     console.log(sum);
// }


// let num=5;
// for(let i=1;i<=num;i++){
//     let space='';
//     let count;
    
//     for(let j=1;j<=i;j++){ 
//         if(i%2==0){
//             count=0;
//         }
//         else{
//             count=1;
//         }
//         space=space+count;

//     }
//     console.log(space);
// }

// let num=5;
// for(let i=1;i<=num;i++){
//     let space='';
//     let count;
    
//     for(let j=1;j<=i;j++){ 
//         if(j%2==0){
//             count=0;
//         }
//         else{
//             count=1;
//         }
//         space=space+count;

//     }
//     console.log(space);
// }

let num=6;
for(let i=1;i<=num;i++){
    space='';
    for(let j=1;j<=i;j++){
        if((i+j)%2==0){
            space=space+1;
        }
        else{
            space=space+0;
        }
    }
    console.log(space);
}


