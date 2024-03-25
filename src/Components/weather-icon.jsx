import React from "react";
import "../styles/weather-display.css";

export function WeatherIcon({icon}){
    return (
        <>
        <div className="weatherIcon">
            <h2 className="description">Sunny</h2>
            <img src={icon} alt="icon" height={200}/>
        </div>

        </>
    );
}