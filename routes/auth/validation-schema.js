const { find } = require('../../db/model/credentials.js');
const Credentials = require('../../db/model/credentials.js');

const register = {
    username: {
        custom: {
            options: async value => {
                const foundUser = await Credentials.find({ username: value });
                if (foundUser.length > 0) {
                    return Promise.reject('Username already in use');
                }
            }
        }
    },
    password: {
        custom: {
            options: async value => {
                const findUpperCase = /[A-Z]/;
                const findLowerCase = /[a-z]/;
                const findNumber = /[0-9]/;
                if(value.length < 7){
                    return Promise.reject('Password must be at least 7 characters long');
                }
                else if(findUpperCase.exec(value) === null) {
                    return Promise.reject('Password must contain at least 1 uppercase letter [A-Z]');
                } 
                else if (findLowerCase.exec(value) === null) {
                    return Promise.reject('Password must contain at least 1 lowercase letter [a-z]');
                }
                else if (findNumber.exec(value) === null) {
                    return Promise.reject('Password must contain at least 1 number [0-9]');
                }
            }
        }
    },
    email: {
        normalizeEmail: true,
        custom: {
            options: async value => {
                const foundEmail = await Credentials.find({ email: value });
                if (foundEmail.length > 0) {
                    return Promise.reject('Email already in use');
                }
            }
        }
    }
}

module.exports = {
    register
}