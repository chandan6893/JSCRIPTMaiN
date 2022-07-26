// READ ABOUT BUBBLE SORT
function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
        console.log(arr)
    }
    }
    return arr;

}
console.log(bubbleSort([9,6,1,7,-1,3,4,2,5,2]))