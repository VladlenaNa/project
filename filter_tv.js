fill()
let tv_shows = []

/**
 * Заполение раздела ТВ шоу
 */
async function fill() {
    data = await getPopularTVShows()
    console.log(data)
    data.map((show) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + show.poster_path
        const div_card = document.createElement('div')
        div_card.className = "card"
        div_card.innerHTML += '<img width ="150" height ="200" src=' + img_path + '> </img>' + '<a class ="film_a" href="#">' + show.name +'</a'
        document.querySelector(".cards_films").appendChild(div_card)
    })	
}

let flag = true
let genres = []

window.addEventListener('click', (e)=>{
    if (e.target.matches('.genre')) {
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
    }
})

let search_btn = document.getElementsByClassName("search_film_button")[0]

search_btn.addEventListener('click', (e)=>{
    let content = document.querySelector(".cards_films")
    let films = search()
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
    film_filter(genres, 1)
    document.querySelector(".cards_films").innerHTML = ""
}

let load_films_btn = document.getElementsByClassName("load_films_button")[0]

load_films_btn.addEventListener('click', (e)=>{
    if (genres !==[]) {
        page +=1
        film_filter(genres, page.toString())
    }
    else 
        fill()
})

/**
 * Получение данных с фильтров ТВ шоу и заполнение
 * @param {*} genres Жанры
 * @param {*} page Номер страницы данных
 */
async function film_filter(genres,page) {
    if (document.getElementById("release_gte").value!="")
        release_date_gte = '&primary_release_date.gte=' + document.getElementById("release_gte").value
    else
        release_date_gte = ""
    if (document.getElementById("release_lte").value!="")
        release_date_lte = '&primary_release_date.lte' + document.getElementById("release_lte").value
    else 
        release_date_lte = ""
    if (genres == []) 
        genres = [28]
    if (document.querySelector(".same-as-selected")==null)
        filter = "popularity.desc"
    else 
        filter = document.querySelector(".same-as-selected").id
    data = await getFilteredTVShows(genres, page, filter, release_date_gte, release_date_lte)
    if (data.length==0) {
        let msg = document.createElement('h3')
        msg.className = "message"
        msg.innerHTML = "Sorry, there is no result:("
        document.querySelector('.cards_films').appendChild(msg)
    }
    tv_shows = tv_shows.concat(data)
    data.map((show) => {
        img_path = 'https://image.tmdb.org/t/p/original/' + show.poster_path
        if (show.poster_path!=null) {
            const div_card = document.createElement('div')
            div_card.className = "card"
            div_card.innerHTML += '<img width ="150" height ="200" src=' + img_path + '> </img>' + '<a class = "film_a" href="#">' + show.name +'</a'
            document.querySelector(".cards_films").appendChild(div_card)
        }
    })
}

var x, i, j, selElmnt, a, b, c;
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

document.addEventListener('click', (e)=>{
    if(e.target && e.target.className== 'film_a'){
        console.log(e.target.innerHTML)
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
 * Поиск описания и постера кликнутой тв-программы
 * @param {*} title название/ключевое слово
 * @returns массив из описания и постера
 */
function get_plot(title) {
    for (let tv_show of tv_shows) {
    if (tv_show.name == title) {
		if (tv_show.backdrop_path==null)
			return [tv_show.overview, tv_show.poster_path]
		else
			return [tv_show.overview, tv_show.backdrop_path]
	}
    }
}

