const pages = document.querySelector('.gh-pages-list');

for (const i of [...Array(5)]) {
    const page = document.createElement('li');
    page.textContent = `Page ${i+1}`;
    pages.appendChild(page);
}