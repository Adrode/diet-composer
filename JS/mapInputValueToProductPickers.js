const form = document.querySelector(".js-productsNumber");
let productsInputValue = document.querySelector(".js-productsNumberRange");
let productPickers = document.querySelector(".js-productPickers");

const generateProductPickers = () => {
    return Array.from({ length: Number(productsInputValue.value) }).map((_, index) => `
        <div class="product">
            <div class="product__weight"><span class="js-productWeight${index + 1}">100</span>g</div>
            <form class="product__options js-productForm${index + 1}">
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

form.addEventListener("submit", (event) => {
    event.preventDefault();
    productPickers.innerHTML = generateProductPickers();
});

// ------------------------------------------

let productsWeight = [];
let productsForm = [];
let minusButtons = [];
let productsSelect = [];
let plusButtons = [];
let productsKcal = [];
let productsWhey = [];
let productsFat = [];
let productsCarbs = [];

form.addEventListener("submit", () => {
    productsWeight = [];
    productsForm = [];
    minusButtons = [];
    productsSelect = [];
    plusButtons = [];
    productsKcal = [];
    productsWhey = [];
    productsFat = [];
    productsCarbs = [];

    for (let i = 1; i <= productsInputValue.value; i++) {
        if (!productsInputValue.value) {
            return;
        }

        productsWeight.push("js-productWeight" + i);
        productsForm.push("js-productForm" + i);
        minusButtons.push("js-minusButton" + i);
        productsSelect.push("js-productSelect" + i);
        plusButtons.push("js-plusButton" + i);
        productsKcal.push("js-productKcal" + i);
        productsWhey.push("js-productWhey" + i);
        productsFat.push("js-productFat" + i);
        productsCarbs.push("js-productCarbs" + i);

        let productsFormRef = document.querySelector("." + productsForm[i - 1]);
        productsFormRef.addEventListener("submit", (event) => (
            event.preventDefault()
        ));

        let productsWeightRef = document.querySelector("." + productsWeight[i - 1]);
        let minusButtonsRef = document.querySelector("." + minusButtons[i - 1]);

        console.log(productsFormRef);
        console.log(productsWeightRef);
        console.log(minusButtonsRef);

        minusButtonsRef.addEventListener("click", () => {
            if (productsWeight.innerText <= 0) return;
            productsWeightRef.innerText -= 10;
        })
    }
})

// ------------------------------------------