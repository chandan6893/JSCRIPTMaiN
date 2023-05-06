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
