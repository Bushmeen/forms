let headerShadow;
let headerBox;
let burgerBtn;
let burgerBtnBars;
let mobileNavItemsBox;
let mobileNavItems;
let joinNowBtn;
let popup;
let closePopupBtn;
let loginBtn;
let loginError;
let loginNameInput;
let LoginPasswordInput;
let mainNav;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	headerBox = document.querySelector('.header__box');
	mainNav = document.querySelector('.main-nav');
	headerShadow = document.querySelector('.header__shadow');
	burgerBtn = document.querySelector('.mobile-nav__btn');
	burgerBtnBars = document.querySelectorAll('.mobile-nav__bar');
	mobileNavItemsBox = document.querySelector('.mobile-nav__items');
	mobileNavItems = document.querySelectorAll('.mobile-nav__item');
	joinNowBtn = document.querySelector('.header__btn');
	popup = document.querySelector('.popup');
	closePopupBtn = document.querySelector('.popup__close-btn');
	loginBtn = document.querySelector('.login__btn');
	loginError = document.querySelector('.login__error');
	loginNameInput = document.querySelector('#logUsername');
	LoginPasswordInput = document.querySelector('#logPassword');
};

const prepareDOMEvents = () => {
	burgerBtn.addEventListener('click', hanldeMobileNav);
	mobileNavItems.forEach((item) => {
		item.addEventListener('click', hanldeMobileNav);
	});
	joinNowBtn.addEventListener('click', openPopup);
	closePopupBtn.addEventListener('click', closePopup);
	loginBtn.addEventListener('click', (e) => {
		e.preventDefault();

		checkLogin([loginNameInput, LoginPasswordInput]);
	});
};

const hanldeMobileNav = () => {
	mobileNavItemsBox.classList.toggle('mobile-nav__items--active');
	for (let i = 0; i < burgerBtnBars.length; i++) {
		if (i === 0) {
			burgerBtnBars[i].classList.toggle('mobile-nav__bar--one');
		} else if (i === 1) {
			burgerBtnBars[i].classList.toggle('mobile-nav__bar--two');
		} else {
			burgerBtnBars[i].classList.toggle('mobile-nav__bar--three');
		}
	}
};
const openPopup = () => {
	headerBox.classList.add('header__box--active');
	mainNav.classList.add('main-nav--active');
	joinNowBtn.classList.add('header__btn--active');
	popup.classList.add('popup--active');
	headerShadow.classList.add('header__shadow--active');
};
const closePopup = () => {
	headerBox.classList.remove('header__box--active');
	mainNav.classList.remove('main-nav--active');
	joinNowBtn.classList.remove('header__btn--active');
	popup.classList.remove('popup--active');
	headerShadow.classList.remove('header__shadow--active');
	loginError.classList.remove('login__error--show');
};
const checkLogin = (input) => {
	let count = 0;
	loginError.classList.add('login__error--show');
	input.forEach((el) => {
		if (el.value === '') {
			loginError.textContent = 'complete all fields';
			count++;
		} else if (count === 0) {
			loginError.textContent = 'login or password is invalid';
		}
	});
};

window.addEventListener('DOMContentLoaded', main);
