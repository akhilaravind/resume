(function ($) {
    'use strict';
    /* Window Load */
    $(window).on('load', function () {
        $('.loader').fadeOut(200);
        $('.line').addClass('active');
    });


    /* Navbar scroll*/
    $('.navbar-nav ul li a').on('click', function () {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top)
            }, 1000);
            $('body').removeClass('menu-is-opened').addClass('menu-is-closed');
            return false;
        }
    });

    /* Full page scroll*/
    if ($('#pagepiling').length > 0) {

        $('#pagepiling').pagepiling({
            scrollingSpeed: 280,
            navigation: false,
            menu: '.navbar-nav',
            anchors: ['home', 'about', 'experience', 'skills', 'projects', 'contact'],
            afterRender: function (anchorLink, index) {
                NavbarColor();

            },
            afterLoad: function (anchorLink, index) {
                $('.pp-section .intro').removeClass('animate');
                $('.active .intro').addClass('animate');
                NavbarColor();
            }
        });



        function NavbarColor() {
            if ($('.pp-section.active').hasClass('navbar-is-white')) {
                $('.navbar-desctop').addClass('navbar-white');
                $('.progress-nav').addClass('progress-nav-white');
                $('.navbar-bottom').addClass('navbar-bottom-white');
            }
            else {
                $('.navbar-desctop').removeClass('navbar-white');
                $('.progress-nav').removeClass('progress-nav-white');
                $('.navbar-bottom').removeClass('navbar-bottom-white');
            }
        }
    }


    /* Navbar toggler */
    $('.toggler').on('click', function () {
        $('body').addClass('menu-is-open');
    });

    $('.close, .click-capture').on('click', function () {
        $('body').removeClass('menu-is-open');
    });


    /* Navbar mobile */
    $('.navbar-nav-mobile li a').on('click', function () {
        $('body').removeClass('menu-is-open');
        $('.navbar-nav-mobile li a').removeClass('active');
        $(this).addClass('active');
    });

    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    /* Carousel experience*/
    $('.carousel-experience').owlCarousel({
        loop: true,
        margin: 45,
        dots: true,
        nav: true,
        smartSpeed: 1000,
        items: 1
    });

    /* Carousel testimonials */
    $('.carousel-testimonials').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        items: 1
    });

    /* Send form */
    if ($('.js-ajax-form').length) {
        $('.js-ajax-form').each(function () {
            $(this).on('submit', function (event) {
                event.preventDefault();
                var data = new FormData();
                const form = event.target;
                for (let i = 0; i < form.elements.length; i++) {
                    const elem = form.elements[i];
                    data.append(elem.name, elem.value)
                }
                fetch(event.target.action, {
                    method: event.target.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    $('#success-message').show();
                    $('#success-message').hide(2000);
                    this.reset()
                }).catch(error => {
                    $('#error-message').show();
                    $('#error-message').hide(2000);
                });
            })
        });

    }

})(jQuery);
