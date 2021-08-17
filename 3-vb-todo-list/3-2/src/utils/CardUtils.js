import { ENV } from "../env.js";
import { checkOrCrossBtn, SingleCard } from "../components/SingleCard.js";
import { getStorageTodo, deleteTodoLocStorage, updateTodoLocStorage } from "./LocalStorageUtils.js";

import Swal from "sweetalert2";
import * as swalToast from "./SwalToast.js";
import * as swalAlert from "./SwalAlert.js";

/**
 * 
 * Create HTML element and render it to the very top of cards-wrapper,
 * with ID and to-do text as a params.
 * 
 * Return an object contain cardID and cardWrapperOuter
 * 
 * @param {Object} param0 contains cardID and to-do text
 * @returns { cardID, cardWrapperOuter }
 */
 function createCardHTML({ cardsWrapper, cardID, cardStatus, todoText }) {
  //  create card html without to-do text
  cardsWrapper.insertAdjacentHTML("afterbegin", SingleCard({ cardID, cardStatus, todoText }))
  // get to-do text element <p></p>
  const cardTodoTextEl = document.getElementById(`${cardID}-text`)
  // set innerText of to-do
  todoText = document.createTextNode(todoText)
  cardTodoTextEl.innerText = null
  cardTodoTextEl.appendChild(todoText)
  // get CWO for export
  const cardWrapperOuter = document.getElementById(`${cardID}-cardWrapperOuter`)

  return {
    cardID,
    cardWrapperOuter
   }
}
// end of createCardHTML

/**
 * altho we can do this to add listener to every single card from it's parent (cardsWrapper)
 * see ref: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_delegation
 *
 *
 *| cardsWrapper.addEventListener("focusin", () => {
 *|   console.log('cardWrapper: focus in');
 *| })
 *| cardsWrapper.addEventListener("focusout", () => {
 *|   console.log('cardWrapper: focus out');
 *| })
 *
 * we do add listeners while loop for every single array and add another utils inside them
 */
