function solve() {
    const [addSection, inProgressSection, completeSection] = Array.from(document.getElementsByTagName('section')).slice(1);
    const addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addTask);
    addSection.addEventListener('click', manageOpenTask);
    inProgressSection.addEventListener('click', manageTasksInProgress);

    function addTask(e) {
        e.preventDefault();
        const taskField = document.getElementById('task');
        const descriptionField = document.getElementById('description');
        const dateField = document.getElementById('date');

        if (taskField.value && descriptionField.value && dateField.value) {
            const article = createElement('article', {});
            article.appendChild(createElement('h3', {}, taskField.value));
            article.appendChild(createElement('p', {}, `Description: ${descriptionField.value}`));
            article.appendChild(createElement('p', {}, `Due Date: ${dateField.value}`));

            const buttons = createElement('div', {class: 'flex'});
            buttons.appendChild(createElement('button', {class: 'green'}, 'Start'));
            buttons.appendChild(createElement('button', {class: 'red'}, 'Delete'));

            article.appendChild(buttons);
            addSection.lastElementChild.appendChild(article);

            taskField.value = '';
            descriptionField.value = '';
            dateField.value = '';
        }

        function createElement(tagName, attributes, content) {
            const el = document.createElement(tagName)

            for (const key in attributes) {
                el.setAttribute(key, attributes[key]);
            }

            if (content) {
                el.textContent = content;
            }

            return el;
        }
    }

    function manageOpenTask(e) {
        if (e.target.tagName == 'BUTTON') {
            if (e.target.textContent == 'Start') {
                const article = e.target.parentElement.parentElement;
                const [firstButton, secondButton] = article.lastElementChild.children;

                firstButton.className = 'red';
                firstButton.textContent = 'Delete';
                secondButton.className = 'orange';
                secondButton.textContent = 'Finish';

                inProgressSection.lastElementChild.appendChild(article);
            } else {        
                e.target.parentElement.parentElement.remove();
            }
        }
    }

    function manageTasksInProgress(e) {
        if (e.target.tagName == 'BUTTON') {
            if (e.target.textContent == 'Delete') {
                e.target.parentElement.parentElement.remove();
            } else {        
                const article = e.target.parentElement.parentElement;
                article.lastElementChild.remove();
                completeSection.appendChild(article);
            }
        }
    }
}