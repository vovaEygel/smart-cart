import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { users } from './reducers/UserReducer.js';
import ProductReducer from './reducers/ProductReducer.js'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    users: users,
    product: ProductReducer,
})

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )));

export default store