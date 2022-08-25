// let vasnth = {
//     name: "vasanth",
//     age :12,
// };

// let  getData = function(place,char="joyfull"){
//    console.log(`${this.name} is ${this.age} years old . He is from ${place} and he is a ${char} guy`);
// }


// let sameer = {
//     name: "sameer",
//     age :21,
// };
// // getData.call(sameer,"Haridwar","notorious");
// getData.apply(sameer,["Haridwar","notorious"]);
// getData.apply(vasnth,"kanpur","Good");

// by default the first parameter os an object e.g sameer and vasanth

// ===================================================================

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
// getData.call(sameer,"Haridwar","notorious");
// getData.apply(sameer,["Haridwar","notorious"]);
// getData.apply(vasnth,"kanpur","Good");
// by default the first parameter os an object e.g sameer and vasanth

let persons = [ 
    // here, persons is an Array of objects
    {
        obj:{
            name:"samreer",
            age:21,
        },
        params:["Haridwar","notorious"]
    },
    {
        obj:{
             name:"vasanth",
             age:12,
        },
        params:["chennai","cool"]
    }
];
for(let data of persons){
    // console.log(data);
    // console.log(data.obj);
    // console.log(data.params);
    // console.log(data.obj,data.params);
    getData.apply(data.obj,data.params)
}

// note:- call() and apply() is used to borrow function in javascript