$(document).ready(function () {
    $('.banner-carousel').slick({
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
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
    $('.countries').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
    });
});
