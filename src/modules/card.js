import {
  popupMain, showNname, attSeasons, attPremiere, attGenres, attLanguage, popupPoster,
  indexCard, ids, commentsList, popupNroComments,
} from './elements.js';
import { getSeassons, getComments } from './apis.js';
import updateComments from './updateContent.js';
import commentCounter from './commentsCounter.js';
import { clickLike, displayLikes } from './likes.js';

const showSeasons = getSeassons();

const createCard = (show) => {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card';
  cardContainer.id = show.id;
  const cardImg = document.createElement('img');
  cardImg.src = show.image.medium;
  cardImg.alt = show.name;
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const showTitle = document.createElement('h3');
  showTitle.innerText = show.name;
  const likesDiv = document.createElement('div');
  likesDiv.className = 'likes';
  const showLikes = document.createElement('i');
  showLikes.id = show.id;
  showLikes.className = 'material-symbols-outlined';
  showLikes.innerText = 'thumb_up';
  const showLikesNumber = document.createElement('span');
  showLikesNumber.className = 'likes_number';
  showLikesNumber.innerText = '0';
  clickLike(showLikes, showLikesNumber);
  displayLikes(show.id, showLikesNumber);
  cardContainer.appendChild(cardImg);
  const cardCommentBtn = document.createElement('button');
  cardCommentBtn.className = 'comments_btn';
  cardCommentBtn.innerText = 'Comments';
  cardContainer.appendChild(cardImg);
  cardContainer.appendChild(cardBody);
  cardBody.appendChild(showTitle);
  cardBody.appendChild(likesDiv);
  likesDiv.appendChild(showLikes);
  likesDiv.appendChild(showLikesNumber);
  cardContainer.appendChild(cardCommentBtn);
  cardCommentBtn.addEventListener('click', () => {
    const indexButton = (Array.from(cardContainer.parentNode.children).indexOf(cardContainer));
    let commentsData = [];
    const getCommentsList = getComments(`${ids[indexButton]}`);
    getCommentsList.then((value) => {
      commentsData = value;
      while (commentsList.lastElementChild) {
        commentsList.removeChild(commentsList.lastElementChild);
      }
      updateComments(commentsData);
      const counter = commentCounter();
      popupNroComments.innerText = `Comments (${counter})`;
    });
    indexCard.id = indexButton;
    popupMain.style.display = 'flex';
    popupPoster.src = show.image.medium;
    showNname.innerText = show.name;
    attPremiere.innerText = `Premiered: ${show.premiered}`;
    const genresText = show.genres.map((singleItem) => ` ${singleItem}`);
    attGenres.innerText = `Genres: ${genresText}`;
    attLanguage.innerText = `Language: ${show.language}`;
    showSeasons.then((value) => {
      attSeasons.innerText = `Seasons: ${value[indexButton].length}`;
    });
  });
  return cardContainer;
};

export default createCard;