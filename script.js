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
	var list = document.getElementById('list');
	var activeItem = document.getElementsByClassName('list-group-item active');

	for (let i = 0; i <= activeItem.length; i++) {
		list.removeChild(activeItem[i]);
	}
} 