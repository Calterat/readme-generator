// imports Chai module
const expect = require('chai').expect;
// inports Window.fetch module
const fetch = require('node-fetch');
// imports File System module
const fs = require('fs');

// creates standin data for the writefile function
const fileContent = 'boop';

// tests the window.fetch to GitHub API
describe('Validate Git Hub Username', function() {
    it('Should fetch data from GitHub API', function() {
        fetch(`https://api.github.com/users/Calterat`)
            .then(response => {
                if (response.ok) {
                    result(true);
                    return;
                } else {                                   
                    result(' - Wrong! Try again, because this username does not checkout! Backspace this trash out and retype.');
                    return;
                }
            })
    })
})

// test the File System module and writing a file
describe('File Writing Function', function() {
    it('Write README File', function() {
        fs.writeFile(`./dist/README.md`, fileContent, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
})