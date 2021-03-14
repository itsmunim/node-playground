const fs = require('fs');
const path = require('path');

function run(origin, pattern, outputFolder) {
  const p = new RegExp(pattern, 'gi');
  outputFolder = path.join(origin, outputFolder);
  try {
    if (
      !fs.existsSync(origin) ||
      !fs.lstatSync(origin).isDirectory()
    ) {
      throw new Error('Not a directory or does not exist');
    }

    let fileNames = fs.readdirSync(origin);
    fileNames = fileNames
      .map((fileName) => path.join(origin, fileName))
      .filter(
        (fileName) => fs.lstatSync(fileName).isFile() && fileName.match(p)
      );

    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    }

    fileNames.forEach((fileName) => {
      fs.renameSync(fileName, path.join(outputFolder, path.basename(fileName)));
    });

    return fileNames.length;
  } catch (ex) {
    console.log('Something went wrong', ex);
  }
}

module.exports = {
  run,
};
