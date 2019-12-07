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

	item.addEventListener('click', function(event) {
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

function darkMode(){
	document.body.style.backgroundColor = "#242424";
	document.getElementById('input').style.backgroundColor = "#242424";
}

function defaultMode(){
	document.body.style.backgroundColor = "white";
	document.getElementById('input').style.backgroundColor = "white";
}
