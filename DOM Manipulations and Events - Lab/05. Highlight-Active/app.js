function focused() {
    const sections = Array.from(document.getElementsByTagName('input'));

    for (const section of sections) {
        section.addEventListener('focus', (ev) => {
            ev.target.parentElement.classList.add('focused');
        })

        section.addEventListener('blur', (ev) => {
            ev.target.parentElement.classList.remove('focused');
        })
    }
}