//  Show Menu 
const toggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const close = document.getElementById('nav-close');

//Validate that variables exist
if (toggle) {
    //we add the show-menu class to the div tag with the nav_menu class
    toggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (close) {
    close.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

//Remove menu mobile
const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height,add the scroll-header classto the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// show scroll
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher tha 200 viewport height, add the show-scroll class to the a tag with the scroll-top lass
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

//Scroll Section active link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 80;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
        }

        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);