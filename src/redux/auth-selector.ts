import { AppStateType } from "./redux-store";

export const selectIsAuth = (state: AppStateType) => {
    return state.authPage.isAuth
}

export const selectCurrentUserLogin = (state: AppStateType) => {
    return state.authPage.login
}