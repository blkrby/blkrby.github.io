/*nav variables start*/
const nav = document.getElementById("nav");
/*---------- nav variables end ----------*/

/*mobile nav variables start*/
let mobileNavMenuOn = false;
const mobileNavButton = document.getElementById("mobile_nav_btn");
const mobileNavButton2 = document.getElementById("mobile_nav_menu_btn");
const mobileNavMenu = document.getElementById("mobile_nav_menu");
const mobileNav = document.getElementById("mobile_nav");
/*---------- mobile nav variables start ----------*/

/*nav code start*/
function toggleNav(){
    let windowScroll = window.scrollY;
    if(windowScroll >= 100){
        nav.classList.add("scrolled_nav");
        nav.classList.remove("unscrolled_nav");
        
        mobileNav.classList.add("scrolled_mobile_nav");
        mobileNav.classList.remove("unscrolled_mobile_nav");
    }
    else{
        nav.classList.add("unscrolled_nav");
        nav.classList.remove("scrolled_nav");
        
        mobileNav.classList.add("unscrolled_mobile_nav");
        mobileNav.classList.remove("scrolled_mobile_nav");
    }
}
window.addEventListener('scroll', toggleNav);
/*---------- nav code end ----------*/

/*mobile nav variables start*/
function toggleMobileNavMenu(){
    if(mobileNavMenuOn){
        mobileNavMenuOn = false;
        mobileNavMenu.style.marginLeft = "100vw";
    }
    else{
        mobileNavMenuOn = true;
        mobileNavMenu.style.marginLeft = "0vw";
    }
}
mobileNavButton.addEventListener("click", toggleMobileNavMenu);
mobileNavButton2.addEventListener("click", toggleMobileNavMenu);
/*---------- mobile nav variables start ----------*/