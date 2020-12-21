$(function () {
    "use strict";
    // PRELOADER
    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    // STICKY HEAD
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
        } else {
            $(".header_navbar").addClass("sticky");
        }
    });

    // HEADER ELEMENT HIGHLIGHTING
    var scrollLink = $('.page-scroll');
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 73;
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

    // MOBILE COLLAPSE NAVBAR
    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });
    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });
    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    if ($('.progress_line').length) {
        $('.progress_line').appear(function () {
            var el = $(this);
            var percent = el.data('width');
            $(el).css('width', percent + '%');
        }, {
            accY: 0
        });
    }

    // SKILLS COUNTER UP EFFECT
    $('.counter').counterUp({
        delay: 10,
        time: 1600,
    });

    // TOOLTIP INITIALISATION
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });

    // APPEAR ON SCROLL INITIALISATION
    AOS.init({
        disable: "mobile",
        duration: 1300,
        anchorPlacement: 'top-bottom',
        once: true
    });

    // PROJECTS SECTION CARROUSAL
    $('.project_cards_container').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                }, {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }, {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }]
    });

    // READING SECTION COLLAPSE EFFECT
    $('.collapse_button').click(function() {
        let targetDiv = $("#"+$(this).data("target-id"));
        let buttonIcon = $(this).children("i.lni");
        let gradientDiv = $(this).parent();

        if(targetDiv.css("height") == "250px") {
            targetDiv.css('height', 'initial');
            let height = targetDiv.css("height");
            targetDiv.css('height', '250px');
            targetDiv.animate({height: height}, 'slow');
            gradientDiv.animate({bottom: 0});
            buttonIcon.addClass('lni-chevron-up');
        }
        else {
            targetDiv.animate({height: "250px"}, "slow");
            buttonIcon.removeClass('lni-chevron-up');
            gradientDiv.animate({bottom: 80});
        }
    });

    // PROJECTS SECTION HOVER EFFECT
    $('.project_card').hover(function() {
        let coverImage = $(this).find("img");
        let logoDiv = $(this).find(".logo_div");
        let detailsDiv = $(this).find(".details_div");

        coverImage.animate({width: '+=20px'});
        detailsDiv.animate({height: '+=40px'});
        logoDiv.animate({height: '-=40px'});
    },
    function() {
        let coverImage = $(this).find("img");
        let logoDiv = $(this).find(".logo_div");
        let detailsDiv = $(this).find(".details_div");
        
        coverImage.animate({width: '-=20px'});
        detailsDiv.animate({height: '-=40px'});
        logoDiv.animate({height: '+=40px'});
    });
});