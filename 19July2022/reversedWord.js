let news="Vasanth is a good teacher";
let newArray = news.split(" ");
// console.log(news.split(" ").reverse())
for(let i=0;i<newArray.length;i++){
    newArray[i]=newArray[i].split("").reverse().join("")
    // console.log(newArray[i])
}
console.log(newArray.join(" "))