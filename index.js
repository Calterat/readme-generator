const { readmeQuestions } = require('./src/readmeQuestions');
const readmeGenerator = require('./src/readmeGenerator');
const { readmeWrite } = require('./src/readmeWrite');

readmeQuestions()
    .then(answers => readmeGenerator(answers))
    .then(md => readmeWrite(md));