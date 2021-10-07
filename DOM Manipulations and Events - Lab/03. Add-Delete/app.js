function addItem() {
    const inputField = document.getElementById('newItemText');
    const newLi = document.createElement('li');
    
    const deleteBtn = document.createElement('a');
    deleteBtn.href = '#'; 
    deleteBtn.textContent = '[Delete]';
    deleteBtn.addEventListener('click', (ev) => ev.target.parentElement.remove());
    
    newLi.textContent = inputField.value;
    newLi.appendChild(deleteBtn);
    
    document.getElementById('items').appendChild(newLi);
    inputField.value = '';
}