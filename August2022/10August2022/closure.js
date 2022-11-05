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

console.log("************BUT**********************")

function newgetCredentialB(){
    let countB=1;
    // here inside counB will never incresses from1
    let newusernameB="vasanth";
    let newpasswordB="1234";
   if(countB % 3 ===0){
    return{
        newusernameB:newusernameB,
        newpasswordB:newpasswordB,

    };
    
   }
   countB=countB+1;
}
console.log(newgetCredentialB());

console.log(newgetCredentialB());
console.log(newgetCredentialB());
console.log(newgetCredentialB());

console.log("XXXXXXXXXXXXXXXXXClosureXXXXXXXXXXXXXX");
function getCredential(){
    let username="vasanth";
    let password="1234";
    let count=1;

    return function() {
        let credentials={
            username:username,
            password:password,
        };
        if(count%3===0) {
            count++;
            return credentials;
        }
            count++;
        
    }
}
let vasanthCredentials = getCredential();
console.log(vasanthCredentials());
console.log(vasanthCredentials());
console.log(vasanthCredentials());
console.log(vasanthCredentials());
console.log(vasanthCredentials());
console.log(vasanthCredentials());