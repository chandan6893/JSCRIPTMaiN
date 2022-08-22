let nums=[1,2,3,4];

// REDUCE(x,y)and X default value is zero and X is previous value and Y is current value
    let NewArray=nums.reduce(function(sum,value){ 
        sum=sum+value;
        return sum

    })
    console.log(NewArray)
    



