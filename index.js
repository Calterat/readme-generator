const { readmeQuestions } = require('./src/readmeQuestions.js');

readmeQuestions()
    .then(answers => console.log(answers));
