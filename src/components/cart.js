export function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(item => item.id === product.id);

  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  const cartCountEl = document.getElementById('cart-count');
  const totalCount = cart.reduce((sum, it) => sum + it.quantity, 0);
  cartCountEl.textContent = totalCount;

  const toastEl = document.getElementById('cartToast');
  const toastBd = toastEl.querySelector('.toast-body');
  toastBd.textContent = `"${product.title}" agregado. Total en carrito: ${existing ? existing.quantity : 1}`;
  new bootstrap.Toast(toastEl, { delay: 2000 }).show();
}
