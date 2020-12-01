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
            name: 'email',
            message: 'What is your E-mail Address?',
            validate: input => {
                if (input) return true;
                else {
                    console.log('You must provide your E-mail address!')
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: input => {
                if (input) return true;
                else {
                    console.log('Please enter your GitHub username! This is for your GitHub links');
                    return false;
                }
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
            message: 'What is the name of your project?',
            validate: input => {
                if (input) return true;
                else {
                    console.log('Please input the title of your project! Come on... It must be called something!');
                    return false;
                }
            }
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
            'BSD 2-Clause "Simplified" License','BSD 3-Clause "New" or "Revised" License','Boost Software License 1.0',
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
            name: 'usageAddOn',
            message: 'Do you have a video link or screenshot link to add to to your README?',
            choices: ['None', 'Screenshot', 'Video']
        },
        {
            type: 'input',
            name: 'screenshotPath',
            message: 'What is the relative path of the screenshot image to where this README will sit?',
            when: ({usageAddOn}) => {
                if (usageAddOn === 'Screenshot') return true;
                else return false;
            }
        },
        {
            type: 'input',
            name: 'videoLink',
            message: 'What is the URL of the video link?',
            when: ({usageAddOn}) => {
                if (usageAddOn === 'Video') return true;
                else return false;
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What is needed to run tests on the project?'
        },
        {
            type: 'list',
            name: 'git',
            message: 'Are you using GitLab or GitHub?',
            choices: ['GitLab','GitHub']
        },
        {
            type: 'input',
            name: 'repoSiteURL',
            message: 'If there is a webURL for this enter here, or else just hit enter'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repository?'
        }
    ])
}

module.exports = { readmeQuestions };
