import React, { useEffect, useState } from "react";
import "./WeatherForecastDay.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let [clicked, setClicked] = useState(props.onClickEvent);

  useEffect(() => {
    setClicked(true);
  }, [props.onClickEvent]);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return shortDays[day];
  }

  function maxTemp() {
    let temp = Math.round(props.data.temp.max);
    return temp;
  }

  function minTemp() {
    let temp = Math.round(props.data.temp.min);
    return temp;
  }

  function maxTempCelsius() {
    let max = Math.round(props.data.temp.max - (32 * 5) / 9);
    return max;
  }

  function minTempCelsius() {
    let min = Math.round(props.data.temp.min - (32 * 5) / 9);
    return min;
  }

  if (clicked === false) {
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
          <strong>{maxTemp()}°</strong>
        </span>{" "}
        /{" "}
        <span className="low-temp">
          <strong>{minTemp()}°</strong>
        </span>
      </div>
    );
  } else if (clicked === true) {
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
          <strong>{maxTempCelsius()}°</strong>
        </span>{" "}
        /{" "}
        <span className="low-temp">
          <strong>{minTempCelsius()}°</strong>
        </span>
      </div>
    );
  }
}
