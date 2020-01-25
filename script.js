const list = document.getElementById('list');
const input = document.getElementById('input');
const button = document.getElementById('button');
const slider = document.getElementById('slider');

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
};

function createItem() {
	const item = document.createElement('li');

	if (input.value == '') {
		console.log('Enter Text');
	} else {
		item.classList.add('list-group-item');
		item.innerHTML = input.value;
		list.appendChild(item);
		savingToLocalStorage(item);
	}

	item.addEventListener('click', (event) => {
		if (!item.classList.contains('active')) {
			item.classList.add('active');
		} else if (item.classList.contains('active')) {
			item.classList.remove('active');
		}
	});

	input.value = '';

	console.log(localStorage.getItem('item'));
}

function deleteItem() {
	var child = list.childNodes;

	if (parent.hasChildNodes()) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
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

var items = [];

function savingToLocalStorage(item) {
	items.push(item);
	localStorage.setItem('item', JSON.stringify(items));
}
