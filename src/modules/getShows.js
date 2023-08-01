import ids from './elements.js';

const api = 'https://api.tvmaze.com/shows/';

const getShows = async () => {
  const data = await Promise.all(ids.map(async (id) => {
    const response = await fetch(`${api}${id}`);
    return response.json();
  }));
  return data;
};

const getSeassons = async () => {
  const dataSeasons = await Promise.all(ids.map(async (id) => {
    const response = await fetch(`${api}${id}/seasons`);
    return response.json();
  }));
  return dataSeasons;
};

export { getShows, getSeassons };