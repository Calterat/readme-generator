// This adds a Test header if the user inputs a test section
const testingSection = test => {
    if (test) {
return `
## Tests

> ${test}
`
    } else return ``;
}

// This add the Test TOC item if the user inputs a test section
const testingTOC = test => {
    if (test) {
        return `
* [Tests](#tests)`;
    } else return ``;
}

// Adds the users email to the README
const siteURL = url => {
     if (url) {
         return `
         Here is the link to the site URL: ${url}
         `
     } else {
         return ``
     }
}

// If the user supplied their name it is placed near the top of the README
const nameSentence = name => {
    if (name) {
        return `My name is ${name}.`;
    } else return ``;
}

// Checks if user selects a license for their project.
const licenseYesNo = license => {
    if (license === 'None' || license === 'The Unlicense') return 'critical';
    else return 'success';
}

// checks what type of usage addon the user selects and puts it in the README
const usageAdd = (screenshot, videoLink) => {
    if (screenshot && videoLink) {
        return`
        * ![Screenshot](${screenshot})
        * [Here is a HowTo Video Link!](${videoLink})
        `
    }
    if (screenshot) return `* ![Screenshot](${screenshot})`
    if (videoLink) return `* [Here is a HowTo Video Link!](${videoLink})`
}

// adds a comment TOC if the user inputs anything
const commentsTOC = comments => {
    if (comments) {
        return `
* [Comments](#comments)`;
    } else return ``;
}

// add comment section if user inputs anything for it
const commentSection = comments => {
    if (comments) {
return `
## Comments

> ${comments}
`
    } else return ``;
}

// adds a contribute TOC if the user inputs anything
const contributeTOC = comments => {
    if (comments) {
        return `
* [Contributing](#contributing)`;
    } else return ``;
}

// add contribute section if user inputs anything for it
const contributeSection = contribute => {
    if (contribute) {
return `
## Contributing

> ${contribute}
`
    } else return ``;
}

const repoNameOrTitle = (repoName, title) => {
    if (title) return `${title}`
    else return `${repoName}`
}


// exposts this generator
module.exports = answers => {

const { name, email, gitType, gitUser, repoName, title, description, languages, 
    license, installation, usageContent, usageAddOn, screenshotPath, videoLink, 
    tests, repoSiteURL, contribute, comments } = answers;

return `
[![${gitType} license](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-${licenseYesNo(license)}.svg)](https://${gitType}.com/${gitUser}/${repoName}/main/LICENSE)

# ${repoNameOrTitle(repoName, title)}

${nameSentence(name)} Welcome to my ${title} node app.


## Description

${description}


## Table of Contents

* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)${contributeTOC(contribute)}${testingTOC(tests)}
* [License](#license)
* [Questions](#questions)${commentsTOC(comments)}


## Language(s)

Language(s) used in this project:
${languages}


## Installation

> ${installation}


## Usage

> ${usageContent}

${usageAdd(screenshotPath, videoLink)}


${contributeSection(contribute)} 


${testingSection(tests)}


## License

This project is covered under the license of [${license}](https://${gitType}.com/${gitUser}/${repoName}/main/LICENSE)


## Questions

You can find my repository URL [Here](https://${gitType}.com/${gitUser})

${siteURL(repoSiteURL)}

If you have additional questions, you may reach me at my E-mail Address: ${email}


${commentSection(comments)}
`
}