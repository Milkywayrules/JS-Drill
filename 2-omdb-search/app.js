import { CardSingleSearch, CardSeparator, LoadingCardSingleSearch } from "./components/Component.js";
import { fetchMultiSearch } from "./utils/FetchMultiSearch.js";
import { GetTotalAPICallToday } from "./utils/TotalAPICall.js";
import { FetchInfoDetail } from "./utils/FetchInfoDetail.js";

// inisialisasi elemen: kotak pencarian dan tombol search
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const animateSpin = document.querySelector("button svg");

const mainEl = document.getElementsByTagName("main");
const cardWrapper = document.getElementById("card-wrapper");

// get total API call today
let { totalAPICallToday, totalAPICallNameToday } = GetTotalAPICallToday(false);

if (totalAPICallToday === null) {
  // inisialisasi localstorage
  localStorage.setItem(totalAPICallNameToday, 0);
  totalAPICallToday = localStorage.getItem(totalAPICallNameToday);
  totalAPICallToday = parseInt(totalAPICallToday);

  console.warn(
    "Total API calls you are using from every time you executing a single search are now saved in your local browser for limiting your search query purposes. We are creating a new save data everyday, starting from 0, so kindly clear your local browser storage for faster browsing experience. Thank you."
  );
}

totalAPICallToday = parseInt(totalAPICallToday);

// add event listener to search box for Enter key
searchBox.onkeyup = (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchBtn.click();
  }
};

/**
 * Fetch data from API when search btn is onClick
 * based on search box value that user input.
 *
 * @returns Promise of all fetched data from the API containing the search results
 */
searchBtn.onclick = async () => {
  //
  let { totalAPICallToday, totalAPICallNameToday } = GetTotalAPICallToday();

  // if the searchBox is empty
  if (searchBox.value == false) {
    alert(
      "Please fill the search box with the title of the movie, series, or film."
    );
  } else {
    /**
     *
     * disable search btn and search box
     * cursot not allowe search btn and search box
     * animate-spin on search btn and change the btn text
     * empty the result
     * show <main></main>
     *
     */
    animateSpin.classList.remove("hidden");
    searchBox.disabled = true;
    searchBox.classList.add("cursor-not-allowed");
    searchBtn.disabled = true;
    searchBtn.innerHTML = animateSpin.outerHTML + "Fetching...";
    cardWrapper.innerHTML = "";
    mainEl[0].classList.remove("hidden");

    // render card loading wrapper di dalam div #card-wrapper
    for (let i = 0; i < 5; i++) {
      cardWrapper.insertAdjacentHTML("beforeend", LoadingCardSingleSearch());
    }

    return Promise.all([
      fetchMultiSearch(searchBox.value, 1),
      fetchMultiSearch(searchBox.value, 2),
    ])
      .then((arrData) => {
        
        // update the localStorage

        const totalCallAPI = arrData[0].nCallAPI + arrData[1].nCallAPI;

        localStorage.setItem(
          totalAPICallNameToday,
          totalAPICallToday + totalCallAPI
        );

        const mergedData = [...arrData[0].Search, ...arrData[1].Search];

        // const mergedImdbID = mergedData.map(data => `${ENV.fullUrl.byId}&i=${data.imdbID}`)
        const mergedImdbID = mergedData.map((data) => data.imdbID);

        return Promise.all(
          mergedImdbID.map((data) => {
            return FetchInfoDetail(data);
          })
        );
      })
      .then((allData) => {
        // 
        // const cardLoadingWrapper = document.getElementsByClassName("__card-loading-wrapper");

        // console.log(typeof(cardLoadingWrapper), cardLoadingWrapper.length);

        cardWrapper.innerHTML = ''

        // console.log(cardLoadingWrapper[0].remove());
        // console.log(cardLoadingWrapper[1].remove());
        // console.log(cardLoadingWrapper[2].remove());
        // console.log(cardLoadingWrapper[0].remove());
        // console.log(cardLoadingWrapper[0].remove());
        

        // cardLoadingWrapper.forEach((item) => {
        //   cardLoadingWrapper.remove()
        // })

        // let i = 0
        // let n = 5
        // while (n > 0) {
        //   cardLoadingWrapper
        //   i++
        // }
        
        // cardLoadingWrapper.forEach((item, i) => {
        //   item.remove()
        //   console.log(i, "terhapus");
        // })

        let nCallAPI = 0;
        allData.forEach((objData, idx) => {
          idx++;

          nCallAPI = nCallAPI + objData.nCallAPI;

          let singleData = objData.singleData;

          cardWrapper
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

        // add total API call to localStorage
        let { totalAPICallToday, totalAPICallNameToday } =
          GetTotalAPICallToday();
        localStorage.setItem(
          totalAPICallNameToday,
          totalAPICallToday + nCallAPI
        );
        console.info(
          "All the detail info fetching process need:",
          nCallAPI,
          "calls"
        );
      })
      .catch((err) => {
        // hide the <main></main> tag
        mainEl[0].classList.add("hidden");
        // show alert and log error to the console
        alert(err);
        console.error(new Error(err));
      })
      .finally(() => {
        // reset lagi semua ke kondisi awal
        // button default text, button enable, searchbox enable, spin ilang
        animateSpin.classList.add("hidden");
        searchBox.disabled = false;
        searchBox.classList.remove("cursor-not-allowed");
        searchBtn.disabled = false;
        searchBtn.innerHTML = "Search";

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
