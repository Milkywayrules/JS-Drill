const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("submit");
const preview = document.getElementById("preview");

const apiKey = "32913f44"; // jangan dipake sembarangan yak, bikin aja akun sendiri di "http://www.omdbapi.com/". GRATIS.
const baseUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

searchBtn.onclick = () => {
  searchBtn.disabled = true;
  const startTime = Date.now();
  const query = searchBox.value;

  const getData = (successCallback, errorCallback) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `${baseUrl}&t=${query}`);

    // pake onreadystatechange buat dapetin setiap result
    // ketika state ganti tahap
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        successCallback(JSON.parse(xhr.responseText));
      } else {
        errorCallback(new Error("Error fetching the data"));
      }
    };

    xhr.send();
  };

  getData(
    (res) => {
      // destructuring obj
      const {
        Title,
        Plot,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Metascore,
        Poster,
        imdbRating,
      } = res;

      document.getElementById("_image").src = Poster;
      document.getElementById("_title").innerHTML = Title;
      document.getElementById("_genre").innerHTML = Genre;
      document.getElementById("_runtime").innerHTML = Runtime;
      document.getElementById("_released").innerHTML = Released;
      document.getElementById("_metascore").innerHTML = Metascore;
      document.getElementById("_imdbRating").innerHTML = imdbRating;
      document.getElementById("_rated").innerHTML = Rated;
      document.getElementById("_plot").innerHTML = Plot;

      let rangeTime = 0;
      document.getElementById("_lastUpdate").innerHTML = `1`;

      setInterval(() => {
        const endTime = Date.now();
        rangeTime = Math.round((endTime - startTime) / (1000 * 60));
        console.log(rangeTime);
        
        document.getElementById("_lastUpdate").innerHTML = `${rangeTime}`;
      }, 60000);
      

      document.getElementById("search-result").classList.remove("d-none");
      document.getElementById("search-result").classList.add("d-block");

      searchBtn.disabled = false;

    },
    (err) => {
      preview.innerHTML = err;
    }
  );
};
