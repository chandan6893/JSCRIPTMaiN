// CONSTRUCTOR METHOD

function Circle(rad){
this.radius=rad;
this.draw=function(){
    return "drawing circle";
};
return this;
}
let circle1=new Circle(1);
console.log(circle1,circle1.draw());

let circle2=new Circle(120);
console.log(circle2,circle2.draw());