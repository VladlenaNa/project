import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ModalCardFilm from "../ModalCardFilm/ModalCardFilm";
const Modal = (props) => {
  return (
    <>
      <div
        className="theme_darkBG"
        onClick={() => {
          props.setModal(false);
        }}
      />
      <div className="centered">
        <div className="modal">
          <div className="modal__header">
            <h2 className="modal__title">Films</h2>
          </div>
          <button className="modal__button_close" onClick={() => props.setModal(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modal__content">
            {props.foundFilms.map((movie) => {
              return <ModalCardFilm key={movie.id} moviePosterPath={movie.poster_path} movieTitle={movie.title} moviePlot={movie.overview} />;
            })}
          </div>
          <div className="modal__actions">
            <div className="actions-container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
