// inisialisasi elemen: kotak pencarian dan tombol search
const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("submit");

// api key dan base url
const apiKey = "32913f44"; // jangan dipake sembarangan yak, bikin aja akun sendiri di "http://www.omdbapi.com/". GRATIS.
const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}&plot=full`;

function shorOrHide(elName, state) {
  if (state === 1) {
    document.getElementById(elName).classList.remove("d-none");
    document.getElementById(elName).classList.add("d-block");
  } else {
    document.getElementById(elName).classList.remove("d-block");
    document.getElementById(elName).classList.add("d-none");
  }
}

// add event listener to search box for Enter key
searchBox.onkeyup = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchBtn.click();
  }
};

// apa yg dilakukan ketika tombol search ditekan
searchBtn.onclick = () => {
  const startTime = Date.now();
  const query = searchBox.value;

  // disable search btn after clicked
  searchBtn.disabled = true;
  searchBtn.innerHTML = "Fetching...";

  // show header for result
  shorOrHide("result-header", 1);
  shorOrHide("loading-text", 1);
  shorOrHide("movie-not-found-text", 0);
  // hide the result card
  shorOrHide("search-result", 0);

  // fetch data from "Restful API" using "Fetch API"
  const fetchData = () => {
    fetch(
      // "http://localhost/koding/php/exercise/ci3-microservices/public/api/users"
      `${baseUrl}&t=${query}`
    )
      .then((res) => {
        // return json Promise
        return res.json();
      })
      .then((data) => {
        if (data.Response === "False") {
          // hide "loading" text
          shorOrHide("loading-text", 0);
          shorOrHide("movie-not-found-text", 1);

          const errorText = document.getElementById("movie-not-found-text");
          errorText.innerHTML =
            "<span class='text-danger'>Movie not found. Please search with another keyword.</span>";

          console.warn("Warning:", "Movie doesn't exist");
        } else {
          // destructuring object
          const {
            Title,
            Plot,
            Rated,
            Released,
            Runtime,
            Genre,
            Metascore,
            Poster,
            imdbRating,
          } = data;

          // inject result data into HTML element
          document.getElementById("_image").src = Poster;
          document.getElementById("_title").innerHTML = Title;
          document.getElementById("_genre").innerHTML = Genre;
          document.getElementById("_runtime").innerHTML = Runtime;
          document.getElementById("_released").innerHTML = Released;
          document.getElementById("_metascore").innerHTML = Metascore;
          document.getElementById("_imdbRating").innerHTML = imdbRating;
          document.getElementById("_rated").innerHTML = Rated;
          document.getElementById("_plot").innerHTML = Plot;
          document.getElementById("_lastUpdate").innerHTML = "less than 1";

          // update "searched at ... mins ago" every 60 seconds
          setInterval(() => {
            const endTime = Date.now();
            let rangeTime = Math.round((endTime - startTime) / (1000 * 60));
            console.log(rangeTime);

            document.getElementById("_lastUpdate").innerHTML = `${rangeTime}`;
          }, 60000);

          // hide "loading" text
          shorOrHide("loading-text", 0);
          // show the result card
          shorOrHide("search-result", 1);
        }

        // enable search button again
        searchBtn.disabled = false;
        searchBtn.innerHTML = "Search";
      })
      .catch((err) => {
        throw new Error(err, "Couldn't fetch the data.");
      });
  };

  fetchData();
};
