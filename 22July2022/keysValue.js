let car={
    name:'BMW',
    model:'Q3',
};
for(let abc in car){
    console.log(abc,car[abc]);
}
console.log(car)
console.log(JSON.stringify(car),'<===STRINGIFIED')
console.log(JSON.parse(JSON.stringify(car)),'<===OBJECTIFIED')
console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
for(let i in [1,2,3]){
    console.log(i,[1,2,3][i])
}