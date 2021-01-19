const low = require('lowdb');
const path = require('path');
const FileSync = require('lowdb/adapters/FileSync');

let _instance;

async function getInstance() {
  if (!_instance) {
    const adapter = new FileSync(path.resolve('seed.json'));
    _instance = low(adapter);
    _instance
      .defaults({
        products: [
          {
            id: 1,
            name: 'egg',
          },
          {
            id: 2,
            name: 'cake',
          },
        ],
      })
      .write();
  }

  return _instance;
}

module.exports = {
  getInstance,
};
