
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

