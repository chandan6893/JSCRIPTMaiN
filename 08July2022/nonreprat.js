let lefthand=[1,3,4,3,2,5,7,1,];

let righthand=[];

for(let i=0;i<lefthand.length;i++){
    if(righthand.includes(lefthand[i])){
        console.log(lefthand[i])
        // break

    }
    else{
        righthand.push(lefthand[i]);
    }
}