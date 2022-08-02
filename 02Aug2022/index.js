// let newDiv=document.createElement("div");
// newDiv.style.width="70rem";
// newDiv.style.height="2rem";
// newDiv.style.backgroundColor="purple";

// let newDiv1=document.createElement("div");
// newDiv1.style.width="70rem";
// newDiv1.style.height="2rem";
// newDiv1.style.backgroundColor="red";
// newDiv1.style.margin="1rem"
// document.body.append(newDiv,newDiv1)

// newDiv.remove()<=======.remove() will remove newDiv
let colors=["red","purple","green","violet","tomato"];
let newDiv=[];
for(let i=0;i<5;i++){
newDiv[i]=document.createElement("div");
newDiv[i].style.width="70rem";
newDiv[i].style.height="2rem";
newDiv[i].style.backgroundColor=colors[i];
newDiv[i].style.marginTop="1rem";
// document.body.append(newDiv[i])
if(colors[i]!=="green"){
    document.body.append(newDiv[i]);
}
}