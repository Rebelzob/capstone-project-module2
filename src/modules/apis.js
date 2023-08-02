import ids from './elements.js';

const api = 'https://api.tvmaze.com/shows/';
const apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZkLkIUUV1lTLjqilepgf'

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

const getLikes = async () => {
  const response = await fetch(`${apiLikes}/likes`);
  return response.json();
};

const postLikes = async (id) => {
  const response = await fetch(`${apiLikes}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id }),
  });
  return response.json();
}


export { getShows, getSeassons, getLikes, postLikes };