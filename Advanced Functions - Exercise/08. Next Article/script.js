function getArticleGenerator(articles) {
    const articlesCopy = [...articles];

    return showNext;

    function showNext() {
        const next = articlesCopy.shift();

        if (next) {
            const article = document.createElement('article');
            article.textContent = next;

            document.getElementById('content').appendChild(article);
        }
    }
}
