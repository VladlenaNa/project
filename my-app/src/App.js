import './App.css';
import Main from './components/Main/Main';
import { Routes, Route } from "react-router-dom";
import Films from './components/Films/Films';
import Search from './components/Search/Search';
import TMDB from './components/FooterNavigation/TMDB';
import Contact from './components/FooterNavigation/Contact';
import General from './components/FAQMenu/General';
import TVShows from './components/TVShows/TVShows';
import Guidelines from './components/FooterNavigation/Guidelines';
import Terms from './components/FooterNavigation/Terms';
import Api from './components/FooterNavigation/Api';

const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
export async function getPopularMovies() {
	try {
		const response = await fetch('https://api.themoviedb.org/3/trending/movie/week?api_key='+apiKey);
		return (await response.json()).results;
	  } catch (err) {
		alert(err);
	  }
}

export async function getUpcomingMovies() {
	try {
		const response = await fetch('https://api.themoviedb.org/3/movie/upcoming/?api_key='+apiKey);
		return (await response.json()).results;
	} catch(err) {
		alert(err);
	}
}

export async function getTrendingMovies() {
	try {
		const response = await fetch('https://api.themoviedb.org/3/trending/movie/day?api_key='+apiKey);
		return (await response.json()).results;
	} catch(err) {
		alert(err);
	}
}

export async function searchMovie(title) {
	try {
		const response = await fetch('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+title);
		return (await response.json()).results;
	} catch(err) {
		alert(err);
	}
}

export async function getFilteredMovies(genres, page, filter, releaseDateGte, releaseDateLte) {
	try {
		const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey+'&with_genres='+genres+'&page='+page+'&sort_by='+filter+releaseDateGte+releaseDateLte);
		return (await response.json()).results;
	} catch(err) {
		alert(err);
		return [];
	}
}

export async function getFilteredTVShows(genres, page, filter, releaseDateGte, releaseDateLte) {
	try {
		const response = await fetch('https://api.themoviedb.org/3/discover/tv?api_key='+apiKey+'&with_genres='+genres+'&page='+page+'&sort_by='+filter+releaseDateGte+releaseDateLte);
		return (await response.json()).results;
	} catch(err) {
		alert(err);
	}
}

export async function getPopularTVShows() {
	try {
		const response = await fetch('https://api.themoviedb.org/3/tv/popular/?api_key='+apiKey);
		return (await response.json()).results;
	} catch(err) {
		alert(err);
	}
}

function App() {
  //методы апи
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/Films' element={<Films/>}/>
      <Route path='/TvShow' element={<TVShows/>}/>
      <Route path='/Search' element={<Search/>}/>
      <Route path='/TMDB' element={<TMDB/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/General' element={<General/>}/>
      <Route path='/Main' element={<Main/>}/>
      <Route path='/Guidelines' element={<Guidelines/>}/>
      <Route path='/Terms' element={<Terms/>}/>
      <Route path='/Api' element={<Api/>}/>
    </Routes>
  );
}

export default App;


