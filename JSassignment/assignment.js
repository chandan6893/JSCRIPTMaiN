// / Print all the numbers in the given range.
// function numbers(a,b){
//     while((a+1)<b){
        
        
        
//         a++;
//         console.log(a);
        
       
//     }
//  return "chandan";

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
// console.log(evenNo());




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

// function product(a,b,prod){
//     while(a+1<=b){
//         // console.log(a);
//         prod=prod*a;
//         // console.log(s);
//         a++;
        
//     }
//     return prod;
// }
// console.log(product(1,10,1));

// function addTwoNo(num1,num2){
//     // console.log(num1+num2)
//     return num1+num2
// }
// let sum=addTwoNo(5,4);
// console.log(sum);


// Write the recursive function to check whether a given number is prime or not
// function primeNo(n){
//     for(let i=2; i<n;i++){
//         if(n%i==0){
//             return "not a prime no"
//         }
//         else{
//             return "prime no"
//         }
//     }
//     return primeNo(n);

// }
// console.log(primeNo(22));


// Print sum of all the first 10 even numbers.

function SumOfEveNo(n){
    
    let sum=0;
    for(let i=0;i<=n;i++){
        // console.log(i);
        if(i%2==0){
            sum=sum+i;
        }
        // return sum;
    }
    return sum;
}
console.log(SumOfEveNo(20))



// function fun(n)  
//     {  
//         let i, sum = 0;  
//         for (i = 2; i <= n; i++) {  
//             if(i%2==0){
//                 sum += i; 
//             } 
//         }  
//         return sum;  
//     }  
//     console.log(fun(20));


