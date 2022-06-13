import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../images/logo.png";
export default function Header() {
  return (
    <div className="menu_bar">
      <div className="navigation">
        <Link to="/Main">
          {" "}
          <img className="header__logo" alt="" src={logo} />{" "}
        </Link>
        <div className="buttons">
          <ul>
            <li>
              <Link to="/Films">Films</Link>
            </li>
            <li>
              <Link to="/TvShow">TV Shows</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
