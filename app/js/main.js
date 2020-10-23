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
    $('.advantages__item-title').on('click', function() {
     $('.advantages__header').toggleClass('.advantages__header--expanded');
     $('.advantages__item-wrapper').toggleClass('advantages__item-wrapper--active');
    });
    $('.creativity__item-title').on('click', function() {
        $('.creativity__header').toggleClass('.creativity__header--expanded');
        $('.creativity__item-wrapper').toggleClass('creativity__item-wrapper--active');
       });
       $('.design__item-title').on('click', function() {
        $('.design__header').toggleClass('.design__header--expanded');
        $('.design__item-wrapper').toggleClass('design__item-wrapper--active');
       });

});