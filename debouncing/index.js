// const button = document.querySelector("#button");

// function debounceFunc(callb,delay){
//         let timer;
//         return function(){
//             clearTimeout(timer)
//          timer=setTimeout(()=>{
//             callb.apply(this)
//          },delay)
//         }
// }

// button.addEventListener("click",debounceFunc(function () {
//     console.log("Debounce");
//   },2000)
// );


const button= document.getElementById("button");

function debounceFun(fun,delay){
let timer;
   return function(){
      clearTimeout(timer);
      timer=setTimeout(()=>{
         fun.apply(this,arguments)
      },delay)
   }
}

button.addEventListener("click",debounceFun(function(){
   console.log("DEBOUNCING")
},2000))