"use strict"

const hambPop = document.querySelector('.navBurger');
const hambButton = document.querySelector('.navBurgerBox__btn');
const hambSpan = document.querySelectorAll('.navBurgerBox__span');
const boxBurger = document.querySelector('.navBurgerBox');
let hambActiveFlag = false;
const navigation = document.querySelector('.nav');
const navAllLinks = document.querySelectorAll('.nav__link, .columnTexts__btn, .squareOffers__offer, .links__text');
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

// const aboutMoreInfoBtn = document.querySelector('.columnTexts__btn--aboutMoreInfo');
// const aboutMoreInfo = document.querySelector('.columnTexts__moreInfo');
// aboutMoreInfoBtn.addEventListener('click', () => {
//     aboutMoreInfo.classList.toggle('columnTexts__moreInfo--hide');
// })

$(document).ready(function() {
    $('.columnTexts__btn--hideStart').click(function() {
        $('.columnTexts__moreInfo--hideStart').slideToggle("slow");
    });

    $('.columnTexts__btn--hideAbout').click(function() {
        $('.columnTexts__moreInfo--hideAbout').slideToggle("slow");
    });
});

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

    let contact__name = document.querySelector(".contact__name").value;
    contact__name = DOMPurify.sanitize(contact__name);

    let contact__email = document.querySelector(".contact__email").value;
    contact__email = DOMPurify.sanitize(contact__email);

    let contact__message = document.querySelector(".contact__message").value;
    contact__message = DOMPurify.sanitize(contact__message);

    let contact__tel = document.querySelector(".contact__tel").value;
    contact__message = DOMPurify.sanitize(contact__tel);

    const contactInputs = document.querySelectorAll('.contact__input');

    const clearErrorInfos = () => {
        const errorInfos = document.querySelectorAll('.contact__errors');
        errorInfos.forEach(element => {
            element.remove();
        });
    }

    let focusFlag = false;

    const validateInputs = () => {
        contactInputs.forEach(element => {
            const errorInfo = document.createElement("p");
            errorInfo.classList.add('contact__errors');
            const email = $(".contact__email").val();

            function validateEmail(email) {
                let re = /\S+@\S+\.\S+/;
                return re.test(email);
            }

            if (!element.value) {
                if (focusFlag == false) {
                    element.focus();
                    focusFlag = true;
                }

                errorInfo.textContent = 'Pole jest wymagane.';
                element.insertAdjacentHTML('afterEnd', errorInfo.outerHTML)
                return false;
            } else if (element.value && !validateEmail(email) && element.classList.contains('contact__input--email')) {
                element.focus();
                focusFlag = true;
                errorInfo.textContent = 'Wpisz poprawny email.';
                element.insertAdjacentHTML('afterEnd', errorInfo.outerHTML)
                return false;
            }

        });
    }

    const clearInputsOnTyping = () => {
        contactInputs.forEach(input => {
            input.addEventListener('keydown', clearInput => {
                input.nextSibling.textContent = '';
            })
        })
    }

    clearErrorInfos();
    validateInputs();
    clearInputsOnTyping();

    if (focusFlag == true) {
        return false;
    } else {

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
                const errorInfo = document.createElement("p");

                if (result.replace(/\s/g, '') == "ok") {
                    document.querySelector(".contact__email").value = '';
                    document.querySelector(".contact__message").value = '';
                    document.querySelector(".contact__name").value = '';
                    document.querySelector(".contact__tel").value = '';

                    errorInfo.textContent = 'Wiadomość wysłano pomyślnie.';
                    errorInfo.classList.add('contact__errors', 'contact__errors--success');
                    document.querySelector(".contact__message").insertAdjacentHTML('afterEnd', errorInfo.outerHTML);
                } else if (result.replace(/\s/g, '') !== "ok") {
                    errorInfo.textContent = 'Błąd, nie udało się wysłać wiadomości.';
                    errorInfo.classList.add('contact__errors');
                    document.querySelector(".contact__message").insertAdjacentHTML('afterEnd', errorInfo.outerHTML);
                }
            }
        });
    }
});


// mocha.run();