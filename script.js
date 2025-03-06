const pages = document.querySelector('.gh-pages-list');

for (const i of Object.keys([...Array(5)])) {
    const page = document.createElement('li');
    page.textContent = `Page ${parseInt(i) + 1}`;
    pages.appendChild(page);
}