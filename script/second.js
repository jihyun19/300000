$(document).ready(function () {
    "use strict";

    // slide
    var slideIndex = 0,
        slideLen = 2;

    window.setInterval(function () {
        if(slideIndex == slideLen + 1) {
            slideIndex = 0;
        }
        console.log(slideIndex);
        
        $(".slide").fadeOut();
        $(".slide").eq(slideIndex).fadeIn();
        slideIndex = slideIndex + 1;
    }, 3000); 
    

});