const usageTOB = () => `* [Usage](#usage)`;
const usageContent = () => `## Usage`;

module.exports = answers => {

    const { name, github, title, description, languages, license, installCommand, testCommand, userRepo, userContribute } = answers;


    return `
        # ${title}

        ## Description

        Welcome to my ${title} node app. My name is ${name} and my GitHub Username is ${github}.

        ${description}


        ## Table of Contents

        * [Languages](#languages)
        * [License](#license)
        * [Installation](#installation)
        ${usageTOB()}
        * [Tesing](#testing)
        * [Repository](#repository)
        * [Contributing](#contributing)
        

        ## Languages

        Languages used in this project:
        ${languages}


        ## Installation

        ${installCommand}


        ${usageContent()}


        ## Testing

        ${testCommand}


        ## Repository

        ${userRepo}


        ## Contributing

        ${userContribute}    

        ## License

        ${license}
    `
}