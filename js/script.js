$(function () {

    /* top */
    $('aside .top').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 300);

    });

    /* sitemap */
    $('#header .header_right .sitemap').click(function () {
        $('#sitemap').fadeIn();
        $('.sitemap').hide();
        $('.sitemap_close').show();
    });
    $('#header .header_right .sitemap_close').click(function () {
        $('#sitemap').fadeOut();
        $('.sitemap').show();
        $('.sitemap_close').hide();
    });

    /* mobile_menu */
    $('#mobilemenu .m_depth1 li h2 a').click(function () {
        if ($(this).hasClass('active')) {
            $('#mobilemenu .m_depth1 li h2 a').removeClass('active');
            $('#mobilemenu .m_depth2').hide();
        } else {
            $('#mobilemenu .m_depth1 li h2 a').removeClass('active');
            $('#mobilemenu .m_depth2').hide();
            $(this).addClass('active');
            $(this).parents('li').find('.m_depth2').show();
        }
    });
    $('#header .header_right .mobile_menu').click(function () {
        $('#mobilemenu').fadeIn();
        $('.mobile_menu').hide();
        $('.mobile_menu_close').show();
        $('body').addClass('mobilemenu');
    });
    $('#header .header_right .mobile_menu_close').click(function () {
        $('#mobilemenu').fadeOut();
        $('.mobile_menu').show();
        $('.mobile_menu_close').hide();
        $('body').removeClass('mobilemenu');
    });

    /* all_menu */
    $('#header .header_right ul li.link a').click(function () {
        $('.all_menu_bg').fadeIn();
        $('#all_menu').addClass('active');
    });
    $('#all_menu .all_menu_close').click(function () {
        $('.all_menu_bg').fadeOut();
        $('#all_menu').removeClass('active');
    });

    $('#header .all_menu_btn').click(function () {
        $('#m_all_menu').fadeIn();
    });
    $('#m_all_menu .all_menu_close').click(function () {
        $('#m_all_menu').fadeOut();
    });



    $('#m_all_menu .all_menu_list1 h4 a').click(function () {
        if ($(this).hasClass('active')) {
            $('#m_all_menu .all_menu_list1 h4 a').removeClass('active');
            $('.all_menu_list2').slideUp();
        } else {
            $('#m_all_menu .all_menu_list1 h4 a').removeClass('active');
            $('.all_menu_list2').slideUp();
            $(this).addClass('active');
            $(this).parents('li').find('.all_menu_list2').slideDown();
        }
    });




});