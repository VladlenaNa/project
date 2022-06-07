import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import ModalCardFilm from "../ModalCardFilm/ModalCardFilm";
const Modal = (props) => {
  return (
    <>
      <div
        className="darkBG"
        onClick={() => {
          props.setModal(false);
        }}
      />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h2 className="heading">Films</h2>
          </div>
          <button className="closeBtn" onClick={() => props.setModal(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            {props.foundFilms.map((movie) => {
              return <ModalCardFilm key={movie.id} movie={movie} />;
            })}
          </div>
          <div className="modalActions">
            <div className="actionsContainer"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
