function isValidParenthesis(string){
    let obj={
        "{":"}",
        "[":"]",
        "(":")",

    };
    let stack=[];
    for(let i=0;i<string.length;i++){
        if(string[i]=="[" || string[i]=="(" || string[i]=="{"){
            stack.push(string[i]);
        }else{
            let closingBracket=string[i];
            let openingBracket=stack.pop();
            if(closingBracket!==obj[openingBracket]){
                return false;
            }
        }

    }
    if(stack.length!==0){
        return false;
    }
    return true;

}
console.log(isValidParenthesis("{([])}"))
console.log(isValidParenthesis("{([]}"))
console.log(isValidParenthesis("}{"))
console.log(isValidParenthesis("{[]"))
console.log(isValidParenthesis("{[]}"))