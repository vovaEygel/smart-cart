// import { authHeader } from '../_helpers';

export const UserService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
};

function login(username, password) {

}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {}

function getById(id) {}

function register(user) {}

function update(user) {}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {

}



function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
// import { StorageService } from './storage.service.js'
// import { UtilService } from './util.service.js'

// var loggedInUser = null
// var KEY = 'LOGGED_IN_USER';

// async function getUser() {
//     // although we get the user from the localstorage, this function is set as async.
//     loggedInUser = await StorageService.load(KEY);
//     return loggedInUser ? loggedInUser : null;
// }

// function signup(newUserName) {
//     loggedInUser = {
//         name: newUserName,
//     };
//     StorageService.save(KEY, loggedInUser);
//     return loggedInUser;
// }

// export const UserService = {
//     getUser,
//     signup
// }