export function initCartSidebar() {
  const cartCountEl = document.getElementById("cart-count");
  const cartItemsEl = document.getElementById("cart-items");
  const offcanvasEl = document.getElementById("cartOffcanvas");

  function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    cartCountEl.textContent = cart.length;

    cartItemsEl.innerHTML = "";

    if (cart.length === 0) {
      cartItemsEl.innerHTML = `
        <li class="list-group-item text-center text-muted">
          Tu carrito está vacío
        </li>`;
    } else {
      cart.forEach((product, idx) => {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-start";
        li.innerHTML = `
          <div class="ms-2 me-auto">
            <div class="fw-bold">${product.title}</div>
            $${product.price}
          </div>
          <button class="btn btn-sm btn-outline-danger remove-btn" data-index="${idx}">
            &times;
          </button>`;
        cartItemsEl.appendChild(li);
      });
    }
  }

  offcanvasEl.addEventListener("show.bs.offcanvas", renderCart);

  cartItemsEl.addEventListener("click", (e) => {
    if (e.target.matches(".remove-btn")) {
      const idx = parseInt(e.target.dataset.index, 10);
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(idx, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    }
  });

  document.getElementById("checkoutBtn").addEventListener("click", () => {
    alert("¡Procesando compra de " + JSON.parse(localStorage.getItem("cart")).length + " productos!");
  });
}
