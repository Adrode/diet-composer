{
    const productWeightSelector = document.querySelector(".js-productWeight");
    let productWeight = Number(productWeightSelector.innerText);
    const addWeight = document.querySelector(".js-plusButton");
    const substractWeight = document.querySelector(".js-minusButton");
    const productForm = document.querySelector(".js-form");

    const changeProductWeight = () => {

    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        addWeight.addEventListener("click", () => {
            productWeight += 10;
            console.log(productWeight);
            productWeightSelector.innerText = productWeight;
        })

        /* substractWeight.addEventListener("click", () => (
            productWeight.innerValue -= 10
        )) */
    };

    productForm.addEventListener("submit", onFormSubmit);
}