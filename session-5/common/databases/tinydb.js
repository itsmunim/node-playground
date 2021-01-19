const { tinydb } = require('../../core/connectors');

async function getAll(collectionName) {
  const db = await tinydb();
  return new Promise((resolve, reject) => {
    return db.find(collectionName, (results) => {
      resolve(results);
    });
  });
}

module.exports = {
  getAll,
};
