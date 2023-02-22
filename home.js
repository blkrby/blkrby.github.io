/*services background variables start*/
const service1 = document.getElementById("service1");
const service2 = document.getElementById("service2");
const service3 = document.getElementById("service3");
const services = document.getElementById("services");
/*---------- services background variables end ----------*/

/*projects slider variables start*/
let projectsPageIndex = 0;
const projectsPointer = document.getElementById("project_category_pointer");
const projectCategories = document.getElementById("project_categories");
/*---------- projects slider variables start ----------*/

/*comments variables start*/
let currentCommentIndex = 0;
const interval = 5000;
const comments = document.getElementById("comments");
let commentsNL = document.querySelectorAll(".comment");
/*---------- comments variables end ----------*/

/*services background code start*/
function selectService1(){
    services.style.backgroundImage = "url(pictures/service_backgrounds/web_development.jpg)";
}
function selectService2(){
    services.style.backgroundImage = "url(pictures/service_backgrounds/digital_marketing.jpg)";  
}
function selectService3(){
    services.style.backgroundImage = "url(pictures/service_backgrounds/graphic_design.jpg)";        
}

service1.addEventListener('pointerover', selectService1);
service2.addEventListener('pointerover', selectService2);
service3.addEventListener('pointerover', selectService3);
/*---------- services background code end ----------*/

/*projects slider code start*/
function selectProjectCategory(){
    projectsPointer.style.marginLeft = projectsPageIndex * 33.33333 + "%";
    projectCategories.style.marginLeft = -projectsPageIndex * 100 + "%";
}

function selectProjectCategory1(){
    projectsPageIndex = 0;
    selectProjectCategory();
}
function selectProjectCategory2(){
    projectsPageIndex = 1;
    selectProjectCategory();
}
function selectProjectCategory3(){
    projectsPageIndex = 2;
    selectProjectCategory();
}
/*---------- projects slider code start ----------*/

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