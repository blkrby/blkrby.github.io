/*Nav color changing varialbes start*/
const navigation = document.getElementById("nav");
/*---------- Nav color changing variables start ----------*/

/*Mobile nav varialbes start*/
var mobileNavON = false;
const mobileNav = document.getElementById("mobile_nav");
/*---------- Mobile nav variables start ----------*/

/*Nav color changing code start*/
function changeNavBackground(){
    var scrollValue = window.scrollY;
    if(scrollValue >= 50){
        navigation.classList.add("scrolled_nav");
    }
    else{
        navigation.classList.remove("scrolled_nav");
    }
}
window.addEventListener('scroll', changeNavBackground);
/*---------- Nav color changing code start ----------*/

/*Mobile nav code start*/
function toggleMobileNav(){
    if(mobileNavON){
        mobileNavON = false;
        mobileNav.style.opacity = "0";
        mobileNav.style.pointerEvents = "none";
    }
    else{
        mobileNavON = true;
        mobileNav.style.opacity = "1";
        mobileNav.style.pointerEvents = "auto";
    }
}
/*---------- Mobile nav code start ----------*/