const parentDiv = document.querySelector("div");
parentDiv.innerText="hello querySelector";
parentDiv.style.fontSize="8rem";
parentDiv.style.color="darkgreen";
// console.log(parentDiv);

// const heading1 = document.createElement("h1");
// console.log(heading1);


let list = document.querySelectorAll("ul li");
console.log(list);

document.querySelector("a").classList.add("anchor");
// document.querySelector("a").classList.remove("anchor");
document.querySelector('a').classList.toggle("anchor");



// document.querySelector("div.container").innerText="HELLO";
// document.querySelector("div para").innerText="para";

function toggle(){
    document.querySelector("a").classList.toggle("anchor");
}
