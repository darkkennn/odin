
import { loadReservation } from "./components/reservation.js";
import { loadMenu } from "./components/menu.js";
import { loadHome } from "./components/home.js";
import { loadContact } from "./components/contact.js";

import './assets/style.css';

const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const reservationButton = document.getElementById('reserve');
const contactButton = document.getElementById('contact');

function clearScreen(){
    const currentContent = document.getElementById('content');
    while(currentContent.firstChild){
        currentContent.removeChild(currentContent.firstChild);
    }
};

const panels = document.createElement('div');
panels.className = 'panels'
content.appendChild(panels);

const panel1 = document.createElement('div');
panel1.className = 'panel home';
panels.appendChild(panel1);

const panel2 = document.createElement('div');
panel2.className = 'panel menu';
panels.appendChild(panel2);

const panel3 = document.createElement('div');
panel3.className = 'panel reservations';
panels.appendChild(panel3);

panels.addEventListener('hover', viewPanel);

function viewPanel(){
    panels.classList.add('open');
}



homeButton.addEventListener('click', () => {
    clearScreen();
    loadHome();
});

menuButton.addEventListener('click', () => {
    clearScreen();
    loadMenu();
});

reservationButton.addEventListener('click', () => {
    clearScreen();
    loadReservation();
});

contactButton.addEventListener('click', () => {
    clearScreen();
    loadContact();
});

