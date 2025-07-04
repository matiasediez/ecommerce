import { createCards }    from "./components/cards.js";
import { initCartSidebar }from "./components/cartSidebar.js";
import { initSearch }     from "./components/search.js";

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

createCards();
initCartSidebar();
initSearch();