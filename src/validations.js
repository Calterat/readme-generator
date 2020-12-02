const fetch = require('node-fetch');

async function validateUser(user) {
    fetch(`https://api.github.com/users/${user}`)
        .then(response => {
            if (response.ok) {
                return true;
            } else {
                console.log('This is not a valid GitHub username!')
                return false;
            }
        })
}

module.exports = { validateUser };