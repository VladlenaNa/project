import React, {useState} from "react";
import "./Search.css";
import { searchMovie } from "../../API";
import Modal from "../Modal/Modal";
import searchIcon from "../../images/iconSearch.png";
export default function Search() {
  const [keyword, setKeyWord] = useState("");
  const [foundFilms, setFoundFilms] = useState([]);
  const [isModal, setModal] = useState(false);
  function getTitle(event) {
    event.preventDefault();
    setKeyWord(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    searchMovie(keyword).then((movies) => {
      setFoundFilms(movies);
      setModal(true);
    });
  }
  return (
    <div className="search-section">
      <div className="search-section__content">
        <h2>Welcome</h2>
        <h3>
          Millions of movies, TV shows to discover. Explore now and enjoy!
        </h3>
        <form className="search-form" onSubmit={handleSubmit} action="" method="get">
          <input
            className="search-form__input"
            value={keyword}
            onChange={getTitle}
            name="s"
            placeholder="Enter name..."
          />
          <img
            onClick={handleSubmit}
            className="search-form__button"
            src={searchIcon}
            alt=""
          ></img>
        </form>
      </div>
      {isModal && <Modal setModal={setModal} foundFilms={foundFilms} />}
    </div>
  );
}
