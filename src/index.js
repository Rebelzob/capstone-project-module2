import './styles.css';
import cards from './modules/cards.js';
import logo from './images/logo.svg';
import {
  brand, cardClosedBtn, popupMain, submitBtnComment, indexCard, ids, nameField, commentInput,
} from './modules/elements.js';
import { postComments } from './modules/apis.js';

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
        nameField.value = '';
        commentInput.value = '';
      }
    }));
  }
});
