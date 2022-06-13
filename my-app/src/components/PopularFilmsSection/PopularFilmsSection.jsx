import React from "react";
import "./PopularFilmsSection.css";
import { MemoFilmCard } from "../CardFilmMemo/CardFilmMemo";

export default function PopularFilmsSection(props) {
  return (
    <div className="popular_wrapper">
      <div className="popular__header">
        <h2>What's Popular</h2>
      </div>
      <div className="popular_content">
        {props.movies.map((movie) => {
          return <MemoFilmCard key={movie.id} movieKey={movie.id} moviePosterPath={movie.poster_path} movieTitle={movie.title} moviePlot={movie.overview} />;
        })}
      </div>
    </div>
  );
}
