const currentContent = document.getElementById('content');
const header = document.getElementById('header');

export function loadMenu(){
    loadBackground();
    loadPage();
    createItems();
    flexItems();
}

function loadBackground(){
    const body = document.querySelector('body');
    body.classList.add('menu')
}
