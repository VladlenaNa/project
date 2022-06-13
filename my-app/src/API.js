const API_KEY = "b21ca73525eac0f28ecf0f8ae09a9306";

export async function getPopularMovies() {
	return fetch('https://api.themoviedb.org/3/movie/popular/?api_key='+API_KEY)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}

export async function getPopularTVShows() {
	return fetch('https://api.themoviedb.org/3/tv/popular/?api_key='+API_KEY)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}

export async function getFilteredTVShows(genres, page, filter, releaseDateGte, releaseDateLte) {
	return fetch('https://api.themoviedb.org/3/discover/tv?api_key='+API_KEY+'&with_genres='+genres+'&page='+page+'&sort_by='+filter+releaseDateGte+releaseDateLte)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => alert(err));
}

export async function getUpcomingMovies() {
	return fetch('https://api.themoviedb.org/3/movie/upcoming/?api_key='+API_KEY)
	.then(response => response.json())
	.then(data => {
        return data.results
	})
	.catch(err => alert(err));
}

export async function getFilteredMovies(genres, page, filter, releaseDateGte, releaseDateLte) {
	page = Number(page)
	return fetch('https://api.themoviedb.org/3/discover/movie?api_key='+API_KEY+'&with_genres='+genres+'&page='+page+'&sort_by='+filter+releaseDateGte+releaseDateLte)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => {
		alert(err)
		return []
	});
}

export async function searchMovie(title) {
	return fetch('https://api.themoviedb.org/3/search/movie?api_key='+API_KEY+'&language=en-US&query='+title)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => alert(err))
}

export async function getTrendingMovies() {
	return fetch('https://api.themoviedb.org/3/trending/movie/week?api_key='+API_KEY)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}