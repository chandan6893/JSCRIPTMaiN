const inputBox = document.querySelector(".inputBox");
const button   = document.querySelector(".button")

button.addEventListener("click",function(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputBox.value}`)    
    .then(result => result.json())
    .then(data =>{
        const food = data["meals"]
        food.map((meal)=>{
            console.log(meal.strMeal);
        })
    }) 
});