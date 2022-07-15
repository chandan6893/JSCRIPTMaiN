let mobileNo='8368438420'
if(mobileNo.length==10){
    console.log('Valid No');
}
else{
    console.log('Invalid No')
}
console.log('1111111111111111111111111111111111111111111');

let MymobileNo=' 9999438420 '
if(MymobileNo.length==10){
    console.log('Valid No');
}
else{
    console.log('Invalid No')
}
console.log('////////////////////////////////////////////////////////////');
let YourmobileNo=' 9999438420 '
if(YourmobileNo.trim().length==10){
    // here trim() will remove extra space from left and right side of ' 9999438420 '
    console.log('Valid No');
}
else{
    console.log('Invalid No')
}
console.log('<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
let No=' 9999438420 ';
console.log(No.replace(/9/g,''))