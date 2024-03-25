import React from "react";
import humidity from "../assets/humidity.png";
import precip from "../assets/ppt-icon.png";
import icon from "../assets/sunny.png";
import uv from "../assets/uv.png";
import wind from "../assets/wind.png";
import "../styles/weather-display.css";
import { WeatherIcon } from "./weather-icon.jsx";
import { WeatherInfo } from "./weather-info.jsx";

export function WeatherCard() {
  return (
    <div className="weatherCard">
        <div className="column">
            <div className="column">
                <h1 className="location">Delhi,India</h1>
                <h2 className="temperature">0°C</h2>
            </div>
            <div className="info-container">
                <div className="row">
                    <WeatherInfo icon={humidity} data="0.0%" title="Humidity"/>
                    <WeatherInfo icon={wind} data="0.0%" title="Humidity"/>
                </div>
                <div className="row">
                <WeatherInfo icon={uv} data="0.0%" title="Humidity"/>
                <WeatherInfo icon={precip} data="0.0%" title="Humidity"/>
                </div>
            </div>
        </div>
        <WeatherIcon icon={icon}/>
    </div>
  );
}