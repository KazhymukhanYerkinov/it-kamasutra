import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { AppStateType } from '../../redux/redux-store';
import { required } from '../../utils/validators';
import { CreateField, Input } from '../../common/FormControl/FormControl';
import { login } from '../../redux/auth-reducer';

import cls from '../../common/FormControl/FormControl.module.css';




type LoginFormOwnProps = {
  captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      { CreateField<LoginFormValuesTypekeys>("Email", 'email', [required], Input, ) }
      { CreateField<LoginFormValuesTypekeys>("Password", "password", [required], Input, { type:  "password"}) }
      { CreateField<LoginFormValuesTypekeys>(undefined, "rememberMe", [], 'input', { type:  "checkbox"}, "remember me") }

      { props.captchaUrl && <img src = {props.captchaUrl} alt = ''/> }
      { props.captchaUrl && CreateField<LoginFormValuesTypekeys>("Symbols from image", "captcha", [required], Input, {})  }

      {props.error && 
      <div className = {cls.formSummaryError}>
        {props.error}
      </div>}

      <div>
        <button type = 'submit' >Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)






type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}

type LoginFormValuesTypekeys = Extract<keyof LoginFormValuesType, string>

export const LoginPage: React.FC = () => {
  const captchaUrl = useSelector( (state: AppStateType) => state.authPage.captchaUrl )
  const isAuth = useSelector( (state: AppStateType) => state.authPage.isAuth )

  const dispatch = useDispatch()


  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
  }

  if (isAuth) {
    return <Redirect to = '/profile' />
  }

  return (
    <div>
      <h1> Login </h1>
      <LoginReduxForm onSubmit = { onSubmit } captchaUrl = { captchaUrl }/>
    </div>
  )
}