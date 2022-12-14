/*Comments slider*/
var commentsCounter = 0;
const comments = document.getElementById("comments");

/*Services sliders*/
var servicesCounter = 0;
const web_projects = document.getElementById("web_projects_pictures");
const graphic_design_projects = document.getElementById("graphic_design_projects_pictures");

/*Welcome text*/
var i = 0, text;
text = "Your branding hub.";

/*Services sliders*/
setInterval(function(){
    servicesCounter += 100;

    if(servicesCounter > 200)
        servicesCounter = 0;

    web_projects.style.marginLeft = -servicesCounter + "%";
    graphic_design_projects.style.marginLeft = -servicesCounter + "%";
}, 5000)

/*Comments slider*/
setInterval(function(){
    commentsCounter += 100;

    if(commentsCounter > 400)
        commentsCounter = 0;

    comments.style.marginLeft = -commentsCounter + "%";
}, 5000);

/*Welcome text*/
function typing(){
    if(i<text.length){
        document.getElementById("welcome_text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}
typing();