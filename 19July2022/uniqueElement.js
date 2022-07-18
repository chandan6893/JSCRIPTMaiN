let char=['a','b','a','c','b'];
let uniquechar=[];
for(let i=0;i<char.length;i++){
    if(!uniquechar.includes(char[i])){
        uniquechar.push(char[i])
    }
    
    
}
console.log(uniquechar)

console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
let character=['a','b','a','c','b']
let uniqCharacter=character.filter(function(Y,Z){
    console.log(Y,Z)
    return character.indexOf(Y)===Z;
});
console.log(uniqCharacter);