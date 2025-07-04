import { createCards } from "./components/cards.js";

if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
}

createCards();