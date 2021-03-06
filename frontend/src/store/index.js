import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import spotsReducer from './spots';
import apiKeysReducer from './apiKeys';
import componentReducer from './components'
import usersReducer from './users'
import appReducer from './app'

const rootReducer = combineReducers({
    session: sessionReducer,
    spots: spotsReducer,
    keys: apiKeysReducer,
    components: componentReducer,
    users: usersReducer,
    app: appReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = componseEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = preloadedState => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
