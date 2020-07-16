$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        margin: 20,
        loop: true,
        autoWidth: true,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,

            }
        }
    });
});