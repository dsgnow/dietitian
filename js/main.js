const hambPop = document.querySelector('.navBurger');
const hambButton = document.querySelector('.navBurgerBox__btn');
const hambSpan = document.querySelectorAll('.navBurgerBox__span');
const boxBurger = document.querySelector('.navBurgerBox');
let hambActiveFlag = false;
const navigation = document.querySelector('.nav');
const navAllLinks = document.querySelectorAll('.nav__link, .button, .squareOffers__offer');
const navAllBurgerLinks = document.querySelectorAll('.navBurger__link');
const allOffers = document.querySelectorAll('.squareOffers__offer');

navAllLinks.forEach( (navLink) => {
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

navAllBurgerLinks.forEach( (navBurgerLink) => {
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

boxBurger.addEventListener('click',  (e) => {

    e.preventDefault();
    hambButton.classList.toggle('navBurgerBox__btn--active');
    hambButton.classList.toggle('navBurgerBox__btn--notActive');
    hambPop.classList.toggle('navBurger--show');
    hambPop.classList.toggle('navBurger--hide');
    hambPop.style.display = 'block';
})

window.addEventListener('scroll', () => {

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
    const navList = document.querySelector('.nav__list');
    
    if ((scrollValue < 20)) {
        nav.classList.remove('nav--transBgc');
        nav.classList.add('nav--basic');
        navList.classList.add('nav__list--onTop');

    } else if ((scrollValue < windowHeight)) {
        nav.classList.add('nav--transBgc');
        nav.classList.remove('nav--basic');
        navList.classList.remove('nav__list--onTop');
    }
})

jQuery(document).ready( ($) => {
    "use strict";
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

const links = document.querySelectorAll('.nav__element');
const sections = document.querySelectorAll('.wrapSection');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 200 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('nav__element--selected'));
  links[index].classList.add('nav__element--selected');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);


var lastScrollTop = 0;
function hideNav () {
    var st = this.scrollY;
        
    if (st > lastScrollTop) {
    setTimeout(function(){
        navigation.classList.add('nav--opacityNone');
    }, 300);
    } else {
        navigation.classList.remove('nav--opacityNone');
    }

    lastScrollTop = st;           
}

window.addEventListener('scroll', hideNav);



