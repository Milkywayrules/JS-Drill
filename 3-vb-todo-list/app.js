import { createCardHTML, assignCardListener } from "./utils/CardUtils.js";

// 
const inputForm = document.getElementById("input-form");
const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-btn");
// Contains all children element on the cards-wrapper, then cast Obj to Arr
const allCardWrapper = document.getElementById("cards-wrapper");
const arrayOfCards = Array.prototype.slice.call(allCardWrapper.children);

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
  e.preventDefault();

  inputBox.disabled = true;
  inputBtn.disabled = true;

  // initialize toSave object contains key=>value for the to-do list
  const toSave = {};
  // get the to-do value from input box
  toSave.text = inputBox.value;
  // create unique ID from timestamp + 2 digits number
  toSave.ID = Date.now() + ~~(Math.random() * 100);
  // set status 0|1 ; 0 = not done yet, 1 = done
  toSave.status = 0;

  // if myTodoList exist getItem and add the new to-do in front of the array
  // if not, straight to setItem
  if (localStorage.getItem("myTodoList")) {
    try {
      // 
      const localStorageTodo = JSON.parse(localStorage.getItem("myTodoList"));
      localStorage.setItem(
        "myTodoList",
        JSON.stringify([toSave, ...localStorageTodo])
      );
    } catch (e) {
      // 
      alert(
        "There was an error with the data. Please clear up your browser local storage. Thank you."
      );
    }
  } else {
    // 
    localStorage.setItem("myTodoList", JSON.stringify([toSave]));
  }

  // 
  inputBox.disabled = false;
  inputBtn.disabled = false;

  const { cardWrapperOuter } = createCardHTML({ allCardWrapper, cardID:toSave.ID, todoText:toSave.text })

  assignCardListener([cardWrapperOuter])

};
// End of onSumbit


