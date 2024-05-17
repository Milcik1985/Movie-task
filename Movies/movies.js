const fetchMovies = async () => {
  try {
    const results = await fetch("http://localhost:3001/movies");
    const data = await results.json();
    console.log(data);

    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = "";

    data.movies.forEach((movie) => {
      console.log("Movie image URL:", movie.imageUrl);
      const movieContainer = document.createElement("div");
      movieContainer.classList.add("movie-container");

      const moviePicture = document.createElement("div");
      moviePicture.classList.add("movie-picture");

      const moviePhoto = document.createElement("img");
      moviePhoto.classList.add("movie-photo");
      moviePhoto.src = movie.imageUrl;
      moviePicture.append(moviePhoto);
      movieContainer.append(moviePicture);

      const description = document.createElement("div");
      description.classList.add("description");

      const title = document.createElement("div");
      title.classList.add("title");
      title.textContent = "Title:" + movie.title;
      description.append(title);

      const genre = document.createElement("div");
      genre.classList.add("genre");
      genre.textContent = "Genre:" + movie.genre;
      description.append(genre);

      const rating = document.createElement("div");
      rating.classList.add("rating");
      rating.textContent = "Rating:" + movie.rating;
      description.append(rating);

      const button = document.createElement("button");
      button.classList.add("btn");
      button.textContent = "Add To Favorites";

      movieContainer.append(description);
      movieContainer.append(button);
      container.append(movieContainer);
    });
  } catch (err) {
    console.log("Error fetching movies:", err);
  }
};

fetchMovies();

/* {
  "imageUrl": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  "title": "Gladiator",
  "genre": "Action, Adventure, Drama",
  "rating": 8.5
}



*/
