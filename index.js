// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter the title of your Project',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Enter a brief description of your Project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Enter the command to install dependencies',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Enter instructions and examples for use',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Enter your collaborators, if any',
        name: 'credits'
    },
    {
        type: 'list',
        message: 'Select the license for your Project',
        choices: ['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause Simplified License', 'BSD 3-Clause New or Revised License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Choose guidelines for contribution',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'Provide examples for testing',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'github'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responses => {
        const filename = `${responses.title.toLowerCase().replace(/\s/g, '-')}.md`
        writeToFile(filename, generateMarkdown(responses))
        console.log(filename)
    })

}

// Function call to initialize app
init();
