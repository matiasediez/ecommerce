import { getProducts } from "../api/api.js";
import { createModal } from "../components/modal.js";

export function createCards() {
    let containerCards = document.querySelector('#list-products');
    getProducts().then((data) => {

        window.showDetails = (p) => {
            createModal(p);
        };

        data.forEach((p) => {
            let template = `<div class="col">
                            <div class="card">
                                <img src="${p.images[0]}" class="card-img-top" alt="${p.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${p.title}</h5>
                                    <button type='button' class='btn btn-primary' onclick='showDetails(${JSON.stringify(p)})' id="${p.id}">Ver detalles</buttom>
                                </div>
                            </div>
                        </div>`;
            containerCards.innerHTML += template;
        })
    });
}