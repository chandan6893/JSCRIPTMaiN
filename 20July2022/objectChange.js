let person={
    name:'Rohan',
    age:10,
};
function change(obj){
    console.log("before",person,obj);
    obj["age"]=20;
    console.log("after",person,obj);
}
change(person);
