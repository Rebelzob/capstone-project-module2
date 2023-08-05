import './styles.css';
import cards from './modules/cards.js';
import logo from './images/logo.svg';
import {
  brand, cardClosedBtn, popupMain, submitBtnComment, indexCard, ids, nameField,
  commentInput, showCounts, popupNroComments,
} from './modules/elements.js';
import { postComments } from './modules/apis.js';
import updateComments from './modules/updateContent.js';
import cardCounter from './modules/cardCounter.js';
import commentCounter from './modules/commentsCounter.js';

brand.src = logo;

window.addEventListener('DOMContentLoaded', async () => {
  cards().then(() => {
    const countShows = cardCounter();
    showCounts.innerHTML = `(${countShows})`;
  });
});

// close card
cardClosedBtn.addEventListener('click', () => {
  popupMain.style.display = 'none';
});

submitBtnComment.addEventListener('click', () => {
  if (nameField.value.length > 0 && commentInput.value.length > 0) {
    const idItem = ids[indexCard.id];
    postComments(idItem, nameField.value, commentInput.value).then(((value) => {
      if (value === 'Created' || value === '201') {
        const date = new Date();
        const currentYear = date.getFullYear();
        let currentMonth = date.getMonth() + 1;
        let currentDay = date.getDate() + 1;
        if (currentMonth < 10) {
          currentMonth = `0${currentMonth}`;
        }
        if (currentDay < 10) {
          currentDay = `0${currentDay}`;
        }
        const currentDate = [currentYear, currentMonth, currentDay].join('-');
        const newComment = [{
          comment: commentInput.value,
          creation_date: currentDate,
          username: nameField.value,
        }];
        updateComments(newComment);
        nameField.value = '';
        commentInput.value = '';
        const numComments = commentCounter();
        popupNroComments.innerText = `Comments (${numComments})`;
      }
    }));
  }
});