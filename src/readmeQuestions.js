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
            choices: ['a','b','c','d','e','f','g','h','i','j','k']
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
