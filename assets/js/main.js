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
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    arrows: false,
                    centerPadding: 0,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    centerMode: true,
                    arrows: false,
                    centerPadding: 0,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.countries').slick({
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    variableWidth: true,
                    infinite: false,
                    dots: false,
                    centerMode: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    infinite: true,
                    dots: false,
                    centerMode: true,
                    arrows: false,
                    centerPadding: 0,
                }
            }
        ]
    });
});

function showMenu(menuItem) {
    var $menuItem = $(menuItem);
    var $mainNav = $('.js_navigation--bottom');
    $menuItem.addClass("show-sub");
    lazyloadetStarts();
    $menuItem.siblings().removeClass("show-sub");
}
$(document).ready(function () {
    $("nav.navigation--bottom > .navigation__overflow > ul > li").mouseover(function () {
        showMenu(this)
    });
    $("nav.navigation--bottom > .navigation__overflow > ul > li").mouseleave(function () {
        $(this).removeClass("show-sub");
    });
})
$(document).on("click", ".js-toggle-sm-navigation", function () {
    toggleClassState($("main"), "offcanvas");
    toggleClassState($("html"), "offcanvas");
    toggleClassState($("body"), "offcanvas");
    
});

function toggleClassState($e, c) {
    $e.hasClass(c) ? $e.removeClass(c) : $e.addClass(c);
    return $e.hasClass(c);
}