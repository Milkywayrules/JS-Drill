import { ENV } from "../_env.js";

/**
 *
 * Async function to fetch the data from the API (omdbapi.com)
 *
 * @param {any} inputMovieTitle Movie, series, or film title to search here
 * @param {number} inputPages Pages number that want to be fetched from the API
 * @returns Promise of array containing the search results
 */

export const fetchMultiSearch = async (inputMovieTitle, inputPages = 1) => {
  let nCallAPI = 0;
  // check the search box is empty or not
  if (inputMovieTitle === undefined) {
    alert("Fill the search title correctly.");
    throw new Error("Fill the search title correctly.");
  }

  // fetch the movie search request
  let res = await fetch(
    `${ENV.fullUrl.byTitle}&page=${inputPages}&s=${inputMovieTitle}`
  );
  let json = await res.json();
  nCallAPI++;

  // if movie is not found, then search again 1x with first page and the same title
  // to ensure that is really the title is not found or the page requested is beyond the limit
  // (using +1 extra quota API)
  // ! masih belum rampung kalo kedua data di Promise.all belum bisa sinkron
  // ! karena hasilnya akan ngambil dari last page dan ngegabungin 2 data dari last page
  // ! dan itu adalah data yg sama. Mikir aja nanti gmn caranya bisa selaras di Promise.all
  // ! /app.js -> Promise.all([])
  if (json.Response === "False") {
    alert(
      "Page you are looking for is beyond the max limit this title have. We will deliver the last page content for you instead."
    );

    // fetch the movie search request
    // fetch the first page to just check total length of all the data from the API
    // (the api is not that good at handling this, so i got a little bit crazieeee hweeeree)
    res = await fetch(`${ENV.fullUrl.byTitle}&page=1&s=${inputMovieTitle}`);
    json = await res.json();
    nCallAPI++;

    if (json.Response === "False") {
      return new Promise((resolve, reject) => {
        reject(json.Error);
      });
    }
  }

  // every page give 10 data
  // so divide json.totalResults data with 10 and then ceil the value
  // will give us max page value that we can retrieve from single call to the API.
  const maxPage = Math.ceil(json.totalResults / 10);

  // if the pages number that our client looking for is beyond the scope of maxPage
  // then fetch the movie search again with the maxPage value (using +1 extra quota API)
  // that we get in the dividing-ceiling process before.
  if (inputPages > maxPage) {
    // fetch the movie search (AGAIN) at the last page
    const res = await fetch(
      `${ENV.fullUrl.byTitle}&page=${maxPage}&s=${inputMovieTitle}`
    );
    const json = await res.json();
    nCallAPI++;

    console.info(
      "This is 2x fetching process per page.",
      "\nTitle:",
      inputMovieTitle,
      "\nPage:",
      maxPage
    );

    return new Promise((resolve) => {
      resolve({
        Search: json.Search,
        nCallAPI,
      });
    });
  } else {
    // no need to fetch data again, this is the smoothest route for the whole process of thiw web app
    // only call 1x from the API and the data is full, of joy, haha lol.
    console.info(
      "This is only 1 fetching process per page.",
      "\nTitle:",
      inputMovieTitle,
      "\nPage:",
      inputPages
    );

    return new Promise((resolve) => {
      resolve({
        Search: json.Search,
        nCallAPI,
      });
    });
  }
};
