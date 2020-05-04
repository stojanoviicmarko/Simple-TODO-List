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
	taskList: document.querySelector('.list-of-tasks')
};

domElements.addButton.addEventListener('click', addItem);
domElements.input.addEventListener('keypress', e => {
	if (event.keyCode === 13) {
		addItem();
	}
});
domElements.taskList.addEventListener('click', e => {
	if(e.target.classList.contains('delete-task')){
		const taskId = e.target.parentElement.id;
		deleteItem(taskId);
	}
});

if (arrayOfTaks.length != 0) {
	domElements.deleteButton.addEventListener('click', deleteItem);
}

function clearInput(inputEl) {
	inputEl.value = '';
}

function addTaskToArray(array, taks) {
	array.push(taks);
}

function renderHtml(taskObj) {
	let listDomString = `<li id="${taskObj.id}">
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
	renderHtml(newTask);
}

function deleteItem(id) {
	arrayOfTaks = arrayOfTaks.filter(item => item.id !== Number(id));
	const task = document.querySelector(`li[id='${id}']`);
	task.remove();
}


