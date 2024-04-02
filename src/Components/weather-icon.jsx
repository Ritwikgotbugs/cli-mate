import React from "react";
import "../styles/weather-display.css";

import sunnyIcon from "../assets/sunny.png";
import clearIcon from "../assets/clear.png";
import partialCloudyIcon from "../assets/partial-cloudy.png";
import cloudyIcon from "../assets/cloudy.png";
import overcastIcon from "../assets/overcast.png";
import fogIcon from "../assets/fog.png";
import rainyIcon from "../assets/rainy.png";
import snowIcon from "../assets/snow.png";
import thunderstormIcon from "../assets/thunderstorm.png";

export function WeatherIcon({ condition }) {
  let iconUrl;

  switch (condition) {
    case "Sunny":
      iconUrl = sunnyIcon;
      break;
    case "Clear":
      iconUrl = clearIcon;
      break;
    case "Partly cloudy":
      iconUrl = partialCloudyIcon;
      break;
    case "Cloudy":
      iconUrl = cloudyIcon;
      break;
    case "Overcast":
      iconUrl = overcastIcon;
      break;
    case "Mist":
    case "Fog":
      iconUrl = fogIcon;
      break;
    case "Rain":
    case "Light rain":
    case "Moderate rain":
    case "Heavy rain":
      iconUrl = rainyIcon;
      break;
    case "Snow":
    case "Light snow":
    case "Moderate snow":
    case "Heavy snow":
      iconUrl = snowIcon;
      break;
    case "Thunderstorm":
      iconUrl = thunderstormIcon;
      break;
    default:
      iconUrl = sunnyIcon;
      break;
  }

  return (
    <div className="weatherIcon">
      <img src={iconUrl} height={200} alt={condition} />
      <h2>{condition}</h2>
    </div>
  );
}
