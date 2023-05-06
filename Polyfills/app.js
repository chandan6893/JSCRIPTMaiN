let arr = [1, 2, 3, 4, 5];

// arr.forEach((ele)=>console.log(ele));
function printEle(ele) {
  console.log(ele);
}

Array.prototype.myForEach = function (cb) {
  // console.log("this",this)
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
arr.myForEach(printEle);


// polyfill for map method
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};
console.log(arr.myMap((ele) => ele * 3));
