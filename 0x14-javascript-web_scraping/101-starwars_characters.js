#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

// Make a request to the Star Wars API for the specified movie
request(`https://swapi.dev/api/films/${movieId}/`, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const data = JSON.parse(body);

    // Get the list of characters for the movie
    const characters = data.characters;

    // Print each character's name
    characters.forEach((characterUrl) => {
      request(characterUrl, (error, response, body) => {
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
