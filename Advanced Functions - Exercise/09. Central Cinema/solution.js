function solve() {
    const addButton = document.querySelector('#add-new #container button');
    const movieSection = document.querySelector('#movies ul');
    const archiveSection = document.querySelector('#archive ul');
    const clearButton = document.querySelector('#archive button');

    addButton.addEventListener('click', addMovie);
    movieSection.addEventListener('click', archive);
    archiveSection.addEventListener('click', deleteArchive);
    clearButton.addEventListener('click', clearArchives);

    function addMovie(e) {
        e.preventDefault();

        const input = e.target.parentElement.querySelectorAll('input');
        let [name, hall, price] = Array.from(input).map((el) => el.value);
        price = Number(price);

        if (name && hall && price) {
            const li = createElement('li', {});
            li.appendChild(createElement('span', {}, name));
            li.appendChild(createElement('strong', {}, `Hall: ${hall}`));

            const div = createElement('div', {});
            div.appendChild(createElement('strong', {}, price.toFixed(2)));
            div.appendChild(createElement('input', {placeholder: 'Tickets Sold'}));
            div.appendChild(createElement('button', {}, 'Archive'));

            li.appendChild(div);

            movieSection.appendChild(li);

            [...input].forEach((i) => i.value = '');
        }
    }

    function archive(e) {
        if (e.target.tagName == 'BUTTON') {
            const movie = e.target.parentElement.parentElement;
            const input = movie.querySelector('input');
            const soldTickets = Number(input.value);

            if (soldTickets) {
                const movieName = movie.querySelector('span');
                const price = Number(movie.querySelector('div strong').textContent);

                const li = createElement('li', {});
                li.appendChild(movieName.cloneNode(true));
                li.appendChild(createElement('strong', {}, `Total amount: ${(price * soldTickets).toFixed(2)}`));
                li.appendChild(createElement('button', {}, 'Delete'));
                
                archiveSection.appendChild(li);
                input.value = '';
            }
        }
    }

    function deleteArchive(e) {
        if (e.target.tagName == 'BUTTON') {
             e.target.parentElement.remove();
        }
    }

    function clearArchives() {
        archiveSection.innerHTML = '';
    }

    function createElement(tagName, attributes, content) {
        const element = document.createElement(tagName);

        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }

         if (content) {
             element.textContent = content;
         }

        return element;
    }
}