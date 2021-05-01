import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="search-for-city mt-3">
        <input
          className="search-entry"
          type="search"
          placeholder="Enter a city"
        />
        <input className="search-button" type="submit" value="Search" />
        <input className="current-button" type="submit" value="Current" />
      </form>

      <div className="desired-city-info">
        <h1 className="welcome-to-city mt-3">Welcome to Los Angeles</h1>
        <p className="current-date">Saturday - May 1, 2021 - 10:57</p>
      </div>

      <div className="row weather-info">
        <div className="main-temp col-sm-6">
          <span className="high-and-low-temp">H: --°</span>
          <br />
          <span className="current-temp">95°</span>
          <br />
          <span className="high-and-low-temp">L: --°</span>
        </div>

        <div className="description-and-icon col-sm-6">
          <p className="weather-description">Partly Cloudy</p>
          <p classname="weather-icon">🌤</p>

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
