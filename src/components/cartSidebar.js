export function initCartSidebar() {
    const cartCountEl = document.getElementById("cart-count");
    const cartItemsEl = document.getElementById("cart-items");
    const offcanvasEl = document.getElementById("cartOffcanvas");
    const checkoutBtn = document.getElementById("checkoutBtn");

    // 1) Leer y normalizar carrito
    function getCart() {
        const raw = JSON.parse(localStorage.getItem("cart")) || [];
        return raw.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }));
    }

    // 2) Guardar carrito
    function saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // 3) Render y sincronización
    function renderCart() {
        let cart = getCart();

        // **Sincroniza** el localStorage cada vez que re-renderizas
        saveCart(cart);

        // Actualiza badge
        const totalCount = cart.reduce((sum, it) => sum + it.quantity, 0);
        cartCountEl.textContent = totalCount;

        cartItemsEl.innerHTML = "";
        if (cart.length === 0) {
            checkoutBtn.disabled = true;
            cartItemsEl.innerHTML = `
        <li class="list-group-item text-center text-muted">
          Tu carrito está vacío
        </li>`;
            return;
        }
        checkoutBtn.disabled = false;

        cart.forEach((product, idx) => {
            const finalPrice = (product.price * product.quantity).toFixed(2);
            const li = document.createElement("li");
            li.className = "list-group-item";

            li.innerHTML = `
        <div class="d-flex align-items-center">
          <img src="${product.images[0]}" alt="${product.title}"
               class="img-thumbnail me-2" style="width:60px;height:60px;object-fit:cover;">
          <div class="flex-grow-1">
            <div class="fw-bold">${product.title}</div>
            <div>$${product.price.toFixed(2)} c/u</div>
          </div>
          <div class="d-flex align-items-center me-3">
            <button class="btn btn-sm btn-outline-secondary me-1 btn-decrease"
                    data-index="${idx}" ${product.quantity === 1 ? "disabled" : ""}>
              −
            </button>
            <span>${product.quantity}</span>
            <button class="btn btn-sm btn-outline-secondary ms-1 btn-increase"
                    data-index="${idx}">
              +
            </button>
          </div>
          <div class="me-3">
            <div class="fw-bold">$${finalPrice}</div>
          </div>
          <button class="btn btn-sm btn-outline-danger btn-remove" data-index="${idx}">
            🗑
          </button>
        </div>`;
            cartItemsEl.appendChild(li);
        });
    }

    // 4) Cada vez que abres el sidebar, refresca y guarda
    offcanvasEl.addEventListener("show.bs.offcanvas", renderCart);

    // 5) Delegación de eventos para botones
    cartItemsEl.addEventListener("click", (e) => {
        let cart = getCart();
        const idx = parseInt(e.target.dataset.index, 10);

        if (e.target.matches(".btn-decrease")) {
            if (cart[idx].quantity > 1) cart[idx].quantity--;
            saveCart(cart);
            renderCart();
        }

        if (e.target.matches(".btn-increase")) {
            cart[idx].quantity++;
            saveCart(cart);
            renderCart();
        }

        if (e.target.matches(".btn-remove")) {
            cart.splice(idx, 1);
            saveCart(cart);
            renderCart();
        }
    });

    // 6) Checkout
    checkoutBtn.addEventListener("click", () => {
        const cart = getCart();
        //alert(`Procesando compra de ${cart.reduce((s, it) => s + it.quantity, 0)} productos.`);
    });

    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasEl);

    // Checkout: vacía carrito, actualiza UI, cierra sidebar y muestra toast
    checkoutBtn.addEventListener("click", () => {
        localStorage.setItem("cart", JSON.stringify([]));

        renderCart();

        bsOffcanvas.hide();

        const toastEl = document.getElementById("cartToast");
        const toastBd = toastEl.querySelector(".toast-body");
        toastBd.textContent = "¡Gracias por tu compra! 🛒";
        const bsToast = new bootstrap.Toast(toastEl, { delay: 2000 });
        bsToast.show();
    });
}