#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

request(`https://swapi.dev/api/films/${movieId}/`, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);

    const characters = data.characters;

    characters.forEach((characterUrl) => {
      request(characterUrl, function (error, response, body) {
        if (error) {
          console.error(error);
        } else {
          const data = JSON.parse(body);
          console.log(data.name);
        }
      });
    });
  }
});
