let inputRangeValue = document.querySelector(".js-productsNumberRange");
const numberFromInputRange = document.querySelector(".js-showNumberFromInputRange");
const productPickers = document.querySelector(".js-productPickers");

inputRangeValue.addEventListener("input", (event) => {
    console.log(Array.from({ length: inputRangeValue.value }), (_, index) => index + 1);
    
    numberFromInputRange.innerText = event.target.value;
});







/*
            <div class="product">
                <div class="product__weight"><span class="js-productWeight">100</span>g</div>
                <form class="product__options js-form">
                    <button class="product__sign js-minusButton">-</button>
                    <select class="js-productSelect"></select>
                    <button class="product__sign js-plusButton">+</button>
                </form>
                <div class="product__macros">
                    <div><span class="js-productKcal">[]</span>kcal</div>
                    <div><span class="js-productWhey">[]</span>whey</div>
                    <div><span class="js-productFat">[]</span>fat</div>
                    <div><span class="js-productCarbs">[]</span>carbs</div>
                </div>
            </div>
*/