// polyfill=>creating own array
Array.prototype.myMap = function(){
    console.log("this--->",this);
}

let nums = [1,2,3,4];
nums.myMap();