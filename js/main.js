// navigation //
const hambPop = document.querySelector('.navBurger');
const hambButton = document.querySelector('.navBurgerBox__btn');
const hambSpan = document.querySelectorAll('.navBurgerBox__span');
const boxBurger = document.querySelector('.navBurgerBox');
let hambActiveFlag = false;
const navAllLinks = document.querySelectorAll('.nav__link, .button, .squareOffers__offer');
const navAllBurgerLinks = document.querySelectorAll('.navBurger__link');
const allOffers = document.querySelectorAll('.squareOffers__offer');

navAllLinks.forEach(function (navLink) {
    navLink.addEventListener('click', function (e) {

        e.preventDefault();
        const element = document.querySelector("[data-sectionin=" + this.dataset.section + "]");
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scroll({
            top: offsetPosition,
            behavior: 'smooth'
        });

    })
})

navAllBurgerLinks.forEach(function (navBurgerLink) {

    navBurgerLink.addEventListener('click', function (e) {
        e.preventDefault();
        hambActiveFlag = !hambActiveFlag;
        hambButton.classList.toggle('navBurgerBox__btn--active');
        hambButton.classList.toggle('navBurgerBox__btn--notActive');
        hambPop.classList.toggle('navBurger--show');
        hambPop.classList.toggle('navBurger--hide');

        const goToSection = "[data-sectionin=" + this.dataset.section + "]";
        document.querySelector(goToSection).scrollIntoView({
            behavior: 'smooth'
        });

    })
})

boxBurger.addEventListener('click', function (e) {
    e.preventDefault();
    hambButton.classList.toggle('navBurgerBox__btn--active');
    hambButton.classList.toggle('navBurgerBox__btn--notActive');
    hambPop.classList.toggle('navBurger--show');
    hambPop.classList.toggle('navBurger--hide');
    hambPop.style.display = 'block';
})

// changes on scrolll //
window.addEventListener('scroll', function () {

    var isSafari = window.safari !== undefined;
    let bodyelem = '';

    if (isSafari) {
        bodyelem = document.querySelector('body')
    } else {
        bodyelem = window;
    }

    const windowHeight = bodyelem.innerHeight;
    const scrollValue = bodyelem.scrollY;
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.stickyLogo');

    // change nav color //
    if ((scrollValue < 20)) {
        nav.classList.remove('nav--transBgc');
        nav.classList.add('nav--basic');

    } else if ((scrollValue < windowHeight)) {
        nav.classList.add('nav--transBgc');
        nav.classList.remove('nav--basic');
    }
})


//TESTIMONIAL

jQuery(document).ready(function($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 4500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });
});