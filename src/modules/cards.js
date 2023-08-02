import { getShows } from './getShows.js';
import getSeasons from './getData.js';
import {
  popupMain, showNname, attSeasons, attPremiere, attGenres, attLanguage, popupPoster,
} from './elements.js';

const showSeasons = getSeasons();

const cards = async () => {
  const shows = await getShows();
  shows.map((show) => {
    const card = document.querySelector('.card_container');
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    const cardImg = document.createElement('img');
    cardImg.src = show.image.medium;
    cardImg.alt = show.name;
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const showTitle = document.createElement('h3');
    showTitle.innerText = show.name;
    const cardCommentBtn = document.createElement('button');
    cardCommentBtn.className = 'comments_btn';
    cardCommentBtn.innerText = 'Comments';
    card.appendChild(cardContainer);
    cardContainer.appendChild(cardImg);
    cardContainer.appendChild(cardBody);
    cardBody.appendChild(showTitle);
    cardContainer.appendChild(cardCommentBtn);
    cardCommentBtn.addEventListener('click', () => {
      const indexButton = (Array.from(cardContainer.parentNode.children).indexOf(cardContainer));
      popupMain.style.display = 'flex';
      popupPoster.src = show.image.medium;
      showNname.innerText = show.name;
      attPremiere.innerText = `Premiered: ${show.premiered}`;
      const genresText = show.genres.map((singleItem) => ` ${singleItem}`);

      // show.genres = show.genres.replace(',', ' ');
      attGenres.innerText = `Genres: ${genresText}`;
      attLanguage.innerText = `Language: ${show.language}`;
      attSeasons.innerText = `Seasons: ${showSeasons[indexButton].length}`;
    });
    return 0;
  });
};

export default cards;
