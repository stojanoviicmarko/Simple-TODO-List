//load array in localstorage
//load tasks from the array in the DOM
class Task {
	constructor(name) {
		this.name = name;
		this.id = Date.now();
	}
}

let arrayOfTaks = [];

const domElements = {
	input: document.querySelector('.add-task-input'),
	addButton: document.querySelector('.add-task-button'),
	taskList: document.querySelector('.list-of-tasks'),
	deleteButton: document.querySelector('.delete-task')
};

domElements.addButton.addEventListener('click', addItem);
domElements.input.addEventListener('keypress', e => {
	if (event.keyCode === 13) {
		addItem();
	}
});

if(arrayOfTaks.length != 0) {
	domElements.deleteButton.addEventListener('click', deleteItem);
}

function clearInput(inputEl) {
	inputEl.value = '';
}

function addTaskToArray(array, taks) {
	array.push(taks);
}

function insertHtml(taskObj) {
	let listDomString = `<li>
	<p>${taskObj.name}</p>
	<button class="delete-task">Delete</button>
	</li>`;

	domElements.taskList.insertAdjacentHTML('beforeend', listDomString);
}

function addItem() {
	if (domElements.input.value === '') {
		return;
	}
	//creates new taks object
	const newTask = new Task(domElements.input.value);
	//adds object to the array
	addTaskToArray(arrayOfTaks, newTask);
	//clears input field after adding
	clearInput(domElements.input);
	//inserts the html
	insertHtml(newTask);

	if(arrayOfTaks.length != 0){
	domElements.deleteButton.addEventListener('click', deleteItem);
	}	

	console.log(arrayOfTaks);
}

function deleteItem() {
	console.log('delete button');
}

