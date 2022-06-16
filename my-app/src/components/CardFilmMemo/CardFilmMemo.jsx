import React from "react";
import Modal from "../Modal/Modal";
import logo from "../../images/logo.png";
import "./CardFilmMemo.css"

export const MemoFilmCard = React.memo(function CardFilm(props) {
  const [isModal, setModal] = React.useState(false);
  const [clickedFilm, setClickedFilm] = React.useState([]);
  const link = props.moviePosterPath ? `https://image.tmdb.org/t/p/original/${props.moviePosterPath}` : logo;
  function handleSubmit(e) {
    e.preventDefault();
    setClickedFilm([{title: props.movieTitle, overview: props.moviePlot, poster_path: props.moviePosterPath, id: props.movieKey}]);
    setModal(true)
  }
  return (
    <div>
      <div className="card-film" onClick={handleSubmit}>
        <img src={link} alt=""></img>
        <h2 className="card-film__title">{props.movieTitle || props.movie.name}</h2>
      </div>
      {isModal && <Modal setModal={setModal} foundFilms={clickedFilm} />}
    </div>
  );
})