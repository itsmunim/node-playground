#!/usr/bin/env node

const { Command } = require('commander');
const organizer = require('./organizer');

function run() {
  const program = new Command();
  program
    .option('-f, --folderpath <filepath>', 'Enter an absolute folder path')
    .option('-p, --pattern <pattern>', 'Enter a filename')
    .option('-o, --outputfolder <outputfolder>', 'Enter an output folder name')
    .parse(process.argv);

  const values = program.opts();

  if (!values.folderpath) {
    console.log('No folder path given, using current folder');
    values.folderpath = process.cwd();
  }

  if (!values.pattern) {
    console.log('No pattern given, exiting');
    process.exit(1);
  }

  if (!values.outputfolder) {
    console.log('No output folder name given, exiting');
    process.exit(1);
  }

  const fileCount = organizer.run(
    values.folderpath,
    values.pattern,
    values.outputfolder
  );

  console.log(`${fileCount} files were organized into ${values.outputfolder}`);
}

run();
