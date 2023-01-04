const button = document.querySelector("#btn");

function debounce(fun,delay){
    let timeoutId;
    return function(){
        clearTimeout(timeoutId);
        let args=arguments;
        // console.log(arguments)
       timeoutId= setTimeout(()=>{
            fun.apply(this,args);
        },delay)
    }
}

button.addEventListener("click",debounce(function fun(){
    console.log("debounce");
},1000))