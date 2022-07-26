// SELECTION SORT
function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let min=arr[i];
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<min){
                min=arr[j];
                let temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp
                
            }
            
        }
        console.log(arr)
        }
    return arr;
}
console.log(selectionSort([9,6,1,7,-1,3,4,2,5,2]));
    

    

