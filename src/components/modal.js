import { addToCart } from "./cart.js";

export function createModal(p) {
  const prev = document.getElementById('productModal');
  if (prev) prev.remove();

  const modalHtml = `
    <div
      class="modal fade"
      id="productModal"
      tabindex="-1"
      aria-labelledby="productModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title text-center w-100" id="productModalLabel">${p.title}</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <img src="${p.images[0]}" class="img-fluid mb-3" alt="${p.title}">
            <p>${p.description}</p>
          </div>
          <div class="modal-footer justify-content-between d-flex">
            <p><strong>Precio:</strong> $${p.price}</p>
            <button type="button" class="btn btn-primary" id="btn-add-cart">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  const modalEl = document.getElementById('productModal');
  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();

  document.getElementById('btn-add-cart').addEventListener('click', () => {
    addToCart(p);
    document.activeElement.blur();
    bsModal.hide();
  });
}
