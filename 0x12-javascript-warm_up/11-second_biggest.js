#!/usr/bin/node
// searches the second biggest integer in the list of arguments.

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log(0);
} else if (args.length === 1) {
  console.log(0);
} else {
  const nums = args.map(Number).sort((a, b) => b - a);

  const secondBiggest = nums[1];

  console.log(secondBiggest);
}
