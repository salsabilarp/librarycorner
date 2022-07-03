$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        pauseOnHover: false,
        responsive: [
        {
            breakpoint: 990,
            settings: {
            slidesToShow: 3,
            }
        },
        {
            breakpoint: 770,
            settings: {
            slidesToShow: 2,
            }
        },
        {breakpoint: 490,
            settings: {
            slidesToShow: 1,
            }
        },
        ]
    });
})