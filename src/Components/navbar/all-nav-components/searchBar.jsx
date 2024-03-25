import React, { useState } from "react";
import "../../../styles/navbar.css";
import { SearchButton } from "./searchButton";

export function SearchBar() {
    const [search, setSearch] = useState("");

    function searchLocation(event) {
        setSearch(event.target.value);
    }

    return (
        <>
        <div className="searchBar">
            <input className="searchInput"
                type="text"
                placeholder="Search for a city..."
                value={search}
                onChange={searchLocation}
            />
        <SearchButton />
        </div>
        </>
    );
}
