/*const fetchLists = async () => {
  try {
    const results = await fetch("http://localhost:3000/list/movies");
    if (!results.ok) {
      throw new Error("Failed to fetch movie lists");
    }
    const data = await results.json();
    console.log(data);
    const container = document.getElementsByClassName("container")[0];
    container.innerHTML = "";

    data.lists.forEach((list) => {
      const genreContainer = document.createElement("div");
      genreContainer.classList.add("genre-container");
      const genreTitle = list.genre;
      const genreName = document.createElement("h3");
      genreName.innerText = "Genre: " + genreTitle;
      genreContainer.append(genreName);
      container.append(genreContainer);

      genreContainer.addEventListener("click", async () => {
        try {
          let results;
          if (genreTitle === "Action") {
            results = await fetch(
              "http://localhost:3000/movies/lists/10a7cc8f-c6c8-4d07-a3a1-ce143f28d801"
            );
          } else if (genreTitle === "Adventure") {
            results = await fetch(
              "http://localhost:3000/movies/lists/586e6cd1-7f36-4d28-afc6-4d137e89742c"
            );
          } else if (genreTitle === "Thriller") {
            results = await fetch(
              "http://localhost:3000/movies/lists/eb4f97b6-9d58-4fac-bd1d-0148754e5573"
            );
          } else if (genreTitle === "Crime") {
            results = await fetch(
              "http://localhost:3000/movies/lists/dcc153fe-6e4c-4293-8c5f-e397abd6a7f9"
            );
          } else if (genreTitle === "Mystery") {
            results = await fetch(
              "http://localhost:3000/movies/lists/bd45f970-7a43-4bc8-9268-67534c14ea50"
            );
          } else if (genreTitle === "Biography") {
            results = await fetch(
              "http://localhost:3000/movies/lists/58de5682-0b34-4fac-9baa-cbf1721cc440"
            );
          } else if (genreTitle === "History") {
            results = await fetch(
              "http://localhost:3000/movies/lists/1328cdd8-a969-40ac-976c-fa7abd3255e3"
            );
          } else if (genreTitle === "Romance") {
            results = await fetch(
              "http://localhost:3000/movies/lists/ebb26edd-1539-4112-a290-3921ca7b5dc0"
            );
          } else if (genreTitle === "Fantasy") {
            results = await fetch(
              "http://localhost:3000/movies/lists/3414ba50-c517-4b67-9c06-bdebcee7187f"
            );
          } else if (genreTitle === "Sci-Fi") {
            results = await fetch(
              "http://localhost:3000/movies/lists/2536b173-089a-403c-8892-e188cbb416a6"
            );
          } else if (genreTitle === "Drama") {
            results = await fetch(
              "http://localhost:3000/movies/lists/d2d1b7a8-10d6-4c48-bf9c-395854ea6722"
            );
          }
          const moviesData = await results.json();
          console.log("Fetched movies data:", moviesData);

          container.innerHTML = "";

          moviesData.forEach((movie) => {
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
            button.textContent = "Add To Cart";

            movieContainer.append(description);
            movieContainer.append(button);
            container.append(movieContainer);
          });
        } catch (err) {
          console.log("Error fetching movies:", err);
        }
      });
    });
  } catch (err) {
    console.error("Error fetching movie lists:", err);
  }
};*/

const fetchLists = async () => {
  try {
    const results = await fetch("http://localhost:3000/list/movies");
    if (!results.ok) {
      throw new Error("Failed to fetch movie lists");
    }
    const data = await results.json();
    console.log(data);

    const container = document.querySelector(".container");
    container.innerHTML = "";

    data.lists.forEach((list) => {
      const genreContainer = document.createElement("div");
      genreContainer.classList.add("genre-container");

      const genreName = document.createElement("h3");
      genreName.textContent = "Genre: " + list.genre;
      genreContainer.appendChild(genreName);
      container.appendChild(genreContainer);

      genreContainer.addEventListener("click", async () => {
        try {
          const results = await fetch(
            `http://localhost:3000/movies/lists/${list.id}`
          );
          if (!results.ok) {
            throw new Error("Failed to fetch movies for genre: " + list.genre);
          }
          const moviesData = await results.json();
          console.log("Fetched movies data:", moviesData);

          container.innerHTML = "";

          moviesData.forEach((movie) => {
            console.log("Movie image URL:", movie.imageUrl);
            const movieContainer = document.createElement("div");
            movieContainer.classList.add("movie-container");

            const moviePicture = document.createElement("div");
            moviePicture.classList.add("movie-picture");

            const moviePhoto = document.createElement("img");
            moviePhoto.classList.add("movie-photo");
            moviePhoto.src = movie.imageUrl; // Ensure movie.imageUrl is correct
            moviePicture.appendChild(moviePhoto);
            movieContainer.appendChild(moviePicture);

            const description = document.createElement("div");
            description.classList.add("description");

            const title = document.createElement("div");
            title.classList.add("title");
            title.textContent = "Title: " + movie.title;
            description.appendChild(title);

            const genre = document.createElement("div");
            genre.classList.add("genre");
            genre.textContent = "Genre: " + movie.genre;
            description.appendChild(genre);

            const rating = document.createElement("div");
            rating.classList.add("rating");
            rating.textContent = "Rating: " + movie.rating;
            description.appendChild(rating);

            const button = document.createElement("button");
            button.classList.add("btn");
            button.textContent = "Add To Favorites";
            movieContainer.appendChild(description);
            movieContainer.appendChild(button);
            container.appendChild(movieContainer);
          });
        } catch (err) {
          console.log("Error fetching movies:", err);
        }
      });
    });
  } catch (err) {
    console.error("Error fetching movie lists:", err);
  }
};

fetchLists();
