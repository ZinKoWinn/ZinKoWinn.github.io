$(document).ready(function() {

    $('nav').removeClass('sticky');

    // Sticky Navigation
    $('.js-section-about-me').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '150px'
    });


    // Mobile Navigation

    $('.js-nav-icon').click(function() {
        $('.js-navbar').slideToggle(200);
        if ($('.js-nav-icon i').hasClass('fa-bars')) {
            $('.js-nav-icon i').addClass('fa-times');
            $('.js-nav-icon i').removeClass('fa-bars');
        } else {
            $('.js-nav-icon i').addClass('fa-bars');
            $('.js-nav-icon i').removeClass('fa-times');
        }
    });


    $('li').click(function() {
        $('.js-navbar').slideToggle(0);
        if ($('.js-nav-icon i').hasClass('fa-bars')) {
            $('.js-nav-icon i').addClass('fa-times');
            $('.js-nav-icon i').removeClass('fa-bars');
        } else {
            $('.js-nav-icon i').addClass('fa-bars');
            $('.js-nav-icon i').removeClass('fa-times');
        }

    });


    // Scrool Navigation Button Effect
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

});

// Slide show

let slideIndex = 1;
showSlides(slideIndex, 'slide-1');
showSlides(slideIndex, 'slides');

function plusSlides(n, slideName) {
    showSlides(slideIndex += n, slideName);
}

function currentSlide(n, slideName) {
    showSlides(slideIndex = n, slideName);
}

function showSlides(n, slideName) {
    let i;
    let slides = document.getElementsByClassName(slideName);
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}