import React from "react";
import "./ModalCardFilm.css";
import logo from "../../images/logo.png";
export default function ModalCardFilm(props) {
  let link;
  if (props.moviePosterPath === null) link = logo;
  else link = `https://image.tmdb.org/t/p/original/${props.moviePosterPath}`;
  return (
    <div className="modalCard">
      <h2>{props.movieTitle }</h2>
      <img src={link} alt=""></img>
      <p>{props.moviePlot}</p>
    </div>
  );
}
