import { SingleCard } from "../components/SingleCard.js";

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
  cardTodoTextEl.innerText = todoText
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
      // 
      const focusTimestamp = parseInt(Date.now()/1000)
      // toggle from hidden to block -> show
      _.checkOrCrossBtn.classList.replace("hidden", "block");
      // 
      _.modifyWrapper.classList.remove("hidden");
      _.cardBottom.classList.add("hidden");
      cardWrapperOuter.classList.add("mb-5");

      // 
      _.cardWrapper.onclick = () => {
        // 
        const clickTimestamp = parseInt(Date.now()/1000)
        if (focusTimestamp != clickTimestamp) {
          _.cardWrapper.blur()
        }
      };
    });

    /**
     * when the card is out of focus after being focus
     */
    _.cardWrapper.addEventListener("focusout", () => {
      // toggle from block to hidden -> hide
      _.checkOrCrossBtn.classList.replace("block", "hidden");
      // 
      _.modifyWrapper.classList.add("hidden");
      _.cardBottom.classList.remove("hidden");
      cardWrapperOuter.classList.remove("mb-5");
    });








    /**
     * when edit btn is clicked
     * edit text in localStorage reference to cardID
     */
    _.editBtn.addEventListener("click", () => {
      console.log(`#${cardID}:`, "edit");
      alert("edit");
    });

    /**
     * when delete btn is clicked
     * delete data in localStorage reference to cardID
     */
    _.deleteBtn.addEventListener("click", () => {
      console.log(`#${cardID}:`, "delete");
      alert("delete");
      // console.log(`#${cardID}:`, "delete");
      // console.log(_.deleteBtn);
    });
  });
  // End of array of card forEach
}
// end of assignCardListener


export { createCardHTML, assignCardListener }