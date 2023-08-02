import './styles.css';
import cards from './modules/cards.js';
import logo from './images/logo.svg';
import { brand, cardClosedBtn, popupMain } from './modules/elements.js';

brand.src = logo;

window.addEventListener('DOMContentLoaded', async () => {
  cards();
});

// close card
cardClosedBtn.addEventListener('click', () => {
  popupMain.style.display = 'none';
});
