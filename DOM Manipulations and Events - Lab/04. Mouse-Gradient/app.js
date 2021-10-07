function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const resultBox = document.getElementById('result');

    gradient.addEventListener('mousemove', (ev) => {
        const box = ev.target;
        const offset = Math.floor(ev.offsetX / box.clientWidth * 100);
        resultBox.textContent = `${offset}%`;
        gradient.removeEventListener()
    })
}