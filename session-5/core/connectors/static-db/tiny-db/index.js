const TinyDB = require('tinydb');
const db = new TinyDB('./seed.db');

async function getInstance() {
  return new Promise((resolve, reject) => {
    return (db.onReady = function () {
      resolve(db);
    });
  });
}

module.exports = {
  getInstance,
};
