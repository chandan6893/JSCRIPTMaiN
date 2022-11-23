const button = document.querySelector("#btn");
const heading =document.querySelector("#heading");

button.addEventListener("click",function(){
    // console.log("clicking")
    heading.innerHTML="just changed the text by clicking the button";
    heading.style.color = "tomato";
    heading.style.fontSize= "6rem";
});
 