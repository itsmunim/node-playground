let users = [];

function getUsers() {
  return users;
}

function getUser(id) {
  return users.find((user) => user.id === Number(id));
}

function createUser(user) {
  users.push(user);
}

function deleteUser(id) {
  users = users.filter((user) => Number(id) !== user.id);
}

module.exports = {
  getUser,
  getUsers,
  createUser,
  deleteUser,
};
