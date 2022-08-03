function validateForm(){var a=document.forms["myForm"]["id1"].value;
var b=document.forms["myForm"]["id2"].value;
var c=document.forms["myForm"]["id3"].value;

if(a == "" || b == "" || c == ""){
  document.querySelector(".divA").innerText = "Empty Input Fields";
  document.querySelector(".divA").style.color = "red";
  document.querySelector(".divA").style.fontSize = "20px";
  document.querySelector(".divA").style.textAlign = "center";
  document.querySelector(".divA").style.height = "20px";
  document.querySelector(".divA").style.fontWeight = "bold";
  setTimeout(()=>(document.querySelector(".divA").innerText = " "),2000);
}
}
const form = document.querySelector("form")
form.addEventListener("submit",validateForm)



const body= document.querySelector("body");
function onAddDwtaills(event){
    event.preventDefault();
    const name = docuent.querySelector("#id1").value;
    const emailId = document.querySelector("id2").value;
    const phoneNo = document.querySelector("id3").value;
    if(name != "" || emailId!= "" || phoneNo != ""){
        body.innerText += `<tr>
         <td> ${name}</td>
         <td> ${emailId}</td>
         <td> ${phoneNo}</td> `
    }
}