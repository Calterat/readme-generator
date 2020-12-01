const inquirer = require('inquirer');

const readmeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What Languages are used for this project?',
            choices: [ 'HTML', 'CSS', 'JavaScript', 'node.js', 'Markdown', 'C+', 'GO']
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using for this project?',
            choices: ['None','Apache License 2.0','GNU General Public License v3.0','MIT License',
            'BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0',
            'GNU General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense']
        },
        {
            type: 'input',
            name: 'installCommand',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'testCommand',
            message: 'What command is needed to run tests on the project?'
        },
        {
            type: 'input',
            name: 'userRepo',
            message: 'What does the user need to know about using the repository?'
        },
        {
            type: 'input',
            name: 'userContribute',
            message: 'What does the user need to know about contributing to the repository?'
        }
    ])
}

module.exports = { readmeQuestions };
