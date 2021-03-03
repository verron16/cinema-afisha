// slider actions

const actionSlider = new Swiper('.actions-slider', {
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
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
    }
});

// slider reviews 

const reviewSlider = new Swiper('.reviews-slider', {
  loop: true,
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});