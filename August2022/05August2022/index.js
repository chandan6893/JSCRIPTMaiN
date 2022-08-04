let X=document.body;
console.log(X);
const Y=document.createElement("div");
Y.innerText="HELLOW JS";
X.append(Y)
console.log(Y);




const x=document.getElementById("ulId");
// const creatingNewList=document.createElement("li");
creatingNewList=["Banana","Mango","Apple","Coconut"];
// x.append(creatingNewList);
for(let fruit of creatingNewList ){
    let newListItem=document.createElement("li");
    newListItem.innerText=fruit;
    x.append(newListItem)
}