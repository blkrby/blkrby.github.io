var sliderCounter = 0;
var sliderPaused = false;
const sliderPictures = document.getElementById("web_screenchots");
var sliderPauseButton = document.getElementById("pause");

setInterval(function() {
    if(!sliderPaused){
        sliderCounter += 100;
    
        if(sliderCounter > 300)
            sliderCounter = 0;
        sliderPictures.style.marginLeft = -sliderCounter + "%";
    }
}, 6000);

function pauseUnpause(){
    if(sliderPaused){
        sliderPaused = false;
        sliderPauseButton.style.display = "block";
    }
    else{
        sliderPaused = true;
        sliderPauseButton.style.display = "none";
    }
}
function nextSlide(){
    sliderPaused = true;
    sliderPauseButton.style.display = "none";
    
    sliderCounter += 100;

    if(sliderCounter > 300){
        sliderCounter = 0;
    }

    sliderPictures.style.marginLeft = -sliderCounter + "%";    
}
function previousSlide(){
    sliderPaused = true;
    sliderPauseButton.style.display = "none";
    
    sliderCounter -= 100;

    if(sliderCounter < 0){
        sliderCounter = 300;
    }

    sliderPictures.style.marginLeft = -sliderCounter + "%";  
}