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