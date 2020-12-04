const testingSection = test => {
    if (test) {
return `
## Tests

${test}
`
    }
}

const testingTOC = test => {
    if (test) {
        return `
* [Tests](#tests)`;
    } else return ``;
}

const siteURL = url => {
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

const licenseYesNo = license => {
    if (license === 'None' || license === 'The Unlicense') return 'critical';
    else return 'success';
}

const usageAdd = (addOn, screenshotPath, videoLink) => {
    switch (addOn) {
        case 'None':
            return ``;
            break;
        case 'Screenshot':
            return `![Screenshot](${screenshotPath})`
            break;
        case 'Video':
            return `[Here is a HowTo Video Link!](${videoLink})`
            break;
        default:
            return `Error in the Switch!`;
    }
    
}

const commentsTOC = comments => {
    if (comments) {
        return `
* [Comments](#comments)`;
    } else return ``;
}

const commentSection = comments => {
    if (comments) {
return `
## Comments

${comments}
`
    }
}

module.exports = answers => {

const { name, email, github, repoName, title, description, languages, 
    license, installation, usageContent, usageAddOn, screenshotPath, videoLink, 
    tests, git, repoSiteURL, contribute, comments } = answers;

return `
[![GitHub license](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-${licenseYesNo(license)}.svg)](https://${git}.com/${github}/${repoName}/main/LICENSE)

# ${title}

${nameSentence(name)} Welcome to my ${title} node app.


## Description

${description}


## Table of Contents

* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)${testingTOC(tests)}
* [License](#license)
* [Questions](#questions)${commentsTOC(comments)}


## Language(s)

Language(s) used in this project:
${languages}


## Installation

> ${installation}


## Usage

${usageContent}

> ${usageAdd(usageAddOn, screenshotPath, videoLink)}


## Contributing

${contribute}    


${testingSection(tests)}


## License

This project is covered under the license of [${license}](https://${git}.com/${github}/${repoName}/main/LICENSE)


## Questions

You can find my repository URL [Here](https://${git}.com/${github})

${siteURL(repoSiteURL)}

If you have additional questions, you may reach me at my E-mail Address: ${email}


${commentSection(comments)}
`
}