// factory method

function createCircle(rad){
    return{
        radius:rad,
        draw:function(){
            return "drawing circle";
        },

    };
}
let circle1=createCircle(1);
console.log(circle1.radius,circle1.draw(),circle1)

let circle2=createCircle(5);
console.log(circle2)