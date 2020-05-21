//Functie leegmaken veld
const parentOfLink = document.querySelector(".list-of-movies");
const empty = () => {
  parentOfLink.querySelectorAll("a").forEach((empty) => empty.remove());
};

//Functie toevoegen elementen
const addMovies = (mov) => {
  const movieArray = mov;
  movieArray.forEach((movie) => {
    const link = document.createElement("a");
    parentOfLink.appendChild(link);
    link.href = "https://www.imdb.com/title/" + movie.imdbID;
    const child = document.createElement("img");
    link.appendChild(child);
    child.src = movie.Poster;
  });
};

//Alle films
const searchMoviesAll = () => {
  empty(), addMovies(movies);
};
searchMoviesAll();

//Categorie 1: alle films vanaf 2014
const buttonFor2014 = document.querySelector("#new-movies");
const movies2014 = movies.filter((movie2014) => movie2014.Year > 2014);
const searchMovies2014 = () => {
  empty(), addMovies(movies2014);
};
buttonFor2014.addEventListener("click", searchMovies2014);

//Categorie 2 t/m 5:
const buttonForTitleMovies = document.querySelectorAll(".filter-title");
const title = ["Avengers", "X-Men", "Princess", "Batman"];
buttonForTitleMovies.forEach((button, index) => {
  const movieRight = movies.filter((movie) => {
    return movie.Title.includes(title[index]);
  });
  const searchMovies = () => {
    empty(), addMovies(movieRight);
  };
  button.addEventListener("click", searchMovies);
});

//Zoekbalk:
const searchArea = document.querySelector("#searchbar");
searchArea.addEventListener("keyup", (key) => {
  empty();
  const val = key.target.value.toLowerCase();
  const filtered = movies.filter((movieSearch) => {
    return movieSearch.Title.toLowerCase().includes(val);
  });
  addMovies(filtered);
});
