// inisialisasi elemen: kotak pencarian dan tombol search
const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("submit");

// api key dan base url
const apiKey = "32913f44"; // jangan dipake sembarangan yak, bikin aja akun sendiri di "http://www.omdbapi.com/". GRATIS.
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}&plot=full`;

// show or hide some element with ID provided
const shorOrHide = (elName, state) => {
  if (state === 1) {
    document.getElementById(elName).classList.remove("d-none");
    document.getElementById(elName).classList.add("d-block");
  } else {
    document.getElementById(elName).classList.remove("d-block");
    document.getElementById(elName).classList.add("d-none");
  }
};

// fetch all the data from API and render to HTML
const fetchData = async (startTime, query) => {
  try {
    // karena async func dan return Promise, jadi di await
    const response = await fetch(`${baseUrl}&t=${query}`);
    const data = await response.json();

    // render fetched data to HTML page
    const renderDataToTemplate = () => {
      if (data.Response === "False") {
        // hide "loading" text and show "movie not found" error message
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
          // convert to second then divide by 60 to get the minutes
          let rangeTime = Math.round((endTime - startTime) / (1000 * 60));
          console.log(rangeTime);

          // update the mins number
          document.getElementById("_lastUpdate").innerHTML = `${rangeTime}`;
        }, 60000);

        // fetching and rendering processes are done.
        // hide "loading" text
        shorOrHide("loading-text", 0);
        // show the result card
        shorOrHide("search-result", 1);
      }

      // enable search button again
      searchBtn.disabled = false;
      searchBtn.innerHTML = "Search";
    };

    // start rendering
    renderDataToTemplate();
    
  } catch (err) {
    throw new Error(err, "Couldn't fetch the data.");
  }
};

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
  // hide the movie not found erroe text (reset)
  shorOrHide("movie-not-found-text", 0);
  // hide the result card (reset)
  shorOrHide("search-result", 0);

  // fetch data from "Restful API" using "Fetch API" and Async function
  fetchData(startTime, query);
};
