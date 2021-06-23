import { ENV } from "../_env.js";

export const FetchInfoDetail = async (inputImdbID, plot = "full") => {
  let nCallAPI = 0;
  // check the search box is empty or not
  if (inputImdbID === undefined) {
    alert("Fill the search title correctly.");
    throw new Error("Fill the search title correctly.");
  }

  // fetch the movie search request
  const res = await fetch(`${ENV.fullUrl.byId}&plot${plot}&i=${inputImdbID}`);
  const json = await res.json();
  nCallAPI++;

  // if the movies didn't exist in the API then reject the Promise
  if (json.Response === "False") {
    return new Promise((resolve, reject) => {
      reject(json.Error);
    });
  }

  console.info("Fetching process only require 1x call.", "\nID:", inputImdbID);

  return new Promise((resolve) => {
    resolve({
      singleData: json,
      nCallAPI,
    });
  });
};
