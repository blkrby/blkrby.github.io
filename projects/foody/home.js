/*Comments slider varialbes start*/
var commentsSliderMargin = 0;
const comments = document.getElementById("comments_holder");
/*---------- Comments slider variables start ----------*/

/*Mobile comments slider variables*/
var mobileCommentsSliderIndex = 0;
var mobileCommentsSliderPosition = 0;
const mobileComments = document.getElementById("mobile_comments_holder");
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
function setMobileSliderPosition(mobileCommentsSliderIndex){
    mobileCommentsSliderPosition = 100 * mobileCommentsSliderIndex;
    mobileComments.style.marginLeft = mobileCommentsSliderPosition + "%";
}
/*---------- Mobile comments slider code start ----------*/