const searchBox = document.getElementById("search");
const searchBtn = document.getElementById("submit");
const preview = document.getElementById("preview");

const apiKey = "32913f44"; // jangan dipake sembarangan yak, bikin aja akun sendiri di "http://www.omdbapi.com/". GRATIS.
const baseUrl = `http://www.omdbapi.com/?apsikey=${apiKey}`;


searchBtn.onclick = () => {
  const query = searchBox.value;

  const getData = (successCallback, errorCallback) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", `${baseUrl}&t=${query}`)

    // pake onreadystatechange buat dapetin setiap result
    // ketika state ganti tahap
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        successCallback(JSON.parse(xhr.responseText));
      } else {
        errorCallback(new Error("Couldn't fetch data"));
      }
    };

    xhr.send();
  };

  getData(
    (res) => {
      // spread js
      const {
        Title,
        Year,
        Rated,
        Released,
        Runtime,
        Genre,
        Metascore,
        Poster,
        imdbRating,
      } = { ...res };

      const table = document.querySelector("#js-table .inject")
      const template = `<tr><td>${Title}</td><td>${Year}</td><td>${Rated}</td><td>${Released}</td><td>${Runtime}</td><td>${Genre}</td><td>${Metascore}</td><td>${Poster}</td><td>${imdbRating}</td></tr>`;

      table.innerHTML = template
    },
    (err) => {
      console.log(err);
      preview.innerHTML = err;
    }
  );
};
