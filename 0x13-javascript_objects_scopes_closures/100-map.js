#!/usr/bin/node
// imports an array and computes a new array.

const list = require('./100-data').list;

console.log(list);

const newList = list.map(function (value, index) {
  return value * index;
});

console.log(newList);
