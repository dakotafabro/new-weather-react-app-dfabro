import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import DateAndTime from "./DateAndTime";
import Forecast from "./Forecast";
import Conversion from "./Conversion";

export default function Weather() {
  let [ready, setReady] = useState(false);
  let [forecast, setForecast] = useState(null);
  let [weatherData, setWeatherData] = useState({});
  let [city, setCity] = useState(null);
  let [greetingIcon, setGreetingIcon] = useState(
    <span>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#d18c24"
        size={75}
        animate={true}
      />{" "}
    </span>
  );
  let [greeting, setGreeting] = useState(
    <span>
      {greetingIcon} <br />
      Welcome
    </span>
  );

  function showWeather(response) {
    let weatherDataPoints = {
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
    };

    let city = response.data.name;
    let iconCode = response.data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    setGreetingIcon(null);
    setGreeting(
      <span>
        <img src={iconUrl} alt="Weather Icon" />
        <br /> Welcome to {city}
      </span>
    );

    setWeatherData(weatherDataPoints);

    setForecast(
      <div>
        <Forecast data={weatherDataPoints} />
      </div>
    );

    setReady(true);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function getWeather(event) {
    event.preventDefault();

    let units = "imperial";
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    axios.get(url).then(showWeather);
  }

  if (ready) {
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
          <p className="current-date">
            <DateAndTime />
          </p>
        </div>

        <div>
          <Conversion data={weatherData} />
        </div>

        {forecast}
      </div>
    );
  } else {
    navigator.geolocation.getCurrentPosition(loadWeatherData);

    function loadWeatherData(response) {
      let latitude = response.coords.latitude;
      let longitude = response.coords.longitude;
      let units = `imperial`;
      let apiKey = "714ee8260b39daee49f18fcc2cebda82";
      let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
      console.log(weatherApiUrl);

      axios.get(weatherApiUrl).then(showWeather);
    }

    return <div>Loading...</div>;
  }
}
