const fetch = require('node-fetch');

const validateUser = (user, result) => {
    return new Promise(() => {
        fetch(`https://api.github.com/users/${user}`)
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
}

module.exports = { validateUser };