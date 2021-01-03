const { publish } = require('./pubsub');

const users = [];
const TOPICS = {
  USER: 'user:topic',
};

function addUser(name, age) {
  users.push({ name, age });
  publish(TOPICS.USER, { name, age, action: 'add' });
}

function removeUser(name) {
  const index = users.findIndex((user) => user.name === name);
  const removedUser = users.splice(index, 1);
  publish(TOPICS.USER, { ...removedUser, action: 'remove' });
}

function getUsers() {
  return users;
}

module.exports = {
  TOPICS,
  addUser,
  removeUser,
  getUsers,
};
