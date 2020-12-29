// navigation //
const hambPop = document.querySelector('.navBurger');
const hambButton = document.querySelector('.navBurgerBox__btn');
const hambSpan = document.querySelectorAll('.navBurgerBox__span');
const boxBurger = document.querySelector('.navBurgerBox');
let hambActiveFlag = false;
const navAllLinks = document.querySelectorAll('.nav__link');
const navAllBurgerLinks = document.querySelectorAll('.navBurger__link');

navAllLinks.forEach(function (navLink) {

    navLink.addEventListener('click', function (e) {
        e.preventDefault();
        const goToSection = "[data-sectionin=" + this.dataset.section + "]";
        document.querySelector(goToSection).scrollIntoView({
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

    // change nav color //
    if ((scrollValue < 50)) {
        nav.classList.remove('nav--transBgc');
        nav.classList.add('nav--basic');

    } else if ((scrollValue < windowHeight)) {
        nav.classList.add('nav--transBgc');
        nav.classList.remove('nav--basic');

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 2)) {
        nav.classList.remove('nav--solidBgc');

    } else if ((scrollValue >= windowHeight) && (scrollValue < windowHeight * 3)) {
        nav.classList.add('nav--solidBgc');

    }
})