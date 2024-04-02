import React, { useState } from 'react';
import './App.css';
import { SearchBar } from "./Components/navbar/all-nav-components/searchBar.jsx";
import { Navbar } from './Components/navbar/navbar.jsx';
import { WeatherCard } from './Components/weather-display.jsx';


function App() {
  const [weatherDescription, setWeatherDescription] = useState("Overcast");
  return (
    <>
    <div className='column'>
      <Navbar />
      <SearchBar setWeatherDescription={setWeatherDescription} />
      <WeatherCard weatherDescription={weatherDescription}/>
    </div>
    </>
    
  )
}

export default App
