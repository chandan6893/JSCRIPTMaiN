let nums=[1,3,2,1,9,6,,4];
let newArr=[];
for(let i=0;i<nums.length;i++){
    if(nums[i]>=4){
        newArr.push(nums[i]);
    }
}
console.log(newArr);


console.log('*********************************************************************');



let names=['Kumar','Ram','Mahendra','Sumbramanyam'];
let Array1=names.filter(function(X){
    return X.length<5;
})
console.log(Array1)



