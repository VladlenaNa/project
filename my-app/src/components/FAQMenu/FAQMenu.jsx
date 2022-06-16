import React from "react";
import { Link } from "react-router-dom";
import "./FAQMenu.css";
export default function FAQMenu() {
  return (
    <div className="FAQ-panel">
      <h3>FAQ</h3>
      <div className="menu">
        <ul>
          <li className="menu__link">
            <Link to="/TMDB">Our History</Link>
          </li>
          <li className="menu__link">
            <Link to="/Contact">Staying In Touch</Link>
          </li>
          <li className="menu__link">
            <Link to="/General">General</Link>
          </li>
          <li className="menu__link">
            <Link to="/Api">Api Overview</Link>
          </li>
          <li className="menu__link">
            <Link to="/Guidelines">Leadership</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
