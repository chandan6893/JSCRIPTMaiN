let news1='Srilanka won the worldcup';
console.log(news1.replace('Srilanka','India'));
console.log('******************************************************************************************')
let news2='Srilanka won the worldcup . Srilanka won the worldcup after 2011';
console.log(news2.replaceAll('Srilanka','India'));
console.log('*******************************************************************************************');
let news3='srilanka won the worldcup(small s in srilanka)';
console.log(news3.replace(/Srilanka/i,'India'));
// here we have to put the word which we want to replace in inside the /word/after '/' put 'i',here i means (case sensitive)
//   just like {console.log(news3.replace(/Srilanka/i,'India'));} it will work vice wersa Cpital to small and small to capital
console.log('////////////////////////////////////////////////////////////////////////////////////////////////////');
let news4='srilanka won the worldcup . Srilanka become the first country to win the 10-10 cup';
console.log(news4.replace(/Srilanka/gi,'India'));
// Here 'g' means global .global i.e g will check entire strings not only the first letters
console.log('mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm ')
let news5='srilanka won the worldcup . Srilanka become the first country to win the 10-10 cup';
console.log(news5.replaceAll(/Srilanka/gi,'India'));
console.log('TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT');
let news6='srilanka won the worldcup . Srilanka become the first country to win the 10-10 cup';
console.log(news4.replace(/Srilanka/gi,'SRILANKA'));
