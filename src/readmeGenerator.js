const testingSection = (test) => {
    if (test) {
        return `
        ## Testing

        ${test}
        `
    }
}

const repoSiteURL = (url) => {
     if (url) {
         return `
         ${url}
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


module.exports = answers => {

const { name, github, title, description, languages, license, installCommand, testCommand, repoURL, repoSiteURL, contribute } = answers;

return `
# ${title}

## Description

Welcome to my ${title} node app. ${nameSentence(name)}.

${description}


## Table of Contents

* [Languages](#languages)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Tesing](#testing)
* [Repository](#repository)
* [Contributing](#contributing)


## Languages

Languages used in this project:
${languages}


## Installation

${installCommand}


## Usage

Check out this [Video](https://instructions.com)


${testingSection(testCommand)}


## Repository

You can find my repo username as ${github}.

${repoURL}
${repoSiteURL(repoSiteURL)}


## Contributing

${contribute}    

## License

${license}
`
}