import { createCards } from "./components/cards.js";
import { initCartSidebar } from "./components/cartSidebar.js";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

createCards();
initCartSidebar();