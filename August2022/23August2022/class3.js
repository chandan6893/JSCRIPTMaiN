class GrandParent{
    house(){
        console.log("house");
    }
}

class Parent extends GrandParent{
    car(){
        console.log("Maruti");
    }
}
class Child extends Parent{
    bike(){
        console.log("yamaha");
    }
}