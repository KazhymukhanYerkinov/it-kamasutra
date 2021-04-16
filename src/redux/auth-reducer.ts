import { stopSubmit } from "redux-form";
import { authAPI, ResultCodesEnum, ResultCodeForCaptcha, securityAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';



let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,

  captchaUrl: null as string | null,
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case GET_CAPTCHA_URL_SUCCESS:
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      }
    

    default:
      return state;
  }
}

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean | null
}

type SetAuthUserDatActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean | null): SetAuthUserDatActionType => ({
  type: SET_USER_DATA, payload: { userId, email, login, isAuth } });


type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string }
}

export const getCaptchUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,payload: {captchaUrl} });

export const getAuthUserData = () => async (dispatch: any) => {
  let meData = await authAPI.me();
  if (meData.resultCode === ResultCodesEnum.Success) {
    let { id, email, login } = meData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
  let data  = await authAPI.login(email, password, rememberMe, captcha);
  if (data.resultCode === ResultCodesEnum.Success) {
    dispatch(getAuthUserData());
  }
  else {
    if (data.resultCode === ResultCodeForCaptcha.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }

    let message = data.messages.length > 0 ? data.messages[0]:'Some error';
    dispatch(stopSubmit("login", {_error: message}));
  }
}

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(setAuthUserData(null, null, null, false));
  }
}

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchUrlSuccess(captchaUrl));



}

export default authReducer;