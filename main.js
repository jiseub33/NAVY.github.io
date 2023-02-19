const toogleBtn = document.querySelector('.header-toogleBtn')
const mobile = document.querySelector('.header-mobile')
const menu = document.querySelector('.header-menu')

toogleBtn.addEventListener('click', () => {
    mobile.classList.toggle('active');
    menu.classList.toggle('active');
});