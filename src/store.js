import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromisse from 'redux-promise';
import accountReducer from './reducers/AccountReducer'

const reducers = combineReducers({
    account: accountReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromisse));

export default store;