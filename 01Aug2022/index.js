const contents = document.querySelector(".contents");
const stars = document.querySelectorAll(".star");


contents.addEventListener("onmouseover",function(){
    stars.map((ele)=>{
        console.log(ele)
    })
})