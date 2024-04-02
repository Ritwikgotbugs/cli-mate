import './App.css'
import { Navbar } from './Components/navbar/navbar.jsx'
import { WeatherCard } from './Components/weather-display.jsx'
import { SearchBar } from "./Components/navbar/all-nav-components/searchBar.jsx";
import React  from 'react'


function App() {
  return (
    <>
    <div className='column'>
      <Navbar />
      <SearchBar />
      <WeatherCard />
    </div>
    </>
    
  )
}

export default App
