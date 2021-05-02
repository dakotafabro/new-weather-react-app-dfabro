import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import DateAndTime from "./DateAndTime";

export default function Weather() {
  let [speedUnit, setSpeedUnit] = useState("mph");
  let [icon, setIcon] = useState("--");
  let [humidity, setHumidity] = useState("--");
  let [wind, setWind] = useState("--");
  let [feelsLike, setFeelsLike] = useState("--");
  let [description, setDescription] = useState("--");
  let [lowTemp, setLowTemp] = useState("--");
  let [highTemp, setHighTemp] = useState("--");
  let [currentTemp, setCurrentTemp] = useState("--");
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
      Welcome to...
    </span>
  );

  function convertToCelsius(event) {
    event.preventDefault();
    setSpeedUnit("km/h");

    let units = "metric";
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let celsiusUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(celsiusUrl);

    axios.get(celsiusUrl).then(showWeather);
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setSpeedUnit("mph");

    let units = "imperial";
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let fahrenheitUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(fahrenheitUrl);

    axios.get(fahrenheitUrl).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    let city = response.data.name;
    let humidity = response.data.main.humidity;
    let wind = response.data.wind.speed;
    let feelsLike = response.data.main.feels_like;
    let description = response.data.weather[0].description.toUpperCase();
    let lowTemp = response.data.main.temp_min;
    let highTemp = response.data.main.temp_max;
    let temp = response.data.main.temp;
    let icon = response.data.weather[0].icon;
    let iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    setCity(city);
    setHumidity(humidity);
    setWind(Math.round(wind));
    setFeelsLike(Math.round(feelsLike));
    setDescription(description);
    setLowTemp(Math.round(lowTemp));
    setHighTemp(Math.round(highTemp));
    setCurrentTemp(Math.round(temp));
    setIcon(<img src={iconUrl} alt="Weather Icon" />);
    setGreetingIcon(null);
    setGreeting(
      <span>
        <img src={iconUrl} alt="Weather Icon" />
        <br /> Welcome to {city}
      </span>
    );
  }

  function getWeather(event) {
    event.preventDefault();

    let units = "imperial";
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    console.log(url);

    axios.get(url).then(showWeather);
  }

  function showCurrentPosition(currentPosition) {
    let latitude = currentPosition.coords.latitude;
    let longitude = currentPosition.coords.longitude;
    let units = `imperial`;
    let apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    console.log(weatherApiUrl);

    axios.get(weatherApiUrl).then(showWeather);
  }

  function currentCityWeather(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(showCurrentPosition);
  }

  return (
    <div className="Weather">
      <form className="search-for-city mt-3" onSubmit={getWeather}>
        <input
          className="search-entry"
          type="search"
          placeholder="Enter a city"
          autoComplete="off"
          onChange={updateCity}
        />
        <input className="search-button shadow" type="submit" value="Search" />
        <input
          className="current-button shadow"
          type="submit"
          value="Current"
          onClick={currentCityWeather}
        />
      </form>

      <div className="desired-city-info">
        <h1 className="welcome-to-city mt-3">{greeting}</h1>
        <p className="current-date">
          <DateAndTime />
        </p>
      </div>

      <div className="row weather-info">
        <div className="main-temp col-sm-6">
          <span className="high-and-low-temp high-temp">H: {highTemp}°</span>
          <br />
          <span className="current-temp">{currentTemp}°</span>
          <span className="conversion-links">
            <a
              href="/"
              className="conversion-link-f"
              onClick={convertToFahrenheit}
            >
              F
            </a>{" "}
            |{" "}
            <a
              href="/"
              className="conversion-link-c"
              onClick={convertToCelsius}
            >
              C
            </a>
          </span>
          <br />
          <span className="high-and-low-temp low-temp">L: {lowTemp}°</span>
        </div>

        <div className="description-and-icon col-sm-6">
          <p className="weather-description">{description}</p>
          <p className="weather-icon">{icon}</p>

          <div className="weather-conditions mt-3 mb-2">
            <span>
              <strong>Feels like:</strong> {feelsLike}°
            </span>
            <br />
            <span>
              <strong>Wind:</strong> {wind} {speedUnit}
            </span>
            <br />
            <span>
              <strong>Humidity:</strong> {humidity}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
