$(function () {

    $(window).load(function () {

        $('.sub_wrap .sub_img').addClass('active');

    });

    /* tab */
    $('.tab_content').hide();
    $('.tab_content').first().show();

    $('.index_wrap .tab_list li').click(function () {
        var Idx = $(this).index();

        $('.tab_content').hide();
        $('.tab_content').eq(Idx).show();
        return false;
    });

    $('.click1').click(function () {
        window.scrollTo({left:0, top:6400});
    });
    $('.click2').click(function () {
        window.scrollTo({left:0, top:7100});
    });
    $('.click3').click(function () {
        window.scrollTo({left:0, top:7900});
    });
    $('.click4').click(function () {
        window.scrollTo({left:0, top:9500});
    });
    $('.click5').click(function () {
        window.scrollTo({left:0, top:13400});
    });

});