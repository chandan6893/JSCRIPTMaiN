// 1. Write a program to print a series with a 'while' loop.0,1,1,2,3,5,8,13,21,..................
const num = 100;
var x=0;
var y=1;
var fn=x+y;
console.log(x);
while(fn < num){
    console.log(fn);
    fn=x+y;
    x=y;
    y=fn;
}