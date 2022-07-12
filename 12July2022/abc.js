function changeToZero(arr, start, end){
    arr.splice(start,1,0)

    // for(let i=0;i<arr.length;i++){
    //   if(i>=start && i<end){
    //     arr[i]=0;
    //   }
     
    // }
    return arr;
  }
  console.log(changeToZero([2, 5, 10,7,5] ,2, 3))
  exports.changeToZero = changeToZero