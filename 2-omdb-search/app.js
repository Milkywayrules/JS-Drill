import { CardSingleSearch, CardSeparator } from "./components/Component.js";
import { fetchMultiSearch } from "./utils/FetchMultiSearch.js";
import { GetTotalAPICallToday } from "./utils/TotalAPICall.js";
import { FetchInfoDetail } from "./utils/FetchInfoDetail.js";
import { ENV } from "./_env.js";

// inisialisasi elemen: kotak pencarian dan tombol search
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");

// get total API call today
let { totalAPICallToday, totalAPICallNameToday } = GetTotalAPICallToday(false);

if (totalAPICallToday === null) {
  // inisialisasi localstorage
  localStorage.setItem(totalAPICallNameToday, 0);
  totalAPICallToday = localStorage.getItem(totalAPICallNameToday);
  totalAPICallToday = parseInt(totalAPICallToday);

  console.warn(
    "Total API calls you are using from every time you executing a single search are now saved for querying limit purposes. We are creating a new save data everyday, starting from 0, so kindly clear your storage for faster browsing experience. Thank you."
  );
}

totalAPICallToday = parseInt(totalAPICallToday);

/**
 * Fetch data from API when search btn is onClick
 * based on search box value that user input.
 *
 * @returns Promise of all fetched data from the API containing the search results
 */
searchBtn.onclick = async () => {
  //
  let { totalAPICallToday, totalAPICallNameToday } = GetTotalAPICallToday();

  //
  if (searchBox.value == false) {
    alert(
      "Please fill the search box with the title of the movie, series, or film."
    );
  } else {
    return Promise.all([
      fetchMultiSearch(searchBox.value, 1),
      // fetchMultiSearch(searchBox.value, 2),
    ])
      .then((arrData) => {
        // update the localStorage

        const totalCallAPI = arrData[0].nCallAPI;
        // const totalCallAPI = arrData[0].nCallAPI + arrData[1].nCallAPI

        localStorage.setItem(
          totalAPICallNameToday,
          totalAPICallToday + totalCallAPI
        );

        const mergedData = [...arrData[0].Search];
        // const mergedData = [...arrData[0].Search, ...arrData[1].Search];

        // const mergedImdbID = mergedData.map(data => `${ENV.fullUrl.byId}&i=${data.imdbID}`)
        const mergedImdbID = mergedData.map((data) => data.imdbID);

        // return Promise.all(mergedImdbID)

        // return mergedImdbID.map(async data => {
        //   await FetchInfoDetail(data)
        // })

        return Promise.all(
          mergedImdbID.map((data) => {
            return FetchInfoDetail(data);
          })
        );
      })
      .then((allData) => {
        let nCallAPI = 0
        allData.forEach((objData, idx) => {
          idx++;

          nCallAPI = nCallAPI + objData.nCallAPI
          
          let singleData = objData.singleData;

          document
            .getElementById("card-wrapper")
            .insertAdjacentHTML("beforeend", CardSingleSearch(idx, singleData));

          if (idx % 5 === 0 || allData.length === idx) {
            document
              .getElementById(`${singleData.imdbID}`)
              .insertAdjacentHTML(
                "afterend",
                CardSeparator(idx, allData.length)
              );
          }
        });
        
      let { totalAPICallToday, totalAPICallNameToday } = GetTotalAPICallToday();
      localStorage.setItem(totalAPICallNameToday, totalAPICallToday + nCallAPI)
      console.info("All the detail info fetching process need:", nCallAPI, 'calls');
      })
      .catch((err) => {
        alert(err);
        console.error(new Error(err));
      })
      .finally(() => {
        let { totalAPICallToday } = GetTotalAPICallToday();
        console.warn(
          totalAPICallToday,
          `(${typeof totalAPICallToday})`,
          "calls today in total"
        );
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
