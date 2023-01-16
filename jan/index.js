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
