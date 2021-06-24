import {
  CardSingleSearch,
  CardSeparator,
  LoadingCardSingleSearch,
} from "./components/Component.js";
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
    searchBtn.getElementsByTagName("span")[0].innerHTML = "Fetching...";
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
        // counting total API from 2 fetch promises before
        const totalCallAPI = arrData[0].nCallAPI + arrData[1].nCallAPI;

        // update the totalAPICallToday in localStorage
        localStorage.setItem(
          totalAPICallNameToday,
          totalAPICallToday + totalCallAPI
        );

        // merge 2 results array from 2 fetch promises before
        const mergedData = [...arrData[0].Search, ...arrData[1].Search];
        // get only the imdbID from mergeData array
        const mergedImdbID = mergedData.map((data) => data.imdbID);

        // return detailed info from every imdbID using FetchInfoDetail
        // wrapped by Promise.all
        return Promise.all(
          mergedImdbID.map((data) => {
            return FetchInfoDetail(data);
          })
        );
      })
      .then((allData) => {
        // remove all loading card wrapper,
        // so the actual card with data are gonna be rendered
        cardWrapper.innerHTML = "";

        // render every single card
        let nCallAPI = 0;
        allData.forEach((objData, idx) => {
          idx++;

          nCallAPI = nCallAPI + objData.nCallAPI;

          let singleData = objData.singleData;

          cardWrapper.insertAdjacentHTML(
            "beforeend",
            CardSingleSearch(idx, singleData)
          );

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
        searchBtn.getElementsByTagName("span")[0].innerHTML = "Search";

        // get totalAPICallToday for show tracking in the console
        let { totalAPICallToday } = GetTotalAPICallToday();
        console.warn(
          totalAPICallToday,
          `(${typeof totalAPICallToday})`,
          "calls today in total"
        );
      });
  }
};
