import { SingleCard } from "./components/Component.js";

const inputForm = document.getElementById("input-form")
const inputBox = document.getElementById("input-box")
const inputBtn = document.getElementById("input-btn")
// Contains all children element on the cards-wrapper, then cast Obj to Arr
const allCardWrapper = document.getElementById("cards-wrapper")
const arrOfCards = Array.prototype.slice.call(allCardWrapper.children)

for (let i = 0; i < 20; i++) {
  // allCardWrapper.insertAdjacentHTML("beforeend", SingleCard)
}

// console.log(arrOfCards);
// allCardWrapper.insertAdjacentHTML("beforeend", allCardWrapper.children[1].outerHTML)

// const xxx = arrOfCards.map((key, value) => {value})
// console.log(xxx);

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
  e.preventDefault()

  // inputBox.disabled = true
  // inputBtn.disabled = true
  const toSave = {};
  toSave.text = inputBox.value
  toSave.ID = Date.now() + ~~(Math.random() * 100)
  toSave.status = 1

  if (localStorage.getItem("myTodoList")) {
    try {
      const currentTodo = JSON.parse(localStorage.getItem("myTodoList"))

      localStorage.setItem("myTodoList", JSON.stringify([toSave, ...currentTodo]))

      console.log(localStorage.getItem("myTodoList"));
    } catch (e) {
      alert("There was an error with the data. Please clear up your browser local storage. Thank you.")
    }
  } else {
    localStorage.setItem("myTodoList", JSON.stringify([toSave]))
  }
  

}



/**
 * altho we can do this to add listener to every single card from it's parent (allCardWrapper)
 * see ref: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation
 * 
 * 
 *| allCardWrapper.addEventListener("focusin", () => {
 *|   console.log('cardWrapper: focus in');
 *| })
 *| allCardWrapper.addEventListener("focusout", () => {
 *|   console.log('cardWrapper: focus out');
 *| })
 * 
 * we do add listeners while loop for every single array and add another utils inside them
 */
/**
 * 
 * Contains all children element on the cards-wrapper (allCardsWrapper).
 * Then loop the array trough every single one of them.
 * 
 */
arrOfCards.forEach(cardWrapperOuter => {
  // set cardID from data-id on #{id}-cardWrapperOuter element
  const cardID = cardWrapperOuter.dataset.id
  // initialize empty object const
  const _ = {}
  // 1 - cardWrapper holds 2 children: textWrapper and modifyWrapper -> btn
  _.cardWrapper = cardWrapperOuter.children[`${cardID}-cardWrapper`]
    // 1.1 - textWrapper holds 2 children: text and check btn
    _.textWrapper = _.cardWrapper.children[`${cardID}-textWrapper`]
      // 1.1.1 - this is the actual text content
      _.text = _.textWrapper.children[`${cardID}-text`]
      // 1.1.2 - this is the check btn (green) -> btn-like
      _.checkBtn = _.textWrapper.children[`${cardID}-check`]
    // 1.2 - modifyWrapper holds 2 children: edit btn and delete btn
    _.modifyWrapper = _.cardWrapper.children[`${cardID}-modifyWrapper`]
      // 1.2.1 - this is the edit btn (indigo) -> btn-like
      _.editBtn = _.modifyWrapper.children[`${cardID}-edit`]
      // 1.2.2 - this is the delete btn (red) -> btn-like
      _.deleteBtn = _.modifyWrapper.children[`${cardID}-delete`]
  // 2 - cardBottom don't have any child, only for accent below every card
  _.cardBottom = cardWrapperOuter.children[`${cardID}-cardBottom`]

  
  let clickState
  // when the card is focus, whether clicked or tabbed
  _.cardWrapper.addEventListener("focusin", () => {
    console.log(`#${cardID}:`, 'cardWrapper: focus in');
    clickState = 0 
    _.checkBtn.classList.remove("hidden")
    _.modifyWrapper.classList.remove("hidden")
    _.cardBottom.classList.add("hidden")
    cardWrapperOuter.classList.add("mb-5")

    // when clicked on card while the card is focus, dismiss the unnecessary
    _.cardWrapper.onclick = () => {
      if (clickState != 0) {
        console.log(`#${cardID}:`, 'cardWrapper: click while focus then blur');
        _.cardWrapper.blur()
      }
      clickState = 1
    }
  })

  // when the card is out of focus after being focus
  _.cardWrapper.addEventListener("focusout", () => {
    console.log(`#${cardID}:`, 'cardWrapper: focus out');
    _.checkBtn.classList.add("hidden")
    _.modifyWrapper.classList.add("hidden")
    _.cardBottom.classList.remove("hidden")
    cardWrapperOuter.classList.remove("mb-5")
  })

  // when check btn is clicked
  // edit status in localStorage reference to cardID
  _.checkBtn.addEventListener("click", () => {
    console.log(`#${cardID}:`, 'check');
    alert('check')
  })

  // when edit btn is clicked
  // edit text in localStorage reference to cardID
  _.editBtn.addEventListener("click", () => {
    console.log(`#${cardID}:`, 'edit');
    alert('edit')
  })

  // when delete btn is clicked
  // delete data in localStorage reference to cardID
  _.deleteBtn.addEventListener("click", () => {
    console.log(`#${cardID}:`, 'delete');
    console.log(_.deleteBtn);
  })



  // data.cardWrapper.onfocusout = (e) => {
  //   console.log('asdasasd');
  //   data.checkBtn.classList.add("hidden")
  // }
  // console.log(card.dataset.id)
  // console.log(card);
});










