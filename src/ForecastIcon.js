import React from "react";

export default function ForecastIcon(props) {
  let iconUrl = `https://openweathermap.org/img/wn/${props.weather[0].icon}@2x.png`;

  return <img src={iconUrl} alt="icon" />;
}
