// read about Async and await

function getAge(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res(10);
        },3000);
    });
}
async function name(){
    let age = await getAge();
    // if we don't put await here(line no-11) before getAge() function output will be undefind 
    // or Promise will be in pending state because  setTimeout fun will go into api 
    console.log(age);
}
name();