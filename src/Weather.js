import axios from "axios";
import "./Date";

export default function Weather () {

    function displayForecast(response) {
        let forecast = response.data.daily;
      
        let forecastElement = document.querySelector("#forecast");
      
        let forecastHTML = `<div class="row">`;
        forecast.forEach(function (forecastDay, index) {
          if (index < 4) {
            forecastHTML =
              forecastHTML +
              `
                  <div class="col">
                    <div class="weather-forecast-date">${Date(
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
      
      
        getForecast();
      }
    
      