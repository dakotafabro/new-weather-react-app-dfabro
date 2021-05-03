import React from "react";

export default function Forecast() {
  // function displayForecast() {
  //   let forecast
  // }
  // function getForecast(response) {
  //   let apiKey = "714ee8260b39daee49f18fcc2cebda82";
  //   let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}$units=${units}`;
  //   console.log(forecastUrl);
  //   axios.get(forecastUrl).then(displayForecast);
  // }

  return (
    <div className="Forecast">
      <h2 className="mb-3">6-Day Forecast</h2>
      <div className="row mb-3">
        <div className="col-sm-2">Mon</div>
        <div className="col-sm-2">Mon</div>
        <div className="col-sm-2">Mon</div>
        <div className="col-sm-2">Mon</div>
        <div className="col-sm-2">Mon</div>
        <div className="col-sm-2">Mon</div>
      </div>

      <div className="row mb-2">
        <div className="col-sm-2">--</div>
        <div className="col-sm-2">--</div>
        <div className="col-sm-2">--</div>
        <div className="col-sm-2">--</div>
        <div className="col-sm-2">--</div>
        <div className="col-sm-2">--</div>
      </div>

      <div className="row mb-5">
        <div className="col-sm-2">
          <span className="high-temp">High°</span> /{" "}
          <span className="low-temp">Low°</span>
        </div>
        <div className="col-sm-2">
          <span className="high-temp">High°</span> /{" "}
          <span className="low-temp">Low°</span>
        </div>
        <div className="col-sm-2">
          <span className="high-temp">High°</span> /{" "}
          <span className="low-temp">Low°</span>
        </div>
        <div className="col-sm-2">
          <span className="high-temp">High°</span> /{" "}
          <span className="low-temp">Low°</span>
        </div>
        <div className="col-sm-2">
          <span className="high-temp">High°</span> /{" "}
          <span className="low-temp">Low°</span>
        </div>
        <div className="col-sm-2">
          <span className="high-temp">High°</span> /{" "}
          <span className="low-temp">Low°</span>
        </div>
      </div>
    </div>
  );
}
