$(function() {
    "use strict";
    $('.monica__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnFocus: false,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    addToHomescreen();
}); /* End Fn */