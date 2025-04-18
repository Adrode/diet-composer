{
    const weight = 69;
    const height = 170;
    const age = 25;
    const mealsPerDay = 4;
    const activity = 1.55;

    const BMRwithActivity = (66 + (13.7 * weight) + (5 * height) - (6.8 * age)) * activity;
    const finalCaloricRequirement = Math.round(BMRwithActivity);

    const whey = Math.round(weight * 2);
    const fat = Math.round((finalCaloricRequirement * 0.3) / 9);
    const carbs = Math.round((finalCaloricRequirement - (fat * 9) - (whey * 4)) / 4);

    document.querySelector(".js-BMRkcal").innerHTML = finalCaloricRequirement;
    document.querySelector(".js-BMRwhey").innerHTML = whey;
    document.querySelector(".js-BMRfat").innerHTML = fat;
    document.querySelector(".js-BMRcarbs").innerHTML = carbs;
    document.querySelector(".js-BMRmeals").innerHTML = mealsPerDay;

    document.querySelector(".js-plannedPerMealKcal").innerHTML =
        Math.round((finalCaloricRequirement / mealsPerDay) / 10) * 10;
    document.querySelector(".js-plannedPerMealWhey").innerHTML =
        Math.round((whey / mealsPerDay) / 5) * 5;
    document.querySelector(".js-plannedPerMealFat").innerHTML =
        Math.round((fat / mealsPerDay) / 5) * 5;
    document.querySelector(".js-plannedPerMealCarbs").innerHTML =
        Math.round((carbs / mealsPerDay) / 5) * 5;
}
