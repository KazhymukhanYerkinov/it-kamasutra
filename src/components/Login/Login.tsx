import React from 'react';
import { connect } from 'react-redux';
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


type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
}


type LoginFormValuesType = {
  captcha: string
  rememberMe: boolean
  password: string
  email: string
}

type LoginFormValuesTypekeys = Extract<keyof LoginFormValuesType, string>

const Login: React.FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  }

  if (props.isAuth) {
    return <Redirect to = '/profile' />
  }

  return (
    <div>
      <h1> Login </h1>
      <LoginReduxForm onSubmit = { onSubmit } captchaUrl = { props.captchaUrl }/>
    </div>
  )
}

let mapStateToProps = (state: AppStateType):MapStatePropsType => ({
  isAuth: state.authPage.isAuth,
  captchaUrl: state.authPage.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login);