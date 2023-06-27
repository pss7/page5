$(function () {

    /* top */
    $('aside .top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 300);

    });

    $('#header .header_right .sitemap').click(function(){
        $('#sitemap').fadeIn();
        $('.sitemap').hide();
        $('.sitemap_close').show();
    });
    $('#header .header_right .sitemap_close').click(function(){
        $('#sitemap').fadeOut();
        $('.sitemap').show();
        $('.sitemap_close').hide();
    });

});