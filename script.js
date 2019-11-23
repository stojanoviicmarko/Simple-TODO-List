function createItem() {
    let list = document.getElementById('list');
    let item = document.createElement('li');

    item.textContent = "Test";

    list.appendChild(item);

}