/*fade in*/
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
/*-------------------------------------------------------------------------------------------------------*/

/*slide up*/
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
/*-------------------------------------------------------------------------------------------------------*/

/*slide right*/
const slideRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("slide_right_active");
        }
        else{
            entry.target.classList.remove("slide_right_active");
        }
    });
});

const slideRightElements = document.querySelectorAll(".slide_right_passive");
slideRightElements.forEach((el) => slideRightObserver.observe(el));
/*-------------------------------------------------------------------------------------------------------*/

/*slide right*/
const slideLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("slide_left_active");
        }
        else{
            entry.target.classList.remove("slide_left_active");
        }
    });
});

const slideLeftElements = document.querySelectorAll(".slide_left_passive");
slideLeftElements.forEach((el) => slideLeftObserver.observe(el));
/*-------------------------------------------------------------------------------------------------------*/