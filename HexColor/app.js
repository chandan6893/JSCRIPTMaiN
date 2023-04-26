btn= document.querySelector(".btn");
hexColor=document.querySelector(".hexColor");

function getColor(){
    let color= Math.random().toString(16).slice(2,8);
    let colorCode=`#${color}`
    console.log("reandom color",color,colorCode);
    document.body.style.backgroundColor=colorCode;
    document.hexColor.innerText=colorCode;
}

btn.addEventListener("click",getColor);