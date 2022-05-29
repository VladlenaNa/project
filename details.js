let modal = document.getElementById("myModal");
let closeBtn = document.querySelectorAll('.popular_content')
let closeSpan = document.getElementsByClassName("close")[0]
let filmTitle = ""
let foundFilms = []
let movies = []
let btnSearch = document.getElementsByClassName("search_button")[0]
let filmModal = document.getElementById("films_modal");
let filmSpan = document.getElementsByClassName("films_modal_close")[0];
let filmInput = document.getElementsByClassName("input_name")[0]

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
        imgPath = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        divCard = document.createElement('div')
        divCard.className = "card"
        img = document.createElement('img')
        img.width = '150'
        img.height = '200'
        img.src = imgPath
        titleA = document.createElement('a')
        titleA.href = "#"
        titleA.text = movie.title
        titleA.className = "film_a"
        divCard.appendChild(img)
        divCard.appendChild(titleA)
        document.querySelector(".cinema_content").appendChild(divCard)
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
        imgPath = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        divCard = document.createElement('div')
        divCard.className = "card"
        img = document.createElement('img')
        img.width = '150'
        img.height = '200'
        img.src = imgPath
        titleA = document.createElement('a')
        titleA.href = "#"
        titleA.text = movie.title
        titleA.className = "film_a"
        divCard.appendChild(img)
        divCard.appendChild(titleA)
        document.querySelector(".popular_content").appendChild(divCard)
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
        imgPath = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
        divCard = document.createElement('div')
        divCard.className = "trailer"
        img = document.createElement('img')
        img.width = '150'
        img.height = '200'
        img.src = imgPath
        titleA = document.createElement('a')
        titleA.href = "#"
        titleA.text = movie.title
        titleA.className = "film_a"
        divCard.appendChild(img)
        divCard.appendChild(titleA)
        document.querySelector(".trailers_content").appendChild(divCard)
    })	
}

closeSpan.addEventListener('click',(e)=> {
    modal.style.display = "none";
    document.querySelector(".modal-content h2").remove()
    document.querySelector(".modal-content p").remove()
    document.querySelector(".modal-content img").remove()
 })

 modal.addEventListener('click',(e) => {
    modal.style.display = "none";
    document.querySelector(".modal-content h2").remove()
    document.querySelector(".modal-content p").remove()
    document.querySelector(".modal-content img").remove()
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
    filmImg = document.createElement('img')
    filmDetails = getPlot(e)
    overview = filmDetails[0] 
    filmImg.src = 'https://image.tmdb.org/t/p/original/' + filmDetails[1] 
    document.querySelector(".modal-content").appendChild(title)
    document.querySelector(".modal-content").append(filmImg)
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
 function getPlot(title) {
    if (movies) {
        for (let movie of movies) {
            if (movie.title == title)
                return [movie.overview, movie.backdrop_path]
        }
    }
 }

filmInput.oninput = function(){
    filmTitle = filmInput.value
}

btnSearch.addEventListener('click', (e) => {
    if ((e.target && e.target.className== 'search_button') || (e.target.className=="fa fa-search")){
        filmModal.style.display = "flex"
        searchFilm(filmTitle)
     }
 })
filmSpan.addEventListener('click', (e)=> {
    filmModal.style.display = "none";
    document.querySelector(".films_modal_content").innerHTML=""
})

filmModal.addEventListener('click', (e)=> {
    filmModal.style.display = "none";
    document.querySelector(".films_modal_content").innerHTML=""
})
// window.addEventListener('click',(e)=> {
//     if (e.target == filmModal) {
//         filmModal.style.display = "none";
//         document.querySelector(".films_modal_content").innerHTML=""
// }})

/**
 * Заполнение модального окна с найденными фильмами
 * @param {*} title название/ключевое 
 */
async function searchFilm(title) {
    foundFilms = await searchMovie(title)
    if (foundFilms.length==0) {
        let msg = document.createElement('h3')
        msg.className = "message"
        msg.innerHTML = "Sorry, there is no result:("
        document.querySelector('.films_modal_content').appendChild(msg)
    }
    if (foundFilms) {
        foundFilms.map((film) =>{
            divFilm = document.createElement('div')
            divFilm.className = "divFilm"
            title = document.createElement('h2')
            title.innerHTML = film.title
            plot = document.createElement('p')
            filmImg = document.createElement('img')
            filmDetails = film.overview
            if (film.poster_path)
                filmImg.src = 'https://image.tmdb.org/t/p/original/' + film.poster_path
            else 
                filmImg.src = "img/logo.png"
            divFilm.appendChild(title)
            divFilm.appendChild(filmImg)
            divFilm.appendChild(plot)
            document.querySelector(".films_modal_content").appendChild(divFilm)
            plot.innerHTML = film.overview
        })
    }
}
