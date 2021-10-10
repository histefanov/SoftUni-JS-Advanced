function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('#exercise button');
  const [generateTextarea, buyTextarea] = document.querySelectorAll('#exercise textarea');

  generateBtn.addEventListener('click', (ev) => {
    const items = JSON.parse(generateTextarea.value);
    const table = document.getElementsByTagName('tbody')[0];
    
    for (const item of items) {
      const row = document.createElement('tr');

      for (let i = 0; i < 5; i++) {
        row.appendChild(document.createElement('td'));
      }

      const thumbnail = document.createElement('img');
      thumbnail.setAttribute('src', item.img);
      row.children[0].appendChild(thumbnail);

      const itemName = document.createElement('p');
      itemName.textContent = item.name;
      row.children[1].appendChild(itemName);

      const price = document.createElement('p');
      price.textContent = item.price;
      row.children[2].appendChild(price);

      const decFactor = document.createElement('p');
      decFactor.textContent = item.decFactor;
      row.children[3].appendChild(decFactor);

      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      row.children[4].appendChild(checkbox);

      table.appendChild(row);  
    }
  })

  buyBtn.addEventListener('click', (ev) => {
    const markedItems = Array.from(document.querySelectorAll('tbody tr'))
      .filter((r) => r.lastElementChild.firstChild.checked == true)
      .map((r) => {
        const name = r.children[1].firstChild.textContent;
        const price = Number(r.children[2].firstChild.textContent);
        const decFactor = Number(r.children[3].firstChild.textContent);

        return {
          name,
          price,
          decFactor
        }
      })

    const boughtFurniture = `Bought furniture: ${markedItems.map((i) => i.name).join(', ')}`;
    const totalPrice = `Total price: ${markedItems.map((i) => i.price).reduce((a, b) => a + b, 0).toFixed(2)}`;
    const avgDec = `Average decoration factor: ${(markedItems.map((i) => i.decFactor).reduce((a, b) => a + b, 0) / markedItems.length)}`

    buyTextarea.value = boughtFurniture + '\n' + totalPrice + '\n' + avgDec;
  })
}