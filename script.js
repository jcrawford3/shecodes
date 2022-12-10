function formatDate() {
  let h3 = document.querySelector("h3");
  let now = new Date();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[now.getDay()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  h3.innerHTML = `Today is ${day} ${hours}:${minutes}`;
}

formatDate();

function showTemperature(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function displayForecast() {
  let forecastElement = document.querySelector("#Forecast");

  forecastElement.innerHTML = "Forecast";
}

function searchCity(city) {
  let apiKey = "0821ab50d69ba23a98b1bd9d0cf0c1e4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-text-input").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "0821ab50d69ba23a98b1bd9d0cf0c1e4";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let inputCity = document.querySelector("#input-city");
inputCity.addEventListener("submit", showSubmit);

let currentLocationButton = document.querySelector("#current-location-btn");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("New York");
