(function () {
	("use strict");

	/**
	 * Easy selector helper function
	 */
	const select = (el, all = false) => {
		el = el.trim();
		if (all) {
			return [...document.querySelectorAll(el)];
		} else {
			return document.querySelector(el);
		}
	};

	/**
	 * Easy event listener function
	 */
	const on = (type, el, listener, all = false) => {
		let selectEl = select(el, all);
		if (selectEl) {
			if (all) {
				selectEl.forEach((e) => e.addEventListener(type, listener));
			} else {
				selectEl.addEventListener(type, listener);
			}
		}
	};

	/**
	 * Easy on scroll event listener
	 */
	const onscroll = (el, listener) => {
		el.addEventListener("scroll", listener);
	};

	/**
	 * Toggle .header-scrolled class to #header when page is scrolled
	 */
	let selectHeader = select("#header");
	if (selectHeader) {
		const headerScrolled = () => {
			if (window.scrollY > 20) {
				selectHeader.classList.add("header-scrolled");
			} else {
				selectHeader.classList.remove("header-scrolled");
			}
		};
		window.addEventListener("load", headerScrolled);
		onscroll(document, headerScrolled);
	}
	/**
	 * Initiate glightbox
	 */
	const glightbox = GLightbox({
		selector: ".glightbox",
	});

	/**
	 * Scrolls to an element with header offset
	 */
	const scrollto = (el) => {
		let header = select("#header");
		let offset = header.offsetHeight;

		if (!header.classList.contains("header-scrolled")) {
			offset -= 20;
		}

		let elementPos = select(el).offsetTop;
		window.scrollTo({
			top: elementPos - offset,
			behavior: "smooth",
		});
	};

	/* Clients Slider */
	new Swiper(".categories-slider", {
		speed: 1000,
		loop: true,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},
		slidesPerView: "auto",

		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 40,
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 60,
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 80,
			},
			992: {
				slidesPerView: 6,
				spaceBetween: 50,
			},
		},
	});

	/**
	 * Preloader
	 */
	let preloader = select("#preloader");
	if (preloader) {
		window.addEventListener("load", () => {
			preloader.remove();
		});
	}

	/**
	 * Scroll with ofset on page load with hash links in the url
	 */
	window.addEventListener("load", () => {
		if (window.location.hash) {
			if (select(window.location.hash)) {
				scrollto(window.location.hash);
			}
		}
	})();
})();
