var navOn = false;
const navLinks = document.getElementById("nav_links");

function toggleNav(){
    if(navOn){
        navOn = false;
        navLinks.style.height = "0.0";
    }
    else{
        navOn = true;
        navLinks.style.height = "45vh";
    }
}