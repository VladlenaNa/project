import React from "react";
import Modal from "../Modal/Modal";
import logo from "../../images/logo.png";
import "./CardFilmMemo.css"

export const MemoFilmCard = React.memo(function CardFilm(props) {
  const [isModal, setModal] = React.useState(false);
  const [clickedFilm, setClickedFilm] = React.useState([]);
  let link;
  link = props.moviePosterPath ? `https://image.tmdb.org/t/p/original/${String(props.moviePosterPath)}` : logo;
  function handleSubmit(e) {
    e.preventDefault();
    setClickedFilm([{title: props.movieTitle, overview: props.moviePlot, poster_path: props.moviePosterPath, id: props.movieKey}]);
    setModal(true)
  }
  return (
    <div>
      <div className="card" onClick={handleSubmit}>
        <img src={link} alt=""></img>
        <h2 className="film_a">{props.movieTitle || props.movie.name}</h2>
      </div>
      {isModal && <Modal setModal={setModal} foundFilms={clickedFilm} />}
    </div>
  );
})