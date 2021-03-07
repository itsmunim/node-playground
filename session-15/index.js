#!/usr/bin/env node

const fs = require('fs');
const { Command } = require('commander');
const inquirer = require('inquirer');
const prompts = require('./prompts');

async function run() {
  const program = new Command();
  program
    .option('-f, --filepath <filepath>', 'Enter an absolute file path')
    .parse(process.argv);

  const values = program.opts();

  if (!values.filepath) {
    console.log('Need a file path to process');
    process.exit(1);
  }

  await writeUserData(values.filepath);
}

async function writeUserData(filePath) {
  const answers = await inquirer.prompt(prompts);
  fs.writeFileSync(filePath, JSON.stringify(answers, null, 4));
}

run();
