// let n=6;
// for(let i=1;i<=n;i++){
//     space=' ';
//     for(let j=1;j<=n-i;j++){
//         space=space+' ';
//     }
//     for(let k=1;k<=(2*i)-1;k++){
//         space=space+'*'
//     }
//     console.log(space)
// }

// for(let i=n-1;i>=1;i--){
//     space=' ';
//     for(let j=1;j<=n-i;j++){
//         space=space+' ';
//     }
//     for(let k=1;k<=(2*i)-1;k++){
//         space=space+'*'
//     }
//     console.log(space)
// }

// RECURSION

function add(n){
    while(n<=0){
       console.log('Ended')
       return;
    }
    console.log(n)
       add(n-1);
       
}
add(10);

