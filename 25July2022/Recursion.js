// recursion

// factorail of a number using recursion
function getFactorial(num){
// in RECURSION first of all set the the base condion
if(num===1){
    return 1;
}
return num*getFactorial(num-1)
}
console.log(getFactorial(5));
console.log('---------SUM OF ARRAY ELEMENTS using RECURSION -----------');
let nums=[1,2,3,4,5];
function findSum(arr){
    if(arr.length===1){
        return arr[0];
    }
    return arr.shift()+findSum(arr)

}
console.log(findSum(nums));
// TO UNDERSTAND THIS (SUM OF ARRAY ELEMENTS) SEE THE IMAGE