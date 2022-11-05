class GrandParent{
    house(){
        console.log("A house");
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

    car(){
        console.log("audi")
    }
}
let kiran = new GrandParent();
kiran.house();
let vasanth = new Parent();
vasanth.car();
let aaditya = new Child();
aaditya.car();




