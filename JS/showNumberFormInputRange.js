let inputRangeValue = document.querySelector(".js-productsNumberRange");
const numberFromInputRange = document.querySelector(".js-showNumberFromInputRange");

inputRangeValue.addEventListener("input", (event) => {
    console.log(Array.from({ length: inputRangeValue.value }), (_, index) => index + 1);
    // powyższa funkcja tworzy tablicę z pustymi elementami, ale liczba
    // elementów jest właśnie zależna od value inputa;
    // mogę tego użyć do zrobienia map w pliku productsListPicker, do zmapowania
    // liczby bloków z wyborem produktów
    numberFromInputRange.innerText = event.target.value;
});