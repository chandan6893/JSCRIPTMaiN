// getter 
const person={
    firstName:"Vasanth",
    lastName:"Kumar",
    get fullName(){
        return `${this.firstName} ${this.lastName}`
        // in place of this. , we can also use person.
    },
    set fullName(newName){
        let parts=newName.split(" ");
        // console.log(parts);
        this.firstName=parts[0];
        this.lastName=parts[1];
        // here in place of this. , we can also use person. and (this) represents the Object that is executing the 
        // current function.
    },
};
person.fullName="Sachin Tendulkar";

console.log(person.fullName)