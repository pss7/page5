$(function () {

    /* top */
    $('aside .top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 300);

    });

});