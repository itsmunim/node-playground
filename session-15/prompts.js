const prompts = [
  {
    name: 'First Name',
    type: 'string',
  },
  {
    name: 'Last Name',
    type: 'string',
  },
  {
    name: 'Driving Licence Type',
    choices: ['Amateur', 'Intermediate', 'Professional'],
    default: 'Ameteur',
  },
];

module.exports = prompts;
