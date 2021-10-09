function lockedProfile() {
    document.querySelector('#main').addEventListener('click', (ev) => {
        if (ev.target.tagName == 'BUTTON') {
            const isLocked = ev.target.parentElement.querySelector('input[value="lock"]').checked;
            if (!isLocked) {
                const hiddenInfo = ev.target.parentElement.querySelector('div');
                const display = window.getComputedStyle(hiddenInfo, null).display;

                if (display == 'none') {
                    hiddenInfo.style.display = 'block';
                } else {
                    hiddenInfo.style.display = '';
                }

                ev.target.textContent = ev.target.textContent == 'Show more' ? 'Hide it' : 'Show more';
            }
        }
    })
}