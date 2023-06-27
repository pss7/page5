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



});