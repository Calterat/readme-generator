const expect = require('chai').expect;
const { validateUser } = require('./validations');
const fetch = require('node-fetch');
const fs = require('fs');

const fileContent = 'boop';

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

describe('File Writing Function', function() {
    it('Write README File', function() {
        fs.writeFile(`./dist/README.md`, fileContent, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
})