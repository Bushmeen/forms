let userName;
let userSurname;
let userNick;
let email;
let pass;
let pass2;
let clearBtn;
let sendBtn;
let popup;

const main = () => {
	prepareDOMElements();
	prepareDOMEvents();
};

const prepareDOMElements = () => {
	userName = document.querySelector('#userName');
	userSurname = document.querySelector('#userSurname');
	userNick = document.querySelector('#userNick');
	email = document.querySelector('#email');
	pass = document.querySelector('#password');
	pass2 = document.querySelector('#password2');
	clearBtn = document.querySelector('.register__clear');
	sendBtn = document.querySelector('.register__send');
	popup = document.querySelector('.popup');
};

const prepareDOMEvents = () => {
	clearBtn.addEventListener('click', (e) => {
		e.preventDefault();
		clearForm([userName, userSurname, userNick, email, pass, pass2]);
	});
	sendBtn.addEventListener('click', (e) => {
		e.preventDefault();
		checkForm([userName, userSurname, userNick, email, pass, pass2]);
		checkLength(userName, 3);
		checkLength(userSurname, 3);
		checkLength(userNick, 4);
		regex(
			/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
			pass,
			'Password must contains of minimum eight characters, at least one letter and one number'
		);
		regex(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			email,
			'E-mail is invaild'
		);
		checkPasswords(pass, pass2);
		checkIputs();
	});
};
const clearForm = (inputs) => {
	inputs.forEach((input) => {
		const formBox = input.parentElement;
		input.value = '';
		if (formBox.classList.contains('register__box--error')) {
			formBox.classList.remove('register__box--error');
		}
	});
};
const checkForm = (inputs) => {
	inputs.forEach((input) => {
		if (input.value === '') {
			console.log('error');
			showError(input, input.placeholder);
		} else {
			clearError(input);
		}
	});
};
const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.register__error');

	formBox.classList.add('register__box--error');
	errorMsg.textContent = msg;
};
const clearError = (input) => {
	const formBox = input.parentElement;

	formBox.classList.remove('register__box--error');
};
const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${input.previousElementSibling.innerText.slice(
				0,
				-1
			)} consists of at least ${min}  chars`
		);
	}
};

const checkPasswords = (pass, pass2) => {
	if (pass.value !== pass2.value) {
		showError(pass2, 'passwords do not match');
	}
};

const regex = (re, input, msg) => {
	if (re.test(input.value)) {
		clearError(input);
	} else {
		showError(input, msg);
	}
};
const checkIputs = () => {
	const allInputs = document.querySelectorAll('.register__box');
	let errorCount = 0;
	allInputs.forEach((input) => {
		if (input.classList.contains('register__box--error')) {
			errorCount++;
		}
	});
	if (errorCount === 0) {
		popup.classList.add('popup--active');
	}
};
window.addEventListener('DOMContentLoaded', main);
