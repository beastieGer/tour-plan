const swiper = new Swiper(".hotel-slider", {
	// Optional parameters

	loop: true,
	effect: "coverflow",

	// Navigation arrows
	navigation: {
		nextEl: ".slider-button--next",
		prevEl: ".slider-button--prev",
	},
});

const swiperTwo = new Swiper(".reviews-slider", {
	// Optional parameters

	loop: true,

	// Navigation arrows
	navigation: {
		nextEl: ".reviews-button-next",
		prevEl: ".reviews-button-prev",
	},
});
