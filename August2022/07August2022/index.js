let accordian=document.getElementsByClassName("contentbox");
// console.log(accordian)
for (let i=0;i<accordian.length;i++){
    accordian[i].addEventListener("click",function(){
        this.classList.toggle("active");
    })
}
