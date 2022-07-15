// let news='Dhoni will play today';
// for(let i=0;i<news.length;i++){
//     if(news.includes('Dhoni')){
//         console.log(true);
//         break;
//     }
// }

// let news='Dhoni will play today';
// let target='Dhoni';
// let arr=news.split(' ')
// for(let i=0;i<arr.length;i++){
//     if(arr[i]===target){
//         console.log(true);
//         // break;
//     }
// }
// console.log(false);

let news='Dhoni will play today';
let target='Dhoni';
let arr=news.split(' ')
let isPresent=false;
for(let i=0;i<arr.length;i++){
    if(arr[i]===target){
        isPresent=true;
        
    }
}
console.log(isPresent);