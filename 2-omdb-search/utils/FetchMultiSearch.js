
import { GetTotalAPICall, AddTotalAPICall } from "./TotalAPICall.js";
import { ENV } from "../_env.js"

/**
 * 
 * Async function to fetch the data from the API (omdbapi.com)
 *
 * @param {any} inputMovieTitle Movie, series, or film title to search here
 * @param {number} inputPages Pages number that want to be fetched from the API
 * @returns Promise of array containing the search results
 */

export const fetchMultiSearch = async (inputMovieTitle, inputPages = 1, { totalAPICallName, totalAPICall }) => {
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
  // increment the total API call usage (only for 1x search, then reset to 0 again)
  AddTotalAPICall(totalAPICallName, totalAPICall++)

  // if movie is not found, then search again 1x with first page and the same title
  // to ensure that is really the title is not found or the page requested is beyond the limit
  // (using +1 extra quota API)
  if (json.Response === "False") {
    // fetch the movie search request
    res = await fetch(`${ENV.fullUrl.byTitle}&page=1&s=${inputMovieTitle}`);
    json = await res.json();
    // increment the total API call usage (only for 1x search, then reset to 0 again)
    AddTotalAPICall(totalAPICallName, totalAPICall++)

    alert(
      "Page you are looking for is beyond the max limit this title have. We will deliver the first page content for you instead."
    );
  }

  // every page give 10 data
  // so divide json.totalResults data with 10 and then ceil the value
  // will give us max page value that we can retrieve from single call to the API.
  const maxPage = Math.ceil(json.totalResults / 10);

  // if the pages number that our client looking for is beyond the scope of maxPage
  // then fetch the movie search again with the maxPage value (using +1 extra quota API)
  // that we get in the dividing-ceiling process before.
  if (inputPages > maxPage) {
    // fetch the movie search (AGAIN)
    const res = await fetch(
      `${ENV.fullUrl.byTitle}&page=${maxPage}&s=${inputMovieTitle}`
    );
    const json = await res.json();
    // increment the total API call usage (only for 1x search, then reset to 0 again)
    AddTotalAPICall(totalAPICallName, totalAPICall++)

    console.info(
      "This is 2x fetching process per page.",
      "\nTitle:",
      inputMovieTitle,
      "\nPage:",
      inputPages
    );

    return new Promise((resolve) => {
      resolve(json.Search);
    });
  } else {
    console.info(
      "This is only 1 fetching process per page.",
      "\nTitle:",
      inputMovieTitle,
      "\nPage:",
      inputPages
    );

    return new Promise((resolve) => {
      resolve(json.Search);
    });
  }
};
