/*fade-in*/
const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("shown_fade-in")
        }
    });
});

const fadeInElements = document.querySelectorAll(".hidden_fade-in")
fadeInElements.forEach((el) => fadeInObserver.observe(el));
/*-----------------------------------------------------------------------------------------------------*/

/*slide from the left*/
const slideFromLeftobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show_slide_from_left")
        }
    });
});

const slideFromLeftElements = document.querySelectorAll(".hidden_slide_from_left")
slideFromLeftElements.forEach((el) => slideFromLeftobserver.observe(el));
/*-----------------------------------------------------------------------------------------------------*/

/*slide from the right*/
const slideFromRightobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show_slide_from_right")
        }
    });
});

const slideFromRightElements = document.querySelectorAll(".hidden_slide_from_right")
slideFromRightElements.forEach((el) => slideFromRightobserver.observe(el));
/*-----------------------------------------------------------------------------------------------------*/

/*slide from the bototm*/
const slideFromBottomObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show_slide_from_bottom")
        }
    });
});

const slideFromBottomElements = document.querySelectorAll(".hidden_slide_from_bottom")
slideFromBottomElements.forEach((el) => slideFromBottomObserver.observe(el));
/*-----------------------------------------------------------------------------------------------------*/