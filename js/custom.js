/*

Template: GenIOT- Smart Devices Multipurpose HTML5 Template
Author: iqonicthemes.in
Version: 1.0
Design and Developed by: iqonicthemes.in

*/

/*================================================
[  Table of contents  ]
================================================
::Page Loader
::Image Filter
::Random Num
::Smooth Scroll
::Hide Menu
::More Content
::Back to Top
::Wow Animation
::Header
::Magnific Popup
::Owl Carousel
::Jarallax
======================================
[ End table content ]
======================================*/

"use strict";

/*************************
Page Loader
*************************/
function preloader() {
    $("#load").fadeOut();
    $('#loading').delay().fadeOut();

}


/*************************
Image Filter
*************************/
function imagefilter() {
    var el = document.getElementById('dual');
    if(el){

    ['none', 'mono', 'tonal', 'noir', 'chrome', 'process', 'transfer', 'instant'].forEach(function(item) {
        this.querySelector('.' + item).addEventListener('click', function() {
            this.querySelector('.image').dataset.filter = item;
        }.bind(this));
    }, document);
    }
}


/*************************
Random Num
*************************/
function randomNum() {

    "use strict";
    return Math.floor(Math.random() * 9) + 1;

}
var loop1, loop2, loop3, time = 30,
    i = 0,
    number, selector3 = document.querySelector('.thirdDigit'),
    selector2 = document.querySelector('.secondDigit'),
    selector1 = document.querySelector('.firstDigit');
if(selector3){
loop3 = setInterval(function() {
    "use strict";
    if (i > 40) {
        clearInterval(loop3);
        selector3.textContent = 4;
    } else {
        selector3.textContent = randomNum();
        i++;
    }
}, time);
}
if(selector2){
loop2 = setInterval(function() {
    "use strict";
    if (i > 80) {
        clearInterval(loop2);
        selector2.textContent = 0;
    } else {
        selector2.textContent = randomNum();
        i++;
    }
}, time);
}
if(selector1){
loop1 = setInterval(function() {
    "use strict";
    if (i > 100) {
        clearInterval(loop1);
        selector1.textContent = 4;
    } else {
        selector1.textContent = randomNum();
        i++;
    }
}, time);
}


/*************************
Smooth Scroll
*************************/
function smooth() {
    $(document).on('click', 'header a[href^="#"], section a, div a', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    $(window).on("scroll", onScroll);
    $('header .navbar-nav a[href^="#"]').on('click', function(e) {
        $(window).off("scroll");
        $('header .navbar-nav a').each(function() {
            $(this).parent().removeClass('active');
        })
        $(this).parent().addClass('active');
        var target = this.hash;

        //if( target.length ) {
        var nav = $(target);
        if (nav.length) {
            var contentNav = nav.offset().top;
            //e.preventDefault();
            $('html, body').stop().animate({
                'scrollTop': contentNav
            }, 500, 'swing', function() {
                window.location.hash = target;
                $(window).on("scroll", onScroll);
            });
        }
    });

    function onScroll(event) {
        var scrollPos = $(window).scrollTop() + 80;
        $('header .navbar-nav a[href^="#"]').each(function() {
            if ($(this).attr("href").indexOf('https://') == -1) {
                var refElement = $($(this).attr("href"));
            } else {
                var refElement = $(this);
            }

            if ($(this).attr("href").indexOf('https://') == -1) {
                if (!refElement.length) return; // if the length is 0 (nothing selected) skip the rest of this iteration where the accessing of the position happens
                if (refElement.position().top <= scrollPos) {
                    $(document).find('.nav-item').removeClass("active");
                    $(this).parent().addClass("active");
                } else {
                    $(this).parent().removeClass("active");
                }
            }

        });
    }



}

/*************************
Hide Menu
*************************/
function hidemenu() {
    $(document).ready(function() {
        $("header a").click(function(event) {
            $(".navbar-collapse").collapse('hide');
        });
    });
}


/*************************
More Content
*************************/
function morecontent() {
    $(window).load(function() {


        $('.text').hide();
        $(".btn1").click(function() {
            var k = $(".btn1").text();
            if (k == '-') {
                $('.text').slideUp();
                $(this).text('+');
            } else {
                $('.text').slideDown();
                $(this).text('-');
            }
        });

    });
}


/*************************
Back to Top
*************************/
function backtotop() {
    $('#back-to-top').fadeOut();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 250) {
            $('#back-to-top').fadeIn(1500);
        } else {
            $('#back-to-top').fadeOut(500);
        }
    });
    // scroll body to 0px on click
    $('#top').on('click', function() {
        $('top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
}



/*************************
Wow Animation
*************************/
function wowanimation() {
    new WOW().init();
}



/*************************
Header
*************************/
function header() {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 40) {
            $('header').addClass('menu-sticky');
        } else {
            $('header').removeClass('menu-sticky');
        }
    });
}


/*************************
Magnific Popup
*************************/
function popupgallery() {
    $('.popup-gallery').magnificPopup({
        delegate: 'a.popup-img',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        },
    });

    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

}

function popupvideo() {
    jQuery('.iq-video').magnificPopup({
        type: 'iframe'
    });


}



/*************************
Owl Carousel
*************************/
function owlcarousel() {
    $(".owl-carousel").each(function() {
        var $this = $(this),
            $items = ($this.data('items')) ? $this.data('items') : 1,
            $loop = ($this.data('loop')) ? $this.data('loop') : true,
            $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
            $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
            $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
            $space = ($this.attr('data-space')) ? $this.data('space') : 30;
        $(this).owlCarousel({
            loop: $loop,
            items: $items,
            responsive: {
                0: {
                    items: $this.data('xx-items') ? $this.data('xx-items') : 1
                },
                600: {
                    items: $this.data('xs-items') ? $this.data('xs-items') : 1
                },
                767: {
                    items: $this.data('sm-items') ? $this.data('sm-items') : 2
                },
                992: {
                    items: $this.data('md-items') ? $this.data('md-items') : 2
                },
                1190: {
                    items: $this.data('lg-items') ? $this.data('lg-items') : 3
                },
                1200: {
                    items: $items
                }
            },
            dots: $navdots,
            margin: $space,
            nav: $navarrow,
            navText: ["<i class='fa fa-angle-left fa-2x'></i>", "<i class='fa fa-angle-right fa-2x'></i>"],
            autoplay: $autoplay,
            autoplayHoverPause: true
        });

    });

}



/*************************
Jarallax
*************************/
function jarallax() {
    $('.jarallax').jarallax({
        speed: 0.2
    });

}


/*************************
All function are called here 
*************************/
$(document).ready(function() {
    backtotop(),
        owlcarousel(),
        popupgallery(),
        popupvideo(),
        randomNum(),
        hidemenu(),
        preloader(),
        morecontent(),
        imagefilter(),
        header();
});


$(window).on('load', function() {
    smooth(),
    wowanimation();
});