#!/usr/bin/node
// script that concats 2 files.

const fs = require('fs');

const fileA = process.argv[2];
const fileB = process.argv[3];
const dest = process.argv[4];

fs.readFile(fileA, 'utf8', (err, data1) => {
  if (err) throw err;

  fs.readFile(fileB, 'utf8', (err, data2) => {
    if (err) throw err;

    const data = data1 + data2;

    fs.writeFile(dest, data, (err) => {
      if (err) throw err;
      console.log(`${fileA} and ${fileB} have been concatenated and saved to ${dest}`);
    });
  });
});
