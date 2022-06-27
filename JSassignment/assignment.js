// / Print all the numbers in the given range.
// function numbers(a,b){
//     while((a+1)<b){
        
        
        
//         a++;
//         console.log(a);
        
       
//     }
// //  return numbers(a+1,b);
// }

// console.log(numbers(1,10));







// Print all the numbers in descending order in the given range
// function descending(a,b){
//     while(b-1>a){
        
//         b--
//         console.log(b);

//     }
    
// }
// console.log(descending(1,10));




// Print all the even numbers in the given range
// function evenNo(){
//     for(let i=0;i<10;i++){
//         if (i%2==0 && i!=0){
//             console.log(i);
//         }

 
//     }
// }
// evenNo();
// // console.log(evenNo());




// Find the factorial of a given number n
// function factorial(num,fact){
//     while(num>0)
//     { 
        
//         fact=fact*num;
//         // console.log(fact);
//         num--
       
        
        
        
//     }
//     return fact;
    
// }
// console.log(factorial(5,1));




// Find the nth digit of the fibonacci series.

// function fibonacci(first,second,count){
// while(count<10){
//     let temp=first+second;
//     // console.log(first)
//     return fibonacci(second,temp,count+1);
// } 
// console.log(first);
// }
// fibonacci(1,1,1);



// Print sum of all the numbers in the given range
// function sum(a,b,s){
//     while(a+1<b){
//         // console.log(a);
//         s=s+a;
//         // console.log(s);
//         a++;
        
//     }
//     return s;
// }
// console.log(sum(1,10,0));

// Print the product of all the numbers in given range

function product(a,b,prod){
    while(a+1<=b){
        // console.log(a);
        prod=prod*a;
        // console.log(s);
        a++;
        
    }
    return prod;
}
console.log(product(1,10,1));