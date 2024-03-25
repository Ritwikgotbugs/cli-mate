import React from "react";
import "../styles/weather-info.css";

export function WeatherInfo({icon, data,title}) {
    return (
        <>
        <div className="weatherInfo">
            <img src={icon} alt="icon" height={60} />
            <div className="data-box">
                <h2>{data}</h2>
                <p>{title}</p>
            </div>
        </div>
        </>
    );
}