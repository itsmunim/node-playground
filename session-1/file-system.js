const fs = require('fs');
const path = require('path');

function writeFile(content) {
  fs.writeFileSync(path.resolve('./tmp'), content);
}

function readFile(path) {
  const content = fs.readFileSync(path, { encoding: 'utf-8' });
  console.log(content);
}

module.exports = {
  readFile,
  writeFile,
};
