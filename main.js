const toogleBtn = document.querySelector('.header-toogleBtn')
const mobile = document.querySelector('.header-mobile')
const menu = document.querySelector('.header-menu')

toogleBtn.addEventListener('click', () => {
    mobile.classList.toggle('active');
    menu.classList.toggle('active');
});

function moveScrollright() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX - 200);
};

function moveScrollLeft() {
	var _scrollX = $('.shortcuts').scrollLeft();
	$('.shortcuts').scrollLeft(_scrollX + 200);
};