// 16th July Saturday lecture
let matrix=[
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16],];
    

    // 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
    let top=0, bottom=3, right=0, left=3, direction=0;
    while(left<=right && top<=bottom){
        if(direction==0){
            for(let i=left;i<=right;i++){
                console.log(matrix[top][i]);
            }
            top+=1;
            direction=1;
        } 
        if(direction==1){
            for(let i=top;i<=bottom;i++){
                console.log(matrix[i][right]);
            }
            right-=1;
            direction=2;
        }
    if(direction==2){
        for(let i=right;i>=left;i--){
            console.log(matrix[bottom][i]);
        }
        bottom-=1;
        direction=3;
    }
    if(direction==3){
        for(let i=bottom;i>=top;i--){
            console.log(matrix[i][left]);
        }
        left+=1;
        direction=0;
    }

    }