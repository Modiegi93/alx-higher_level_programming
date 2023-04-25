#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const wedgeId = '18';

request.get(apiUrl, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const filmsData = JSON.parse(body).results;
  const wedgeFilms = filmsData.filter((film) => {
    return film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${wedgeId}/`);
  });
  console.log(wedgeFilms.length);
});
