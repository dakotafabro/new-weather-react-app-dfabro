import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function Forecast(props) {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  // let [celsiusClicked, setCelsiusClicked] = useState(props.celsiusClicked);
  // let [fahrenheitClicked, setFahrenheitClicked] = useState(
  //   props.fahrenheitClicked
  // );

  // useEffect(() => {
  //   setCelsiusClicked(true);
  // }, [props.celsiusClicked]);

  // useEffect(() => {
  //   setFahrenheitClicked(true);
  // }, [props.fahrenheitClicked]);

  function displayForecast(response) {
    setForecast(response.data.daily);
    setReady(true);
  }

  // function loadCelsius() {
  //   let lat = props.lat;
  //   let lon = props.lon;
  //   let units = "metric";
  //   let apiKey = "714ee8260b39daee49f18fcc2cebda82";
  //   let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  //   axios.get(forecastUrl).then(displayForecast);
  // }

  function loadFahrenheit() {
    let lat = props.lat;
    let lon = props.lon;
    let units = "imperial";
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
    axios.get(forecastUrl).then(displayForecast);
  }

  if (
    ready === true
    // fahrenheitClicked === true &&
    // celsiusClicked === false
  ) {
    return (
      <div className="Forecast">
        <div className="row mb-3">
          <div className="col-sm mb-3">
            <WeatherForecastDay
              data={forecast[0]}
              // fahrenheitClicked={fahrenheitClicked}
            />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay
              data={forecast[1]}
              // fahrenheitClicked={fahrenheitClicked}
            />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay
              data={forecast[2]}
              // fahrenheitClicked={fahrenheitClicked}
            />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay
              data={forecast[3]}
              // fahrenheitClicked={fahrenheitClicked}
            />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay
              data={forecast[4]}
              // fahrenheitClicked={fahrenheitClicked}
            />
          </div>
          <div className="col-sm mb-3">
            <WeatherForecastDay
              data={forecast[5]}
              // fahrenheitClicked={fahrenheitClicked}
            />
          </div>
        </div>
      </div>
    );
  } else {
    loadFahrenheit();

    return null;
  }
}
