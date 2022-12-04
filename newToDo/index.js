const firstInput = document.querySelector(".firstInput");
const addBtn =document.querySelector(".addBtn");
const content = document.querySelector(".content");

const newDiv= document.createElement("div");

addBtn.addEventListener("click",()=>{
    // console.log(firstInput.value);

    const secondInput = document.createElement("input");
    secondInput.type="text";
    secondInput.value = firstInput.value;
    secondInput.setAttribute("readonly","readonly");
    newDiv.append(secondInput);

    const editSave = document.createElement("button");
    editSave.classList.add("editSave");
    editSave.innerText="Edit";

    newDiv.append(editSave);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    deleteBtn.innerText = "Delete";

    newDiv.append(deleteBtn);
    content.append(newDiv);

    editSave.addEventListener("click",function(){
        if(editSave.innerText == "Edit"){
            editSave.innerText ="Save";
            secondInput.removeAttribute("readonly")
        }else{
            editSave.innerText = "Edit";
            secondInput.setAttribute("readonly","readonly")
        }
    })


    // deleteBtn.addEventListener("click",(e)=>{
    //     content.removeChild(newDiv)
    // })

    content.addEventListener("click", (e) => {
      if (e.target.innerText === "Delete") {
        e.target.parentElement.remove();
        // console.log(e.target.parentElement.remove());
      }
    });











})

// const input=document.querySelector("#inputField");
// const button=document.querySelector("#btn")

// button.addEventListener("click",(e)=>{
//     // input=input+e.target.value;
//     // it is wrong
//     // console.log(input.value)
//     console.log(input)
//      console.log(input.value);
// })


