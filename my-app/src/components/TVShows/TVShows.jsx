import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./TVShows.css";
import Genre from "../Genre/Genre";
import {
  getFilteredTVShows,
  getPopularTVShows,
} from "../../App";
import CardFilm from "../CardFilm/CardFilm";
export default function TvShow() {
  useEffect(() => {
    getPopularTVShows().then((movies) => {
      setPopularFilms(movies);
    });
  }, []);
  function handleSubmitDataGte(e) {
    setDataGte(e.target.value);
  }
  function handleSubmitDataLte(e) {
    setDataLte(e.target.value);
  }
  function handleSubmitSort(e) {
    setSort(e.target.value);
  }
  function loadFilms() {
    setPage(page + 1);
    getFilms(page + 1);
  }
  function getFilms(page) {
    if (!sort) setSort("rating.desc");
    getFilteredTVShows(
      selectedGenre,
      page,
      sort,
      "&primary_release_date.gte=" + dataGte,
      "&primary_release_date.lte=" + dataLte
    ).then((movies) => {
      let tmp = filteredFilms.concat(movies);
      setFilteredFilms(tmp);
    });
  }
  function filterFilm(e) {
    e.preventDefault();
    setPopularFilms([]);
    getFilteredTVShows(
      selectedGenre,
      page,
      sort,
      "&primary_release_date.gte=" + dataGte,
      "&primary_release_date.lte=" + dataLte
    ).then((movies) => {
      setFilteredFilms(movies);
    });
    setPage(1);
  }
  let genres = [
    { id: "10759", value: "Action&Adventure" },
    { id: "16", value: "Animation" },
    { id: "35", value: "Comedy" },
    { id: "99", value: "Documentary" },
    { id: "18", value: "Drama" },
    { id: "10751", value: "Family" },
    { id: "10762", value: "Kids" },
    { id: "10763", value: "News" },
    { id: "10764", value: "Reality" },
    { id: "10767", value: "Talk" },
    { id: "10768", value: "War&Politics" },
    { id: "37", value: "Western" },
  ];
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [dataLte, setDataLte] = useState("");
  const [dataGte, setDataGte] = useState("");
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [popularFilms, setPopularFilms] = useState([]);
  const [sort, setSort] = useState("");
  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content_wrapper">
          <div className="left_panel">
            <div className="films_title">
              <h2>TV Shows</h2>
            </div>
            <div className="filter_panel">
              <div className="sort_select">
                <select onChange={handleSubmitSort}>
                  <option id="popularity.desc" value="popularity.desc">
                    Popularity Descending
                  </option>
                  <option id="popularity.asc" value="popularity.asc">
                    Popularity Ascending
                  </option>
                  <option id="rating.desc" value="rating.desc">
                    Rating Descending
                  </option>
                  <option id="rating.asc" value="rating.asc">
                    Rating Ascending
                  </option>
                  <option id="release_date.desc" value="release_date.desc">
                    Release Descending
                  </option>
                  <option id="release_date.asc" value="release_date.asc">
                    Release Ascending
                  </option>
                  {/* <span className="arrow"></span> */}
                </select>
              </div>
              <div className="filter_genre">
                <h3>Genre</h3>
                {genres.map(({ id, value }) => (
                  <Genre
                    key={id}
                    genreId={id}
                    genreName={value}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre}
                  />
                ))}
              </div>
              <h3>Release Date</h3>
              <div className="date_filter">
                <p>from</p>
                <input
                  onChange={handleSubmitDataGte}
                  type="date"
                  id="release_gte"
                  name="date"
                  required
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                />
              </div>
              <div className="date_filter">
                <p>to</p>
                <input
                  onChange={handleSubmitDataLte}
                  type="date"
                  id="release_lte"
                  name="date"
                  required
                  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
                />
              </div>
            </div>
            <button onClick={filterFilm} className="search_film_button">
              <h2>Search</h2>
            </button>
          </div>
          <div className="film_panel">
            <div className="cards_films">
              {popularFilms.map((movie) => {
                return <CardFilm key={movie.id} movie={movie} />;
              })}
              {filteredFilms.map((movie) => {
                return <CardFilm key={movie.id} movie={movie} />;
              })}
            </div>
            <button onClick={loadFilms} className="load_films_button">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
