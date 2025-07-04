export function createModal(p) {
  // Remuevo modales anteriores
  const prev = document.getElementById('productModal');
  if (prev) prev.remove();

  // Modal html
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
            <h5 class="modal-title" id="productModalLabel">${p.title}</h5>
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
            <p><strong>Precio:</strong> $${p.price}</p>
            <p><small class="text-muted">Categoría: ${p.category.name}</small></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >Cerrar</button>
            <button type="button" class="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>`;

  // Inyecto el modal en el body
  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Instancio y muestro el modal
  const modalEl = document.getElementById('productModal');
  const bsModal = new bootstrap.Modal(modalEl);
  bsModal.show();
}