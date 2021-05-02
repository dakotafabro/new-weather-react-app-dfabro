import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";

// to do: add correct date and time to UI

export default function Weather(props) {
  let [city, setCity] = useState(null);
  let [greeting, setGreeting] = useState(
    <span>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="#d18c24"
        size={75}
        animate={true}
      />{" "}
      Welcome to...
    </span>
  );

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    let temp = response.data.main.temp;
    alert(Math.round(temp));
    setGreeting(<span>Welcome to {city}</span>);
  }

  function getWeather(event) {
    event.preventDefault();

    let units = `imperial`;
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(url);

    axios.get(url).then(showWeather);
  }

  return (
    <div className="Weather">
      <form className="search-for-city mt-3" onSubmit={getWeather}>
        <input
          className="search-entry"
          type="search"
          placeholder="Enter a city"
          onChange={updateCity}
        />
        <input className="search-button shadow" type="submit" value="Search" />
        <input
          className="current-button shadow"
          type="submit"
          value="Current"
        />
      </form>

      <div className="desired-city-info">
        <h1 className="welcome-to-city mt-3">{greeting}</h1>
        <p className="current-date">Saturday - May 1, 2021 - 10:57</p>
      </div>

      <div className="row weather-info">
        <div className="main-temp col-sm-6">
          <span className="high-and-low-temp">H: --°</span>
          <br />
          <span className="current-temp">95°</span>
          <span className="conversion-links">
            <a href="/" className="conversion-link-f">
              F
            </a>{" "}
            |{" "}
            <a href="/" className="conversion-link-c">
              C
            </a>
          </span>
          <br />
          <span className="high-and-low-temp">L: --°</span>
        </div>

        <div className="description-and-icon col-sm-6">
          <p className="weather-description">Partly Cloudy</p>
          <p className="weather-icon">🌤</p>

          <ul className="weather-conditions mt-3">
            <li>Feels like: --</li>
            <li>Wind: --</li>
            <li>Humidity: --</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
