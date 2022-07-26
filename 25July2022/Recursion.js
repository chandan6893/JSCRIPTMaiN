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
console.log('************base to the power exponential using recursion******see the image to understand well******');
function getPower(base,exponent){
    if(exponent===0){
        return 1;
    }
    return base*getPower(base,exponent-1);

}
console.log(getPower(2,4));
console.log("flatenng array without using .flat() method and by using RECURSION");

function flatten(arr){
    let flattenedArray=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
           flattenedArray=[...flattenedArray,...flatten(arr[i])]
        }
        else{
            flattenedArray.push(arr[i])
        }
    }
    return flattenedArray;

}
let inputArray=[10,[1,2,3,4],5];
console.log(flatten(inputArray));