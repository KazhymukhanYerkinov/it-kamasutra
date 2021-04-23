import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'

import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import { reducer as formReducer } from 'redux-form';

import thunkMiddlewere, { ThunkAction } from 'redux-thunk';




let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authPage: authReducer,
    appPage: appReducer,
    form: formReducer,

});

type RootRducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootRducerType>

type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U:never
export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddlewere)));


export default store;