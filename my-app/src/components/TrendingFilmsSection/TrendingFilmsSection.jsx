import React from "react";
import CardFilm from "../CardFilm/CardFilm";
import "./TrendingFilmsSection.css";
export default function TrendingFilmsSection(props) {
  return (
    <div className="trending_wrapper">
      <div className="trending__header">
        <h2>In Trend</h2>
      </div>
      <div className="trending_content">
        {props.movies.map((movie) => {
          return <CardFilm key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}
