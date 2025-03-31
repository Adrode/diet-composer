import { products } from "./products.js";

const productsToOptions = products.map((product) => `
    <option>${product.name}</option>
`);

const productSelect = document.querySelectorAll(".js-productSelect");
productSelect.forEach(product => product.innerHTML = productsToOptions); 