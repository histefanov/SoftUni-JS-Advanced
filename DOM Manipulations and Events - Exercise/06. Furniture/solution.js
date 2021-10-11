function solve() {
  const [generateBtn, buyBtn] = document.querySelectorAll('#exercise button');
  const [generateTextarea, buyTextarea] = document.querySelectorAll('#exercise textarea');

  generateBtn.addEventListener('click', (ev) => {
    const items = JSON.parse(generateTextarea.value);
    const table = document.getElementsByTagName('tbody')[0];
    
    for (const item of items) {
      const row = document.createElement('tr');

      row.appendChild(createCell('img', {src: item.img}));
      row.appendChild(createCell('p', {}, item.name));
      row.appendChild(createCell('p', {}, item.price));
      row.appendChild(createCell('p', {}, item.decFactor));
      row.appendChild(createCell('input', {type: 'checkbox'}));

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

  function createCell(nestedTag, props, content) {
    const cell = document.createElement('td');
    const nested = document.createElement(nestedTag);

    for (const prop in props) {
      nested[prop] = props[prop];
    }
    if (content) {
      nested.textContent = content;
    }

    cell.appendChild(nested);

    return cell;
  }
}