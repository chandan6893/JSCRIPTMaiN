const grandParent=document.querySelector(".grandparent");
const parent=document.querySelector(".parent");
const child=document.querySelector(".child");
function printGrandParent(){
    console.log("grand parent bubbling");
    printOnHover();
}

function printOnHover(){
    console.log("HOVERING");
}
grandParent.addEventListener("click",printGrandParent);
// grandParent.addEventListener("mouseover",printOnHover);<========  X

setTimeout(()=>{
    console.log("removing Grand Parent");
    grandParent.removeEventListener("click",printGrandParent);
    

},2000)
console.log(grandParent);
console.log(parent);
console.log(child);
grandParent.addEventListener("click",()=>{
    console.log("GRAND PARENT bubbling");
    
});

parent.addEventListener("click",()=>{
    console.log("PARENT bubbling");
    
},{once:true});
// here (once:true) means parent will bubble only once ,second time it will not bubble on clicking again and again on screen on console page

child.addEventListener("click",()=>{
    console.log("CHILD bubbling");
    
});


const newDiv=document.createElement("div");
newDiv.style.width="10rem";
newDiv.style.height="10rem";
newDiv.style.backgroundColor="red";
document.body.append(newDiv);

const para=document.createElement("p");
para.innerText="Kumar";
newDiv.append(para);
document.body.append(newDiv);