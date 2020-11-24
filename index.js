const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: name,
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: github,
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: title,
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: description,
        message: 'What is the description of your project?'
    },
    {
        type: 'checkbox',
        name: license,
        message: 'What license are you using for this project?',
        choices: ['a','b','c','d','e','f','g','h','i','j','k']
    },
    {
        type: 'input',
        name: installCommand,
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: testCommand,
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: userRepo,
        message: 'What does the user need to know about using the repo?'
    },
    {
        type: 'input',
        name: userContribute,
        message: 'What does the user need to know about contributing to the repository?'
    }
])
.then(answers => console.log(answers));

