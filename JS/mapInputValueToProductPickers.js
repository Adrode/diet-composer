const productsForm = document.querySelector(".js-productsNumber");
let productsInputValue = document.querySelector(".js-productsNumberRange");
let productPickers = document.querySelector(".js-productPickers");

const generateProductPickers = () => {
    return Array.from({ length: Number(productsInputValue.value) }).map((_, index) => `
        <div class="product">
            <div class="product__weight"><span class="js-productWeight${index + 1}">100</span>g</div>
            <form class="product__options js-form${index + 1}">
                <button class="product__sign js-minusButton${index + 1}">-</button>
                <select class="js-productSelect${index + 1}"></select>
                <button class="product__sign js-plusButton${index + 1}">+</button>
            </form>
            <div class="product__macros">
                <div><span class="js-productKcal${index + 1}">[]</span>kcal</div>
                <div><span class="js-productWhey${index + 1}">[]</span>whey</div>
                <div><span class="js-productFat${index + 1}">[]</span>fat</div>
                <div><span class="js-productCarbs${index + 1}">[]</span>carbs</div>
            </div>
        </div>`
    ).join("")
};

productsForm.addEventListener("submit", (event) => {
    event.preventDefault();
    productPickers.innerHTML = generateProductPickers();
});