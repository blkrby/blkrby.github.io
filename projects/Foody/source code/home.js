/*Home slider variables start*/
var homeSliderMargin = 0;
const homeSliderPages = document.getElementById("home_slider_pages");
const homeSliderNav1 = document.getElementById("home_nav_slider1");
const homeSliderNav2 = document.getElementById("home_nav_slider2");
const homeSliderNav3 = document.getElementById("home_nav_slider3");
/*---------- Home slider variables end ----------*/

/*Menu categories variables start*/
const mealsIcon = document.getElementById("meals_icon")
const dessertsIcon = document.getElementById("desserts_icon")
const drinksIcon = document.getElementById("drinks_icon")
const meals = document.getElementById("meals");
const desserts = document.getElementById("desserts");
const drinks = document.getElementById("drinks");
/*---------- Menu categories variables end ----------*/

/*Comments slider variables start*/
var commentsSliderMargin = 0;
const comments = document.getElementById("comments");
/*---------- Comments slider variables end ----------*/

/*Home slider code start*/
function goToFirstPage(){
    homeSliderMargin = 0;
    homeSliderPages.style.marginLeft = homeSliderMargin + "%";

    homeSliderNav1.classList.add("selected_home_slider_nav");
    homeSliderNav2.classList.remove("selected_home_slider_nav");
    homeSliderNav3.classList.remove("selected_home_slider_nav");
}
function goToSecondPage(){
    homeSliderMargin = -100;
    homeSliderPages.style.marginLeft = homeSliderMargin + "%";

    homeSliderNav1.classList.remove("selected_home_slider_nav");
    homeSliderNav2.classList.add("selected_home_slider_nav");
    homeSliderNav3.classList.remove("selected_home_slider_nav");
}
function goToThirdPage(){
    homeSliderMargin = -200;
    homeSliderPages.style.marginLeft = homeSliderMargin + "%";

    homeSliderNav1.classList.remove("selected_home_slider_nav");
    homeSliderNav2.classList.remove("selected_home_slider_nav");
    homeSliderNav3.classList.add("selected_home_slider_nav");
}
/*---------- Home slider code end ----------*/

/*Menu categories code start*/
function showMeals(){
    mealsIcon.classList.add("selected_menu_category");
    dessertsIcon.classList.remove("selected_menu_category");
    drinksIcon.classList.remove("selected_menu_category");

    meals.style.display = "grid";
    desserts.style.display = "none";
    drinks.style.display = "none";
}
function showDesserts(){
    mealsIcon.classList.remove("selected_menu_category");
    dessertsIcon.classList.add("selected_menu_category");
    drinksIcon.classList.remove("selected_menu_category");

    meals.style.display = "none";
    desserts.style.display = "grid";
    drinks.style.display = "none";
}
function showDrinks(){
    mealsIcon.classList.remove("selected_menu_category");
    dessertsIcon.classList.remove("selected_menu_category");
    drinksIcon.classList.add("selected_menu_category");

    meals.style.display = "none";
    desserts.style.display = "none";
    drinks.style.display = "grid";
}
/*---------- Menu categories code start ----------*/

/*Comments slider code start*/
function nextComment(){
    if(commentsSliderMargin < 1230)
        commentsSliderMargin += 410;
    comments.style.marginLeft = -commentsSliderMargin +"px";
}
function previousComment(){
    if(commentsSliderMargin > 0)
        commentsSliderMargin -= 410;
    comments.style.marginLeft = -commentsSliderMargin +"px";
}
/*---------- Comments slider code start ----------*/