import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
// import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);

  function displayForecast(response) {
    console.log(response.data);
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
    console.log(forecast);
    return (
      <div className="Forecast">
        <div className="row mb-3">
          <div className="col-sm mb-3">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay data={forecast[4]} />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay data={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    load();

    return null;
  }
}
