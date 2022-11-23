// console.log("Hello DOM")

const parentDivElement = document.getElementsByClassName("parent");


// const childH1element = document.getElementsByClassName("heading");
// console.log(childH1element);

const heading =document.querySelector(".heading");
// console.log(heading);
// heading.innerHTML = "inner HTML ";
heading.style.color  = "red";
heading.style.fontSize = "5rem";
heading.classList.add("title");
heading.classList.remove("heading");


