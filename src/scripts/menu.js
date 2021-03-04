const menuBurger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu-item-link');
console.log(menuLink);

menuBurger.addEventListener('click', openMenu);
menuLink.forEach(link => link.addEventListener('click', closeMenu))

function openMenu() {
menuBurger.classList.toggle('menu-open');
menu.classList.toggle('menu-open');
}

function closeMenu() {
    menuBurger.classList.remove('menu-open');
    menu.classList.remove('menu-open');
}




