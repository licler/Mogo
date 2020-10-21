$(function () {

    $('.quotes-slider').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.png" alt=""></button>',
        autoplay: true

    });

    $('.epigraph-slider').slick({

        prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/previous.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/next.png" alt=""></button>',
        autoplay: true

    });

    $('.slider__items').slick({
        autoplay: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1

    });


});