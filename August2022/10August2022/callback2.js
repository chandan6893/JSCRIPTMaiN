// scenerio-1
// console.log("Entering userId as 1");
// console.log("Clicking submit button");
// setTimeout(()=>{
//    console.log("reading account data from the database");

// },2000);
// console.log("returning the userdata ",{id:1,userName:"vasanth"});
// console.log("display the content in github page");
console.log("*******Scenerio2**********");

// function readDataInDB(display){
//     setTimeout(()=>{
//            console.log("reading account data from the database");
//            let user={id:1,userName:"vasanth"};
//            display(user)
//         },2000);
//     }
//     function displayDataOnScreen(){
//         console.log("returning the userdata ");
//         console.log("display the content in github page");

//     }



// function githubLogin(){
// console.log("Entering userId as 1");
// console.log("Clicking submit button");
// readDataInDB(displayDataOnScreen);
// }
// githubLogin();

console.log("XXXXXXXXXX.....But......XXXXXX...scenerio3...XXXXXXX");
function readDataInDB(id,display){
    setTimeout(()=>{
           console.log("reading account data from the database");
           let user={ID:id,userName:"vasanth"};
           display(user)
        },2000);
    }
    function displayDataOnScreen(userData){
        console.log("returning the userdata ");
        console.log("display the content in github page",userData);

    }



function githubLogin(){
console.log("Entering userId as 1");
console.log("Clicking submit button");
readDataInDB(1,displayDataOnScreen);
}
githubLogin();
