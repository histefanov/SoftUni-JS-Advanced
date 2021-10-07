function addItem() {
    const inputField = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    newLi.textContent = inputField.value;
    document.getElementById('items').appendChild(newLi);
    inputField.value = '';
}