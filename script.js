let firstNumber
let secondNumber
let step = 0
let operation
let result = 0

let numArray = []
let secondNumberArr = []

let display = document.getElementById('display')

function getNumber(num) {
	if (step === 0 || step === 1) {
		numArray.push(num)
		step = 1
		firstNumber = Number(numArray.join(''))
		display.value = firstNumber
	} else if (step === 2) {
		secondNumberArr.push(num)
		secondNumber = Number(secondNumberArr.join(''))
		display.value = firstNumber + operation + secondNumber
	}
}


function clearDisplay() {
	if (step === 0 || step === 1) {
		if (numArray.length) {
			numArray.splice(numArray.length - 1, 1);
			// numArray.length = numArray.length - 1;
			firstNumber = Number(numArray.join(''));
			display.value = firstNumber
		}
	} else if (step === 2) {
		if (secondNumberArr.length) {
			secondNumberArr.length = secondNumberArr.length - 1;
			secondNumber = Number(secondNumberArr.join(''))
			if (secondNumberArr.length)
				display.value = firstNumber + operation + secondNumber;
			else display.value = firstNumber + operation;
		} else {
			display.value = firstNumber;
			step = 1;
		}
	}
}

function getOperator(op) {
	console.log(op);
	if (operation) {
		if (secondNumberArr.length)
			calculateEquals();
	}
	step = 2
	operation = op
	display.value = firstNumber + operation
}

function calculateEquals(e) {
	if (operation === '+') {
		result = firstNumber + secondNumber
		display.value = result
	} else if (operation === '-') {
		result = firstNumber - secondNumber
		display.value = result
	} else if (operation === '*') {
		result = firstNumber * secondNumber
		display.value = result
	} else if (operation === '/') {
		result = firstNumber / secondNumber
		display.value = result
	}
	display.value = result;
	firstNumber = result;
	numArray = firstNumber.toString().split('')
	// console.log(numArray)
	secondNumber = null;
	operation = null;
	step = 1;
	secondNumberArr = [];
}


function Allclear() {
	display.value = 0
	firstNumber = null
	secondNumber = null
	step = 0
	operation = null
	result = 0
	numArray = []
	secondNumberArr = []
}

function btn_change(key) {
	if (key == "0" || key == "1" || key == "2" || key == "3" || key == "4" || key == "5" || key == "6" || key == "7" || key == "8" || key == "9") {
	document.querySelector('.button-' + key).classList.add('active');
	setTimeout(() => {
		document.querySelector('.button-' + key).classList.remove('active');
	}, 100);
	} else if (key == 'a' || key == 'A'){
	document.querySelector('.Allclear').classList.add('new');
	setTimeout(() => {
		document.querySelector('.Allclear').classList.remove('new');
	}, 100);
	} else if (key == "=" || key == "Enter"){
	document.querySelector('.button-equal').classList.add('oi');
	setTimeout(() => {
		document.querySelector('.button-equal').classList.remove('oi');
	}, 100);
	} else if(key == 'C' || key == 'c' || key == 'Backspace'){
		document.querySelector('#clear-c').classList.add('activ');
		setTimeout(() => {
			document.querySelector('#clear-c').classList.remove('activ');
		}, 100);
	} else if (key == "+"){
		document.querySelector('.operator').classList.add('act');
		setTimeout(() => {
			document.querySelector('.operator').classList.remove('act');
		}, 100);
	} 
	else if (key == "-" ){
		document.querySelector('.operator1').classList.add('act');
		setTimeout(() => {
			document.querySelector('.operator1').classList.remove('act');
		}, 100);
	}
	else if (key == "*" ){
		document.querySelector('.operator2').classList.add('act');
		setTimeout(() => {
			document.querySelector('.operator2').classList.remove('act');
		}, 100);
	}
	else if (key == "/" ){
		document.querySelector('.operator3').classList.add('act');
		setTimeout(() => {
			document.querySelector('.operator3').classList.remove('act');
		}, 100);
	}
}

// Get input by key-board :-
document.addEventListener('keyup', (e) => {
	console.log(e.key)
	if (e.key == "0" || e.key == "1" || e.key == "2" || e.key == "3" || e.key == "4" || e.key == "5" || e.key == "6" || e.key == "7" || e.key == "8" || e.key == "9") {
		getNumber(e.key);
		btn_change(e.key);
	} else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/"){
		getOperator(e.key);
		btn_change(e.key);
	}
	else if (e.key == "=" || e.key == "Enter"){
		calculateEquals(e.key);
		btn_change(e.key);	
	}
	else if(e.key == 'C' || e.key == 'c' || e.key == 'Backspace'){
		clearDisplay(e.key);
		btn_change(e.key);
	}
	else if (e.key == 'a' || e.key == 'A'){
		Allclear(e.key);
		btn_change(e.key);
	}
})

// Java script  

// if else 
// for loop 
// array question


