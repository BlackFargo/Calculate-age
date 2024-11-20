
const firstAge = document.querySelector('#firstAge');
const secondAge = document.querySelector('#secondAge');
const output = document.querySelector('#output');
const btn = document.querySelector('button')

function older() {
	let x = firstAge.value;
	let y = secondAge.value;
	let wasOlder = x * 2 - y;
	let willBeOlder = y - (x * 2);
	if ( wasOlder >= 0) {
		output.textContent = `${wasOlder} years ago the second person was twice as old as the first person`
	
	} else {
		output.textContent = `in ${willBeOlder} years the second person will be twice as old as the first person` 
	
	}
	firstAge.value = '';
	secondAge.value = '';
}

const form = document.querySelector('form');

function validation() {
	let isValid = true;
	const elements = [firstAge, secondAge]
	elements.forEach(element => {
		if (element.value === '') {
			element.style.border = '2px solid red';
			 isValid = false
		} else {
			element.style.border = ''
		}
	})
	return isValid;
}



  btn.addEventListener('click', () => {
		if (validation()) {
			
			older() 
		} else {
			output.textContent = '' 
		}
	})