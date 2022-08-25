let vasnth = {
    name: "vasanth",
    age :12,
};

let  getData = function(place,char="joyfull"){
   console.log(`${this.name} is ${this.age} years old . He is from ${place} and he is a ${char} guy`);
}


let sameer = {
    name: "sameer",
    age :21,
};
// getData.call(sameer,"Kanpur","notorious");
// getData.bind(sameer,"Kanpur","notorious");
//  getData.bind(sameer,"Kanpur","notorious");
// getData.bind(sameer,"Kanpur","notorious")();
let sameerData = getData.bind(sameer,"Kanpur","notorious")
// console.log(sameerData());
sameerData();
