import React from "react";
import "./ModalCardFilm.css";
import logo from "../../images/logo.png";
export default function ModalCardFilm(props) {
  let link;
  if (props.movie.poster_path === null) link = logo;
  else link = `https://image.tmdb.org/t/p/original/${props.movie.poster_path}`;
  return (
    <div className="modalCard">
      <h2>{props.movie.title || props.movie.name}</h2>
      <img src={link} alt=""></img>
      <p>{props.movie.overview}</p>
    </div>
  );
}
