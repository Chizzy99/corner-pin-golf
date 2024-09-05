// * Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function () {
	const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
	const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

	toggleButton.addEventListener('click', function () {
		mobileMenu.classList.toggle('active');
	});
});

// * Change navbar background scroll
window.addEventListener('scroll', function () {
	const navbar = document.querySelector('.navbar');

	if (this.window.scrollY > 0) {
		navbar.classList.add('navbar-scroll');
	} else {
		navbar.classList.remove('navbar-scroll');
	}
});
// * Nav links scroll to
document.querySelectorAll('.scroll-btn').forEach((button) => {
	button.addEventListener('click', function (e) {
		e.preventDefault();
		const targetId = this.getAttribute('target');
		const targetElement = document.getElementById(targetId);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		} else {
			window.location.href = `index.html#${targetId}`;
		}
	});
});
