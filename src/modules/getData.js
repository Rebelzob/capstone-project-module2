import { getSeassons } from './getShows.js';

let showSeasons = [];
// getting all the seasons from all the tv shows
const getSeasons = getSeassons();
getSeasons.then((value) => {
  showSeasons = value;
  return showSeasons;
});

export default getSeasons;