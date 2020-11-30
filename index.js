const { readmeQuestions } = require('./src/readmeQuestions');
const readmeGenerator = require('./src/readmeGenerator');

readmeQuestions()
    .then(answers => readmeGenerator(answers))
    .then(md => console.log(md));
