
/**
 * Запрос популярных фильмов
 * @returns Массив популярных фильмов
 */
async function getPopularMovies() {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/movie/popular/?api_key='+apiKey)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}
/**
 * Запрос популярных ТВ шоу
 * @returns Массив популярных ТВ шоу
 */
async function getPopularTVShows() {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/tv/popular/?api_key='+apiKey)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}
/**
 * Фильтрация фильмов
 * @param {*} genres Жанр фильма
 * @param {*} page Номер страницы данных
 * @param {*} filter Тип сортировки(по популярности, рейтингу и дате премьеры)
 * @param {*} releaseDateGte От даты премьеры
 * @param {*} releaseDateLte До даты премьеры
 * @returns Массив фильмов соотвествующий параметрам
 */
async function getFilteredTVShows(genres, page, filter, releaseDateGte, releaseDateLte) {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/discover/tv?api_key='+apiKey+'&page=1&with_genres='+genres+'&page='+page+'&sort_by='+filter+releaseDateGte+releaseDateLte)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => alert(err));
}
/**
 * Запрос фильмов, скоро выходяших в кино
 * @returns Список фильмов скоро в кино
 */
async function getUpcomingMovies() {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/movie/upcoming/?api_key='+apiKey)
	.then(response => response.json())
	.then(data => {
        return data.results
	})
	.catch(err => alert(err));
}
/**
 * Фильтрация ТВ шоу
 * @param {*} genres Жанр ТВ программы
 * @param {*} page Номер страницы данных
 * @param {*} filter Тип сортировки(по популярности, рейтингу и дате премьеры)
 * @param {*} releaseDateGte От даты выхода
 * @param {*} releaseDateLte До даты выхода
 * @returns 
 */
async function getFilteredMovies(genres, page, filter, releaseDateGte, releaseDateLte) {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey+'&page=1&with_genres='+genres+'&page='+page+'&sort_by='+filter+releaseDateGte+releaseDateLte)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => {
		alert(err)
		return []
	});
}
/**
 * Поиск фильма по названию/ключевому слову
 * @param {*} title Название фильма/ключевое слово
 * @returns Массив фильмов с данным названием/содержащим ключевое слово
 */
async function searchMovie(title) {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+title)
    .then(response => response.json())
    .then(data => {
        return data.results
    })
    .catch(err => alert(err))
}

async function getTrendingMovies() {
	const apiKey = "b21ca73525eac0f28ecf0f8ae09a9306"
	return fetch('https://api.themoviedb.org/3/trending/movie/week?api_key='+apiKey)
	.then(response => response.json())
	.then(data => {
		return data.results
	})
	.catch(err => alert(err));
}