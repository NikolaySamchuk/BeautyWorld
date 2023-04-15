$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: ".carouselBtn__right",
        nextArrow: ".carouselBtn__left",
        variableWidth: true,
    });
});


