/*Nav color changing varialbes start*/
const navigation = document.getElementById("nav");
/*---------- Nav color changing variables start ----------*/

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