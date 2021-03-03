const menuBurger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');


menuBurger.addEventListener('click', openMenu)

function openMenu() {
menuBurger.classList.toggle('menu-open');
menu.classList.toggle('menu-open');
}





