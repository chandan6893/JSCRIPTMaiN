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

// polyfill for map

// let arr = [1, 2, 3, 12];

// let newArr=arr.map((ele)=>{
//   return ele;
// });
// console.log(newArr);


function squareOfTheEle(ele) {
  return ele % 2 === 0;
}

Array.prototype.myMap = function (cb) {
  // console.log("This",this)
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};
console.log(arr.myMap(squareOfTheEle));


// polyfill for filter

// const arr = [1, 2, 3, 4, 5];
// const result=arr.filter((el)=>el>2);
// console.log(result);

Array.prototype.myFilter = function (cb) {
  // console.log(this)
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const result = arr.myFilter((el) => el > 2);
console.log(result);

// another way of polyfill for filter

// const arr = [1, 2, 3, 4, 5];
// const result=arr.filter((el)=>el>2);
// console.log(result);
function isEven(item) {
  return item % 2 === 0;
}

Array.prototype.myFilter = function (cb) {
  // console.log(this)
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

const result2 = arr.myFilter(isEven);
console.log(result2);

// polyfill for reduce

// const arr = [1, 2, 3, 4, 5];

// const sum=arr.reduce((acc,ele)=>{
//   console.log(acc,ele)
//   return acc+ele;
// },0)
// console.log(sum)

Array.prototype.myReduce = function (cb, initialValue) {
  acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};
const result3= arr.myReduce((acc, currEle) => {
  return acc + currEle;
}, 0);
console.log(result3);
