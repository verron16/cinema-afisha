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