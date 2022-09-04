import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="weather-forecast" id="forecast">
      <div class="row">
        <div class="col">
          <div class="weather-forecast-date">Monday</div>
          <img src="images/svg/10d.svg" alt="" width="42" />
          <br />
          <span class="weather-forecast-min">80° </span> |
          <span class="weather-forecast-max">95°</span>
        </div>
        <div class="col">
          <div class="weather-forecast-date">Tuesday</div>
          <img src="images/svg/03d.svg" alt="" width="42" />
          <br />
          <span class="weather-forecast-min">83° </span> |
          <span class="weather-forecast-max">98°</span>
        </div>
        <div class="col">
          <div class="weather-forecast-date">Wednesday</div>
          <img src="images/svg/01d.svg" alt="" width="42" />
          <br />
          <span class="weather-forecast-min">88° </span> |
          <span class="weather-forecast-max">101°</span>
        </div>
        <div class="col">
          <div class="weather-forecast-date">Thursday</div>
          <img src="images/svg/01d.svg" alt="" width="42" />
          <br />
          <span class="weather-forecast-min">89° </span> |
          <span class="weather-forecast-max">100°</span>
        </div>
      </div>
    </div>
  );
}
