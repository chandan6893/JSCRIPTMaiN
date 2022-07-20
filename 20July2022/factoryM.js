function createCircle(rad){
    return{
        radius:rad,
        draw : function(){ 
            return "DRAWING CIRCLE"

        },
    };
}
let ciecle1=createCircle(420);
console.log(ciecle1)