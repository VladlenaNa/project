import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import footer_logo from "../../images/footer__logo.png";
export default function Footer() {
  return (
    <nav className="footer__content">
      <div className="footer__logo">
        <img className="footer_logo" alt="" src={footer_logo} />
      </div>
      <div className="footer__company info">
        <h3>About TMDB</h3>
        <ul>
          <li>
            <Link to="/TMDB">TMDB</Link>
          </li>
          <li>
            <Link to="/Contact">Contact us</Link>
          </li>
        </ul>
      </div>
      <div className="footer__community info">
        <h3>Community</h3>
        <ul>
          <li>
            <Link to="/Guidelines">Guidelines</Link>
          </li>
          <li>
            <a href="https://mobile.twitter.com/themoviedb">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="footer__rules info">
        <h3>Legal</h3>
        <ul>
          <li>
            <Link to="/Terms">Terms of use</Link>
          </li>
          <li>
            <Link to="/Api">Api</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
