function solve() {
    const conversionFormats = ['Binary', 'Hexadecimal'];
    const selectMenuTo = document.getElementById('selectMenuTo');

    for (const format of conversionFormats) {
        const opt = document.createElement('option');
        opt.value = format.toLowerCase();
        opt.innerHTML = format;
        selectMenuTo.appendChild(opt);
    }

    const selectMap = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    const convertBtn = document.querySelector('#container > button');
    convertBtn.addEventListener('click', (ev) => {
        const input = document.getElementById('input');
        const output = document.getElementById('result');
        output.value = selectMap[selectMenuTo.value](Number(input.value));
    })
}