// Qno 3: Print the following pattern
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// // For n = 5
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15


let num=5;
let count=1;
for(let i=1;i<=num;i++){
    let space='';
    for(let j=1;j<=i;j++){
        space=space+`${count} `;
        count++;
    }
    console.log(space);
}

