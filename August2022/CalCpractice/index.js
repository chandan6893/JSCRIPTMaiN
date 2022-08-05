let display=document.getElementById("disp");
let button=Array.from(document.getElementsByClassName("btn"));

button.map((z)=>{
     z.addEventListener("click",(event)=>{
        let key=event.target.innerText;
        if(key == "A/c"){
         display.innerText = "";
     }
     else if(key=="del"){
         display.innerText=display.innerText.slice(0,-1);
     }
     else if(key== "="){
         if(display.innerText){
             display.innerText=eval(display.innerText);
         }
     }
     else{
         // display.innerText=display.innerText+key;
         display.innerText+=key;
     }

     })

})

// *************************
// let display=document.getElementById("display");


// let buttons=Array.from(document.getElementsByClassName("btn"));
// // console.log(buttons)
// buttons.map((btn)=>{
//     btn.addEventListener("click",(event)=>{
//         let key=event.target.innerText;
//         if(key == "A/c"){
//             display.innerText = "";
//         }
//         else if(key=="del"){
//             display.innerText=display.innerText.slice(0,-1);
//         }
//         else if(key== "="){
//             if(display.innerText){
//                 display.innerText=eval(display.innerText);
//             }
//         }
//         else{
//             // display.innerText=display.innerText+key;
//             display.innerText+=key;
//         }
//     });
// });