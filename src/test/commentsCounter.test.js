/**
 * @jest-environment jsdom
 */

import commentCounter from '../modules/commentsCounter.js';

document.body.innerHTML = `
      <div id="container"></div>`;
const container = document.querySelector('#container');

describe('comments counter', () => {
  test('The count should be 0', () => {
    expect(commentCounter()).toBe(0);
  });

  test('Test if the count is 3', () => {
    for (let i = 0; i < 3; i += 1) {
      const spanComment = document.createElement('span');
      spanComment.className = 'comment_span';
      container.appendChild(spanComment);
    }
    expect(commentCounter()).toBe(3);
  });

  test('The count should be 23', () => {
    for (let i = 0; i < 20; i += 1) {
      const spanComment = document.createElement('span');
      spanComment.className = 'comment_span';
      container.appendChild(spanComment);
    }
    expect(commentCounter()).toBe(23);
  });

  test('The count should be 223', () => {
    for (let i = 0; i < 200; i += 1) {
      const spanComment = document.createElement('span');
      spanComment.className = 'comment_span';
      container.appendChild(spanComment);
    }
    expect(commentCounter()).toBe(223);
  });
});
