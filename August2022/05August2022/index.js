// let X=document.body;
// console.log(X);
// const Y=document.createElement("div");
// Y.innerText="HELLOW JS";
// X.append(Y)
// // console.log(Y);




const Q=document.getElementById("ulId");
// const creatingNewList=document.createElement("li");
newItems=["Banana","Mango","Apple","Coconut"];
// x.append(creatingNewList);
for(let fruit of newItems){
    let newListItem=document.createElement("li");
    newListItem.innerText=fruit;
    Q.append(newListItem)
}