function addItem() {
    const textField = document.getElementById('newItemText');
    const valueField = document.getElementById('newItemValue');

    const newOpt = document.createElement('option');
    newOpt.textContent = textField.value;
    newOpt.value = valueField.value;

    document.getElementById('menu').appendChild(newOpt);

    textField.value = '';
    valueField.value = '';
}