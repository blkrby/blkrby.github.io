/*comments slider variables start*/
let commentIndex = 0;
let commentsInterval = 5000;
let slidesAmount = 3;
const comments = document.getElementById("comments");
let commentsNL = document.querySelectorAll(".comment");
/*---------- comments slider variables start ----------*/

/*comments slider code start*/
const cmtDuplicate1 = commentsNL[0].cloneNode(true);
cmtDuplicate1.id = "cmtDuplicate1";
comments.append(cmtDuplicate1);

setInterval(() => {
    comments.style.transition = "1.5s";
    commentIndex++;
    comments.style.marginLeft = -commentIndex * 100 + "%";
}, commentsInterval);

comments.addEventListener('transitionend', () =>{
    commentsNL = document.querySelectorAll(".comment");
    if(commentsNL[commentIndex].id === "cmtDuplicate1"){
        comments.style.transition = "0s";
        commentIndex = 0;
        comments.style.marginLeft = -commentIndex * 100 + "%";
    }
    else if(commentIndex > slidesAmount){
        comments.style.transition = "0s";
        commentIndex = 0;
        comments.style.marginLeft = -commentIndex * 100 + "%";
    }
    else{}
});
/*---------- comments slider code start ----------*/