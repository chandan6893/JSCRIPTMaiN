const input = document.querySelector("input");
const defaultText = document.getElementById("dafault");
const debounceText = document.getElementById("debounce");

const updateDebounceText=debounce (text=>{
    debounceText.textContent= text;

},1000)

input.addEventListener("input", e =>{
    defaultText.textContent = e.target.value;
    updateDebounceText(e.target.value);
})




function debounce(callback,delay){
    let timeout;
    return (...arg)=>{
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            callback(...arg)
        },delay)
    }
}