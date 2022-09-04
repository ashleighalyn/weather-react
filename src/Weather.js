import React from "react";
import axios from "axios";

export default function Weather () {

    function displayForecast(response) {
        let forecast = response.data.daily;
      
        let forecastElement = document.querySelector("#forecast");
      
        let days = ["Friday", "Saturday", "Sunday", "Monday"];
        let forecastHTML = `<div class="row">`;
        forecast.forEach(function (forecastDay, index) {
          if (index < 4) {
            forecastHTML =
              forecastHTML +
              `
                  <div class="col">
                    <div class="weather-forecast-date">${formatDay(
                      forecastDay.dt
                    )}</div>
                    <img
                src="images/svg/${forecastDay.weather[0].icon}.svg"
                alt=""
                width="42"
              />
                    <br>
                    <span class="weather-forecast-min">${Math.round(
                      forecastDay.temp.min
                    )}° </span> |
                    <span class="weather-forecast-max">${Math.round(
                      forecastDay.temp.max
                    )}°</span>
                  
                </div>`;
          }
        });
        forecastHTML = forecastHTML + `</div>`;
        forecastElement.innerHTML = forecastHTML;
      }
      
      function getForecast(coordinates) {
        let apiKey = "9115b953da5e8234f984747c600e243d";
        let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=imperial
      `;
        axios.get(apiURL).then(displayForecast);
      }
      function displayWeatherCondition(response) {
        let temperatureElement = document.querySelector("#temperature");
      
        fahrenheitTemperature = response.data.main.temp;
      
        temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
        let cityElement = document.querySelector("#city");
        cityElement.innerHTML = response.data.name;
        let humidityElement = document.querySelector("#humidity");
        humidityElement.innerHTML = response.data.main.humidity;
        let descriptionElement = document.querySelector("#description");
        descriptionElement.innerHTML = response.data.weather[0].description;
        let dateElement = document.querySelector("#date");
        dateElement.innerHTML = formatDate(response.data.dt * 1000);
        let windElement = document.querySelector("#wind");
        windElement.innerHTML = Math.round(response.data.wind.speed);
        let iconElement = document.querySelector("#icon");
        iconElement.setAttribute(
          "src",
          `images/svg/${response.data.weather[0].icon}.svg`
        );
      
        getForecast(response.data.coord);
      }
}