/**
 * 
 * Contains all children element on the cards-wrapper (allCardsWrapper).
 * Then loop the array trough every single one of them (single to-do card).
 * 
 * Control every single card behaviour here. e.g. eventListener
 * 
 * @param {Array} arrayOfCards Contains all children element on the cards-wrapper (allCardsWrapper)
 */
 function assignCardListener(arrayOfCards) { // yg masuk array dari card wrapper outer
  arrayOfCards.forEach((cardWrapperOuter) => {
    /**
     * 
     */
    // set cardID from data-id on #{id}-cardWrapperOuter element
    const cardID = cardWrapperOuter.dataset.id;
    // initialize empty object const
    const _ = {};
    // 1 - cardWrapper holds 2 children: textWrapper and modifyWrapper -> btn
    _.cardWrapper = cardWrapperOuter.children[`${cardID}-cardWrapper`];
      // 1.1 - textWrapper holds 2 children: text and check btn
      _.textWrapper = _.cardWrapper.children[`${cardID}-textWrapper`];
        // 1.1.1 - this is the actual text content
        _.todoText = _.textWrapper.children[`${cardID}-text`];
        // 1.1.2 - this is the check btn (green) -> btn-like
        _.checkOrCrossBtn = _.textWrapper.children[`${cardID}-checkOrCross`];
      // 1.2 - modifyWrapper holds 2 children: edit btn and delete btn
      _.modifyWrapper = _.cardWrapper.children[`${cardID}-modifyWrapper`];
        // 1.2.1 - this is the edit btn (indigo) -> btn-like
        _.editBtn = _.modifyWrapper.children[`${cardID}-edit`];
        // 1.2.2 - this is the delete btn (red) -> btn-like
        _.deleteBtn = _.modifyWrapper.children[`${cardID}-delete`];
    // 2 - cardBottom don't have any child, only for accent below every card
    _.cardBottom = cardWrapperOuter.children[`${cardID}-cardBottom`];

    /**
     * 
     */
    // when the card is focus, whether clicked or tabbed
    _.cardWrapper.addEventListener("focusin", () => {
      // get current timestamp / 1000 to get more narrow value
      // to see differences between onfocus and onclick.
      const focusTimestamp = parseInt(Date.now()/1000)
      // toggle from hidden to block -> show cardWrapper
      _.checkOrCrossBtn.classList.replace("hidden", "block");
      // toggle edit&delete btn wrapper from hidden to show -> show modifyWrapper
      _.modifyWrapper.classList.remove("hidden");
      // toggle card accent on bottom from show to hidden -> hide card bottom accent
      _.cardBottom.classList.add("hidden");
      // add margin bottom 5 to the outer of cardWrapper,
      // so it's stay stay away of each other.
      cardWrapperOuter.classList.add("mb-5");

      // when the card is clicked, automatically onfocus after onclick.
      // but, onfocus triggered first, then onclick.
      _.cardWrapper.onclick = () => {
        // get current timestamp / 1000 to get more narrow value
        // to see differences between onfocus and onclick
        const clickTimestamp = parseInt(Date.now()/1000)
        // if there is a delay about 1++ second,
        // we assume the user clicking the card again to hide it.
        // but if not, we assume the user clicked the card once,
        // but triggered 2 event (onfocus & onclick).
        if (focusTimestamp != clickTimestamp) {
          // blur = get out focus
          _.cardWrapper.blur()
        }
      };
    });

    /**
     * when the card is out of focus after being focus.
     */
    _.cardWrapper.addEventListener("focusout", () => {
      // toggle from block to hidden -> hide cardWrapper
      _.checkOrCrossBtn.classList.replace("block", "hidden");
      // 
      _.modifyWrapper.classList.add("hidden");
      _.cardBottom.classList.remove("hidden");
      cardWrapperOuter.classList.remove("mb-5");
    });

    /**
     * when CHECK/CROSS btn is clicked
     * CHECK/CROSS status in localStorage reference to done/not state
     */
    _.checkOrCrossBtn.addEventListener("click", () => {
      // 
      const { myTodo: statusTodo, myTodoLists } = getStorageTodo(parseInt(cardID))

      statusTodo.status = !statusTodo.status

      if (updateTodoLocStorage(parseInt(cardID), statusTodo).isSuccess) {
        _.checkOrCrossBtn.innerHTML = checkOrCrossBtn(cardID, statusTodo.status, false)

        if (statusTodo.status) { // todo is now done (true)
          swalToast.successToast({ title: `Done: ${statusTodo.text}` })
          _.cardWrapper.classList.replace("not-line-through", "line-through")
          _.cardWrapper.classList.replace("bg-white", "bg-gray-500")
          _.cardWrapper.classList.replace("focus:bg-white", "focus:bg-gray-200")
          _.cardWrapper.classList.replace("dark:bg-gray-50", "dark:bg-gray-600")
          _.cardWrapper.classList.replace("dark:focus:bg-white", "dark:focus:bg-gray-400")

          _.cardBottom.classList.replace("bg-gray-300", "bg-gray-600")
          _.cardBottom.classList.replace("dark:bg-gray-400", "dark:bg-gray-700")
        } else {
          swalToast.infoToast({ title: `Undone: ${statusTodo.text}` })
          _.cardWrapper.classList.replace("line-through", "not-line-through")
          _.cardWrapper.classList.replace("bg-gray-500", "bg-white")
          _.cardWrapper.classList.replace("focus:bg-gray-200", "focus:bg-white")
          _.cardWrapper.classList.replace("dark:bg-gray-600", "dark:bg-gray-50")
          _.cardWrapper.classList.replace("dark:focus:bg-gray-400", "dark:focus:bg-white")

          _.cardBottom.classList.replace("bg-gray-600", "bg-gray-300")
          _.cardBottom.classList.replace("dark:bg-gray-700", "dark:bg-gray-400")
        }
        
      }

      // 
      // swalAlert.inputText({
      //   title: `<small>Edit: <br> <i>${statusTodo.myTodo.text}</i></small>`,
      //   opts: {
      //     input: "text",
      //     showCancelButton: true,
      //     confirmButtonText: "Save",
      //   },
      //   thenOpts: {
      //     title: "Update success",
      //     cardID: parseInt(cardID)
      //   }
      // })
    });

    /**
     * when edit btn is clicked
     * edit text in localStorage reference to cardID
     */
    _.editBtn.addEventListener("click", () => {
      // 
      const editTodo = getStorageTodo(parseInt(cardID))
      // 
      swalAlert.inputText({
        title: `<small>Edit: <br> <i>${editTodo.myTodo.text}</i></small>`,
        opts: {
          input: "text",
          showCancelButton: true,
          confirmButtonText: "Save",
        },
        thenOpts: {
          title: "Update success",
          cardID: parseInt(cardID)
        }
      })
    });

    /**
     * when delete btn is clicked
     * delete data in localStorage reference to cardID
     */
    _.deleteBtn.addEventListener("click", () => {
      // 
      const { myTodo, myTodoLists: undoDeleteMyTodoLists} = getStorageTodo(parseInt(cardID))

      Swal.fire({
        title: `<small> Delete: <br> <i>${myTodo.text}</i> </small>`,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: `Delete`,
        buttonsStyling: false,
        customClass: {
          confirmButton: "mr-2 py-2 px-5 rounded font-bold text-red-700 bg-red-100 hover:bg-red-300 focus:ring-4 ring-red-600",
          cancelButton: "mr-2 py-2 px-5 rounded font-bold text-gray-700 bg-gray-100 hover:bg-gray-300 focus:ring-4 ring-gray-600"
        }
      })
      .then((event) => {
        if (event.isConfirmed) {
          // 
          if (deleteTodoLocStorage(parseInt(cardID)).isSuccess) {
            document.getElementById(`${cardID}-cardWrapperOuter`).innerHTML = null
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
          }
        }
      })


    });
  });
  // End of array of card forEach
}
// end of assignCardListener

export { createCardHTML, assignCardListener }