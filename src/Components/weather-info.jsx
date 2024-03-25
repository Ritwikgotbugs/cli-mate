import React from "react";
import "../styles/weather-info.css";

export function WeatherInfo() {
    return (
        <>
        <div className="info-container">
            <div className="row">
                <div className="weatherInfo"></div>
                <div className="weatherInfo"></div>
            </div>
            <div className="row">
                <div className="weatherInfo"></div>
                <div className="weatherInfo"></div>
            </div>
        </div>
        </>
    );
}