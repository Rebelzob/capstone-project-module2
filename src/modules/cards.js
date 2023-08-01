import { getShows } from './getShows.js';

const cards = async () => {
  const shows = await getShows();
  const cards = shows.map((show) => `
    <div class="card">
      <img src="${show.image.medium}" alt="${show.name}">
      <div class="card-body">
        <h3>${show.name}</h3>
      </div>
      <button class='comments_btn' type="button">Comments</button>
    </div>
  `);
  return cards.join('');
};

export default cards;