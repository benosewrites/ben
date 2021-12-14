const navMenu =
	document.querySelector('.nav__menu');
navOpen = document.querySelector('.nav__toggle');
navClose = document.getElementById('nav-close');
//Open menu function
const openMenu = () => {
	navMenu.classList.add('show-menu');
};
//Close Menu function
const closeMenu = () => {
	navMenu.classList.remove('show-menu');
};

//validate open menu
if (navOpen) {
	navOpen.addEventListener('click', openMenu);
}
//validate close menu
if (navClose) {
	navClose.addEventListener('click', closeMenu);
}

//nav link close
const navLinks =
	document.querySelectorAll('.nav__link');
//homeClose.addEventListener('click', closeMenu);
navLinks.forEach((btn) =>
	btn.addEventListener('click', closeMenu),
);

//Open/Close skills list
const toggleSkillsHeader = function () {
	let clickedSkillsHeaderParentClass =
		this.parentNode.className;
	//Getting an array of all skills content class
	const skillsContent =
		document.getElementsByClassName(
			'skills__content',
		);
	//Making sure all skill contents are closed
	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className =
			'skills__content skills__close';
	}
	if (
		clickedSkillsHeaderParentClass ===
		'skills__content skills__close'
	) {
		this.parentNode.className =
			'skills__content skills__open';
	}
	const toggleClass = document
		.querySelector('.skills__content')
		.classList.contains('skills__close');
};

const skillsHeader = document.querySelectorAll(
	'.skills__header',
);
skillsHeader.forEach((skillheader) =>
	skillheader.addEventListener(
		'click',
		toggleSkillsHeader,
	),
);

///////Skill list toggle show
//get each skill header
/**const skillHeaders = document.querySelectorAll(
	'.skill-header',
);

const skillData = document.getElementsByClassName(
	'skill__data',
);

const toggleSkill = function () {
	//get and store the parentClass of the clicked item
	let clickedItemParentClass =
		this.parentNode.className;
	console.log(clickedItemParentClass);
	//make sure all the skills are closed at initial state
	for (i = 0; i < skillData.length; i++) {
		skillData[i].className =
			'skill__data skill__close';
	}

	//open the clicked item
	if (
		clickedItemParentClass ===
		'skill__data skill__close'
	) {
		this.parentNode.className =
			'skill__data skill__open';
	}
};

//toggle skill
skillHeaders.forEach((skillHeader) =>
	skillHeader.addEventListener(
		'click',
		toggleSkill,
	),
); */

//New
function toggle() {
	const dataContents = document.querySelectorAll(
		'[skill-data-content]',
	);

	// Get skill all skill header
	skillHeaders.forEach((skillHeader) =>
		skillHeader.classList.remove('active'),
	);
	const skillTarget = document.querySelector(
		this.dataset.target,
	);
	const clickedItemDescriptionClass =
		skillTarget.className;
	for (i = 0; i < dataContents.length; i++) {
		dataContents[i].className =
			'skill__description skill__description-hide';
	}

	if (
		clickedItemDescriptionClass ===
		'skill__description skill__description-hide'
	) {
		skillTarget.className =
			'skill__description skill__description-show';
		this.classList.add('active');
	}
}
const skillHeaders = document.querySelectorAll(
	'.skill-header',
);
skillHeaders.forEach((skillHeader) =>
	skillHeader.addEventListener('click', toggle),
);

//**Qualification tabs */
const tabs = document.querySelectorAll(
	'.qualification__button',
);

tabContents = document.querySelectorAll(
	'[data-content]',
);
tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		//get targets // if you dig, tab.dataset.target is the the id of the content
		const target = document.querySelector(
			tab.dataset.target,
		);
		//First remove the qualiication active class from each content
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove(
				'qualification__active',
			);
		});
		//add qualification active to the clicked tab's content
		target.classList.add('qualification__active');
		//Remove the qualiication active class from all tabs
		tabs.forEach((tab) => {
			tab.classList.remove(
				'qualification__active',
			);
		});
		//add qualification active to the clicked tab
		tab.classList.add('qualification__active');
	});
});

/**Services modal */
const modalViews = document.querySelectorAll(
		'.services__modal',
	),
	modalBtns = document.querySelectorAll(
		'.services__button',
	);
modalCloses = document.querySelectorAll(
	'.services__modal-close',
);

let modal = function (modalClick) {
	modalViews[modalClick].classList.add(
		'active-modal',
	);
};

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i);
	});
});

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal');
		});
	});
});

/**Initialize Swiper **/
let swiperPortfolio = new Swiper(
	'.portfolio__container',
	{
		cssMode: true,
		loop: true,
		grabCursor: true,
		spaceBetween: 48,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true,
		},
		mousewheel: true,
		keyboard: true,
		allowTouchMove: true,
	},
);

/**Scroll section active link */
const sections = document.querySelectorAll(
	'section[id]',
);
function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (
			scrollY > sectionTop &&
			scrollY <= sectionTop + sectionHeight
		) {
			document
				.querySelector(
					'.nav__menu a[href*=' + sectionId + ']',
				)
				.classList.add('active-link');
		} else {
			document
				.querySelector(
					'.nav__menu a[href*=' + sectionId + ']',
				)
				.classList.remove('active-link');
		}
	});
}
window.addEventListener('scroll', scrollActive);

/* Header shadow */
function scrollHeader() {
	const nav = document.getElementById('header');
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 80)
		nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* scoll up */
function scrollUp() {
	const scrollUp =
		document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
	if (this.scrollY >= 560) {
		scrollUp.classList.add('show-scroll');
	} else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/**Dark theme */

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById(
	'theme-button',
);
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem(
	'selected-theme',
);
const selectedIcon = localStorage.getItem(
	'selected-icon',
);

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme)
		? 'dark'
		: 'light';
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme)
		? 'uil-moon'
		: 'uil-sun';

// We validate if the user previously chose a topic(the previous theme)
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[
		selectedTheme === 'dark' ? 'add' : 'remove'
	](darkTheme);
	themeButton.classList[
		selectedIcon === 'uil-moon' ? 'add' : 'remove'
	](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem(
		'selected-theme',
		getCurrentTheme(),
	);
	localStorage.setItem(
		'selected-icon',
		getCurrentIcon(),
	);
});

/***ScrollReveal().reveal('.home');
ScrollReveal().reveal('.lorem1');
ScrollReveal().reveal('.lorem2');
ScrollReveal().reveal('.lorem3');
ScrollReveal().reveal('.about');

ScrollReveal().reveal('.button', {
	delay: 500,
}); */
