/*Nav color changing varialbes start*/
const navigation =document.getElementById("nav");
/*---------- Nav color changing variables start ----------*/

/*Reservation form varialbes start*/
var reservationFormON = false;
const reservationForm = document.getElementById("reservation_modal");
/*---------- Reservation form variables start ----------*/

/*Nav color changing code start*/
function changeNavBackground(){
    var scrollValue = window.scrollY;
    if(scrollValue >= 100){
        navigation.classList.add("scrolled_nav");
    }
    else{
        navigation.classList.remove("scrolled_nav");
    }
}
window.addEventListener('scroll', changeNavBackground);
/*---------- Nav color changing code start ----------*/

/*Reservation form code start*/
function turnReservationFormOn(){
    reservationFormON = true;
    reservationForm.style.opacity = "1.0";
    reservationForm.style.pointerEvents = "auto";
}
function turnReservationFormOff(){
    reservationFormON = false;
    reservationForm.style.opacity = "0.0";
    reservationForm.style.pointerEvents = "none";
}
/*---------- Reservation form code start ----------*/