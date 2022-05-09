let modal = document.getElementById("myModal");
let btn = document.querySelectorAll('.popular_content')
let span = document.getElementsByClassName("close")[0]

let title_film = ""
let found_films = []
let btn_search = document.getElementsByClassName("search_button")[0]
let film_modal = document.getElementById("films_modal");
let film_span = document.getElementsByClassName("films_modal_close")[0];
let input_film = document.getElementsByClassName("input_name")[0]

span.onclick = function() {
  modal.style.display = "none";
  document.querySelector(".modal-content h2").remove()
  document.querySelector(".modal-content p").remove()
  document.querySelector(".modal-content img").remove()
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.querySelector(".modal-content h2").remove()
    document.querySelector(".modal-content p").remove()
    document.querySelector(".modal-content img").remove()
  }
}

document.addEventListener('click',function(e){
    if(e.target && e.target.className== 'film_a'){
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

 function get_plot(title) {
     for (let film of films) {
        if (film.title == title)
            return [film.overview, film.backdrop_path]
     }
 }

input_film.oninput = function(){
    title_film = input_film.value
    console.log(title_film)
}

btn_search.addEventListener('click',function(e){
    if ((e.target && e.target.className== 'search_button') || (e.target.className=="fa fa-search")){
        film_modal.style.display = "block"
        search_film(title_film)
     }
 })

film_span.onclick = function() {
    film_modal.style.display = "none";
    console.log(document.querySelectorAll(".div_film"))
    document.querySelector(".films_modal_content").innerHTML=""
    new_span = document.createElement('span')
    new_span.className = "films_modal_close"
    new_span.innerHTML = '&times;'
    document.querySelector(".films_modal_content").appendChild(new_span)
    film_span = new_span
  }
  
window.onclick = function(event) {
if (event.target == film_modal) {
    film_modal.style.display = "none";
    if (document.querySelector(".films_modal_content div").innerHTML!="")
    document.querySelector(".films_modal_content div").innerHTML = '<span class="films_modal_close">&times;</span>'
}
}

function search_film(title) {
    return fetch('https://api.themoviedb.org/3/search/movie?api_key=b21ca73525eac0f28ecf0f8ae09a9306&language=en-US&query='+title)
    .then(response => response.json())
    .then(data => {
        found_films = data
        data.results.map((film) =>{
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
    })
    .catch(err => console.error(err))
}
