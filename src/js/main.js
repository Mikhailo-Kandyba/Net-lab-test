
$(".btn-menu").on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".menu-navigation-wrap").toggleClass('show-menu');
    $(".header-top").toggleClass('display-none');
    $("body").toggleClass('overflow-hidden');
});

$('.information-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
});







