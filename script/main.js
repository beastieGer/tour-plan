const swiper = new Swiper(".swiper", {
	// Optional parameters

	loop: true,
	effect: "coverflow",

	// Navigation arrows
	navigation: {
		nextEl: ".slider-button--next",
		prevEl: ".slider-button--prev",
	},
});
