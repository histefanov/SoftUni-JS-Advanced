function generateReport() {
    const checkedFields = {};
    const thList = Array.from(document.querySelectorAll('th input'));
    
    for (const thIndex in thList) {
        if (thList[thIndex].checked) {
            checkedFields[thIndex] = thList[thIndex].name;
        }
    }

    const result = [];
    const dataRows = Array.from(document.querySelector('tbody').children);
    const checkedIndexes = Object.keys(checkedFields);

    for (const row of dataRows) {
        const obj = {};
        Array.from(row.children).forEach((col, index) => {
            if (checkedIndexes.includes(index.toString())) {
                obj[checkedFields[index]] = col.textContent;
            }
        })
        result.push(obj);
    }

    document.getElementById('output').value = JSON.stringify(result);
    console.log(JSON.stringify(result));
}