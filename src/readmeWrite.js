// brings in the File Sytems module
const fs = require('fs');


// Writes the file
const readmeWrite = fileContent => {
    fs.writeFile(`./dist/README.md`, fileContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// exports function
module.exports = { readmeWrite };