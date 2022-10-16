let weatherListLocation = []
let weatherListCurrent = []
let futureWeatherData = []
let search = document.getElementById("search")
let city = `Cairo`



search.addEventListener("keyup", function(){
  console.log(search.value);
  city = search.value
  getWeatherData()
  getNextDayWeatherData()
})
getWeatherData()
async function getWeatherData(){

    let weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=b41eb642102842f8b80162547221410&q=${city}`)
    let weatherData = await weather.json()
    weatherListLocation = weatherData.location
    weatherListCurrent = weatherData.current
    console.log(weatherListLocation);
    console.log(weatherListCurrent);
    console.log(weatherListLocation.name);
    displayToDayData()
}
getNextDayWeatherData()
async function getNextDayWeatherData(){
   let futureWeather = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=b41eb642102842f8b80162547221410&q=${city}&days=3`)
   let futureWeatherResponed = await futureWeather.json()
   futureWeatherData = futureWeatherResponed.forecast
   console.log(futureWeatherData);
   displayNextDayData()
   lastDayData()
}


function displayToDayData(){
    let datas = `<div class="day w-100 ">
    <p class="py-1 px-1 ms-3">friday</p>
  </div>
  <div class="px-1">
  <div class="location ms-3"> <p>${weatherListLocation.name}</p> 
  </div>
  <div class="degree row ms-3">
    <div class=" col-md-6"><h2>${weatherListCurrent.temp_c}<sup>o</sup>C</h2></div>
    <div class=" col-md-6 d-flex justify-content-center align-items-center" ><img src="https:${weatherListCurrent.condition.icon}" alt="sun"></div>
  </div>
  <div class=" custom ms-3"><p>${weatherListCurrent.condition.text}</p></div>
  </div>
  <div class="icons d-flex ">
    <span class=" row g-0 m-3">
      <img src="img/icon-umberella.png" class=" col-md-6" alt="umberella">
      <p class="ps-1 col-md-6">20%</p>
    </span>
    <span class=" row g-0 m-3">
      <img src="img/icon-wind.png" class=" col-md-6" alt="umberella">
      <p class="ps-1 col-md-6">${weatherListCurrent.wind_degree}km/h</p>
    </span>
    <span class=" row g-0 m-3">
      <img src="img/icon-compass.png" class=" col-md-6" alt="umberella">
      <p class="ps-1 col-md-6">${weatherListCurrent.wind_dir}</p>
    </span>
  </div>`
    document.getElementById("weather").innerHTML = datas;
}

function displayNextDayData(){
    let datas = ` <div class="day w-100 text-center">
    <p class="py-1 px-1 ms-3">Saterday</p>
  </div>
  <div class="px-1 d-flex justify-content-center align-items-center">
  <img src="https:${futureWeatherData.forecastday[1].day.condition.icon}" alt="">
  </div>
  <div class="weather text-center">
    <h2 class="">${futureWeatherData.forecastday[1].day.avgtemp_c}<sup>o</sup>C</h2>
    <p>${futureWeatherData.forecastday[1].day.mintemp_c}<sup>o</sup></p>
    <div class=" custom ms-3"><p>${futureWeatherData.forecastday[1].day.condition.text}</p></div>
  </div>`

  document.getElementById("nextDay").innerHTML = datas;
}


function lastDayData(){
let datas = `<div class="day w-100 text-center">
<p class="py-1 px-1 ms-3">sunday</p>
</div>
<div class="px-1 d-flex justify-content-center align-items-center">
<img src="https:${futureWeatherData.forecastday[2].day.condition.icon}" alt="">
</div>
<div class="weather text-center">
<h2 class="">${futureWeatherData.forecastday[2].day.avgtemp_c}<sup>o</sup>C</h2>
<p>${futureWeatherData.forecastday[2].day.mintemp_c}<sup>o</sup></p>
<div class=" custom ms-3"><p>${futureWeatherData.forecastday[2].day.condition.text}</p></div>
</div>`
document.getElementById("lastDay").innerHTML=datas;
}

