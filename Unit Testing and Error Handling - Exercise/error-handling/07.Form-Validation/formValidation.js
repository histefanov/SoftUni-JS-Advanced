function validate() {
    const submitBtn = document.getElementById('submit');
    const companyCheckbox = document.getElementById('company');
    const [username, email, password, confirmPassword, checkbox, companyNumber] = Array.from(document.getElementsByTagName('input'));
    const isValidDiv = document.getElementById('valid');

    const usernamePattern = /^[A-Za-z0-9]{3,20}$/;
    const passwordPattern = /^\w{5,15}$/;
    const emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;

    submitBtn.addEventListener('click', handleSubmit);
    companyCheckbox.addEventListener('change', changeCompanyInfoVisibility)

    function handleSubmit(e) {
        e.preventDefault();
        let isValid = true;

        if (!usernamePattern.test(username.value)) {
            username.style.borderColor = 'red';
            isValid = false;
        } else {
            username.style.borderColor = '';
        }

        if (!passwordPattern.test(password.value)) {
            password.style.borderColor = 'red';
            isValid = false;
        } else {
            password.style.borderColor = '';
        }

        if (!passwordPattern.test(confirmPassword.value) || confirmPassword.value != password.value) {
            confirmPassword.style.borderColor = 'red';
            password.style.borderColor = 'red';
            isValid = false;
        } else {
            confirmPassword.style.borderColor = '';
        }

        if (!emailPattern.test(email.value)) {
            email.style.borderColor = 'red';
            isValid = false;
        } else {
            email.style.borderColor = '';
        }

        if (companyCheckbox.checked) {
            const val = Number(companyNumber.value);
            if (val < 1000 || val > 9999) {
                companyNumber.style.borderColor = 'red';
                isValid = false;
            } else {
                companyNumber.style.borderColor = '';
            }
        }

        if (isValid) {
            isValidDiv.style.display = 'block'
        } else {
            isValidDiv.style.display = 'none';
        }
    }

    function changeCompanyInfoVisibility(e) {
        const companyInfo = document.getElementById('companyInfo');

        companyInfo.style.display = e.target.checked ? 'block' : 'none';
    }
}
