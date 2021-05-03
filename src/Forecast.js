import React from "react";
// import axios from "axios";

export default function Forecast(props) {
  // function displayForecast(response) {
  //   console.log(response.data.lat);
  //   console.log(response.data.lon);
  // }

  let lat = props.data.lat;
  let lon = props.data.lon;
  let units = "imperial";
  let apiKey = "714ee8260b39daee49f18fcc2cebda82";
  let forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  console.log(forecastUrl);
  // axios.get(forecastUrl).then(displayForecast);

  //   let shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="Forecast">
      <h2 className="mb-3">6-Day Forecast</h2>
      <div className="row mb-5">
        <div className="col-sm">
          <strong>Mon</strong>
          <br />
          --
          <br />
          <span className="high-temp">High°</span> /{" "}
          <span className="low-temp">Low°</span>
        </div>
      </div>
    </div>
  );
}
