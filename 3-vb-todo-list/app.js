import { SingleCard } from "./components/Component.js";

const cardsWrapper = document.getElementById("cards-wrapper")

for (let i = 0; i < 20; i++) {
  cardsWrapper.insertAdjacentHTML("beforeend", SingleCard)
}
