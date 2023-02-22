const mealsCategory = document.getElementById("meals_ctg");
const dessertsCategory = document.getElementById("desserts_ctg");
const drinksCategory = document.getElementById("drinks_ctg");

const mealsContent = document.getElementById("meals");
const dessertsContent = document.getElementById("desserts");
const drinksContent = document.getElementById("drinks");

function switchToMeals(){
    mealsCategory.classList.add("selected");
    mealsCategory.classList.remove("unselected");
    dessertsCategory.classList.add("unselected");
    dessertsCategory.classList.remove("selected")
    drinksCategory.classList.add("unselected");
    drinksCategory.classList.remove("selected")

    mealsContent.style.display = "flex";
    dessertsContent.style.display = "none";
    drinksContent.style.display = "none";
}
function switchToDesserts(){
    mealsCategory.classList.add("unselected");
    mealsCategory.classList.remove("selected");
    dessertsCategory.classList.add("selected");
    dessertsCategory.classList.remove("unselected")
    drinksCategory.classList.add("unselected");
    drinksCategory.classList.remove("selected")

    mealsContent.style.display = "none";
    dessertsContent.style.display = "flex";
    drinksContent.style.display = "none";
}
function switchToDrinks(){
    mealsCategory.classList.add("unselected");
    mealsCategory.classList.remove("selected");
    dessertsCategory.classList.add("unselected");
    dessertsCategory.classList.remove("selected")
    drinksCategory.classList.add("selected");
    drinksCategory.classList.remove("unselected")

    mealsContent.style.display = "none";
    dessertsContent.style.display = "none";
    drinksContent.style.display = "flex";
}