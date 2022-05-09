

let films = []
get_popular_films()
get_upcoming_films()
/**
 * 
 * @param {*} films 
 * @param {*} selector 
 */
function add_films(films, selector) {
	films.map((movie) => {
		img_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
		const div_card = document.createElement('div')
		div_card.className = "cards"
		div_card.innerHTML += '<img width ="150" height ="200" src=' + img_path + '> </img>' + '<a href="#" class="film_a">' + movie.title +'</a'
		document.querySelector(selector).appendChild(div_card)
	})
}

function get_popular_films() {
	fetch('https://api.themoviedb.org/3/movie/popular/?api_key=b21ca73525eac0f28ecf0f8ae09a9306')
	.then(response => response.json())
	.then(data => {
		add_films(data.results, ".popular_content")
		films = data.results
	})
	.catch(err => console.error(err));
}

function get_upcoming_films() {
	fetch('https://api.themoviedb.org/3/movie/upcoming/?api_key=b21ca73525eac0f28ecf0f8ae09a9306')
	.then(response => response.json())
	.then(data => {
		films = films.concat(data.results)
		add_films(data.results, ".cinema_content")
	})
	.catch(err => console.error(err));
}
	
	





	