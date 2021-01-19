const lowdb = require('./static-db/low-db');
const tinydb = require('./static-db/tiny-db');

module.exports = {
  lowdb: lowdb.getInstance,
  tinydb: tinydb.getInstance,
};
