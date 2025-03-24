{
    const weight = 69;
    const height = 170;
    const age = 25;
    const mealsPerDay = 4;
    const activity = 1.55;
    const caloricDifference = 200;

    const BMRwithActivity = (66 + (13.7 * weight) + (5 * height) - (6.8 * age)) * activity;
    const finalCaloricRequirement = Math.round((BMRwithActivity + caloricDifference) / 100) * 100;
    console.log(finalCaloricRequirement);

    const whey = Math.round((weight * 2) / 10) * 10;
    const fat = Math.round(((finalCaloricRequirement * 0.3) / 9) / 10) * 10;
    const carbs = Math.round(((finalCaloricRequirement - (fat * 9) - (whey * 4)) / 4) / 10) * 10;
    console.log("whey: " + whey + ", fat: " + fat + ", carbs: " + carbs);

    document.querySelector(".js-kcal").innerHTML = finalCaloricRequirement;
    document.querySelector(".js-whey").innerHTML = whey;
    document.querySelector(".js-fat").innerHTML = fat;
    document.querySelector(".js-carbs").innerHTML = carbs;
    document.querySelector(".js-meals").innerHTML = mealsPerDay;
}
