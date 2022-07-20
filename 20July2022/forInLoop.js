// OBJECT=====>{}

let car={
    company:"BMW",
    model:"Q3",
    year: 2022,
    type:"SUV",

};
for(let key in car){
    console.log(key,car[key])
 }
   
 // (for in loop ) works for OBJECT (for of loop and for loop) works for ARRAY and STRINGS
    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
 console.log(Object.keys(car));
 console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU');
 let carValues=Object.values(car);
 console.log(carValues);
//  Here (.keys and .values) is a inbuilt method.
console.log(car['model'])
console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||');
let carProperties=Object.entries(car);
console.log(carProperties);

console.log('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO');
console.log(carProperties[0]);
console.log(carProperties[0][0]);

// BUT console.log(car["company"]) is BETTER to use than console.log(carProperties[0]); console.log(carProperties[0][0]);
console.log(car["company"])