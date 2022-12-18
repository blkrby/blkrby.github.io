/*Comments slider varialbes start*/
var commentsSliderMargin = 0;
const comments = document.getElementById("comments_holder");
/*---------- Comments slider variables start ----------*/

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