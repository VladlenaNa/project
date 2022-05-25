fill()
let movies = []
let page=0
/**
 * Заполнение раздела найденных фильмов
 */
async function fill() {
    data = await getUpcomingMovies()
    if (data) {
        movies = movies.concat(data)
        data.map((movie) => {
            imgPath = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
            const divCard = document.createElement('div')
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
            document.querySelector(".cards_films").appendChild(divCard)
        })	
    }
}

let flag = true
let genres = []

/**
 * Заполнение выбранных жанров 
 * @param {*} e название выбранного жанра
 */
function setGenre(e) {
    if (e.style.backgroundColor=="") {
        e.parentNode.style.backgroundColor = "rgb(1, 180, 228)";
        e.style.backgroundColor = "rgb(1, 180, 228)";
        flag = false
        genres.push(e.id) }
    else {
        e.parentNode.style.backgroundColor = "";
        e.style.backgroundColor = "";
        flag = true
        delete genres[genres.indexOf(e.id)] }
    console.log(genres)
}

genre = document.querySelector('.by_genre')
genre.addEventListener('click',(e)=> {
    if (e.target.className == "genre")
        setGenre(e.target) })



let searchBtn = document.querySelector(".search_film_button")
searchBtn.onclick = function() {
    search()
}
/**
 * Поиск фильмов выбранных жанров
 */
function search() {
    page = 1
    link = ""
    for (let i=0;i<genres.length-1;i++) {
        link += genres[i] + ','
    }
    link+= genres[genres.length-1]
    movies = []
    filmFilter(genres, 1)
    document.querySelector(".cards_films").innerHTML = ""
}

let loadFilmsBtn = document.querySelector(".load_films_button")
loadFilmsBtn.onclick = function() {
    if (genres !==[]) {
        console.log(genres)
        page +=1
        filmFilter(genres, page.toString())
    }
    else 
        fill()
}

/**
 * Получение данных с фильтров фильмов и заполнение
 * @param {*} genres Жанры
 * @param {*} page Номер страницы данных
 */
async function filmFilter(genres, page) {
    if (document.getElementById("release_gte").value!="")
        releaseDateGte = '&primary_release_date.gte=' + document.getElementById("release_gte").value
    else
        releaseDateGte = ""
    if (document.getElementById("release_lte").value!="")
        releaseDateLte = '&primary_release_date.lte=' + document.getElementById("release_lte").value
    else 
        releaseDateLte = ""
    if (genres.length==0) 
        genres = [14]
    if (document.querySelector(".same-as-selected")==null)
        filter = "popularity.desc"
    else 
        filter = document.querySelector(".same-as-selected").id
    data = await getFilteredMovies(genres, page, filter, releaseDateGte, releaseDateLte)
    if (data.length==0) {
        let msg = document.createElement('h3')
        msg.className = "message"
        msg.innerHTML = "Sorry, there is no result:("
        document.querySelector('.cards_films').appendChild(msg)
        data = []
    }
    if (data) {
        movies= movies.concat(data)
        data.map((movie) => {
            imgPath = 'https://image.tmdb.org/t/p/original/' + movie.poster_path
            if (movie.poster_path!=null) {
                const divCard = document.createElement('div')
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
                document.querySelector(".cards_films").appendChild(divCard)
            }
        })
    }
}
getGenre()
/**
 * Обработка кнопок с жанрами
 */
function getGenre() {
        var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("sort_select");
    for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("div");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
                this.id = s.options[i].id
                s.selectedIndex = i;
                h.innerHTML = this.innerHTML;
                y = this.parentNode.getElementsByClassName("same-as-selected");
                for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
                }
                this.setAttribute("class", "same-as-selected");
                break;
            }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
    let x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
        arrNo.push(i)
        } else {
        y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
        }
    }
    }
    document.addEventListener("click", closeAllSelect);
}

let modal = document.getElementById("myModal");
let btn = document.querySelectorAll('.cards_films')
let span = document.getElementsByClassName("close")[0];

span.addEventListener('click', (e)=> {
    modal.style.display = "none";
    if (document.querySelector(".modal-content").innerHTML!="")
        document.querySelector(".modal-content").innerHTML = ""
})

modal.addEventListener('click', (e)=> {
    modal.style.display = "none";
    if (document.querySelector(".modal-content").innerHTML!="")
        document.querySelector(".modal-content").innerHTML = ""
})

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

filmA = document.querySelector('.cards_films')
filmA.addEventListener('click',(e)=> {
    if (e.target.className == "film_a") 
        showModal(e.target.innerHTML) })

/**
 * Поиск сюжета и постера кликнутого фильма
 * @param {*} title название/ключевое слово
 * @returns массив из сюжета и постера
 */
function getPlot(title) {
    for (let movie of movies) {
    if (movie.title == title)
        if (movie.backdrop_path==null)
            return [movie.overview, movie.poster_path]
        else
            return [movie.overview, movie.backdrop_path]
    }
}

