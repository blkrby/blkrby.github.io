/*cart tab variables start*/
var cartTabON = false;
var cartTab = document.getElementById("cart");
var cartHolder = document.getElementById("cart_holder");
/*----------cart tab variables start----------*/

/*cart tab code start*/
function openCartTab(){
    cartTab.style.marginRight = "0px"; 
    cartTab.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    cartHolder.style.pointerEvents = "auto";
    cartHolder.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
}

function closeCartTab(){ 
    cartTab.style.marginRight = "-375px";  
    cartTab.style.boxShadow = "0 0 0px rgba(0, 0, 0, 0.5)";
    cartHolder.style.pointerEvents = "none";
    cartHolder.style.backgroundColor = "rgba(0, 0, 0, 0)"
}
/*----------cart tab code start----------*/