import { ENV } from "./env.js";
import { createCardHTML, assignCardListener } from "./utils/CardUtils.js";
import { getStorageTodo, setStorageTodo } from "./utils/LocalStorageUtils.js";
import * as swalToast from "./utils/SwalToast.js";

const deleteAllTodosBtn = document.getElementById("delete-all-todos-btn");
const toggleDarkMode = document.getElementById("dark-mode-btn");
//
const inputForm = document.getElementById("input-form");
const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-btn");
//
const todoListContainerTitle = document.querySelector(
  "#todo-list-container h2"
);
// Contains all children element on the cards-wrapper, then cast Obj to Arr
const cardsWrapper = document.getElementById("cards-wrapper");
// const arrayOfCards = Array.prototype.slice.call(cardsWrapper.children);

// get all to-do(s) and render all the to-do(s) list card then assign listener
if (localStorage.getItem(ENV.DB_KEYNAME)) {
  try {
    //
    const myTodoLists = JSON.parse(localStorage.getItem(ENV.DB_KEYNAME));

    // 
    todoListContainerTitle.classList.replace("hidden", "block");
    deleteAllTodosBtn.classList.replace("hidden", "block");

    //
    myTodoLists.forEach((myTodoList) => {
      const { cardWrapperOuter } = createCardHTML({
        cardsWrapper,
        cardID: myTodoList.ID,
        cardStatus: myTodoList.status,
        todoText: myTodoList.text,
      });
      assignCardListener([cardWrapperOuter]);
    });
  } catch (e) {
    //
    console.log(e);
    alert(
      "There was an error with the data. Please clear up your browser local storage. Thank you."
    );
  }
}

/**
 *
 * Delete all to-do list item from localStorage ENV.DB_KEYNAME = "myTodoList".
 *
 */
deleteAllTodosBtn.onclick = () => {
  // get all to-dos from localStorage to be used in the undo process
  const undoDeleteMyTodoLists = JSON.parse(localStorage.getItem(ENV.DB_KEYNAME));

  // remove all to-do lists
  localStorage.removeItem(ENV.DB_KEYNAME);
  // set HTML card to empty string
  cardsWrapper.innerHTML = "";
  todoListContainerTitle.classList.replace("block", "hidden");
  deleteAllTodosBtn.classList.replace("block", "hidden");

  //
  swalToast.undoConfirmToast(
    {
      // success, info, warning, question, danger, primary, secondary
      title: "Your to-do list(s) have been deleted.",
      toastType: "fullBtn",
      opts: { timer: 10000 },
    },
    undoDeleteMyTodoLists
  );
};

/**
 * disable input box and btn
 * replace + with spin animation to btn
 * get inputBox.value and now timestamp
 * set to-do text, unique id (timestamp), and status (0|1)
 * then, when done, replace spin with + again
 * then, empty the input box
 * then, enable the input box and btn
 * last, fire SWAL (or alert)
 */
/**
 *
 *
 *
 * @param {any} e Event
 */
inputForm.onsubmit = (e) => {
  try {
    // prevent the form from submitting the inputBox value.
    // Thus, we can control the behaviour but still with secure form-minded flow.
    e.preventDefault();

    // initialize toSave object contains key=>value for the to-do list
    const toSave = {};
    // create unique ID from timestamp + 2 digits number
    toSave.ID = Date.now() + ~~(Math.random() * 100);
    // get the to-do value from input box
    toSave.text = inputBox.value.trim();
    // set status false|true ; false = not done yet, true = done
    toSave.status = false;

    // if the input text is empty, reset again the inputBox then alert user
    if (toSave.text === "") {
      inputBox.value = "";
      inputBox.focus();
      inputBtn.click();
      throw "Please fill with appropriate character.";
    }

    // disable inputBox and inputBtn so the user cannot do anything while processing the input to-do process
    inputBox.disabled = true;
    inputBtn.disabled = true;

    // if myTodoList exist getItem and add the new to-do in front of the array
    // if not, straight to setItem
    if (localStorage.getItem(ENV.DB_KEYNAME)) {
      try {
        // get all to-dos from localStorage and parse into valid JSON
        const localStorageTodo = JSON.parse(localStorage.getItem(ENV.DB_KEYNAME));

        // set max todos to store
        const maxTodos = 100;
        // check todos already in the localStorage not greater than the maxTodos
        if (localStorageTodo.length < maxTodos) {
          // udpate the to-do list with the new one being the last on the array
          setStorageTodo([...localStorageTodo, toSave])
        } else {
          // when the total to-dos on the localStorage have been exceed the maxTodos
          // throw to upper catch
          throw `You already have ${localStorageTodo.length} to-dos active. Please delete some or clear all to-dos. (Max. ${maxTodos} to-dos for the sake of your device's memory goodness)`;
        }
      } catch (e) {
        // throw to upper catch
        throw e;
      }
    } else {
      // when there is no data on the localStorage, immediately create a new localStorage data
      setStorageTodo([toSave])

      // 
      todoListContainerTitle.classList.replace("hidden", "block");
      deleteAllTodosBtn.classList.replace("hidden", "block");
    }

    // create card and assign event listener to every components in a single card
    const { cardWrapperOuter } = createCardHTML({
      cardsWrapper,
      cardID: toSave.ID,
      cardStatus: toSave.status,
      todoText: toSave.text,
    });
    assignCardListener([cardWrapperOuter]);
    // show clear all todo lists button
    deleteAllTodosBtn.classList.replace("hidden", "block");

    // reset inputBox to the initial condition
    inputBox.value = "";
    inputBox.disabled = false;
    inputBtn.disabled = false;
    inputBox.focus();
  } catch (err) {
    // reset inputBox to the initial condition
    inputBox.value = "";
    inputBox.disabled = false;
    inputBtn.disabled = false;
    inputBox.focus();
    // catch all error from child try catch and console then alert the user
    console.error(err);
    swalToast.dangerToast({
      title: err,
      toastType: "basic",
    });
  }
};
// End of onSubmit

/**
 * Toggle between dark and light mode. Get user preferences using localStorage item.
 */
toggleDarkMode.onclick = () => {
  isDarkMode = !isDarkMode;
  setDarkLightMode(isDarkMode);
  localStorage.setItem(ENV.DB_DARKMODEKEYNAME, isDarkMode)
};

/**
 * 
 * @param {*} isDarkMode 
 */
function setDarkLightMode(isDarkMode) {
  const htmlClassList = document.querySelector("html").classList;
  if (isDarkMode) htmlClassList.replace("light", "dark");
  else htmlClassList.replace("dark", "light");
}
