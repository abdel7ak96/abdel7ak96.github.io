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
        prevArrow: '<button class="circle-button carousel-left-button"><i class="lni lni-chevron-left"></i></button>',
        nextArrow: '<button class="circle-button carousel-right-button"><i class="lni lni-chevron-right"></i></button>',
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

    // TODO : this looks messy, clean it!
    // Tip : get rid of the vanilla JS and strictly use JQuery selections
    // READING SECTION COLLAPSE EFFECT
    $('.collapse_button').click(function() {
        let books_row = $("#"+$(this).data("id"));
        let iconChildElement = this.firstElementChild;
        let navParentElement = $("#"+$(this).data("id")+"-div");
        if(books_row.css("height") == "250px") {
            books_row.css('height', 'inherit');
            let height = books_row.height();
            books_row.css('height', '250px');
            books_row.animate({height: height}, "slow");
            navParentElement.animate({bottom: 0});
            iconChildElement.className = "lni lni-chevron-up"
        } else {
            books_row.animate({height: '250px'}, "slow");
            iconChildElement.className = "lni lni-chevron-down"
            navParentElement.animate({bottom: 80});
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