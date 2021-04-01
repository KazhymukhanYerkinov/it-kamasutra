import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { reduxForm } from 'redux-form';

import { required } from '../../utils/validators';
import { CreateField, Input } from '../../common/FormControl/FormControl';
import { login } from '../../redux/auth-reducer';

import cls from '../../common/FormControl/FormControl.module.css';





const LoginForm = (props) => {
  return (
    <form onSubmit = {props.handleSubmit}>
      { CreateField("Email", "email", [required], Input, ) }
      { CreateField("Password", "password", [required], Input, { type:  "password"}) }
      { CreateField(null, "rememberMe", null, 'input', { type:  "checkbox"}, "remember me") }

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

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  }

  if (props.isAuth) {
    return <Redirect to = '/profile' />
  }

  return (
    <div>
      <h1> Login </h1>
      <LoginReduxForm onSubmit = { onSubmit } />
    </div>
  )
}

let mapStateToProps = (state) => ({
  isAuth: state.authPage.isAuth
})

export default connect(mapStateToProps, { login })(Login);