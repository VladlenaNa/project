import React from "react";
import "./CardFilm.css";
import Modal from "../Modal/Modal";
import logo from "../../images/logo.png";

export default function CardFilm(props) {
  const [isModal, setModal] = React.useState(false);
  const [clickedFilm, setClickedFilm] = React.useState([]);
  let link;
  link = props.movie.poster_path ? `https://image.tmdb.org/t/p/original/${props.movie.poster_path}` : logo;
  function handleSubmit(e) {
    e.preventDefault();
    setClickedFilm([props.movie]);
    setModal(true);
  }
  return (
    <div>
      <div className="card" onClick={handleSubmit}>
        <img src={link} alt=""></img>
        <h2 className="film_a">{props.movie.title || props.movie.name}</h2>
      </div>
      {isModal && <Modal setModal={setModal} foundFilms={clickedFilm} />}
    </div>
  );
}
