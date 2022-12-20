/*fade in animation*/
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("fade_in_active");
        }
        else{
            entry.target.classList.remove("fade_in_active");
        }
    });
});
const fadeInElements = document.querySelectorAll(".fade_in_passive");
fadeInElements.forEach((el) => fadeInObserver.observe(el));
/*-----------------------------------------------------------------------------------------------------*/

/*slide up animation*/
const slideUpObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("slide_up_active");
        }
        else{
            entry.target.classList.remove("slide_up_active");
        }
    });
});
const slideUpElements = document.querySelectorAll(".slide_up_passive");
slideUpElements.forEach((el) => slideUpObserver.observe(el));
/*-----------------------------------------------------------------------------------------------------*/