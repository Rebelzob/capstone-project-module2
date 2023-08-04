import './styles.css';
import cards from './modules/cards.js';
import logo from './images/logo.svg';
import {
  brand, cardClosedBtn, popupMain, submitBtnComment, indexCard, ids, nameField,
  commentInput,
} from './modules/elements.js';
import { postComments } from './modules/apis.js';
import updateComments from './modules/updateContent.js';

brand.src = logo;

window.addEventListener('DOMContentLoaded', async () => {
  cards();
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
        const currentMonth = date.getMonth() + 1;
        const currentDay = date.getDate();
        const currentDate = [currentYear, currentMonth, currentDay].join('-');
        const newComment = [{
          comment: commentInput.value,
          creation_date: currentDate,
          username: nameField.value,
        }];
        updateComments(newComment);
        nameField.value = '';
        commentInput.value = '';
      }
    }));
  }
});