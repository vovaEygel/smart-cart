import { UserService } from '../../service/user.service.js';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const history = createBrowserHistory();
export const userActions = {
    login,
    logout,
    register,
    getAll,
    delete: _delete
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        UserService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: 'LOGIN_REQUEST', user } }

    function success(user) { return { type: 'LOGIN_SUCCESS', user } }

    function failure(error) { return { type: 'LOGIN_FAILURE', error } }
}

function logout() {
    UserService.logout();
    return { type: 'LOGOUT' };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        UserService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/login');
                    // dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    // dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: 'REGISTER_REQUEST', user } }

    function success(user) { return { type: 'REGISTER_SUCCESS', user } }

    function failure(error) { return { type: 'REGISTER_FAILURE', error } }
}

function getAll() {
    return dispatch => {
        dispatch(request());

        UserService.getAll()
            .then(
                users => dispatch(success(users)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: 'GET_USERS_REQUEST' } }

    function success(users) { return { type: 'GET_USERS_SUCCESS', users } }

    function failure(error) { return { type: 'GET_USERS_FAILURE', error } }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        UserService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: 'DELETE_REQUEST', id } }

    function success(id) { return { type: 'DELETE_SUCCESS', id } }

    function failure(id, error) { return { type: 'DELETE_FAILURE', id, error } }
}