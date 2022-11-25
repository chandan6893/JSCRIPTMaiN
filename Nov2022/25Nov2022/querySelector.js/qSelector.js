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


const newDiv = document.createElement("div");
newDiv.style.width="40rem";
newDiv.style.height="20rem";
newDiv.style.backgroundColor="tomato";
newDiv.style.borderRadius="1rem";
newDiv.innerText="Hello NewDiv";
newDiv.style.textAlign="center";
newDiv.style.color="darkblue";
newDiv.style.fontSize="3rem";
document.body.appendChild(newDiv);
