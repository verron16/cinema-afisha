"use strict";

var allTabs = document.querySelectorAll('.faq-wrapper-item');
var allAnswer = document.querySelector('.faq-wrapper-item-answer');
allTabs.forEach(function (tab) {
  return tab.addEventListener('click', openTabs);
});

function openTabs(e) {
  var elem = e.target.closest('.faq-wrapper-item');
  document.querySelectorAll('.faq-wrapper-item').forEach(function (item) {
    item.classList.remove('opened-accord');
  });
  elem.classList.add('opened-accord');
}

var menuBurger = document.querySelector('.top-bar-burger');
var menu = document.querySelector('.menu');
var menuLink = document.querySelectorAll('.menu-item-link');
console.log(menuLink);
menuBurger.addEventListener('click', openMenu);
menuLink.forEach(function (link) {
  return link.addEventListener('click', closeMenu);
});

function openMenu() {
  menuBurger.classList.toggle('menu-open');
  menu.classList.toggle('menu-open');
}

function closeMenu() {
  menuBurger.classList.remove('menu-open');
  menu.classList.remove('menu-open');
}

var selectSingle = document.querySelector('.__select');
var selectSingle_title = selectSingle.querySelector('.__select__title');
var selectSingle_labels = selectSingle.querySelectorAll('.__select__label'); // Toggle menu

selectSingle_title.addEventListener('click', function () {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
}); // Close when click to option

for (var i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', function (evt) {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
} // slider actions


var actionSlider = new Swiper('.actions-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 'auto',
  autoHeight: false,
  centeredSlides: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {}
}); // slider reviews 

var reviewSlider = new Swiper('.reviews-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});