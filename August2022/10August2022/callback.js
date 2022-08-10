// hotel->entering,order food->food is preparing->delivered to the table->eat
// scenerio-1
// console.log("Entering into the hotel");
// console.log("Ordered 2 rotis with butter paneer");
// console.log("food is getting prepared");
// setTimeout(()=>{
//     console.log("food is prepared");
// },10000);
// console.log("deliver to the table");
// setTimeout(()=>{
//     console.log("eating the rotis");
// },5000);
// console.log("paying the bill");
console.log("******HOW CAN WE CORRECT THE ORDER IN scenerio-1********");

// scenerio-2

// function prepareFood(){
//     setTimeout(()=>{
//         console.log("food is prepared");
//         console.log("deliver to the table");
//     },10000);
// }

// function eatRotis(){
//     setTimeout(()=>{
//         console.log("eating the rotis");
//         console.log("paying the bill");
//     },5000);

// }


// function hotelvisit(){
// console.log("Entering into the hotel");
// console.log("Ordered 2 rotis with butter paneer");
// console.log("food is getting prepared");
// prepareFood();
// eatRotis();
// }
// hotelvisit();

console.log("XXXXXXXXXXXXhow can we correct the oreder in......... scenerio-2..for this chech scenerio3..XXXXXXX");

// scenerio-3
function prepareFood(callback){
    setTimeout(()=>{
        console.log("food is prepared");
        console.log("deliver to the table");
        callback()
    },10000);
}

let callbackFn=function eatRotis(){
    setTimeout(()=>{
        console.log("eating the rotis");
        console.log("paying the bill");
    },5000);

}


function hotelvisit(){
console.log("Entering into the hotel");
console.log("Ordered 2 rotis with butter paneer");
console.log("food is getting prepared");
prepareFood(callbackFn);

}
hotelvisit();
