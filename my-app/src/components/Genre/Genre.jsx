import React, { useState } from "react";
import "./Genre.css";
export default function Genre(props) {
  const [isClicked, setIsClicked] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setIsClicked(!isClicked);
    if (!isClicked) {
      props.addSelectedGenre(props.genreId); }
    else {
      props.removeSelectedGenre(props.genreId)
    }
  }
  return (
    <button
      className={isClicked ? "genre__active" : "genre"}
      onClick={handleSubmit}
    >
      {props.genreName}
    </button>
  );
}
