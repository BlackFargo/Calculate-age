// function getWeekDay(date) {
// 	const converted = new Date(date);
// 	const week = converted.getDay();

// 	console.log(week)
// }

// console.log(getWeekDay(Date.now()))



const date = new Date(0);

console.log(new Date(date.setHours(10)))

// const fullYear = date.getFullYear();
// const mounth = date.getMonth();
// const date1 = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();
// const miliseconds = date.getMilliseconds();
// console.log(fullYear, mounth + 1, date1, hour, minutes, seconds, miliseconds)

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