let object1={};
object1["name"]="Vasanth";
console.log(object1);
console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQ");
let obj={
    name:'Sameer',
    age:20,
    country:'India',
};
let sortedKeys=Object.keys(obj).sort();
let  sortedObj={}
for(let key of sortedKeys){
    sortedObj[key]=obj[key]
}
console.log(sortedObj);
console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
let scores={
    Deepak:10,
    Anjali:90,
    Chandan:80,
    Bharath:35,
};
let value1=Object.entries(scores).sort();
console.log(value1,'SORTED BY KEYS');
let value2=Object.entries(scores).sort((a,b)=>a[1]-b[1])
console.log(value2,'SORTED BY VALUES')