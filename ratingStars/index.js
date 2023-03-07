const stars = document.querySelectorAll(".fa-solid");
// console.log(stars);

stars.forEach((item,index1)=>{
    // console.log(item)
    item.addEventListener("click",()=>{
        stars.forEach((ele,index2)=>{
            // console.log(ele)
            index1>=index2 ? ele.classList.add("yell") : ele.classList.remove("yell")
        })
    })
})

