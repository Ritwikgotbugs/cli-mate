import React, { useState } from "react";
import "../../../styles/navbar.css";
import { Snackbar } from "../../snackbar";

export function SearchBar({ setWeatherDescription }) {
    const [search, setSearch] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);

    const handleLocation = (e) => {
        setSearch(e.target.value);
    }

    const searchCity = () => {
        if (!search.trim()) {
            setShowSnackbar(true);
            return;
        }

        let searchQuery = search;
        let api_key = "4efd5206eff842dabe175946231612";
        let url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${searchQuery}&aqi=no`;
        try {
            fetch(url)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('City not found');
                    }
                    return response.json();
                })
                .then((data) => {
                    const wind = document.getElementById("wind");
                    const humidity = document.getElementById("humidity");
                    const uvindex = document.getElementById("uv");
                    const precipitaton = document.getElementById("precip");

                    const temperature = document.getElementById("temperature");
                    const location = document.getElementById("location");

                    wind.innerHTML = `${data.current.wind_kph} km/h`;
                    humidity.innerHTML = `${data.current.humidity}%`;
                    uvindex.innerHTML = `${data.current.uv}`;
                    precipitaton.innerHTML = `${data.current.precip_mm} mm`;
                    temperature.innerHTML = `${data.current.temp_c}°C`;
                    location.innerHTML = `${data.location.name},${data.location.country}`;

                    const weatherText = data.current.condition.text;
                    setWeatherDescription(weatherText);
                })
                .catch((error) => {
                    setShowSnackbar(true);
                })
                .catch((error) => {
                    setShowSnackbar(true);
                });
        } catch (error) {
            setShowSnackbar(true);
            console.error('Error fetching weather data:', error);
        }
    }

    const closeSnackbar = () => {
        setShowSnackbar(false);
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
            {showSnackbar && <Snackbar message="City not found!" onClose={closeSnackbar} />}
        </div>
    );
}
