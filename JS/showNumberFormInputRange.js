let inputRangeValue = document.querySelector(".js-productsNumberRange");
const numberFromInputRange = document.querySelector(".js-showNumberFromInputRange");


inputRangeValue.addEventListener("change", (event) => (
    numberFromInputRange.innerText = event.target.value
));
