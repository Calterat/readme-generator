// imports inquirer module
const inquirer = require('inquirer');
// imports window.fetch
const fetch = require('node-fetch');

// the inquirer object of questions and answers
const readmeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your name or pass by hitting 'ENTER'?"
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your E-mail Address?',
            validate: input => {
                if (input) return true;
                else {
                    console.log('You must provide your E-mail address!');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'gitType',
            message: 'Are you using GitLab or GitHub?',
            choices: ['GitLab','GitHub']
        },
        {
            type: 'input',
            name: 'gitUser',
            message: 'What is your GitLab username?',
            when: ({gitType}) => {
                if (gitType === 'GitLab') return true;
                else return false;
            },
            validate: input => {
                if (input) return true;
                else {
                    console.log('Please enter your GitLab Username!');
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'gitUser',
            message: 'What is your GitHub username (Hint: must be a valid github username)?',
            when: ({gitType}) => {
                if (gitType === 'GitHub') return true;
                else return false;
            },
            validate: function(input) {

                const validateUser = (user, result) => {
                    return new Promise(() => {
                        fetch(`https://api.github.com/users/${user}`)
                            .then(response => {
                                if (response.ok) {
                                    result(true);
                                    return;
                                } else {                                   
                                    result(' - Wrong! Try again, because this username does not checkout! Backspace this trash out and retype.');
                                    return;
                                }
                            })
                    })
                }

                const result = this.async();

                validateUser(input, result);
            }
        },
        {
            type: 'input',
            name: 'repoName',
            message: 'What is your repo name?',
            validate: input => {
                if (input) return true;
                else {
                    console.log('Please enter your repo name! This is needed for links generated in the README');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: "If different than your repo name, What is the title of your project? (press 'Enter' if same)"
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description of your project?',
            validate: input => {
                if (input) return true;
                else {
                    console.log('Please add a description! It is rude not to tell viewers what they would be looking at.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What Languages are used for this project?',
            choices: [ 'HTML', 'CSS', 'JavaScript', 'Markdown', 'C+', 'GO', 'Python' ]
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license are you using for this project?',
            choices: ['None','Apache License 2.0','GNU General Public License v3.0','MIT License',
            'BSD 2 Clause "Simplified" License','BSD 3 Clause "New" or "Revised" License','Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0',
            'GNU General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0','The Unlicense']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?',
            validate: input => {
                if (input) return true;
                else {
                    console.log('What are the installation proceedures? Do you want anyone to be able to check out your project?');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usageContent',
            message: 'Describe how you use this project.',
            validate: input => {
                if (input) return true;
                else {
                    console.log('Please tell your users how you can use this project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'usageAddImg',
            message: 'Do you have a screenshot link to add to to your README?',
            choices: ['Yes', 'No']
        },
        {
            type: 'input',
            name: 'screenshotPath',
            message: 'What is the relative path of the screenshot image to where this README will sit?',
            when: ({usageAddImg}) => {
                if (usageAddImg === 'Yes') return true;
                else return false;
            }
        },
        {
            type: 'list',
            name: 'usageAddVideo',
            message: 'Do you have a video link to add to to your README?',
            choices: ['Yes', 'No']
        },
        {
            type: 'input',
            name: 'videoLink',
            message: 'What is the URL of the video link?',
            when: ({usageAddVideo}) => {
                if (usageAddVideo === 'Yes') return true;
                else return false;
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What is needed to run tests on the project?'
        },
        {
            type: 'input',
            name: 'repoSiteURL',
            message: 'If there is a webURL for this project enter here, or else just hit ENTER'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repository?'
        },
        {
            type: 'input',
            name: 'comments',
            message: 'If you have any additional comments write them here, or just hit ENTER'
        }
    ])
}

module.exports = { readmeQuestions };
