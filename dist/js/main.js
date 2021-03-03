const allTabs = document.querySelectorAll('.faq-wrapper-item');
const allAnswer = document.querySelector('.faq-wrapper-item-answer');

allTabs.forEach(tab => tab.addEventListener('click', openTabs));

function openTabs(e) {
    let elem = e.target.closest('.faq-wrapper-item');
    document.querySelectorAll('.faq-wrapper-item').forEach(item => {
        item.classList.remove('opened-accord');
    })
    elem.classList.add('opened-accord');
}
const menuBurger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');


menuBurger.addEventListener('click', openMenu)

function openMenu() {
menuBurger.classList.toggle('menu-open');
menu.classList.toggle('menu-open');
}






const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29yZGlvbi5qcyIsIm1lbnUuanMiLCJvcHRpb25zLmpzIiwic2xpZGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhbGxUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcS13cmFwcGVyLWl0ZW0nKTtcclxuY29uc3QgYWxsQW5zd2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhcS13cmFwcGVyLWl0ZW0tYW5zd2VyJyk7XHJcblxyXG5hbGxUYWJzLmZvckVhY2godGFiID0+IHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYWJzKSk7XHJcblxyXG5mdW5jdGlvbiBvcGVuVGFicyhlKSB7XHJcbiAgICBsZXQgZWxlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5mYXEtd3JhcHBlci1pdGVtJyk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmFxLXdyYXBwZXItaXRlbScpLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuZWQtYWNjb3JkJyk7XHJcbiAgICB9KVxyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdvcGVuZWQtYWNjb3JkJyk7XHJcbn0iLCJjb25zdCBtZW51QnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1iYXItYnVyZ2VyJyk7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xyXG5cclxuXHJcbm1lbnVCdXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTWVudSlcclxuXHJcbmZ1bmN0aW9uIG9wZW5NZW51KCkge1xyXG5tZW51QnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xyXG5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtb3BlbicpO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiY29uc3Qgc2VsZWN0U2luZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLl9fc2VsZWN0Jyk7XHJcbmNvbnN0IHNlbGVjdFNpbmdsZV90aXRsZSA9IHNlbGVjdFNpbmdsZS5xdWVyeVNlbGVjdG9yKCcuX19zZWxlY3RfX3RpdGxlJyk7XHJcbmNvbnN0IHNlbGVjdFNpbmdsZV9sYWJlbHMgPSBzZWxlY3RTaW5nbGUucXVlcnlTZWxlY3RvckFsbCgnLl9fc2VsZWN0X19sYWJlbCcpO1xyXG5cclxuLy8gVG9nZ2xlIG1lbnVcclxuc2VsZWN0U2luZ2xlX3RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGlmICgnYWN0aXZlJyA9PT0gc2VsZWN0U2luZ2xlLmdldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScpKSB7XHJcbiAgICBzZWxlY3RTaW5nbGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJycpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBzZWxlY3RTaW5nbGUuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgJ2FjdGl2ZScpO1xyXG4gIH1cclxufSk7XHJcblxyXG4vLyBDbG9zZSB3aGVuIGNsaWNrIHRvIG9wdGlvblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdFNpbmdsZV9sYWJlbHMubGVuZ3RoOyBpKyspIHtcclxuICBzZWxlY3RTaW5nbGVfbGFiZWxzW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2dCkgPT4ge1xyXG4gICAgc2VsZWN0U2luZ2xlX3RpdGxlLnRleHRDb250ZW50ID0gZXZ0LnRhcmdldC50ZXh0Q29udGVudDtcclxuICAgIHNlbGVjdFNpbmdsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCAnJyk7XHJcbiAgfSk7XHJcbn1cclxuIiwiLy8gc2xpZGVyIGFjdGlvbnNcclxuXHJcbmNvbnN0IGFjdGlvblNsaWRlciA9IG5ldyBTd2lwZXIoJy5hY3Rpb25zLXNsaWRlcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBzcGFjZUJldHdlZW46IDMwLFxyXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxyXG4gICAgYXV0b0hlaWdodDogZmFsc2UsXHJcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICBjbGlja2FibGU6IHRydWVcclxuICAgIH0sXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBicmVha3BvaW50czoge1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIHNsaWRlciByZXZpZXdzIFxyXG5cclxuY29uc3QgcmV2aWV3U2xpZGVyID0gbmV3IFN3aXBlcignLnJldmlld3Mtc2xpZGVyJywge1xyXG4gIGxvb3A6IHRydWUsXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcclxuICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxufSk7Il19
