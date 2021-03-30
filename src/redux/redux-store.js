import { applyMiddleware, combineReducers, createStore } from 'redux'

import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import { reducer as formReducer } from 'redux-form';

import thunkMiddlewere from 'redux-thunk';




let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authPage: authReducer,
    appPage: appReducer,
    form: formReducer,

});



let store = createStore(reducers, applyMiddleware(thunkMiddlewere));
window.store = store;

export default store;