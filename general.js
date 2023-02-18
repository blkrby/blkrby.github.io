/*services page variables start*/
let servicesMenuOn = false;
const servicesNavLink = document.getElementById("services_nav_link");
const servicesMenu = document.getElementById("services_menu");
/*---------- services page variables start ----------*/

/*services page code start*/
function toggleServicesMenu(){
    if(servicesMenuOn){
        servicesMenuOn = false;
        servicesMenu.style.height = "0";
    }
    else{
        servicesMenuOn = true;
        servicesMenu.style.height = "300px";
    }
    console.log("fff")
}

servicesNavLink.addEventListener('pointerover', toggleServicesMenu);
servicesMenu.addEventListener('pointerleave', toggleServicesMenu);
/*---------- services page code start ----------*/