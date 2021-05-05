import React from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  //   let shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return day;
  }

  return (
    <div>
      <strong>{day}</strong>
      <br />
      <WeatherIcon code={props.data.icon} size={52} color="#d18c24" />
      <br />
      <span className="high-temp">
        {Math.round(props.data.temp.max)}°
      </span> /{" "}
      <span className="low-temp">{Math.round(props.data.temp.min)}°</span>
    </div>
  );
}
