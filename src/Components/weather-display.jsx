import React from "react";
import "../styles/weather-display.css";
import { WeatherInfo } from "./weather-info";

export function WeatherCard() {
  return (
    <div className="weatherCard">
        <div className="weatherIcon"></div>
        <WeatherInfo />
    </div>
  );
}