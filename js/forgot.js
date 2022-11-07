let sendBtn;
let input;
let error;
let popup;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	input = document.querySelector('#forgotEmail');
	sendBtn = document.querySelector('.forgot__send');
	error = document.querySelector('.forgot__error');
	popup = document.querySelector('.popup');
};

const prepareDOMEvents = () => {
	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();
		check(input);
	});
};
const check = (input) => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (input.value === '') {
		error.textContent = 'enter your e-mail address';
		error.classList.add('forgot__error--active');
	} else {
		if (re.test(input.value)) {
			popup.classList.add('popup--active');
			error.textContent = '';
		} else {
			error.textContent = 'e-mail adress is invaild';
		}
	}
};

window.addEventListener('DOMContentLoaded', main);
