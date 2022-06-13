import React from "react";
import "./UpcomingFilmsSection.css";
import { MemoFilmCard } from "../CardFilmMemo/CardFilmMemo";

export default function UpcomingFilmsSection(props) {
  return (
    <div className="upcoming_wrapper">
      <div className="upcoming__header">
        <h2>Upcoming</h2>
      </div>
      <div className="upcoming_content">
        {props.movies.map((movie) => {
          return <MemoFilmCard key={movie.id} movieKey={movie.id} moviePosterPath={movie.poster_path} movieTitle={movie.title} moviePlot={movie.overview} />;
        })}
      </div>
    </div>
  );
}
