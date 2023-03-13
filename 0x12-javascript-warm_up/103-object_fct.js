#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,
  incr: function() {
    value++;
  }
};
console.log(myObject);

myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
myObject.incr();
console.log(myObject);
