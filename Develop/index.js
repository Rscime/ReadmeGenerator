// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your application?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your application',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for this application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the intended use of this application? Feel free to include a screenshot.',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What contribution guidelines should other developers follow?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Are any tests provided? If so how can a user run them?',
    },
    {
      type: 'list',
      message: 'What license is associated with this application?',
      name: 'license',
      choices: ['MIT', 'Apache License 2.0', 'ISC', 'GNU Affero', 'GNU Lesser General Public', 'GNU General Public', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost', 'Creative Commons Zero', 'Eclipse', 'Mozilla', 'The Unlicense'],
    },
    {
      type: 'input',
      name: 'user',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What email can users contact you at?',
    },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
