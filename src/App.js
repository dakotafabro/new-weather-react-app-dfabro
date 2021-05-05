import React, { useState } from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  let [defaultCity, setDefaultCity] = useState(null);
  let [ready, setReady] = useState(false);

  function getCity(response) {
    console.log(response.data.name);
    setDefaultCity(response.data.name);
    setReady(true);
  }

  function loadWeatherData(response) {
    let latitude = response.coords.latitude;
    let longitude = response.coords.longitude;
    let units = `imperial`;
    const apiKey = "714ee8260b39daee49f18fcc2cebda82";
    let weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    console.log(weatherApiUrl);

    axios.get(weatherApiUrl).then(getCity);
  }
  function search() {
    navigator.geolocation.getCurrentPosition(loadWeatherData);
  }

  if (ready === true) {
    return (
      <div className="container App border p-2 mt-2 mb-2 shadow">
        <div>
          <Weather defaultCity={defaultCity} />
        </div>

        <div className="mt-0">
          <Footer />
        </div>
      </div>
    );
  } else {
    search();

    return null;
  }
}
