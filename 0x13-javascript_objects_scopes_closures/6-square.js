#!/usr/bin/node
// class Square that defines a square and inherits from Square of 5-square.js

const Square = require('./5-square.js');

class SquareChar extends Square {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      console.log(c.repeat(this.width));
    }
  }
}

module.exports = SquareChar;
