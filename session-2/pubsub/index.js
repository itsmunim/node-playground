const { addUser, removeUser, getUsers, TOPICS } = require('./user');
const pubsub = require('./pubsub');

pubsub.subscribe(TOPICS.USER, (data) => {
  const { action, ...user } = data;
  switch (action) {
    case 'add':
      console.log('A user is added', user);
      console.log('\n\n', getUsers());
      break;
    case 'remove':
      console.log('A user is removed', user);
      console.log('\n\n', getUsers());
      break;
  }
});

module.exports = {
  addUser,
  removeUser,
};
