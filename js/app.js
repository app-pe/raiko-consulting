import { navbar } from './modules/navbar.js';
import { footer_nav } from './modules/footer.js';
import { footer_autor } from './modules/footer.js';
import { carousel_lp } from './modules/carousel.js';
import { about } from './modules/about.js';
import { services } from './modules/services.js';
import { features } from './modules/features.js';
import { team } from './modules/team.js';
import { pricing } from './modules/pricing.js';
import { testimonial } from './modules/testimonial.js';
import { blog } from './modules/blog.js';


var show_navbar = document.getElementById("show_navbar");
var show_footer_nav = document.getElementById("show_footer_nav");
var show_footer_autor = document.getElementById("show_footer_autor");
var show_carousel_lp = document.getElementById("show_carousel_lp");
var show_about = document.getElementById("show_about");
var show_services = document.getElementById("show_services");
var show_features = document.getElementById("show_features");
var show_team = document.getElementById("show_team");
var show_pricing = document.getElementById("show_pricing");
var show_testimonial = document.getElementById("show_testimonial");
var show_blog = document.getElementById("show_blog");


show_navbar.innerHTML = navbar;
show_footer_nav.innerHTML = footer_nav;
show_footer_autor.innerHTML = footer_autor;
show_carousel_lp.innerHTML = carousel_lp;
show_about.innerHTML = about;
show_services.innerHTML = services;
show_features.innerHTML = features;
show_team.innerHTML = team;
show_pricing.innerHTML = pricing;
show_testimonial.innerHTML = testimonial;
show_blog.innerHTML = blog;

(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        margin: 30,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            }
        }
    });
    
})(jQuery);

