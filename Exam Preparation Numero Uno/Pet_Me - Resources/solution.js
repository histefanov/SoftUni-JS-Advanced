function solve() {
    const inputFields = Array.from(document.querySelectorAll('#container > input'));
    const forAdoption = document.querySelector('#adoption > ul');
    const adopted = document.querySelector('#adopted > ul');
    document.querySelector('#container > button').addEventListener('click', addPet);

    function addPet(ev) {
        ev.preventDefault();

        const [name, age, kind, currentOwner] = inputFields.map((field) => field.value);

        if (name && Number(age) && kind && currentOwner) {
            const pet = e('li', {}, 
                e('p', {},
                    e('strong', {}, name),
                    ' is a ',
                    e('strong', {}, age),
                    ' year old ',
                    e('strong', {}, kind)),
                e('span', {}, `Owner: ${currentOwner}`),
                e('button', {}, 'Contact with owner')
            );

            pet.querySelector('button').addEventListener('click', contactOwner);
            forAdoption.appendChild(pet);

            inputFields.forEach((field) => field.value = '');
        }
    }

    function contactOwner(ev) {
        const pet = ev.target.parentElement;
        ev.target.remove();

        const confirmationDiv = e('div', {}, 
            e('input', { placeholder: 'Enter your names' }),
            e('button', {}, 'Yes! I take it!')
        );

        pet.appendChild(confirmationDiv);
        pet.querySelector('button').addEventListener('click', adopt);
    }

    function adopt(ev) {
        const pet = ev.target.parentElement.parentElement;
        const newOwner = ev.target.parentElement.querySelector('input').value;

        if (newOwner) {
            ev.target.parentElement.remove();

            pet.querySelector('span').textContent = `New Owner: ${newOwner}`;

            const checkedBtn = e('button', {}, 'Checked');
            checkedBtn.addEventListener('click', () => pet.remove());

            pet.appendChild(checkedBtn);
            adopted.appendChild(pet);
        }       
    }

    function e(type, atts, ...content) {
        const element = document.createElement(type);

        for (const att in atts) {
            element[att] = atts[att];
        }
        for (let item of content) {
            if (typeof item == 'string' || typeof item == 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }

        return element;
    }
}

