/*Comments slider varialbes start*/
var commentsSliderMargin = 0;
const comments = document.getElementById("comments_holder");
/*---------- Comments slider variables start ----------*/

/*Mobile comments slider variables*/
var mobileCommentsSliderMargin = 0;
const mobileComments = document.getElementById("mobile_comments_holder");
const mobileNav1 = document.getElementById("m_nav1");
const mobileNav2 = document.getElementById("m_nav2");
const mobileNav3 = document.getElementById("m_nav3");
const mobileNav4 = document.getElementById("m_nav4");
const mobileNav5 = document.getElementById("m_nav5");
/*---------- Mobile comments slider code variables ----------*/

/*Comments slider code start*/
function nextComment(){
    if(commentsSliderMargin < 1170)
        commentsSliderMargin += 390;
    else
        commentsSliderMargin = 0;
    comments.style.marginLeft = -commentsSliderMargin +"px";
}
function previousComment(){
    if(commentsSliderMargin > 0)
        commentsSliderMargin -= 390;
    else
        commentsSliderMargin = 1170;
    comments.style.marginLeft = -commentsSliderMargin +"px";
}
/*---------- Comments slider code start ----------*/

/*Mobile comments slider code*/
function firstMobileCommentSlide(){
    mobileCommentsSliderMargin = 0;
    mobileComments.style.marginLeft = -mobileCommentsSliderMargin + "%";

    mobileNav1.classList.add("selected_mnv");
    mobileNav2.classList.remove("selected_mnv");
    mobileNav3.classList.remove("selected_mnv");
    mobileNav4.classList.remove("selected_mnv");
    mobileNav5.classList.remove("selected_mnv");
}
function secondMobileCommentSlide(){
    mobileCommentsSliderMargin = 100;
    mobileComments.style.marginLeft = -mobileCommentsSliderMargin + "%";

    mobileNav1.classList.remove("selected_mnv");
    mobileNav2.classList.add("selected_mnv");
    mobileNav3.classList.remove("selected_mnv");
    mobileNav4.classList.remove("selected_mnv");
    mobileNav5.classList.remove("selected_mnv");
}
function thirdMobileCommentSlide(){
    mobileCommentsSliderMargin = 200;
    mobileComments.style.marginLeft = -mobileCommentsSliderMargin + "%";

    mobileNav1.classList.remove("selected_mnv");
    mobileNav2.classList.remove("selected_mnv");
    mobileNav3.classList.add("selected_mnv");
    mobileNav4.classList.remove("selected_mnv");
    mobileNav5.classList.remove("selected_mnv");
}
function fourthMobileCommentSlide(){
    mobileCommentsSliderMargin = 300;
    mobileComments.style.marginLeft = -mobileCommentsSliderMargin + "%";

    mobileNav1.classList.remove("selected_mnv");
    mobileNav2.classList.remove("selected_mnv");
    mobileNav3.classList.remove("selected_mnv");
    mobileNav4.classList.add("selected_mnv");
    mobileNav5.classList.remove("selected_mnv");
}
function fifthMobileCommentSlide(){
    mobileCommentsSliderMargin = 400;
    mobileComments.style.marginLeft = -mobileCommentsSliderMargin + "%";

    mobileNav1.classList.remove("selected_mnv");
    mobileNav2.classList.remove("selected_mnv");
    mobileNav3.classList.remove("selected_mnv");
    mobileNav4.classList.remove("selected_mnv");
    mobileNav5.classList.add("selected_mnv");
}
/*---------- Mobile comments slider code start ----------*/