import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import Conversion from "./Conversion";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import WeatherIcon from "./WeatherIcon";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    setWeatherData({
      ready: true,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      feelsLike: Math.round(response.data.main.feels_like),
      description: response.data.weather[0].description.toUpperCase(),
      lowTemp: Math.round(response.data.main.temp_min),
      highTemp: Math.round(response.data.main.temp_max),
      temp: Math.round(response.data.main.temp),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
      city: response.data.name,
      iconCode: response.data.weather[0].icon,
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();

    setWeatherData({ ready: false });

    let units = "imperial";
    const apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showWeather);
  }

  function search() {
    let units = "imperial";
    const apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showWeather);
  }

  if (weatherData.ready === true) {
    return (
      <div className="Weather">
        <form className="search-for-city mb-2" onSubmit={getWeather}>
          <input
            className="search-entry"
            type="search"
            placeholder="Enter a city"
            autoComplete="off"
            onChange={updateCity}
          />
          <input className="search-button" type="submit" value="Search" />
        </form>

        <div className="desired-city-info">
          <h1 className="welcome-to-city mt-3">
            <span>
              Welcome to <br /> {weatherData.city}
              <br />
              <WeatherIcon
                code={weatherData.iconCode}
                size={70}
                color="#d18c24"
              />
            </span>
          </h1>
          <div className="current-date mt-0">
            <DateAndTime />
          </div>
        </div>

        <Conversion data={weatherData} />

        <Forecast
          lat={weatherData.lat}
          lon={weatherData.lon}
          // celsiusClicked={celsiusClicked}
          // fahrenheitClicked={fahrenheitClicked}
        />
      </div>
    );
  } else {
    search();

    return (
      <div className="loader">
        <div className="loading-page">Loading...</div>
        <div>
          <Loader type="Rings" color="#4646f8" height={160} width={160} />
        </div>
      </div>
    );
  }
}
