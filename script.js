function createItem() {
	var list = document.getElementById('list');
	var input = document.getElementById('input');
	var button = document.getElementById('button');
	var item = document.createElement('li');

	if (input.value == '') {
		console.log('Enter Text');
	} else {
		item.classList.add('list-group-item');
		item.innerHTML = input.value;
		list.appendChild(item);
	}

	item.addEventListener('click', (event) => {
		if (!item.classList.contains('active')) {
			item.classList.add('active');
		} else if (item.classList.contains('active')) {
			item.classList.remove('active');
		}
	});

	input.value = '';
}

function deleteItem() {
	var parent = document.getElementById('list');
	var child = parent.childNodes;

	if (parent.hasChildNodes()) {
		while (parent.firstChild) {
			parent.removeChild(parent.firstChild);
		}
	}
}

const slider = document.getElementById('slider');
const input = document.getElementById('input');

window.onload = function() {
	var localChecked;
	if (localStorage.getItem('checked') == 'true') {
		localChecked = true;
	} else if (localStorage.getItem('checked') == 'false') {
		localChecked = false;
	}
	slider.checked = localChecked;
	if (document.getElementById('slider').checked == true) {
		document.body.style.backgroundColor = '#242424';
		input.style.backgroundColor = '#242424';
	}
};

slider.addEventListener('change', (event) => {
	if (document.getElementById('slider').checked == true) {
		localStorage.setItem('checked', 'true');
		document.body.style.backgroundColor = '#242424';
		input.style.backgroundColor = '#242424';
	} else if (document.getElementById('slider').checked == false) {
		localStorage.setItem('checked', 'false');
		document.body.style.backgroundColor = 'white';
		input.style.backgroundColor = 'white';
	}
});
