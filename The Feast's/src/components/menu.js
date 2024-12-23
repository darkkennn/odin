const currentContent = document.getElementById('content');
const header = document.getElementById('header');

export function loadMenu(){
    loadBackground();
    loadPage();
}

function loadBackground(){
    const body = document.querySelector('body');
    body.classList.add('menu')
}

function loadPage(){
    
    const menu = document.createElement('div');

    const item1 = document.createElement('div');
    const itemName1 = document.createElement('header');
    const para1 = document.createElement('p');
    const image1 = document.createElement('img');
    itemName1.textContent = 'Hamburger';
    item1.appendChild(itemName1); 
    para1.textContent = 'A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. The patties are often served with cheese, lettuce, tomato, onion, pickles, bacon, or chilis with condiments such as ketchup, mustard, mayonnaise, relish or a "special sauce", often a variation of Thousand Island dressing, and are frequently placed on sesame seed buns.';
    item1.appendChild(para1);
    image1.src = 'https://upload.wikimedia.org/wikipedia/commons/0/0b/RedDot_Burger.jpg'
    image1.style.height = '20%';
    image1.style.width = '20%';
    image1.style.margin = '0px';
    item1.appendChild(image1);
    menu.appendChild(item1);
    item1.setAttribute('id', item1);
    item1.classList.add('item1')

    const item2 = document.createElement('div');
    const itemName2 = document.createElement('header');
    const para2 = document.createElement('p');
    const image2 = document.createElement('img');
    itemName2.textContent = 'Pizza';
    item2.appendChild(itemName2);
    para2.textContent = 'Pizza is an Italian dish typically consisting of a flat base of leavened wheat-based dough topped with tomato, cheese, and other ingredients, baked at a high temperature, traditionally in a wood-fired oven.'
    item2.appendChild(para2);
    image2.src = 'https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg'
    image2.style.height = '20%';
    image2.style.width = '20%';
    item2.appendChild(image2);
    menu.appendChild(item2);
    item2.setAttribute('id', item2);
    item2.classList.add('item2')
    
    currentContent.appendChild(menu);
}