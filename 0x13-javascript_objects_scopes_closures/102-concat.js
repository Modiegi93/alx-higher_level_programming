#!/usr/bin/node
// script that concats 2 file

const files = process.argv;
const fs = require('fs');
fs.readFile(files[2], 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  fs.appendFile(files[4], data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
fs.readFile(files[3], 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }
  fs.appendFile(files[4], data, function (err) {
    if (err) {
      return console.log(err);
    }
  });
});
