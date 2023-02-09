const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Hello");
  }, 300);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Guys");
  }, 200);
});

Promise.race([promise1, promise2]).then((val) => {
  console.log(val);
});
