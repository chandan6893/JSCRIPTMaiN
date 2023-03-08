const stars = document.querySelectorAll(".fa-solid");
console.log(stars);

stars.forEach((item,index1)=>{
    console.log(index1)
    item.addEventListener("click",()=>{
        stars.forEach((ele,index2)=>{
            console.log(index2)
            index1 >=index2 ? ele.classList.add("yell") : ele.classList.remove("yell")
        })
    })
})



