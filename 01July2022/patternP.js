// let num=5;

// for(let i=1;i<=num;i++){
//     let space=' ';
//     for(let j=1;j<=num-i;j++){
//         space=space+' ';
//     }
//     for(let k=1;k<=i;k++){
//         space=space+k;
//     }
//     console.log(space);

// }


// (P2)

// let num=5;
// for(let i=1;i<=num;i++){
//     space=' ';
//     for(let j=1;j<=num-i;j++){
//         space=space+' ';

//     }
//     for(let k=2;k<=i+1;k++){
//         space=space+k;
//     } 
//     console.log(space);


// }

// let num=5;
// for(let i=1;i<=num;i++){
//     space='';
//     for(let j=5;j>=i;j--){
//         space=space+'*';
//     }
//     console.log(space);
// }

function factorialOfAnO(n){
    let fact=1;
    for(let i=n;i>=1;i--){
        
        fact=fact*i;
      

    }
    
    return fact;

}
   console.log(factorialOfAnO(5));

// function factorial(n){
//     let fact=1;
//     while(n>=1){
//         // fact=fact*n;
//         // n--;
        
    
//     }
//     factorial(fact*n,n--);
//     // return factorial()

// }
// console.log(factorial(5));