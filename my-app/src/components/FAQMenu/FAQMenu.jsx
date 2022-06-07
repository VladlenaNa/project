import React from "react";
import { Link } from "react-router-dom";
import "./FAQMenu.css";
export default function FAQMenu() {
  return (
    <div className="menu_FAQ">
      <h3>FAQ</h3>
      <div className="FAQ">
        <ul>
          <li className="link">
            <Link to="/TMDB">Our History</Link>
          </li>
          <li className="link">
            <Link to="/Contact">Staying In Touch</Link>
          </li>
          <li className="link">
            <Link to="/General">General</Link>
          </li>
          <li className="link">
            <Link to="/Api">Api Overview</Link>
          </li>
          <li className="link">
            <Link to="/Guidelines">Leadership</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
