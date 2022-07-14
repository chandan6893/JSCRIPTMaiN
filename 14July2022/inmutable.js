let fname='VasanthKumar';
let nums=[1,2,3];

console.log(fname[0],fname[1]);
console.log('*******************************************************************************************************');

for(let i=0;i<fname.length;i++){
    console.log(fname[i]);
}
console.log('*******************************************************************************************************');
nums[0]=10;
console.log(nums);

// BUT
fname[0]='J';
console.log(fname);

// but
fname='J';
console.log(fname);