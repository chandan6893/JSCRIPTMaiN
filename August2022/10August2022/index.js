function getCredential(){
    let username="vasanth";
    let password="1234";

    return function() {
        let credentials={
            username:username,
            password:password,
        };
        return credentials;
    }
}
let vasanthCredentials = getCredential();
console.log(vasanthCredentials());
console.log("****************BUT**********BUT******BUT****");
let newusername="vasanth";
    let newpassword="1234";
    function newgetCredential(){
        return{
            newusername:newusername,
            newpassword:newpassword,

        };
    }
    console.log(newgetCredential());
    newusername="Ajay";
    console.log(newgetCredential());

    console.log("XXXXXXXXXXXXXXXXXXXbutTttttttttttttttttXXXXXXXXXXXXXXXXXXXX");
   
    function newgetCredentialA(){
        let newusernameA="vasanth";
        let newpasswordA="1234";
        return{
            newusernameA:newusernameA,
            newpasswordA:newpasswordA,

        };
    }
    console.log(newgetCredentialA());
    newusernameA="Ajay";
    console.log(newgetCredentialA());