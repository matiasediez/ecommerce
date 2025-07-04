export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));

  const toastEl = document.getElementById('cartToast');
  const toastBody = toastEl.querySelector('.toast-body');

  toastBody.textContent = `"${product.title}" agregado al carrito. 🛒`;

  const bsToast = new bootstrap.Toast(toastEl, {
    delay: 1500
  });
  bsToast.show();
}
