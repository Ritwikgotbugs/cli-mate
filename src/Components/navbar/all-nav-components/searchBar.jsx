import React, { useState } from "react";
import "../../../styles/navbar.css";

export function SearchBar() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("");

    function searchLocation(event) {
        setSearch(event.target.value);
    }

    return (
        <div className="searchBar">
            <input className="searchInput"
                type="text"
                placeholder="Search for a city..."
                value={search}
                onChange={searchLocation}
            />
            <button onClick={() => setLocation(search)}>Search</button>
        </div>
    );
}
