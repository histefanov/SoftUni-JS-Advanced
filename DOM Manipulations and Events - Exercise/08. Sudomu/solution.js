function solve() {
    const inputs = Array.from(document.getElementsByTagName('input'));
    const [checkBtn, clearBtn] = document.querySelectorAll('button');
    const table = document.querySelector('table');
    const resultBox = document.querySelector('#check p');

    checkBtn.addEventListener('click', check);
    clearBtn.addEventListener('click', clear);

    function check() {    
        const matrix = [
            [inputs[0].value, inputs[1].value, inputs[2].value],
            [inputs[3].value, inputs[4].value, inputs[5].value],
            [inputs[6].value, inputs[7].value, inputs[8].value]
        ]
        
        let isValid = true;

        for (let i = 0; i < matrix.length; i++) {
            const row = matrix[i];
            const col = matrix.map((row) => row[i]);

            if ([...new Set(row)].length != 3 || [...new Set(col)].length != 3) {
                isValid = false;
                break;
            }
        }

        table.style.border = isValid ? '2px solid green' : '2px solid red';
        resultBox.textContent = isValid ? 'You solve it! Congratulations!' : 'NOP! You are not done yet...';
        resultBox.style.color = isValid ? 'green' : 'red';
    }

    function clear() {
        inputs.forEach((i) => i.value = '');
        table.style.border = 'none';
        resultBox.textContent = '';
    }
}