import './styles.css';
import cards from './modules/cards.js';
import logo from './images/logo.svg';
import { brand, cardClosedBtn, popupMain, navShows, showNname, attSeasons, attPremiere, attGenres, attLanguage, popupPoster } from './modules/elements.js';
import { showDetails, showSeasons} from './modules/getData.js';

brand.src = logo;

window.addEventListener('DOMContentLoaded', async () => {
  const card = document.querySelector('.card_container');
  card.innerHTML = await cards();
});

//Here I try to get the click from the comment buttons (no working yet)
let getCards = cards();
getCards.then( () => {
  document.querySelectorAll('.comments_btn').forEach(function(btnComment) {
    btnComment.addEventListener('click',(e) => {
      console.log(e.target);
    })
  })  
})

// When clicking menu shows item, the popop displays with the details of the first show
navShows.addEventListener('click', () => {
  popupMain.style.display = 'flex';
  popupPoster.src = showDetails[0].image.medium;
  showNname.innerText = showDetails[0].name;
  attPremiere.innerText = 'Premiered: '+ showDetails[0].premiered;
  attGenres.innerText = 'Genres: '+ showDetails[0].genres;
  attLanguage.innerText = 'Language: '+ showDetails[0].language;
  attSeasons.innerText = 'Seasons: '+ showSeasons.length;
});

// close card
cardClosedBtn.addEventListener('click', () => {
  popupMain.style.display = 'none'; 
});
