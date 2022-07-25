// rest OPERAROR IN A FUNCTION
function shopingCart(discount,coupan,...prices){
    // ARGUMENT with rest OPERATOR(...) should be always placed at the end of the all arguments.
    console.log(discount,coupan,prices);

        let total=0;
    for(let i=0;i<prices.length;i++){
         
        total =total+prices[i];

    }
    console.log(total);
}
shopingCart(5,90,150,300,100)
