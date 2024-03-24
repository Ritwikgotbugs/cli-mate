import React from "react";
import historyIcon from "../../assets/history.png";
import logo from "../../assets/icon.png";
import { SearchBar } from "../navbar/all-nav-components/searchBar.jsx";
import "../../styles/navbar.css";

export function Navbar() {
  return (
    <nav className="NavBar">
      <div className="climate">
        <img src={logo} alt="logo" height={80} />
        <h1>CliMate</h1>
      </div>
      <SearchBar/>
      <img src={historyIcon} alt="history" height={40} />
    </nav>
  );
}
