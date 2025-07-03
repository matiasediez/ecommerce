export function getProducts() {
  return fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => data.products);
}
