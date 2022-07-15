let fname='Vasanth';
fname[0]='J';
console.log(fname,'<======(it wil not change V with J)');

// BUT
console.log(fname.replace('V','J'),'<===replace will change V with J');

console.log(fname.replaceAll('a','J'),'<===replaceAll will change all (a) with J');