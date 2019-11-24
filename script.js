function createItem() {
    let list = document.getElementById('list');
    let input = document.getElementById('input');
    let item = document.createElement('li');

    item.classList.add('list-group-item');

    item.innerHTML = input.value;

    list.appendChild(item);
    
    input.value = "";
}