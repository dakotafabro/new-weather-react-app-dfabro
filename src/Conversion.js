import React, { useState } from "react";
import axios from "axios";

export default function Conversion(props) {
  let [speedUnit, setSpeedUnit] = useState("mph");
  let [currentData, setCurrentData] = useState(props.data);
  let iconUrl = `https://openweathermap.org/img/wn/${props.data.iconCode}@2x.png`;

  function convertToCelsius(event) {
    setSpeedUnit("km/h");

    event.preventDefault();

    let units = "metric";
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let celsiusUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.data.city}&appid=${apiKey}&units=${units}`;

    axios.get(celsiusUrl).then(convertToMetric);
  }

  function convertToMetric(response) {
    setCurrentData({
      description: response.data.weather[0].description.toUpperCase(),
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round((response.data.main.feels_like * 9) / 5 + 32),
      lowTemp: Math.round((response.data.main.temp_min * 9) / 5 + 32),
      highTemp: Math.round((response.data.main.temp_max * 9) / 5 + 32),
      temp: Math.round((response.data.main.temp * 9) / 5 + 32),
    });
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setSpeedUnit("mph");

    setCurrentData(props.data);
  }

  return (
    <div className="row weather-info">
      <div className="main-temp col-sm-6">
        <span className="high-and-low-temp high-temp">
          H: {currentData.highTemp}°
        </span>
        <br />
        <span className="current-temp">{currentData.temp}</span>
        <span className="conversion-links">
          <a
            href="/"
            className="conversion-link-f"
            onClick={convertToFahrenheit}
          >
            F°
          </a>{" "}
          |{" "}
          <a href="/" className="conversion-link-c" onClick={convertToCelsius}>
            C°
          </a>
        </span>
        <br />
        <span className="high-and-low-temp low-temp">
          L: {currentData.lowTemp}°
        </span>
      </div>

      <div className="description-and-icon col-sm-6">
        <p className="weather-description">{currentData.description}</p>
        <p className="weather-icon">
          <img src={iconUrl} alt="Weather Icon" />
        </p>

        <div className="weather-conditions mt-3 mb-2">
          <span>
            <strong>Feels like:</strong> {currentData.feelsLike}°
          </span>
          <br />
          <span>
            <strong>Wind:</strong> {currentData.wind} {speedUnit}
          </span>
          <br />
          <span>
            <strong>Humidity:</strong> {currentData.humidity}%
          </span>
        </div>
      </div>
    </div>
  );
}
