const hambPop = document.querySelector('.navBurger');
const hambButton = document.querySelector('.navBurgerBox__btn');
const hambSpan = document.querySelectorAll('.navBurgerBox__span');
const boxBurger = document.querySelector('.navBurgerBox');
let hambActiveFlag = false;
const navigation = document.querySelector('.nav');
const navAllLinks = document.querySelectorAll('.nav__link, columnTexts__btn, .squareOffers__offer, .links__text');
const navAllBurgerLinks = document.querySelectorAll('.navBurger__link');
const allOffers = document.querySelectorAll('.squareOffers__offer');

navAllLinks.forEach((navLink) => {
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

navAllBurgerLinks.forEach((navBurgerLink) => {
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

boxBurger.addEventListener('click', (e) => {

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

jQuery(document).ready(($) => {
    "use strict";
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
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

    while (--index && window.scrollY + 200 < sections[index].offsetTop) {}

    links.forEach((link) => link.classList.remove('nav__element--selected'));
    links[index].classList.add('nav__element--selected');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);


var lastScrollTop = 0;

function hideNav() {
    var st = this.scrollY;

    if (st > lastScrollTop) {
        setTimeout(function () {
            navigation.classList.add('nav--opacityNone');
        }, 300);
    } else {
        navigation.classList.remove('nav--opacityNone');
    }

    lastScrollTop = st;
}

window.addEventListener('scroll', hideNav);

const scene = document.getElementById('scene');
const scene3 = document.getElementById('scene3');
const parallaxInstance = new Parallax(scene);
const parallaxInstance3 = new Parallax(scene3);

//send email
$(".contact__button").click(function (e) {
    e.preventDefault();

    let errorText = $(".contact__errors");

    let contact__name = $(".contact__name").val();
    contact__name = DOMPurify.sanitize(contact__name);

    let contact__email = $(".contact__email").val();
    contact__email = DOMPurify.sanitize(contact__email);

    let contact__message = $(".contact__message").val();
    contact__message = DOMPurify.sanitize(contact__message);

    let contact__tel = $(".contact__tel").val();
    contact__message = DOMPurify.sanitize(contact__tel);

    if (!$(".contact__name").val()) {
        errorText.text("Podaj swoje imię.");
        $(".contact__name").focus();
        return false;
    }

    if (!$(".contact__email").val()) {
        errorText.text("Podaj swój email.");
        $(".contact__email").focus();
        return false;
    }

    function validateEmail(email) {
        let re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const email = $(".contact__email").val();
    if (validateEmail(email)) {
        console.log("correct format");
    } else {
        errorText.text("Podaj poprawny email.");
        $(".contact__email").focus();
        return false;
    }

    if (!$(".contact__tel").val()) {
        errorText.text("Podaj numer telefonu.");
        $(".contact__tel").focus();
        return false;
    }

    if (!$(".contact__message").val()) {
        errorText.text("Uzupełnij wiadomość.");
        $(".contact__message").focus();
        return false;
    }


    $.ajax({
        type: "POST",
        contentType: "application/x-www-form-urlencoded; charset=iso-8859-1",
        url: "gmail.php",

        data: {
            contact__email: contact__email,
            contact__name: contact__name,
            contact__message: contact__message,
            contact__tel: contact__tel
        },

        success: function (result) {

            console.log(result);
            if (result.replace(/\s/g, '') == "ok") {
                $(".contact__email").val("");
                $(".contact__message").val("");
                $(".contact__name").val("");
                $(".contact__tel").val("");

                errorText.text('Wiadomość wysłano pomyślnie.')

            } else if (result.replace(/\s/g, '') !== "ok") {
                errorText.text('Błąd, nie udało się wysłać wiadomości.')
            }

        }
    });

});