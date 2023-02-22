/*services nav menu variables start*/
let servicesMenuOn = false;
const servicesNavLink = document.getElementById("services_nav_link");
const servicesMenu = document.getElementById("services_menu");
/*---------- services nav menu variables end ----------*/

/*services nav menu code start*/
function turnServicesMenuOn(){
    servicesMenuOn = true;
    servicesMenu.style.height = "300px";
}
function turnServicesMenuOff(){
    if(servicesMenuOn){
        servicesMenuOn = false;
        servicesMenu.style.height = "0px";
    }
}

servicesNavLink.addEventListener('pointerenter', turnServicesMenuOn);

servicesMenu.addEventListener('pointerleave', turnServicesMenuOff);
window.addEventListener('click', turnServicesMenuOff);
window.addEventListener('scroll', turnServicesMenuOff);
/*---------- services nav menu code end ----------*/