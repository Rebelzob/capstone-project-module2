/**
 * @jest-environment jsdom
 */

import cardCounter from '../modules/cardCounter.js';

describe('cardCounter', () => {
  test('should update the card counter with the correct number of cards', () => {
    document.body.innerHTML = `
      <div class="card-container">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    `;

    expect(cardCounter()).toBe(3);
  });

  test('should return 4 cards', () => {
    document.body.innerHTML = `
      <div class="card-container">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
      </div>
    `;
    cardCounter();
    expect(cardCounter()).not.toBe(5);
  });

  test('should return 0 cards', () => {
    document.body.innerHTML = `
      <div class="card-container">
      </div>
    `;
    cardCounter();
    expect(cardCounter()).toBe(0);
  });

  test('should return 200 cards', () => {
    Array(200).fill().forEach(() => {
      document.body.innerHTML += `
        <div class="card-container">
          <div class="card"></div>
        </div>
      `;
    });
    cardCounter();
    expect(cardCounter()).toBe(200);
  });
});