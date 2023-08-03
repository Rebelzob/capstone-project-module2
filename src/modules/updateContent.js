import { commentsList } from './elements.js';

const updateComments = (commentsData) => {
  commentsData.forEach((element) => {
    const commentDetail = document.createElement('span');
    commentDetail.className = 'comment_span';
    commentsList.appendChild(commentDetail);
    commentDetail.innerText = `${element.creation_date} ${element.username}: ${element.comment}`;
    commentsList.appendChild(commentDetail);
  });
};

export default updateComments;