const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions:'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage instructions and examples:'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, third-party assets, and tutorials:'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache-2.0', 'BSD-3-Clause', 'None']
    },
    {
      type: 'input',
      name: 'features',
      message: 'List the features of your project:'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide guidelines for how to contribute:'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions and examples:'
    },
  ];

function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

function init() {
  inquirer.prompt(questions)
    .then(answers => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    });
}

init();