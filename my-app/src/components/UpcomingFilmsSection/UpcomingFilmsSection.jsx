import React from "react";
import CardFilm from "../CardFilm/CardFilm";
import "./UpcomingFilmsSection.css";
export default function UpcomingFilmsSection(props) {
  return (
    <div className="upcoming_wrapper">
      <div className="upcoming__header">
        <h2>Upcoming</h2>
      </div>
      <div className="upcoming_content">
        {props.movies.map((movie) => {
          return <CardFilm key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
