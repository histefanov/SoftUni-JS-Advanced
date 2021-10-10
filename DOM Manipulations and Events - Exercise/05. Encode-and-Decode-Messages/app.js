function encodeAndDecodeMessages() {
    const [encodeBtn, decodeBtn] = Array.from(document.getElementsByTagName('button'));

    encodeBtn.addEventListener('click', (ev) => {
        const inputField = ev.target.parentElement.querySelector('textarea');
        const msg = inputField.value;
        const encodedMsg = [...msg]
            .map((c) => String.fromCharCode(c.charCodeAt(0) + 1))
            .join('');
        
        decodeBtn.parentElement.querySelector('textarea').value = encodedMsg;
        inputField.value = '';
    })

    decodeBtn.addEventListener('click', (ev) => {
        const resultField = ev.target.parentElement.querySelector('textarea');
        const decodedMsg = [...resultField.value]
            .map((c) => String.fromCharCode(c.charCodeAt(0) - 1))
            .join('');

        resultField.value = decodedMsg;
    })
}