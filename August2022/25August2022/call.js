let vasnth = {
    name: "vasanth",
    age :12,
};

let  getData = function(){
   console.log(`${this.name} is ${this.age} years old`);
}

let sameer = {
    name: "sameer",
    age :21,
};
getData.call(sameer);
getData.call(vasnth);

// ******************************************************************

// let vasnth = {
//     name: "vasanth",
//     age :12,
// };

// let  getData = function(place,char="joyfull"){
//    console.log(`${this.name} is ${this.age} years old . He is from ${place} and he is a ${char} guy`);
// }
// // Note:- Here we are borrowing function for objects vasanth and sameer by using .call() and .apply()

// let sameer = {
//     name: "sameer",
//     age :21,
// };
// getData.call(sameer,"Haridwar","notorious");
// getData.call(vasnth);