$(function () {


    /* section1 
    $('.tab_content').hide();
    $('.tab_content').first().show();
    $('#section1 .top .tab li').click(function () {
        $('#section1 .top .tab li').children().removeClass('active');
        $(this).children().addClass('active');
        var Idx = $(this).index();
        $('.tab_content').hide();
        $('.tab_content').eq(Idx).show();
    });
*/
    /*
    $('.tab_content').hide();
    $('.tab_content').first().show();
        $('#section1 .slick').slick({
            variablewidth: true,
            autoplay: true,
            arrows: true,
            prevArrow: $('#section1 .control .prev'),
            nextArrow: $('#section1 .control .next'),
            dots: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            zIndex: 1000,
            pauseOnHover: false,
            autoplaySpeed: 2500,
            speed: 1000,
        });
    
    */

    var ww = $(window).width();
    var mySwiper = undefined;

    function initSwiper() {

        if (ww < 1025 && mySwiper == undefined) {
            mySwiper = new Swiper("#section1 .swiper-container", {
                slidesPerView: 'auto',
                simulateTouch: true,
                loop: true,
                speed:800,
                autoplay: {
                    delay: 1500,
                    disableOnInteraction: false,
                },
            });
        } else if (ww >= 1025 && mySwiper != undefined) {
            mySwiper.destroy();
            mySwiper = undefined;
        }
    }

    initSwiper();

    $(window).on('resize', function () {
        ww = $(window).width();
        initSwiper();
    });






    $('#section4 .slick').slick({
        autoplay: true,
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        zIndex: 1000,
        pauseOnHover: false,
        autoplaySpeed: 2500,
        speed: 1000,
        vertical: true,
    });
});