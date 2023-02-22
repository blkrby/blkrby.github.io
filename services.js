/*comments variables start*/
let currentCommentIndex = 0;
const interval = 5000;
const comments = document.getElementById("comments");
let commentsNL = document.querySelectorAll(".comment");
/*---------- comments variables end ----------*/

/*comments code start*/
const firstCommentClone = commentsNL[0].cloneNode(true);
firstCommentClone.id = "first_clone";
comments.append(firstCommentClone);

setInterval(() => {
    comments.style.transition = "1s";
    currentCommentIndex += 1;
    comments.style.marginLeft = -currentCommentIndex * 100 + "%";
}, interval);

comments.addEventListener('transitionend', () =>{
    commentsNL = document.querySelectorAll(".comment");
    if(commentsNL[currentCommentIndex].id === firstCommentClone.id){
        comments.style.transition = "0s";
        currentCommentIndex = 0;
        comments.style.marginLeft = -currentCommentIndex * 100 + "%";
    };
});
/*---------- comments code end ----------*/