import React from "react";

export default function DateAndTime() {
  let shortDays = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  let fullDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Decemeber",
  ];

  let now = new Date();
  let currentDate = now.getDate();
  let currentHour = now.getHours();

  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = now.getMinutes();

  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }

  let currentFullDay = fullDays[now.getDay()];
  //   let currentShortDay = shortDays[now.getDay()];
  let currentMonth = months[now.getMonth()];
  let currentYear = now.getFullYear();

  let dateAndTime = `${currentFullDay}, ${currentMonth} ${currentDate}, ${currentYear} - ${currentHour}:${currentMinutes}`;

  return <div className="DateAndTime">{dateAndTime}</div>;
}
