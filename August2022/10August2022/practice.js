let count=1;
function newgetCredentialA(){
    let newusernameA="vasanth";
    let newpasswordA="1234";
   if(count % 3 ===0){
    return{
        newusernameA:newusernameA,
        newpasswordA:newpasswordA,

    };
    
   }
   count=count+1;
}
console.log(newgetCredentialA());

console.log(newgetCredentialA());
console.log(newgetCredentialA());
console.log(newgetCredentialA());























