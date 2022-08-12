// scenerio-I

// function preperationOfFood(){
//     return new Promise((resolve,reject)=>{
//         let vegetablesPresent=true;
//     if(vegetablesPresent){
//         setTimeout(()=>{
//             console.log("preparing food");
//             console.log("server deliver the food to the table");
//             resolve();
//         },3000);
//     }else{
//         reject("No vegetables");
//     }

//     });
// }

// function eatingFood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("eating food");
//             resolve();

//         },2000)
//     });
// }

// function payment(){
//     return new Promise((resolve,reject)=>{
//         let pursePresent=true;
//         if(pursePresent){
//             console.log("paying the bill");
//             console.log("leaving the hotel");
//             resolve();
//         }else{
//             reject("run from the hotel or washing the dish");
//         }
//     });
// }

// // main code
// function dinnerScenario(){
//     console.log("Entering into the hotel");
//     console.log("calling the server and Order the food");
//     console.log("server informing the chef  to prepare food ");
//     preperationOfFood()
//     .then(()=>{
//         console.log("food prepared successfully and delivered");
//         eatingFood()
//         .then(()=>{
//             console.log("successfully ate the food");
//             payment()
//             .then(()=>console.log("process over"))
//             .catch((error)=>console.log(error));
//         })
//         .catch((error)=>console.log(error.message));
//     })
//     .catch((error)=>console.log("error block==>",error));
// }
// dinnerScenario();

// scenerio-I can be improve a lot....instead of writhinf .then .then .then we can reduce it a lot...
// it has been done in scenerio-II
console.log("**********..........scenerio-II.........*********");

function preperationOfFood(){
        return new Promise((resolve,reject)=>{
            let vegetablesPresent=true;
        if(vegetablesPresent){
            setTimeout(()=>{
                console.log("preparing food");
                console.log("server deliver the food to the table");
                resolve("food prepared successfully and delivered");
            },3000);
        }else{
            reject("No vegetables");
        }
    
        });
    }


 function eatingFood(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("eating food");
            resolve("successfully ate food");

        },2000)
    });
} 


 function payment(){
        return new Promise((resolve,reject)=>{
            let pursePresent=true;
            if(pursePresent){
                console.log("paying the bill");
                console.log("leaving the hotel");
                resolve("process over");
            }else{
                reject("run from the hotel or washing the dish");
            }
        });
    }


function dinnerScenario(){
    console.log("Entering into the hotel");
    console.log("calling the server and Order the food");
    console.log("server informing the chef  to prepare food ");
    // whatever preperationOfFood() is resolving,it will come into success or as a parameter of .then()
    preperationOfFood()
    .then((success)=>{
        console.log("success ",success);
        return eatingFood();
    })
    .then((ateMsg)=>{
        console.log("ate msg ",ateMsg);
        return payment();
    })
    .then((paymentMsg)=>console.log("payment msg ",paymentMsg))
    .catch((error)=>console.log("error : => ",erroe));

}
dinnerScenario();
