$(document).ready(function () {
    $('.homepageCarousel').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
});

$(document).ready(function () {
    $('.video_qa').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
    });
});

$(document).ready(function () {
    $('.link_sldr').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
    });
});
