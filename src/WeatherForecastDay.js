import React from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return shortDays[day];
  }

  return (
    <div>
      <span className="WeatherForecastDay mb-1">
        <strong>{day()}</strong>
      </span>
      <br />
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={45}
        color="#d18c24"
      />
      <br />
      <span className="high-temp">
        <strong>{Math.round(props.data.temp.max)}°</strong>
      </span>{" "}
      /{" "}
      <span className="low-temp">
        <strong>{Math.round(props.data.temp.min)}°</strong>
      </span>
    </div>
  );
}
