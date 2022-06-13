import React from "react";
import "./TrendingFilmsSection.css";
import { MemoFilmCard } from "../CardFilmMemo/CardFilmMemo";

export default function TrendingFilmsSection(props) {
  return (
    <div className="trending_wrapper">
      <div className="trending__header">
        <h2>In Trend</h2>
      </div>
      <div className="trending_content">
        {props.movies.map((movie) => {
          return <MemoFilmCard key={movie.id} movieKey={movie.id} moviePosterPath={movie.poster_path} movieTitle={movie.title} moviePlot={movie.overview} />;
        })}
      </div>
    </div>
  );
}
