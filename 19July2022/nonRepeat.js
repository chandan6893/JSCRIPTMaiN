let arr=[1,2,3,4,5,2,3];
for(let i=0;i<arr.length;i++){
    if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i])){
        console.log(arr[i],arr.indexOf(arr[i]),arr.lastIndexOf(arr[i]))
    }
    // console.log(arr.lastIndexOf(arr[i]))
}