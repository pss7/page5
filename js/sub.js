$(function () {

    $(window).load(function () {

        $('.sub_wrap .sub_img').addClass('active');

    });

    /* tab
    $('.tab_content').hide();
    $('.tab_content').first().show();

    $('.index_wrap .tab_list li').click(function () {
        var Idx = $(this).index();

        $('.tab_content').hide();
        $('.tab_content').eq(Idx).show();
        return false;
    });

    $('.click1').click(function () {
        window.scrollTo({ left: 0, top: 6300 });
    });
    $('.click2').click(function () {
        window.scrollTo({ left: 0, top: 7400 });
    });
    $('.click3').click(function () {
        window.scrollTo({ left: 0, top: 8600 });
    });
    $('.click4').click(function () {
        window.scrollTo({ left: 0, top: 10800 });
    });
    $('.click5').click(function () {
        window.scrollTo({ left: 0, top: 16500 });
    });
 */

    /* tab2 */
    $('.tab_content2').hide();
    $('.tab_content2').first().show();
    $('.lesson_wrap .index_wrap .tab_list li').click(function () {

        var Idx = $(this).index();

        $('.tab_content2').hide();
        $('.tab_content2').eq(Idx).show();
        return false;
    });

});