import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import AppReducer from './reducers/AppReducer.js';
import ProductReducer from './reducers/ProductReducer.js'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    app: AppReducer,
    product: ProductReducer
        // users: UserReducer,
})

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store