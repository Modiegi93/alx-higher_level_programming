#!/usr/bin/node
// imports a dictionary of occurrences by user id and computes
// a dictionary of user ids by occurrence.

const dict = require('./101-data').dict;

console.log(dict);

const newDict = {};
for (const id in dict) {
  const count = dict[id];
  if (count in newDict) {
    newDict[count].push(id);
  } else {
    newDict[count] = [id];
  }
}

console.log(newDict);
