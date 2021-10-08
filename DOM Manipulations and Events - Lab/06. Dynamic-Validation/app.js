function validate() {
    const inputField = document.getElementById('email');
    const pattern = /^\S+@\S+\.\S+$/;

    inputField.addEventListener('change', (ev) => {
        if (!pattern.test(ev.target.value)) {
            ev.target.classList.add('error');
        } else {
            ev.target.classList.remove('error');
        }
    })
}