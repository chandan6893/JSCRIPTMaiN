function getUser(id){
    setTimeout(()=>{
        console.log("reading data from database....");
        return{id:id, githubUserName:"vasanth"};

    },2000);

}
console.log("before");
const user=getUser(1);
console.log(user);
console.log("after");