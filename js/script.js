$(function() {
    "use strict";
    $('.monica__slider').slick({
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnFocus: false,
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
    $('.monica__slider_youtube').slick({
        arrows: true,
        dots: true,
        autoplay: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnFocus: false,
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