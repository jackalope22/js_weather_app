"use strict";

searchButton.addEventListener("click", searchWeather);

function searchWeather() {
    loadingText.style.display = "block";
    weatherBox.style.display = "block";
    let cityName = searchcity.value;
    if (cityName.trim().length == 0) {
        return alert("Please enter a city name.");
    }
    let http = new XMLHttpRequest();
    let apikey = '4a290ae9a88e8a70c4eed27a9fe2f376'
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apikey;
    let method = 'GET';

    http.open(method, url);
    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            var data = JSON.parse(http.responseText);
            var weatherData = new Weather(cityName.toUpperCase(), data.weather[0].description.toUpperCase(), data.main.humidity)
            weatherData.temperature = data.main.temp;
            weatherData.feelslike = data.main.feels_like;
            updateWeather(weatherData)
            console.log(weatherData)
        } else if (http.readyState === XMLHttpRequest.DONE) {
            alert('somthing went wrong!')
        }
    };
    http.send();
}

function updateWeather(weatherData) {
    weatherCity.textContent = weatherData.cityName;
    weatherDescription.textContent = weatherData.description;
    weatherTemperature.textContent = weatherData.temperature;
    weatherFeelsliketemp.textContent = weatherData.feelslike;
    weatherHumidityperc.textContent = weatherData.humidity + " %";

    loadingText.style.display = "none"
    weatherBox.style.display = "inline-block";

}