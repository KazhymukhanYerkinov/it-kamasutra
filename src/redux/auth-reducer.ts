import { FormAction, stopSubmit } from "redux-form";
import { ResultCodesEnum, ResultCodeForCaptchaEnum } from "../api/api";
import { authAPI } from "../api/auth-api";
import { securityAPI } from "../api/security-api";
import { BaseThunkType, InferActionsTypes } from "./redux-store";




let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,

  captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>


const authReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'auth/SET_USER_DATA':
    case 'auth/GET_CAPTCHA_URL_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    

    default:
      return state;
  }
}


export const actions = {
  setAuthUserData: (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: 'auth/SET_USER_DATA', payload: { userId, email, login, isAuth }
  } as const),

  getCaptchUrlSuccess: (captchaUrl: string) => ({
    type: 'auth/GET_CAPTCHA_URL_SUCCESS', payload: {captchaUrl} 
  } as const)  
}


export const getAuthUserData = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, email, login } = meData.data;
    dispatch(actions.setAuthUserData(id, email, login, true));
  }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch) => {
  let data  = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  }
  else {
    if (data.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }

    let message = data.messages.length > 0 ? data.messages[0]:'Some error';
    dispatch(stopSubmit("login", {_error: message}));
  }
}

export const logout = (): ThunkType => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch: any) => {
  const data = await securityAPI.getCaptchaUrl();
  const captchaUrl = data.url;
  dispatch(actions.getCaptchUrlSuccess(captchaUrl));
}

export default authReducer;