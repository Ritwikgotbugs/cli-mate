import React from "react";
import "../styles/snackbar.css";

export function Snackbar({ message, onClose }) {
    return (
        <div className="snackbar">
            {message}
            <button className="closeButton" onClick={onClose}>Close</button>
        </div>
    );
}
