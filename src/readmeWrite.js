const fs = require('fs');

const readmeWrite = fileContent => {
    fs.writeFile(`./dist/README.md`, fileContent, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

module.exports = { readmeWrite };