import './styles.css';
import cards from './modules/cards.js';
import logo from './images/logo.svg';

const brand = document.querySelector('.nav_logo');
brand.src = logo;

window.addEventListener('DOMContentLoaded', async () => {
  const card = document.querySelector('.card_container');
  card.innerHTML = await cards();
});
