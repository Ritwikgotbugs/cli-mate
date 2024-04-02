import React from "react";
import historyIcon from "../../assets/history.png";
import logo from "../../assets/icon.png";
import "../../styles/navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="climate">
        <img className="logo" src={logo} alt="logo" height={80} />
        <h1>CliMate</h1>
      </div>
      <img className="history-icon" src={historyIcon} alt="history" height={40} />
    </nav>
  );
}
