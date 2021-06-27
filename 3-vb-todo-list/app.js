import { createCardHTML, assignCardListener } from "./utils/CardUtils.js";

const deleteAllTodosBtn = document.getElementById("delete-all-todos-btn")
// 
const inputForm = document.getElementById("input-form");
const inputBox = document.getElementById("input-box");
const inputBtn = document.getElementById("input-btn");
// Contains all children element on the cards-wrapper, then cast Obj to Arr
const cardsWrapper = document.getElementById("cards-wrapper");
// const arrayOfCards = Array.prototype.slice.call(cardsWrapper.children);

// get all to-do(s) and render all the to-do(s) list card then assign listener
if (localStorage.getItem("myTodoList")) {
  try {
    // 
    const myTodoLists = JSON.parse(localStorage.getItem("myTodoList"))

    // 
    myTodoLists.forEach(myTodoList => {
      const { cardWrapperOuter } = createCardHTML({ cardsWrapper, cardID:myTodoList.ID, cardStatus:myTodoList.status, todoText:myTodoList.text })
      assignCardListener([cardWrapperOuter])
    });

    console.log(myTodoLists.length);
    console.log((myTodoLists));

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
 * Delete all to-do list item from localStorage "myTodoList".
 * 
 */
var undoDeleteMyTodoLists;
deleteAllTodosBtn.onclick = () => {
  // ambil semua data dari localStorage buat undo nanti
  undoDeleteMyTodoLists = JSON.parse(localStorage.getItem("myTodoList"))
  // dalam 15 detik angus
  setTimeout(() => {
    undoDeleteMyTodoLists = null
  }, 15000);

  // give warning to user and confirmation
  const deletionConfirm = prompt('Do you really want to delete all your To-do(s) List? Even the unfinished task(s)? Type "yes" if you are really sure...')
  if (deletionConfirm === "yes") {
    // remove all to-do lists
    localStorage.removeItem('myTodoList');
    // set HTML card to empty string
    cardsWrapper.innerHTML = ''
    alert("All your To-do(s) has been deleted.")
  } else {
    alert("All your To-do(s) are safe.")
  }
}

function undoData(arrData) {
  // undoDeleteMyTodoLists
  localStorage.setItem("myTodoList", JSON.stringify(arrData))
  undoDeleteMyTodoLists = null
}

document.getElementById("undo-btn").onclick = () => {
  if (undoDeleteMyTodoLists) {
    undoData(undoDeleteMyTodoLists)
  } else {
    alert("Your data is gone brow.")
  }
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
  // 
  e.preventDefault();

  // initialize toSave object contains key=>value for the to-do list
  const toSave = {};
  // create unique ID from timestamp + 2 digits number
  toSave.ID = Date.now() + ~~(Math.random() * 100);
  // get the to-do value from input box
  toSave.text = inputBox.value.trim();
  // set status 0|1 ; 0 = not done yet, 1 = done
  toSave.status = 0;

  // 
  if (toSave.text === '') {
    inputBox.value = ''
    inputBox.focus()
    const message = 'To-do text is empty. Please fill with appropriate character.';
    alert(message);
    throw new Error(message)
  }
  
  // 
  inputBox.disabled = true;
  inputBtn.disabled = true;

  // if myTodoList exist getItem and add the new to-do in front of the array
  // if not, straight to setItem
  if (localStorage.getItem("myTodoList")) {
    try {
      // 
      const localStorageTodo = JSON.parse(localStorage.getItem("myTodoList"));

      // set max todos
      const maxTodos = 100
      // check todos already in the localStorage not greater than the maxTodos
      if (localStorageTodo.length < maxTodos) {        
        localStorage.setItem(
          "myTodoList",
          JSON.stringify([...localStorageTodo, toSave])
        );
      } else {
        // 
        alert(`You already have ${localStorageTodo.length} to-dos active. Please delete some or clear all to-dos. (Max. ${maxTodos} to-dos for the sake of your device's memory goodness)`)
      }
    } catch (e) {
      // 
      console.log(e);
      alert(
        "There was an error with the data. Please clear up your browser local storage. Thank you."
      );
    }
  } else {
    // 
    localStorage.setItem("myTodoList", JSON.stringify([toSave]));
  }

  const { cardWrapperOuter } = createCardHTML({ cardsWrapper, cardID:toSave.ID, cardStatus:toSave.status, todoText:toSave.text })
  
  assignCardListener([cardWrapperOuter])
  // 
  inputBox.value = ''
  inputBox.disabled = false;
  inputBtn.disabled = false;
  inputBox.focus()

};
// End of onSubmit


