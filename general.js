var navOn = false;
const navLinks = document.getElementById("nav_links");

function toggleNav(){
    if(navOn){
        navOn = false;
        navLinks.style.transform = "translateX(100vw)";
        navLinks.style.opacity ="0.5";
    }
    else{
        navOn = true;
        navLinks.style.transform = "translateX(0vw)";
        navLinks.style.opacity ="1.0";
    }
}