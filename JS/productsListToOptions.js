import { products } from "./products.js";

const productsToOptions = products.map((product) => `
    <option>${product.name}</option>
`);

const productSelect = document.querySelector(".js-productSelect");
productSelect.innerHTML = productsToOptions;