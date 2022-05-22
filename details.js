let modal = document.getElementById("myModal");
let closeBtn = document.querySelectorAll('.popular_content')
let closeSpan = document.getElementsByClassName("close")[0]
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
    try {
    let data = await getUpcomingMovies()
    movies = movies.concat(data)
    if (data) {
    data.map((movie) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        div_card = document.createElement('div')
        div_card.className = "card"
        img = document.createElement('img')
        img.width = '150'
        img.height = '200'
        img.src = img_path
        titleA = document.createElement('a')
        titleA.href = "#"
        titleA.text = movie.title
        titleA.className = "film_a"
        div_card.appendChild(img)
        div_card.appendChild(titleA)
        document.querySelector(".cinema_content").appendChild(div_card)
    })	}
    }
    catch (e) {
        alert(e.message)
    }
}
/**
 * Заполнение раздела "Популярные фильмы"
 */
async function fillPopularMovies() {
    try {
    let data = await getPopularMovies()
    movies = movies.concat(data)
    if (data) {
    data.map((movie) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        div_card = document.createElement('div')
        div_card.className = "card"
        img = document.createElement('img')
        img.width = '150'
        img.height = '200'
        img.src = img_path
        titleA = document.createElement('a')
        titleA.href = "#"
        titleA.text = movie.title
        titleA.className = "film_a"
        div_card.appendChild(img)
        div_card.appendChild(titleA)
        document.querySelector(".popular_content").appendChild(div_card)
    })	}
    }
    catch (e) {
        alert(e.message)
    }
}
/**
 * Заполнение раздела трендовых фильмов
 */
async function fillTrendingMovies() {
    let data = await getTrendingMovies()
    movies = movies.concat(data)
    data.map((movie) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        div_card = document.createElement('div')
        div_card.className = "trailer"
        img = document.createElement('img')
        img.width = '150'
        img.height = '200'
        img.src = img_path
        titleA = document.createElement('a')
        titleA.href = "#"
        titleA.text = movie.title
        titleA.className = "film_a"
        div_card.appendChild(img)
        div_card.appendChild(titleA)
        document.querySelector(".trailers_content").appendChild(div_card)
    })	
}

closeSpan.addEventListener('click',(e)=> {
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
/**
 * Функция заполнения модального окна
 * @param {*} e название кликнутого фильма
 */
function showModal(e){
    modal.style.display = "block"
    title = document.createElement('h2')
    title.innerHTML = e
    plot = document.createElement('p')
    film_img = document.createElement('img')
    film_details = get_plot(e)
    overview = film_details[0] 
    film_img.src = 'https://image.tmdb.org/t/p/original/' + film_details[1] 
    document.querySelector(".modal-content").appendChild(title)
    document.querySelector(".modal-content").append(film_img)
    document.querySelector(".modal-content").appendChild(plot)
    plot.innerHTML = overview
}

filmAPopular = document.querySelector('.popular_content')
filmAPopular.addEventListener('click',(e)=> {
    if (e.target.className == "film_a")
        showModal(e.target.innerHTML) })

filmAUpcoming = document.querySelector('.cinema_content')
filmAUpcoming.addEventListener('click',(e)=> {
    if (e.target.className == "film_a")
        showModal(e.target.innerHTML) })

trendA = document.querySelector('.trailers_content')
trendA.addEventListener('click',(e)=> {
    if (e.target.className == "film_a")
        showModal(e.target.innerHTML) })

 /**
  * Поиск сюжета и постера кликнутого фильма
  * @param {*} title название кликнутого фильма
  * @returns Описание сюжета и постер
  */
 function get_plot(title) {
    if (movies) {
        for (let movie of movies) {
            if (movie.title == title)
                return [movie.overview, movie.backdrop_path]
        }
    }
 }

input_film.oninput = function(){
    title_film = input_film.value
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
    if (found_films) {
        found_films.map((film) =>{
            div_film = document.createElement('div')
            div_film.className = "div_film"
            title = document.createElement('h2')
            title.innerHTML = film.title
            plot = document.createElement('p')
            film_img = document.createElement('img')
            film_details = film.overview
            if (film.poster_path)
                film_img.src = 'https://image.tmdb.org/t/p/original/' + film.poster_path
            else 
                film_img.src = "img/logo.png"
            div_film.appendChild(title)
            div_film.appendChild(film_img)
            div_film.appendChild(plot)
            document.querySelector(".films_modal_content").appendChild(div_film)
            plot.innerHTML = film.overview
        })
    }
}
