import { CardSingleSearch, CardSeparator } from "./components/Component.js";
import { fetchMultiSearch } from "./utils/FetchMultiSearch.js";
import { GetTotalAPICall } from "./utils/TotalAPICall.js";

// inisialisasi elemen: kotak pencarian dan tombol search
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
// get total API call today
const { totalAPICall, totalAPICallName } = GetTotalAPICall()

if (totalAPICall === null) {
  // inisialisasi localstorage
  localStorage.setItem(totalAPICallName, 0);
  totalAPICall = localStorage.getItem(totalAPICallName);
}

/**
 * Fetch data from API when search btn is onClick
 * based on search box value that user input.
 *
 * @returns Promise of all fetched data from the API containing the search results
 */
searchBtn.onclick = async () => {
  if (searchBox.value == false) {
    alert(
      "Please fill the search box with the title of the movie, series, or film."
    );
  } else {
    return Promise.all([
      fetchMultiSearch(searchBox.value, 1, { totalAPICall, totalAPICallName }),
      fetchMultiSearch(searchBox.value, 2, { totalAPICall, totalAPICallName }),
    ])
      .then((arrData) => {
        const mergedData = [...arrData[0], ...arrData[1]];
        console.log(mergedData);

        mergedData.forEach((movieData, idx) => {
          document
            .getElementById("card-wrapper")
            .insertAdjacentHTML("beforeend", CardSingleSearch(idx, movieData));

          if (idx % 5 === 0 || mergedData.length === idx) {
            document
              .getElementById(`card-${idx}`)
              .insertAdjacentHTML(
                "afterend",
                CardSeparator(idx, mergedData.length)
              );
          }
        })
      })
      .catch((err) => {
        throw new Error(err);
      })
      .finally(() => {
        console.warn(totalAPICall, "calls today in total");
      });
  }
};

// fetchData("zero", 10).then((data) => {
//   console.log(data);
// });

// fetchData("naruto", 1).then((data) => {
//   console.log(data);
// });

// // ambil array hasil search aja
// const allSearchData = queryResults.Search;

// allSearchData.forEach((movieData, i) => {
//   i++;
//   document
//     .getElementById("card-wrapper")
//     .insertAdjacentHTML("beforeend", CardSingleSearch(i, movieData));
//   if (idx % 5 === 0 || allSearchData.length === idx) {
//     document
//       .getElementById(`card-${idx}`)
//       .insertAdjacentHTML("afterend", CardSeparator(idx, allSearchData.length));
//   }
// });

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
