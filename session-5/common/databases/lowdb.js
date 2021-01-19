const { lowdb } = require('../../core/connectors');

async function getAll(collectionName) {
  const db = await lowdb();
  return db.get(collectionName).value();
}

module.exports = {
  getAll,
};
