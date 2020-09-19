import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromisse from 'redux-promise';
import accountReducer from './reducers/AccountReducer';
import linkReducer from './reducers/LinkReducer';

const reducers = combineReducers({
    account: accountReducer,
    link: linkReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPromisse));

export default store;