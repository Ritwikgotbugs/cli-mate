import React from "react";
import "../styles/weather-info.css";

export function WeatherInfo({icon, data,title, id}) {
    return (
        <>
        <div className="weatherInfo">
            <img src={icon} alt="icon" height={60} />
            <div className="column">
            <div className="data-box" id={id}>
                <h2>{data}</h2>
            </div>
            <p>{title}</p>
            </div>
        </div>
        </>
    );
}