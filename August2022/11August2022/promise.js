// Asynchronous programming
//promise=>(I)pending() (II) success=resolve() (III) failed=reject()


// let momsPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("collected all golds");
//     // reject();
//     },5000);
// });
// momsPromise.then((result)=>console.log("climax===>",result));



// whatever is written in the setTmeout resolve("collected all golds"), will
//  come inside the .then((result)=>console.log(result))and here result="collected all golds";

console.log("*******reject********");

let momsPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("collected all golds");
    reject("Rocky killed by Adheera");
    },5000);
});
momsPromise
           .then((result)=>console.log("climax===>",result))
        //    .catch((whatHappend)=>console.log("climax==>",whatHappend));
          .catch((error)=>console.log(error));

        //   do not put semicolon at the end of .then(()) ,put it at the end of .catch(());