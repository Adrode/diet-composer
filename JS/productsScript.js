{
    const productWeightSelector = document.querySelector(".js-productWeight");
    let productWeight = Number(productWeightSelector.innerText);
    const addWeight = document.querySelectorAll(".js-plusButton");
    const substractWeight = document.querySelectorAll(".js-minusButton");
    const productForm = document.querySelectorAll(".js-form");

    addWeight.forEach((button) =>
        button.addEventListener("click", () => {
            productWeight += 10;
            console.log(productWeight);
            productWeightSelector.innerText = productWeight;
        }
        )
    );

    substractWeight.forEach((button) =>
        button.addEventListener("click", () => {
            if (productWeight <= 0) {
                return;
            }

            productWeight -= 10;
            console.log(productWeight);
            productWeightSelector.innerText = productWeight;
        })
    );


    productForm.forEach((form) => {
        form.addEventListener("submit", (event) => event.preventDefault());
    });

}