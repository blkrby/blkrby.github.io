/*nav variables start*/
const nav = document.getElementById("nav");
/*---------- nav variables end ----------*/

/*nav code start*/
function toggleNav(){
    let windowScroll = window.scrollY;
    if(windowScroll >= 100){
        nav.classList.add("scrolled_nav");
        nav.classList.remove("unscrolled_nav");
    }
    else{
        nav.classList.add("unscrolled_nav");
        nav.classList.remove("scrolled_nav");
    }
}
window.addEventListener('scroll', toggleNav);
/*---------- nav code end ----------*/