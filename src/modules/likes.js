import { getLikes, postLikes } from './apis.js';

const clickLike = (element,textElement) => {
  element.addEventListener('click', () => {
    postLikes(element.id).then(((value) => {
      if (value === 'Created' || value === '201') {
        textElement.innerText = parseInt(textElement.innerText) + 1;
      }
    }));
  });
}

const updateLikes = async () => {
  const cardElements = document.querySelectorAll('.card');
  cardElements.forEach(async (cardElement) => {
    const cardId = cardElement.id;
    const likes = await getLikes(cardId);
    const likesNumber = cardId.likes
    const likesElement = cardElement.querySelector('.likes_number');
    console.log(likes);
  });
};

export { clickLike, updateLikes };