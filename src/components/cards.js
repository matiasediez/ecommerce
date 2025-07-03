import { getProducts } from "../api/api.js";

export function createCards() {
    let containerCards = document.querySelector('#list-products');
    getProducts().then((data) => {
        data.forEach((p) => {
            let template = `<div class="col">
                            <div class="card">
                                <img src="${p.images[0]}" class="card-img-top" alt="${p.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${p.title}</h5>
                                    <p class="card-text">${p.description}</p>
                                </div>
                            </div>
                        </div>`;

            containerCards.innerHTML += template;
        })
    });
}