// fetch("https://api.openweathermap.org/data/2.5/weather?q=Patna&APPID=79330c2ed70086cc49420a6d8d9eb0f1")
//     .then(response=>response.json())
//     .then(dat=> console.log(dat))

const form = document.querySelector(".form");
const inputSearch= document.querySelector("#inputSearch");
const weatherReport = document.querySelector(".weatherReport");

form.addEventListener("keyup", function (e) {
  e.preventDefault;
  getWeather(inputSearch.value);
});

function getWeather(city){
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=79330c2ed70086cc49420a6d8d9eb0f1&units=metric`
    )
      .then((response) => response.json())
      .then((dat) => console.log(dat));
}

