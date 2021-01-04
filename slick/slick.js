$(function () {
    $('.slick-slider').slick({
        dots: true,
        pauseOnFocus: false,
        arrows: false,
        autoplay: true,
        speed: 300,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '25px',
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '50px',
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '100px',
                }
            },
        ],
    });
});