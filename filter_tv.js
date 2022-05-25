fill()
let tvShows = []
let page = 1
/**
 * Заполение раздела ТВ шоу
 */
async function fill() {
    data = await getPopularTVShows()
    tvShows = tvShows.concat(data)
    data.map((show) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + show.poster_path
        const divCard = document.createElement('div')
        divCard.className = "card"
        divCard.innerHTML += '<img width ="150" height ="200" src=' + img_path + '> </img>' + '<a class ="film_a" href="#">' + show.name +'</a'
        document.querySelector(".cards_films").appendChild(divCard)
    })	
}

let flag = true
let genres = []
let filmGenre = document.querySelector(".by_genre");

filmGenre.addEventListener('click', (e)=>{
    if (e.target.style.backgroundColor=="") {
        e.target.parentNode.style.backgroundColor = "rgb(1, 180, 228)";
        e.target.style.backgroundColor = "rgb(1, 180, 228)";
        flag = false
        genres.push(e.target.id)
    }
    else {
            e.target.parentNode.style.backgroundColor = "";
            e.target.style.backgroundColor = "";
            flag = true
            delete genres[genres.indexOf(e.target.id)]
    }
})

let searchBtn = document.querySelector(".search_film_button")
searchBtn.addEventListener('click', (e)=>{
    search()
})

/**
 * Поиск ТВ шоу выбранных жанров
 */
function search() {
    page = 1
    link = ""
    for (let i=0;i<genres.length-1;i++) {
        link += genres[i] + ','
    }
    link+= genres[genres.length-1]
    films = []
    filmFilter(genres, 1)
    document.querySelector(".cards_films").innerHTML = ""
}

let loadFilmsBtn = document.querySelector(".load_films_button")

loadFilmsBtn.addEventListener('click', (e)=>{
    if (genres !==[]) {
        console.log(page)
        page +=1
        filmFilter(genres, page.toString())
    }
})

/**
 * Получение данных с фильтров ТВ шоу и заполнение
 * @param {*} genres Жанры
 * @param {*} page Номер страницы данных
 */
async function filmFilter(genres,page) {
    if (document.getElementById("release_gte").value!="")
        releaseDateGte = '&primary_release_date.gte=' + document.getElementById("release_gte").value
    else
        releaseDateGte = ""
    if (document.getElementById("release_lte").value!="")
        releaseDateLte = '&primary_release_date.lte' + document.getElementById("release_lte").value
    else 
        releaseDateLte = ""
    if (genres.length==0) 
        genres = [9648]
    if (document.querySelector(".same-as-selected")==null)
        filter = "popularity.desc"
    else 
        filter = document.querySelector(".same-as-selected").id
    data = await getFilteredTVShows(genres, page, filter, releaseDateGte, releaseDateLte)
    if (data.length==0) {
        let msg = document.createElement('h3')
        msg.className = "message"
        msg.innerHTML = "Sorry, there is no result:("
        document.querySelector('.cards_films').appendChild(msg)
    }
    tvShows = tvShows.concat(data)
    console.log(data)
    data.map((show) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + show.poster_path
        if (show.poster_path!=null) {
            const divCard = document.createElement('div')
            divCard.className = "card"
            divCard.innerHTML += '<img width ="150" height ="200" src=' + img_path + '> </img>' + '<a class = "film_a" href="#">' + show.name +'</a'
            document.querySelector(".cards_films").appendChild(divCard)
        }
    })
}

let x, i, j, selElmnt, a, b, c;
x = document.getElementsByClassName("sort_select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  a = document.createElement("DIV");
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
  var x, y, i, arrNo = [];
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

let modal = document.getElementById("myModal");
let btn = document.querySelectorAll('.cards_films')
let span = document.getElementsByClassName("close")[0];

span.addEventListener('click', (e)=>{
    modal.style.display = "none";
    if (document.querySelector(".modal-content").innerHTML!="")
        document.querySelector(".modal-content").innerHTML = ""
})

modal.addEventListener('click', (e)=>{
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

tvShowA = document.querySelector('.cards_films')
tvShowA.addEventListener('click',(e)=> {
    if (e.target.className == "film_a") 
        showModal(e.target.innerHTML) })
/**
 * Поиск описания и постера кликнутой тв-программы
 * @param {*} title название/ключевое слово
 * @returns массив из описания и постера
 */
function getPlot(title) {
    console.log(tvShows)
    for (let tvShow of tvShows) {
    if (tvShow.name == title) {
		if (tvShow.backdrop_path==null) {
			return [tvShow.overview, tvShow.poster_path] }
		else
			return [tvShow.overview, tvShow.backdrop_path]
	}
    }
}

