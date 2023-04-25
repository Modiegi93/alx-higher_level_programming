#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

request.get(`https://swapi-api.alx-tools.com/api/films/${movieId}`, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const movieData = JSON.parse(body);
  console.log(movieData.title);
});
