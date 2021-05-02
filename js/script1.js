mybutton = document.getElementById("butt");

window.onscroll = function() {scrollFunction(),stick()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
} 


var navbar=document.getElementById("navbar");
var blahh=navbar.offsetTop;

function stick(){

if(window.pageYOffset >=blahh){

navbar.classList.add("sticky");

}

else{
    
    navbar.classList.remove("sticky");
}
}


