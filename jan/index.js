// ***Custom map Method

function myArr(arr, cb) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    newArr.push(cb(arr[i]));
  }
  return newArr;
}

function square(x) {
  return x * x;
}
console.log(myArr([1, 2, 3, 4], square));


//Custom Filter Method
function myFilter(arr, cb) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

function isEven(x) {
  if (x % 2 === 0) {
    return x;
  }
}

console.log(myFilter([2, 3, 4, 5, 7], isEven));


for (var i = 0; i <=5; i++) {
setTimeout(function() {
  console.log(i)
}, 10);
}


