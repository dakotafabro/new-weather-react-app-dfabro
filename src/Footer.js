import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <span className="Footer">
      <a
        href="https://github.com/dakotafabro/new-weather-react-app-dfabro"
        title="GitHub Repo for this project"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        href="https://dakotafabro.netlify.app/"
        title="Dakota Fabro's Portfolio"
      >
        Dakota Fabro
      </a>{" "}
      hosted on{" "}
      <a href="https://www.netlify.com/" title="Go to Netlify">
        Netlify
      </a>
    </span>
  );
}
