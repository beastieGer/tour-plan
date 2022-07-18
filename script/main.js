AOS.init();

const swiper = new Swiper('.hotel-slider', {
	// Optional parameters

	loop: true,
	effect: 'coverflow',

	// Navigation arrows
	navigation: {
		nextEl: '.slider-button--next',
		prevEl: '.slider-button--prev',
	},
});

const swiperTwo = new Swiper('.reviews-slider', {
	// Optional parameters

	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: '.reviews-button-next',
		prevEl: '.reviews-button-prev',
	},
});

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function () {
	document.querySelector('.menu').classList.toggle('menu--visible');
});

const closeBtn = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
const cardpackBtn = document.querySelectorAll('.cardpack-footer__button');

closeBtn.addEventListener('click', () => {
	modal.classList.toggle('hide');
});

cardpackBtn.forEach((item) => {
	item.addEventListener('click', () => {
		modal.classList.toggle('hide');
	});
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		modal.classList.toggle('hide');
	}
});
