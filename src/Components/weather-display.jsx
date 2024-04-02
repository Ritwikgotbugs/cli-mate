import React from "react";
import humidity from "../assets/humidity.png";
import precip from "../assets/ppt-icon.png";
import uv from "../assets/uv.png";
import wind from "../assets/wind.png";
import "../styles/weather-display.css";
import { WeatherIcon } from "./weather-icon.jsx";
import { WeatherInfo } from "./weather-info.jsx";

export function WeatherCard({ weatherDescription }) {
return (
    <div className="weatherCard">
            <div className="column">
                    <div className="column">
                            <h1 id="location">Delhi,India</h1>
                            <h2 id="temperature">0°C</h2>
                    </div>
                    <div className="info-container">
                            <div className="row">
                                    <WeatherInfo icon={humidity} data="0%" title="Humidity" id={'humidity'}/>
                                    <WeatherInfo icon={wind} data="0 km/h" title="Windspeed" id={'wind'}/>
                            </div>
                            <div className="row">
                            <WeatherInfo icon={uv} data="0" title="UV Index" id={'uv'}/>
                            <WeatherInfo icon={precip} data="0 mm" title="Precipitation" id={'precip'}/>
                            </div>
                    </div>
            </div>
            <WeatherIcon condition={weatherDescription}/>
    </div>
);
}