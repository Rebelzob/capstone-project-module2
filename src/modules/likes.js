import { getLikes, postLikes } from './apis.js';

const clickLike = (element, textElement) => {
  element.addEventListener('click', () => {
    postLikes(element.id).then(((value) => {
      if (value === 'Created' || value === '201') {
        textElement.innerText = parseInt(textElement.innerText, 10) + 1;
      }
    }));
  });
};

const displayLikes = (itemId, elementDisplay) => {
  getLikes().then(((value) => {
    const itemObject = value.find((item) => item.item_id === itemId);
    elementDisplay.innerText = itemObject.likes;
  }));
};

export { clickLike, displayLikes };