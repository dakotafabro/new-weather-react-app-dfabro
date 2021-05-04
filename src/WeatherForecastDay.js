import React from "react";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <strong>{props.data.dt}</strong>
      <br />
      <span className="main-forecast-temp">
        {Math.round(props.data.temp.day)}°
      </span>
      <br />
      {/* <span className="icon">
              <img src={iconUrl} alt="icon" />
            </span> */}
      <br />
      <span className="high-temp">
        {Math.round(props.data.temp.max)}°
      </span> /{" "}
      <span className="low-temp">{Math.round(props.data.temp.min)}°</span>
    </div>
  );
}
