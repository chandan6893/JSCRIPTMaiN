// console.log("createElement");
const childHeadingElement = document.createElement("h1");
// console.log(childHeadingElement);
childHeadingElement.innerHTML="trying to understand how createElement and innerHtml works";
// console.log(childHeadingElement);

const parentTag = document.querySelector("#parent");
parentTag.appendChild(childHeadingElement);

const secondChildHeadinhElement = document.createElement("h3");
secondChildHeadinhElement.innerHTML= "how insertAdjacentElement() method works";

// childHeadingElement.insertAdjacentElement("beforebegin",secondChildHeadinhElement);

// note:- in inspect see the Elements
childHeadingElement.insertAdjacentElement("afterend",secondChildHeadinhElement);