const list = document.getElementById('list');
const button = document.getElementById('button');
const slider = document.getElementById('slider');
const listItem = document.getElementsByClassName('list-group-item');
var localArray = [];

window.onload = function() {
	var localChecked;
	if (localStorage.getItem('checked') == 'true') {
		localChecked = true;
	} else if (localStorage.getItem('checked') == 'false') {
		localChecked = false;
	}
	slider.checked = localChecked;
	if (slider.checked == true) {
		document.body.style.backgroundColor = '#242424';
		input.style.backgroundColor = '#242424';
	}

	var dataArray = JSON.parse(localStorage.getItem('items'));
	if (localArray != null) {
		localArray = dataArray;
		console.log(this.array);
	}

	if (localArray != null) {
		for (let i = 0; i < localArray.length; i++) {
			const item = document.createElement('li');
			item.classList.add('list-group-item');
			item.id = 'item';
			item.innerHTML = localArray[i];
			list.appendChild(item);
		}
	}

	console.log(listItem);
};

function createItem() {
	const item = document.createElement('li');

	if (input.value == '') {
		console.log('Enter Text');
	} else {
		item.classList.add('list-group-item');
		item.innerHTML = input.value;
		item.id = 'item';
		list.appendChild(item);
	}

	localArray.push(input.value);
	savingData();

	input.value = '';
}

function deleteItem() {
	var parent = document.getElementById('list');
	var child = list.childNodes;

	if (parent.hasChildNodes()) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
	localStorage.setItem('items', '');
}

slider.addEventListener('change', (event) => {
	if (slider.checked == true) {
		localStorage.setItem('checked', 'true');
		document.body.style.backgroundColor = '#242424';
		input.style.backgroundColor = '#242424';
	} else if (slider.checked == false) {
		localStorage.setItem('checked', 'false');
		document.body.style.backgroundColor = 'white';
		input.style.backgroundColor = 'white';
	}
});

function savingData() {
	localStorage.setItem('items', JSON.stringify(localArray));
}
