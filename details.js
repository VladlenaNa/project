let modal = document.getElementById("myModal");
let btn = document.querySelectorAll('.popular_content')
let span = document.getElementsByClassName("close")[0]

let title_film = ""
let found_films = []
let movies = []
let btn_search = document.getElementsByClassName("search_button")[0]
let film_modal = document.getElementById("films_modal");
let film_span = document.getElementsByClassName("films_modal_close")[0];
let input_film = document.getElementsByClassName("input_name")[0]

fillUpcomingMovies()
fillPopularMovies()
fillTrendingMovies()
/**
 * Заполнение раздела "Скоро в кино"
 */
async function fillUpcomingMovies() {
    let data = await getUpcomingMovies()
    movies = movies.concat(data)
    data.map((movie) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        div_card = document.createElement('div')
        div_card.className = "card"
        div_card.innerHTML += '<img width ="150" height ="200" src=' + img_path + '> </img>' + '<a class ="film_a" href="#">' + movie.title +'</a'
        document.querySelector(".cinema_content").appendChild(div_card)
    })	
}
/**
 * Заполнение раздела "Популярные фильмы"
 */
async function fillPopularMovies() {
    let data = await getPopularMovies()
    movies = movies.concat(data)
    data.map((movie) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        div_card = document.createElement('div')
        div_card.className = "card"
        div_card.innerHTML += '<img width ="150" height ="200" src=' + img_path + '> </img>' + '<a class ="film_a" href="#">' + movie.title +'</a'
        document.querySelector(".popular_content").appendChild(div_card)
    })	
}
/**
 * Заполнение раздела трендовых фильмов
 */
async function fillTrendingMovies() {
    let data = await getTrendingMovies()
    // data = data.slice(3,8)
    console.log(data)
    movies = movies.concat(data)
    data.map((movie) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        div_card = document.createElement('div')
        div_card.className = "trailer"
        div_card.innerHTML += '<img width ="150" height ="200" src=' + img_path + '> </img>' + '<a class = "trend_a" href="#">' + movie.title +'</a'
        document.querySelector(".trailers_content").appendChild(div_card)
    })	
}

span.addEventListener('click',(e)=> {
    modal.style.display = "none";
    document.querySelector(".modal-content h2").remove()
    document.querySelector(".modal-content p").remove()
    document.querySelector(".modal-content img").remove()
 })

 window.addEventListener('click',(e)=> {
    if (e.target == modal) {
        modal.style.display = "none";
        document.querySelector(".modal-content h2").remove()
        document.querySelector(".modal-content p").remove()
        document.querySelector(".modal-content img").remove()
      }
 })

document.addEventListener('click', (e)=> {
    if(e.target && e.target.className== 'film_a' || (e.target && e.target.className== 'trend_a' )){
        modal.style.display = "block"
        title = document.createElement('h2')
        title.innerHTML = e.target.innerHTML
        plot = document.createElement('p')
        film_img = document.createElement('img')
        film_details = get_plot(e.target.innerHTML)
        overview = film_details[0] 
        film_img.src = 'https://image.tmdb.org/t/p/original/' + film_details[1] 
        document.querySelector(".modal-content").appendChild(title)
        document.querySelector(".modal-content").append(film_img)
        document.querySelector(".modal-content").appendChild(plot)
        plot.innerHTML = overview
     }
 })

 /**
  * Поиск сюжета и постера кликнутого фильма
  * @param {*} title название кликнутого фильма
  * @returns Описание сюжета и постер
  */
 function get_plot(title) {
     for (let movie of movies) {
        if (movie.title == title)
            return [movie.overview, movie.backdrop_path]
     }
 }

input_film.oninput = function(){
    title_film = input_film.value
    console.log(title_film)
}

btn_search.addEventListener('click', (e) => {
    if ((e.target && e.target.className== 'search_button') || (e.target.className=="fa fa-search")){
        film_modal.style.display = "flex"
        search_film(title_film)
     }
 })
film_span.addEventListener('click', (e)=> {
    film_modal.style.display = "none";
    document.querySelector(".films_modal_content").innerHTML=""
})

window.addEventListener('click',(e)=> {
    if (e.target == film_modal) {
        film_modal.style.display = "none";
        document.querySelector(".films_modal_content").innerHTML=""
}})

/**
 * Заполнение модального окна с найденными фильмами
 * @param {*} title название/ключевое 
 */
async function search_film(title) {
    found_films = await searchMovie(title)
    if (found_films.length==0) {
        let msg = document.createElement('h3')
        msg.className = "message"
        msg.innerHTML = "Sorry, there is no result:("
        document.querySelector('.films_modal_content').appendChild(msg)
    }
    found_films.map((film) =>{
        div_film = document.createElement('div')
        div_film.className = "div_film"
        title = document.createElement('h2')
        title.innerHTML = film.title
        plot = document.createElement('p')
        film_img = document.createElement('img')
        film_details = film.overview
        film_img.src = 'https://image.tmdb.org/t/p/original/' + film.poster_path
        div_film.appendChild(title)
        div_film.appendChild(film_img)
        div_film.appendChild(plot)
        document.querySelector(".films_modal_content").appendChild(div_film)
        plot.innerHTML = film.overview
    })
}
