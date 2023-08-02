import { getShows, getSeassons } from './getShows.js';

let showDetails = [];
let showSeasons = [];

//getting all the details from all the tv shows
let getDetails = getShows();
getDetails.then( (value)=> {
  showDetails = value;
});

//getting all the seasons from all the tv shows
let getSeasons = getSeassons();
getSeasons.then( (value)=> {
  showSeasons = value;
});

export { showDetails, showSeasons};