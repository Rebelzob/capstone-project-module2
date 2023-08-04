/**
 * @jest-environment jsdom
 */

import commentCounter from '../modules/commentsCounter.js';

document.body.innerHTML = `
      <div id="container"></div>`;
const container = document.querySelector('#container');

describe('comments counter', () => {
    test('Test if the count of comments is correct', () => {
        for (let i=0;i<3;i+=1) {
            const spanComment = document.createElement('span');
            spanComment.className = 'comment_span';
            container.appendChild(spanComment);
        }
        commentCounter();
        expect(document.querySelectorAll('[class="comment_span"')).tobe(3);
    });

    test('Test if the count of comments is correct', () => {
        for (let i=0;i<20;i+=1) {
            const spanComment = document.createElement('span');
            spanComment.className = 'comment_span';
            container.appendChild(spanComment);
        }
        expect(document.querySelectorAll('[class="comment_span"')).toHaveLength(20);
    });
  
    test('Test if the count of comments is correct', () => {
        for (let i=0;i<200;i+=1) {
            const spanComment = document.createElement('span');
            spanComment.className = 'comment_span';
            container.appendChild(spanComment);
        }
        expect(commentCounter()).tobe(200);
    });
  });
