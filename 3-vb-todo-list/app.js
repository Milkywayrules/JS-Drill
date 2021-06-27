import { createCardHTML, assignCardListener } from "./utils/CardUtils.js";

const deleteAllTodosBtn = document.getElementById("delete-all-todos-btn")
// 
const inputForm = document.getElementById("input-form");
const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-btn");
// Contains all children element on the cards-wrapper, then cast Obj to Arr
const cardsWrapper = document.getElementById("cards-wrapper");
// const arrayOfCards = Array.prototype.slice.call(cardsWrapper.children);


deleteAllTodosBtn.onclick = () => {
  const x = prompt('Do you really want to delete all your To-do(s) List? Even the unfinished task(s)? Type "yes" if you are really sure...')
  if (x === "yes") {
    localStorage.clear();
    cardsWrapper.innerHTML = ''
    alert("All your To-do(s) has been deleted.")
  } else {
    alert("All your To-do(s) are safe.")
  }
}

// 
if (localStorage.getItem("myTodoList")) {
  try {
    // 
    const myTodoLists = JSON.parse(localStorage.getItem("myTodoList"))

    console.log(myTodoLists.length);
    // 
    myTodoLists.forEach(myTodoList => {
      const { cardWrapperOuter } = createCardHTML({ cardsWrapper, cardID:myTodoList.ID, todoText:myTodoList.text })
      assignCardListener([cardWrapperOuter])
    });
    
  } catch (e) {
    // 
    alert(
      "There was an error with the data. Please clear up your browser local storage. Thank you."
    );
  }
} else {
  // 
  // localStorage.setItem("myTodoList", JSON.stringify([toSave]));
}





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
  // create unique ID from timestamp + 2 digits number
  toSave.ID = Date.now() + ~~(Math.random() * 100);
  // get the to-do value from input box
  toSave.text = inputBox.value;
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
        JSON.stringify([...localStorageTodo, toSave])
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

  const { cardWrapperOuter } = createCardHTML({ cardsWrapper, cardID:toSave.ID, todoText:toSave.text })
  
  assignCardListener([cardWrapperOuter])
  // 
  inputBox.value = ''
  inputBox.disabled = false;
  inputBtn.disabled = false;

};
// End of onSubmit


