// // Slider JS Start
$(document).ready(function() {
    $(".humburger").click(function() {
        $("body").toggleClass("toggle-menu");
    });
});

$('.single-item-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    autoplay: true,
});
// Slider JS Start


AOS.init();





