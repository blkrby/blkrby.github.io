/*welcome ad slider variables start*/
var welcomeAdSliderOffset = 0;
const welcomeAdPictures = document.getElementById("welcome_ad_pictures");
/*----------welcome ad slider variables start----------*/

/*popular products slider variables start*/
var popularProductsOffset = 0;
const popularProducts = document.getElementById("popular_products_thing");
/*----------popular products slider variables start----------*/

/*welcome ad slider code start*/
setInterval(() => {
    welcomeAdSliderOffset += 100;
    if(welcomeAdSliderOffset > 400)
        welcomeAdSliderOffset = 100;
    
        welcomeAdPictures.style.marginLeft = -welcomeAdSliderOffset + "%";
}, 5000);
/*----------welcome ad slider code start----------*/

/*popular products slider code start*/
function nextPopularProduct(){
    popularProductsOffset += 250;

    if(popularProductsOffset > 1000)
        popularProductsOffset = 0;
    
    popularProducts.style.marginLeft = -popularProductsOffset + "px";
}
function previousPopularProduct(){
    popularProductsOffset -= 250;

    if(popularProductsOffset < 0)
        popularProductsOffset = 1000;
    
    popularProducts.style.marginLeft = -popularProductsOffset + "px";
}
/*----------popular products slider code start----------*/