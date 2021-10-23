window.addEventListener('load', solve);

function solve() {
    const inputs = Array.from(document.querySelectorAll('form > input'));
    const totalLikes = document.querySelector('#total-likes p');
    const allSongs = document.querySelector('.all-hits-container');
    const savedSongs = document.querySelector('.saved-container');
    const addBtn = document.getElementById('add-btn');

    addBtn.addEventListener('click', addSong);
    
    function addSong(ev) {
        ev.preventDefault();

        const [genre, name, author, date] = inputs.map((i) => i.value);

        if (genre && name && author && date) {
            const saveBtn = el('button', { className: 'save-btn' }, 'Save song');
            const likeBtn = el('button', { className: 'like-btn' }, 'Like song');
            const deleteBtn = el('button', { className: 'delete-btn' }, 'Delete');

            const song = el('div', { className: 'hits-info' }, 
                el('img', { src: './static/img/img.png' }),
                el('h2', {}, `Genre: ${genre}`),
                el('h2', {}, `Name: ${name}`),
                el('h2', {}, `Author: ${author}`),
                el('h3', {}, `Date: ${date}`),
                saveBtn,
                likeBtn,
                deleteBtn
            );

            allSongs.appendChild(song);
            inputs.forEach((i) => i.value = '');

            saveBtn.addEventListener('click', saveSong);
            likeBtn.addEventListener('click', likeSong);
            deleteBtn.addEventListener('click', deleteSong);
        }
    }

    function saveSong(ev) {
        const song = ev.target.parentElement;
        song.querySelector('.save-btn').remove();
        song.querySelector('.like-btn').remove();

        savedSongs.appendChild(song);
    }

    function likeSong(ev) {
        ev.target.disabled = true;
        let currentLikes = Number(totalLikes.textContent.split(': ')[1]);
        totalLikes.textContent = `Total Likes: ${++currentLikes}`;
    }

    function deleteSong(ev) {
        ev.target.parentElement.remove();
        console.log(this);
    }

    function el(type, atts, ...content) {
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