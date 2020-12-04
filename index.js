// import the inquirer questions
const { readmeQuestions } = require('./src/readmeQuestions');
// import the function that writes the README file
const readmeGenerator = require('./src/readmeGenerator');
// inports the function that writes the README data
const { readmeWrite } = require('./src/readmeWrite');

// gives banner that introduces the README app
const intro = () => {
    return console.log(`
======================================================
Welcome to my
______ _____ ___ _________  ________                  
| ___ |  ___/ _ \\|  _  |  \\/  |  ___|                 
| |_/ | |__/ /_\\ | | | | .  . | |__                   
|    /|  __|  _  | | | | |\\/| |  __|                  
| |\\ \\| |__| | | | |/ /| |  | | |___                  
\\_____\\_______ |______________\\____/_____ ___________ 
|  __ |  ___| \\ | |  ___| ___ \\/ _ |_   _|  _  | ___ \\
| |  \\| |__ |  \\| | |__ | |_/ / /_\\ \\| | | | | | |_/ /
| | __|  __|| . ' |  __||    /|  _  || | | | | |    / 
| |_\\ | |___| |\\  | |___| |\\ \\| | | || | \\ \\_/ | |\\ \\ 
 \\____\\____/\\_| \\_\\____/\\_| \\_\\_| |_/\\_/  \\___/\\_| \\_|
======================================================

Some of these questions are not required, so you could
just hit 'ENTER' to pass them. However, some of these
are NOT negotiable. You'll be prompted again if you try
to pass them.

    `)
}

intro();
readmeQuestions()
    .then(answers => readmeGenerator(answers))
    .then(md => readmeWrite(md));