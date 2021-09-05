const toogleBtn = document.querySelector('.header-toogleBtn')
const menu = document.querySelector('.header-menu')
const icons = document.querySelector('.header-icons')

toogleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});