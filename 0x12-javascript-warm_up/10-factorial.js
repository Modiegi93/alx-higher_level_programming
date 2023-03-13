#!/usr/bin/node
// computes and prints a factorial

function computeFactorial (num) {
  if (isNaN(num)) {
    return 1;
  } else if (num === 0) {
    return 1;
  } else {
    return num * computeFactorial(num - 1);
  }
}

const arg = process.argv[2];
const input = parseInt(arg);

const factorial = computeFactorial(input);

console.log(`${input} is ${factorial}`);
