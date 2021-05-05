import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
// import WeatherForecastDay from "./WeatherForecastDay";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  function load() {
    let lat = props.lat;
    let lon = props.lon;
    let units = "imperial";
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(forecastUrl).then(displayForecast);
  }

  if (ready === true) {
    return (
      <div className="Forecast">
        <h2 className="mb-3">6-Day Forecast</h2>
        <div className="row mb-5">
          <div className="col-sm">
            <span className="mb-5">
              <strong>{forecast[0].dt}</strong>
            </span>
            <br />
            <WeatherIcon
              code={forecast[0].weather[0].icon}
              size={52}
              color="#d18c24"
            />
            <br />
            <span className="high-temp">
              {Math.round(forecast[0].temp.max)}°
            </span>{" "}
            /{" "}
            <span className="low-temp">
              {Math.round(forecast[0].temp.min)}°
            </span>
          </div>
          {/* <WeatherForecastDay data={forecast} /> */}
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
