import { ids } from './elements.js';

const api = 'https://api.tvmaze.com/shows/';
const apiLikes = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/ZkLkIUUV1lTLjqilepgf';

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
  return response.text();
};

const getComments = async (itemId) => {
  const response = await fetch(`${apiLikes}/comments?item_id=${itemId}`);
  return response.json();
};

const postComments = async (id, name, comment) => {
  const response = await fetch(`${apiLikes}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: id, username: name, comment }),
  });
  return response.text();
};

export {
  getShows, getSeassons, getLikes, postLikes, postComments, getComments,
};
