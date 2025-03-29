{
    const productWeightSelector = document.querySelector(".js-productWeight");
    let productWeight = Number(productWeightSelector.innerText);
    const addWeight = document.querySelector(".js-plusButton");
    const substractWeight = document.querySelector(".js-minusButton");
    const productForm = document.querySelector(".js-form");

    addWeight.addEventListener("click", () => {
        productWeight += 10;
        console.log(productWeight);
        productWeightSelector.innerText = productWeight;
    });

    substractWeight.addEventListener("click", () => {
        if (productWeight <= 0) {
            return;
        }

        productWeight -= 10;
        console.log(productWeight);
        productWeightSelector.innerText = productWeight;
    });


    productForm.addEventListener("submit", (event) => event.preventDefault());
}