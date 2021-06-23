import { CardSingleSearch, CardSeparator } from "./components/Component.js";
import { fetchMultiSearch } from "./utils/FetchMultiSearch.js";
import { GetTotalAPICallToday, AddTotalAPICall } from "./utils/TotalAPICall.js";

// inisialisasi elemen: kotak pencarian dan tombol search
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

// get total API call today
let { totalAPICallToday, totalAPICallNameToday } = GetTotalAPICallToday(false)

if (totalAPICallToday === null) {
  // inisialisasi localstorage
  localStorage.setItem(totalAPICallNameToday, 0);
  totalAPICallToday = localStorage.getItem(totalAPICallNameToday);
  totalAPICallToday = parseInt(totalAPICallToday)

  console.warn("Total API calls you are using from every time you executing a single search are now saved for querying limit purposes. We are creating a new save data everyday, starting from 0, so kindly clear your storage for faster browsing experience. Thank you.");
}

totalAPICallToday = parseInt(totalAPICallToday)

/**
 * Fetch data from API when search btn is onClick
 * based on search box value that user input.
 *
 * @returns Promise of all fetched data from the API containing the search results
 */
searchBtn.onclick = async () => {
  // 
  let { totalAPICallToday, totalAPICallNameToday } = GetTotalAPICallToday()

  // 
  if (searchBox.value == false) {
    alert(
      "Please fill the search box with the title of the movie, series, or film."
    );
  } else {
    return Promise.all([
      fetchMultiSearch(searchBox.value, 1),
      fetchMultiSearch(searchBox.value, 2),
    ])
      .then((arrData) => {
        const totalCallAPI = arrData[0].nCallAPI + arrData[1].nCallAPI
        const mergedData = [...arrData[0].Search, ...arrData[1].Search];

        AddTotalAPICall(totalAPICallNameToday, totalAPICallToday+totalCallAPI)
        
        // mergedData.forEach((movieData, idx) => {
        //   document
        //     .getElementById("card-wrapper")
        //     .insertAdjacentHTML("beforeend", CardSingleSearch(idx, movieData));

        //   if (idx % 5 === 0 || mergedData.length === idx) {
        //     document
        //       .getElementById(`card-${idx}`)
        //       .insertAdjacentHTML(
        //         "afterend",
        //         CardSeparator(idx, mergedData.length)
        //       );
        //   }
        // })
      })
      .catch((err) => {
        alert(err)
        console.error(new Error(err));
      })
      .finally(() => {
        let { totalAPICallToday } = GetTotalAPICallToday()
        console.warn(totalAPICallToday, `(${typeof(totalAPICallToday)})`, "calls today in total");
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
