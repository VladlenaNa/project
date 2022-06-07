import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import Footer from "../Footer/Footer";
import "./Main.css";
import { getPopularMovies } from "../../App";
import PopularFilmsSection from "../PopularFilmsSection/PopularFilmsSection";
import { getUpcomingMovies } from "../../App";
import UpcomingFilmsSection from "../UpcomingFilmsSection/UpcomingFilmsSection";
import { getTrendingMovies } from "../../App";
import TrendingFilmsSection from "../TrendingFilmsSection/TrendingFilmsSection";

export default function Main() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularLoaded, setPopularLoaded] = useState(false);

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [upcomingLoaded, setUpcomingLoaded] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingLoaded, setTrendingLoaded] = useState(false);

  useEffect(() => {
    getPopularMovies().then((movies) => {
      setPopularMovies(movies);
      setPopularLoaded(true);
    });
  }, [popularLoaded]);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setUpcomingMovies(movies);
      setUpcomingLoaded(true);
    });
  }, [upcomingLoaded]);

  useEffect(() => {
    getTrendingMovies().then((movies) => {
      setTrendingMovies(movies);
      setTrendingLoaded(true);
    });
  }, [trendingLoaded]);

  return (
    <div className="main">
      <Header />
      <Search />
      <PopularFilmsSection movies={popularMovies} />
      <UpcomingFilmsSection movies={upcomingMovies} />
      <TrendingFilmsSection movies={trendingMovies} />
      <Footer />
    </div>
  );
}
