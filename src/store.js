import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromisse from 'redux-promise';
import signInReducer from './screens/SignIn/SignInReducer';

const reducers = combineReducers({
    signIn: signInReducer,
});

const store = createStore(reducers, applyMiddleware(ReduxPromisse));

export default store;