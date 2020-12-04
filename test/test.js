const expect = require('chai').expect;
const { validateUser } = require('./validations');
const fetch = require('node-fetch');

describe('validateUser()', function() {
    it('should fetch data from GitHub API', function () {
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