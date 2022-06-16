import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Films.css";
import Genre from "../Genre/Genre";
import { getFilteredMovies, getUpcomingMovies } from "../../API";
import { Helmet } from 'react-helmet'
import { MemoFilmCard } from "../CardFilmMemo/CardFilmMemo";

const genres = [
  { id: "28", value: "Action" },
  { id: "12", value: "Adventure" },
  { id: "16", value: "Animation" },
  { id: "35", value: "Comedy" },
  { id: "80", value: "Crime" },
  { id: "99", value: "Documentary" },
  { id: "18", value: "Drama" },
  { id: "10751", value: "Family" },
  { id: "14", value: "Fantasy" },
  { id: "36", value: "History" },
  { id: "27", value: "Horror" },
  { id: "10402", value: "Music" },
  { id: "9648", value: "Mystery" },
  { id: "10749", value: "Romance" },
  { id: "878", value: "Science Fiction" },
  { id: "53", value: "Thriller" },
  { id: "10752", value: "War" },
  { id: "37", value: "Western" },
];

export default function Films() {
  useEffect(() => {
    getUpcomingMovies().then((movies) => {
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
    if (!sort) {setSort("rating.desc");}
    getFilteredMovies(
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
    setFilteredFilms([]);
    setPopularFilms([]);
    e.preventDefault();
    getFilteredMovies(
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
  
  const [selectedGenre, setSelectedGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [dataLte, setDataLte] = useState("");
  const [dataGte, setDataGte] = useState("");
  const [filteredFilms, setFilteredFilms] = useState([]);
  const [popularFilms, setPopularFilms] = useState([]);
  const [sort, setSort] = useState("");

  const addSelectedGenre = (genre) => {
    setSelectedGenre([...selectedGenre, genre]);
  };
  const removeSelectedGenre = (genre) => {
    const index = selectedGenre.indexOf(genre);
    selectedGenre.splice(index,1)
    setSelectedGenre(selectedGenre);
  };
  return (
    <div>

      <div className="films-wrapper">
      <Helmet>
        <title>Films</title>
      </Helmet>
        <Header />
        <div className="films-wrapper__content">
          <div className="films-panel">
            <div className="films-panel__title">
              <h2>Films</h2>
            </div>
            <div className="filter-panel">
              <div className="filter-panel__sort">
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
                </select>
              </div>
              <div className="filter-genre">
                <h3>Genre</h3>
                {genres.map(({ id, value }) => (
                  <Genre
                    key={id}
                    genreId={id}
                    genreName={value}
                    selectedGenre={selectedGenre}
                    addSelectedGenre={addSelectedGenre}
                    removeSelectedGenre={removeSelectedGenre}
                  />
                ))}
              </div>
              <h3>Release Date</h3>
              <div className="filter-date">
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
              <div className="filter-date">
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
            <button onClick={filterFilm} className="search-film-button">
              <h2>Search</h2>
            </button>
          </div>
          <div className="films">
            <div className="cards_films">
              {popularFilms.map((movie) => {
                return <MemoFilmCard key={movie.id} movieKey={movie.id} moviePosterPath={movie.poster_path} movieTitle={movie.title} moviePlot={movie.overview} />;
              })}
              {filteredFilms.map((movie) => {
                return <MemoFilmCard key={movie.id} movieKey={movie.id} moviePosterPath={movie.poster_path} movieTitle={movie.title} moviePlot={movie.overview}/>;
              })}
            </div>
            <button onClick={loadFilms} className="load-films-button">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer />{" "}
    </div>
  );
}
