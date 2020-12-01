const testingSection = (test) => {
    if (test) {
return `
## Testing

${test}
`
    }
}

const testingTOB = (test) => {
    if (test) return `* [Testing](#testing)`
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


module.exports = answers => {

const { name, github, title, description, languages, license, installCommand, testCommand, git, repoSiteURL, contribute } = answers;

return `
# ${title}

## Description

${nameSentence(name)}. Welcome to my ${title} node app.

${description}


## Table of Contents

* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)
* [Repository](#repository)
* [Contributing](#contributing)
${testingTOB(testCommand)}
* [License](#license)


## Language(s)

Language(s) used in this project:
${languages}


## Installation

${installCommand}


## Usage

Check out this [Video](https://instructions.com) to learn how to use this app.


## Repository

You can find my repository URL [Here](https://${git}.com/${github})

${siteURL(repoSiteURL)}


## Contributing

${contribute}    


${testingSection(testCommand)}


## License

${license}
`
}