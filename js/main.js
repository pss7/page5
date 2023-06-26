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