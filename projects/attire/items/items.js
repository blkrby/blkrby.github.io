/*pictures slider variables start*/
const pictures = document.getElementById("product_pictures");

const pictureSelector1 = document.getElementById("pic_sel1");
const pictureSelector2 = document.getElementById("pic_sel2");
const pictureSelector3 = document.getElementById("pic_sel3");
const pictureSelector4 = document.getElementById("pic_sel4");
const pictureSelector5 = document.getElementById("pic_sel5");
/*----------pictures slider variables start----------*/

/*product info parts variables start*/
var pc1Open = true;
var pc2Open = false;
var pc3Open = false;
const category1 = document.getElementById("category1");
const category2 = document.getElementById("category2");
const category3 = document.getElementById("category3");
const categoryplus1 = document.getElementById("toggleplus1");
const categoryplus2 = document.getElementById("toggleplus2");
const categoryplus3 = document.getElementById("toggleplus3");
/*----------product info parts variables start----------*/

/*pictures slider variables start*/{
    function goToPicture1(){
        pictures.style.marginLeft = "0%";

        pictureSelector1.classList.add("current_picture")
        pictureSelector2.classList.remove("current_picture")
        pictureSelector3.classList.remove("current_picture")
        pictureSelector4.classList.remove("current_picture")
        pictureSelector5.classList.remove("current_picture")
    }
    function goToPicture2(){
        pictures.style.marginLeft = "-100%";

        pictureSelector1.classList.remove("current_picture")
        pictureSelector2.classList.add("current_picture")
        pictureSelector3.classList.remove("current_picture")
        pictureSelector4.classList.remove("current_picture")
        pictureSelector5.classList.remove("current_picture")
    }
    function goToPicture3(){
        pictures.style.marginLeft = "-200%";

        pictureSelector1.classList.remove("current_picture")
        pictureSelector2.classList.remove("current_picture")
        pictureSelector3.classList.add("current_picture")
        pictureSelector4.classList.remove("current_picture")
        pictureSelector5.classList.remove("current_picture")
    }
    function goToPicture4(){
        pictures.style.marginLeft = "-300%";

        pictureSelector1.classList.remove("current_picture")
        pictureSelector2.classList.remove("current_picture")
        pictureSelector3.classList.remove("current_picture")
        pictureSelector4.classList.add("current_picture")
        pictureSelector5.classList.remove("current_picture")
    }
    function goToPicture5(){
        pictures.style.marginLeft = "-400%";

        pictureSelector1.classList.remove("current_picture")
        pictureSelector2.classList.remove("current_picture")
        pictureSelector3.classList.remove("current_picture")
        pictureSelector4.classList.remove("current_picture")
        pictureSelector5.classList.add("current_picture")
    }
}

/*product info parts code start*/
function togglepc1(){
    if(pc1Open){
        pc1Open = false;
        category1.style.height = "0";
        category1.style.padding = "0"
        categoryplus1.style.display = "flex";
    }
    else{
        pc1Open = true;
        category1.style.height = "auto";
        category1.style.padding = "5%"
        categoryplus1.style.display = "none";
    }
}
function togglepc2(){
    if(pc2Open){
        pc2Open = false;
        category2.style.height = "0";
        category2.style.padding = "0"
        categoryplus2.style.display = "flex";
    }
    else{
        pc2Open = true;
        category2.style.height = "auto";
        category2.style.padding = "5%"
        categoryplus2.style.display = "none";
    }
}
function togglepc3(){
    if(pc3Open){
        pc3Open = false;
        category3.style.height = "0";
        category3.style.padding = "0"
        categoryplus3.style.display = "flex";
    }
    else{
        pc3Open = true;
        category3.style.height = "auto";
        category3.style.padding = "5%"
        categoryplus3.style.display = "none";
    }
}
/*----------product info parts code start----------*/