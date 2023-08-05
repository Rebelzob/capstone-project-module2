import { getShows } from './apis.js';
import createCard from './card.js';

const cards = async () => {
  const shows = await getShows();
  const cardContainer = document.querySelector('.card_container');
  shows.forEach((show) => {
    const card = createCard(show);
    cardContainer.appendChild(card);
  });
};

export default cards;