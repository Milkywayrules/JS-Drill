import { CardSingleSearch, CardSeparator } from "./components/Component.js";

// inisialisasi elemen: kotak pencarian dan tombol search
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

// api key dan base url
const apiKey = "32913f44"; // jangan dipake sembarangan yak, bikin aja akun sendiri di "http://www.omdbapi.com/". GRATIS.
const baseUrl = `https://www.omdbapi.com/?apikey=${apiKey}`;
const fullUrl = {
  base: baseUrl,
  byTitle: `${baseUrl}`, // page=n ; s=Str
  byId: `${baseUrl}&plot=full`, //plot=full ; i=Num
}

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

// ambil array hasil search aja
const allSearchData = queryResults.Search;

allSearchData.forEach((movieData, i) => {
  i++;
  document
    .getElementById("card-wrapper")
    .insertAdjacentHTML("beforeend", CardSingleSearch(i, movieData));
  if (idx % 5 === 0 || allSearchData.length === idx) {
    document
      .getElementById(`card-${idx}`)
      .insertAdjacentHTML("afterend", CardSeparator(idx, allSearchData.length));
  }
});
















// (
//   // // looping sampai i untuk generate array artificial dataset
//   // const arrs = (n) => {
//   //   let loops = [];
//   //   for (let i = 0; i < n; i++) loops.push(i);
//   //   return loops;
//   // };

//   // // inisialisasi artifical dataset
//   // const arrsData = arrs(25);

//   // // render ke html artifical dataset
//   // arrsData.forEach((_, idx) => {
//   //   idx++;
//   //   document
//   //     .getElementById("card-wrapper")
//   //     .insertAdjacentHTML("beforeend", CardSingleSearch(idx, data));
//   //   if (idx % 5 === 0 || arrsData.length === idx) {
//   //     document
//   //       .getElementById(`card-${idx}`)
//   //       .insertAdjacentHTML("afterend", CardSeparator(idx, arrsData.length));
//   //   }
//   // });
// )