import { getProducts } from "../api/api.js";
import { createModal } from "../components/modal.js";

export function createCards() {
  const containerCards = document.querySelector('#list-products');

  getProducts()
    .then(data => {
      data.forEach(p => {
        const payload = encodeURIComponent(JSON.stringify(p));
        const template = `
          <div class="col">
            <div class="card">
              <img src="${p.images[0]}" class="card-img-top" alt="${p.title}">
              <div class="card-body">
                <h5 class="card-title">${p.title}</h5>
                <button
                  type="button"
                  class="btn btn-primary btn-detail"
                  data-payload="${payload}"
                  id="btn-${p.id}"
                >
                  Ver detalles
                </button>
              </div>
            </div>
          </div>`;
        containerCards.innerHTML += template;
      });

      containerCards.querySelectorAll('.btn-detail').forEach(btn => {
        btn.addEventListener('click', () => {
          const encoded = btn.getAttribute('data-payload');
          const p = JSON.parse(decodeURIComponent(encoded));
          createModal(p);
        });
      });
    })
    .catch(err => console.error("Error cargando productos:", err));
}
