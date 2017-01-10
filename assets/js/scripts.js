$(document).ready(function() {

    $('.home-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    });

    $(".slick-next.slick-arrow").hover (
        function() {
            var data_tab = $(".slick-active").attr("data-slick-index");
            data_tab++;
            var next_slide = $(".slide[data-slick-index=" + data_tab + "]").html();
            var next_back = $(".slide[data-slick-index=" + data_tab + "]").css("background-image");
            $(".preview-slide").html(next_slide);
            $(".preview-slide").css("background-image", next_back);
            $(".preview-slide").fadeIn();
        },
        function() {
            $(".preview-slide").css("display", "none");
            $(".preview-slide").fadeOut();
        }
    );

    $(".slick-prev.slick-arrow").hover (
        function() {
            var data_tab = $(".slick-active").attr("data-slick-index");
            data_tab--;
            var prev_slide = $(".slide[data-slick-index=" + data_tab + "]").html();
            var prev_back = $(".slide[data-slick-index=" + data_tab + "]").css("background-image");
            $(".preview-slide").html(prev_slide);
            $(".preview-slide").css("background-image", prev_back);
            $(".preview-slide").fadeIn();
        },
        function() {
            $(".preview-slide").css("display", "none");
            $(".preview-slide").fadeOut();
        }
    );

    $(document).on("click", ".search-button", function() {
        
        $(".search-block").slideToggle(500);

    });

    $(document).on("click", ".tab-skills", function(e) {
        
        e.preventDefault();
        $('.tab-skills').skillBars({

            from: 0,       
            to: false,      
            speed: 2000,   
            interval: 100,    
            decimals: 0,      
            onUpdate: null,   
            onComplete: null,   
            classes:{
                skillBarBar : '.skillbar-bar',
            }
        });

    });

    var counter = 1;
    $(".about-tab_list li").each(function() {
        $(this).attr("data-tab", counter);
        counter++;
    });

    counter = 1;
    $(".about-tab_content > div").each(function() {
        $(this).attr("data-tab", counter);
        counter++;
    });


    $(document).on("click", ".about-tab_list li", function(e) {

        e.preventDefault();
        var tab_id = $(this).attr("data-tab");
        $(".active[data-tab]").removeClass("active");
        $('[data-tab="' + tab_id + '"]').addClass("active");

    });

    $(".isotope-item").hover (
        function() {
            $(this).children(".isotope-item_mask").fadeIn();
        },
        function() {
            $(this).children(".isotope-item_mask").fadeOut();
        }
    );

    var grid = $(".isotope-grid").isotope({
    
    });

    $(document).on( "click", ".buttons-group_link", function() {
        var filterValue = $(this).attr('data-filter');
        grid.isotope({ filter: filterValue });
    });

    var counter = 1;
    $(".services-list li").each(function() {
        $(this).attr("data-tab", counter);
        counter++;
    });

    counter = 1;
    $(".services-content").each(function() {
        $(this).attr("data-tab", counter);
        counter++;
    });


    $(document).on("click", ".services-list li", function(e) {

        e.preventDefault();
        var tab_id = $(this).attr("data-tab");
        $(".active[data-tab]").removeClass("active");
        $('[data-tab="' + tab_id + '"]').addClass("active");

    });

    var top_show = 150;
    var delay = 1000;
    var show = true;

    $(document).scroll(function() {

        if(!show) return false;

        var scroll_top = $(window).scrollTop();
        var block_pos = $("#fact").offset().top;
        if (scroll_top + $(window).height() > block_pos) {
            $('.fact-number-1').stop().animateNumber({ number: 4609 }, 2000);
            $('.fact-number-2').stop().animateNumber({ number: 3470 }, 2000);
            $('.fact-number-3').stop().animateNumber({ number: 2980 }, 2000);
            $('.fact-number-4').stop().animateNumber({ number: 1980 }, 2000);
            show = false;
        }

        if ($(this).scrollTop() > top_show) {
            $('.to-the-top').fadeIn();
        } else {
            $('.to-the-top').fadeOut();
        }

    });

    $('.feedback-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        initialSlide: 2,
        autoplay: true,
        fade: true,
        asNavFor: '.feedback-nav'
    });
    $('.feedback-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.feedback-slider',
        dots: false,
        focusOnSelect: true
    });

    $(document).on("click",".menu-item a", function(e) {
        e.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(document).on("click", ".to-the-top", function() {

        $('body, html').animate({
            scrollTop: 0
        }, delay);

    });

});