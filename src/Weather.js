import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import Forecast from "./Forecast";
import Conversion from "./Conversion";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(null);
  let [greeting, setGreeting] = useState(<span>Welcome</span>);

  function showWeather(response) {
    let city = response.data.name;
    let iconCode = response.data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

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

    setGreeting(
      <span>
        <img src={iconUrl} alt="Weather Icon" />
        <br /> Welcome to {city}
      </span>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();

    let units = "imperial";
    const apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    setWeatherData({});
    // setWeatherData({ ready: true });

    axios.get(url).then(showWeather);
  }

  function loadWeatherData(response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    let units = `imperial`;
    const apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    console.log(weatherApiUrl);

    axios.get(weatherApiUrl).then(showWeather);
  }

  function search() {
    navigator.geolocation.getCurrentPosition(loadWeatherData);
  }

  if (weatherData.ready) {
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
          <input
            className="search-button shadow"
            type="submit"
            value="Search"
          />
        </form>

        <div className="desired-city-info">
          <h1 className="welcome-to-city mt-1">{greeting}</h1>
          <div className="current-date">
            <DateAndTime />
          </div>
        </div>

        <div>
          <Conversion data={weatherData} />
        </div>

        <div>
          <Forecast data={weatherData} />
        </div>
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
