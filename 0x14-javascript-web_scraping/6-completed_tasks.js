#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

request.get(url, (err, res, body) => {
  if (err) {
    console.error(err);
    return;
  }
  const todos = JSON.parse(body);
  const completedTasksByUser = {};
  for (const todo of todos) {
    if (todo.completed) {
      const userId = todo.userId;
      if (completedTasksByUser[userId]) {
        completedTasksByUser[userId]++;
      } else {
        completedTasksByUser[userId] = 1;
      }
    }
  }
  for (const userId in completedTasksByUser) {
    console.log(`'${userId}' : ${completedTasksByUser[userId]},`);
  }
});
