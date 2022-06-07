import React from "react";
import CardFilm from "../CardFilm/CardFilm";
import "./PopularFilmsSection.css";
export default function PopularFilmsSection(props) {
  return (
    <div className="popular_wrapper">
      <div className="popular__header">
        <h2>What's Popular</h2>
      </div>
      <div className="popular_content">
        {props.movies.map((movie) => {
          return <CardFilm key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
