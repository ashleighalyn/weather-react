import React from "react";
import "./Search.css";
import axios from "axios";

export default function Search(city) {
    let apiKey = "9115b953da5e8234f984747c600e243d";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayWeatherCondition);

  return (
    <div className="enter-city">
      <form>
        <input
          type="text"
          className="city-entered"
          placeholder="Enter a city..."
          autofocus="on"
          autocomplete="off"
        />
        <input className="submit-button" type="submit" value="Search" />
      </form>
    </div>
  );
}

function displayWeatherCondition(response) {
    let temperatureElement = document.querySelector("#temperature");
  
    let fahrenheitTemperature = response.data.main.temp;
  
    temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.main.humidity;
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;
    let dateElement = document.querySelector("#date");
    dateElement.innerHTML = "";
    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);
    let iconElement = document.querySelector("#icon");
    iconElement.setAttribute(
      "src",
      `images/svg/${response.data.weather[0].icon}.svg`);
  }
