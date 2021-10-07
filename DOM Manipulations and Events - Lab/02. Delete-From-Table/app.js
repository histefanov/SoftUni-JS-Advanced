function deleteByEmail() {
    const inputField = document.getElementsByName('email')[0];
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    for (const row of rows) {
        const email = row.lastElementChild.textContent;
        if (email == inputField.value) {
            row.remove();
            document.getElementById('result').textContent = 'Deleted.';
            return;
        }
    }

    document.getElementById('result').textContent = 'Not found.';
}