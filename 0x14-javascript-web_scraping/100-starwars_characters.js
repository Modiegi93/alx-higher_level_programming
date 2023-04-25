#!/usr/bin/node

const request = require('request');
const apiUrl = 'https://swapi-api.hbtn.io/api/films/'.concat(process.argv[2]);

request(apiUrl, function (_err, _res, body) {
  const characters = JSON.parse(body).characters;

  for (let i = 0; i < characters.length; ++i) {
    request(characters[i], function (_xErr, _xRes, xBody) {
      console.log(JSON.parse(xBody).name);
    });
  }
});
