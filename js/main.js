const icon = document.querySelector('.hamburger-container');
const menu = document.querySelector('.menu');

function toggleX() {
    icon.classList.toggle('change');
    if (menu.style.height === '180px') {
        menu.style.height = '0';
    } else {
        menu.style.height = '180px';
    }
}

icon.addEventListener('click', toggleX);

const mobile = window.matchMedia("screen and (min-width: 1024px)");
mobile.addListener(function() {
    if (mobile.matches) {
        icon.classList.remove('change');
        menu.style.height = '100%';
    } else {
        menu.style.height = '0px';
    }
});