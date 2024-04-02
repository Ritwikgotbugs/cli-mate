import React, { useState } from "react";
import "../../../styles/navbar.css";

export function SearchBar({setWeatherDescription}) {
    
    const [search, setSearch] = useState("");
    const handleLocation = (e) => {
        setSearch(e.target.value);
    }

    const searchCity = () => {
        let searchQuery = search;
        let api_key= "4efd5206eff842dabe175946231612";
        let url= `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${searchQuery}&aqi=no`;
        try {
            fetch(url)
            .then((response) => response.json())
            .then((data) => {

                const wind = document.getElementById("wind");
                const humidity = document.getElementById("humidity");
                const uvindex = document.getElementById("uv");
                const precipitaton = document.getElementById("precip");

                const temperature = document.getElementById("temperature");
                const location = document.getElementById("location");
                const description = document.getElementById("description");

                wind.innerHTML = `${data.current.wind_kph} km/h`;
                humidity.innerHTML = `${data.current.humidity}%`;
                uvindex.innerHTML = `${data.current.uv}`;
                precipitaton.innerHTML = `${data.current.precip_mm} mm`;
                temperature.innerHTML = `${data.current.temp_c}°C`;
                location.innerHTML = `${data.location.name},${data.location.country}`;
                
                const weatherText = data.current.condition.text;
                setWeatherDescription(weatherText);
                
            });
        
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <div className="searchBar">
            <input
                className="searchInput"
                type="text"
                placeholder="Search for a city..."
                value={search}
                onChange={handleLocation}
            />
            <button className="searchButton" onClick={searchCity}>Search</button>
        </div>
    );

}
