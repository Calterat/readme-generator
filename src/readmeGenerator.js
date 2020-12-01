const testingSection = (test) => {
    if (test) {
return `
## Tests

${test}
`
    }
}

const testingTOB = (test) => {
    if (test) return `* [Tests](#tests)`
}

const siteURL = (url) => {
     if (url) {
         return `
         Here is the link to the site URL: ${url}
         `
     } else {
         return ``
     }
}

const nameSentence = name => {
    if (name) {
        return `My name is ${name}.`;
    } else return ``;
}

const licenseYesNo = (license) => {
    if (license !== 'None' || license !== 'The Unlicense') return 'red';
    else return 'green';
}

module.exports = answers => {

const { name, email, github, title, description, languages, license, installCommand, testCommand, git, repoSiteURL, contribute } = answers;

return `
[![GitHub license](https://img.shields.io/badge/license-${license}-${licenseYesNo(license)}.svg)](https://${git}.com/${github})

# ${title}

## Description

${nameSentence(name)}. Welcome to my ${title} node app.

${description}


## Table of Contents

* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
${testingTOB(testCommand)}
* [License](#license)
* [Questions](#questions)

## Language(s)

Language(s) used in this project:
${languages}


## Installation

${installCommand}


## Usage

Check out this [Video](https://instructions.com) to learn how to use this app.


## Contributing

${contribute}    


${testingSection(testCommand)}


## License

This project is covered under the license of ${license}


## Repository

You can find my repository URL [Here](https://${git}.com/${github})

${siteURL(repoSiteURL)}

If you have additional questions, you may reach me at my E-mail Address: ${email}
`

}